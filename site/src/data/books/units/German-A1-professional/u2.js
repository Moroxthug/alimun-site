// German A1 for work, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Jobs and workplaces',
  goal: 'Say what your job is and where you work.',
  art: 'mug',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['jobs', 'workplace', 'es-gibt', 'adjectives', 'articles'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'What is your job?',
      about: 'Ask about jobs and say what you do, with the forms for men and women.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'text', md: 'To ask about a job, say *Was sind Sie von Beruf?* or, to a colleague, *Was bist du von Beruf?*\n\nIn the answer there is **no article** before the job: *Ich bin Koch.* You can also say *Ich arbeite als Koch.*' },
          { t: 'table', caption: 'Jobs', explain: ['head'], quiz: true, head: ['Man', 'Woman'], rows: [
            ['der Koch', 'die Köchin'],
            ['der Kellner', 'die Kellnerin'],
            ['der Verkäufer', 'die Verkäuferin'],
            ['der Fahrer', 'die Fahrerin'],
            ['der Lehrer', 'die Lehrerin'],
            ['der Elektriker', 'die Elektrikerin'],
            ['der Krankenpfleger', 'die Krankenpflegerin'],
            ['der Arzt', 'die Ärztin'],
          ] },
          { t: 'tip', art: 'owl', md: 'The job for a woman usually ends in **-in**: *Lehrer*, *Lehrerin*. Sometimes the vowel changes too: *Koch*, *Köchin*; *Arzt*, *Ärztin*.' },
        ],
        [
          { t: 'dialogue', title: 'In the break room', lines: [
            { who: 'Karim', s: 'Hallo, ich bin Karim. Bist du neu hier?' },
            { who: 'Lena', s: 'Ja, ich bin Lena. Ich bin Köchin.' },
            { who: 'Karim', s: 'Ah, in der Küche! Ich bin Kellner im Restaurant.' },
            { who: 'Lena', s: 'Und was ist Sofia von Beruf?' },
            { who: 'Karim', s: 'Sofia ist auch Köchin. Und Omar ist Fahrer.' },
          ] },
          { t: 'examples', items: [
            { s: 'Was sind Sie von Beruf?', n: 'The polite question about a job.' },
            { s: 'Ich bin **Verkäuferin**.', n: 'No article: not *eine Verkäuferin*.' },
            { s: 'Er arbeitet **als** Fahrer.', n: '*als* + the job: in the job of driver.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the job for a woman.', items: [
            { q: 'Karim ist Kellner. Mira ist auch ___.', a: ['Kellnerin'], why: 'Add *-in*: *Kellner*, *Kellnerin*.' },
            { q: 'Paul ist Fahrer, und Sara ist auch ___.', a: ['Fahrerin'], why: 'Add *-in*: *Fahrer*, *Fahrerin*.' },
            { q: 'Herr Weber ist Koch, und Frau Weber ist ___.', a: ['Köchin', 'Koechin'], why: '*Koch*, *Köchin*: the *o* changes to *ö*.' },
            { q: 'Ben ist Elektriker. Seine Schwester ist auch ___.', a: ['Elektrikerin'], why: 'Add *-in*: *Elektrikerin*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'A man or a woman?', groups: ['der', 'die'], items: [
            { s: 'Verkäuferin', g: 1, why: '*-in* is the form for a woman: *die Verkäuferin*.' },
            { s: 'Arzt', g: 0, why: '*der Arzt*: the form for a man.' },
            { s: 'Lehrerin', g: 1, why: '*-in*: *die Lehrerin*.' },
            { s: 'Kellner', g: 0, why: '*der Kellner*: the form for a man.' },
            { s: 'Ärztin', g: 1, why: '*die Ärztin*: *a* changes to *ä* and the word ends in *-in*.' },
            { s: 'Koch', g: 0, why: '*der Koch*: the form for a man.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right sentence.', items: [
            { q: '', o: ['Ich bin Lehrerin.', 'Ich bin eine Lehrerin von Beruf.', 'Ich bin die Lehrerin von Beruf.'], why: 'With a job after *sein*, there is no article.' },
            { q: '', o: ['Er arbeitet als Fahrer.', 'Er arbeitet als ein Fahrer.', 'Er arbeitet von Fahrer.'], why: '*als* + the job, with no article.' },
            { q: '', o: ['Was sind Sie von Beruf?', 'Was ist Sie von Beruf?', 'Wer sind Sie von Beruf?'], why: '*Sie sind*, and the question word is *was*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Was bist du von Beruf?', why: 'Question word, verb, *du*, then *von Beruf*.' },
            { a: 'Ich arbeite als Krankenpfleger.', why: 'The verb *arbeite* is in second place, then *als* and the job.' },
            { a: 'Sofia ist auch Köchin.', why: 'The verb *ist* is in second place.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'My workplace',
      about: 'Say where you work, what there is at your workplace and what it is like.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'To say where you work, use **in** + the place. Learn these short phrases as they are: for *der* and *das* words you say **im** (*im Büro*), for *die* words you say **in der** (*in der Küche*).' },
          { t: 'table', caption: 'Where do you work?', explain: ['head'], quiz: true, head: ['Place', 'Ich arbeite …'], rows: [
            ['das Büro', 'im Büro'],
            ['das Hotel', 'im Hotel'],
            ['das Krankenhaus', 'im Krankenhaus'],
            ['der Supermarkt', 'im Supermarkt'],
            ['das Lager', 'im Lager'],
            ['die Küche', 'in der Küche'],
            ['die Schule', 'in der Schule'],
            ['die Werkstatt', 'in der Werkstatt'],
          ] },
          { t: 'tip', art: 'owl', md: 'With the name of a company you say **bei**: *Ich arbeite bei Möbel Hansen.*' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Who works where?', pairs: [
            ['die Lehrerin', 'in der Schule'],
            ['der Krankenpfleger', 'im Krankenhaus'],
            ['die Köchin', 'in der Küche'],
            ['der Elektriker', 'in der Werkstatt'],
            ['die Verkäuferin', 'im Supermarkt'],
          ] },
          { t: 'ex', kind: 'select', h: 'im or in der?', items: [
            { q: 'Ich bin Kellner. Ich arbeite ___ Restaurant.', o: ['im', 'in der'], why: '*das Restaurant*: *im Restaurant*.' },
            { q: 'Frau Kaya ist Lehrerin. Sie arbeitet ___ Schule.', o: ['in der', 'im'], why: '*die Schule*: *in der Schule*.' },
            { q: 'Omar arbeitet ___ Lager.', o: ['im', 'in der'], why: '*das Lager*: *im Lager*.' },
            { q: 'Lena ist Köchin. Sie arbeitet ___ Küche.', o: ['in der', 'im'], why: '*die Küche*: *in der Küche*.' },
          ] },
        ],
        [
          { t: 'text', md: 'To say what there is at your workplace, use **es gibt** + the accusative. Only *ein* for *der* words changes: it becomes **einen**. To say there is none, use *kein*: *Es gibt keinen Parkplatz.*' },
          { t: 'examples', items: [
            { s: 'Es gibt **einen** Parkplatz.', n: '*der Parkplatz*: *ein* becomes *einen*.' },
            { s: 'Es gibt **eine** Kantine.', n: '*die Kantine*: *eine* does not change.' },
            { s: 'Es gibt **ein** Café im Erdgeschoss.', n: '*das Café*: *ein* does not change.' },
            { s: 'Es gibt **keinen** Aufzug.', n: '*der Aufzug*: *kein* becomes *keinen*.' },
          ] },
          { t: 'text', md: 'To describe your workplace, use **sein** + an adjective: *Das Büro ist groß und hell. Die Kollegen sind nett. Die Arbeit ist interessant.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Es gibt ___ Kantine.', o: ['eine', 'einen', 'ein'], why: '*die Kantine*: *eine*.' },
            { q: 'Es gibt ___ Parkplatz für die Mitarbeiter.', o: ['einen', 'ein', 'eine'], why: '*der Parkplatz*: after *es gibt*, *ein* becomes *einen*.' },
            { q: 'Es gibt ___ Aufzug. Wir gehen zu Fuß.', o: ['keinen', 'kein', 'keine'], why: '*der Aufzug*: *keinen*. There is no lift.' },
            { q: 'Es gibt ___ Café im Erdgeschoss.', o: ['ein', 'einen', 'eine'], why: '*das Café*: *ein*.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which word is not a place of work?', items: [
            { o: ['der Kellner', 'das Büro', 'die Küche', 'das Lager'], why: '*der Kellner* is a person. The others are places.' },
            { o: ['nett', 'Hotel', 'Schule', 'Werkstatt'], why: '*nett* is an adjective. The others are places.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentences. Two words do not belong.', items: [
            { a: 'Mein Büro ist klein und hell.', extra: ['einen', 'im'], why: '*sein* + adjectives: no article and no ending.' },
            { a: 'Die Kollegen sind sehr nett.', extra: ['ist', 'eine'], why: '*die Kollegen* is plural: *sind*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: our team',
      about: 'Read short profiles of the people at a small company.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Small companies often show their team on their website. Read the page of a small company that repairs and sells bicycles.' },
          { t: 'reading', title: 'Das sind wir: Fahrrad Becker', md: 'Wir sind ein Team in Münster. Das Team ist klein. Es gibt einen Laden und eine Werkstatt.\n\n**Birgit Becker** ist die Chefin. Sie ist Kauffrau und arbeitet im Büro und im Laden. Sie spricht Deutsch und Englisch.\n\n**Mehmet Arslan** ist Mechaniker. Er arbeitet in der Werkstatt. Er kommt aus der Türkei und wohnt schon lange in Münster. Er spricht Türkisch und Deutsch.\n\n**Hannah Schulz** ist Verkäuferin. Sie arbeitet im Laden. Sie ist jung und sehr nett. Sie fährt jeden Tag mit dem Fahrrad zur Arbeit.\n\n**Liam Walsh** ist Fahrer. Er liefert die Fahrräder aus. Er kommt aus Irland und spricht Englisch und ein bisschen Deutsch.\n\nDie Werkstatt ist klein, aber hell. Der Laden ist groß. Es gibt auch einen Parkplatz für Kunden.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the page. True, false or not given?', items: [
            { q: 'Birgit Becker ist die Chefin.', a: 't', why: '*Birgit Becker ist die Chefin.*' },
            { q: 'Mehmet arbeitet im Laden.', a: 'f', why: '*Er arbeitet in der Werkstatt.*' },
            { q: 'Hannah ist Verkäuferin.', a: 't', why: '*Hannah Schulz ist Verkäuferin.*' },
            { q: 'Die Werkstatt ist groß.', a: 'f', why: '*Die Werkstatt ist klein, aber hell.* The shop is big.' },
            { q: 'Liam hat Kinder.', a: 'ng', why: 'The page says nothing about Liam’s family.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Who is it? Match the person and the job.', pairs: [
            ['Birgit Becker', 'Kauffrau'],
            ['Mehmet Arslan', 'Mechaniker'],
            ['Hannah Schulz', 'Verkäuferin'],
            ['Liam Walsh', 'Fahrer'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Wer spricht ein bisschen Deutsch?', o: ['Liam', 'Mehmet', 'Birgit'], why: '*Er … spricht Englisch und ein bisschen Deutsch.*' },
            { q: 'Was gibt es bei Fahrrad Becker?', o: ['einen Laden und eine Werkstatt', 'eine Kantine', 'keinen Parkplatz'], why: '*Es gibt einen Laden und eine Werkstatt.* There is also a car park.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Was sind Sie ___ Beruf?', o: ['von', 'als', 'bei'], why: 'The fixed question: *Was sind Sie von Beruf?*' },
      { q: 'Ich bin ___.', o: ['Ärztin', 'eine Ärztin von Beruf', 'die Ärztin'], why: 'After *sein*, a job has no article.' },
      { q: 'Es gibt ___ Parkplatz.', o: ['einen', 'eine', 'ein'], why: '*der Parkplatz*: *einen* after *es gibt*.' },
      { q: 'Ein Krankenpfleger arbeitet ___.', o: ['im Krankenhaus', 'in der Werkstatt', 'im Supermarkt'], why: 'Nurses work in a hospital: *im Krankenhaus*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Er ist Verkäufer, und sie ist ___.', a: ['Verkäuferin'], why: 'The form for a woman ends in *-in*.' },
      { q: 'Ich bin Lehrer. Ich arbeite in ___ Schule.', a: ['der'], why: '*die Schule*: *in der Schule*.' },
      { q: 'Es gibt ___ Kantine. Wir essen im Café. (kein)', a: ['keine'], why: '*die Kantine*: *keine*.' },
      { q: 'Die Kollegen ___ nett. (sein)', a: ['sind'], why: '*die Kollegen* is plural: *sind*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the job and the workplace.', pairs: [
      ['der Mechaniker', 'in der Werkstatt'],
      ['die Kellnerin', 'im Restaurant'],
      ['der Koch', 'in der Küche'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Ich arbeite als Fahrer.', why: '*als* + the job, with no article.' },
      { a: 'Es gibt eine Kantine.', why: '*es gibt* + the accusative: *eine Kantine*.' },
    ] },
  ],
};
