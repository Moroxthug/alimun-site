// Italian B2, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Arts, culture and opinion',
  goal: 'Describe a book, film or exhibition and defend a view. Learn the vocabulary of plot and criticism, indefinite words with the congiuntivo (qualunque, chiunque, dovunque, comunque) and the discourse markers of reviews.',
  art: 'teacup',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['books', 'films', 'exhibitions', 'review', 'indefinite words', 'discourse markers'], goals: ['foundations', 'pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Trama, personaggi, stile',
      about: 'Learn the words for talking about a book, a film or an exhibition.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'To talk about a book or a film, name its parts: the **trama** (plot), the **protagonista** (main character), the **finale** (ending), the **scena**, the **stile**. For an exhibition, talk about the **mostra**, the **opera** and the **allestimento** (the way it is set up). Say where a story takes place with **ambientato in**: *Il film è ambientato in un piccolo paese di mare.* Say what it is about with **racconta la storia di**: *Il romanzo racconta la storia di una famiglia.* Say how it makes you feel with verbs like **emozionare, coinvolgere, annoiare, deludere, colpire**.' },
          { t: 'table', caption: 'Words for books, films and exhibitions', explain: ['head', 'col1'], head: ['Word', 'Meaning'], rows: [
            ['la trama', 'plot'],
            ['il protagonista', 'main character'],
            ['il personaggio', 'character'],
            ['il finale', 'ending'],
            ['lo stile', 'style'],
            ['la mostra', 'exhibition'],
            ['l’opera', 'work'],
            ['la recensione', 'review'],
            ['la critica', 'critics, criticism'],
            ['il pubblico', 'audience'],
          ] },
          { t: 'tip', art: 'owl', md: 'Verbs of feeling take the person as an **object**: *La trama mi ha coinvolto. Il finale mi ha deluso. Lo stile mi ha colpito.* The thing is the subject. Useful adjectives: **coinvolgente** (gripping), **deludente** (disappointing), **originale**, **banale** (ordinary), **riuscito** (successful), **noioso** (boring).' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Il film è **ambientato** in un piccolo paese di mare.', n: 'Where the story takes place.' },
            { s: 'Il romanzo **racconta la storia** di una famiglia.', n: 'What it is about.' },
            { s: 'La trama mi ha **coinvolto** fino alla fine.', n: 'The plot is the subject; I am the object.' },
            { s: 'Il finale mi ha **deluso**.', n: 'The ending disappointed me.' },
            { s: 'Mi ha **colpito** soprattutto lo stile.', n: 'What struck me.' },
          ] },
          { t: 'dialogue', title: 'Dopo il film', lines: [
            { who: 'Giulia', s: 'Ti è piaciuto il film?' },
            { who: 'Marco', s: 'Sì, la trama mi ha coinvolto, anche se il finale mi ha deluso.' },
            { who: 'Giulia', s: 'Io ho trovato il protagonista molto credibile.' },
            { who: 'Marco', s: 'È vero, e lo stile del regista è originale.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['la trama', 'plot'],
            ['il protagonista', 'main character'],
            ['il finale', 'ending'],
            ['la recensione', 'review'],
            ['il pubblico', 'audience'],
            ['lo stile', 'style'],
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the verb? Choose all that fit.', items: [
            { key: 'girare', o: ['un film', 'una scena', 'un documentario', 'un romanzo'], a: [0, 1, 2], why: 'You shoot a film, a scene or a documentary; you write a novel.' },
            { key: 'scrivere', o: ['un romanzo', 'una recensione', 'un articolo', 'una scena filmata'], a: [0, 1, 2], why: 'You write a novel, a review or an article.' },
            { key: 'allestire', o: ['una mostra', 'uno spettacolo', 'un museo', 'un bicchiere'], a: [0, 1], why: 'You set up an exhibition or a show.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Il ___ del film è un giovane musicista.', o: ['protagonista', 'finale', 'pubblico'], why: 'The main character: *il protagonista*.' },
            { q: 'La ___ del romanzo mi ha coinvolto fino alla fine.', o: ['trama', 'critica', 'mostra'], why: 'The plot: *la trama*.' },
            { q: 'Il finale mi ha ___ : mi aspettavo di più.', o: ['deluso', 'coinvolto', 'emozionato'], why: 'He expected more: *deluso*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Il film è ___ in un piccolo paese di mare. (set)', a: ['ambientato'], why: '*Ambientato in* = set in.' },
            { q: 'Il romanzo racconta la ___ di una famiglia.', a: ['storia'], why: '*Racconta la storia di*.' },
            { q: 'La trama mi ha ___ fino alla fine. (coinvolgere)', a: ['coinvolto'], why: '*Mi ha coinvolto*.' },
            { q: 'Mi ha ___ soprattutto lo stile. (colpire)', a: ['colpito'], why: '*Mi ha colpito*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Il film è ambientato in un piccolo paese di mare.', why: '*Ambientato in*.' },
            { a: 'La trama mi ha coinvolto fino alla fine.', why: 'The plot is the subject.' },
            { a: 'Il finale mi ha deluso.', why: 'The ending is the subject.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Io [ho coinvolto] dalla trama fino alla fine.', a: ['sono stato coinvolto', 'sono stata coinvolta'], why: 'The person feels it: *sono stato coinvolto*; or say *La trama mi ha coinvolto*.' },
            { s: 'Il film è [ambientare] in un piccolo paese di mare.', a: ['ambientato'], why: 'The participle: *ambientato*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Qualunque, chiunque, dovunque',
      about: 'Use indefinite words with the congiuntivo to say “whatever, whoever, wherever”.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Some indefinite words take the **congiuntivo**. **Qualunque / qualsiasi** + noun means *whatever*: *Qualunque cosa tu dica, ti aiuterò.* **Chiunque** means *whoever*: *Chiunque sia, non aprire.* **Dovunque / ovunque** means *wherever*: *Dovunque tu vada, ti penserò.* **Comunque** + congiuntivo means *however it goes*: *Comunque vada, sarà un successo.* **Per quanto** means *however much*: *Per quanto ci provi, non ci riesce.*' },
          { t: 'table', caption: 'Indefinite words with the subjunctive', explain: ['head', 'col1'], head: ['Word', 'Meaning', 'Example'], rows: [
            ['qualunque / qualsiasi + noun', 'whatever', 'Qualunque cosa tu dica, ti aiuterò.'],
            ['chiunque', 'whoever', 'Chiunque sia, non aprire.'],
            ['dovunque / ovunque', 'wherever', 'Dovunque tu vada, ti penserò.'],
            ['comunque', 'however', 'Comunque vada, sarà un successo.'],
            ['per quanto', 'however much', 'Per quanto ci provi, non ci riesce.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Comunque** has two uses. Alone, it means *anyway*: *Comunque, ho capito.* With the congiuntivo, it means *however*: *Comunque la si giudichi, la mostra non lascia indifferenti.* **Qualunque** is written with one *l* and goes before a singular noun: *qualunque cosa, qualunque persona*.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Qualunque cosa tu dica**, ti aiuterò.', n: '*Qualunque cosa* + congiuntivo.' },
            { s: '**Chiunque sia**, non aprire la porta.', n: '*Chiunque* + congiuntivo.' },
            { s: '**Dovunque tu vada**, ti penserò.', n: '*Dovunque* + congiuntivo.' },
            { s: '**Comunque vada**, sarà un successo.', n: '*Comunque* + congiuntivo.' },
            { s: '**Per quanto sia** difficile, ci provo.', n: '*Per quanto* + congiuntivo.' },
          ] },
          { t: 'dialogue', title: 'Prima dell’apertura', lines: [
            { who: 'Sara', s: 'Comunque vada, la mostra è già un successo.' },
            { who: 'Paolo', s: 'Chiunque la visiti, ne parlerà.' },
            { who: 'Sara', s: 'Qualunque cosa dica la critica, io sono contenta del lavoro.' },
            { who: 'Paolo', s: 'Dovunque la portino dopo, sarà un successo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the congiuntivo.', items: [
            { q: 'Qualunque cosa tu ___ , ti aiuterò. (dire)', a: ['dica'], why: '*Dire* → *dica*.' },
            { q: 'Chiunque ___ , non aprire. (essere)', a: ['sia'], why: '*Essere* → *sia*.' },
            { q: 'Dovunque tu ___ , ti penserò. (andare)', a: ['vada'], why: '*Andare* → *vada*.' },
            { q: 'Comunque ___ , sarà un successo. (andare)', a: ['vada'], why: '*Andare* → *vada*.' },
            { q: 'Per quanto ___ difficile, ci provo. (essere)', a: ['sia'], why: '*Essere* → *sia*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Qualunque cosa tu ___ , ti aiuterò.', o: ['faccia', 'fai', 'farai'], why: '*Qualunque cosa* + congiuntivo.' },
            { q: 'Chiunque ___ alla porta, non aprire.', o: ['sia', 'è', 'sarebbe'], why: '*Chiunque* + congiuntivo.' },
            { q: 'Dovunque ___ , ti penserò.', o: ['tu vada', 'vai', 'andrai'], why: '*Dovunque* + congiuntivo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
            { q: 'Non importa che cosa dici, ti aiuterò.', cue: 'Qualunque cosa', a: ['Qualunque cosa tu dica, ti aiuterò.'], why: '*Qualunque cosa* + congiuntivo.' },
            { q: 'Non importa dove vai, ti penserò.', cue: 'Dovunque', a: ['Dovunque tu vada, ti penserò.'], why: '*Dovunque* + congiuntivo.' },
            { q: 'Non importa chi è, non aprire.', cue: 'Chiunque', a: ['Chiunque sia, non aprire.'], why: '*Chiunque* + congiuntivo.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Chiunque [è], non aprire.', a: ['sia'], why: '*Chiunque* + congiuntivo.' },
            { s: 'Dovunque tu [vai], ti penserò.', a: ['vada'], why: '*Dovunque* + congiuntivo.' },
            { s: 'Qualunque cosa [dici], ti aiuterò.', a: ['tu dica'], why: '*Qualunque cosa tu dica*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['chiunque', 'whoever'],
            ['dovunque', 'wherever'],
            ['qualunque cosa', 'whatever'],
            ['comunque vada', 'however it goes'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Comunque vada, sarà un successo.', why: '*Comunque* + congiuntivo.' },
            { a: 'Dovunque tu vada, ti penserò.', why: '*Dovunque* + congiuntivo.' },
            { a: 'Chiunque sia, non aprire la porta.', why: '*Chiunque* + congiuntivo.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Tutto sommato, a dire il vero',
      about: 'Use the discourse markers of reviews and everyday conversation.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'A good review is not only a list of facts: it shows the writer’s balance. Use **tutto sommato** or **nel complesso** (all in all) to sum up, **a dire il vero** or **in realtà** (to tell the truth) to say what you really think, **in fondo** (after all) to add a calm reason, **per certi versi** (in some ways) to qualify, **di fatto** (in fact) to state a result, and **insomma** to close. With **sì, però …** you accept a point and then add a limit: *Sì, è un bel film, però il finale è debole.*' },
          { t: 'table', caption: 'Phrases for a review', explain: ['head', 'col0'], head: ['Function', 'Phrase', 'Example'], rows: [
            ['sum up', 'tutto sommato / nel complesso', 'Tutto sommato, è un buon film.'],
            ['say what you think', 'a dire il vero / in realtà', 'A dire il vero, il finale mi ha deluso.'],
            ['add a calm reason', 'in fondo', 'In fondo, è una storia semplice.'],
            ['qualify', 'per certi versi', 'Per certi versi, è un film coraggioso.'],
            ['state a result', 'di fatto', 'Di fatto, il pubblico ha apprezzato.'],
            ['accept then limit', 'sì, però …', 'Sì, è bello, però è troppo lungo.'],
          ] },
          { t: 'tip', art: 'owl', md: '**A dire il vero** and **in realtà** often start a sentence that surprises or corrects: *A dire il vero, non l’ho finito.* Do not confuse **in realtà** (really, actually) with **in effetti** (indeed): *In effetti hai ragione* agrees, while *In realtà hai torto* corrects.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Tutto sommato**, è un buon film.', n: 'A balanced summing up.' },
            { s: '**A dire il vero**, il finale mi ha deluso.', n: 'What I really think.' },
            { s: '**Per certi versi**, è un libro coraggioso.', n: 'In some ways.' },
            { s: '**Sì, però** è un po’ lungo.', n: 'Accept, then limit.' },
            { s: '**Insomma**, non è male.', n: 'To close.' },
          ] },
          { t: 'dialogue', title: 'Una recensione a voce', lines: [
            { who: 'Giulia', s: 'Allora, che cosa ne pensi del romanzo?' },
            { who: 'Marco', s: 'Tutto sommato mi è piaciuto. A dire il vero, all’inizio l’ho trovato lento.' },
            { who: 'Giulia', s: 'Sì, però il finale è sorprendente.' },
            { who: 'Marco', s: 'Per certi versi sì. Insomma, lo consiglierei.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the function with the phrase.', pairs: [
            ['to sum up', 'Tutto sommato, …'],
            ['to say what you really think', 'A dire il vero, …'],
            ['to qualify', 'Per certi versi, …'],
            ['to accept then limit', 'Sì, però …'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Tutto ___ , è un buon film.', a: ['sommato'], why: '*Tutto sommato* = all in all.' },
            { q: 'A dire il ___ , il finale mi ha deluso.', a: ['vero'], why: '*A dire il vero* = to tell the truth.' },
            { q: 'Per certi ___ , è un libro coraggioso.', a: ['versi'], why: '*Per certi versi* = in some ways.' },
            { q: 'In ___ , è una storia semplice.', a: ['fondo'], why: '*In fondo* = after all.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right phrase.', items: [
            { q: '___ , è un film ben riuscito.', o: ['Nel complesso', 'In realtà no', 'Per certi anni'], why: '*Nel complesso* = on the whole.' },
            { q: 'Sì, è bello, ___ è troppo lungo.', o: ['però', 'quindi', 'anche se'], why: '*Però* adds the limit.' },
            { q: '___ , non l’ho finito: l’ho trovato noioso.', o: ['A dire il vero', 'Di fatto', 'Per certi versi'], why: 'To say what you really think: *a dire il vero*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Tutto sommato, è un buon film.', why: '*Tutto sommato* sums up.' },
            { a: 'A dire il vero, il finale mi ha deluso.', why: '*A dire il vero* says what you think.' },
            { a: 'Per certi versi, è un libro coraggioso.', why: '*Per certi versi* qualifies.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Una mostra sul tempo',
      about: 'Read a review of an exhibition.',
      art: 'teacup',
      spreads: [
        [
          { t: 'reading', title: 'La recensione', md: 'La mostra, allestita nelle sale di un ex convento, raccoglie una trentina di opere intorno a un tema semplice: il tempo. Per quanto il percorso sia lineare, non risulta mai noioso: ogni sala cambia luce e ritmo. Colpisce soprattutto l’installazione finale, nella quale un grande orologio senza lancette invita il visitatore a fermarsi.\n\nA dire il vero, alcune opere sembrano ripetersi, e il catalogo avrebbe potuto essere più chiaro. Tutto sommato, però, è una mostra che merita una visita: chiunque la visiti, esperto o no, troverà qualcosa che lo riguarda. Comunque la si giudichi, non lascia indifferenti.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La mostra è allestita in un ex convento.', a: 't', why: '*Allestita nelle sale di un ex convento.*' },
            { q: 'Il percorso della mostra è confuso.', a: 'f', why: '*Il percorso sia lineare.*' },
            { q: 'L’installazione finale ha un orologio senza lancette.', a: 't', why: '*Un grande orologio senza lancette.*' },
            { q: 'L’ingresso alla mostra è gratuito.', a: 'ng', why: 'The review does not mention the price.' },
            { q: 'Secondo l’autore, alcune opere sembrano ripetersi.', a: 't', why: '*Alcune opere sembrano ripetersi.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Qual è il tema della mostra?', o: ['Il tempo.', 'La città.', 'Il mare.'], why: '*Intorno a un tema semplice: il tempo.*' },
            { q: 'Che cosa colpisce di più l’autore?', o: ['L’installazione finale.', 'Il catalogo.', 'L’ingresso.'], why: '*Colpisce soprattutto l’installazione finale.*' },
            { q: 'Qual è il giudizio finale?', o: ['La mostra merita una visita.', 'La mostra è da evitare.', 'La mostra è per soli esperti.'], why: '*Tutto sommato, però, è una mostra che merita una visita.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the congiuntivo.', items: [
            { s: 'Per quanto il percorso [sia] lineare, non risulta mai noioso.', why: '*Per quanto* + congiuntivo.' },
            { s: 'Chiunque la [visiti] troverà qualcosa che lo riguarda; comunque la si [giudichi], non lascia indifferenti.', why: '*Chiunque* and *comunque* take the congiuntivo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Per quanto il percorso ___ lineare, non è noioso. (essere)', a: ['sia'], why: '*Per quanto* + congiuntivo.' },
            { q: '___ la visiti, troverà qualcosa che lo riguarda. (whoever)', a: ['Chiunque'], why: '*Chiunque* + congiuntivo.' },
            { q: 'A dire il ___ , alcune opere sembrano ripetersi.', a: ['vero'], why: '*A dire il vero*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Tutto sommato è una mostra che merita una visita.', why: '*Tutto sommato* sums up.' },
            { a: 'Comunque la si giudichi, non lascia indifferenti.', why: '*Comunque* + congiuntivo.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Qualunque cosa tu ___ , ti aiuterò.', o: ['faccia', 'fai', 'farai'], why: '*Qualunque cosa* + congiuntivo.' },
      { q: 'Chiunque ___ alla porta, non aprire.', o: ['sia', 'è', 'sarebbe'], why: '*Chiunque* + congiuntivo.' },
      { q: 'Il ___ del film è un giovane musicista.', o: ['protagonista', 'finale', 'pubblico'], why: 'The main character: *il protagonista*.' },
      { q: '___ sommato, è un buon film.', o: ['Tutto', 'Molto', 'Poco'], why: '*Tutto sommato* = all in all.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Dovunque tu ___ , ti penserò. (andare)', a: ['vada'], why: '*Dovunque* + congiuntivo.' },
      { q: 'Comunque ___ , sarà un successo. (andare)', a: ['vada'], why: '*Comunque* + congiuntivo.' },
      { q: 'A dire il ___ , il finale mi ha deluso.', a: ['vero'], why: '*A dire il vero*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['la trama', 'plot'],
      ['il protagonista', 'main character'],
      ['il finale', 'ending'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
      { q: 'Non importa che cosa dici, ti aiuterò.', cue: 'Qualunque cosa', a: ['Qualunque cosa tu dica, ti aiuterò.'], why: '*Qualunque cosa* + congiuntivo.' },
      { q: 'Non importa dove vai, ti penserò.', cue: 'Dovunque', a: ['Dovunque tu vada, ti penserò.'], why: '*Dovunque* + congiuntivo.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Chiunque [è], non aprire.', a: ['sia'], why: '*Chiunque* + congiuntivo.' },
      { s: 'Dovunque tu [vai], ti penserò.', a: ['vada'], why: '*Dovunque* + congiuntivo.' },
    ] },
  ],
};
