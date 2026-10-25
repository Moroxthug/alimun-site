// German B1 for study and exams, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Starting a course or university',
  goal: 'Enrol, choose courses and find your way around.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'reading', 'writing', 'speaking'], topics: ['university', 'enrolment', 'indirect-questions', 'formal-email'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Words for your first semester',
      about: 'The words for enrolment, classes and exams that you hear in your first weeks.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At a German university you meet many new words in your first weeks. Before you start, you enrol: this is called the **Immatrikulation**. After that you get a student number, the **Matrikelnummer**, and a student card.' },
          { t: 'table', caption: 'Words for your first semester', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['die Immatrikulation', 'enrolment at a university'],
            ['die Matrikelnummer', 'your student number'],
            ['das Semester', 'one of the two halves of the academic year'],
            ['die Vorlesung', 'a lecture: one teacher talks, many students listen'],
            ['das Seminar', 'a smaller class where students discuss and give talks'],
            ['die Sprechstunde', 'the time when a teacher meets students in the office'],
            ['das Modul', 'a group of classes on one topic, often with one exam'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Germany the *Wintersemester* usually starts in October and the *Sommersemester* in April. Most universities ask for a fee each semester, the *Semesterbeitrag*. It often includes a ticket for local buses and trains, the *Semesterticket*.' },
        ],
        [
          { t: 'text', md: 'The verb for enrolling is reflexive: *sich immatrikulieren* or *sich einschreiben*. For a single class you usually register online: *sich für ein Seminar anmelden*. In an *Übung* or a *Tutorium* you practise the content of a lecture in a small group.' },
          { t: 'examples', items: [
            { s: 'Ich **habe mich** im September **immatrikuliert**.', n: 'Perfekt of *sich immatrikulieren*. Verbs that end in *-ieren* have no *ge-* in the Partizip II.' },
            { s: 'Für das Seminar muss man **sich** online **anmelden**.', n: '*sich anmelden für* + Akkusativ: to register for a class.' },
            { s: 'Die Vorlesung **findet** jeden Montag im Hörsaal 3 **statt**.', n: '*stattfinden*: to take place. A *Hörsaal* is a large room for lectures.' },
            { s: 'Frau Dr. Lange hat dienstags von 10 bis 12 Uhr **Sprechstunde**.', n: 'At this time you can visit her in her office with your questions.' },
          ] },
        ],
        [
          { t: 'text', md: 'Students are often called *Studierende*, and university teachers are *Dozentinnen* and *Dozenten*. At the end of a module there is often an exam: a written *Klausur*, a longer text called a *Hausarbeit*, or a talk in class, the *Referat*.' },
          { t: 'ex', kind: 'match', h: 'Match each word with its description.', pairs: [
            ['die Vorlesung', 'Eine Professorin spricht, viele Studierende hören zu.'],
            ['das Seminar', 'Eine kleine Gruppe diskutiert und hält Referate.'],
            ['die Sprechstunde', 'Man kann mit der Dozentin in ihrem Büro sprechen.'],
            ['die Klausur', 'Eine schriftliche Prüfung, oft am Ende des Semesters.'],
            ['das Referat', 'Ein Vortrag, den ein Student im Seminar hält.'],
            ['die Hausarbeit', 'Ein langer Text, den man zu Hause schreibt.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Vor dem ersten Semester muss man sich ___.', o: ['immatrikulieren', 'stattfinden', 'unterrichten'], why: '*sich immatrikulieren*: to enrol. The other verbs are not reflexive.' },
            { q: 'Meine ___ ist 4471523. Ich brauche sie für jedes Formular.', o: ['Matrikelnummer', 'Sprechstunde', 'Vorlesung'], why: 'A number for every form: your student number, the *Matrikelnummer*.' },
            { q: 'Das Wintersemester beginnt in Deutschland meistens im ___.', o: ['Oktober', 'Januar', 'Juli'], why: 'The winter semester usually starts in October.' },
            { q: 'Die Vorlesung findet im großen ___ statt.', o: ['Hörsaal', 'Sekretariat', 'Semester'], why: 'Lectures take place in a large lecture room, the *Hörsaal*.' },
            { q: 'Für das Seminar muss ich mich bis Freitag online ___.', o: ['anmelden', 'abgeben', 'teilnehmen'], why: '*sich anmelden*: to register. *abgeben* and *teilnehmen* are not used with *sich*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words for a kind of class.', items: [
            { s: 'Am Montag habe ich eine [Vorlesung], am Dienstag ein [Seminar] und am Mittwoch eine [Übung].', why: 'Three kinds of class: a lecture, a seminar and a practice class.' },
            { s: 'Nach der [Vorlesung] gehe ich mit Lena in die Mensa und dann in die Bibliothek.', why: 'The *Mensa* and the *Bibliothek* are places, not classes.' },
            { s: 'Im [Tutorium] üben wir mit einem älteren Studenten die Aufgaben.', why: 'A *Tutorium* is a small practice class, often led by an older student.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Asking for information',
      about: 'Ask polite questions at a university office and in an email.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Questions about enrolment go to the student office, the **Studierendensekretariat**. International students can also ask the **International Office**. Polite questions are often **indirect**: *Können Sie mir sagen, …?* In the second part, the verb goes to the **end**.' },
          { t: 'dialogue', title: 'At the student office', lines: [
            { who: 'Mitarbeiterin', s: 'Guten Tag. Was kann ich für Sie tun?' },
            { who: 'Karim', s: 'Guten Tag. Ich möchte mich für den Master Informatik immatrikulieren. Können Sie mir sagen, welche Unterlagen ich brauche?' },
            { who: 'Mitarbeiterin', s: 'Sie brauchen Ihren Zulassungsbescheid, Ihren Pass, ein Foto und einen Nachweis über Ihre Krankenversicherung.' },
            { who: 'Karim', s: 'Und wissen Sie, bis wann ich den Semesterbeitrag bezahlen muss?' },
            { who: 'Mitarbeiterin', s: 'Die Frist steht in Ihrem Zulassungsbescheid.' },
            { who: 'Karim', s: 'Vielen Dank. Ich hätte noch eine Frage: Ist das Büro auch am Freitag geöffnet?' },
            { who: 'Mitarbeiterin', s: 'Ja, aber nur bis 12 Uhr.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Direct and indirect questions', explain: ['head'], head: ['Direct', 'Indirect'], rows: [
            ['Wann beginnt die Vorlesung?', 'Können Sie mir sagen, wann die Vorlesung beginnt?'],
            ['Welche Unterlagen brauche ich?', 'Ich möchte wissen, welche Unterlagen ich brauche.'],
            ['Ist das Büro am Freitag geöffnet?', 'Wissen Sie, ob das Büro am Freitag geöffnet ist?'],
            ['Muss ich mich anmelden?', 'Könnten Sie mir sagen, ob ich mich anmelden muss?'],
          ] },
          { t: 'tip', art: 'owl', md: 'A yes/no question becomes an indirect question with *ob*. A question with a question word (*wann, wo, welche*) keeps that word: *Wissen Sie, **wo** der Hörsaal ist?*' },
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['Können Sie mir sagen, wo das Prüfungsamt ist?', 'Können Sie mir sagen, wo ist das Prüfungsamt?', 'Können Sie mir sagen, ob wo das Prüfungsamt ist?'], why: 'In an indirect question the verb *ist* goes to the end.' },
            { q: '', o: ['Ich möchte wissen, ob der Kurs noch frei ist.', 'Ich möchte wissen, ob ist der Kurs noch frei.', 'Ich möchte wissen, wenn der Kurs noch frei ist.'], why: 'A yes/no question becomes *ob* + verb at the end. *wenn* is not used for questions.' },
            { q: '', o: ['Wissen Sie, wann die Sprechstunde beginnt?', 'Wissen Sie, wann beginnt die Sprechstunde?', 'Wissen Sie, dass wann die Sprechstunde beginnt?'], why: 'The question word *wann* starts the clause, and the verb *beginnt* goes to the end.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the indirect questions.', items: [
            { q: 'Können Sie mir sagen, wo die Bibliothek ___? (sein)', a: ['ist'], why: 'The verb goes to the end of the indirect question: *wo die Bibliothek ist*.' },
            { q: 'Ich möchte wissen, wann die Vorlesung ___. (beginnen)', a: ['beginnt'], why: '*die Vorlesung* is singular: *beginnt*, at the end.' },
            { q: 'Wissen Sie, ___ ich ein Foto brauche? (yes/no question)', a: ['ob'], why: 'The direct question is *Brauche ich ein Foto?*, a yes/no question. So the indirect question starts with *ob*.' },
            { q: 'Könnten Sie mir sagen, bis wann ich mich ___ muss? (anmelden)', a: ['anmelden'], why: 'The modal verb *muss* goes to the end, the infinitive *anmelden* comes just before it.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the polite questions.', items: [
            { a: 'Können Sie mir sagen, wann das Büro geöffnet ist?', why: 'After *wann*, the verb *ist* goes to the end.' },
            { a: 'Ich möchte wissen, ob ich einen Test machen muss.', why: '*ob* starts the second part, and *muss* goes to the end.' },
            { a: 'Wissen Sie, welche Unterlagen ich brauche?', why: '*welche Unterlagen* starts the indirect question, and *brauche* goes to the end.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Frage zur Anmeldung für Sprachkurse', md: 'Sehr geehrte Damen und Herren,\n\nmein Name ist Mei Lin Zhou. Ich studiere seit diesem Wintersemester Biologie an Ihrer Universität (Matrikelnummer 3328415). Im nächsten Semester möchte ich einen Deutschkurs auf dem Niveau B2 besuchen.\n\nKönnten Sie mir bitte sagen, wann die Anmeldung für die Sprachkurse beginnt? Außerdem würde ich gern wissen, ob ich vorher einen Einstufungstest machen muss.\n\nVielen Dank im Voraus.\n\nMit freundlichen Grüßen\nMei Lin Zhou' },
          { t: 'ex', kind: 'tf', h: 'Read the email. True or false?', items: [
            { q: 'Mei Lin studiert schon seit zwei Jahren an der Universität.', a: 'f', why: 'She has studied there *seit diesem Wintersemester*: since this winter semester.' },
            { q: 'Sie möchte einen Deutschkurs besuchen.', a: 't', why: '*Im nächsten Semester möchte ich einen Deutschkurs … besuchen.*' },
            { q: 'Sie fragt, ob sie einen Test machen muss.', a: 't', why: '*ob ich vorher einen Einstufungstest machen muss*: an indirect yes/no question.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Write your *Matrikelnummer* in every email to a university office. Then the office can find your file quickly.' },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A welcome guide',
      about: 'Read a guide for new students and find the information you need.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'Many universities give new students a welcome guide. Before you read it, learn these words. Then read the guide and look for the answers to your own questions: where to go, what to do and who can help.' },
          { t: 'table', caption: 'Words in the welcome guide', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['die Orientierungswoche', 'a week of events for new students before classes start'],
            ['das Vorlesungsverzeichnis', 'the list of all classes in a semester'],
            ['der Stundenplan', 'your plan of classes for the week'],
            ['die Studienberatung', 'an office that advises students about their studies'],
            ['die Fachschaft', 'a group of students from one subject who help other students'],
          ] },
        ],
        [
          { t: 'reading', title: 'Willkommen an der Universität!', md: 'Liebe Erstsemester,\n\nherzlich willkommen an unserer Universität! In den ersten Wochen ist vieles neu. Hier finden Sie die wichtigsten Informationen.\n\n**Vor dem Semester:** In der Orientierungswoche, eine Woche vor dem Beginn der Vorlesungen, stellen sich die Fachbereiche vor. Studierende aus höheren Semestern zeigen Ihnen den Campus, die Bibliothek und die Mensa. Die Teilnahme ist freiwillig, aber wir empfehlen sie sehr.\n\n**Ihr Stundenplan:** Ihren Stundenplan machen Sie selbst. Im Vorlesungsverzeichnis finden Sie alle Kurse. Für die meisten Seminare müssen Sie sich online anmelden, weil die Zahl der Plätze begrenzt ist. Für Vorlesungen ist das oft nicht nötig.\n\n**Bibliothek:** Mit Ihrem Studierendenausweis können Sie Bücher ausleihen. Die Bibliothek ist auch am Samstag und am Sonntag geöffnet.\n\n**Hilfe und Beratung:** Bei Fragen zum Studium hilft Ihnen die Studienberatung. Die Fachschaft, eine Gruppe von Studierenden aus Ihrem Fach, beantwortet gern Ihre Fragen zum Alltag an der Uni. Internationale Studierende können sich auch an das International Office wenden.\n\nWir wünschen Ihnen einen guten Start!' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the guide. True, false or not given?', items: [
            { q: 'Die Orientierungswoche ist nach dem Beginn der Vorlesungen.', a: 'f', why: 'It is *eine Woche vor dem Beginn der Vorlesungen*: one week before.' },
            { q: 'Alle neuen Studierenden müssen an der Orientierungswoche teilnehmen.', a: 'f', why: '*Die Teilnahme ist freiwillig*: you do not have to take part.' },
            { q: 'Für die meisten Seminare muss man sich online anmelden.', a: 't', why: 'The guide says so, because the number of places is limited.' },
            { q: 'Man kann auch am Sonntag in die Bibliothek gehen.', a: 't', why: '*Die Bibliothek ist auch am Samstag und am Sonntag geöffnet.*' },
            { q: 'Die Mensa ist abends geschlossen.', a: 'ng', why: 'The guide does not give the opening times of the *Mensa*.' },
            { q: 'Die Fachschaft besteht aus Professorinnen und Professoren.', a: 'f', why: 'The *Fachschaft* is *eine Gruppe von Studierenden*: a group of students.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Answer the questions about the guide.', items: [
            { q: 'Wo findet man alle Kurse des Semesters?', o: ['im Vorlesungsverzeichnis', 'in der Orientierungswoche', 'in der Fachschaft'], why: '*Im Vorlesungsverzeichnis finden Sie alle Kurse.*' },
            { q: 'Was braucht man, um Bücher auszuleihen?', o: ['den Studierendenausweis', 'den Stundenplan', 'eine Anmeldung für ein Seminar'], why: '*Mit Ihrem Studierendenausweis können Sie Bücher ausleihen.*' },
            { q: 'Wer hilft bei Fragen zum Studium?', o: ['die Studienberatung', 'die Mensa', 'die Bibliothek'], why: '*Bei Fragen zum Studium hilft Ihnen die Studienberatung.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences with a word from the guide.', items: [
            { q: 'Ihren ___ machen Sie selbst. (your plan of classes)', a: ['Stundenplan'], why: '*der Stundenplan*: your plan of classes for the week.' },
            { q: 'Die Teilnahme ist ___: Sie müssen nicht kommen. (voluntary)', a: ['freiwillig'], why: '*freiwillig*: you can choose. Nobody has to come.' },
            { q: 'Mit dem Studierendenausweis kann man Bücher ___. (borrow)', a: ['ausleihen'], why: '*ausleihen*: to borrow. With a modal verb it stays at the end as an infinitive.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Eine Professorin spricht, 200 Studierende hören zu. Das ist eine ___.', o: ['Vorlesung', 'Sprechstunde', 'Hausarbeit'], why: 'One teacher talks, many students listen: a *Vorlesung*.' },
      { q: 'Vor dem Studium muss man sich ___.', o: ['immatrikulieren', 'ausleihen', 'stattfinden'], why: '*sich immatrikulieren*: to enrol at a university.' },
      { q: 'Können Sie mir sagen, wann ___?', o: ['die Sprechstunde beginnt', 'beginnt die Sprechstunde', 'die Sprechstunde beginnen'], why: 'Indirect question: the verb goes to the end and agrees with *die Sprechstunde*.' },
      { q: 'Eine Gruppe von Studierenden aus Ihrem Fach, die Ihnen hilft, ist die ___.', o: ['Fachschaft', 'Mensa', 'Klausur'], why: 'The *Fachschaft* is a group of students from your subject.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Wissen Sie, ___ das Büro am Freitag geöffnet ist? (yes/no question)', a: ['ob'], why: 'An indirect yes/no question starts with *ob*.' },
      { q: 'Ich möchte wissen, welche Unterlagen ich ___. (brauchen)', a: ['brauche'], why: '*ich brauche*, at the end of the indirect question.' },
      { q: 'Meine ___ ist 3328415. (student number)', a: ['Matrikelnummer'], why: 'Your student number is the *Matrikelnummer*.' },
      { q: 'Die Vorlesung findet im Hörsaal 2 ___. (stattfinden)', a: ['statt'], why: '*stattfinden* is a separable verb: *findet … statt*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Wissen Sie, wo die Bibliothek ist?', why: 'Indirect question: *ist* at the end.' },
      { a: 'Ich möchte mich für das Seminar anmelden.', why: 'The reflexive pronoun *mich* comes early, the infinitive *anmelden* at the end.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Eine Klausur schreibt man zu Hause.', a: 'f', why: 'A *Klausur* is a written exam. The long text you write at home is a *Hausarbeit*.' },
      { q: 'Ein Referat ist ein Vortrag im Seminar.', a: 't', why: 'A *Referat* is a talk that a student gives in class.' },
    ] },
  ],
};
