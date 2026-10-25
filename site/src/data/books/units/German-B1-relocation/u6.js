// German B1 for moving abroad, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Children, school and childcare',
  goal: 'Find childcare, register a child at school and talk to teachers.',
  art: 'sun',
  tags: { skills: ['reading', 'speaking', 'writing', 'vocabulary'], topics: ['childcare', 'school', 'parents-teachers', 'modal-verbs-praeteritum'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Childcare and school',
      about: 'The words for nursery, school and the meetings for parents.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'In Germany, small children can go to a **Kita** (*Kindertagesstätte*). The Kita usually has two parts: the **Krippe** for children under three and the **Kindergarten** for children from three to six. Children have a legal right to a place from their first birthday, but in many cities places are hard to find. Register early, sometimes at several Kitas.' },
          { t: 'table', caption: 'Childcare', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['die Kita', 'day care for children up to school age'],
            ['die Krippe', 'day care for children under three'],
            ['der Kindergarten', 'day care for children from three to six'],
            ['die Tagesmutter', 'a woman who looks after a few children at her home'],
            ['die Eingewöhnung', 'the first weeks, when a parent stays with the child at the Kita'],
          ] },
        ],
        [
          { t: 'text', md: 'School is compulsory in Germany. Children usually start primary school, the **Grundschule**, at about six. It usually lasts four years, in some federal states six. The first school day, the **Einschulung**, is a big family celebration.' },
          { t: 'table', caption: 'School', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['die Grundschule', 'primary school'],
            ['der Hort / die Ganztagsschule', 'care or lessons in the afternoon'],
            ['die Klassenlehrerin / der Klassenlehrer', 'the teacher responsible for a class'],
            ['der Elternabend', 'an evening meeting for all parents of a class'],
            ['der Elternsprechtag', 'a day when parents talk to teachers one by one'],
            ['das Zeugnis', 'school report'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Anruf in der Kita', lines: [
            { who: 'Herr Rahimi', s: 'Guten Tag, mein Name ist Rahimi. Wir sind gerade nach Bremen gezogen und suchen einen Kita-Platz für unsere Tochter.' },
            { who: 'Frau Schuster', s: 'Wie alt ist Ihre Tochter?' },
            { who: 'Herr Rahimi', s: 'Sie ist zwei und wird im März drei.' },
            { who: 'Frau Schuster', s: 'In der Krippe haben wir leider keinen Platz mehr. Ab August hätten wir aber einen Platz im Kindergarten.' },
            { who: 'Herr Rahimi', s: 'Das wäre toll. Wie kann ich sie anmelden?' },
            { who: 'Frau Schuster', s: 'Sie füllen das Formular auf unserer Website aus. Danach laden wir Sie zu einem Gespräch ein.' },
            { who: 'Herr Rahimi', s: 'Und wie lange dauert die Eingewöhnung?' },
            { who: 'Frau Schuster', s: 'Meistens zwei bis vier Wochen. In dieser Zeit kommt ein Elternteil jeden Tag mit.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the phone call. True or false?', items: [
            { q: 'Die Tochter von Herrn Rahimi ist drei Jahre alt.', a: 'f', why: 'She is two and will be three in March.' },
            { q: 'Die Kita hat ab August einen Platz im Kindergarten.', a: 't', why: '*Ab August hätten wir aber einen Platz im Kindergarten.*' },
            { q: 'Während der Eingewöhnung bleibt ein Elternteil bei dem Kind.', a: 't', why: '*In dieser Zeit kommt ein Elternteil jeden Tag mit.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['die Krippe', 'für Kinder unter drei Jahren'],
            ['die Grundschule', 'die ersten Schuljahre ab etwa sechs Jahren'],
            ['der Elternabend', 'ein Treffen für alle Eltern einer Klasse'],
            ['das Zeugnis', 'zeigt die Noten'],
            ['der Hort', 'Betreuung am Nachmittag nach der Schule'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Unser Sohn ist vier. Er geht in den ___.', o: ['Kindergarten', 'Hort', 'Elternabend'], why: 'From three to six: the *Kindergarten*.' },
            { q: 'Am ersten Schultag feiert die Familie die ___.', o: ['Einschulung', 'Eingewöhnung', 'Anmeldung'], why: 'The first school day: *die Einschulung*.' },
            { q: 'Frau Yilmaz ist für die ganze Klasse verantwortlich. Sie ist die ___.', o: ['Klassenlehrerin', 'Tagesmutter', 'Hausmeisterin'], why: 'The teacher responsible for a class: *Klassenlehrerin*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Talking to teachers',
      about: 'Ask how your child is doing, and excuse an absence.',
      art: 'parrot',
      spreads: [
        [
          { t: 'dialogue', title: 'Am Elternsprechtag', lines: [
            { who: 'Frau Costa', s: 'Guten Tag, Frau Albrecht. Ich bin die Mutter von Mateo.' },
            { who: 'Frau Albrecht', s: 'Schön, dass Sie da sind. Mateo ist ein freundlicher Junge und arbeitet im Unterricht gut mit.' },
            { who: 'Frau Costa', s: 'Das freut mich. Wie kommt er im Fach Deutsch zurecht? Zu Hause sprechen wir Portugiesisch.' },
            { who: 'Frau Albrecht', s: 'Er spricht schon sehr gut. Beim Schreiben macht er noch Fehler, aber das ist ganz normal.' },
            { who: 'Frau Costa', s: 'Wie kann ich ihn zu Hause unterstützen?' },
            { who: 'Frau Albrecht', s: 'Lesen Sie jeden Tag ein bisschen mit ihm, gern auch auf Portugiesisch. Das hilft beim Lesen in beiden Sprachen.' },
          ] },
          { t: 'text', md: 'Useful questions for teachers: *Wie kommt mein Kind im Unterricht zurecht?*, *Wie kann ich mein Kind unterstützen?*, *Hat mein Kind Freunde in der Klasse?* Many teachers prefer an appointment for a longer talk.' },
        ],
        [
          { t: 'text', md: 'If your child is ill, tell the school on the **first morning**, often by phone or email. Many schools also want a short written excuse, an **Entschuldigung**, when the child comes back. For things that happened, use the **Präteritum** of the modal verbs: *konnte*, *musste*, *durfte*.' },
          { t: 'reading', title: 'Entschuldigung', md: 'Sehr geehrte Frau Albrecht,\n\nmein Sohn Mateo konnte vom 12. bis 14. November nicht zur Schule kommen, weil er Fieber hatte. Er war beim Kinderarzt und musste im Bett bleiben.\n\nBitte entschuldigen Sie sein Fehlen.\n\nMit freundlichen Grüßen\nAna Costa' },
          { t: 'tip', art: 'owl', md: 'Use *wegen* + noun or *weil* + verb at the end: *wegen einer Erkältung* or *weil er erkältet war*.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the excuses with the Präteritum.', items: [
            { q: 'Meine Tochter ___ gestern nicht zur Schule kommen. (können)', a: ['konnte'], why: '*können* in the Präteritum: *konnte*, without an umlaut.' },
            { q: 'Er ___ zu Hause bleiben, weil er Fieber hatte. (müssen)', a: ['musste'], why: '*müssen* in the Präteritum: *musste*.' },
            { q: 'Lea ___ zwei Tage keinen Sport machen. (dürfen)', a: ['durfte'], why: '*dürfen* in the Präteritum: *durfte*.' },
            { q: 'Mein Sohn hat gefehlt, weil er krank ___. (sein)', a: ['war'], why: '*sein* in the Präteritum: *war*, at the end after *weil*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Ihr Kind ist morgens krank. Was machen Sie zuerst?', o: ['Ich rufe in der Schule an oder schreibe eine E-Mail.', 'Ich warte, bis die Lehrerin anruft.', 'Ich schreibe am Ende des Schuljahres eine Entschuldigung.'], why: 'Tell the school on the first morning.' },
            { q: 'Mein Sohn hat ___ einer Erkältung gefehlt.', o: ['wegen', 'weil', 'seit'], why: '*wegen* + noun. *weil* needs a clause with a verb.' },
            { q: 'Sie möchten wissen, wie Ihr Kind in der Schule ist. Sie fragen:', o: ['Wie kommt mein Kind im Unterricht zurecht?', 'Wie heißt die Schule?', 'Wann ist die Schule zu Ende?'], why: '*zurechtkommen*: to manage, to get on.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build sentences for teachers.', items: [
            { a: 'Wie kann ich meine Tochter unterstützen?', why: 'Question word, the modal verb *kann*, the infinitive *unterstützen* at the end.' },
            { a: 'Bitte entschuldigen Sie das Fehlen meiner Tochter.', why: '*Bitte* + imperative with *Sie*. *das Fehlen meiner Tochter*: genitive.' },
            { a: 'Meine Tochter musste zu Hause bleiben.', why: '*musste* second, the infinitive *bleiben* at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A letter from school',
      about: 'Read a letter from a teacher to the parents of a class.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Elternbrief der Klasse 2b', md: 'Liebe Eltern der Klasse 2b,\n\ndas neue Schuljahr hat gut begonnen, und die Kinder sind nach den Sommerferien schnell wieder im Schulalltag angekommen. Mit diesem Brief möchte ich Sie über einige wichtige Termine informieren.\n\nAm Dienstag, dem 24. September, findet um 19 Uhr unser erster Elternabend im Klassenraum statt. Wir sprechen über die Ziele für das Schuljahr, die Hausaufgaben und unseren Ausflug. Außerdem wählen wir zwei Elternvertreter. Wenn Sie nicht kommen können, sagen Sie mir bitte kurz Bescheid.\n\nAm Freitag, dem 4. Oktober, machen wir einen Ausflug in den Tierpark. Wir fahren mit der Straßenbahn und sind gegen 13 Uhr zurück. Bitte geben Sie Ihrem Kind ein Frühstück, etwas zu trinken und Kleidung für jedes Wetter mit. Für den Eintritt sammeln wir 4 Euro pro Kind ein.\n\nNoch eine Bitte: Wenn Ihr Kind krank ist, rufen Sie bitte bis 7:45 Uhr im Sekretariat an.\n\nBitte unterschreiben Sie den Abschnitt unten und geben Sie ihn Ihrem Kind bis Freitag mit.\n\nMit freundlichen Grüßen\nJan Petersen, Klassenlehrer' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the letter. True, false or not given?', items: [
            { q: 'Der Elternabend ist am Nachmittag.', a: 'f', why: 'It starts at 19 o’clock, in the evening.' },
            { q: 'Beim Elternabend wählen die Eltern zwei Elternvertreter.', a: 't', why: '*Außerdem wählen wir zwei Elternvertreter.*' },
            { q: 'Die Klasse fährt mit dem Bus in den Tierpark.', a: 'f', why: 'They go by tram: *mit der Straßenbahn*.' },
            { q: 'Die Kinder essen im Tierpark zu Mittag.', a: 'f', why: 'They are back at about 13 o’clock and only take breakfast and a drink.' },
            { q: 'Herr Petersen unterrichtet auch Sport.', a: 'ng', why: 'The letter does not say which subjects he teaches.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do the parents do? Choose the right answer.', items: [
            { q: 'Frau Kaya kann am 24. September nicht zum Elternabend kommen. Sie ___', o: ['sagt Herrn Petersen kurz Bescheid.', 'schickt ihr Kind zum Elternabend.', 'ruft um 7:45 Uhr im Sekretariat an.'], why: '*Wenn Sie nicht kommen können, sagen Sie mir bitte kurz Bescheid.*' },
            { q: 'Was bekommt das Kind für den Ausflug mit?', o: ['Frühstück, etwas zu trinken und passende Kleidung', 'ein Mittagessen und ein Fahrrad', 'nur ein Ticket für die Straßenbahn'], why: 'Breakfast, a drink and clothes for any weather.' },
            { q: 'Bis wann geben die Eltern den Abschnitt zurück?', o: ['bis Freitag', 'bis zum Elternabend', 'bis zum Ausflug'], why: '*… geben Sie ihn Ihrem Kind bis Freitag mit.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two school words for meetings and people.', items: [
            { s: 'Beim [Elternabend] wählen wir zwei [Elternvertreter].', why: 'The *Elternabend* is the meeting, the *Elternvertreter* speak for the parents of the class.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Kinder unter drei Jahren gehen in die ___.', o: ['Krippe', 'Grundschule', 'Ganztagsschule'], why: '*die Krippe*: under three.' },
      { q: 'Am ___ sprechen die Eltern einzeln mit den Lehrern.', o: ['Elternsprechtag', 'Elternabend', 'Ausflug'], why: 'One by one: the *Elternsprechtag*.' },
      { q: 'Am Ende des Schuljahres bekommen die Kinder ein ___.', o: ['Zeugnis', 'Rezept', 'Fehlen'], why: 'The school report: *das Zeugnis*.' },
      { q: 'Mein Sohn hat ___ Fieber gefehlt.', o: ['wegen', 'weil', 'denn'], why: '*wegen* + noun.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Mein Sohn ___ gestern nicht zur Schule kommen. (können, Präteritum)', a: ['konnte'], why: '*konnte*: Präteritum of *können*.' },
      { q: 'Sie ___ zwei Tage im Bett bleiben. (müssen, Präteritum)', a: ['musste'], why: '*musste*: Präteritum of *müssen*.' },
      { q: 'Wie kommt mein Kind im Unterricht ___? (zurechtkommen)', a: ['zurecht'], why: 'Separable verb: *zurecht* goes to the end.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'In Deutschland müssen Kinder zur Schule gehen.', a: 't', why: 'School is compulsory.' },
      { q: 'Während der Eingewöhnung bleibt das Kind vom ersten Tag an allein in der Kita.', a: 'f', why: 'A parent comes along in the first weeks.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Wie kann ich meinen Sohn unterstützen?', why: '*kann* second, *unterstützen* at the end.' },
      { a: 'Bitte entschuldigen Sie das Fehlen meines Sohnes.', why: '*das Fehlen meines Sohnes*: genitive.' },
    ] },
  ],
};
