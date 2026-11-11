// Italian C2, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Precision and nuance',
  goal: 'Choose the exact word for the exact shade of meaning. Learn near-synonyms and their connotations, natural collocations and fixed pairs, euphemism and litotes.',
  art: 'pizza',
  tags: { skills: ['vocabulary', 'reading', 'writing'], topics: ['near-synonyms', 'connotation', 'collocation', 'euphemism', 'litotes'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Guardare, scorgere, fissare',
      about: 'Tell near-synonyms apart by what they suggest as well as what they mean.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At C2, knowing that two words are close is not enough. Near-synonyms differ in **denotation** (what they describe) and in **connotation** (what they suggest: approval, disapproval, formality). Take the verbs of looking. **Guardare** is neutral. **Dare un’occhiata** is a quick look. **Scorgere** is to make out something, often in the distance. **Contemplare** is to look for a long time, often with admiration. **Fissare** is to stare. **Scrutare** is to examine closely. **Spiare** is to watch in secret.' },
          { t: 'table', caption: 'Verbs of looking', explain: ['head', 'col0'], head: ['Verb', 'What it suggests', 'Example'], rows: [
            ['guardare', 'neutral', 'Lei guarda fuori dalla finestra.'],
            ['dare un’occhiata', 'quick, casual', 'Ha dato un’occhiata all’orologio.'],
            ['scorgere', 'make out, often far away', 'Abbiamo scorto una barca all’orizzonte.'],
            ['contemplare', 'long, admiring or dreamy', 'Contemplavano le stelle.'],
            ['fissare', 'fixed, often rude', 'Mi fissava senza dire nulla.'],
            ['spiare', 'secret, from hiding', 'Spiava i vicini.'],
          ] },
        ],
        [
          { t: 'text', md: 'Connotation matters even more with adjectives for people. A thin person may be **magro** (neutral, often negative), **snello** (slim, elegant), **esile** (delicate), or **scheletrico** (very thin, negative). Someone who spends little is **parsimonioso** or **risparmiatore** (positive), **tirchio** (informal, negative), **taccagno** (negative) or **avaro** (very negative). Someone who keeps going is **tenace** or **determinato** (positive), but **testardo** or **cocciuto** (negative).' },
          { t: 'tip', art: 'owl', md: 'A good dictionary marks connotation with labels such as *spregiativo*, *familiare*, *letterario*. Use them. In an exam, one wrong connotation (*È tirchia con il suo tempo* said as praise) can change the whole message. Some words are regional: *tirchio* is common in the north and centre, and *spilorcio* is also heard.' },
          { t: 'ex', kind: 'sort', h: 'Does the word praise, or criticise?', groups: ['praise', 'criticise'], explain: ['groups'], items: [
            { s: 'risparmiatore', g: 0, why: 'Approving: careful with money.' },
            { s: 'tirchio', g: 1, why: 'Disapproving: unwilling to spend.' },
            { s: 'tenace', g: 0, why: 'Approving: firm and persistent.' },
            { s: 'testardo', g: 1, why: 'Disapproving: refusing to change.' },
            { s: 'snello', g: 0, why: 'Approving: thin in an elegant way.' },
            { s: 'scheletrico', g: 1, why: 'Disapproving: unhealthily thin.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the most precise word.', items: [
            { q: 'Si fermò davanti al quadro e lo ___ per un’ora, incantato.', o: ['contemplò', 'scorse', 'spiò'], why: '*Contemplare*: to look for a long time with admiration.' },
            { q: 'Ho solo ___ il presidente, perché la sua auto è passata velocissima.', o: ['scorto', 'contemplato', 'fissato'], why: '*Scorgere*: to make out briefly.' },
            { q: 'Lei ___ da dietro la tenda per vedere chi suonava.', o: ['spiava', 'contemplava', 'fissava'], why: '*Spiare*: to watch in secret.' },
            { q: 'Mio zio è molto ___: non spreca niente, e lo ammiro per questo.', o: ['risparmiatore', 'tirchio', 'avaro'], why: '*Risparmiatore* is positive; *tirchio* and *avaro* are negative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a verb from the lesson (dare un’occhiata, scorgere, contemplare, fissare, spiare).', items: [
            { q: 'È maleducato ___ gli sconosciuti in metropolitana.', a: ['fissare'], why: '*Fissare*: to stare.' },
            { q: 'Lei ha ___ un’occhiata al telefono durante la riunione.', a: ['dato'], why: '*Dare un’occhiata*: a quick look.' },
            { q: 'Gli innamorati ___ il tramonto.', a: ['contemplano'], why: '*Contemplare*: to look for a long time with admiration.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match each word with its meaning.', pairs: [
            ['scheletrico', 'così magro da sembrare malato'],
            ['snello', 'magro ed elegante'],
            ['testardo', 'che non cambia idea, in senso negativo'],
            ['tenace', 'che persiste nonostante le difficoltà'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the word that gives the wrong impression.', items: [
            { s: 'Ammiro mia nonna: è così [tirchia] e non butta mai via niente.', a: ['risparmiatrice', 'parsimoniosa'], why: 'Praise needs a positive word.' },
            { s: 'La nostra direttrice è meravigliosamente [testarda]: non rinuncia mai a una buona idea.', a: ['tenace', 'determinata'], why: 'The speaker approves: *tenace* or *determinata*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Profondamente commosso, prima o poi',
      about: 'Use natural collocations and fixed pairs of words.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Collocations are words that naturally go together. At C2, the test is not whether your sentence is correct, but whether it sounds as an Italian speaker would say it. Adverbs are selective: we say **profondamente commosso**, **gravemente ferito**, **caldamente raccomandato**, **ardentemente desiderato**. Nouns also pick their partners: **una generalizzazione affrettata**, **un errore madornale**, **un pregiudizio radicato**, **un silenzio imbarazzante**. Verbs too: you **prendere** a decision, **giungere** to a compromise, **trarre** conclusions, **tenere conto** of something.' },
          { t: 'table', caption: 'Collocations that sound natural', explain: ['head', 'col0'], head: ['Word', 'Natural partners', 'Not natural'], rows: [
            ['adverb + adjective', 'profondamente commosso, gravemente ferito, caldamente raccomandato', 'gravemente commosso, profondamente raccomandato'],
            ['adjective + noun', 'una generalizzazione affrettata, un errore madornale', 'una generalizzazione madornale, un errore affrettato'],
            ['verb + noun', 'prendere una decisione, giungere a un compromesso, trarre conclusioni', 'fare una decisione, raggiungere un compromesso'],
          ] },
        ],
        [
          { t: 'text', md: 'Fixed **pairs** are two words joined by *o*, *e* or *né*, always in the same order. **Prima o poi** (sooner or later), **sano e salvo** (safe and sound), **né più né meno** (no more, no less), **a poco a poco** (little by little), **su e giù** (up and down), **a destra e a manca** (left and right, everywhere). You cannot reverse them: *poi o prima* is wrong in the fixed phrase.' },
          { t: 'tip', art: 'owl', md: 'Learn a pair as one block, never reversed. When you meet a new collocation, write it in a full sentence in a notebook, with its register. An Italian speaker will not correct *fare una decisione*, but will notice it; the natural verb is *prendere*. *Raggiungere un compromesso* is common today and accepted, but *giungere a un compromesso* is the careful choice.' },
          { t: 'ex', kind: 'match', h: 'Match the fixed pair with its meaning.', pairs: [
            ['prima o poi', 'at some point in the future'],
            ['sano e salvo', 'unharmed'],
            ['né più né meno', 'exactly, no more and no less'],
            ['a poco a poco', 'little by little'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the natural collocation.', items: [
            { q: 'La squadra era ___ delusa dal risultato.', o: ['profondamente', 'gravemente', 'caldamente'], why: '*Profondamente deluso* is natural.' },
            { q: 'Si ___ raccomanda di prenotare in anticipo.', o: ['caldamente', 'gravemente', 'profondamente'], why: '*Caldamente raccomandato*.' },
            { q: 'Nella sua relazione c’è un errore ___: manca il bilancio.', o: ['madornale', 'affrettato', 'imbarazzante'], why: '*Un errore madornale*: a blatant mistake.' },
            { q: 'Dire che tutti gli adolescenti sono pigri è una generalizzazione ___.', o: ['affrettata', 'madornale', 'radicata'], why: '*Una generalizzazione affrettata*.' },
            { q: 'Dopo un lungo dibattito, riuscirono a ___ a un compromesso.', o: ['giungere', 'fare', 'prendere'], why: '*Giungere a un compromesso*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the fixed pair.', items: [
            { q: 'Prima o ___ dovremo decidere.', a: ['poi'], why: '*Prima o poi*.' },
            { q: 'Sono tornati sani e ___ dopo la tempesta.', a: ['salvi'], why: '*Sani e salvi*: the adjectives agree in the plural.' },
            { q: 'A poco a ___ mi sono abituato alla città.', a: ['poco'], why: '*A poco a poco*.' },
            { q: 'Ha detto né più né ___ quello che pensava.', a: ['meno'], why: '*Né più né meno*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
            { q: 'I viaggiatori sono arrivati illesi dopo la tempesta.', cue: 'sani', a: ['I viaggiatori sono arrivati sani e salvi dopo la tempesta.'], why: '*Sani e salvi*.' },
            { q: 'Si raccomanda molto di prenotare in anticipo.', cue: 'Si raccomanda', a: ['Si raccomanda caldamente di prenotare in anticipo.'], why: '*Caldamente raccomandato*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the unnatural collocation.', items: [
            { s: 'Ha commesso un [errore affrettato] dimenticando il bilancio. (a blatant mistake)', a: ['errore madornale'], why: '*Un errore madornale*.' },
            { s: 'Dopo molto dibattito hanno [fatto] un compromesso.', a: ['raggiunto', 'trovato', 'concluso'], why: '*Giungere a / raggiungere un compromesso*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Venuto a mancare, non è male',
      about: 'Recognise euphemism and litotes, and decide when softening helps.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'A **euphemism** replaces a direct word with a gentler one: **è venuto a mancare** or **ci ha lasciati** for *è morto*, **in cerca di occupazione** for *disoccupato*, **gli esuberi** or **la ristrutturazione del personale** for *i licenziamenti*, **i danni collaterali** for *le vittime civili*. **Litotes** (understatement) says less to mean more by negating the opposite: **non è male** means *è bello*, **non è poco** means *è molto*, **non è una cosa da poco** means *it is no small matter*. Litotes is common in Italian and often polite or ironic.' },
          { t: 'table', caption: 'Euphemism and litotes', explain: ['head', 'col0'], head: ['Gentle phrase', 'Direct meaning', 'Effect'], rows: [
            ['ci ha lasciati', 'è morto', 'respect, comfort'],
            ['in cerca di occupazione', 'disoccupato', 'avoids embarrassment'],
            ['esuberi', 'licenziamenti', 'hides the employer’s action'],
            ['non è male', 'è bello', 'litotes: understatement'],
            ['non è una cosa da poco', 'è importante', 'litotes: it is serious'],
          ] },
        ],
        [
          { t: 'text', md: 'Softening helps when it shows kindness: *Le mie sentite condoglianze* is better than *Mi dispiace che sia morto* at a funeral. It hides the truth when it protects the powerful: *esuberi* for *cento licenziamenti*, *danni collaterali* for *civili uccisi*. A careful reader asks: who benefits from the softer word?' },
          { t: 'tip', art: 'owl', md: 'In your own writing, use a euphemism only when the plain word would hurt your reader. In reports and essays, plain words show confidence: write *L’azienda ha licenziato quaranta dipendenti*, not *L’azienda si è separata da quaranta collaboratori*.' },
          { t: 'ex', kind: 'sort', h: 'Kind softening, or hiding the truth?', groups: ['kind softening', 'hiding the truth'], explain: ['groups'], items: [
            { s: 'Le mie sentite condoglianze.', g: 0, why: 'Gentle, at a moment of grief.' },
            { s: 'La fabbrica ha degli esuberi da gestire.', g: 1, why: 'A vague word that can hide job losses.' },
            { s: 'Nostra nonna è venuta a mancare serenamente.', g: 0, why: 'A gentle way to say it to the family.' },
            { s: 'Ci sono stati danni collaterali.', g: 1, why: 'Hides the fact that people were killed.' },
            { s: 'Al momento è in cerca di occupazione.', g: 0, why: 'Avoids embarrassment, harms nobody.' },
            { s: 'Il ministro non è stato del tutto chiaro con la verità.', g: 1, why: 'A polite way to say he lied.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
            { q: '«Non è male», dice il critico del film.', o: ['È piuttosto bello.', 'È pessimo.', 'È noioso.'], why: 'Litotes: negating the opposite means praise.' },
            { q: '«Non è una cosa da poco», dice il medico della ferita.', o: ['È piuttosto grave.', 'È insignificante.', 'È guarita.'], why: 'Litotes: it is serious.' },
            { q: '«Siamo costretti a rinunciare ai suoi servizi.»', o: ['Lei è licenziato.', 'Lei è promosso.', 'Lei è in ferie.'], why: 'A euphemism for *licenziare*.' },
            { q: '«Non è poco», dice il professore dell’impegno dello studente.', o: ['È molto.', 'È pochissimo.', 'È normale.'], why: 'Litotes.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it plainly.', items: [
            { q: 'L’azienda si è separata da quaranta collaboratori.', cue: 'L’azienda ha licenziato', a: ['L’azienda ha licenziato quaranta collaboratori.', 'L’azienda ha licenziato quaranta dipendenti.'], why: 'Replace the euphemism with *licenziare*.' },
            { q: 'Suo nonno è venuto a mancare a marzo.', cue: 'Suo nonno è morto', a: ['Suo nonno è morto a marzo.'], why: '*Venire a mancare* = morire.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the euphemism with its plain meaning.', pairs: [
            ['ci ha lasciati', 'è morto'],
            ['in cerca di occupazione', 'disoccupato'],
            ['esuberi', 'licenziamenti'],
            ['danni collaterali', 'vittime civili di un attacco'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'Questo film non è ___. (litotes: è bello)', a: ['male'], why: '*Non è male* = è bello.' },
            { q: 'Al momento è in cerca di ___, ma ha un colloquio domani.', a: ['occupazione'], why: '*In cerca di occupazione*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Le parole che scegliamo',
      about: 'Read an essay and notice how word choice shapes the reader’s view.',
      art: 'pizza',
      spreads: [
        [
          { t: 'reading', title: 'Le parole che scegliamo', md: 'Due giornali hanno raccontato la stessa manifestazione. Uno scriveva che «manifestanti furiosi fissavano i poliziotti»; l’altro che «cittadini determinati guardavano con calma gli agenti». I fatti erano identici. Le parole no.\n\nÈ questa la discreta potenza dei quasi sinonimi. Snello è un complimento, scheletrico no; uno zio risparmiatore è ammirato, uno tirchio è evitato. Ogni scrittore sceglie, e ogni scelta porta con sé un piccolo giudizio.\n\nLa collocazione è la seconda prova dello scrittore. Un madrelingua dirà che un consiglio è caldamente raccomandato, mai profondamente raccomandato, e che una generalizzazione è affrettata, mai madornale. Queste associazioni non sono regole; sono abitudini, che si acquisiscono leggendo molto e notando, a poco a poco, ciò che suona giusto.\n\nResta la questione dell’attenuazione. Dopo un lutto, «ci ha lasciati» è una delicatezza. Ma quando un’azienda annuncia degli «esuberi», è lecito chiedersi chi protegga la parola più morbida. Le parole semplici possono essere dure; possono anche essere oneste.\n\nLa lezione non è evitare la sfumatura, ma dominarla. Prima di scegliere una parola, ci si chieda tre cose: che cosa significa, che cosa suggerisce, e chi può lusingare o ferire.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'I due giornali hanno riportato fatti diversi.', a: 'f', why: '«I fatti erano identici. Le parole no.»' },
            { q: 'Secondo l’autore, scheletrico è un complimento.', a: 'f', why: '«Snello è un complimento, scheletrico no.»' },
            { q: 'L’autore dice che le collocazioni sono regole rigide.', a: 'f', why: '«Non sono regole; sono abitudini.»' },
            { q: 'L’autore pensa che «ci ha lasciati» sia sempre un errore.', a: 'f', why: 'Dopo un lutto è «una delicatezza».' },
            { q: 'L’autore consiglia di chiedersi chi protegga una parola morbida.', a: 't', why: '«È lecito chiedersi chi protegga la parola più morbida.»' },
            { q: 'La manifestazione si è svolta a Roma.', a: 'ng', why: 'The text does not say where.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does the opening example show?', o: ['Word choice can change how the same facts feel.', 'Newspapers always lie.', 'Demonstrations are hard to describe.'], why: 'The facts were identical, but the words gave two pictures.' },
            { q: 'Why does the writer mention “esuberi”?', o: ['As a euphemism that may protect a company.', 'As an example of plain language.', 'As a word from a legal dictionary.'], why: 'A soft word can hide a hard reality.' },
            { q: 'What are the three questions at the end about?', o: ['Meaning, suggestion and effect on people.', 'Grammar, spelling and pronunciation.', 'Length, rhythm and tone.'], why: 'What it means, what it suggests, whom it can flatter or hurt.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the near-synonyms the writer uses to praise or criticise.', items: [
            { s: '[Snello] è un complimento, [scheletrico] no; uno zio [risparmiatore] è ammirato, uno [tirchio] è evitato.', why: 'Two pairs of near-synonyms with opposite connotations.' },
            { s: '[Manifestanti furiosi] fissavano i poliziotti.', why: 'These words give a negative picture.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Un consiglio è caldamente raccomandato, mai ___ raccomandato.', a: ['profondamente'], why: 'Collocations are habits.' },
            { q: 'Una generalizzazione è ___, mai madornale.', a: ['affrettata'], why: '*Una generalizzazione affrettata*.' },
            { q: 'Dopo un lutto, «ci ha lasciati» è una ___.', a: ['delicatezza'], why: 'The author’s view.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ogni scrittore sceglie, e ogni scelta porta un piccolo giudizio.', why: 'A sentence from the text.' },
            { a: 'Prima di scegliere una parola, chiediti chi può ferire.', why: 'The idea of the last paragraph.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Si fermò davanti al quadro e lo ___ per un’ora, incantato.', o: ['contemplò', 'scorse', 'spiò'], why: '*Contemplare*: to look for a long time with admiration.' },
      { q: 'Mio zio è molto ___ e ne è orgoglioso.', o: ['risparmiatore', 'tirchio', 'testardo'], why: 'He is proud: a positive word.' },
      { q: 'Si raccomanda ___ di prenotare in anticipo.', o: ['caldamente', 'gravemente', 'profondamente'], why: '*Caldamente raccomandato*.' },
      { q: 'Dire che tutti i politici mentono è una generalizzazione ___.', o: ['affrettata', 'madornale', 'radicata'], why: '*Una generalizzazione affrettata*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Prima o ___ dovremo decidere.', a: ['poi'], why: '*Prima o poi*.' },
      { q: 'A poco a ___ mi sono abituato alla città.', a: ['poco'], why: '*A poco a poco*.' },
      { q: 'È maleducato ___ gli sconosciuti.', a: ['fissare'], why: '*Fissare*: to stare.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['snello', 'magro ed elegante'],
      ['ci ha lasciati', 'è morto'],
      ['esuberi', 'licenziamenti'],
    ] },
    { t: 'ex', kind: 'choice', h: 'What does the speaker really mean?', items: [
      { q: '«Non è male», dice il critico del film.', o: ['È piuttosto bello.', 'È pessimo.', 'È noioso.'], why: 'Litotes.' },
      { q: '«Siamo costretti a rinunciare ai suoi servizi.»', o: ['Lei è licenziato.', 'Lei è promosso.', 'Lei è in ferie.'], why: 'A euphemism for *licenziare*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Ammiro mia nonna: è così [tirchia].', a: ['risparmiatrice', 'parsimoniosa'], why: 'Praise needs a positive word.' },
      { s: 'Ha commesso un [errore affrettato] dimenticando il bilancio. (a blatant mistake)', a: ['errore madornale'], why: '*Un errore madornale*.' },
    ] },
  ],
};
