// German A2 for study and exams, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'In the classroom',
  goal: 'Understand classroom language and talk about your course: instructions, questions, subjects and timetables.',
  art: 'mug',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['classroom-language', 'imperative-sie', 'school-subjects', 'time-prepositions', 'timetable'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Wie sagt man …?',
      about: 'Understand what the teacher asks you to do, and ask your own questions in class.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Teachers and course books give many short instructions. They use the **imperative** with *Sie*: the verb comes first, then *Sie*. With separable verbs, the prefix goes to the end: *Hören Sie **zu**. Kreuzen Sie **an**.*' },
          { t: 'table', caption: 'Instructions in class', explain: ['head', 'col1'], quiz: true, head: ['German', 'English'], rows: [
            ['Öffnen Sie das Buch auf Seite 12.', 'Open the book at page 12.'],
            ['Lesen Sie den Text.', 'Read the text.'],
            ['Hören Sie zu.', 'Listen.'],
            ['Arbeiten Sie zu zweit.', 'Work in pairs.'],
            ['Kreuzen Sie an.', 'Tick the right answer.'],
            ['Ergänzen Sie die Sätze.', 'Complete the sentences.'],
            ['Ordnen Sie zu.', 'Match the parts.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In many courses the teacher says *ihr* to the group and *du* to one learner: *Lest den Text. Hört zu.* and *Lies bitte vor.* In exams the instructions usually use *Sie*.' },
        ],
        [
          { t: 'text', md: 'It is normal not to understand everything. These questions help you in every lesson. Learn them by heart.' },
          { t: 'examples', items: [
            { s: 'Wie **sagt man** „pen“ auf Deutsch?', n: 'You know the word in another language and want the German word.' },
            { s: 'Was **bedeutet** „Hausaufgabe“?', n: 'You want to know the meaning of a German word.' },
            { s: 'Wie **schreibt man** das?', n: 'You want to know the spelling.' },
            { s: 'Können Sie das bitte **wiederholen**?', n: 'You want the teacher to say it again.' },
            { s: 'Können Sie bitte **langsamer** sprechen?', n: '*langsamer* means more slowly.' },
            { s: 'Ich habe das nicht **verstanden**.', n: 'The Perfekt of *verstehen*: *ich habe … verstanden*.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'In the German lesson', lines: [
            { who: 'Frau Yılmaz', s: 'Öffnen Sie bitte das Buch auf Seite 24.' },
            { who: 'Tomás', s: 'Entschuldigung, auf welcher Seite?' },
            { who: 'Frau Yılmaz', s: 'Auf Seite 24. Lesen Sie bitte den Text oben.' },
            { who: 'Amira', s: 'Ich habe eine Frage. Was bedeutet „Stundenplan“?' },
            { who: 'Frau Yılmaz', s: 'Ein Stundenplan zeigt, wann man welchen Kurs hat.' },
            { who: 'Amira', s: 'Danke. Und wie schreibt man das?' },
            { who: 'Frau Yılmaz', s: 'S-T-U-N-D-E-N-P-L-A-N. Mit großem S, denn es ist ein Nomen.' },
          ] },
          { t: 'tip', art: 'owl', md: 'All German nouns start with a capital letter: *der Stundenplan, die Hausaufgabe, das Buch*. When you ask for a spelling, listen for *groß* (capital) and *klein* (small).' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What do you say? Match the situation and the question.', pairs: [
            ['Sie verstehen ein Wort nicht.', 'Was bedeutet das Wort?'],
            ['Die Lehrerin spricht sehr schnell.', 'Können Sie bitte langsamer sprechen?'],
            ['Sie kennen das deutsche Wort nicht.', 'Wie sagt man das auf Deutsch?'],
            ['Sie können das Wort nicht schreiben.', 'Wie schreibt man das?'],
            ['Sie haben den Satz nicht gehört.', 'Können Sie das bitte wiederholen?'],
          ] },
          { t: 'ex', kind: 'choice', h: 'The teacher gives an instruction. What do you do?', items: [
            { q: '„Arbeiten Sie zu zweit.“', o: ['Ich arbeite mit einer Partnerin oder einem Partner.', 'Ich arbeite allein.', 'Ich arbeite mit der ganzen Klasse.'], why: '*zu zweit* means two people together.' },
            { q: '„Ordnen Sie zu.“', o: ['Ich finde passende Paare.', 'Ich schreibe einen langen Text.', 'Ich lese den Text laut vor.'], why: '*zuordnen*: you put things that belong together into pairs.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the teacher’s instructions.', items: [
            { q: '___ Sie bitte zu. (zuhören)', a: ['Hören'], why: '*zuhören* is separable: *Hören Sie … zu.* The prefix *zu* goes to the end.' },
            { q: 'Kreuzen Sie die richtige Antwort ___. (ankreuzen)', a: ['an'], why: '*ankreuzen* is separable. The prefix *an* goes to the end.' },
            { q: 'Bitte ___ Sie den Text auf Seite 30. (lesen)', a: ['lesen'], why: 'The imperative with *Sie* uses the same form as the infinitive: *lesen Sie*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make questions for class.', items: [
            { a: 'Wie sagt man das auf Deutsch?', why: 'A W-question: the question word, then the verb, then the subject *man*.' },
            { a: 'Können Sie bitte langsamer sprechen?', why: 'A yes/no question: the modal verb first, the infinitive *sprechen* at the end.' },
            { a: 'Auf welcher Seite sind wir?', why: '*Auf welcher Seite* is the question phrase. The verb *sind* comes right after it.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Subjects, timetables and course information',
      about: 'Name school and university subjects, say when classes are and ask about a course.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A subject is **das Fach** (plural *die Fächer*). Many subject names are feminine: *die Mathematik, die Informatik, die Geschichte*. When you say what you study or have today, you use **no article**: *Ich studiere Informatik. Heute habe ich Mathe.*' },
          { t: 'table', caption: 'Subjects', explain: ['head', 'col1'], quiz: true, head: ['Subject', 'What you learn'], rows: [
            ['die Mathematik (Mathe)', 'numbers and formulas'],
            ['die Geschichte', 'life and events in the past'],
            ['die Biologie', 'plants, animals and the human body'],
            ['die Informatik', 'computers and programming'],
            ['die Wirtschaft', 'money, companies and markets'],
            ['die Kunst', 'painting and drawing'],
          ] },
          { t: 'tip', art: 'owl', md: 'At school, a class is *die Stunde* or *der Unterricht*. At university, a lecture is *die Vorlesung* and a small class is *das Seminar*. In a language school you go to *der Kurs*.' },
        ],
        [
          { t: 'text', md: 'Timetables need small time words. Use **am** with days, **um** with clock times, **von … bis** for the start and the end, **ab** for a start with no end, and **im** with months.' },
          { t: 'examples', items: [
            { s: '**Am** Montag habe ich Deutsch.', n: '*am* + day: *am Montag, am Wochenende*.' },
            { s: 'Der Kurs beginnt **um** neun Uhr.', n: '*um* + clock time.' },
            { s: 'Die Vorlesung ist **von** 10 **bis** 12 Uhr.', n: '*von … bis*: start and end.' },
            { s: '**Ab** Oktober lerne ich jeden Tag.', n: '*ab*: from this time on.' },
            { s: '**Im** März schreibe ich die Prüfung.', n: '*im* + month: *im Januar, im Mai*.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'At the school office', lines: [
            { who: 'Mei', s: 'Guten Tag, ich interessiere mich für den Prüfungskurs A2. Wann beginnt der Kurs?' },
            { who: 'Herr Brandt', s: 'Der nächste Kurs beginnt am 3. März.' },
            { who: 'Mei', s: 'Und wie oft ist der Unterricht?' },
            { who: 'Herr Brandt', s: 'Zweimal pro Woche, am Dienstag und am Donnerstag, immer von 18 bis 20:15 Uhr.' },
            { who: 'Mei', s: 'Wie viele Personen sind in einem Kurs?' },
            { who: 'Herr Brandt', s: 'Höchstens zwölf.' },
            { who: 'Mei', s: 'Muss ich vorher ein Buch kaufen?' },
            { who: 'Herr Brandt', s: 'Nein, das Kursbuch bekommen Sie am ersten Tag. Der Kurs ist hier im Haus, in Raum 312 im dritten Stock.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Der Kurs ist dreimal pro Woche.', a: 'f', why: '*Zweimal pro Woche*: on Tuesday and Thursday.' },
            { q: 'Der Unterricht ist am Abend.', a: 't', why: 'From 18 to 20:15 Uhr, so in the evening.' },
            { q: 'In einem Kurs sind maximal zwölf Personen.', a: 't', why: '*Höchstens zwölf* means not more than twelve.' },
            { q: 'Mei muss das Buch vor dem Kurs kaufen.', a: 'f', why: 'She gets the book on the first day: *am ersten Tag*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write am, um, von, bis, ab or im.', items: [
            { q: 'Das Seminar ist jede Woche ___ Mittwoch.', a: ['am'], why: '*am* + day.' },
            { q: 'Die Pause beginnt ___ halb elf.', a: ['um'], why: '*um* + clock time.' },
            { q: 'Ich habe Unterricht von 9 ___ 13 Uhr.', a: ['bis'], why: '*von … bis*: the end time comes after *bis*.' },
            { q: 'Mein Geburtstag ist ___ Januar.', a: ['im'], why: '*im* + month.' },
            { q: '___ heute lerne ich jeden Tag eine Stunde.', a: ['ab'], why: '*ab heute*: from today on, with no end.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['Wann beginnt der Kurs?', 'Am 3. März.'],
            ['Wie oft ist der Unterricht?', 'Zweimal pro Woche.'],
            ['Wo findet der Kurs statt?', 'In Raum 312.'],
            ['Wie lange dauert die Pause?', 'Fünfzehn Minuten.'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a timetable and a notice',
      about: 'Find days, times and rooms in a timetable, and understand a notice about changes.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Here is the timetable of an A2 course at a language school. Read the days, times and rooms carefully.' },
          { t: 'table', caption: 'Stundenplan Deutsch A2', head: ['Tag', 'Zeit', 'Kurs', 'Raum'], rows: [
            ['Montag', '9:00–12:15', 'Grammatik', '104'],
            ['Dienstag', '9:00–12:15', 'Lesen und Schreiben', '104'],
            ['Mittwoch', '14:00–15:30', 'Aussprache', '210'],
            ['Donnerstag', '9:00–12:15', 'Sprechen', '104'],
            ['Freitag', '9:00–10:30', 'Prüfungstraining', '012'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Look at the timetable. Choose the right answer.', items: [
            { q: 'Wann ist das Prüfungstraining?', o: ['am Freitag um 9 Uhr', 'am Mittwoch um 14 Uhr', 'am Freitag um 14 Uhr'], why: 'Freitag, 9:00–10:30: *Prüfungstraining*.' },
            { q: 'In welchem Raum ist der Aussprachekurs?', o: ['in Raum 210', 'in Raum 104', 'in Raum 012'], why: 'Mittwoch, *Aussprache*, Raum 210.' },
            { q: 'Bis wann geht der Unterricht am Montag?', o: ['bis Viertel nach zwölf', 'bis halb eins', 'bis Viertel vor zwölf'], why: '12:15 is *Viertel nach zwölf*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Schools put important changes on a notice, *der Aushang*. Two verbs are very common there: **ausfallen** (a class does not happen) and **stattfinden** (a class happens). Both are separable: *Der Kurs **fällt** am Mittwoch **aus**. Er **findet** am Freitag **statt**.*' },
          { t: 'reading', title: 'Aushang: Wichtige Informationen für die Kurse A2', md: 'Liebe Kursteilnehmerinnen und Kursteilnehmer,\n\nin der nächsten Woche gibt es einige Änderungen. Am Mittwoch fällt der Aussprachekurs aus, denn Frau Lehmann ist auf einer Fortbildung. Der Kurs findet dafür am Freitag von 11:00 bis 12:30 Uhr statt.\n\nAb Montag ist Raum 104 geschlossen, weil wir dort neue Fenster bekommen. Die Kurse finden zwei Wochen lang in Raum 108 im ersten Stock statt.\n\nAm Samstag gibt es außerdem einen Probetest für die A2-Prüfung, von 10 bis 11:30 Uhr. Bitte melden Sie sich bis Mittwoch im Sekretariat an. Der Probetest ist kostenlos.\n\nDas Sekretariat ist von Montag bis Freitag von 8:30 bis 13:00 Uhr geöffnet.\n\nIhr Team der Sprachschule Lindenhof' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the notice. True, false or not given?', items: [
            { q: 'Am Mittwoch gibt es keinen Aussprachekurs.', a: 't', why: '*Am Mittwoch fällt der Aussprachekurs aus.*' },
            { q: 'Frau Lehmann ist krank.', a: 'f', why: 'She is *auf einer Fortbildung*, a training course for teachers. She is not ill.' },
            { q: 'Raum 108 ist größer als Raum 104.', a: 'ng', why: 'The notice says nothing about the size of the rooms.' },
            { q: 'Man kann sich noch am Donnerstag für den Probetest anmelden.', a: 'f', why: '*bis Mittwoch*: Wednesday is the last day.' },
            { q: 'Der Probetest kostet nichts.', a: 't', why: '*kostenlos* means free.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Use the timetable and the notice together.', items: [
            { q: 'Wo ist der Kurs Sprechen am Donnerstag in der nächsten Woche?', o: ['in Raum 108', 'in Raum 104', 'in Raum 210'], why: 'Room 104 is closed, so the classes are in Raum 108.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words from the notice and their meaning.', pairs: [
            ['ausfallen', 'nicht stattfinden'],
            ['kostenlos', 'Man bezahlt nichts.'],
            ['das Sekretariat', 'das Büro der Schule'],
            ['geöffnet', 'nicht geschlossen'],
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words for places in the school.', items: [
            { s: 'Bitte melden Sie sich im [Sekretariat] an. Der Kurs ist ab Montag in [Raum] 108 im ersten [Stock].', why: '*das Sekretariat* (the office), *der Raum* (the room), *der Stock* (the floor).' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Sie verstehen ein Wort nicht. Sie fragen: „___“', o: ['Was bedeutet das?', 'Wie spät ist es?', 'Wo wohnen Sie?'], why: '*Was bedeutet …?* asks for the meaning.' },
      { q: '___ Sie den Text.', o: ['Lesen', 'Lest', 'Lies'], why: 'With *Sie*, the imperative uses the infinitive form: *Lesen Sie*.' },
      { q: 'Die Vorlesung ist ___ Dienstag.', o: ['am', 'um', 'im'], why: '*am* + day.' },
      { q: 'In ___ lernen wir viel über Computer.', o: ['Informatik', 'Geschichte', 'Kunst'], why: '*Informatik*: computers and programming.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Hören Sie bitte ___. (zuhören)', a: ['zu'], why: 'The prefix of *zuhören* goes to the end.' },
      { q: 'Der Kurs beginnt ___ 18 Uhr.', a: ['um'], why: '*um* + clock time.' },
      { q: 'Am Mittwoch fällt der Kurs ___. (ausfallen)', a: ['aus'], why: '*ausfallen* is separable: *fällt … aus*.' },
      { q: 'Wie ___ man das auf Deutsch? (sagen)', a: ['sagt'], why: '*man* takes the same verb form as *er* and *sie*: *sagt*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Können Sie das bitte wiederholen?', why: 'A yes/no question: *Können* first, the infinitive *wiederholen* at the end.' },
      { a: 'Wie schreibt man dieses Wort?', why: 'Question word, verb, subject *man*, then the object.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the subject and the topic.', pairs: [
      ['Mathematik', 'Zahlen und Formeln'],
      ['Geschichte', 'das Leben früher'],
      ['Biologie', 'Pflanzen und Tiere'],
      ['Wirtschaft', 'Geld und Firmen'],
    ] },
  ],
};
