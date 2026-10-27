// Italian C2, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Style and rhythm',
  goal: 'Write sentences that are varied, cohesive and well paced. Learn sentence variety and parallel structure, cohesion without repetition, and punctuation for effect with the Italian rules for commas and guillemets.',
  art: 'parrot',
  tags: { skills: ['grammar', 'writing', 'reading'], topics: ['sentence variety', 'parallelism', 'cohesion', 'punctuation'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Breve, lungo, equilibrato',
      about: 'Vary the length of sentences and keep parallel ideas in parallel form.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Good writers control **rhythm**. A run of long sentences tires the reader; a run of short ones sounds like a list. The skill is to mix them. A **short sentence** gives impact: *Aspettò. Non successe nulla.* A **long sentence** builds an idea step by step. A **periodic sentence** keeps the main point until the end, to create suspense: *Nonostante la pioggia, i ritardi e le obiezioni dei suoi stessi consiglieri, il ministro firmò.*' },
          { t: 'examples', items: [
            { s: 'La porta si aprì. **Non entrò nessuno.**', n: 'A short sentence after a longer one creates a pause and tension.' },
            { s: 'Dopo mesi negli archivi, intervistando i superstiti e verificando ogni data, **pubblicò finalmente il libro**.', n: 'A periodic sentence: the main clause comes last.' },
            { s: '**Venne, vide e vinse**.', n: 'Three short verbs in a row: a quick, confident rhythm.' },
          ] },
        ],
        [
          { t: 'text', md: '**Parallelism** means using the same grammatical form for ideas of equal importance. It makes a sentence balanced and easy to follow. Faulty parallelism sounds clumsy: *Le piace leggere, la scrittura e dipingere.* Use the same form for all three: *leggere, scrivere e dipingere.* Balance can also be used for effect: *Alcuni parlano; altri agiscono.*' },
          { t: 'tip', art: 'owl', md: 'To check parallelism, underline the items in a list or after *sia… sia*, *o… o*, *non solo… ma anche*. Do they all have the same form (all infinitives, all nouns)? If not, rewrite. A common fault: *Il lavoro richiede di lavorare fino a tardi e la puntualità.*' },
          { t: 'ex', kind: 'choice', h: 'Which sentence is correctly parallel?', items: [
            { q: '', o: ['Le piace nuotare, correre e ballare.', 'Le piace nuotare, la corsa e ballare.', 'Le piace nuotare, correre e il ballo.'], why: 'All three items are infinitives.' },
            { q: '', o: ['Il direttore è sia giusto sia onesto.', 'Il direttore è sia giusto sia che è onesto.', 'Il direttore è sia giustizia sia onesto.'], why: 'Both items after *sia… sia* are adjectives.' },
            { q: '', o: ['Non solo ha scritto la relazione, ma ha anche presentato i risultati.', 'Non solo ha scritto la relazione, ma anche presentare i risultati.', 'Non solo ha scritto la relazione, ma anche la presentazione dei risultati.'], why: 'Both parts are verb phrases with the same tense.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite to make the structure parallel.', items: [
            { q: 'Il lavoro richiede di lavorare fino a tardi e la puntualità.', cue: 'Il lavoro richiede di lavorare fino a tardi e di', a: ['Il lavoro richiede di lavorare fino a tardi e di essere puntuali.', 'Il lavoro richiede di lavorare fino a tardi e di essere puntuale.'], why: 'Both items become infinitives.' },
            { q: 'È intelligente, laboriosa e ha un grande senso dell’umorismo.', cue: 'È intelligente, laboriosa e', a: ['È intelligente, laboriosa e spiritosa.', 'È intelligente, laboriosa e divertente.'], why: 'Three adjectives, not two adjectives and a clause.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Is the sentence short for impact, or periodic?', groups: ['short for impact', 'periodic'], explain: ['groups'], items: [
            { s: 'Calò il silenzio.', g: 0, why: 'Very short: creates a pause.' },
            { s: 'Dopo settimane di liti, riunioni interminabili e un’ultima, amara votazione, il consiglio diede il suo assenso.', g: 1, why: 'The main clause comes last.' },
            { s: 'Nessuno si mosse.', g: 0, why: 'Very short: impact.' },
            { s: 'Nonostante la paura delle altezze, la mancanza di attrezzatura e gli avvertimenti della guida, salì.', g: 1, why: 'The main point is delayed until the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Quest’ultimo, questa decisione',
      about: 'Avoid repetition with pronouns, nominal resumption and ellipsis, and keep the reference clear.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Cohesion means that sentences link smoothly. Repeating the same noun again and again sounds heavy; replacing it badly makes the meaning unclear. Italian uses **pronouns** (*lo, la, li, le, ne, ci*), **demonstratives** (*questo, quello, quest’ultimo*), the neuter **ciò**, and **nominal resumption**, where a noun names what has just been said: *Il comune ha aumentato le tariffe. Questo aumento ha irritato i residenti.* **Ellipsis** leaves out words that are easy to supply: *Alcuni votarono a favore; altri, contro.*' },
          { t: 'table', caption: 'Ways to avoid repetition', explain: ['head', 'col0'], head: ['Device', 'Example', 'What it replaces'], rows: [
            ['pronoun lo / la', 'Il libro mi serve; lo uso domani.', 'il libro'],
            ['pronoun ne / ci', 'Ne ho bisogno. / Ci penso.', 'di questo / a questo'],
            ['quest’ultimo', 'Il ministro incontrò il sindaco; quest’ultimo rifiutò.', 'il sindaco (the last mentioned)'],
            ['ciò', 'Hanno alzato le tariffe, e ciò ha irritato tutti.', 'the whole fact'],
            ['nominal resumption', 'Il comune ha aumentato le tariffe. Questo aumento ha irritato tutti.', 'the increase'],
            ['ellipsis', 'Alcuni votarono a favore; altri, contro.', 'votarono'],
          ] },
        ],
        [
          { t: 'text', md: 'The word **questo** or **ciò** can be a source of vagueness. *Il comune ha aumentato le tariffe. Ciò ha irritato i residenti.* What irritated them: the council, the tariffs, or the rise? Where there is doubt, name it: *Questo aumento ha irritato i residenti.* **Quest’ultimo** refers to the **last-mentioned** person or thing, **il primo** to the first. If the reader must look back to find who is who, repeat the name.' },
          { t: 'tip', art: 'owl', md: '*Il primo… quest’ultimo* works for **two** items; with three or more, use *il primo, il secondo, l’ultimo*. *Quest’ultimo* is formal and a bit heavy: do not use it more than once in a paragraph. Remember the pronoun **ne** for *di questo* and **ci** for *a questo*: *Ne parlo* (I talk about it), *Ci penso* (I think about it).' },
          { t: 'ex', kind: 'choice', h: 'Choose the best word to avoid repetition.', items: [
            { q: 'Il comune ha aumentato le tariffe. ___ aumento ha irritato i residenti.', o: ['Questo', 'Esso', 'Ciò'], why: 'A noun phrase names exactly what irritated them.' },
            { q: 'Il ministro incontrò il sindaco; ___ rifiutò di rispondere.', o: ['quest’ultimo', 'il primo', 'ciò'], why: '*Quest’ultimo* = the last-mentioned: the mayor.' },
            { q: 'Hanno alzato le tariffe, ___ ha irritato tutti.', o: ['e ciò', 'e esso', 'e quello'], why: '*Ciò* refers to the whole fact.' },
            { q: 'Alcuni votarono a favore; altri, ___.', o: ['contro', 'votarono contro di loro', 'contro ciò'], why: 'Ellipsis: the verb is understood.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite to avoid repetition, using the word given.', items: [
            { q: 'Il comune ha aumentato le tariffe, e ciò ha irritato i residenti.', cue: 'Questo', a: ['Il comune ha aumentato le tariffe, e questo aumento ha irritato i residenti.', 'Il comune ha aumentato le tariffe; questo aumento ha irritato i residenti.'], why: 'Nominal resumption names the increase.' },
            { q: 'Penso a questa idea da una settimana.', cue: 'Ci', a: ['Ci penso da una settimana.'], why: '*Pensare a* + thing is replaced by *ci*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Make the reference clear.', items: [
            { s: 'Il comune ha tagliato i fondi. [Ciò] ha preoccupato le associazioni.', a: ['Questo taglio', 'Questa decisione', 'Questa misura'], why: 'Name what *ciò* refers to.' },
            { s: 'Dei tre candidati, [quest’ultimo] aveva più esperienza.', a: ['il terzo', 'l’ultimo'], why: '*Quest’ultimo* is clearer with two items.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a pronoun.', items: [
            { q: 'Vuoi del caffè? Sì, ___ voglio volentieri.', a: ['ne'], why: '*Volere del caffè* is replaced by *ne*.' },
            { q: 'Pensi al tuo viaggio? Sì, ___ penso spesso.', a: ['ci'], why: '*Pensare a* is replaced by *ci*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Punto e virgola, due punti, trattino',
      about: 'Use punctuation to control meaning and rhythm, with the Italian rules.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Punctuation controls how a sentence is read. The **punto e virgola** (;) joins two closely related clauses: *Il piano era semplice; la sua esecuzione, no.* The **due punti** (:) introduces an explanation, a list or a conclusion: *C’era una sola spiegazione: aveva mentito.* After a colon, Italian normally uses a **lowercase** letter, except before a quotation. The **trattino** (–) adds emphasis or an interruption: *Il risultato – con sorpresa di tutti – fu un pareggio.* **Parentheses** add information that could be removed. Italian uses **guillemets** for quotations: **«Vado via», disse.**' },
          { t: 'table', caption: 'Punctuation for effect', explain: ['head', 'col0'], head: ['Mark', 'Use', 'Example'], rows: [
            ['punto e virgola ;', 'two related clauses', 'Il piano era semplice; la sua esecuzione, no.'],
            ['due punti :', 'explanation or list', 'Aveva una sola paura: il fallimento.'],
            ['trattino –', 'emphasis or interruption', 'Il risultato – con sorpresa di tutti – fu un pareggio.'],
            ['parentesi ( )', 'extra, removable information', 'Il festival (alla decima edizione) apre venerdì.'],
            ['virgolette « »', 'quotations', '«Vado via», disse.'],
          ] },
        ],
        [
          { t: 'text', md: 'A single comma can change the meaning: *Andiamo a mangiare, nonna* and *Andiamo a mangiare nonna*. In relative clauses, commas separate **explanatory** information (extra) from **restrictive** information (needed to identify): *Mio fratello, che abita a Parigi, fa il cuoco* means I have one brother. *Mio fratello che abita a Parigi fa il cuoco* suggests I have more than one. Do not join two independent clauses with a comma alone (a **comma splice**): *Il piano era semplice, la sua esecuzione non lo era.*' },
          { t: 'tip', art: 'owl', md: 'Do not put a comma between the **subject** and the **verb**: *Mio fratello, abita a Parigi* is wrong (unless an aside intervenes). Put a comma **before ma**: *Voleva venire, ma non poteva.* Do not use a comma before **che** in a simple clause: *Penso che sia vero.* The rules are the same in Italy and in Switzerland, where the guillemets are also common.' },
          { t: 'ex', kind: 'choice', h: 'Which punctuation is correct?', items: [
            { q: '', o: ['Il piano era semplice; la sua esecuzione, no.', 'Il piano era semplice, la sua esecuzione no.', 'Il piano era semplice: la sua esecuzione no.'], why: 'A semicolon joins two related clauses; a comma alone is a splice.' },
            { q: '', o: ['Aveva una sola paura: il fallimento.', 'Aveva una sola paura; il fallimento.', 'Aveva una sola paura, il fallimento.'], why: 'A colon introduces the explanation.' },
            { q: '', o: ['Mia sorella, che abita a Roma, è medico.', 'Mia sorella che abita a Roma, è medico.', 'Mia sorella, che abita a Roma è medico.'], why: 'Explanatory information needs a comma on both sides.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with a semicolon, colon or dash.', items: [
            { q: 'Il piano era semplice, ma la sua esecuzione non lo era.', cue: 'Il piano era semplice;', a: ['Il piano era semplice; la sua esecuzione, no.', 'Il piano era semplice; la sua esecuzione non lo era.'], why: 'A semicolon joins the clauses.' },
            { q: 'C’era una sola spiegazione, ed era che aveva mentito.', cue: 'C’era una sola spiegazione:', a: ['C’era una sola spiegazione: aveva mentito.'], why: 'A colon introduces the explanation, in lowercase.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'What does the sentence tell you?', groups: ['only one such person', 'more than one possible'], explain: ['groups'], items: [
            { s: 'Mio fratello, che abita a Parigi, fa il cuoco.', g: 0, why: 'Commas: extra information, so there is one brother.' },
            { s: 'Mio fratello che abita a Parigi fa il cuoco.', g: 1, why: 'No commas: identifies which brother, so there are several.' },
            { s: 'Gli studenti, che erano stanchi, se ne andarono presto.', g: 0, why: 'All the students were tired and left.' },
            { s: 'Gli studenti che erano stanchi se ne andarono presto.', g: 1, why: 'Only the tired students left.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Fix the punctuation error.', items: [
            { s: 'Il film era lungo[,] era anche magnifico.', a: [';', ' –', ':'], why: 'A comma splice: use a semicolon or a dash.' },
            { s: 'Andiamo a mangiare[ ]nonna.', a: [','], why: 'A comma changes the meaning: *Andiamo a mangiare, nonna.*' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'La via lenta',
      about: 'Read a magazine essay and notice rhythm, cohesion and punctuation.',
      art: 'pizza',
      spreads: [
        [
          { t: 'reading', title: 'La via lenta', md: 'Un tempo misuravo le mie giornate in compiti svolti. Email evase, riunioni frequentate, liste spuntate; la sera ero stremata e non più saggia. Poi, una primavera, ho provato qualcosa di semplice: mi sono fermata.\n\nAll’inizio non è andata bene. L’ozio, ho scoperto, è un’arte, e difficile. Prendevo il telefono per vedere il meteo e quaranta minuti dopo scorrevo ancora lo schermo. Una vicina, che aveva vissuto tutta la vita nel paese, rise quando glielo raccontai. «Lei non è lenta — mi disse —. È solo in ritardo.»\n\nVivere lentamente non significa non fare nulla; significa fare una cosa sola alla volta e farla con attenzione. Cucino senza podcast. Cammino senza cuffie. Leggo un capitolo e poi, soprattutto, ci penso. La prima di queste abitudini è stata la più difficile; l’ultima, la più gratificante.\n\nSi può obiettare che tutto questo sia un lusso, dicono i critici, riservato a chi può ridurre l’orario. Non hanno torto, e non lo nego. Ma la calma di una sera lenta non è un prodotto; è una scelta, e una scelta che costa pochissimo.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'L’autrice giudicava un tempo le sue giornate dal numero di compiti svolti.', a: 't', why: '«Un tempo misuravo le mie giornate in compiti svolti.»' },
            { q: 'All’inizio le fu facile stare in ozio.', a: 'f', why: '«All’inizio non è andata bene.»' },
            { q: 'La vicina le disse che era troppo lenta.', a: 'f', why: '«Lei non è lenta. È solo in ritardo.»' },
            { q: 'L’autrice pensa che i critici non abbiano nessuna ragione.', a: 'f', why: '«Non hanno torto.»' },
            { q: 'Ora cucina senza podcast.', a: 't', why: '«Cucino senza podcast.»' },
            { q: 'L’autrice vive in un paese in riva al mare.', a: 'ng', why: 'The text mentions a village but not the sea.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at how the essay is written.', items: [
            { q: '«Poi, una primavera, ho provato qualcosa di semplice: mi sono fermata.» Why is the last clause so short?', o: ['To give impact after a long build-up.', 'Because the writer was in a hurry.', 'Because it is a question.'], why: 'A short clause after a long one creates impact.' },
            { q: '«La prima di queste abitudini è stata la più difficile; l’ultima, la più gratificante.» Why the semicolon?', o: ['It balances two closely related ideas.', 'It introduces a list.', 'It shows a quotation.'], why: 'A semicolon joins related clauses and creates balance.' },
            { q: '«e farla con attenzione» – what does *la* refer to?', o: ['una cosa sola', 'la sera', 'la vicina'], why: '*La* replaces *una cosa sola*.' },
            { q: 'Which opening is a periodic sentence?', o: ['«Email evase, riunioni frequentate, liste spuntate; la sera ero stremata e non più saggia.»', '«All’inizio non è andata bene.»', '«Cammino senza cuffie.»'], why: 'The list of details comes first and the point last.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the examples of parallel structure.', items: [
            { s: '[Cucino senza podcast. Cammino senza cuffie.] Leggo un capitolo e poi ci penso.', why: 'The first two sentences repeat one structure.' },
            { s: '[Email evase, riunioni frequentate, liste spuntate]; la sera ero stremata.', why: 'Three parallel participle phrases.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'L’ozio, ho scoperto, è un’___, e difficile.', a: ['arte'], why: 'The writer’s discovery.' },
            { q: 'La calma di una sera lenta non è un prodotto; è una ___.', a: ['scelta'], why: 'The writer’s final point.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Le piace ___.', o: ['nuotare, correre e ballare', 'nuotare, la corsa e ballare', 'nuotare, correre e il ballo'], why: 'All items must have the same form.' },
      { q: 'Il comune ha aumentato le tariffe. ___ aumento ha irritato i residenti.', o: ['Questo', 'Esso', 'Ciò'], why: 'A noun phrase names exactly what irritated them.' },
      { q: 'Which sentence is correct?', o: ['Il piano era semplice; la sua esecuzione, no.', 'Il piano era semplice, la sua esecuzione no.', 'Il piano era semplice; e la sua esecuzione no.'], why: 'A semicolon joins two clauses without a conjunction.' },
      { q: 'Pensi al tuo viaggio? Sì, ___ penso spesso.', o: ['ci', 'ne', 'lo'], why: '*Pensare a* is replaced by *ci*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Il ministro incontrò il sindaco; quest’___ rifiutò di rispondere.', a: ['ultimo'], why: '*Quest’ultimo* = the last-mentioned.' },
      { q: 'C’era una sola spiegazione: aveva ___.', a: ['mentito'], why: 'A colon introduces the explanation.' },
      { q: 'Alcuni votarono a favore; altri, ___.', a: ['contro'], why: 'Ellipsis.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, starting with the words given.', items: [
      { q: 'Il lavoro richiede di lavorare fino a tardi e la puntualità.', cue: 'Il lavoro richiede di lavorare fino a tardi e di', a: ['Il lavoro richiede di lavorare fino a tardi e di essere puntuali.', 'Il lavoro richiede di lavorare fino a tardi e di essere puntuale.'], why: 'Parallel infinitives.' },
      { q: 'Il piano era semplice, ma la sua esecuzione non lo era.', cue: 'Il piano era semplice;', a: ['Il piano era semplice; la sua esecuzione, no.', 'Il piano era semplice; la sua esecuzione non lo era.'], why: 'A semicolon joins the clauses.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'What does the sentence tell you?', groups: ['one only', 'more than one'], explain: ['groups'], items: [
      { s: 'Mia sorella, che abita a Roma, è medico.', g: 0, why: 'Commas: extra information, so one sister.' },
      { s: 'Mia sorella che abita a Roma è medico.', g: 1, why: 'No commas: identifies a sister, so there are several.' },
      { s: 'Suo figlio, che è pilota, ha chiamato.', g: 0, why: 'One son.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Il film era lungo[,] era anche magnifico.', a: [';', ' –', ':'], why: 'A comma splice.' },
      { s: 'Il comune ha tagliato i fondi. [Ciò] ha preoccupato le associazioni.', a: ['Questo taglio', 'Questa decisione', 'Questa misura'], why: 'Name what *ciò* refers to.' },
    ] },
  ],
};
