// German C1, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Words that build words',
  goal: 'Understand and create new words from prefixes, suffixes and compounds. Learn the meaning of ver-, ent-, er-, zer- and be-, separable and inseparable verbs, noun and adjective suffixes, the linking s, and the use of loanwords.',
  art: 'snail',
  tags: { skills: ['vocabulary', 'grammar', 'reading', 'writing'], topics: ['word formation', 'prefixes', 'suffixes', 'compounds', 'loanwords'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Vorsilben bei Verben',
      about: 'Use verb prefixes and tell separable and inseparable verbs apart.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A prefix changes the meaning of a verb. **Ver-** often shows a **change, a mistake or going away**: *verkaufen, sich verlaufen, verbrauchen*. **Ent-** shows **removal or a start**: *entfernen, entstehen*. **Er-** shows a **result or an achievement**: *erreichen, erklären, erfinden*. **Zer-** means **breaking into pieces**: *zerbrechen, zerreißen, zerstören*. **Be-** makes a verb take an **accusative object**: *besteigen, bearbeiten, bewohnen*. The prefixes **be-, ent-, er-, ge-, ver-, zer-** are always **inseparable**: the **Partizip II has no ge-**: *erreicht, verkauft, zerbrochen*.' },
          { t: 'table', caption: 'Inseparable prefixes', explain: ['head', 'col1'], head: ['Prefix', 'Meaning', 'Examples'], rows: [
            ['ver-', 'change, mistake, going away', 'verkaufen, sich verlaufen, verbrauchen'],
            ['ent-', 'removal, a start', 'entfernen, entstehen'],
            ['er-', 'result, achievement', 'erreichen, erklären, erfinden'],
            ['zer-', 'breaking into pieces', 'zerbrechen, zerreißen, zerstören'],
            ['be-', 'makes an accusative object', 'besteigen, bearbeiten, bewohnen'],
          ] },
          { t: 'tip', art: 'owl', md: 'Learn the Partizip II with each new verb: *verkauft, entfernt, erreicht, zerbrochen, bestiegen*. Never add **ge-** to a verb with these prefixes: not *geerreicht*, not *gezerbrochen*. The stress is on the **stem**, not on the prefix: *erREIchen*, *zerBRECHen*.' },
        ],
        [
          { t: 'text', md: 'Some prefixes are **both** separable and inseparable, and the meaning changes: **über-, unter-, um-, durch-, wieder-**. When the prefix is **stressed**, the verb is **separable**: *ÜBERsetzen* (to ferry across) → *Er setzt uns über. Er hat uns übergesetzt.* When the **stem** is stressed, the verb is **inseparable**: *überSETzen* (to translate) → *Er übersetzt den Text. Er hat den Text übersetzt.*' },
          { t: 'table', caption: 'Separable or inseparable', explain: ['head'], head: ['Separable (stressed prefix)', 'Inseparable (stressed stem)'], rows: [
            ['Der Fährmann setzt uns über.', 'Er übersetzt den Text.'],
            ['Er fährt das Schild um.', 'Er umfährt das Schild.'],
            ['Wir fahren durch.', 'Die Polizei durchsucht das Haus.'],
          ] },
          { t: 'examples', items: [
            { s: 'Er hat den Text **übersetzt**.', n: 'Inseparable: no *ge-*.' },
            { s: 'Der Fährmann hat uns **übergesetzt**.', n: 'Separable: *ge-* in the middle.' },
            { s: 'Sie hat die Vase **zerbrochen**.', n: 'Inseparable.' },
            { s: 'Wir haben das Ziel **erreicht**.', n: 'Inseparable.' },
            { s: 'Sie hat den Berg **bestiegen**.', n: 'Inseparable.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the Partizip II.', items: [
            { q: 'Er hat den Text ___. (übersetzen, translate)', a: ['übersetzt'], why: 'Inseparable: *übersetzt*.' },
            { q: 'Der Fährmann hat uns ___. (übersetzen, ferry across)', a: ['übergesetzt'], why: 'Separable: *übergesetzt*.' },
            { q: 'Sie hat den Berg ___. (besteigen)', a: ['bestiegen'], why: 'Inseparable: *bestiegen*.' },
            { q: 'Die Vase ist ___. (zerbrechen)', a: ['zerbrochen'], why: 'Inseparable: *zerbrochen*.' },
            { q: 'Wir haben das Ziel ___. (erreichen)', a: ['erreicht'], why: 'Inseparable: *erreicht*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the prefix with its meaning.', pairs: [
            ['zer-', 'breaking into pieces'],
            ['er-', 'result, achievement'],
            ['ent-', 'removal, a start'],
            ['be-', 'makes an accusative object'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Put the sentence in the Perfekt.', items: [
            { q: 'Er übersetzt den Text.', cue: 'Er hat', a: ['Er hat den Text übersetzt.'], why: 'Inseparable: no *ge-*.' },
            { q: 'Er setzt uns über.', cue: 'Er hat', a: ['Er hat uns übergesetzt.'], why: 'Separable: *ge-* in the middle.' },
            { q: 'Sie zerbricht die Vase.', cue: 'Sie hat', a: ['Sie hat die Vase zerbrochen.'], why: 'Inseparable: *zerbrochen*.' },
            { q: 'Wir erreichen das Ziel.', cue: 'Wir haben', a: ['Wir haben das Ziel erreicht.'], why: 'Inseparable: *erreicht*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Separable or inseparable? Sort the verbs.', groups: ['separable', 'inseparable'], explain: ['groups'], items: [
            { s: 'ankommen', g: 0, why: '*An-* is separable.' },
            { s: 'aufstehen', g: 0, why: '*Auf-* is separable.' },
            { s: 'mitnehmen', g: 0, why: '*Mit-* is separable.' },
            { s: 'verstehen', g: 1, why: '*Ver-* is inseparable.' },
            { s: 'erklären', g: 1, why: '*Er-* is inseparable.' },
            { s: 'zerstören', g: 1, why: '*Zer-* is inseparable.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Er hat den Text [übergesetzt].', a: ['übersetzt'], why: 'Inseparable: *übersetzt*.' },
            { s: 'Sie hat die Vase [gezerbrochen].', a: ['zerbrochen'], why: 'Never *ge-* with *zer-*.' },
            { s: 'Wir haben das Ziel [geerreicht].', a: ['erreicht'], why: 'Never *ge-* with *er-*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Er hat den Text übersetzt.', why: 'Inseparable: no *ge-*.' },
            { a: 'Sie hat die Vase zerbrochen.', why: '*Zerbrochen* at the end.' },
            { a: 'Wir haben das Ziel erreicht.', why: '*Erreicht* at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Nachsilben und Komposita',
      about: 'Build nouns and adjectives with suffixes, and join nouns in compounds.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Suffixes build **nouns** and **adjectives** and fix the **gender**. **-ung** makes a feminine noun from a verb: *lösen → die Lösung*. **-heit**, **-keit** and **-igkeit** make feminine nouns from adjectives: *frei → die Freiheit, möglich → die Möglichkeit*. **-schaft** makes a feminine noun for a group or a state: *die Freundschaft, die Gesellschaft*. **-nis** makes neuter nouns, mostly: *das Ergebnis, das Erlebnis*. Adjective suffixes: **-bar** (*can be …ed*: *lesbar, machbar*), **-lich** (*täglich, freundlich*), **-los** (*without*: *arbeitslos, hilflos*), **-voll** (*full of*: *sinnvoll*) and **-sam** (*sparsam*).' },
          { t: 'table', caption: 'Suffixes', explain: ['head', 'col1'], head: ['Suffix', 'Makes', 'Examples'], rows: [
            ['-ung', 'a feminine noun from a verb', 'die Lösung, die Erfahrung'],
            ['-heit / -keit / -igkeit', 'a feminine noun from an adjective', 'die Freiheit, die Möglichkeit'],
            ['-schaft', 'a feminine noun: a group or a state', 'die Freundschaft, die Gesellschaft'],
            ['-nis', 'mostly a neuter noun', 'das Ergebnis, das Erlebnis'],
            ['-bar', 'an adjective: it can be …ed', 'lesbar, machbar'],
            ['-los', 'an adjective: without', 'arbeitslos, hilflos'],
            ['-voll', 'an adjective: full of', 'sinnvoll, liebevoll'],
            ['-sam', 'an adjective: with the quality', 'sparsam, achtsam'],
          ] },
          { t: 'tip', art: 'owl', md: 'A **compound** takes its **gender** and its **plural** from the **last** noun: *die Zeit* + *der Tag* → *der Arbeitstag*. Many compounds need a **linking sound**: **-s-** (*die Arbeitszeit, der Liebesbrief*), **-(e)n-** (*die Blumenvase*) or nothing (*die Haustür*). There is no sure rule, so learn the compound as a whole. **-nis** is not always neuter: *die Erkenntnis*, *die Kenntnis*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Die **Lösung** des Problems war schwierig.', n: '*lösen* → *die Lösung*.' },
            { s: 'Er schätzt die **Freiheit**.', n: '*frei* → *die Freiheit*.' },
            { s: 'Die **Arbeitszeit** ist flexibel.', n: 'A compound with *-s-*.' },
            { s: 'Die **Blumenvase** steht auf dem Tisch.', n: 'A compound with *-n-*.' },
            { s: 'Das Ergebnis ist **sinnvoll**.', n: '*Sinn* + *-voll*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Noun suffix or adjective suffix? Sort the suffixes.', groups: ['noun suffix', 'adjective suffix'], explain: ['groups'], items: [
            { s: '-ung', g: 0, why: 'It makes nouns.' },
            { s: '-keit', g: 0, why: 'It makes nouns.' },
            { s: '-schaft', g: 0, why: 'It makes nouns.' },
            { s: '-bar', g: 1, why: 'It makes adjectives.' },
            { s: '-los', g: 1, why: 'It makes adjectives.' },
            { s: '-voll', g: 1, why: 'It makes adjectives.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Build the word.', items: [
            { q: 'Die ___ des Problems war schwierig.', base: 'lösen', a: ['Lösung'], why: '*-ung* makes a noun from a verb.' },
            { q: 'Er schätzt die ___.', base: 'frei', a: ['Freiheit'], why: '*-heit* makes a noun from an adjective.' },
            { q: 'Die ___ zwischen uns ist wichtig.', base: 'Freund', a: ['Freundschaft'], why: '*-schaft* makes a noun for a state.' },
            { q: 'Der Mann ist ___. Er hat keine Hilfe.', base: 'Hilfe', a: ['hilflos'], why: '*-los* = without.' },
            { q: 'Die Idee ist ___.', base: 'Sinn', a: ['sinnvoll'], why: '*-voll* = full of.' },
            { q: 'Er ist sehr ___. Er gibt wenig Geld aus.', base: 'sparen', a: ['sparsam'], why: '*-sam* gives the quality.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which article?', items: [
            { q: '___ Lösung', o: ['die', 'der', 'das'], why: '*-ung* nouns are feminine.' },
            { q: '___ Ergebnis', o: ['das', 'die', 'der'], why: '*-nis* nouns are mostly neuter.' },
            { q: '___ Arbeitstag', o: ['der', 'die', 'das'], why: 'The gender comes from *der Tag*.' },
            { q: '___ Freundschaft', o: ['die', 'der', 'das'], why: '*-schaft* nouns are feminine.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the linking sound.', items: [
            { q: 'die Arbeit___zeit', a: ['s'], why: 'The compound is *die Arbeitszeit*.' },
            { q: 'der Liebe___brief', a: ['s'], why: 'The compound is *der Liebesbrief*.' },
            { q: 'die Blume___vase', a: ['n'], why: 'The compound is *die Blumenvase*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ich schätze die [Freundheit].', a: ['Freundschaft'], why: '*-schaft* makes the noun.' },
            { s: 'Die [Arbeitzeit] ist flexibel.', a: ['Arbeitszeit'], why: 'The compound needs the linking *-s-*.' },
            { s: 'Die [Blumvase] steht auf dem Tisch.', a: ['Blumenvase'], why: 'The compound needs the linking *-n-*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Die Lösung des Problems war schwierig.', why: 'Subject, *war*, adjective.' },
            { a: 'Die Arbeitszeit ist sehr flexibel.', why: 'Subject, *ist*, adverb, adjective.' },
            { a: 'Er schätzt die Freiheit sehr.', why: 'Subject, verb, object, adverb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Fremdwörter und Denglisch',
      about: 'Understand loanwords, false anglicisms and word fields.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'German takes many words from other languages. Many come from **Latin and Greek**: *die Information, das System, die Analyse*. Many recent ones come from **English**: *das Meeting, der Computer, downloaden*. This mix is sometimes called **Denglisch**. Some words **look English but exist only in German** (pseudo-anglicisms): a **Handy** is a mobile phone, a **Beamer** is a projector, a **Smoking** is a dinner jacket, and an **Oldtimer** is a vintage car. For many English words there is a German alternative: *das Meeting* → *die Besprechung*, *downloaden* → *herunterladen*, *das Update* → *die Aktualisierung*.' },
          { t: 'table', caption: 'Denglisch and German', explain: ['head'], head: ['Denglisch', 'German alternative'], rows: [
            ['das Meeting', 'die Besprechung'],
            ['downloaden', 'herunterladen'],
            ['das Update', 'die Aktualisierung'],
            ['der Workshop', 'die Arbeitsgruppe, das Seminar'],
            ['die Deadline', 'die Frist, der Termin'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not use a **Handy**, a **Beamer** or a **Smoking** with its English meaning when you speak English: these are **false anglicisms**. In Switzerland, people say **Natel** for a mobile phone, and in Austria **Handy** is also used. In German, English verbs take the German endings: *ich downloade, er hat gedownloadet* (many people avoid this form in writing).' },
        ],
        [
          { t: 'text', md: 'A **word field** (Wortfeld) is a group of words with a similar meaning and **different shades**. For **sagen** you can choose **erzählen** (to tell a story), **behaupten** (to claim, with doubt), **mitteilen** (to inform, formal), **erklären** (to explain) and **bemerken** (to remark). Choose the verb that fits the **situation**. To **guess a new word**, break it into its parts: *der Kühlschrank* = *kühl* (cool) + *der Schrank* (cupboard).' },
          { t: 'examples', items: [
            { s: 'Er **behauptet**, dass er nichts gewusst hat.', n: 'He claims it, with doubt.' },
            { s: 'Der Chef **teilt** uns die Entscheidung **mit**.', n: 'To inform, formal.' },
            { s: 'Sie **erzählt** eine Geschichte.', n: 'To tell a story.' },
            { s: 'Sie **erklärt** uns die Regel.', n: 'To explain.' },
            { s: 'Ein **Beamer** ist ein Projektor.', n: 'A false anglicism.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the English-looking word with its real meaning.', pairs: [
            ['das Handy', 'the mobile phone'],
            ['der Beamer', 'the projector'],
            ['der Smoking', 'the dinner jacket'],
            ['der Oldtimer', 'the vintage car'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Ein Beamer ist ein ___.', o: ['Projektor', 'Fotograf', 'Anzug'], why: 'A *Beamer* is a projector.' },
            { q: 'Er ___, dass er nichts gewusst hat. (he claims it)', o: ['behauptet', 'erzählt', 'erklärt'], why: '*Behaupten* = to claim, with doubt.' },
            { q: 'Der Chef ___ uns die Entscheidung mit. (formal)', o: ['teilt', 'sagt', 'redet'], why: '*Mitteilen* is the formal verb for informing.' },
            { q: 'Das Meeting heißt auf Deutsch ___.', o: ['Besprechung', 'Sitzung', 'Mitteilung'], why: '*Die Besprechung* is the usual German alternative.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Das Update heißt auf Deutsch die ___. (aktualisieren)', a: ['Aktualisierung'], why: '*-ung* makes a noun from a verb.' },
            { q: 'Das Wort ___ bedeutet im Deutschen Mobiltelefon. (Handy, Beamer or Oldtimer)', a: ['Handy'], why: 'A *Handy* is a mobile phone.' },
            { q: 'Ein ___ ist im Deutschen ein Projektor. (Handy, Beamer or Oldtimer)', a: ['Beamer'], why: 'A *Beamer* is a projector.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which kind of word is it? Sort the words.', groups: ['Denglisch', 'German alternative'], explain: ['groups'], items: [
            { s: 'das Meeting', g: 0, why: 'An English word used in German.' },
            { s: 'die Besprechung', g: 1, why: 'The German word.' },
            { s: 'downloaden', g: 0, why: 'An English verb with a German ending.' },
            { s: 'herunterladen', g: 1, why: 'The German verb.' },
            { s: 'die Deadline', g: 0, why: 'An English word used in German.' },
            { s: 'die Frist', g: 1, why: 'The German word.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ein Beamer ist ein Projektor.', why: 'A definition with *ist*.' },
            { a: 'Er behauptet, dass er nichts gewusst hat.', why: '*Behaupten* + *dass*.' },
            { a: 'Das Meeting heißt auf Deutsch Besprechung.', why: 'The English word first, then the German.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Wie sich das Deutsche verändert',
      about: 'Read an essay on how German changes.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Eine Sprache im Wandel', md: 'Sprachen verändern sich ständig, und das Deutsche macht dabei keine Ausnahme. Viele Wörter kommen aus anderen Sprachen: Wer ein Meeting hat, trifft sich zu einer Besprechung, und wer etwas „downloadet“, lädt es herunter. Manche dieser Wörter sehen englisch aus, existieren aber so nur im Deutschen: Ein Handy ist ein Mobiltelefon, ein Beamer ein Projektor.\n\nDas Deutsche schafft aber auch neue Wörter aus eigenen Bausteinen. Mit Vorsilben und Nachsilben entstehen aus einem Verb viele Wörter: Aus erfinden wird die Erfindung, der Erfinder und erfinderisch. Zusammensetzungen sind besonders beliebt: Aus Lade und Kabel wird das Ladekabel. Wer ein neues Wort hört, kann seine Bedeutung oft erraten, wenn er die Teile erkennt.\n\nManche Menschen beklagen, die Sprache verarme durch Fremdwörter. Andere sehen darin eine Bereicherung. Sicher ist: Eine lebendige Sprache lässt sich nicht verbieten, sie lässt sich nur beobachten.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Das Deutsche verändert sich nicht.', a: 'f', why: '*Das Deutsche macht dabei keine Ausnahme.*' },
            { q: 'Ein Handy ist im Deutschen ein Mobiltelefon.', a: 't', why: '*Ein Handy ist ein Mobiltelefon.*' },
            { q: 'Ein Beamer ist ein Auto.', a: 'f', why: '*Ein Beamer ein Projektor.*' },
            { q: 'Aus Lade und Kabel entsteht das Wort Ladekabel.', a: 't', why: '*Aus Lade und Kabel wird das Ladekabel.*' },
            { q: 'Alle Menschen halten Fremdwörter für schlecht.', a: 'f', why: 'Others see them as an enrichment.' },
            { q: 'Der Autor lebt in der Schweiz.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Was bedeutet downloaden auf Deutsch?', o: ['Herunterladen.', 'Hochladen.', 'Löschen.'], why: '*Wer etwas „downloadet“, lädt es herunter.*' },
            { q: 'Woraus entsteht das Wort Ladekabel?', o: ['Aus Lade und Kabel.', 'Aus laden und kaufen.', 'Aus Kabel und Büro.'], why: '*Aus Lade und Kabel wird das Ladekabel.*' },
            { q: 'Wie sehen manche Menschen Fremdwörter?', o: ['Als Bereicherung.', 'Als Pflicht.', 'Als Gesetz.'], why: '*Andere sehen darin eine Bereicherung.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words built from a verb with a prefix or a suffix.', items: [
            { s: 'Aus erfinden wird die [Erfindung], der [Erfinder] und [erfinderisch].', why: 'Three words from *erfinden*, with *-ung*, *-er* and *-isch*.' },
            { s: 'Manche beklagen, die Sprache [verarme]; andere sehen darin eine [Bereicherung].', why: '*Ver-* + *arm*; *be-* + *reichern* + *-ung*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Aus Lade und Kabel wird das ___.', a: ['Ladekabel'], why: 'A compound of two nouns.' },
            { q: 'Ein ___ ist im Deutschen ein Mobiltelefon.', a: ['Handy'], why: 'A false anglicism.' },
            { q: 'Aus erfinden wird die ___. (noun)', a: ['Erfindung'], why: '*-ung* makes a noun from a verb.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Sprachen verändern sich ständig.', why: 'Subject, *sich*, adverb.' },
            { a: 'Eine lebendige Sprache lässt sich nicht verbieten.', why: '*Sich lassen* + infinitive.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Er hat den Text ___. (translate)', o: ['übersetzt', 'übergesetzt', 'geübersetzt'], why: 'Inseparable: *übersetzt*.' },
      { q: 'Which prefix means breaking into pieces?', o: ['zer-', 'ent-', 'be-'], why: '*Zer-* = breaking into pieces.' },
      { q: '___ Freundschaft', o: ['die', 'der', 'das'], why: '*-schaft* nouns are feminine.' },
      { q: 'Ein Beamer ist ein ___.', o: ['Projektor', 'Fotograf', 'Anzug'], why: 'A *Beamer* is a projector.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Die Vase ist ___. (zerbrechen)', a: ['zerbrochen'], why: 'Inseparable: *zerbrochen*.' },
      { q: 'die Arbeit___zeit (linking sound)', a: ['s'], why: 'The compound is *die Arbeitszeit*.' },
      { q: 'Aus erfinden wird die ___.', a: ['Erfindung'], why: '*-ung* makes a noun from a verb.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the suffix with its meaning.', pairs: [
      ['-ung', 'makes a feminine noun from a verb'],
      ['-los', 'without'],
      ['-bar', 'it can be …ed'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Put the sentence in the Perfekt.', items: [
      { q: 'Sie zerbricht die Vase.', cue: 'Sie hat', a: ['Sie hat die Vase zerbrochen.'], why: 'Inseparable: *zerbrochen*.' },
      { q: 'Er setzt uns über.', cue: 'Er hat', a: ['Er hat uns übergesetzt.'], why: 'Separable: *ge-* in the middle.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Wir haben das Ziel [geerreicht].', a: ['erreicht'], why: 'Never *ge-* with *er-*.' },
      { s: 'Die [Arbeitzeit] ist flexibel.', a: ['Arbeitszeit'], why: 'The compound needs the linking *-s-*.' },
    ] },
  ],
};
