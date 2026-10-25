// German B2 for study and exams, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Seminars and presentations',
  goal: 'Present a topic clearly, handle questions from the audience and take an active part in a seminar discussion.',
  art: 'parrot',
  tags: { skills: ['speaking', 'listening', 'reading', 'vocabulary'], topics: ['presentation', 'referat', 'discussion', 'agreeing-disagreeing', 'verbs-with-prepositions'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Presenting a topic and handling questions',
      about: 'Signpost your presentation and react calmly to questions.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'In German seminars students often give a presentation, a **Referat**, followed by questions and a discussion. Listeners follow a presentation more easily when you tell them where you are: what the topic is, how the talk is structured, when you move to the next point and when you finish. These signals are called **signposting**.' },
          { t: 'table', caption: 'Phrases for a presentation', explain: ['head', 'col0'], head: ['Stage', 'Phrase'], rows: [
            ['introducing the topic', 'In meinem Referat geht es um …'],
            ['giving the structure', 'Zunächst gehe ich auf … ein, anschließend …'],
            ['moving on', 'Damit komme ich zum nächsten Punkt.'],
            ['referring to a slide', 'Wie Sie auf dieser Folie sehen, …'],
            ['summing up', 'Zusammenfassend lässt sich festhalten, dass …'],
            ['ending', 'Vielen Dank für Ihre Aufmerksamkeit.'],
          ] },
        ],
        [
          { t: 'text', md: 'Questions are part of every presentation. You do not need to know every answer. It is fine to check that you have understood the question, to ask for a moment, or to say that you will look into it.' },
          { t: 'dialogue', title: 'Nach dem Referat', lines: [
            { who: 'Student', s: 'Sie haben gesagt, dass die Mieten vor allem in Großstädten steigen. Gilt das auch für kleinere Universitätsstädte?' },
            { who: 'Referentin', s: 'Danke für die Frage. Wenn ich Sie richtig verstehe, meinen Sie Städte mit einer großen Hochschule, aber wenigen Einwohnern?' },
            { who: 'Student', s: 'Genau.' },
            { who: 'Referentin', s: 'Dazu habe ich keine genauen Daten gefunden. Ich kann das aber gern nachrecherchieren und es im Forum ergänzen.' },
            { who: 'Dozent', s: 'Gute Idee. Gibt es weitere Fragen?' },
          ] },
          { t: 'examples', items: [
            { s: '**Wenn ich Sie richtig verstehe**, meinen Sie …', n: 'You check that you understood the question.' },
            { s: '**Darf ich darauf am Ende eingehen?** Das kommt auf der nächsten Folie.', n: 'You postpone a question politely.' },
            { s: '**Das kann ich im Moment nicht beantworten**, aber ich reiche die Information nach.', n: 'An honest answer when you do not know.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What does the speaker do with each phrase?', pairs: [
            ['In meinem Referat geht es um …', 'nennt das Thema'],
            ['Damit komme ich zum nächsten Punkt.', 'leitet über'],
            ['Wie Sie auf dieser Folie sehen, …', 'verweist auf eine Folie'],
            ['Zusammenfassend lässt sich festhalten, …', 'fasst zusammen'],
            ['Wenn ich Sie richtig verstehe, …', 'prüft eine Frage'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best reaction.', items: [
            { q: 'Eine Zuhörerin stellt eine Frage, die Sie auf der nächsten Folie beantworten.', o: ['Darf ich darauf gleich eingehen? Das kommt auf der nächsten Folie.', 'Das ist eine falsche Frage.', 'Warten Sie doch einfach ab!'], why: 'You postpone the question politely and explain why.' },
            { q: 'Sie verstehen die Frage nicht genau.', o: ['Könnten Sie die Frage bitte noch einmal anders formulieren?', 'Hä? Was meinen Sie?', 'Das gehört nicht zum Thema.'], why: 'A polite request with the Konjunktiv II *könnten*.' },
            { q: 'Sie kennen die Antwort nicht.', o: ['Das kann ich im Moment nicht beantworten, aber ich reiche es gern nach.', 'Das ist nicht wichtig.', 'Das weiß niemand.'], why: 'Honest and helpful: you offer to give the information later.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build sentences for a presentation.', items: [
            { a: 'Damit komme ich zum nächsten Punkt.', why: '*Damit* takes first place, so the verb *komme* comes second.' },
            { a: 'In meinem Referat geht es um Mehrsprachigkeit.', why: 'The phrase *In meinem Referat* takes first place, then the verb *geht*.' },
            { a: 'Zunächst gehe ich auf die Geschichte ein.', why: '*eingehen auf*: the particle *ein* goes to the end of the clause.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the phrases.', items: [
            { q: 'Wie Sie auf dieser ___ sehen, ist die Zahl gestiegen.', a: ['Folie'], why: '*die Folie*: a slide in a presentation.' },
            { q: 'Vielen Dank für Ihre ___.', a: ['Aufmerksamkeit'], why: 'The usual last sentence of a presentation.' },
            { q: 'Zusammenfassend lässt sich ___, dass das Thema noch wenig erforscht ist.', a: ['festhalten', 'sagen'], why: '*Zusammenfassend lässt sich festhalten* or *sagen, dass …*' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Agreeing, disagreeing and building on points',
      about: 'React to other speakers politely and add your own ideas.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In a seminar discussion you react to what others say. German academic discussions can be quite direct, but disagreement is usually softened: first you recognise the other point, then you add your view. You also show the connection to earlier contributions, for example with *anknüpfen an*.' },
          { t: 'table', caption: 'Reacting in a discussion', explain: ['head', 'col0'], head: ['Function', 'Phrase'], rows: [
            ['agreeing', 'Da stimme ich dir völlig zu.'],
            ['agreeing in part', 'Da gebe ich Ihnen teilweise recht, aber …'],
            ['disagreeing politely', 'Das sehe ich etwas anders.'],
            ['disagreeing politely', 'Ich bin mir nicht sicher, ob das stimmt.'],
            ['building on a point', 'Ich möchte an das anknüpfen, was Lena gesagt hat.'],
            ['adding', 'Darf ich kurz etwas ergänzen?'],
            ['asking for clarification', 'Wie meinst du das genau?'],
          ] },
        ],
        [
          { t: 'text', md: 'Several of these verbs need a particular case or preposition. *zustimmen* and *recht geben* take the **Dativ**: *Ich stimme **dir** zu.* *anknüpfen an* and *eingehen auf* take the **Akkusativ**: *Ich knüpfe an **deinen** Punkt an.*' },
          { t: 'tip', art: 'owl', md: 'Among students, *du* is common in German seminars. Lecturers often use *Sie* with students, and students usually say *Sie* to lecturers unless they are offered *du*.' },
          { t: 'ex', kind: 'match', h: 'What does each speaker do?', pairs: [
            ['Da stimme ich Ihnen völlig zu.', 'stimmt zu'],
            ['Das sehe ich etwas anders.', 'widerspricht höflich'],
            ['Ich knüpfe an Lenas Punkt an.', 'baut auf einem Beitrag auf'],
            ['Wie meinst du das genau?', 'bittet um Erklärung'],
            ['Da gebe ich dir teilweise recht, aber …', 'stimmt teilweise zu'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Da stimme ich ___ völlig zu. (du)', a: ['dir'], why: '*zustimmen* + Dativ: *dir*.' },
            { q: 'Da gebe ich ___ teilweise recht. (Sie)', a: ['Ihnen'], why: '*recht geben* + Dativ: *Ihnen*.' },
            { q: 'Ich möchte ___ Jonas’ Beitrag anknüpfen.', a: ['an'], why: '*anknüpfen an* + Akkusativ.' },
            { q: 'Darauf möchte ich später noch ___.', a: ['eingehen'], why: '*auf etwas eingehen*: to deal with a point. *Darauf* replaces *auf* + the point.' },
            { q: 'Das sehe ich etwas ___.', a: ['anders'], why: '*Das sehe ich anders*: a polite way to disagree.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which reaction is the most suitable in a seminar?', items: [
            { q: 'Eine Kommilitonin sagt etwas, das Sie für falsch halten.', o: ['Das ist ein interessanter Punkt, aber ich sehe das etwas anders.', 'Das ist totaler Quatsch.', 'Du hast keine Ahnung.'], why: 'First recognise the point, then disagree politely.' },
            { q: 'Sie möchten etwas zu einem Beitrag hinzufügen.', o: ['Darf ich kurz etwas ergänzen?', 'Jetzt rede ich!', 'Moment, das ist mein Thema.'], why: 'A polite question before you add something.' },
            { q: 'Sie verstehen einen Beitrag nicht ganz.', o: ['Wie meinst du das genau?', 'Das verstehe ich nicht, also ist es falsch.', 'Kannst du mal lauter reden?'], why: 'Ask for clarification with *Wie meinst du das genau?*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a seminar discussion',
      about: 'Follow a seminar discussion and notice how the speakers react to each other.',
      art: 'teacup',
      spreads: [
        [
          { t: 'reading', title: 'Seminar: Autofreie Innenstädte', md: '**Dr. Hartmann:** Vielen Dank, Amira, für Ihr Referat. Sie haben gezeigt, dass autofreie Innenstädte die Luftqualität verbessern können. Wer möchte daran anknüpfen?\n\n**Jonas:** Ich. Ich stimme Amira grundsätzlich zu. Allerdings frage ich mich, was mit Menschen passiert, die nicht gut zu Fuß sind. Für sie wäre eine autofreie Innenstadt eher ein Hindernis.\n\n**Amira:** Das ist ein wichtiger Punkt. In den Konzepten, die ich untersucht habe, gibt es meist Ausnahmen, zum Beispiel für den Lieferverkehr und für Menschen mit Behinderung. Aber du hast recht, das habe ich im Referat zu kurz behandelt.\n\n**Lucía:** Darf ich kurz etwas ergänzen? Manche Städte setzen zusätzlich auf kleine Busse, die in der Fußgängerzone fahren dürfen. Das könnte das Problem zumindest teilweise lösen.\n\n**Mehmet:** Ich sehe das etwas anders. Mein Eindruck ist, dass wir die Geschäfte vergessen. Wenn die Kundschaft nicht mehr mit dem Auto kommen kann, kauft sie vielleicht lieber am Stadtrand ein.\n\n**Dr. Hartmann:** Gibt es dazu Daten, Amira?\n\n**Amira:** Die Ergebnisse sind nicht eindeutig. In einigen Städten sind die Umsätze nach einer Übergangszeit gestiegen, in anderen gesunken. Ich würde daher nicht sagen, dass autofreie Zonen den Geschäften automatisch schaden.\n\n**Mehmet:** Das überzeugt mich teilweise. Trotzdem würde ich die Händler früh in die Planung einbeziehen.\n\n**Dr. Hartmann:** Damit sind wir bei einer zentralen Frage: Wer entscheidet eigentlich über solche Projekte? Darauf gehen wir nach der Pause ein.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Jonas lehnt Amiras Ergebnisse grundsätzlich ab.', a: 'f', why: '*Ich stimme Amira grundsätzlich zu.* He only raises one problem.' },
            { q: 'Amira gibt zu, dass sie einen Aspekt zu kurz behandelt hat.', a: 't', why: '*… das habe ich im Referat zu kurz behandelt.*' },
            { q: 'Lucía schlägt kleine Busse in der Fußgängerzone vor.', a: 't', why: '*Manche Städte setzen zusätzlich auf kleine Busse …*' },
            { q: 'Mehmet befürchtet, dass Geschäfte in der Innenstadt Kundschaft verlieren.', a: 't', why: '*… kauft sie vielleicht lieber am Stadtrand ein.*' },
            { q: 'Laut Amira sind die Umsätze in allen Städten gesunken.', a: 'f', why: 'In some cities they rose, in others they fell: *nicht eindeutig*.' },
            { q: 'Amira hat ihr Referat schon in einem anderen Seminar gehalten.', a: 'ng', why: 'The transcript says nothing about this.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'How do the speakers react?', items: [
            { q: 'Was macht Lucía mit „Darf ich kurz etwas ergänzen?“', o: ['Sie fügt einem Beitrag eine Idee hinzu.', 'Sie widerspricht Jonas.', 'Sie fasst die Diskussion zusammen.'], why: '*ergänzen*: to add to what has been said.' },
            { q: 'Wie widerspricht Mehmet?', o: ['höflich, mit „Ich sehe das etwas anders“', 'sehr direkt, mit „Das ist falsch“', 'gar nicht, er stimmt allen zu'], why: '*Ich sehe das etwas anders* is a soft way to disagree.' },
            { q: 'Was bedeutet „Das überzeugt mich teilweise“?', o: ['Mehmet akzeptiert einen Teil von Amiras Antwort.', 'Mehmet ist ganz überzeugt.', 'Mehmet hat die Antwort nicht verstanden.'], why: '*teilweise*: partly. He accepts some of it but adds a condition.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Mit welchem Satz leitet man zum nächsten Teil über?', o: ['Damit komme ich zum nächsten Punkt.', 'Vielen Dank für Ihre Aufmerksamkeit.', 'In meinem Referat geht es um …'], why: '*Damit komme ich zum nächsten Punkt* signals a new section.' },
      { q: 'Da stimme ich ___ zu.', o: ['Ihnen', 'Sie', 'Ihre'], why: '*zustimmen* + Dativ: *Ihnen*.' },
      { q: 'Welcher Satz ist ein höflicher Widerspruch?', o: ['Ich bin mir nicht sicher, ob das stimmt.', 'Das stimmt einfach nicht.', 'Da gebe ich dir völlig recht.'], why: 'A soft way to disagree. The last one agrees.' },
      { q: 'Sie verstehen eine Frage nicht. Was sagen Sie?', o: ['Wenn ich Sie richtig verstehe, meinen Sie …?', 'Darauf gehe ich nicht ein.', 'Das ist keine gute Frage.'], why: 'Check that you have understood the question.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Ich möchte ___ deinen Punkt anknüpfen.', a: ['an'], why: '*anknüpfen an* + Akkusativ.' },
      { q: 'Wie Sie auf dieser ___ sehen, …', a: ['Folie'], why: '*die Folie*: a slide.' },
      { q: 'Da gebe ich ___ teilweise recht. (du)', a: ['dir'], why: '*recht geben* + Dativ: *dir*.' },
      { q: 'Da stimme ich dir völlig ___.', a: ['zu'], why: '*zustimmen*: the particle *zu* goes to the end of the main clause.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Das sehe ich etwas anders.', why: '*Das* first, the verb *sehe* second.' },
      { a: 'Darauf gehe ich später ein.', why: '*Darauf* first, the verb *gehe* second, the particle *ein* at the end.' },
    ] },
  ],
};
