// German A2 for study and exams, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Speaking about yourself',
  goal: 'Talk about yourself, your plans and your opinions in simple words, and give reasons with weil and denn.',
  art: 'parrot',
  tags: { skills: ['speaking', 'grammar', 'reading'], topics: ['introducing-yourself', 'seit-dativ', 'weil-denn', 'dass', 'opinions', 'speaking-test'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Introducing yourself in a speaking test',
      about: 'Answer the usual questions about you, and say a little more than one word.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'In many A2 speaking tests, the first part is about **you**: your name, where you come from, where you live, your languages, your job or studies and your free time. You speak *Sie* to the examiner. With another candidate you often say *du*.' },
          { t: 'table', caption: 'Questions and answers about you', explain: ['head', 'col0'], quiz: true, head: ['Topic', 'Question', 'Answer'], rows: [
            ['Name', 'Wie heißen Sie?', 'Ich heiße Ana Costa.'],
            ['Age', 'Wie alt sind Sie?', 'Ich bin 28 Jahre alt.'],
            ['Country', 'Woher kommen Sie?', 'Ich komme aus Brasilien.'],
            ['Home', 'Wo wohnen Sie?', 'Ich wohne seit zwei Jahren in Köln.'],
            ['Languages', 'Welche Sprachen sprechen Sie?', 'Ich spreche Portugiesisch und Englisch.'],
            ['Job or studies', 'Was machen Sie beruflich?', 'Ich arbeite als Krankenpflegerin.'],
            ['Free time', 'Was machen Sie in Ihrer Freizeit?', 'Ich spiele gern Volleyball.'],
          ] },
        ],
        [
          { t: 'text', md: 'Two small words help a lot. **seit** + Dativ says how long something has been true until now: *seit einem Jahr, seit zwei Jahren*. In the plural Dativ the noun gets an *-n*. **als** + job has no article: *Ich arbeite **als** Lehrer.*' },
          { t: 'dialogue', title: 'In the speaking test', lines: [
            { who: 'Prüfer', s: 'Guten Tag. Bitte stellen Sie sich kurz vor.' },
            { who: 'Ji-woo', s: 'Guten Tag. Ich heiße Ji-woo Park und ich bin 26 Jahre alt. Ich komme aus Südkorea, aus Busan.' },
            { who: 'Prüfer', s: 'Und wo wohnen Sie jetzt?' },
            { who: 'Ji-woo', s: 'Ich wohne seit einem Jahr in Leipzig. Ich studiere dort Musik.' },
            { who: 'Prüfer', s: 'Welche Sprachen sprechen Sie?' },
            { who: 'Ji-woo', s: 'Koreanisch, Englisch und jetzt auch ein bisschen Deutsch.' },
            { who: 'Prüfer', s: 'Was machen Sie gern in Ihrer Freizeit?' },
            { who: 'Ji-woo', s: 'Ich gehe gern spazieren und ich koche oft mit Freunden.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not answer with only one word. Add one detail: *Ich komme aus Südkorea, aus Busan.* *Ich wohne seit einem Jahr in Leipzig. Ich studiere dort Musik.*' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['Woher kommen Sie?', 'Aus Ghana, aus Accra.'],
            ['Wo wohnen Sie?', 'In Bremen, in der Nähe vom Bahnhof.'],
            ['Wie lange wohnen Sie schon dort?', 'Seit drei Jahren.'],
            ['Was machen Sie beruflich?', 'Ich bin Mechaniker.'],
            ['Was machen Sie in Ihrer Freizeit?', 'Ich lese viel und gehe schwimmen.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Which answer is correct?', items: [
            { q: 'Wie alt sind Sie?', o: ['Ich bin 30 Jahre alt.', 'Ich habe 30 Jahre.', 'Ich bin 30 Jahren alt.'], why: 'In German you *are* an age: *Ich bin … Jahre alt.*' },
            { q: 'Was machen Sie beruflich?', o: ['Ich arbeite als Koch.', 'Ich arbeite als ein Koch.', 'Ich arbeite wie Koch.'], why: '*als* + job, with no article.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the answers.', items: [
            { q: 'Ich wohne seit zwei ___ in Hamburg. (das Jahr)', a: ['Jahren'], why: '*seit* + Dativ plural: *zwei Jahren*, with *-n*.' },
            { q: 'Ich lerne seit einem ___ Deutsch. (der Monat)', a: ['Monat'], why: '*seit einem Monat*: Dativ singular, the noun does not change.' },
            { q: 'Ich arbeite ___ Ingenieurin.', a: ['als'], why: '*als* + job.' },
            { q: 'Ich komme ___ Kenia.', a: ['aus'], why: '*kommen aus* + country.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make questions for your partner.', items: [
            { a: 'Was machst du in deiner Freizeit?', why: 'W-question: *Was*, then the verb, then *du*.' },
            { a: 'Welche Sprachen sprichst du?', why: '*Welche Sprachen* is the question phrase. The verb comes next.' },
            { a: 'Wie lange wohnst du schon hier?', why: '*Wie lange* asks how long. *schon* comes after *du*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Reasons and opinions',
      about: 'Say what you think with Ich finde and dass, and give reasons with weil and denn.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To give your opinion, start with **Ich finde** or **Ich glaube**. After *dass*, the verb goes to the **end**, like after *weil*.' },
          { t: 'examples', items: [
            { s: 'Ich **finde** den Kurs interessant.', n: '*finden* + noun + adjective.' },
            { s: 'Ich finde, dass Grammatik wichtig **ist**.', n: 'After *dass*, the verb *ist* is last.' },
            { s: 'Ich glaube, dass die Prüfung nicht so schwer **ist**.', n: '*Ich glaube, dass …*: I think that …' },
            { s: 'Das finde ich auch.', n: 'You agree.' },
            { s: 'Das sehe ich anders.', n: 'You do not agree, but you say it politely.' },
          ] },
        ],
        [
          { t: 'text', md: 'A good answer has a **reason**. Use **weil** with the verb at the end, or **denn** with normal word order. Both mean *because*.' },
          { t: 'table', caption: 'weil and denn', explain: ['head', 'col0'], head: ['Word order', 'Example'], rows: [
            ['weil: the verb at the end', 'Ich lerne Deutsch, weil ich in Berlin studieren möchte.'],
            ['denn: normal word order', 'Ich lerne Deutsch, denn ich möchte in Berlin studieren.'],
          ] },
          { t: 'tip', art: 'owl', md: 'When someone asks *Warum?*, you can answer with only the *weil* clause when you speak: *Warum lernen Sie Deutsch? Weil ich hier arbeiten möchte.*' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences. The verb goes to the end.', items: [
            { q: 'Ich lerne Deutsch, weil ich in Wien arbeiten ___. (möchten)', a: ['möchte', 'moechte'], why: 'After *weil*, the modal verb *möchte* is last.' },
            { q: 'Ich finde den Kurs gut, weil die Lehrerin alles gut ___. (erklären)', a: ['erklärt', 'erklaert'], why: '*die Lehrerin erklärt*, at the end of the *weil* clause.' },
            { q: 'Ich glaube, dass Grammatik wichtig ___. (sein)', a: ['ist'], why: 'After *dass*, the verb is last.' },
            { q: 'Ich mag Leipzig, weil die Stadt nicht so groß ___. (sein)', a: ['ist'], why: '*die Stadt ist*, at the end of the *weil* clause.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Ich bin müde, ___ ich habe schlecht geschlafen.', o: ['denn', 'weil', 'dass'], why: 'The verb *habe* comes second, so it is normal word order: *denn*.' },
            { q: 'Ich bin müde, ___ ich schlecht geschlafen habe.', o: ['weil', 'denn', 'aber'], why: 'The verb *habe* is at the end and the clause gives a reason: *weil*.' },
            { q: 'Ich finde, ___ Deutsch eine schöne Sprache ist.', o: ['dass', 'denn', 'weil'], why: '*Ich finde, dass …* gives an opinion.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ich lerne Deutsch, weil ich hier studieren möchte.', why: 'In the *weil* clause: *studieren* and then the modal verb *möchte* at the end.' },
            { a: 'Ich finde, dass der Test schwer ist.', why: 'In the *dass* clause, *ist* goes to the end.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs that are at the end of a clause.', items: [
            { s: 'Ich glaube, dass die Prüfung leicht [ist]. Ich lerne trotzdem viel, weil ich eine gute Note haben [möchte].', why: 'After *dass* and *weil*, the conjugated verb is last: *ist*, *möchte*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a model conversation',
      about: 'Read two candidates in a speaking task and see how they ask, answer and give reasons.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'In some A2 speaking tests, two candidates get cards with a topic and one word. You make a question with the word, and your partner answers. Here the topic is learning German.' },
          { t: 'reading', title: 'Thema: Deutsch lernen', md: '**Marta** (Karte: Warum?): Warum lernst du Deutsch, Yusuf?\n\n**Yusuf:** Ich lerne Deutsch, weil ich nächstes Jahr in Deutschland studieren möchte. Ich möchte Elektrotechnik studieren.\n\n**Yusuf** (Karte: Wie oft?): Und du, Marta? Wie oft hast du Deutschkurs?\n\n**Marta:** Dreimal pro Woche, immer am Abend. Das ist manchmal anstrengend, weil ich vorher acht Stunden arbeite.\n\n**Marta** (Karte: schwer?): Was findest du schwer?\n\n**Yusuf:** Ich finde die Artikel schwer. Der, die, das: Das ist für mich nicht logisch! Aber die Aussprache finde ich leicht.\n\n**Yusuf** (Karte: Lieblingswort?): Hast du ein Lieblingswort auf Deutsch?\n\n**Marta:** Ja, „Feierabend“. Das ist die Zeit nach der Arbeit. Ich finde das Wort schön, denn ich freue mich jeden Tag auf den Feierabend.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the conversation. True, false or not given?', items: [
            { q: 'Yusuf möchte in Deutschland studieren.', a: 't', why: '*weil ich nächstes Jahr in Deutschland studieren möchte*.' },
            { q: 'Marta hat jeden Tag Deutschkurs.', a: 'f', why: 'She has a course *dreimal pro Woche*.' },
            { q: 'Marta arbeitet vor dem Kurs.', a: 't', why: '*weil ich vorher acht Stunden arbeite*.' },
            { q: 'Yusuf findet die Aussprache schwer.', a: 'f', why: '*die Aussprache finde ich leicht*.' },
            { q: 'Marta kommt aus Polen.', a: 'ng', why: 'The conversation does not say where Marta comes from.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Was ist „Feierabend“?', o: ['die Zeit nach der Arbeit', 'ein Fest am Abend', 'der letzte Tag im Kurs'], why: 'Marta explains it: *die Zeit nach der Arbeit*.' },
            { q: 'Warum ist der Kurs für Marta manchmal anstrengend?', o: ['Sie arbeitet vorher acht Stunden.', 'Der Kurs ist sehr früh am Morgen.', 'Die Artikel sind nicht logisch.'], why: 'Her reason with *weil*: she works eight hours before the course.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Look at the answers: Yusuf and Marta do not stop after one sentence. They add a reason with *weil* or *denn*, or one more detail. Do the same in your test.' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Wie lange wohnen Sie schon in Köln?', o: ['Seit zwei Jahren.', 'Vor zwei Jahren.', 'Seit zwei Jahre.'], why: '*seit* + Dativ plural: *seit zwei Jahren*.' },
      { q: 'Was machen Sie beruflich?', o: ['Ich arbeite als Verkäuferin.', 'Ich arbeite als eine Verkäuferin.', 'Ich bin als Verkäuferin.'], why: '*als* + job, no article.' },
      { q: 'Ich lerne Deutsch, ___ ich möchte hier arbeiten.', o: ['denn', 'weil', 'dass'], why: 'Normal word order after the comma: *denn*.' },
      { q: 'Ich finde, ___ der Kurs zu schnell ist.', o: ['dass', 'denn', 'wenn'], why: '*Ich finde, dass …*, with the verb at the end.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Ich bin 24 Jahre ___.', a: ['alt'], why: '*Ich bin … Jahre alt.*' },
      { q: 'Ich lerne Deutsch, weil ich in Zürich studieren ___. (möchten)', a: ['möchte', 'moechte'], why: 'After *weil*, the modal verb goes to the end.' },
      { q: 'Ich glaube, dass die Prüfung im Mai ___. (sein)', a: ['ist'], why: 'After *dass*, the verb goes to the end.' },
      { q: 'Ich wohne ___ einem Jahr in Graz.', a: ['seit'], why: '*seit* + Dativ: from a time in the past until now.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Woher kommen Sie und wo wohnen Sie?', why: 'Two W-questions: each verb comes right after its question word.' },
      { a: 'Ich finde Deutsch schwer, aber interessant.', why: '*finden* + noun + adjective. *aber* joins the second adjective.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
      ['Welche Sprachen sprechen Sie?', 'Arabisch und Französisch.'],
      ['Warum lernen Sie Deutsch?', 'Weil ich hier studieren möchte.'],
      ['Wie finden Sie den Kurs?', 'Sehr gut, aber ein bisschen schnell.'],
    ] },
  ],
};
