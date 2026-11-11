// German C1, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Precise written German',
  goal: 'Use the prepositions and noun phrases of official and written German. Learn angesichts, hinsichtlich, zufolge, gemäß and anlässlich, anhand, im Rahmen and im Falle, the nominal style, and verb-noun phrases such as einen Antrag stellen.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['prepositions', 'genitive', 'nominal style', 'official language', 'verb-noun phrases'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Angesichts, hinsichtlich, zufolge',
      about: 'Learn the prepositions of formal German and the case they take.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Official letters, contracts and newspapers use prepositions that you rarely hear in speech. Most take the **genitive**: **angesichts** (in view of), **hinsichtlich** and **bezüglich** (regarding), **zwecks** (for the purpose of), **seitens** (on the part of) and **anlässlich** (on the occasion of). A few take the **dative**: **gemäß** (in accordance with), **entgegen** (contrary to) and **entsprechend** (in line with). **Zufolge** (according to) takes the dative and usually comes **after** the noun: *Dem Bericht zufolge steigen die Preise.*' },
          { t: 'table', caption: 'Formal prepositions', explain: ['head', 'col1'], head: ['Preposition', 'Case', 'Example'], rows: [
            ['angesichts', 'genitive', 'Angesichts der Lage bleiben wir zu Hause.'],
            ['hinsichtlich', 'genitive', 'Hinsichtlich der Kosten gibt es noch Fragen.'],
            ['bezüglich', 'genitive', 'Bezüglich Ihres Antrags melden wir uns.'],
            ['zwecks', 'genitive', 'Zwecks Klärung bitten wir um einen Termin.'],
            ['seitens', 'genitive', 'Seitens der Firma gibt es keine Einwände.'],
            ['anlässlich', 'genitive', 'Anlässlich des Jubiläums gibt es ein Fest.'],
            ['zufolge', 'dative, after the noun', 'Dem Bericht zufolge steigen die Preise.'],
            ['gemäß', 'dative', 'Gemäß dem Vertrag zahlen wir monatlich.'],
            ['entgegen', 'dative', 'Entgegen allen Erwartungen kam er pünktlich.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In speech many people use the dative after **wegen** and **trotz**, but in writing keep the genitive. In Switzerland and Austria, official letters often use **betreffend** or **bezugnehmend auf** for *regarding*. **Laut** (according to) is a simple alternative to *zufolge* and works with the dative or the genitive: *Laut dem Bericht … / Laut Bericht …*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Angesichts der** Lage bleiben wir zu Hause.', n: 'Genitive.' },
            { s: '**Hinsichtlich der** Kosten gibt es noch Fragen.', n: 'Genitive.' },
            { s: '**Dem Bericht zufolge** steigen die Preise.', n: '*Zufolge* comes after the noun.' },
            { s: '**Gemäß dem** Vertrag zahlen wir monatlich.', n: 'Dative.' },
            { s: '**Entgegen allen** Erwartungen kam er pünktlich.', n: 'Dative.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the preposition with its meaning.', pairs: [
            ['angesichts', 'in view of'],
            ['hinsichtlich', 'regarding'],
            ['zufolge', 'according to'],
            ['anlässlich', 'on the occasion of'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the article or the preposition.', items: [
            { q: 'Angesichts ___ Lage bleiben wir zu Hause. (die Lage)', a: ['der'], why: '*Angesichts* takes the genitive: *der Lage*.' },
            { q: 'Hinsichtlich ___ Kosten gibt es noch Fragen. (die Kosten)', a: ['der'], why: '*Hinsichtlich* takes the genitive: *der Kosten*.' },
            { q: 'Dem Bericht ___ steigen die Preise.', a: ['zufolge'], why: '*Zufolge* comes after the noun.' },
            { q: 'Gemäß ___ Vertrag zahlen wir monatlich. (der Vertrag)', a: ['dem'], why: '*Gemäß* takes the dative: *dem Vertrag*.' },
            { q: 'Entgegen ___ Erwartungen kam er pünktlich.', a: ['allen'], why: '*Entgegen* takes the dative plural: *allen Erwartungen*.' },
            { q: 'Anlässlich ___ Jubiläums gibt es ein Fest. (das Jubiläum)', a: ['des'], why: '*Anlässlich* takes the genitive: *des Jubiläums*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Seitens ___ Firma gibt es keine Einwände.', o: ['der', 'die', 'dem'], why: '*Seitens* takes the genitive: *der Firma*.' },
            { q: 'Entgegen ___ Plan kam er früher.', o: ['dem', 'des', 'den'], why: '*Entgegen* takes the dative: *dem Plan*.' },
            { q: 'Dem Bericht ___ steigen die Preise.', o: ['zufolge', 'angesichts', 'zwecks'], why: '*Zufolge* means *according to*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the preposition in brackets.', items: [
            { q: 'Weil die Lage so ernst ist, bleiben wir zu Hause.', cue: 'Angesichts', a: ['Angesichts der ernsten Lage bleiben wir zu Hause.'], why: '*Angesichts* + genitive.' },
            { q: 'Wie der Bericht sagt, steigen die Preise.', cue: 'Dem Bericht', a: ['Dem Bericht zufolge steigen die Preise.'], why: '*Zufolge* comes after the noun.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Angesichts [die] Lage bleiben wir zu Hause.', a: ['der'], why: 'The genitive: *der Lage*.' },
            { s: 'Hinsichtlich [den] Kosten gibt es Fragen.', a: ['der'], why: 'The genitive: *der Kosten*.' },
            { s: 'Anlässlich [dem] Jubiläums gibt es ein Fest.', a: ['des'], why: 'The genitive: *des Jubiläums*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Dem Bericht zufolge steigen die Preise.', why: '*Zufolge* comes after the noun.' },
            { a: 'Angesichts der Lage bleiben wir zu Hause.', why: '*Angesichts* + genitive.' },
            { a: 'Gemäß dem Vertrag zahlen wir monatlich.', why: '*Gemäß* + dative.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Nominalstil und Verbalstil',
      about: 'Turn clauses into noun phrases and back, and use anhand, im Rahmen and im Falle.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'Written German often puts the information in **noun phrases** instead of clauses. This is the **Nominalstil**. It is shorter and more formal than the **Verbalstil**: *Weil die Lage ernst ist, bleiben wir zu Hause* becomes *Angesichts der ernsten Lage bleiben wir zu Hause.* Useful prepositions are **anhand** (using), **mittels** (by means of), **im Rahmen** (within the framework of), **im Zuge** (in the course of) and **im Falle** (in the case of). All take the **genitive**.' },
          { t: 'table', caption: 'Verbal and nominal style', explain: ['head'], head: ['Verbalstil (clause)', 'Nominalstil (noun phrase)'], rows: [
            ['Weil die Lage ernst ist, bleiben wir zu Hause.', 'Angesichts der ernsten Lage bleiben wir zu Hause.'],
            ['Wenn ein Brand ausbricht, bitte Ruhe bewahren.', 'Im Falle eines Brandes bitte Ruhe bewahren.'],
            ['Indem man die Daten auswertet, erkennt man Trends.', 'Durch die Auswertung der Daten erkennt man Trends.'],
            ['Nachdem das Gesetz geändert wurde, sanken die Preise.', 'Nach der Änderung des Gesetzes sanken die Preise.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The nominal style is common in law, in science and in the news, but too many noun phrases make a text heavy. In speech and in friendly writing, prefer the verbal style. When you turn a verb into a noun, the **subject** becomes a genitive: *Das Gesetz wurde geändert* → *die Änderung des Gesetzes*.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Anhand der** Zahlen sieht man den Trend.', n: '*Anhand* + genitive.' },
            { s: '**Mittels einer** App kann man bezahlen.', n: '*Mittels* + genitive.' },
            { s: '**Im Rahmen des** Projekts entsteht eine App.', n: '*Im Rahmen* + genitive.' },
            { s: '**Im Zuge der** Reform wurden Stellen gestrichen.', n: '*Im Zuge* + genitive.' },
            { s: '**Im Falle eines** Brandes bitte Ruhe bewahren.', n: '*Im Falle* + genitive.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Verbal or nominal style? Sort the sentences.', groups: ['verbal style', 'nominal style'], explain: ['groups'], items: [
            { s: 'Weil die Lage ernst ist, bleiben wir zu Hause.', g: 0, why: 'A clause with *weil*.' },
            { s: 'Angesichts der ernsten Lage bleiben wir zu Hause.', g: 1, why: 'A noun phrase with *angesichts*.' },
            { s: 'Wenn ein Brand ausbricht, bitte Ruhe bewahren.', g: 0, why: 'A clause with *wenn*.' },
            { s: 'Im Falle eines Brandes bitte Ruhe bewahren.', g: 1, why: 'A noun phrase with *im Falle*.' },
            { s: 'Nachdem das Gesetz geändert wurde, sanken die Preise.', g: 0, why: 'A clause with *nachdem*.' },
            { s: 'Nach der Änderung des Gesetzes sanken die Preise.', g: 1, why: 'A noun phrase with *nach*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the article or the noun.', items: [
            { q: 'Anhand ___ Zahlen sieht man den Trend. (die Zahlen)', a: ['der'], why: '*Anhand* takes the genitive: *der Zahlen*.' },
            { q: 'Im Rahmen ___ Projekts entsteht eine App. (das Projekt)', a: ['des'], why: '*Im Rahmen* takes the genitive: *des Projekts*.' },
            { q: 'Mittels ___ App kann man bezahlen. (eine App)', a: ['einer'], why: '*Mittels* takes the genitive: *einer App*.' },
            { q: 'Im Zuge ___ Reform wurden Stellen gestrichen. (die Reform)', a: ['der'], why: '*Im Zuge* takes the genitive: *der Reform*.' },
            { q: 'Im ___ eines Brandes bitte Ruhe bewahren.', a: ['Falle'], why: '*Im Falle* + genitive.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the clause with the noun phrase.', pairs: [
            ['Weil die Lage ernst ist', 'Angesichts der ernsten Lage'],
            ['Wenn ein Brand ausbricht', 'Im Falle eines Brandes'],
            ['Nachdem das Gesetz geändert wurde', 'Nach der Änderung des Gesetzes'],
            ['Indem man die Daten auswertet', 'Durch die Auswertung der Daten'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Change the clause into a noun phrase.', items: [
            { q: 'Wenn ein Brand ausbricht, bitte Ruhe bewahren.', cue: 'Im Falle', a: ['Im Falle eines Brandes bitte Ruhe bewahren.'], why: '*Im Falle* + genitive.' },
            { q: 'Nachdem das Gesetz geändert wurde, sanken die Preise.', cue: 'Nach', a: ['Nach der Änderung des Gesetzes sanken die Preise.'], why: 'The verb becomes a noun; the subject becomes a genitive.' },
            { q: 'Indem man die Daten auswertet, erkennt man Trends.', cue: 'Durch', a: ['Durch die Auswertung der Daten erkennt man Trends.'], why: 'The verb becomes a noun; the object becomes a genitive.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Im Zuge ___ Reform wurden Stellen gestrichen.', o: ['der', 'die', 'dem'], why: 'The genitive of *die Reform*: *der Reform*.' },
            { q: 'Anhand ___ Zahlen sieht man den Trend.', o: ['der', 'den', 'die'], why: 'The genitive plural: *der Zahlen*.' },
            { q: 'Im Rahmen ___ Projekts entsteht eine App.', o: ['des', 'dem', 'das'], why: 'The genitive of *das Projekt*: *des Projekts*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Im Falle [ein] Brandes bitte Ruhe bewahren.', a: ['eines'], why: 'The genitive: *eines Brandes*.' },
            { s: 'Anhand [die] Zahlen sieht man den Trend.', a: ['der'], why: 'The genitive plural: *der Zahlen*.' },
            { s: 'Im Rahmen [dem] Projekts entsteht eine App.', a: ['des'], why: 'The genitive: *des Projekts*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Im Falle eines Brandes bitte Ruhe bewahren.', why: '*Im Falle* + genitive.' },
            { a: 'Anhand der Zahlen sieht man den Trend.', why: '*Anhand* + genitive.' },
            { a: 'Im Rahmen des Projekts entsteht eine App.', why: '*Im Rahmen* + genitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Einen Antrag stellen, in Kraft treten',
      about: 'Learn the verb-noun phrases of official language.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Official German likes **verb-noun phrases** (Funktionsverbgefüge): a general verb with a noun that carries the meaning. They replace a single verb and sound more formal: *einen Antrag stellen* instead of *beantragen*. Many of them cannot be changed: you must **learn the whole phrase** with its verb and its preposition. Here are the most useful.' },
          { t: 'table', caption: 'Verb-noun phrases', explain: ['head', 'col1'], head: ['Phrase', 'Meaning', 'Example'], rows: [
            ['einen Antrag stellen', 'to apply for', 'Sie stellt einen Antrag auf Urlaub.'],
            ['in Kraft treten', 'to come into force', 'Das Gesetz tritt morgen in Kraft.'],
            ['Abhilfe schaffen', 'to remedy', 'Die Stadt will Abhilfe schaffen.'],
            ['Bedenken äußern', 'to express doubts', 'Er äußerte Bedenken.'],
            ['in Anspruch nehmen', 'to make use of', 'Wir nehmen Ihre Hilfe gern in Anspruch.'],
            ['in Erwägung ziehen', 'to consider', 'Wir ziehen einen Umzug in Erwägung.'],
            ['Stellung nehmen zu', 'to comment on', 'Die Firma nahm zu den Vorwürfen Stellung.'],
            ['Rücksicht nehmen auf', 'to be considerate of', 'Bitte nehmen Sie Rücksicht auf die Nachbarn.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In a Funktionsverbgefüge the noun carries the meaning, so you cannot change the verb freely. You say **einen Antrag stellen**, not *einen Antrag machen*. The phrases are the same in Germany, Austria and Switzerland. In everyday speech, the single verb is more usual: *Ich möchte Urlaub beantragen.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Sie **stellt einen Antrag** auf Urlaub.', n: 'To apply for.' },
            { s: 'Das Gesetz **tritt** morgen **in Kraft**.', n: 'To come into force.' },
            { s: 'Er **äußerte Bedenken**.', n: 'To express doubts.' },
            { s: 'Wir **ziehen** einen Umzug **in Erwägung**.', n: 'To consider.' },
            { s: 'Bitte **nehmen** Sie **Rücksicht auf** die Nachbarn.', n: 'To be considerate of.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the phrase with its meaning.', pairs: [
            ['einen Antrag stellen', 'to apply for'],
            ['in Kraft treten', 'to come into force'],
            ['Abhilfe schaffen', 'to remedy'],
            ['in Erwägung ziehen', 'to consider'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Sie ___ einen Antrag auf Urlaub. (stellen)', a: ['stellt'], why: '*Einen Antrag stellen*; with *sie*: *stellt*.' },
            { q: 'Das Gesetz ___ morgen in Kraft. (treten)', a: ['tritt'], why: '*In Kraft treten*; with *das Gesetz*: *tritt*.' },
            { q: 'Die Stadt will Abhilfe ___. (schaffen)', a: ['schaffen'], why: '*Abhilfe schaffen*.' },
            { q: 'Er ___ Bedenken. (äußern, Präteritum)', a: ['äußerte'], why: '*Bedenken äußern*; Präteritum: *äußerte*.' },
            { q: 'Wir ziehen einen Umzug in ___. (consider)', a: ['Erwägung'], why: '*In Erwägung ziehen*.' },
            { q: 'Bitte nehmen Sie ___ auf die Nachbarn. (consideration)', a: ['Rücksicht'], why: '*Rücksicht nehmen auf*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Er will einen Antrag ___.', o: ['stellen', 'machen', 'geben'], why: 'The phrase is *einen Antrag stellen*.' },
            { q: 'Das Gesetz tritt morgen in ___.', o: ['Kraft', 'Macht', 'Wirkung'], why: 'The phrase is *in Kraft treten*.' },
            { q: 'Die Firma nahm zu den Vorwürfen ___.', o: ['Stellung', 'Platz', 'Haltung'], why: 'The phrase is *Stellung nehmen zu*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with a verb-noun phrase.', items: [
            { q: 'Sie beantragt Urlaub.', cue: 'Sie stellt', a: ['Sie stellt einen Antrag auf Urlaub.'], why: '*Einen Antrag stellen auf*.' },
            { q: 'Das Gesetz beginnt morgen zu gelten.', cue: 'Das Gesetz tritt', a: ['Das Gesetz tritt morgen in Kraft.'], why: '*In Kraft treten*.' },
            { q: 'Wir überlegen einen Umzug.', cue: 'Wir ziehen', a: ['Wir ziehen einen Umzug in Erwägung.'], why: '*In Erwägung ziehen*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Sie [macht] einen Antrag auf Urlaub.', a: ['stellt'], why: 'The phrase is *einen Antrag stellen*.' },
            { s: 'Das Gesetz [kommt] morgen in Kraft.', a: ['tritt'], why: 'The phrase is *in Kraft treten*.' },
            { s: 'Wir ziehen einen Umzug in [Überlegung].', a: ['Erwägung'], why: 'The phrase is *in Erwägung ziehen*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Das Gesetz tritt morgen in Kraft.', why: '*In Kraft treten*.' },
            { a: 'Sie stellt einen Antrag auf Urlaub.', why: '*Einen Antrag stellen auf*.' },
            { a: 'Bitte nehmen Sie Rücksicht auf die Nachbarn.', why: '*Rücksicht nehmen auf*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Ein Brief vom Amt',
      about: 'Read a letter from an authority.',
      art: 'cactus',
      spreads: [
        [
          { t: 'reading', title: 'Ihr Antrag auf einen Anwohnerparkausweis', md: 'Sehr geehrte Frau Berger,\n\nbezüglich Ihres Antrags vom 12. März teilen wir Ihnen mit, dass wir Ihnen den Anwohnerparkausweis ausstellen können. Angesichts der hohen Zahl an Anträgen bitten wir um Verständnis, dass die Bearbeitung vier Wochen gedauert hat. Gemäß der geltenden Satzung ist der Ausweis ein Jahr gültig.\n\nAnlässlich der Neuregelung, die am 1. Juli in Kraft tritt, weisen wir darauf hin, dass die Gebühr dann steigt. Zur Abholung steht Ihnen unser Bürgeramt montags bis freitags zur Verfügung. Bitte bringen Sie einen Personalausweis mit. Sollten Sie Bedenken äußern wollen, können Sie innerhalb eines Monats Widerspruch einlegen.\n\nMit freundlichen Grüßen\ni. A. Kramer' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Frau Berger hat den Antrag am 12. März gestellt.', a: 't', why: '*Ihres Antrags vom 12. März.*' },
            { q: 'Die Bearbeitung dauerte zwei Wochen.', a: 'f', why: '*Die Bearbeitung vier Wochen gedauert hat.*' },
            { q: 'Der Ausweis ist zwei Jahre gültig.', a: 'f', why: '*Der Ausweis ist ein Jahr gültig.*' },
            { q: 'Die Gebühr steigt nach dem 1. Juli.', a: 't', why: '*Am 1. Juli in Kraft tritt … die Gebühr dann steigt.*' },
            { q: 'Frau Berger muss den Ausweis persönlich abholen.', a: 'ng', why: 'The letter does not say who may collect it.' },
            { q: 'Man kann innerhalb eines Monats Widerspruch einlegen.', a: 't', why: '*Innerhalb eines Monats Widerspruch einlegen.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Wie lange dauerte die Bearbeitung?', o: ['Vier Wochen.', 'Zwei Wochen.', 'Zehn Tage.'], why: '*Vier Wochen.*' },
            { q: 'Was soll Frau Berger mitbringen?', o: ['Einen Personalausweis.', 'Einen Pass.', 'Eine Rechnung.'], why: '*Bitte bringen Sie einen Personalausweis mit.*' },
            { q: 'Wann tritt die Neuregelung in Kraft?', o: ['Am 1. Juli.', 'Am 12. März.', 'Am 1. Januar.'], why: '*Die am 1. Juli in Kraft tritt.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the formal prepositions.', items: [
            { s: '[Bezüglich] Ihres Antrags teilen wir Ihnen mit, dass wir den Ausweis ausstellen können.', why: '*Bezüglich* + genitive.' },
            { s: '[Angesichts] der hohen Zahl an Anträgen bitten wir um Verständnis. [Gemäß] der Satzung ist der Ausweis ein Jahr gültig.', why: '*Angesichts* + genitive; *gemäß* + dative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Bezüglich ___ Antrags teilen wir Ihnen mit, dass wir den Ausweis ausstellen. (Ihr Antrag)', a: ['Ihres'], why: '*Bezüglich* takes the genitive: *Ihres Antrags*.' },
            { q: 'Die Neuregelung tritt am 1. Juli in ___.', a: ['Kraft'], why: '*In Kraft treten*.' },
            { q: 'Angesichts ___ hohen Zahl an Anträgen bitten wir um Verständnis. (die Zahl)', a: ['der'], why: '*Angesichts* takes the genitive: *der hohen Zahl*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Gemäß der geltenden Satzung ist der Ausweis ein Jahr gültig.', why: '*Gemäß* + dative, then the verb.' },
            { a: 'Bitte bringen Sie einen Personalausweis mit.', why: 'A polite request.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Angesichts ___ Lage bleiben wir zu Hause.', o: ['der', 'die', 'dem'], why: '*Angesichts* takes the genitive.' },
      { q: 'Dem Bericht ___ steigen die Preise.', o: ['zufolge', 'angesichts', 'zwecks'], why: '*Zufolge* means *according to*.' },
      { q: 'Das Gesetz ___ morgen in Kraft.', o: ['tritt', 'stellt', 'nimmt'], why: '*In Kraft treten*.' },
      { q: 'Im ___ eines Brandes bitte Ruhe bewahren.', o: ['Falle', 'Fall', 'Fallen'], why: '*Im Falle* + genitive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Sie stellt einen ___ auf Urlaub.', a: ['Antrag'], why: '*Einen Antrag stellen*.' },
      { q: 'Bitte nehmen Sie ___ auf die Nachbarn.', a: ['Rücksicht'], why: '*Rücksicht nehmen auf*.' },
      { q: 'Anlässlich ___ Jubiläums gibt es ein Fest. (das Jubiläum)', a: ['des'], why: '*Anlässlich* takes the genitive.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the preposition with its meaning.', pairs: [
      ['angesichts', 'in view of'],
      ['hinsichtlich', 'regarding'],
      ['zufolge', 'according to'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the words in brackets.', items: [
      { q: 'Weil die Lage so ernst ist, bleiben wir zu Hause.', cue: 'Angesichts', a: ['Angesichts der ernsten Lage bleiben wir zu Hause.'], why: '*Angesichts* + genitive.' },
      { q: 'Wenn ein Brand ausbricht, bitte Ruhe bewahren.', cue: 'Im Falle', a: ['Im Falle eines Brandes bitte Ruhe bewahren.'], why: '*Im Falle* + genitive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Hinsichtlich [den] Kosten gibt es Fragen.', a: ['der'], why: 'The genitive: *der Kosten*.' },
      { s: 'Das Gesetz [kommt] morgen in Kraft.', a: ['tritt'], why: 'The phrase is *in Kraft treten*.' },
    ] },
  ],
};
