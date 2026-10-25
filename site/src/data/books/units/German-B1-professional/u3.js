// German B1 for work, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Job interviews',
  goal: 'Prepare for a job interview and talk about your experience.',
  art: 'suitcase',
  tags: { skills: ['speaking', 'reading', 'vocabulary'], topics: ['job-interview', 'experience', 'strengths', 'indirect-questions'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Experience and strengths',
      about: 'Say what experience you have and what you are good at.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'In an interview you talk about your **experience** (*Erfahrung*). Use *Erfahrung in* + Dativ for a field of work and *Erfahrung mit* + Dativ for people, tools or programs. For a job you still have, use *seit* + **present tense**. For a job that is finished, use the **Perfekt**.' },
          { t: 'examples', items: [
            { s: 'Ich habe Erfahrung **in der** Buchhaltung.', n: '*die Buchhaltung*: *in* + Dativ, *in der*.' },
            { s: 'Ich habe fünf Jahre Erfahrung **im** Kundenservice.', n: '*der Kundenservice*: *in dem* becomes *im*.' },
            { s: 'Ich habe viel Erfahrung **mit** internationalen Kunden.', n: '*mit* for people, tools and programs.' },
            { s: 'Ich **arbeite seit** drei Jahren als Projektassistentin.', n: 'I still do this job: *seit* + present tense, not Perfekt.' },
            { s: 'Von 2019 bis 2022 **habe** ich bei einer Spedition **gearbeitet**.', n: 'This job is finished: Perfekt.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Strengths', explain: ['head', 'col1'], quiz: true, head: ['Adjective', 'Meaning'], rows: [
            ['zuverlässig', 'people can trust you to do your work'],
            ['teamfähig', 'you work well with other people'],
            ['belastbar', 'you work well when there is a lot of stress'],
            ['selbstständig', 'you can work without help'],
            ['flexibel', 'you can change your plans easily'],
            ['gut organisiert', 'you plan your work well'],
          ] },
          { t: 'text', md: 'To name a strength, say *Ich bin sehr …* or *Zu meinen Stärken gehört, dass ich …*. Then give a **short example** from your work: *Zum Beispiel habe ich …*' },
          { t: 'tip', art: 'owl', md: 'Everybody says *Ich bin teamfähig.* An example makes it believable: *In meinem letzten Projekt habe ich mit Kollegen in drei Ländern zusammengearbeitet.*' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write in der, im or mit.', items: [
            { q: 'Ich habe Erfahrung ___ Marketing. (das Marketing)', a: ['im'], why: '*das Marketing*: *in dem* becomes *im*.' },
            { q: 'Ich habe drei Jahre Erfahrung ___ Logistik. (die Logistik)', a: ['in der'], why: '*die Logistik* is feminine: *in der*.' },
            { q: 'Ich habe viel Erfahrung ___ Excel und anderen Programmen.', a: ['mit'], why: 'For programs and tools: *Erfahrung mit*.' },
            { q: 'Sie hat Erfahrung ___ Verkauf. (der Verkauf)', a: ['im'], why: '*der Verkauf* is masculine: *in dem* becomes *im*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Is the job finished or not? Choose the right form.', items: [
            { q: 'Ich ___ seit 2021 als Krankenpfleger in Köln.', o: ['arbeite', 'habe gearbeitet', 'arbeitete'], why: 'He still works there: *seit* + present tense.' },
            { q: 'Die Stelle ist vorbei. Welcher Satz ist richtig?', o: ['Von 2015 bis 2018 habe ich in einem Hotel gearbeitet.', 'Von 2015 bis 2018 arbeite ich in einem Hotel.', 'Von 2015 bis 2018 bin ich in einem Hotel gearbeitet.'], why: 'The job is finished: Perfekt, and *arbeiten* takes *haben*.' },
            { q: 'Frau Osei leitet ___ zwei Jahren ein kleines Team.', o: ['seit', 'vor', 'für'], why: 'She still leads it: *seit* + Dativ with the present tense.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the strength and the example.', pairs: [
            ['zuverlässig', 'Ich bin in fünf Jahren nie zu spät zu einem Termin gekommen.'],
            ['teamfähig', 'Ich arbeite gern mit Kollegen zusammen und helfe, wenn jemand Fragen hat.'],
            ['belastbar', 'Auch vor Weihnachten, wenn wir sehr viele Bestellungen haben, bleibe ich ruhig.'],
            ['selbstständig', 'Mein Chef war zwei Monate krank, und ich habe das Projekt allein weitergeführt.'],
            ['flexibel', 'Wenn ein Kollege krank ist, übernehme ich gern seine Schicht.'],
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Ich habe viel Erfahrung im Kundenservice.', why: 'The verb *habe* in second place, then *viel Erfahrung im …*.' },
            { a: 'Seit drei Jahren arbeite ich als Ingenieurin.', why: '*Seit drei Jahren* first, so the verb *arbeite* comes second, before *ich*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Questions and answers',
      about: 'Answer typical interview questions well and ask good questions yourself.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Many interviews in Germany use similar questions. Prepare an answer for each one, and practise it aloud.' },
          { t: 'table', caption: 'Typical interview questions', explain: ['head', 'col1'], head: ['Question', 'What they want to know'], rows: [
            ['Erzählen Sie etwas über sich.', 'a short summary of your education and work, about two minutes'],
            ['Warum möchten Sie bei uns arbeiten?', 'what you know about the company and why the job fits you'],
            ['Warum möchten Sie die Stelle wechseln?', 'a positive reason, not complaints about your old job'],
            ['Was sind Ihre Stärken und Schwächen?', 'what you are good at, and if you know what you need to improve'],
            ['Was sind Ihre Gehaltsvorstellungen?', 'how much you want to earn; in Germany usually a gross amount per year'],
            ['Wann könnten Sie anfangen?', 'your start date; it often depends on your notice period (*Kündigungsfrist*)'],
          ] },
        ],
        [
          { t: 'text', md: 'A good answer is **short, positive and concrete**. For a weakness, choose a real but small one, and say what you do about it.' },
          { t: 'examples', items: [
            { s: 'Ich möchte bei Ihnen arbeiten, **weil** mich Ihre Projekte sehr **interessieren**.', n: 'A reason with *weil*: the verb goes to the end.' },
            { s: 'Ich suche eine **neue Herausforderung**.', n: 'A positive reason to change jobs.' },
            { s: 'Manchmal bin ich zu ungeduldig. **Deshalb** plane ich jetzt mehr Zeit ein.', n: 'A small weakness and what you do about it. After *deshalb*, the verb comes next.' },
            { s: 'Ich **könnte** zum 1. April anfangen.', n: '*könnte*: a polite, open answer.' },
          ] },
        ],
        [
          { t: 'text', md: 'At the end you are usually asked: *Haben Sie noch Fragen?* Have two or three questions ready. Polite questions are often **indirect**: *Ich würde gern wissen, …* or *Können Sie mir sagen, …*. In an indirect question the verb goes to the **end**. For a yes/no question, use *ob*.' },
          { t: 'examples', items: [
            { s: 'Ich würde gern wissen, wie ein typischer Arbeitstag **aussieht**.', n: 'From *Wie sieht ein typischer Arbeitstag aus?* The separable verb joins again at the end: *aussieht*.' },
            { s: 'Können Sie mir sagen, **ob** es Möglichkeiten zur Weiterbildung **gibt**?', n: 'From *Gibt es …?*, a yes/no question: *ob* + verb at the end.' },
            { s: 'Wie geht es nach dem Gespräch weiter?', n: 'A direct question is also fine.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the indirect questions.', items: [
            { a: 'Ich würde gern wissen, wie groß das Team ist.', why: 'Indirect question: *wie groß*, then the subject, the verb *ist* at the end.' },
            { a: 'Können Sie mir sagen, ob die Stelle unbefristet ist?', why: 'A yes/no question becomes *ob* + verb at the end.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the question and the best answer.', pairs: [
            ['Warum möchten Sie bei uns arbeiten?', 'Ihre Produkte sind nachhaltig, und das ist mir wichtig.'],
            ['Warum möchten Sie die Stelle wechseln?', 'Ich möchte mehr Verantwortung übernehmen.'],
            ['Was ist Ihre größte Schwäche?', 'Ich spreche nicht gern vor vielen Leuten, deshalb mache ich gerade einen Kurs.'],
            ['Wann könnten Sie anfangen?', 'Ich habe drei Monate Kündigungsfrist, also zum 1. Juli.'],
            ['Was sind Ihre Gehaltsvorstellungen?', 'Ich stelle mir 48.000 Euro brutto im Jahr vor.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Which answer is best in an interview?', items: [
            { q: 'Warum möchten Sie die Stelle wechseln?', o: ['Ich suche eine neue Herausforderung.', 'Mein Chef ist furchtbar.', 'Ich weiß es nicht genau.'], why: 'Stay positive and never complain about your old employer.' },
            { q: 'Haben Sie noch Fragen?', o: ['Ja, wie sieht die Einarbeitung aus?', 'Nein, alles klar. Tschüss!', 'Wie viele Urlaubstage haben Sie selbst?'], why: 'A question about the job shows real interest.' },
            { q: 'Ich würde gern wissen, ___.', o: ['wann ich mit einer Antwort rechnen kann', 'wann kann ich mit einer Antwort rechnen', 'wann ich kann mit einer Antwort rechnen'], why: 'Indirect question: the conjugated verb *kann* goes to the very end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Ready for the interview',
      about: 'Read tips for an interview and a sample conversation.',
      art: 'teacup',
      spreads: [
        [
          { t: 'reading', title: 'Gut vorbereitet ins Vorstellungsgespräch', md: 'Ein Vorstellungsgespräch ist für viele Menschen stressig. Mit einer guten Vorbereitung fühlen Sie sich aber sicherer.\n\nInformieren Sie sich vorher über die Firma: Was stellt sie her? Wer sind ihre Kunden? Lesen Sie die Stellenanzeige noch einmal genau und überlegen Sie, welche Erfahrungen zu den Aufgaben passen. Zu jeder Stärke sollten Sie ein kurzes Beispiel aus Ihrem Berufsleben erzählen können.\n\nIn Deutschland beginnt das Gespräch oft mit etwas Small Talk, zum Beispiel über die Anreise. Danach sollen Sie meistens etwas über sich erzählen. Üben Sie diese kurze Vorstellung vorher laut, am besten zwei bis drei Minuten lang.\n\nPünktlichkeit ist wichtig. Planen Sie genug Zeit für den Weg ein und seien Sie etwa zehn Minuten vor dem Termin da. Bei einem Gespräch per Video testen Sie Kamera und Mikrofon am Tag vorher.\n\nAm Ende hört man oft die Frage: „Haben Sie noch Fragen?“ Bereiten Sie zwei oder drei Fragen vor, zum Beispiel zum Team oder zur Einarbeitung. Das zeigt, dass Sie sich wirklich für die Stelle interessieren.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the tips. True, false or not given?', items: [
            { q: 'Man soll sich vor dem Gespräch über die Firma informieren.', a: 't', why: '*Informieren Sie sich vorher über die Firma.*' },
            { q: 'In Deutschland gibt es im Vorstellungsgespräch nie Small Talk.', a: 'f', why: 'The text says the interview *oft* starts with small talk.' },
            { q: 'Die Vorstellung am Anfang soll etwa zehn Minuten dauern.', a: 'f', why: '*zwei bis drei Minuten lang*. Ten minutes is how early you should arrive.' },
            { q: 'Bei einem Videogespräch soll man die Technik vorher testen.', a: 't', why: '*testen Sie Kamera und Mikrofon am Tag vorher*.' },
            { q: 'Man soll im ersten Gespräch nicht nach dem Gehalt fragen.', a: 'ng', why: 'The text does not talk about questions about salary.' },
            { q: 'Eigene Fragen zeigen Interesse an der Stelle.', a: 't', why: '*Das zeigt, dass Sie sich wirklich für die Stelle interessieren.*' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Ein Vorstellungsgespräch', lines: [
            { who: 'Herr Schneider', s: 'Frau Ahmadi, erzählen Sie doch bitte kurz etwas über sich.' },
            { who: 'Leyla', s: 'Gern. Ich habe Betriebswirtschaft studiert und arbeite seit drei Jahren als Projektassistentin bei einer Spedition in Bremen. Dort organisiere ich Termine und betreue unsere Kunden in Spanien.' },
            { who: 'Herr Schneider', s: 'Warum möchten Sie die Stelle wechseln?' },
            { who: 'Leyla', s: 'Ich suche eine neue Herausforderung. Bei Ihnen könnte ich in größeren internationalen Projekten arbeiten, und das interessiert mich sehr.' },
            { who: 'Herr Schneider', s: 'Was sind Ihre Stärken?' },
            { who: 'Leyla', s: 'Ich bin sehr gut organisiert. Zum Beispiel habe ich letztes Jahr allein eine Messe für unsere Firma geplant.' },
            { who: 'Herr Schneider', s: 'Und Ihre Schwächen?' },
            { who: 'Leyla', s: 'Manchmal möchte ich zu viel allein machen. Inzwischen frage ich früher nach Hilfe.' },
            { who: 'Herr Schneider', s: 'Haben Sie noch Fragen an uns?' },
            { who: 'Leyla', s: 'Ja. Ich würde gern wissen, wie die Einarbeitung aussieht.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Think about the interview. Choose the right answer.', items: [
            { q: 'Wie lange arbeitet Leyla schon als Projektassistentin?', o: ['seit drei Jahren', 'seit einem Jahr', 'seit dem Studium in Spanien'], why: '*seit drei Jahren als Projektassistentin*.' },
            { q: 'Warum möchte Leyla wechseln?', o: ['Sie möchte in größeren internationalen Projekten arbeiten.', 'Sie verdient zu wenig.', 'Sie möchte nicht mehr in Bremen wohnen.'], why: 'She gives a positive reason: bigger international projects.' },
            { q: 'Welches Beispiel gibt Leyla für ihre Stärke?', o: ['Sie hat allein eine Messe geplant.', 'Sie hat Betriebswirtschaft studiert.', 'Sie fragt früher nach Hilfe.'], why: '*Zum Beispiel habe ich … allein eine Messe … geplant.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the verb at the end of the indirect question.', items: [
            { s: 'Ich würde gern wissen, wie die Einarbeitung [aussieht].', why: 'From *Wie sieht die Einarbeitung aus?*: *aussieht* at the end.' },
            { s: 'Können Sie mir sagen, wann das Team mit dem Projekt [beginnt]?', why: 'After *wann*, the verb *beginnt* goes to the end.' },
            { s: 'Darf ich fragen, ob ich auch im Homeoffice arbeiten [kann]?', why: 'After *ob*, the modal verb *kann* goes to the very end, after the infinitive *arbeiten*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the words from the unit.', items: [
            { q: 'Ein Gespräch mit einer Firma, weil man eine Stelle möchte, heißt ___. (das V…)', a: ['Vorstellungsgespräch', 'das Vorstellungsgespräch'], why: '*das Vorstellungsgespräch*: the job interview.' },
            { q: 'In den ersten Wochen in einer neuen Firma lernt man die Arbeit kennen. Das ist die ___. (die E…)', a: ['Einarbeitung', 'die Einarbeitung'], why: '*die Einarbeitung*: the time when you learn your new job.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ich habe zwei Jahre Erfahrung ___ Vertrieb.', o: ['im', 'in der', 'mit dem'], why: '*der Vertrieb*: *in dem* becomes *im*.' },
      { q: 'Ich ___ seit 2022 bei einer Bank.', o: ['arbeite', 'habe gearbeitet', 'bin gearbeitet'], why: 'Still true: *seit* + present tense.' },
      { q: 'Sie können ohne Hilfe arbeiten. Sie sind ___.', o: ['selbstständig', 'belastbar', 'teamfähig'], why: '*selbstständig*: you work without help.' },
      { q: 'Warum möchten Sie die Stelle wechseln? Die beste Antwort ist: ___', o: ['Ich möchte mehr Verantwortung übernehmen.', 'Meine Kollegen sind schrecklich.', 'Ich habe keine Lust mehr.'], why: 'A positive reason.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Ich habe viel Erfahrung ___ der Buchhaltung.', a: ['in'], why: '*Erfahrung in der Buchhaltung*.' },
      { q: 'Können Sie mir sagen, ___ es Möglichkeiten zur Weiterbildung gibt?', a: ['ob'], why: 'An indirect yes/no question starts with *ob*.' },
      { q: 'Ich würde gern wissen, wie viele Leute im Team ___. (arbeiten)', a: ['arbeiten'], why: 'Indirect question: the verb goes to the end.' },
      { q: 'Manchmal bin ich zu ungeduldig. ___ plane ich jetzt mehr Zeit ein.', a: ['Deshalb', 'Deswegen', 'Darum', 'Daher'], why: '*deshalb* gives the result; the verb *plane* comes next.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Ich würde gern wissen, wann ich anfangen kann.', why: 'Indirect question: *kann* at the very end.' },
      { a: 'Seit vier Jahren arbeite ich als Koch.', why: '*Seit vier Jahren* first, then the verb, then *ich*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Im Vorstellungsgespräch soll man nicht schlecht über den alten Arbeitgeber sprechen.', a: 't', why: 'Stay positive about your old job.' },
      { q: 'In einer indirekten Frage steht das Verb an zweiter Stelle.', a: 'f', why: 'In an indirect question the verb goes to the end.' },
    ] },
  ],
};
