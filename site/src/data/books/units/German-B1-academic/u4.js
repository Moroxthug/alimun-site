// German B1 for study and exams, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Writing a clear text',
  goal: 'Write a structured paragraph and short essay.',
  art: 'cat',
  tags: { skills: ['writing', 'reading', 'grammar'], topics: ['paragraph', 'essay', 'connectors', 'word-order'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'A clear paragraph',
      about: 'Build a paragraph with a topic sentence, support and a conclusion.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A clear paragraph (*Absatz*) has three parts. The **topic sentence** (*Themensatz*) gives the main idea. The **supporting sentences** give reasons, examples or details. The **concluding sentence** (*Schlusssatz*) sums up or leads to the next paragraph.' },
          { t: 'reading', title: 'Ein Absatz über die Mensa', md: 'Die Mensa ist für viele Studierende ein wichtiger Ort. Das Essen ist dort günstiger als in einem Restaurant, und es gibt jeden Tag auch vegetarische Gerichte. Außerdem trifft man in der Mensa Kommilitonen und kann sich nach der Vorlesung austauschen. Deshalb ist die Mensa nicht nur ein Ort zum Essen, sondern auch ein Treffpunkt.' },
        ],
        [
          { t: 'table', caption: 'The parts of the paragraph', explain: ['head', 'col0'], head: ['Part', 'Sentence'], rows: [
            ['topic sentence', 'Die Mensa ist für viele Studierende ein wichtiger Ort.'],
            ['support: a reason', 'Das Essen ist dort günstiger als in einem Restaurant …'],
            ['support: another reason', 'Außerdem trifft man in der Mensa Kommilitonen …'],
            ['concluding sentence', 'Deshalb ist die Mensa nicht nur ein Ort zum Essen, sondern auch ein Treffpunkt.'],
          ] },
          { t: 'examples', items: [
            { s: 'Ein wichtiger Vorteil von Online-Kursen ist die Flexibilität.', n: 'A topic sentence: it names the topic and the main idea.' },
            { s: 'Ein Beispiel dafür ist die Mensa.', n: 'A supporting sentence that gives an example.' },
            { s: 'Aus diesen Gründen fahre ich mit dem Rad zur Uni.', n: 'A concluding sentence: it refers back to the reasons.' },
            { s: 'Insgesamt kann man sagen, dass Lerngruppen sehr hilfreich sind.', n: 'Another way to sum up a paragraph.' },
          ] },
          { t: 'tip', art: 'owl', md: 'One paragraph, one main idea. When you start a new idea, start a new paragraph.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right sentence.', items: [
            { q: 'Welcher Satz ist der beste Themensatz für einen Absatz über das Wohnen im Studentenwohnheim?', o: ['Im Studentenwohnheim zu wohnen hat viele Vorteile.', 'Mein Zimmer ist 14 Quadratmeter groß.', 'Deshalb ziehe ich nächstes Jahr um.'], why: 'A topic sentence gives the main idea. The size of a room is a detail.' },
            { q: 'Absatz: „Fahrrad fahren ist gesund. Man bewegt sich jeden Tag und ist an der frischen Luft. Außerdem spart man Geld.“ Welcher Satz passt am besten als Schlusssatz?', o: ['Aus diesen Gründen fahre ich jeden Tag mit dem Rad zur Uni.', 'Mein Fahrrad ist blau.', 'Zum Beispiel ist der Bus teuer.'], why: '*Aus diesen Gründen* refers back to all the reasons: a good conclusion.' },
            { q: 'Welcher Satz passt nicht in einen Absatz über die Vorteile der Bibliothek?', o: ['Ich koche gern italienisch.', 'In der Bibliothek ist es ruhig.', 'Man findet dort viele Fachbücher.'], why: 'Cooking has nothing to do with the library. Every sentence must support the main idea.' },
            { q: 'Welcher Satz ist der beste Themensatz für einen Absatz über Lerngruppen?', o: ['Eine Lerngruppe hat für viele Studierende große Vorteile.', 'Gestern hat unsere Lerngruppe bis 20 Uhr gelernt.', 'Danach haben wir Pizza gegessen.'], why: 'The first sentence names the topic and the main idea. The others are details of one evening.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the topic sentence.', items: [
            { s: '[Eine Lerngruppe hilft beim Lernen.] Man kann Fragen stellen und sich gegenseitig den Stoff erklären. Außerdem ist man motivierter, wenn die anderen auch lernen.', why: 'The topic sentence gives the main idea. The other sentences support it.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the concluding sentence.', items: [
            { s: 'Man kann Fragen stellen und sich gegenseitig den Stoff erklären. Außerdem ist man motivierter. [Deshalb sollte jeder eine Lerngruppe suchen.]', why: '*Deshalb* shows the result of the reasons before it.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the phrases for a paragraph.', items: [
            { q: 'Ein Beispiel ___ ist die Mensa.', a: ['dafür'], why: '*Ein Beispiel dafür ist …*: an example of what you said before.' },
            { q: 'Aus diesen ___ fahre ich mit dem Rad. (reasons)', a: ['Gründen', 'Gruenden'], why: '*aus diesen Gründen*: *aus* + Dativ plural, with *-n*.' },
            { q: 'Insgesamt kann man ___, dass Pausen wichtig sind.', a: ['sagen'], why: '*Insgesamt kann man sagen, dass …*: a way to sum up.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Linking ideas',
      about: 'Connect sentences with außerdem, trotzdem, deshalb and jedoch.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'These words link two sentences. They often stand in **position one** of the second sentence, and the verb follows **directly**.' },
          { t: 'table', caption: 'Linking words', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning', 'Example'], rows: [
            ['außerdem', 'adds another point', 'Die Wohnung ist hell. Außerdem ist sie günstig.'],
            ['deshalb', 'gives a result', 'Ich war krank. Deshalb habe ich die Klausur verpasst.'],
            ['trotzdem', 'something happens, but you do not expect it', 'Es regnete. Trotzdem fuhr sie mit dem Rad.'],
            ['jedoch', 'shows a contrast', 'Das Studium ist interessant. Jedoch ist es auch anstrengend.'],
            ['danach', 'shows the next step in time', 'Zuerst lese ich den Text. Danach schreibe ich eine Zusammenfassung.'],
          ] },
        ],
        [
          { t: 'text', md: 'Compare *weil* and *obwohl* (the verb goes to the **end**) with *deshalb* and *trotzdem* (the verb comes in **position two**). The meaning is similar, the word order is different.' },
          { t: 'examples', items: [
            { s: 'Ich lerne viel, **weil** die Prüfung schwer **ist**.', n: '*weil*: the verb *ist* at the end.' },
            { s: 'Die Prüfung ist schwer. **Deshalb lerne** ich viel.', n: '*Deshalb* + verb + subject.' },
            { s: '**Obwohl** ich müde **bin**, gehe ich in die Vorlesung.', n: '*obwohl*: the verb *bin* at the end, then the main clause starts with its verb *gehe*.' },
            { s: 'Ich bin müde. **Trotzdem gehe** ich in die Vorlesung.', n: '*Trotzdem* + verb + subject.' },
          ] },
          { t: 'tip', art: 'owl', md: 'These words can also stand later in the sentence: *Ich lerne **deshalb** viel.* In an essay, position one makes the link very clear.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the linking word.', items: [
            { q: 'Das Seminar ist sehr interessant. ___ ist die Dozentin sehr nett.', o: ['Außerdem', 'Trotzdem', 'Deshalb'], why: 'Two good points: *außerdem* adds the second one.' },
            { q: 'Ich hatte keine Zeit. ___ habe ich den Text nicht gelesen.', o: ['Deshalb', 'Trotzdem', 'Außerdem'], why: 'No time, so I did not read it: a result, *deshalb*.' },
            { q: 'Die Bibliothek war sehr voll. ___ habe ich dort einen Platz gefunden.', o: ['Trotzdem', 'Deshalb', 'Außerdem'], why: 'You do not expect to find a seat in a full library: *trotzdem*.' },
            { q: 'Ich gehe zur Vorlesung, ___ ich müde bin.', o: ['obwohl', 'trotzdem', 'deshalb'], why: 'The verb *bin* is at the end, so you need *obwohl*.' },
            { q: 'Online-Kurse sind flexibel. ___ fehlt oft der Kontakt zu anderen.', o: ['Jedoch', 'Deshalb', 'Außerdem'], why: 'A good point, then a problem: a contrast, *jedoch*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the second sentence. The linking word comes first.', items: [
            { a: 'Deshalb habe ich die Klausur verpasst.', why: '*Deshalb* + verb *habe* + subject *ich*.' },
            { a: 'Trotzdem fahre ich mit dem Rad.', why: '*Trotzdem* + verb *fahre* + subject *ich*.' },
            { a: 'Außerdem ist die Miete sehr günstig.', why: '*Außerdem* + verb *ist* + subject *die Miete*.' },
            { a: 'Obwohl es regnet, fahre ich mit dem Rad.', why: 'The *obwohl* clause ends with its verb; then the main clause starts with the verb *fahre*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right place and form.', items: [
            { q: 'Ich war krank. Deshalb ___ ich nicht zur Uni gegangen. (sein)', a: ['bin'], why: '*gehen* forms the Perfekt with *sein*: *bin … gegangen*. The verb comes right after *Deshalb*.' },
            { q: 'Es war schon spät. Trotzdem ___ sie weiter. (lernen, Präteritum)', a: ['lernte'], why: 'Präteritum of *lernen* with *sie* (singular): *lernte*, right after *Trotzdem*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A model short essay',
      about: 'Read a short essay and see how its parts and linking words work.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'text', md: 'A short essay has an **introduction** (*Einleitung*), a **main part** (*Hauptteil*) and a **conclusion** (*Schluss*). The introduction names the question. The main part gives arguments for and against, each in its own paragraph. The conclusion gives your opinion.' },
          { t: 'tip', art: 'owl', md: 'Useful phrases for your opinion: *Ich bin der Meinung, dass …*, *Meiner Meinung nach …*, *Insgesamt finde ich …*. Give a reason for it.' },
        ],
        [
          { t: 'reading', title: 'Ein Semester im Ausland: für alle sinnvoll?', md: 'Viele Studierende träumen davon, ein Semester im Ausland zu verbringen. Aber ist ein Auslandssemester wirklich für alle eine gute Idee? In diesem Text nenne ich Vorteile und Nachteile.\n\nEin Auslandssemester hat viele Vorteile. Man lernt eine Sprache viel schneller, wenn man sie jeden Tag braucht. Außerdem lernt man eine andere Kultur und neue Methoden an einer anderen Universität kennen. Viele Arbeitgeber finden solche Erfahrungen interessant. Deshalb kann ein Auslandssemester auch später im Beruf helfen.\n\nEs gibt jedoch auch Nachteile. Ein Semester im Ausland kostet oft viel Geld, zum Beispiel für die Reise und die Miete. Nicht alle können sich das leisten, obwohl es Stipendien gibt. Manchmal werden Kurse aus dem Ausland an der eigenen Universität nicht anerkannt. Dann dauert das Studium länger.\n\nInsgesamt bin ich der Meinung, dass ein Auslandssemester eine große Chance ist. Trotzdem sollte niemand gehen müssen. Wichtig ist, dass man es gut plant und rechtzeitig mit der eigenen Universität spricht.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the essay. True, false or not given?', items: [
            { q: 'In der Einleitung nennt der Text die Frage.', a: 't', why: '*Aber ist ein Auslandssemester wirklich für alle eine gute Idee?*' },
            { q: 'Der zweite Absatz beschreibt Nachteile.', a: 'f', why: 'The second paragraph describes advantages: *Ein Auslandssemester hat viele Vorteile.*' },
            { q: 'Laut Text lernt man im Ausland eine Sprache schneller.', a: 't', why: '*Man lernt eine Sprache viel schneller, wenn man sie jeden Tag braucht.*' },
            { q: 'Für ein Auslandssemester gibt es keine Stipendien.', a: 'f', why: '*obwohl es Stipendien gibt*: there are grants.' },
            { q: 'Die meisten Studierenden machen ein Auslandssemester.', a: 'ng', why: 'The text says many students dream of it, but not how many go.' },
            { q: 'Die Person, die den Text geschrieben hat, war selbst im Ausland.', a: 'ng', why: 'The essay does not say this.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Answer the questions about the essay.', items: [
            { q: 'Was ist die Meinung im Schluss?', o: ['Ein Auslandssemester ist eine Chance, aber keine Pflicht.', 'Alle Studierenden müssen ins Ausland gehen.', 'Ein Auslandssemester ist zu teuer und nicht sinnvoll.'], why: '*eine große Chance* and *Trotzdem sollte niemand gehen müssen*.' },
            { q: 'Welcher Satz ist der Themensatz des dritten Absatzes?', o: ['Es gibt jedoch auch Nachteile.', 'Dann dauert das Studium länger.', 'Nicht alle können sich das leisten, obwohl es Stipendien gibt.'], why: 'The first sentence gives the main idea of the paragraph: the disadvantages.' },
            { q: 'Was bedeutet „Kurse werden nicht anerkannt“?', o: ['Die eigene Universität akzeptiert die Kurse nicht.', 'Man vergisst die Kurse.', 'Die Kurse sind kostenlos.'], why: '*anerkennen*: to accept officially. Then the course does not count.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the linking words.', items: [
            { s: 'Man lernt eine Sprache schneller. [Außerdem] lernt man eine andere Kultur kennen. [Deshalb] kann das später im Beruf helfen.', why: '*Außerdem* adds a point, *Deshalb* gives a result.' },
            { s: 'Nicht alle können sich das leisten, [obwohl] es Stipendien gibt.', why: '*obwohl* links the two parts; its verb *gibt* is at the end.' },
            { s: 'Ein Auslandssemester ist eine große Chance. [Trotzdem] sollte niemand gehen müssen.', why: '*Trotzdem*: something you might not expect after the first sentence.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ich war krank. ___ konnte ich nicht kommen.', o: ['Deshalb', 'Obwohl', 'Trotzdem'], why: 'A result, and the verb *konnte* follows directly: *Deshalb*.' },
      { q: 'Die Miete ist hoch. ___ wohne ich gern hier.', o: ['Trotzdem', 'Deshalb', 'Weil'], why: 'High rent, but I like living here: *Trotzdem*.' },
      { q: 'Welcher Satz ist ein guter Themensatz?', o: ['Es gibt mehrere Gründe, mit dem Zug zu reisen.', 'Und dann war ich im Zug.', 'Deshalb fahre ich Zug.'], why: 'It names the topic and the main idea of the paragraph.' },
      { q: 'Am Ende eines Absatzes steht oft ein ___.', o: ['Schlusssatz', 'Themensatz', 'Betreff'], why: 'The *Schlusssatz* sums up the paragraph.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Das Zimmer ist groß. Außerdem ___ es einen Balkon. (haben)', a: ['hat'], why: 'After *Außerdem*, the verb comes next: *hat es*.' },
      { q: 'Ich gehe zur Uni, ___ ich krank bin. (although)', a: ['obwohl'], why: 'The verb *bin* is at the end: *obwohl*.' },
      { q: 'Ein Beispiel ___ ist die Mensa.', a: ['dafür'], why: '*Ein Beispiel dafür ist …*' },
      { q: 'Insgesamt bin ich der ___, dass Pausen wichtig sind.', a: ['Meinung'], why: '*Ich bin der Meinung, dass …*: I think that …' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Trotzdem habe ich die Prüfung bestanden.', why: '*Trotzdem* + verb *habe* + subject *ich*; the participle *bestanden* at the end.' },
      { a: 'Deshalb habe ich mich krankgemeldet.', why: '*Deshalb* + verb *habe* + subject *ich*, then the reflexive pronoun *mich*; the participle at the end.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the two sentences.', pairs: [
      ['Ich war sehr müde.', 'Deshalb ging ich früh ins Bett.'],
      ['Der Kurs ist teuer.', 'Trotzdem melden sich viele Leute an.'],
      ['Das Zimmer ist hell.', 'Außerdem hat es einen Balkon.'],
      ['Zuerst lese ich den Text.', 'Danach schreibe ich die Zusammenfassung.'],
    ] },
  ],
};
