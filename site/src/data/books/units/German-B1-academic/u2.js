// German B1 for study and exams, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Lectures and notes',
  goal: 'Follow a talk and take useful notes.',
  art: 'parrot',
  tags: { skills: ['listening', 'reading', 'vocabulary', 'study-skills'], topics: ['signposting', 'note-taking', 'abbreviations', 'connectors'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Following the structure of a talk',
      about: 'The words that tell you where a speaker is in a talk.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A good talk has a clear structure, and the speaker tells you where you are. Listen for these words: they show the topic, the order of the points, a contrast, an example and the end.' },
          { t: 'table', caption: 'Signposts in a talk', explain: ['head', 'col0'], quiz: true, head: ['Purpose', 'German'], rows: [
            ['the topic', 'Heute geht es um … / Ich spreche heute über …'],
            ['the order of the points', 'zuerst, dann, danach, zum Schluss'],
            ['a new point', 'Ein weiterer Punkt ist … / Außerdem …'],
            ['a contrast', 'aber, jedoch, im Gegensatz dazu'],
            ['an example', 'zum Beispiel, ein Beispiel dafür ist …'],
            ['a summary', 'Zusammenfassend kann man sagen … / Kurz gesagt …'],
          ] },
        ],
        [
          { t: 'text', md: 'When *zuerst, dann, danach, außerdem* or *jedoch* starts a sentence, the verb comes next, in **position two**. The subject follows the verb.' },
          { t: 'examples', items: [
            { s: '**Zuerst spreche** ich über die Geschichte der Stadt.', n: '*Zuerst* is in position one, the verb *spreche* in position two, then the subject *ich*.' },
            { s: '**Danach zeige** ich Ihnen zwei Beispiele.', n: 'Same pattern: *Danach* + verb + subject.' },
            { s: 'Das Fahrrad ist billig. **Jedoch ist** es im Winter oft unbequem.', n: '*Jedoch* shows a contrast. In position one, the verb follows directly.' },
            { s: '**Zusammenfassend kann** man sagen, dass das Thema sehr wichtig ist.', n: 'A typical sentence at the end of a talk.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Aber* does not change the word order: *Aber das Problem **ist** …*. *Jedoch* in position one does: *Jedoch **ist** das Problem …*.' },
        ],
        [
          { t: 'reading', title: 'Der Anfang eines Referats', md: 'Guten Morgen! Heute geht es um das Thema Wasser in der Stadt. Zuerst erkläre ich, woher unser Trinkwasser kommt. Dann spreche ich über die Probleme im Sommer, wenn es lange nicht regnet. Danach zeige ich Ihnen zwei Beispiele aus anderen Städten. Zum Schluss möchte ich mit Ihnen diskutieren, was jeder Einzelne tun kann.' },
          { t: 'ex', kind: 'spot', h: 'Tap the words that show the order of the talk.', items: [
            { s: 'Heute geht es um Wasser. [Zuerst] erkläre ich, woher es kommt, und [dann] spreche ich über Probleme im Sommer.', why: '*zuerst* and *dann* give the order of the first two points.' },
            { s: '[Danach] zeige ich Ihnen zwei Beispiele. [Zum Schluss] möchte ich mit Ihnen diskutieren.', why: '*danach* is the next step, *zum Schluss* is the last one.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the signpost that fits.', items: [
            { q: '___ spreche ich über die Geschichte des Themas, dann über die Gegenwart.', o: ['Zuerst', 'Zum Schluss', 'Jedoch'], why: '*dann* comes later in the sentence, so the first point needs *zuerst*.' },
            { q: 'Das Fahrrad ist billig und gesund. ___ ist es im Winter oft unbequem.', o: ['Jedoch', 'Außerdem', 'Zum Beispiel'], why: 'Good points, then a bad point: a contrast, *jedoch*.' },
            { q: 'Viele Städte haben Probleme mit dem Verkehr, ___ Berlin und München.', o: ['zum Beispiel', 'jedoch', 'zuerst'], why: 'Berlin and München are examples of cities: *zum Beispiel*.' },
            { q: 'Am Ende des Vortrags: „___ kann man sagen, dass Wasser sehr wertvoll ist.“', o: ['Zusammenfassend', 'Zum Beispiel', 'Jedoch'], why: 'At the end you sum up: *Zusammenfassend kann man sagen …*' },
            { q: 'Ein weiterer ___ ist der Preis.', o: ['Punkt', 'Schluss', 'Beispiel'], why: '*Ein weiterer Punkt ist …* adds a new point. *Beispiel* is neuter, so it would need *ein weiteres*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences. Remember: the verb is in position two.', items: [
            { a: 'Danach zeige ich Ihnen zwei Beispiele.', why: '*Danach* + verb *zeige* + subject *ich*.' },
            { a: 'Zuerst spreche ich über die Geschichte.', why: '*Zuerst* + verb *spreche* + subject *ich*.' },
            { a: 'Heute geht es um das Thema Energie.', why: 'A typical first sentence: *Heute geht es um …*' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Taking notes',
      about: 'Write down key words, short forms and symbols.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'You cannot write down every word of a lecture. Write **key words**: nouns, numbers, names and the verbs that carry the meaning. Leave out articles and small words. Use short forms: many of them are also common in German texts.' },
          { t: 'table', caption: 'Common short forms', explain: ['head', 'col2'], quiz: true, head: ['Short', 'Long', 'Meaning'], rows: [
            ['z. B.', 'zum Beispiel', 'for example'],
            ['d. h.', 'das heißt', 'that means'],
            ['usw.', 'und so weiter', 'and so on'],
            ['bzw.', 'beziehungsweise', 'or, or more exactly'],
            ['vgl.', 'vergleiche', 'compare, look at another source'],
            ['ca.', 'circa', 'about, approximately'],
            ['u. a.', 'unter anderem', 'among other things'],
          ] },
        ],
        [
          { t: 'text', md: 'Many students also use symbols: an arrow (→) for a result, a plus (+) for an advantage, a minus (−) for a disadvantage and = for *is* or *means*. Here are sentences from lectures and good notes for them.' },
          { t: 'examples', items: [
            { s: 'Viele Studierende arbeiten neben dem Studium, weil die Mieten hoch sind.', n: 'Notes: *viele Stud. jobben, Grund: hohe Mieten*' },
            { s: 'Das Fahrrad hat viele Vorteile, zum Beispiel ist es billig und gesund.', n: 'Notes: *Fahrrad: + billig, + gesund*' },
            { s: 'Wenn es lange nicht regnet, wird das Wasser in vielen Regionen knapp.', n: 'Notes: *lange kein Regen → Wasser knapp*' },
          ] },
          { t: 'tip', art: 'owl', md: 'Use your own short forms, but read your notes again on the same day. After a week, *Stud.* is still clear, but *St.* may not be.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the short form and the long form.', pairs: [
            ['z. B.', 'zum Beispiel'],
            ['d. h.', 'das heißt'],
            ['usw.', 'und so weiter'],
            ['ca.', 'circa'],
            ['u. a.', 'unter anderem'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best notes for each sentence.', items: [
            { q: '„Die Bibliothek ist während der Prüfungszeit bis 24 Uhr geöffnet.“', o: ['Bib. in Prüfungszeit bis 24 Uhr offen', 'Die Bibliothek ist während der', 'Bibliothek, Zeit, geöffnet'], why: 'Good notes keep the key facts (when, until what time) and leave out small words.' },
            { q: '„Ein Nachteil des Online-Studiums ist, dass man wenig Kontakt zu anderen hat.“', o: ['Online-Studium: − wenig Kontakt', 'Online-Studium: + viel Kontakt', 'ein Nachteil, dass man'], why: 'A disadvantage gets a minus, and the key words are *wenig Kontakt*.' },
            { q: '„Das heißt, die Kosten steigen jedes Jahr.“', o: ['d. h. Kosten steigen jährl.', 'z. B. Kosten steigen jährl.', 'vgl. Kosten jährl.'], why: '*das heißt* = *d. h.*; *z. B.* means *zum Beispiel*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the short form.', items: [
            { q: 'Der Kurs dauert ___ zwei Stunden. (circa)', a: ['ca.', 'ca'], why: '*ca.* = *circa*: about.' },
            { q: 'Wir lesen viele Texte, ___ Artikel und Buchkapitel. (zum Beispiel)', a: ['z. B.', 'z.B.', 'zB'], why: '*z. B.* = *zum Beispiel*.' },
            { q: 'Die Prüfung ist mündlich, ___ man spricht mit der Professorin. (das heißt)', a: ['d. h.', 'd.h.', 'dh'], why: '*d. h.* = *das heißt*: it explains the word before.' },
            { q: 'Im Seminar diskutieren wir über Umwelt, Verkehr, Energie ___ (und so weiter)', a: ['usw.', 'usw'], why: '*usw.* = *und so weiter*, at the end of a list.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'The transcript of a short talk',
      about: 'Read a short talk, follow its structure and check notes against it.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'This is the written text of a short talk at a university event for new students. Read it once quickly and look for the signposts: they show you the parts of the talk. Then read it again and take notes for each part.' },
          { t: 'tip', art: 'owl', md: 'In a real lecture you hear the text only once. The signposts help you: when you hear *danach* or *zum Schluss*, start a new line in your notes.' },
        ],
        [
          { t: 'reading', title: 'Lernen mit Pausen', md: 'Guten Tag, meine Damen und Herren. Heute geht es um eine einfache Frage: Wie lernt man am besten für eine Prüfung? Zuerst beschreibe ich, wie viele Studierende lernen. Danach stelle ich eine andere Methode vor, und zum Schluss gebe ich Ihnen drei Tipps.\n\nViele Studierende lernen erst kurz vor der Prüfung, oft die ganze Nacht. Am nächsten Tag wissen sie noch viel, aber nach einer Woche haben sie das meiste vergessen.\n\nEine andere Methode ist das verteilte Lernen. Das heißt, man lernt den gleichen Stoff mehrmals, aber mit Pausen von einigen Tagen dazwischen. Das ist am Anfang anstrengender, weil man vieles schon wieder vergessen hat. Jedoch bleibt das Wissen so länger im Gedächtnis.\n\nNun zu meinen Tipps. Fangen Sie früh an. Außerdem sollten Sie den Stoff in kleinen Portionen wiederholen, zum Beispiel jeden zweiten Tag. Und schließlich: Testen Sie sich selbst, statt Ihre Notizen nur noch einmal zu lesen.\n\nZusammenfassend kann man sagen: Wer früher anfängt und regelmäßig wiederholt, lernt nicht mehr, aber besser. Vielen Dank für Ihre Aufmerksamkeit.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the talk. True, false or not given?', items: [
            { q: 'Die Tipps kommen am Anfang des Vortrags.', a: 'f', why: '*zum Schluss gebe ich Ihnen drei Tipps*: the tips come at the end.' },
            { q: 'Viele Studierende lernen erst kurz vor der Prüfung.', a: 't', why: 'The second paragraph says so.' },
            { q: 'Beim verteilten Lernen lernt man den Stoff nur einmal.', a: 'f', why: '*man lernt den gleichen Stoff mehrmals*: several times.' },
            { q: 'Verteiltes Lernen ist am Anfang leichter.', a: 'f', why: 'It is *am Anfang anstrengender*: harder at first.' },
            { q: 'Der Vortrag dauert eine Stunde.', a: 'ng', why: 'The text does not say how long the talk is.' },
            { q: 'Man soll sich selbst testen.', a: 't', why: '*Testen Sie sich selbst*: one of the tips.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'A student took notes. Which notes match each part of the talk?', items: [
            { q: 'Teil 2: Wie lernen viele Studierende?', o: ['kurz vor Prüfung lernen → nach 1 Woche viel vergessen', 'früh anfangen → nach 1 Woche viel vergessen', 'verteiltes Lernen → alles vergessen'], why: 'They learn just before the exam and forget most of it after a week.' },
            { q: 'Teil 3: Die andere Methode', o: ['verteiltes Lernen: gleicher Stoff mehrmals + Pausen; am Anfang anstrengend', 'verteiltes Lernen: Stoff nur 1x, keine Pausen', 'verteiltes Lernen: leicht, aber schnell vergessen'], why: 'Same material several times, with breaks; harder at first, but you remember longer.' },
            { q: 'Teil 4: Die Tipps', o: ['früh anfangen, in kleinen Portionen wiederholen, sich selbst testen', 'nachts lernen, Notizen oft lesen', 'spät anfangen, alles an 1 Tag lernen'], why: 'These are the three tips in the fourth paragraph.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the phrases from the talk.', items: [
            { q: '___ kann man sagen: Wer früher anfängt, lernt besser. (to sum up)', a: ['Zusammenfassend'], why: '*Zusammenfassend kann man sagen* introduces the summary.' },
            { q: 'Das ___, man lernt den gleichen Stoff mehrmals. (that means)', a: ['heißt', 'heisst'], why: '*Das heißt* explains what the speaker said before.' },
            { q: 'Vielen Dank für Ihre ___. (attention)', a: ['Aufmerksamkeit'], why: 'The usual last sentence of a talk.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Am Anfang eines Vortrags: „Heute ___ es um das Thema Energie.“', o: ['geht', 'ist', 'spricht'], why: 'The fixed phrase is *es geht um*.' },
      { q: 'Was bedeutet „d. h.“?', o: ['das heißt', 'die Hausarbeit', 'der Hörsaal'], why: '*d. h.* is the short form of *das heißt*.' },
      { q: 'Das Auto ist bequem. ___ ist es teuer.', o: ['Jedoch', 'Zum Beispiel', 'Zuerst'], why: 'A good point, then a bad point: a contrast, *jedoch*.' },
      { q: 'Welche Notizen passen zu „Das Wasser wird knapp, weil es lange nicht regnet“?', o: ['lange kein Regen → Wasser knapp', 'Wasser knapp → viel Regen', 'Regen + Wasser = gut'], why: 'No rain for a long time leads to a result: the arrow shows it.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Zuerst ___ ich über die Geschichte. (sprechen)', a: ['spreche'], why: 'After *Zuerst* the verb is in position two: *spreche ich*.' },
      { q: 'Danach ___ ich Ihnen ein Beispiel. (zeigen)', a: ['zeige'], why: 'After *Danach* the verb is in position two: *zeige ich*.' },
      { q: 'Wir lesen viele Texte, ___ Artikel. (zum Beispiel, short form)', a: ['z. B.', 'z.B.', 'zB'], why: '*z. B.* = *zum Beispiel*.' },
      { q: 'Der Vortrag dauert ___ 20 Minuten. (circa, short form)', a: ['ca.', 'ca'], why: '*ca.* = *circa*: about.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Zum Schluss gebe ich Ihnen drei Tipps.', why: '*Zum Schluss* in position one, then the verb *gebe*, then the subject *ich*.' },
      { a: 'Zusammenfassend kann man sagen, dass Pausen wichtig sind.', why: '*kann* in position two; after *dass*, the verb *sind* goes to the end.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the short form and the long form.', pairs: [
      ['usw.', 'und so weiter'],
      ['bzw.', 'beziehungsweise'],
      ['vgl.', 'vergleiche'],
      ['u. a.', 'unter anderem'],
    ] },
  ],
};
