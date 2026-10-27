// German C2, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Style and rhythm',
  goal: 'Write sentences that are varied, cohesive and well paced. Learn sentence variety and parallel structure, cohesion without repetition, and punctuation for effect with the comma rules of German.',
  art: 'parrot',
  tags: { skills: ['grammar', 'writing', 'reading'], topics: ['sentence variety', 'parallelism', 'cohesion', 'pronominal adverbs', 'punctuation'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Kurz, lang, ausgewogen',
      about: 'Vary the length of sentences and keep parallel ideas in parallel form.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Good writers control **rhythm**. A run of long sentences tires the reader; a run of short ones sounds like a list. The skill is to mix them. A **short sentence** gives impact: *Er wartete. Nichts geschah.* A **long sentence** builds an idea step by step. German allows especially long **periodic sentences**, because the verb often comes last in a subordinate clause: *Trotz des Regens, der Verspätungen und der Einwände seiner eigenen Berater unterschrieb der Minister.* The main point can be kept until the very end.' },
          { t: 'examples', items: [
            { s: 'Die Tür öffnete sich. **Niemand trat ein.**', n: 'A short sentence after a longer one creates a pause and tension.' },
            { s: 'Nach Monaten in den Archiven, nach Gesprächen mit Überlebenden und nach der Prüfung jedes Datums **veröffentlichte sie endlich das Buch**.', n: 'A periodic sentence: the main clause comes last.' },
            { s: 'Er **kam, sah und siegte**.', n: 'Three short verbs in a row: a quick, confident rhythm.' },
          ] },
        ],
        [
          { t: 'text', md: '**Parallelism** means using the same grammatical form for ideas of equal importance. It makes a sentence balanced and easy to follow. Faulty parallelism sounds clumsy: *Sie mag Lesen, Schreiben und zu malen.* Use the same form for all three: *Lesen, Schreiben und Malen*, or *lesen, schreiben und malen*. Balance can also be used for effect: *Die einen reden, die anderen handeln.*' },
          { t: 'tip', art: 'owl', md: 'To check parallelism, underline the items in a list or after *sowohl … als auch*, *entweder … oder*, *nicht nur … sondern auch*. Do they all have the same form (all infinitives, all nouns)? If not, rewrite. A common fault: *Die Stelle verlangt, lange zu arbeiten und Pünktlichkeit.*' },
          { t: 'ex', kind: 'choice', h: 'Which sentence is correctly parallel?', items: [
            { q: '', o: ['Sie schwimmt gern, läuft gern und tanzt gern.', 'Sie schwimmt gern, das Laufen und tanzt gern.', 'Sie schwimmt gern, laufen und tanzt gern.'], why: 'All three items have the same form.' },
            { q: '', o: ['Der Chef ist sowohl gerecht als auch ehrlich.', 'Der Chef ist sowohl gerecht als auch er ist ehrlich.', 'Der Chef ist sowohl Gerechtigkeit als auch ehrlich.'], why: 'Both items after *sowohl … als auch* are adjectives.' },
            { q: '', o: ['Er hat nicht nur den Bericht geschrieben, sondern auch die Ergebnisse vorgestellt.', 'Er hat nicht nur den Bericht geschrieben, sondern auch die Präsentation.', 'Er hat nicht nur den Bericht geschrieben, sondern auch zu präsentieren.'], why: 'Both parts after *nicht nur … sondern auch* are verb phrases.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite to make the structure parallel.', items: [
            { q: 'Die Stelle verlangt, lange zu arbeiten und Pünktlichkeit.', cue: 'Die Stelle verlangt, lange zu arbeiten und', a: ['Die Stelle verlangt, lange zu arbeiten und pünktlich zu sein.'], why: 'Both items become infinitive groups.' },
            { q: 'Sie ist klug, fleißig und hat einen großen Sinn für Humor.', cue: 'Sie ist klug, fleißig und', a: ['Sie ist klug, fleißig und humorvoll.', 'Sie ist klug, fleißig und witzig.'], why: 'Three adjectives, not two adjectives and a clause.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Is the sentence short for impact, or periodic?', groups: ['short for impact', 'periodic'], explain: ['groups'], items: [
            { s: 'Stille trat ein.', g: 0, why: 'Very short: creates a pause.' },
            { s: 'Nach Wochen des Streits, endloser Sitzungen und einer letzten, bitteren Abstimmung gab der Rat seine Zustimmung.', g: 1, why: 'The main clause comes last.' },
            { s: 'Niemand rührte sich.', g: 0, why: 'Very short: impact.' },
            { s: 'Trotz seiner Höhenangst, seiner fehlenden Ausrüstung und der Warnungen des Führers stieg er hinauf.', g: 1, why: 'The main point is delayed until the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Dadurch, letzterer, diese Entscheidung',
      about: 'Avoid repetition with pronominal adverbs, resumption and ellipsis, and keep the reference clear.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Cohesion means that sentences link smoothly. Repeating the same noun again and again sounds heavy; replacing it badly makes the meaning unclear. German uses **pronominal adverbs** (*dadurch, darauf, damit, davon, hierzu, hierfür*) to refer back to a whole idea: *Der Rat erhöhte die Gebühren. Dadurch wurden viele Bewohner verärgert.* It uses **demonstratives** (*dieser, jener, Letzterer, Ersterer*) and **resumption with a noun**: *Diese Entscheidung verärgerte viele Bewohner.* **Ellipsis** leaves out words that are easy to supply: *Die einen stimmten dafür, die anderen dagegen.*' },
          { t: 'table', caption: 'Ways to avoid repetition', explain: ['head', 'col0'], head: ['Device', 'Example', 'What it replaces'], rows: [
            ['pronominal adverb', 'Ich denke oft daran. / Dadurch entstand ein Problem.', 'an die Reise / the cause'],
            ['Ersterer / Letzterer', 'Der Minister traf den Bürgermeister; Letzterer lehnte ab.', 'der Bürgermeister (the last mentioned)'],
            ['resumption with a noun', 'Der Rat erhöhte die Gebühren. Diese Erhöhung verärgerte alle.', 'the increase'],
            ['ellipsis', 'Die einen stimmten dafür, die anderen dagegen.', 'stimmten'],
          ] },
        ],
        [
          { t: 'text', md: 'The word **das** or **dies** is a common source of vagueness. *Der Rat hat die Gebühren erhöht. Das hat die Bewohner verärgert.* What irritated them: the council, the fees, or the rise? Where there is doubt, name it: *Diese Erhöhung hat die Bewohner verärgert.* **Letzterer** refers to the **last-mentioned** person or thing, **Ersterer** to the first of two. If the reader must look back to find who is who, repeat the name.' },
          { t: 'tip', art: 'owl', md: '*Ersterer … Letzterer* works for **two** items; with three or more, use *der Erste, der Zweite, der Letzte*. *Letzterer* is formal and a bit heavy: do not use it more than once in a paragraph. Both are spelled with a **capital letter** when used as nouns: *Letzterer*, *Ersterer*.' },
          { t: 'ex', kind: 'choice', h: 'Choose the best word to avoid repetition.', items: [
            { q: 'Der Rat hat die Gebühren erhöht. ___ Erhöhung hat die Bewohner verärgert.', o: ['Diese', 'Sie', 'Dieser'], why: 'A noun phrase names exactly what irritated them.' },
            { q: 'Der Minister traf den Bürgermeister; ___ lehnte jede Antwort ab.', o: ['Letzterer', 'Ersterer', 'Jener'], why: '*Letzterer* = the last-mentioned: the mayor.' },
            { q: 'Ich brauche dieses Buch. Ich brauche es für morgen, ich denke jeden Tag ___.', o: ['daran', 'darüber', 'davon'], why: '*Denken an* → *daran*.' },
            { q: 'Die einen stimmten dafür, die anderen ___.', o: ['dagegen', 'gegen es', 'dagegen es'], why: 'Ellipsis: the verb is understood.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite to avoid repetition, using the word given.', items: [
            { q: 'Der Rat hat die Gebühren erhöht, und das hat die Bewohner verärgert.', cue: 'Diese', a: ['Der Rat hat die Gebühren erhöht, und diese Erhöhung hat die Bewohner verärgert.', 'Der Rat hat die Gebühren erhöht; diese Erhöhung hat die Bewohner verärgert.'], why: 'Resumption with a noun names the increase.' },
            { q: 'Ich denke seit einer Woche an diese Idee.', cue: 'Ich denke seit einer Woche', a: ['Ich denke seit einer Woche daran.'], why: '*An diese Idee* → *daran*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Make the reference clear.', items: [
            { s: 'Der Rat hat die Zuschüsse gekürzt. [Das] hat die Vereine beunruhigt.', a: ['Diese Kürzung', 'Diese Entscheidung', 'Diese Maßnahme'], why: 'Name what *das* refers to.' },
            { s: 'Von den drei Kandidaten hatte [Letzterer] die meiste Erfahrung.', a: ['der Dritte', 'der Letzte'], why: '*Letzterer* is for two items only.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a pronominal adverb.', items: [
            { q: 'Möchtest du Kaffee? Ja, ich habe Lust ___.', a: ['darauf'], why: '*Lust haben auf* → *darauf*.' },
            { q: 'Denkst du an deine Reise? Ja, ich denke oft ___.', a: ['daran'], why: '*Denken an* → *daran*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Semikolon, Doppelpunkt, Komma',
      about: 'Use punctuation to control meaning and rhythm, with the comma rules of German.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Punctuation controls how a sentence is read. The **Semikolon** (;) joins two closely related clauses: *Der Plan war einfach; seine Ausführung war es nicht.* The **Doppelpunkt** (:) introduces an explanation, a list or a conclusion: *Es gab nur eine Erklärung: Er hatte gelogen.* After a colon, a **full sentence** starts with a capital letter. The **Gedankenstrich** (–) adds emphasis or an interruption: *Das Ergebnis – zur Überraschung aller – war ein Unentschieden.* **Klammern** add information that could be removed.' },
          { t: 'table', caption: 'Punctuation for effect', explain: ['head', 'col0'], head: ['Mark', 'Use', 'Example'], rows: [
            ['Semikolon ;', 'two related clauses', 'Der Plan war einfach; seine Ausführung war es nicht.'],
            ['Doppelpunkt :', 'explanation or list', 'Er hatte nur eine Angst: das Scheitern.'],
            ['Gedankenstrich –', 'emphasis or interruption', 'Das Ergebnis – zur Überraschung aller – war ein Unentschieden.'],
            ['Klammern ( )', 'extra, removable information', 'Das Festival (heuer zum zehnten Mal) beginnt am Freitag.'],
          ] },
        ],
        [
          { t: 'text', md: 'German has **strict comma rules** that differ from English and French. A comma separates **every subordinate clause** from the main clause: *Ich glaube, dass er kommt.* **Relative clauses** are always set off by commas, so the comma does not distinguish a restrictive from a non-restrictive relative clause: *Mein Bruder, der in Paris wohnt, ist Koch.* A comma goes before **aber, sondern, denn** and often before an **infinitive group** with *um … zu*, *ohne … zu*, *anstatt … zu*. A single comma can change the meaning: *Wir essen, Opa!* and *Wir essen Opa!*' },
          { t: 'tip', art: 'owl', md: 'A **comma splice** (two main clauses joined by a comma alone) is also a mistake in German: *Der Plan war einfach, die Ausführung war es nicht.* Use a semicolon, a full stop or *aber*. With *und* and *oder*, no comma is needed between two main clauses unless the sentence would be unclear. Before an extended **infinitive group** with *zu* a comma is optional but helpful.' },
          { t: 'ex', kind: 'choice', h: 'Which punctuation is correct?', items: [
            { q: '', o: ['Der Plan war einfach; seine Ausführung war es nicht.', 'Der Plan war einfach, seine Ausführung war es nicht.', 'Der Plan war einfach: seine Ausführung war es nicht.'], why: 'A semicolon joins two related clauses; a comma alone is a splice.' },
            { q: '', o: ['Ich glaube, dass er kommt.', 'Ich glaube dass er kommt.', 'Ich glaube; dass er kommt.'], why: 'A comma before every subordinate clause.' },
            { q: '', o: ['Meine Schwester, die in Rom wohnt, ist Ärztin.', 'Meine Schwester die in Rom wohnt, ist Ärztin.', 'Meine Schwester, die in Rom wohnt ist Ärztin.'], why: 'A relative clause is set off by commas on both sides.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with a semicolon, colon or dash.', items: [
            { q: 'Der Plan war einfach, aber seine Ausführung war es nicht.', cue: 'Der Plan war einfach;', a: ['Der Plan war einfach; seine Ausführung war es nicht.'], why: 'A semicolon joins the clauses.' },
            { q: 'Es gab nur eine Erklärung, und zwar dass er gelogen hatte.', cue: 'Es gab nur eine Erklärung:', a: ['Es gab nur eine Erklärung: Er hatte gelogen.'], why: 'A colon introduces the explanation; a full sentence starts with a capital.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence has the commas in the right places?', items: [
            { q: '', o: ['Er sagt, dass er müde ist.', 'Er sagt dass er müde ist.', 'Er sagt dass, er müde ist.'], why: 'A comma before a subordinate clause.' },
            { q: '', o: ['Sie lacht und weint.', 'Sie lacht, und weint.', 'Sie, lacht und weint.'], why: 'No comma between two verbs joined by *und*.' },
            { q: '', o: ['Ich bleibe zu Hause, weil es regnet.', 'Ich bleibe zu Hause weil es regnet.', 'Ich bleibe, zu Hause weil es regnet.'], why: 'A comma before *weil*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Fix the punctuation error.', items: [
            { s: 'Der Film war lang[,] er war auch wunderbar.', a: [';', ' –', ':'], why: 'A comma splice: use a semicolon or a dash.' },
            { s: 'Wir essen[ ]Opa!', a: [','], why: 'A comma changes the meaning: *Wir essen, Opa!*' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Die Kunst der Langsamkeit',
      about: 'Read a magazine essay and notice rhythm, cohesion and punctuation.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'reading', title: 'Die Kunst der Langsamkeit', md: 'Früher maß ich meine Tage in erledigten Aufgaben. Beantwortete Mails, besuchte Sitzungen, abgehakte Listen; am Abend war ich erschöpft und nicht klüger. Dann, eines Frühlings, versuchte ich etwas Einfaches: Ich hörte auf.\n\nZuerst ging es nicht gut. Müßiggang, so entdeckte ich, ist eine Kunst, und eine schwierige dazu. Ich nahm mein Handy, um das Wetter zu prüfen, und scrollte vierzig Minuten später immer noch. Eine Nachbarin, die ihr ganzes Leben im Dorf verbracht hatte, lachte, als ich es ihr erzählte. „Sie sind nicht langsam“, sagte sie. „Sie sind nur zu spät.“\n\nLangsam leben heißt nicht, nichts zu tun; es heißt, eine Sache nach der anderen zu tun und sie aufmerksam zu tun. Ich koche ohne Podcast. Ich gehe ohne Kopfhörer spazieren. Ich lese ein Kapitel und denke dann, vor allem, darüber nach. Die erste dieser Gewohnheiten war die schwerste; die letzte, die lohnendste.\n\nMan kann einwenden, das alles sei ein Luxus, sagen Kritiker, nur denen vorbehalten, die ihre Arbeitszeit kürzen können. Sie haben nicht unrecht, und ich weise das nicht ab. Aber die Ruhe eines langsamen Abends ist kein Produkt; sie ist eine Entscheidung, und eine, die sehr wenig kostet.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Die Autorin beurteilte ihre Tage früher nach der Zahl erledigter Aufgaben.', a: 't', why: '„Früher maß ich meine Tage in erledigten Aufgaben.“' },
            { q: 'Sie fand es anfangs leicht, untätig zu sein.', a: 'f', why: '„Zuerst ging es nicht gut.“' },
            { q: 'Die Nachbarin sagte ihr, sie sei zu langsam.', a: 'f', why: '„Sie sind nicht langsam… Sie sind nur zu spät.“' },
            { q: 'Die Autorin meint, die Kritiker hätten überhaupt nicht recht.', a: 'f', why: '„Sie haben nicht unrecht.“' },
            { q: 'Sie kocht jetzt ohne Podcast.', a: 't', why: '„Ich koche ohne Podcast.“' },
            { q: 'Die Autorin wohnt in einem Dorf am Meer.', a: 'ng', why: 'The text mentions a village but not the sea.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at how the essay is written.', items: [
            { q: '„Dann, eines Frühlings, versuchte ich etwas Einfaches: Ich hörte auf.“ Why is the last sentence so short?', o: ['To give impact after a long build-up.', 'Because the writer was in a hurry.', 'Because it is a question.'], why: 'A short clause after a long one creates impact.' },
            { q: '„Die erste dieser Gewohnheiten war die schwerste; die letzte, die lohnendste.“ Why the semicolon?', o: ['It balances two closely related ideas.', 'It introduces a list.', 'It shows a quotation.'], why: 'A semicolon joins related clauses and creates balance.' },
            { q: '„und sie aufmerksam zu tun“ – what does *sie* refer to?', o: ['eine Sache', 'die Gewohnheit', 'die Nachbarin'], why: '*Sie* replaces *eine Sache*.' },
            { q: 'Which opening is a periodic sentence?', o: ['„Beantwortete Mails, besuchte Sitzungen, abgehakte Listen; am Abend war ich erschöpft und nicht klüger.“', '„Zuerst ging es nicht gut.“', '„Ich gehe ohne Kopfhörer spazieren.“'], why: 'The list of details comes first and the point last.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the examples of parallel structure.', items: [
            { s: '[Ich koche ohne Podcast. Ich gehe ohne Kopfhörer spazieren.] Ich lese ein Kapitel und denke darüber nach.', why: 'The first two sentences repeat one structure.' },
            { s: '[Beantwortete Mails, besuchte Sitzungen, abgehakte Listen]; am Abend war ich erschöpft.', why: 'Three parallel participle phrases.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Müßiggang, so entdeckte ich, ist eine ___, und eine schwierige dazu.', a: ['Kunst'], why: 'The writer’s discovery.' },
            { q: 'Die Ruhe eines langsamen Abends ist kein Produkt; sie ist eine ___.', a: ['Entscheidung'], why: 'The writer’s final point.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Sie ___.', o: ['schwimmt gern, läuft gern und tanzt gern', 'schwimmt gern, das Laufen und tanzt gern', 'schwimmt gern, laufen und tanzt gern'], why: 'All items must have the same form.' },
      { q: 'Der Rat hat die Gebühren erhöht. ___ Erhöhung hat die Bewohner verärgert.', o: ['Diese', 'Sie', 'Dieser'], why: 'A noun phrase names exactly what irritated them.' },
      { q: 'Which sentence is correct?', o: ['Der Plan war einfach; seine Ausführung war es nicht.', 'Der Plan war einfach, seine Ausführung war es nicht.', 'Der Plan war einfach; und seine Ausführung war es nicht.'], why: 'A semicolon joins two clauses without a conjunction.' },
      { q: 'Denkst du an deine Reise? Ja, ich denke oft ___.', o: ['daran', 'darüber', 'davon'], why: '*Denken an* → *daran*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Der Minister traf den Bürgermeister; ___ lehnte ab. (the last mentioned)', a: ['Letzterer'], why: '*Letzterer* = the last-mentioned.' },
      { q: 'Es gab nur eine Erklärung: Er hatte ___.', a: ['gelogen'], why: 'A colon introduces the explanation.' },
      { q: 'Die einen stimmten dafür, die anderen ___.', a: ['dagegen'], why: 'Ellipsis.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, starting with the words given.', items: [
      { q: 'Die Stelle verlangt, lange zu arbeiten und Pünktlichkeit.', cue: 'Die Stelle verlangt, lange zu arbeiten und', a: ['Die Stelle verlangt, lange zu arbeiten und pünktlich zu sein.'], why: 'Parallel infinitive groups.' },
      { q: 'Der Plan war einfach, aber seine Ausführung war es nicht.', cue: 'Der Plan war einfach;', a: ['Der Plan war einfach; seine Ausführung war es nicht.'], why: 'A semicolon joins the clauses.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence has the commas in the right places?', items: [
      { q: '', o: ['Er sagt, dass er müde ist.', 'Er sagt dass er müde ist.', 'Er sagt dass, er müde ist.'], why: 'A comma before a subordinate clause.' },
      { q: '', o: ['Ich bleibe hier, weil es regnet.', 'Ich bleibe hier weil es regnet.', 'Ich bleibe, hier weil es regnet.'], why: 'A comma before *weil*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Der Film war lang[,] er war auch wunderbar.', a: [';', ' –', ':'], why: 'A comma splice.' },
      { s: 'Der Rat hat die Zuschüsse gekürzt. [Das] hat die Vereine beunruhigt.', a: ['Diese Kürzung', 'Diese Entscheidung', 'Diese Maßnahme'], why: 'Name what *das* refers to.' },
    ] },
  ],
};
