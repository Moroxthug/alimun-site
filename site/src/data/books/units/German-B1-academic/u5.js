// German B1 for study and exams, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Reading longer texts',
  goal: 'Understand longer factual texts and find the main points.',
  art: 'teacup',
  tags: { skills: ['reading', 'vocabulary', 'study-skills'], topics: ['skimming', 'scanning', 'word-guessing', 'main-idea', 'fact-opinion'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Skimming, scanning and guessing words',
      about: 'Read fast for the main idea or one fact, and guess new words from the context.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: '**Skimming** means reading quickly for the general idea: look at the title, the first sentence of each paragraph and the end. **Scanning** means looking for one piece of information, for example a day, a place or a number, without reading every word.' },
          { t: 'tip', art: 'owl', md: 'Before you read, ask yourself: what do I need from this text? The general idea? Then skim. One fact? Then scan.' },
          { t: 'reading', title: 'Sprachcafé an der Volkshochschule', md: '**Deutsch sprechen in entspannter Atmosphäre**\n\nSie lernen Deutsch und möchten mehr sprechen? Dann kommen Sie in unser Sprachcafé! Jeden Mittwoch von 18 bis 20 Uhr treffen sich Menschen aus vielen Ländern im Raum 104 der Volkshochschule. Ehrenamtliche Helferinnen und Helfer sprechen mit Ihnen über Themen aus dem Alltag. Eine Anmeldung ist nicht nötig, und die Teilnahme ist kostenlos. Getränke gibt es für einen kleinen Betrag. In den Schulferien findet das Sprachcafé nicht statt.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Scan the notice and answer quickly.', items: [
            { q: 'An welchem Tag ist das Sprachcafé?', o: ['am Mittwoch', 'am Montag', 'am Freitag'], why: '*Jeden Mittwoch von 18 bis 20 Uhr.*' },
            { q: 'Wo findet es statt?', o: ['im Raum 104', 'in der Mensa', 'in einem Café in der Stadt'], why: '*im Raum 104 der Volkshochschule*.' },
            { q: 'Was kostet die Teilnahme?', o: ['nichts', 'einen kleinen Betrag', '20 Euro'], why: '*die Teilnahme ist kostenlos*. The small amount is for drinks.' },
            { q: 'Wann gibt es kein Sprachcafé?', o: ['in den Schulferien', 'am Abend', 'im Winter'], why: '*In den Schulferien findet das Sprachcafé nicht statt.*' },
          ] },
        ],
        [
          { t: 'text', md: 'You do not need to know every word. Look at the **context**: the words before and after, the kind of word (noun, verb or adjective) and its parts. Long German nouns are often made of words you know: *Sprach-café*, *Studien-beratung*.' },
          { t: 'examples', items: [
            { s: 'Die **Ehrenamtlichen** bekommen kein Geld, sie helfen in ihrer Freizeit.', n: 'The rest of the sentence explains it: people who work without pay, volunteers.' },
            { s: 'Der Kurs ist **kostenlos**: Sie müssen nichts bezahlen.', n: '*kosten* + *-los* (without): free of charge.' },
            { s: 'Nach der langen Reise war sie **erschöpft** und ging sofort ins Bett.', n: 'Context: after a long journey, straight to bed. It means very tired.' },
            { s: 'Im **Wohnheimzimmer** gibt es ein Bett, einen Schreibtisch und einen Schrank.', n: '*Wohnheim* + *Zimmer*: a room in a hall of residence for students.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Guess the word in bold from the context.', items: [
            { q: 'Lena hat die Prüfung nicht bestanden. Sie ist **enttäuscht** und möchte heute niemanden sehen. „enttäuscht“ bedeutet:', o: ['traurig, weil etwas nicht gut war', 'sehr glücklich', 'sehr hungrig'], why: 'She failed and wants to see nobody: she is sad because something went wrong.' },
            { q: 'Der Weg zur Uni ist im Winter oft **glatt**: Viele Leute fallen hin. „glatt“ bedeutet hier:', o: ['rutschig, mit Eis', 'warm und trocken', 'sehr kurz'], why: 'Winter and people fall: the path is slippery.' },
            { q: 'Die Bibliothek ist **rund um die Uhr** geöffnet, auch nachts. Das bedeutet:', o: ['24 Stunden am Tag', 'nur am Vormittag', 'nur am Wochenende'], why: '*auch nachts* helps: it is open day and night.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Build the word from parts you know.', items: [
            { q: 'Man muss nichts bezahlen. Der Eintritt ist ___. (kosten + los)', a: ['kostenlos'], why: '*-los* means without: *kostenlos*, without cost.' },
            { q: 'Ein Raum, in dem man liest und lernt, ist ein ___. (lesen + Saal)', a: ['Lesesaal'], why: '*Lese-* + *Saal*: a reading room, for example in a library.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Main ideas, details, facts and opinions',
      about: 'Find the main idea of a paragraph and tell facts from opinions.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Each paragraph usually has one **main idea**. The other sentences give **details**: examples, numbers or reasons. A **fact** (*Tatsache*) can be checked. An **opinion** (*Meinung*) shows what someone thinks.' },
          { t: 'examples', items: [
            { s: 'Die Bibliothek ist von 8 bis 22 Uhr geöffnet.', n: 'A fact: you can check it.' },
            { s: '**Meiner Meinung nach** ist die Bibliothek zu früh geschlossen.', n: 'An opinion. The verb *ist* comes directly after *Meiner Meinung nach*.' },
            { s: '**Ich finde**, dass Online-Kurse sehr praktisch sind.', n: 'An opinion with *finden*.' },
            { s: 'Der Kurs hat zwölf Termine.', n: 'A fact.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Words that show an opinion: *finden, glauben, meinen*, *meiner Meinung nach*, *leider*, *zum Glück*, and adjectives like *gut, schlecht, schön, langweilig*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Is it a fact or an opinion?', items: [
            { q: '„Der Deutschkurs beginnt am 3. Oktober.“', o: ['eine Tatsache', 'eine Meinung'], why: 'A date can be checked: a fact.' },
            { q: '„Ich finde, der Kurs beginnt zu früh.“', o: ['eine Meinung', 'eine Tatsache'], why: '*Ich finde* and *zu früh* show what the speaker thinks.' },
            { q: '„Die Mensa ist am Samstag geschlossen.“', o: ['eine Tatsache', 'eine Meinung'], why: 'Opening times can be checked.' },
            { q: '„Das Essen in der Mensa ist langweilig.“', o: ['eine Meinung', 'eine Tatsache'], why: '*langweilig* is a judgement: other people may like the food.' },
            { q: '„Meiner Meinung nach sollte die Bibliothek länger geöffnet sein.“', o: ['eine Meinung', 'eine Tatsache'], why: '*Meiner Meinung nach* introduces an opinion.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What is the main idea of the paragraph?', items: [
            { q: '„Viele Studierende arbeiten neben dem Studium. Manche jobben in einem Café, andere geben Nachhilfe oder arbeiten in einem Büro. Oft brauchen sie das Geld für Miete und Essen.“', o: ['Viele Studierende arbeiten neben dem Studium.', 'Nachhilfe ist ein guter Job.', 'Das Essen ist teuer.'], why: 'The first sentence gives the main idea; the jobs and the reasons are details.' },
            { q: '„Die Stadtbibliothek bietet mehr als Bücher. Man kann dort Filme und Spiele ausleihen, an Kursen teilnehmen oder in ruhigen Räumen lernen. Für Kinder gibt es jeden Samstag eine Vorlesestunde.“', o: ['Die Bibliothek hat viele verschiedene Angebote.', 'Kinder lesen gern.', 'Die Bibliothek ist am Samstag geöffnet.'], why: 'Films, games, courses and rooms are all examples of the many offers.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build sentences that give an opinion.', items: [
            { a: 'Meiner Meinung nach ist der Kurs zu teuer.', why: 'After *Meiner Meinung nach*, the verb *ist* comes next.' },
            { a: 'Ich bin der Meinung, dass Pausen wichtig sind.', why: 'After *dass*, the verb *sind* goes to the end.' },
            { a: 'Ich finde, dass der Text zu lang ist.', why: 'After *dass*, the verb *ist* goes to the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A magazine article',
      about: 'Read an article about learning languages as an adult and find its main points.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'Read the article in two steps. First skim it: read the title and the first sentence of each paragraph. What is the article about? Then read it carefully and answer the questions.' },
          { t: 'tip', art: 'owl', md: 'Mark the words you do not know, but do not stop. Often the next sentence explains them.' },
        ],
        [
          { t: 'reading', title: 'Nie zu alt für eine neue Sprache', md: 'Viele Erwachsene glauben, dass nur Kinder eine Sprache wirklich gut lernen können. Stimmt das? Viele Fachleute meinen, dass Kinder einen Vorteil bei der Aussprache haben. Erwachsene haben jedoch andere Stärken: Sie können Regeln oft besser verstehen, sie wissen, wie sie am besten lernen, und sie haben meistens ein klares Ziel.\n\nEin Beispiel ist Tomasz Nowak, 52 Jahre alt. Er kam vor drei Jahren aus Polen nach Hamburg, ohne ein Wort Deutsch zu sprechen. „Am Anfang war es schwer“, sagt er. „Ich habe jeden Abend eine Stunde gelernt und am Wochenende mit meinen Nachbarn gesprochen.“ Heute arbeitet er als Pfleger in einem Krankenhaus und macht bald eine Prüfung auf dem Niveau B2.\n\nWas hilft beim Lernen? Regelmäßigkeit ist wichtiger als lange Lernzeiten: Zwanzig Minuten jeden Tag bringen oft mehr als drei Stunden am Sonntag. Außerdem sollte man die Sprache so oft wie möglich benutzen, zum Beispiel beim Einkaufen oder in einem Verein.\n\nMeiner Meinung nach ist das Alter nicht das Wichtigste. Wichtiger sind Motivation, Geduld und der Mut, Fehler zu machen.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the article. True, false or not given?', items: [
            { q: 'Laut Artikel haben Kinder einen Vorteil bei der Aussprache.', a: 't', why: '*Viele Fachleute meinen, dass Kinder einen Vorteil bei der Aussprache haben.*' },
            { q: 'Erwachsene können Regeln oft besser verstehen.', a: 't', why: 'This is one of the strengths of adults in the first paragraph.' },
            { q: 'Tomasz konnte schon etwas Deutsch, als er nach Hamburg kam.', a: 'f', why: 'He came *ohne ein Wort Deutsch zu sprechen*.' },
            { q: 'Tomasz hat einen Deutschkurs an einer Universität gemacht.', a: 'ng', why: 'The article says how he learned at home and with neighbours, but nothing about a course.' },
            { q: 'Laut Artikel ist es besser, einmal pro Woche lange zu lernen.', a: 'f', why: 'Twenty minutes every day often bring more than three hours on Sunday.' },
            { q: 'Tomasz hat die B2-Prüfung schon bestanden.', a: 'f', why: '*macht bald eine Prüfung*: the exam is still in the future.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Main points and opinions in the article.', items: [
            { q: 'Was ist die Hauptidee des ersten Absatzes?', o: ['Kinder und Erwachsene haben verschiedene Stärken beim Sprachenlernen.', 'Nur Kinder können Sprachen gut lernen.', 'Erwachsene haben Probleme mit Regeln.'], why: 'Children are good at pronunciation, adults have other strengths.' },
            { q: 'Warum erzählt der Artikel von Tomasz?', o: ['als Beispiel für einen Erwachsenen, der erfolgreich lernt', 'weil er ein bekannter Lehrer ist', 'weil er Kinder unterrichtet'], why: '*Ein Beispiel ist Tomasz Nowak*: he learned German as an adult.' },
            { q: 'Welcher Satz ist eine Meinung?', o: ['Meiner Meinung nach ist das Alter nicht das Wichtigste.', 'Er kam vor drei Jahren aus Polen nach Hamburg.', 'Heute arbeitet er als Pfleger in einem Krankenhaus.'], why: '*Meiner Meinung nach* introduces an opinion. The other sentences are facts about Tomasz.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the words from the article with their meaning.', pairs: [
            ['die Aussprache', 'wie man die Wörter spricht'],
            ['die Geduld', 'man kann ruhig warten'],
            ['der Mut', 'man hat keine Angst, etwas zu tun'],
            ['der Pfleger', 'ein Mann, der kranke Menschen betreut'],
            ['der Verein', 'eine Gruppe von Menschen mit einem gemeinsamen Hobby'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Sie suchen in einem Text nur eine Uhrzeit. Was machen Sie?', o: ['Ich lese nicht jedes Wort, sondern suche nach Zahlen.', 'Ich lese jedes Wort sehr langsam.', 'Ich übersetze den ganzen Text.'], why: 'For one fact you scan: look only for numbers.' },
      { q: '„Der Kurs ist kostenlos.“ Das bedeutet:', o: ['Man muss nichts bezahlen.', 'Der Kurs ist sehr teuer.', 'Der Kurs hat keine Lehrerin.'], why: '*kostenlos*: without cost.' },
      { q: 'Welcher Satz ist eine Tatsache?', o: ['Die Bibliothek öffnet um 8 Uhr.', 'Die Bibliothek ist zu klein.', 'Ich finde die Bibliothek schön.'], why: 'An opening time can be checked. The others are opinions.' },
      { q: 'Welcher Satz ist eine Meinung?', o: ['Ich glaube, dass der Kurs zu schwer ist.', 'Der Kurs hat 15 Teilnehmer.', 'Der Kurs beginnt im März.'], why: '*Ich glaube* shows an opinion.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Meiner Meinung ___ ist das Alter nicht so wichtig.', a: ['nach'], why: 'The fixed phrase is *meiner Meinung nach*.' },
      { q: 'Ich bin der ___, dass man jeden Tag lernen sollte.', a: ['Meinung'], why: '*Ich bin der Meinung, dass …*' },
      { q: 'Ich ___, dass Online-Kurse praktisch sind. (finden)', a: ['finde'], why: '*ich finde*: I think.' },
      { q: 'Ein Zimmer in einem Wohnheim ist ein ___. (Wohnheim + Zimmer)', a: ['Wohnheimzimmer'], why: 'German joins the two nouns into one word.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Meiner Meinung nach ist der Text zu lang.', why: 'After *Meiner Meinung nach*, the verb *ist* comes next.' },
      { a: 'Ich glaube, dass Erwachsene gut lernen können.', why: 'After *dass*, the modal verb *können* goes to the end.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
      ['erschöpft', 'sehr müde'],
      ['enttäuscht', 'traurig, weil etwas nicht gut war'],
      ['glatt', 'rutschig, zum Beispiel wegen Eis'],
      ['rund um die Uhr', '24 Stunden am Tag'],
    ] },
  ],
};
