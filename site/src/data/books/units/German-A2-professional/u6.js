// German A2 for work, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Applying for a job',
  goal: 'Understand a job advert and answer simple interview questions.',
  art: 'suitcase',
  tags: { skills: ['reading', 'speaking', 'vocabulary'], topics: ['job-adverts', 'cv', 'job-interview', 'perfekt', 'seit'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Job adverts',
      about: 'The words every job advert uses: Vollzeit, Teilzeit, Erfahrung, Kenntnisse.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'A job advert is a **Stellenanzeige**. It says what the job is, what the company wants and what it offers. In Germany, adverts usually write **(m/w/d)** after the job: *männlich, weiblich, divers*. This means that everyone can apply.' },
          { t: 'table', caption: 'Words in job adverts', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['die Stelle', 'the job, the position'],
            ['Vollzeit', 'full time, often about 38 to 40 hours a week'],
            ['Teilzeit', 'part time, fewer hours'],
            ['die Erfahrung', 'experience'],
            ['die Kenntnisse', 'knowledge, skills'],
            ['befristet', 'for a fixed time, for example one year'],
            ['unbefristet', 'with no end date'],
            ['die Bewerbung', 'the application'],
          ] },
          { t: 'tip', art: 'owl', md: 'Adverts often have three parts: *Ihre Aufgaben* (what you do), *Ihr Profil* (what you need) and *Wir bieten* (what the company gives you).' },
        ],
        [
          { t: 'reading', title: 'Stellenanzeige', md: '**Verkäufer (m/w/d) in Teilzeit gesucht**\n\nDas Modehaus Lindner in Mainz sucht ab sofort eine Verkäuferin oder einen Verkäufer für 25 Stunden pro Woche.\n\n**Ihre Aufgaben:** Sie beraten Kunden, räumen Waren ein und arbeiten an der Kasse.\n\n**Ihr Profil:** Sie haben Erfahrung im Verkauf und gute Deutschkenntnisse. Sie arbeiten gern im Team und sind freundlich.\n\n**Wir bieten:** eine unbefristete Stelle, ein nettes Team und 20 % Rabatt auf unsere Mode.\n\nBitte schicken Sie Ihre Bewerbung per E-Mail an Frau Lindner.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the advert. True, false or not given?', items: [
            { q: 'Die Stelle ist in Vollzeit.', a: 'f', why: 'It is *in Teilzeit*, 25 hours a week.' },
            { q: 'Man arbeitet auch an der Kasse.', a: 't', why: '*… und arbeiten an der Kasse.*' },
            { q: 'Die Stelle ist nur für ein Jahr.', a: 'f', why: 'It is *unbefristet*: there is no end date.' },
            { q: 'Man muss am Samstag arbeiten.', a: 'ng', why: 'The advert does not say on which days you work.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and the example.', pairs: [
            ['Vollzeit', '40 Stunden pro Woche'],
            ['Teilzeit', '20 Stunden pro Woche'],
            ['befristet', 'nur für ein Jahr'],
            ['unbefristet', 'ohne Ende'],
            ['Erfahrung', 'Ich habe das schon drei Jahre gemacht.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences from job adverts.', items: [
            { q: 'Wir suchen eine Köchin in ___. (40 Stunden pro Woche)', a: ['Vollzeit'], why: '*Vollzeit*: full time.' },
            { q: 'Bitte schicken Sie Ihre ___ per E-Mail. (Lebenslauf, Zeugnisse)', a: ['Bewerbung'], why: 'The *Bewerbung* is your application: usually a letter, your CV and your certificates.' },
            { q: 'Sie haben drei Jahre ___ als Mechaniker. (Sie haben diese Arbeit schon gemacht.)', a: ['Erfahrung'], why: '*Erfahrung*: experience.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Your CV and the interview',
      about: 'Read a simple CV and answer short questions about yourself.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'In Germany, a CV, the **Lebenslauf**, is usually short and in a table: your personal details, your work experience, your education and your languages. The newest job usually comes first.' },
          { t: 'reading', title: 'Lebenslauf', md: '**Persönliche Daten**\nName: Ana Lima\nWohnort: Mainz\n\n**Berufserfahrung**\nseit 03/2023: Verkäuferin, Bäckerei Kranz, Mainz (Teilzeit)\n2019–2022: Verkäuferin in einem Schuhgeschäft, Porto (Portugal)\n\n**Schule und Ausbildung**\n2016–2019: Ausbildung im Verkauf, Porto\n2016: Schulabschluss, Porto\n\n**Sprachen**\nPortugiesisch: Muttersprache\nDeutsch: gut (B1)\nEnglisch: sehr gut\n\n**Hobbys**\nTanzen, Fotografieren' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the CV and choose the right answer.', items: [
            { q: 'Wo arbeitet Ana zurzeit?', o: ['in einer Bäckerei in Mainz', 'in einem Schuhgeschäft in Porto', 'in einem Modehaus in Mainz'], why: '*seit 03/2023: Verkäuferin, Bäckerei Kranz, Mainz*.' },
            { q: 'Was ist Anas Muttersprache?', o: ['Portugiesisch', 'Deutsch', 'Englisch'], why: '*Portugiesisch: Muttersprache*.' },
            { q: 'Wie gut spricht Ana Deutsch?', o: ['gut', 'sehr gut', 'gar nicht'], why: '*Deutsch: gut (B1)*.' },
          ] },
        ],
        [
          { t: 'text', md: 'For your experience, use the **Perfekt**: *Ich habe drei Jahre in einem Schuhgeschäft gearbeitet.* For something that started in the past and is still true now, use **seit** with the present: *Ich wohne seit 2022 in Mainz.*' },
          { t: 'table', caption: 'Questions in an interview', explain: ['head'], head: ['Question', 'Answer'], rows: [
            ['Erzählen Sie etwas über sich.', 'Ich heiße Ana Lima und komme aus Portugal. Ich wohne seit 2022 in Mainz.'],
            ['Welche Erfahrung haben Sie?', 'Ich habe drei Jahre in einem Schuhgeschäft gearbeitet.'],
            ['Was machen Sie zurzeit?', 'Ich arbeite in Teilzeit in einer Bäckerei.'],
            ['Warum möchten Sie bei uns arbeiten?', 'Ich arbeite gern mit Kunden, und Mode interessiert mich sehr.'],
            ['Wann können Sie anfangen?', 'Ab dem ersten Mai.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Short, clear answers are good. Prepare two or three sentences about yourself, your experience and why you want the job.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the answers.', items: [
            { q: 'Ich ___ drei Jahre als Verkäuferin gearbeitet. (haben)', a: ['habe'], why: 'Perfekt with *haben*: *ich habe … gearbeitet*.' },
            { q: 'Ich habe in Porto eine Ausbildung ___. (machen)', a: ['gemacht'], why: 'The Perfekt of *machen*: *gemacht*, at the end.' },
            { q: 'Ich ___ 2022 nach Deutschland gekommen. (sein)', a: ['bin'], why: '*kommen* is a verb of movement: Perfekt with *sein*.' },
            { q: 'Ich wohne ___ 2022 in Mainz.', a: ['seit'], why: '*seit* + present: it started in 2022 and it is still true.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the interview questions.', items: [
            { a: 'Wann können Sie anfangen?', why: 'Question word, *können*, *Sie*, then *anfangen* at the end.' },
            { a: 'Warum möchten Sie bei uns arbeiten?', why: 'Question word, *möchten*, *Sie*, then *arbeiten* at the end.' },
            { a: 'Welche Erfahrung haben Sie?', why: '*Welche Erfahrung* is the question part. The verb comes next.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: adverts and an invitation',
      about: 'Compare two job adverts and read an invitation to an interview.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'reading', title: 'Anzeige 1', md: '**Küchenhilfe (m/w/d) in Vollzeit**\n\nDas Restaurant Am Markt in Freiburg sucht eine Küchenhilfe. Sie bereiten Salate und Gemüse vor und halten die Küche sauber. Erfahrung ist nicht nötig, wir zeigen Ihnen alles. Arbeitszeit: Dienstag bis Samstag, 15 bis 23 Uhr. Kommen Sie einfach vorbei und fragen Sie nach Herrn Köhler!' },
          { t: 'reading', title: 'Anzeige 2', md: '**Bürokauffrau / Bürokaufmann (m/w/d) in Teilzeit**\n\nWir sind ein kleines Steuerbüro in Freiburg und suchen ab dem 1. Juni Hilfe für 20 Stunden pro Woche, nur vormittags. Sie haben eine Ausbildung im Büro, gute Deutschkenntnisse und können gut mit dem Computer arbeiten. Die Stelle ist zuerst auf ein Jahr befristet. Bitte schicken Sie Ihre Bewerbung mit Lebenslauf und Zeugnissen an Frau Engel.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the two adverts. True, false or not given?', items: [
            { q: 'Für die Stelle in der Küche braucht man Erfahrung.', a: 'f', why: '*Erfahrung ist nicht nötig.*' },
            { q: 'In der Küche arbeitet man am Nachmittag und am Abend.', a: 't', why: '*15 bis 23 Uhr*.' },
            { q: 'Die Stelle im Steuerbüro ist am Nachmittag.', a: 'f', why: '*nur vormittags*: only in the morning.' },
            { q: 'Die Stelle im Steuerbüro ist unbefristet.', a: 'f', why: '*zuerst auf ein Jahr befristet*.' },
            { q: 'Im Restaurant bekommen die Mitarbeiter ein Essen.', a: 'ng', why: 'The advert does not say this.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two documents that go with the application.', items: [
            { s: 'Bitte schicken Sie Ihre Bewerbung mit [Lebenslauf] und [Zeugnissen] an Frau Engel.', why: 'The *Lebenslauf* (CV) and the *Zeugnisse* (certificates and references) go with the application.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Einladung zum Vorstellungsgespräch', md: 'Sehr geehrter Herr Tesfaye,\n\nvielen Dank für Ihre Bewerbung als Bürokaufmann. Wir möchten Sie gern kennenlernen und laden Sie zu einem Vorstellungsgespräch ein: am Mittwoch, dem 14. Mai, um 9 Uhr in unserem Büro in der Kaiserstraße 8.\n\nBitte bringen Sie Ihre Zeugnisse mit. Das Gespräch dauert etwa 45 Minuten. Können Sie mir bitte bis Freitag kurz sagen, ob der Termin passt?\n\nMit freundlichen Grüßen\nClaudia Engel' },
          { t: 'ex', kind: 'choice', h: 'Read the invitation and choose the right answer.', items: [
            { q: 'Wann ist das Vorstellungsgespräch?', o: ['am 14. Mai um 9 Uhr', 'am 1. Juni um 9 Uhr', 'am Freitag um 14 Uhr'], why: '*am Mittwoch, dem 14. Mai, um 9 Uhr*.' },
            { q: 'Was soll Herr Tesfaye mitbringen?', o: ['seine Zeugnisse', 'seinen Computer', 'einen Kuchen'], why: '*Bitte bringen Sie Ihre Zeugnisse mit.*' },
            { q: 'Was soll Herr Tesfaye bis Freitag machen?', o: ['Er soll sagen, ob der Termin passt.', 'Er soll seine Bewerbung schicken.', 'Er soll im Büro anfangen.'], why: '*Können Sie mir bitte bis Freitag kurz sagen, ob der Termin passt?*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Eine Stelle für 20 Stunden pro Woche ist in ___.', o: ['Teilzeit', 'Vollzeit', 'Freizeit'], why: '*Teilzeit*: part time.' },
      { q: 'Die Stelle ist nur für zwei Jahre. Sie ist ___.', o: ['befristet', 'unbefristet', 'gesucht'], why: '*befristet*: for a fixed time.' },
      { q: 'Ihr Lebenslauf und Ihre Zeugnisse sind Teil der ___.', o: ['Bewerbung', 'Erfahrung', 'Stelle'], why: 'The documents you send make the *Bewerbung*.' },
      { q: 'Ich ___ vor zwei Jahren nach Deutschland gekommen.', o: ['bin', 'habe', 'war'], why: '*kommen*: Perfekt with *sein*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Ich habe fünf Jahre in einem Hotel ___. (arbeiten)', a: ['gearbeitet'], why: 'The Perfekt of *arbeiten*: *gearbeitet*.' },
      { q: 'Ich lerne ___ einem Jahr Deutsch.', a: ['seit'], why: '*seit* + present: it started a year ago and it is still true.' },
      { q: 'Wir laden Sie zu einem ___ ein. (ein Gespräch über die Stelle)', a: ['Vorstellungsgespräch', 'Vorstellungsgespraech'], why: 'The *Vorstellungsgespräch* is the job interview.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
      ['Wann können Sie anfangen?', 'Ab dem ersten Juli.'],
      ['Welche Sprachen sprechen Sie?', 'Arabisch, Englisch und Deutsch.'],
      ['Was machen Sie zurzeit?', 'Ich arbeite in einem Café.'],
      ['Warum möchten Sie bei uns arbeiten?', 'Ihre Firma ist sehr modern, und ich arbeite gern im Team.'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Welche Erfahrung haben Sie?', why: 'Question part first, then the verb.' },
      { a: 'Wie lange wohnen Sie schon in Leipzig?', why: '*Wie lange* first, then the verb and *Sie*. *schon* comes before the place.' },
    ] },
  ],
};
