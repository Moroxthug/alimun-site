// German B1 for work, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Small talk at work',
  goal: 'Make small talk with colleagues and know when to say du.',
  art: 'teacup',
  tags: { skills: ['speaking', 'reading', 'vocabulary'], topics: ['small-talk', 'du-sie', 'workplace-culture'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'At the coffee machine',
      about: 'Safe topics, good questions and a friendly way to end the chat.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'Small talk with colleagues is short and friendly. Good topics are the weekend, holidays, the weather, the way to work and food. Many people do not talk about salary, politics or religion with colleagues they do not know well.' },
          { t: 'table', caption: 'Small talk topics', explain: ['head', 'col0'], head: ['Topic', 'Question', 'Follow-up'], rows: [
            ['The weekend', 'Wie war dein Wochenende?', 'Hast du etwas Schönes gemacht?'],
            ['Holidays', 'Hast du schon Pläne für den Urlaub?', 'Wohin fahrt ihr denn?'],
            ['The weather', 'Ganz schön kalt heute, oder?', 'Hoffentlich wird es bald wärmer.'],
            ['The way to work', 'Wie lange brauchst du zur Arbeit?', 'Fährst du mit dem Rad?'],
            ['Food', 'Warst du schon in der neuen Kantine?', 'Und, wie ist das Essen?'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'In der Kaffeeküche', lines: [
            { who: 'Sofie', s: 'Morgen, Mehmet! Na, wie war dein Wochenende?' },
            { who: 'Mehmet', s: 'Sehr schön, danke. Wir waren mit den Kindern im Zoo. Und deins?' },
            { who: 'Sofie', s: 'Ganz ruhig. Ich habe endlich mal wieder ein Buch gelesen. Ganz schön voll heute in der Bahn, oder?' },
            { who: 'Mehmet', s: 'Ja, total. Deshalb fahre ich im Sommer lieber mit dem Rad.' },
            { who: 'Sofie', s: 'Ach, wirklich? Wie lange brauchst du denn mit dem Rad?' },
            { who: 'Mehmet', s: 'Ungefähr zwanzig Minuten. Das ist sogar schneller als mit der Bahn.' },
            { who: 'Sofie', s: 'Nicht schlecht! Oh, schon fünf vor neun. Ich muss leider zum Meeting. Bis später!' },
            { who: 'Mehmet', s: 'Bis später, Sofie!' },
          ] },
          { t: 'text', md: 'Good small talk is a **ping-pong**: answer briefly, then ask back (*Und deins?*, *Und du?*). Show interest with *Ach, wirklich?*, *Klingt gut!* or *Nicht schlecht!* To end, give a short reason: *Ich muss leider los.*' },
          { t: 'tip', art: 'owl', md: 'Small words make questions sound relaxed: *Na, wie war dein Wochenende?* *Wie lange brauchst du denn?* *oder?* at the end asks the other person to agree: *Kalt heute, oder?*' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Mehmet war am Wochenende mit seinen Kindern im Zoo.', a: 't', why: '*Wir waren mit den Kindern im Zoo.*' },
            { q: 'Sofie hatte ein sehr stressiges Wochenende.', a: 'f', why: '*Ganz ruhig*: her weekend was quiet.' },
            { q: 'Mit dem Rad ist Mehmet schneller als mit der Bahn.', a: 't', why: '*Das ist sogar schneller als mit der Bahn.*' },
            { q: 'Sofie beendet das Gespräch ohne Grund.', a: 'f', why: 'She gives a reason: *Ich muss leider zum Meeting.*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best reply.', items: [
            { q: 'Wie war dein Wochenende?', o: ['Schön, danke! Wir waren wandern. Und deins?', 'Gut.', 'Warum fragst du?'], why: 'A short answer and a question back keep the conversation going.' },
            { q: 'Ich fliege nächste Woche nach Portugal.', o: ['Ach, wirklich? Klingt toll! Wohin genau?', 'Aha.', 'Ich mag Portugal nicht.'], why: 'Show interest and ask a follow-up question.' },
            { q: 'Sie möchten das Gespräch freundlich beenden:', o: ['Ich muss leider los, ich habe gleich einen Termin. Bis später!', 'So, das reicht jetzt.', 'Tschüss.'], why: 'A short reason and *Bis später!* end the chat in a friendly way.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['Wie war dein Wochenende?', 'Sehr entspannt, ich war bei meinen Eltern.'],
            ['Hast du schon Pläne für den Urlaub?', 'Ja, wir fahren im August an die Ostsee.'],
            ['Wie lange brauchst du zur Arbeit?', 'Mit der S-Bahn ungefähr eine halbe Stunde.'],
            ['Ganz schön warm heute, oder?', 'Ja, endlich Sommer!'],
            ['Warst du schon in der neuen Kantine?', 'Ja, gestern. Die Suppe war richtig gut.'],
          ] },
          { t: 'ex', kind: 'order', h: 'Build the small-talk questions.', items: [
            { a: 'Wie lange brauchst du zur Arbeit?', why: 'A W-question: *Wie lange*, then the verb, then *du*.' },
            { a: 'Hast du etwas Schönes gemacht?', why: 'A yes/no question in the Perfekt: *Hast* first, the participle *gemacht* at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Du or Sie?',
      about: 'Know when to say du at work, and how to offer it.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'At work, the rules for **du** and **Sie** are different from company to company. In many firms everybody says *du* from the first day. In others, people say *Sie* until someone offers the *du*. Traditionally the older person or the person with the higher position offers it. Once you say *du*, you usually do not go back to *Sie*.' },
          { t: 'examples', items: [
            { s: '**Wollen wir uns duzen?**', n: '*duzen*: to say *du*. *siezen*: to say *Sie*.' },
            { s: 'Ich bin Markus. **Wir können gern du sagen.**', n: 'Offering the *du* with your first name.' },
            { s: '**Gern!** Ich bin Lea.', n: 'Accepting: say yes and give your first name.' },
            { s: 'Bei uns im Team **duzen sich alle**.', n: 'Telling a new colleague how things are in the team.' },
          ] },
        ],
        [
          { t: 'text', md: 'When you change from *Sie* to *du*, more changes than the pronoun: the verb, the possessive and the imperative change too.' },
          { t: 'table', caption: 'Sie and du', explain: ['col0'], quiz: true, head: ['', 'Sie', 'du'], rows: [
            ['Verb', 'Haben Sie heute Zeit?', 'Hast du heute Zeit?'],
            ['Your', 'Ist das Ihr Kaffee?', 'Ist das dein Kaffee?'],
            ['Dativ', 'Kann ich Ihnen helfen?', 'Kann ich dir helfen?'],
            ['Akkusativ', 'Ich rufe Sie später an.', 'Ich rufe dich später an.'],
            ['Imperative', 'Kommen Sie rein!', 'Komm rein!'],
          ] },
          { t: 'tip', art: 'owl', md: 'Not sure? Start with *Sie*. Nobody is offended by *Sie*, but an unexpected *du* can sound too familiar, for example with customers.' },
        ],
        [
          { t: 'dialogue', title: 'Wollen wir uns duzen?', lines: [
            { who: 'Frau Keller', s: 'Herr García, Sie sind jetzt seit drei Wochen in meinem Team. Wie gefällt es Ihnen?' },
            { who: 'Tomás', s: 'Sehr gut, danke. Das Team ist wirklich nett.' },
            { who: 'Frau Keller', s: 'Das freut mich. Übrigens: Bei uns im Team duzen sich alle. Ich bin Sabine.' },
            { who: 'Tomás', s: 'Oh, gern! Ich bin Tomás.' },
            { who: 'Sabine', s: 'Also, Tomás, hast du morgen Zeit für ein kurzes Gespräch über dein Projekt?' },
            { who: 'Tomás', s: 'Ja, klar. Passt dir zehn Uhr?' },
            { who: 'Sabine', s: 'Zehn Uhr passt mir gut. Bis morgen!' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Think about the dialogue. Choose the right answer.', items: [
            { q: 'Wer bietet das Du an?', o: ['Frau Keller, die Teamleiterin', 'Tomás', 'ein Kollege aus dem Team'], why: '*in meinem Team*: Sabine Keller leads the team, so she offers the *du*.' },
            { q: 'Wie spricht Tomás Frau Keller am Ende an?', o: ['Er sagt du und Sabine.', 'Er sagt Sie und Frau Keller.', 'Er sagt du und Frau Keller.'], why: 'After the offer they use *du* and first names.' },
            { q: 'Ihre neue Chefin sagt: „Wir können gern du sagen. Ich bin Anja.“ Sie antworten:', o: ['Gern! Ich bin Kemal.', 'Gern, Frau Anja!', 'Danke, das ist nett von Ihnen.'], why: 'Accept with *Gern!* and your first name, then say *du*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Now you say du. Complete the sentences.', items: [
            { q: 'Haben Sie heute Zeit? → ___ du heute Zeit?', a: ['Hast'], why: '*du hast*: the verb changes too.' },
            { q: 'Kann ich Ihnen helfen? → Kann ich ___ helfen?', a: ['dir'], why: '*helfen* takes the Dativ: *Ihnen* → *dir*.' },
            { q: 'Ist das Ihr Laptop? → Ist das ___ Laptop?', a: ['dein'], why: '*Ihr* → *dein*; *der Laptop* is masculine, so no ending.' },
            { q: 'Rufen Sie mich bitte an! → ___ mich bitte an!', a: ['Ruf', 'Rufe'], why: 'The *du* imperative has no *du* and usually no ending: *Ruf mich an!*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that show the speaker says du.', items: [
            { s: 'Hallo Jana, [hast] [du] heute Mittag Zeit? Ich kann [dir] auch einen Kaffee mitbringen.', why: '*hast du* and *dir* are *du* forms. *Ich kann* is about the speaker.' },
            { s: 'Ist das [dein] Schlüssel? Er lag neben [deinem] Laptop.', why: '*dein* and *deinem* are the possessive of *du*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Workplace culture',
      about: 'Read an article about habits in German workplaces.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'reading', title: 'Kaffee, Kuchen und Feierabend', md: 'Wer in Deutschland eine neue Stelle beginnt, bemerkt schnell einige Gewohnheiten. Pünktlichkeit ist vielen Menschen wichtig. Wer ein paar Minuten zu spät zu einem Meeting kommt, entschuldigt sich meistens kurz. Termine plant man oft lange im Voraus.\n\nIn vielen Büros ist die Kaffeeküche der wichtigste Ort für Small Talk. Hier spricht man über das Wochenende, den Urlaub oder das Wetter. Über das Gehalt sprechen viele Kolleginnen und Kollegen dagegen nicht so gern.\n\nHat jemand Geburtstag, bringt er oder sie in vielen Firmen selbst Kuchen für das Team mit. Das überrascht viele Menschen aus anderen Ländern, denn dort lädt oft das Team das Geburtstagskind ein. Auch wer die Firma verlässt, lädt die Kollegen oft zu einer kleinen Feier ein, dem sogenannten Ausstand.\n\nIn der Mittagspause sagen manche Kollegen „Mahlzeit!“, auch wenn sie gar nicht essen. Das ist ein Gruß, besonders in der Mittagszeit.\n\nSehr wichtig ist auch der Feierabend. Wenn die Arbeit vorbei ist, möchten viele Menschen ihre Ruhe haben. E-Mails am Abend oder am Wochenende sind in vielen Firmen nicht gern gesehen.\n\nUnd du oder Sie? Das ist von Firma zu Firma verschieden. Am besten hören Sie in den ersten Tagen gut zu, wie die anderen miteinander sprechen.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the article. True, false or not given?', items: [
            { q: 'Wer zu spät zu einem Meeting kommt, entschuldigt sich meistens.', a: 't', why: '*… entschuldigt sich meistens kurz.*' },
            { q: 'In der Kaffeeküche spricht man oft über das Gehalt.', a: 'f', why: 'Many colleagues *sprechen nicht so gern* about salary.' },
            { q: 'In vielen Firmen bringt das Geburtstagskind den Kuchen mit.', a: 't', why: '*… bringt er oder sie in vielen Firmen selbst Kuchen … mit.*' },
            { q: '„Mahlzeit!“ sagt man nur, wenn man gerade isst.', a: 'f', why: '*… auch wenn sie gar nicht essen*: it is a greeting.' },
            { q: 'Viele Firmen bezahlen die Arbeit am Wochenende besser.', a: 'ng', why: 'The article does not talk about pay for weekend work.' },
            { q: 'In allen deutschen Firmen sagt man Sie.', a: 'f', why: '*Das ist von Firma zu Firma verschieden.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words from the article and their meaning.', pairs: [
            ['der Feierabend', 'die Zeit nach der Arbeit'],
            ['der Ausstand', 'eine kleine Feier, wenn jemand die Firma verlässt'],
            ['die Kaffeeküche', 'ein kleiner Raum für Kaffee und Pausen'],
            ['„Mahlzeit!“', 'ein Gruß in der Mittagszeit'],
            ['im Voraus', 'schon früh, lange vor dem Termin'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Was überrascht viele Menschen aus anderen Ländern?', o: ['Das Geburtstagskind bringt selbst Kuchen mit.', 'Man trinkt in der Pause Kaffee.', 'Man spricht über das Wetter.'], why: 'In other countries the team often invites the person with the birthday.' },
            { q: 'Was rät der Text für die ersten Tage?', o: ['Gut zuhören, ob die anderen du oder Sie sagen.', 'Allen sofort das Du anbieten.', 'Abends E-Mails an das Team schreiben.'], why: '*Am besten hören Sie in den ersten Tagen gut zu …*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ein gutes Thema für Small Talk mit neuen Kollegen ist ___.', o: ['das Wochenende', 'das Gehalt', 'die Religion'], why: 'The weekend is a safe topic.' },
      { q: 'Ganz schön kalt heute, ___?', o: ['oder', 'denn', 'also'], why: '*…, oder?* asks the other person to agree.' },
      { q: 'Traditionell bietet das Du meistens ___ an.', o: ['die ältere Person oder die Chefin', 'die jüngere Person', 'der neue Kollege'], why: 'The older person or the one with the higher position.' },
      { q: 'Die Zeit nach der Arbeit heißt ___.', o: ['Feierabend', 'Ausstand', 'Mahlzeit'], why: '*der Feierabend*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Now you say du. Complete the sentences.', items: [
      { q: 'Können Sie mir helfen? → ___ du mir helfen?', a: ['Kannst'], why: '*du kannst*.' },
      { q: 'Wie war Ihr Urlaub? → Wie war ___ Urlaub?', a: ['dein'], why: '*Ihr* → *dein*.' },
      { q: 'Ich schicke Ihnen die Datei. → Ich schicke ___ die Datei.', a: ['dir'], why: 'Dativ: *Ihnen* → *dir*.' },
      { q: 'Wollen wir uns ___? Ich bin Paula. (du sagen)', a: ['duzen'], why: '*sich duzen*: to say *du* to each other.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Wie war dein Wochenende?', why: 'A W-question: *Wie*, the verb *war*, then the subject.' },
      { a: 'Wollen wir uns duzen?', why: 'A yes/no question: *Wollen* first, the infinitive *duzen* at the end.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Wenn man unsicher ist, sagt man am besten erst einmal Sie.', a: 't', why: '*Sie* is the safe choice.' },
      { q: '„Mahlzeit!“ ist ein Gruß am Abend.', a: 'f', why: 'It is a greeting around lunchtime.' },
    ] },
  ],
};
