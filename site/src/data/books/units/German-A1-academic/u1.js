// German A1 for study and exams, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'In the language course',
  goal: 'Introduce yourself in class, name the people in the course, understand the teacher’s instructions and ask about words.',
  art: 'pretzel',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['classroom-language', 'introductions', 'people-in-class', 'imperative-sie', 'language-school'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Hallo, ich bin …',
      about: 'Say hello in the course, introduce yourself and name the people in class.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In a language course you meet the teacher, **der Lehrer** or **die Lehrerin**, and the other learners. A learner in a course is **der Kursteilnehmer** (a man) or **die Kursteilnehmerin** (a woman). Many words for women end in **-in** and have the article *die*.' },
          { t: 'table', caption: 'People in the course', explain: ['head', 'col2'], quiz: true, head: ['Man', 'Woman', 'English'], rows: [
            ['der Lehrer', 'die Lehrerin', 'teacher'],
            ['der Kursteilnehmer', 'die Kursteilnehmerin', 'learner in a course'],
            ['der Student', 'die Studentin', 'student at a university'],
            ['der Schüler', 'die Schülerin', 'student at a school'],
            ['der Freund', 'die Freundin', 'friend'],
          ] },
          { t: 'tip', art: 'owl', md: 'In many courses the learners say *du* to each other. Many learners say *Sie* to the teacher, with *Frau* or *Herr* and the family name: *Frau Becker*, *Herr Wagner*. If you are not sure, ask the teacher what is usual.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Ich **heiße** Amira.', n: '*heißen*: say your name. *Ich bin Amira* is also possible.' },
            { s: 'Ich **komme** aus Ägypten.', n: '*kommen aus* + country: where you are from.' },
            { s: 'Ich **wohne** in Berlin.', n: '*wohnen in* + city: where you live now.' },
            { s: 'Ich **spreche** Arabisch und Englisch.', n: '*sprechen*: the languages you speak. *du sprichst, er spricht*.' },
            { s: 'Ich **lerne** Deutsch im Kurs A1.', n: '*lernen*: what you learn. *A1* is the level of the course.' },
            { s: 'Das **ist** Frau Becker. Sie **ist** die Lehrerin.', n: '*Das ist …* introduces another person.' },
          ] },
          { t: 'dialogue', title: 'The first day in the course', lines: [
            { who: 'Frau Becker', s: 'Guten Morgen und herzlich willkommen im Kurs A1! Ich heiße Sabine Becker. Ich bin die Lehrerin.' },
            { who: 'Frau Becker', s: 'Und wie heißen Sie?' },
            { who: 'Omar', s: 'Ich heiße Omar. Ich komme aus Jordanien.' },
            { who: 'Frau Becker', s: 'Welche Sprachen sprechen Sie, Omar?' },
            { who: 'Omar', s: 'Ich spreche Arabisch und ein bisschen Englisch.' },
            { who: 'Frau Becker', s: 'Danke. Und Sie?' },
            { who: 'Yuki', s: 'Ich bin Yuki. Ich komme aus Japan und wohne jetzt in Köln.' },
            { who: 'Frau Becker', s: 'Schön! Herzlich willkommen, Yuki.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Complete the verb sein.', verb: 'sein', tense: 'present', rows: [
            ['ich', 'bin'],
            ['du', 'bist'],
            ['er / sie', 'ist'],
            ['wir', 'sind'],
            ['ihr', 'seid'],
            ['sie / Sie', 'sind'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Who is it? Choose the right word.', items: [
            { q: 'Yuki lernt Deutsch im Kurs. Sie ist ___.', o: ['Kursteilnehmerin', 'Kursteilnehmer', 'Lehrer'], why: 'Yuki is a woman and a learner in the course, so the word ends in *-in*.' },
            { q: 'Herr Wagner unterrichtet den Kurs. Er ist ___.', o: ['Lehrer', 'Lehrerin', 'Schülerin'], why: '*Herr* tells you it is a man, and he teaches the course: *der Lehrer*.' },
            { q: 'Carlos studiert an der Universität. Er ist ___.', o: ['Student', 'Studentin', 'Schüler'], why: 'At a university you are *Student* (a man) or *Studentin* (a woman).' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'der or die? Sort the words.', groups: ['der', 'die'], items: [
            { s: 'Lehrerin', g: 1, why: 'A word for a woman with *-in*: *die Lehrerin*.' },
            { s: 'Kursteilnehmer', g: 0, why: 'A word for a man: *der Kursteilnehmer*.' },
            { s: 'Schülerin', g: 1, why: '*-in* for a woman: *die Schülerin*.' },
            { s: 'Student', g: 0, why: '*der Student*: a man at a university.' },
            { s: 'Freundin', g: 1, why: '*-in* for a woman: *die Freundin*.' },
            { s: 'Lehrer', g: 0, why: '*der Lehrer*: a man who teaches.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ich komme aus Japan.', why: 'The verb *komme* is in second position, after *ich*.' },
            { a: 'Wie heißen Sie?', why: 'A W-question: the question word first, then the verb, then *Sie*.' },
            { a: 'Ich lerne Deutsch im Kurs.', why: 'Subject, verb in second position, then the rest.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Hören Sie zu!',
      about: 'Understand the teacher’s instructions and ask about words you do not know.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The teacher and the course book give short instructions. They use the **imperative** with *Sie*: the verb comes first, then *Sie*. *Lesen Sie den Text.* With a separable verb, the small part goes to the end: *Hören Sie **zu**. Kreuzen Sie **an**.*' },
          { t: 'table', caption: 'Instructions in class', explain: ['head', 'col1'], quiz: true, head: ['German', 'English'], rows: [
            ['Öffnen Sie das Buch.', 'Open the book.'],
            ['Lesen Sie den Text.', 'Read the text.'],
            ['Hören Sie zu.', 'Listen.'],
            ['Schreiben Sie die Wörter.', 'Write the words.'],
            ['Arbeiten Sie zu zweit.', 'Work in pairs.'],
            ['Kreuzen Sie an.', 'Tick the right answer.'],
            ['Ergänzen Sie.', 'Complete the sentences.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Some teachers say *ihr* to the whole group: *Lest den Text. Hört zu.* You only need to understand these forms. In exams the instructions use *Sie*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Wie **sagt man** „book“ auf Deutsch?', n: 'You know a word in another language and want the German word.' },
            { s: 'Was **bedeutet** „Heft“?', n: 'You want to know what a German word means.' },
            { s: 'Wie **schreibt man** das?', n: 'You want to know the spelling.' },
            { s: 'Noch einmal, bitte.', n: 'You want to hear it again.' },
            { s: 'Langsam, bitte.', n: 'The teacher speaks too fast for you.' },
            { s: 'Ich **verstehe** das nicht.', n: '*nicht* comes after *das*.' },
          ] },
          { t: 'dialogue', title: 'In the German lesson', lines: [
            { who: 'Frau Becker', s: 'Öffnen Sie bitte das Buch auf Seite zehn.' },
            { who: 'Carlos', s: 'Entschuldigung, welche Seite?' },
            { who: 'Frau Becker', s: 'Seite zehn. Lesen Sie bitte den Text.' },
            { who: 'Mei', s: 'Frau Becker, was bedeutet „Wörterbuch“?' },
            { who: 'Frau Becker', s: 'Ein Wörterbuch ist ein Buch mit Wörtern. Hier, das ist ein Wörterbuch.' },
            { who: 'Mei', s: 'Danke. Und wie schreibt man das?' },
            { who: 'Frau Becker', s: 'W, Ö, R, T, E, R, B, U, C, H.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What do you say? Match the situation and the question.', pairs: [
            ['Sie verstehen ein Wort nicht.', 'Was bedeutet das?'],
            ['Sie kennen das deutsche Wort nicht.', 'Wie sagt man das auf Deutsch?'],
            ['Sie können das Wort nicht schreiben.', 'Wie schreibt man das?'],
            ['Die Lehrerin spricht sehr schnell.', 'Langsam, bitte.'],
            ['Sie hören den Satz nicht gut.', 'Noch einmal, bitte.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'The teacher gives an instruction. What do you do?', items: [
            { q: '„Arbeiten Sie zu zweit.“', o: ['Ich arbeite mit einer Partnerin oder einem Partner.', 'Ich arbeite allein.', 'Ich lese den Text.'], why: '*zu zweit* means two people together.' },
            { q: '„Hören Sie zu.“', o: ['Ich höre den Text.', 'Ich schreibe den Text.', 'Ich spreche mit der Lehrerin.'], why: '*zuhören* means to listen.' },
            { q: '„Kreuzen Sie an.“', o: ['Ich mache ein Kreuz: a, b oder c.', 'Ich öffne das Buch.', 'Ich schreibe einen Text.'], why: '*ankreuzen*: you mark the right answer with a cross.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the teacher’s instructions.', items: [
            { q: '___ Sie bitte den Text. (lesen)', a: ['Lesen'], why: 'The imperative with *Sie* uses the infinitive form, and the verb comes first.' },
            { q: 'Hören Sie bitte ___. (zuhören)', a: ['zu'], why: '*zuhören* is separable. The small part *zu* goes to the end.' },
            { q: '___ Sie das Buch auf Seite zwölf. (öffnen)', a: ['Öffnen', 'Oeffnen'], why: 'The verb comes first: *Öffnen Sie …*' },
            { q: 'Kreuzen Sie die richtige Antwort ___. (ankreuzen)', a: ['an'], why: '*ankreuzen* is separable: *Kreuzen Sie … an.*' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the question. Two words do not belong.', items: [
            { a: 'Wie sagt man das auf Deutsch?', extra: ['ist', 'heißt'], why: 'The fixed question is *Wie sagt man …?* The verb *sagt* comes after *Wie*.' },
            { a: 'Was bedeutet das Wort?', extra: ['Wie', 'sagt'], why: '*Was bedeutet …?* asks for the meaning of a word.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a language school',
      about: 'Read the welcome page of a language school and find the important information.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Here is the welcome page of a language school. First read the questions on the next page. Then look in the text for days, times and places.' },
          { t: 'reading', title: 'Willkommen in der Sprachschule am Markt', md: 'Hallo und herzlich willkommen! Hier lernen Sie Deutsch. Wir haben Kurse von A1 bis B2.\n\nDer Kurs A1 ist am Montag, am Mittwoch und am Freitag, von 9 bis 12 Uhr. In einem Kurs sind zehn bis vierzehn Personen. Die Lehrerinnen und Lehrer sprechen im Kurs Deutsch.\n\nIm ersten Stock gibt es eine Bibliothek mit Büchern und Wörterbüchern. Die Bibliothek ist von Montag bis Freitag offen.\n\nHaben Sie Fragen? Das Büro ist in Raum 1. Wir sprechen Deutsch, Englisch und Spanisch. E-Mail: info@example.com' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the text. True, false or not given?', items: [
            { q: 'In der Sprachschule gibt es Kurse von A1 bis B2.', a: 't', why: '*Wir haben Kurse von A1 bis B2.*' },
            { q: 'Der Kurs A1 ist am Dienstag.', a: 'f', why: 'It is on Monday, Wednesday and Friday.' },
            { q: 'Im Kurs sprechen die Lehrer Englisch.', a: 'f', why: '*Die Lehrerinnen und Lehrer sprechen im Kurs Deutsch.*' },
            { q: 'Der Kurs kostet 200 Euro.', a: 'ng', why: 'The text says nothing about the price.' },
            { q: 'Am Samstag ist die Bibliothek offen.', a: 'f', why: 'It is open *von Montag bis Freitag*, so not on Saturday.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Wann ist der Kurs A1?', o: ['von 9 bis 12 Uhr', 'von 12 bis 14 Uhr', 'von 9 bis 10 Uhr'], why: '*von 9 bis 12 Uhr*: the course starts at 9 and ends at 12.' },
            { q: 'Wie viele Personen sind in einem Kurs?', o: ['zehn bis vierzehn', 'zwei bis vier', 'zwanzig'], why: '*In einem Kurs sind zehn bis vierzehn Personen.*' },
            { q: 'Wo ist das Büro?', o: ['in Raum 1', 'im ersten Stock', 'in der Bibliothek'], why: '*Das Büro ist in Raum 1.* The library is on the first floor.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words from the text and their meaning.', pairs: [
            ['die Bibliothek', 'Hier gibt es viele Bücher.'],
            ['das Büro', 'Hier bekommen Sie Informationen.'],
            ['offen', 'nicht geschlossen'],
            ['der Kurs', 'Hier lernen Sie Deutsch.'],
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words for places in the school.', items: [
            { s: 'Das [Büro] ist in [Raum] 1. Die [Bibliothek] ist im ersten [Stock].', why: '*das Büro* (the office), *der Raum* (the room), *die Bibliothek* (the library), *der Stock* (the floor).' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Sie verstehen ein Wort nicht. Sie fragen: „___“', o: ['Was bedeutet das?', 'Wie heißen Sie?', 'Woher kommen Sie?'], why: '*Was bedeutet …?* asks for the meaning.' },
      { q: '___ Sie das Buch.', o: ['Öffnen', 'Öffnet', 'Öffnest'], why: 'With *Sie*, the imperative uses the infinitive form: *Öffnen Sie*.' },
      { q: 'Amira lernt im Kurs Deutsch. Sie ist ___.', o: ['Kursteilnehmerin', 'Lehrer', 'Kursteilnehmer'], why: 'A woman who learns in a course: *die Kursteilnehmerin*.' },
      { q: 'Ich ___ aus Brasilien.', o: ['komme', 'wohne', 'heiße'], why: '*kommen aus* + country.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Hören Sie bitte ___. (zuhören)', a: ['zu'], why: 'The small part of *zuhören* goes to the end.' },
      { q: 'Wir ___ im Kurs A1. (sein)', a: ['sind'], why: '*sein* with *wir*: *wir sind*.' },
      { q: 'Wie ___ man das auf Deutsch? (sagen)', a: ['sagt'], why: '*man* takes the same verb form as *er* and *sie*: *sagt*.' },
      { q: 'Du ___ Deutsch und Englisch. (sprechen)', a: ['sprichst'], why: '*sprechen* changes the vowel: *du sprichst*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Wie schreibt man das?', why: 'Question word, verb, then *man*.' },
      { a: 'Lesen Sie bitte den Text.', why: 'The imperative: the verb first, then *Sie*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the instruction and its meaning.', pairs: [
      ['Arbeiten Sie zu zweit.', 'zwei Personen zusammen'],
      ['Hören Sie zu.', 'gut hören'],
      ['Kreuzen Sie an.', 'ein Kreuz machen'],
      ['Ergänzen Sie.', 'die Sätze fertig schreiben'],
    ] },
  ],
};
