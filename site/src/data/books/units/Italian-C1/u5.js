// Italian C1, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Formal and bureaucratic Italian',
  goal: 'Understand and write the Italian of letters, contracts and official notices. Learn prepositional phrases such as in merito a and a seguito di, the verbs of administration, and the structure of a formal request and its reply.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['formal Italian', 'administration', 'prepositional phrases', 'letters', 'requests'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'In merito a, a seguito di, ai fini di',
      about: 'Use the prepositional phrases of formal Italian.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Official Italian uses **prepositional phrases** (locuzioni prepositive) where everyday Italian uses a clause. They keep the text short and precise. **In merito a** means *regarding*: *In merito alla Sua richiesta, …* **A seguito di** means *following*: *A seguito di un errore, …* **Ai fini di** means *for the purposes of*: *Ai fini della domanda, serve un certificato.* **In ottemperanza a** means *in compliance with*: *In ottemperanza alla legge, …* **Nei confronti di** means *towards*. **In assenza di** means *in the absence of*. **Previa** means *subject to prior*: *previa conferma*.' },
          { t: 'table', caption: 'Formal prepositional phrases', explain: ['head', 'col1'], head: ['Phrase', 'Meaning', 'Example'], rows: [
            ['in merito a', 'regarding', 'In merito alla Sua richiesta, La informiamo che …'],
            ['in relazione a / in riferimento a', 'with reference to', 'In riferimento alla Sua lettera del 12 ottobre, …'],
            ['a seguito di', 'following, as a result of', 'A seguito di un errore, l’invio non è possibile.'],
            ['ai fini di', 'for the purposes of', 'Ai fini della domanda, serve un certificato.'],
            ['ai sensi di', 'pursuant to', 'Ai sensi dell’articolo 5, la domanda è valida.'],
            ['in ottemperanza a', 'in compliance with', 'In ottemperanza alla legge, il modulo è obbligatorio.'],
            ['nei confronti di', 'towards, against', 'Nei confronti del cliente è stata presa una decisione.'],
            ['in assenza di', 'in the absence of', 'In assenza di risposta, la richiesta decade.'],
            ['previa', 'subject to prior', 'Il documento sarà inviato, previa conferma.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The preposition **a** or **di** joins the article: **in merito alla** richiesta, **ai sensi dell’**articolo, **a seguito della** richiesta. **Previa** is invariable and has no article: *previa richiesta, previa conferma*. These phrases are used in the same way in Italy and in Switzerland. In everyday letters, **riguardo a** or **per quanto riguarda** are lighter.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**In merito alla** Sua richiesta, La informiamo che …', n: 'Regarding.' },
            { s: '**A seguito di** un errore tecnico, l’invio non è possibile.', n: 'Following.' },
            { s: '**Ai fini della** domanda, serve un certificato.', n: 'For the purposes of.' },
            { s: '**Ai sensi dell’**articolo 5, la domanda è valida.', n: 'Pursuant to.' },
            { s: 'Il documento sarà inviato, **previa** conferma.', n: 'Subject to prior.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the phrase with its meaning.', pairs: [
            ['in merito a', 'regarding'],
            ['a seguito di', 'following'],
            ['ai fini di', 'for the purposes of'],
            ['in assenza di', 'in the absence of'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'In ___ alla Sua richiesta, La informiamo che il certificato è pronto.', a: ['merito'], why: '*In merito a* = regarding.' },
            { q: 'A ___ di un errore tecnico, l’invio non è possibile.', a: ['seguito'], why: '*A seguito di* = following.' },
            { q: 'Ai ___ della domanda, serve un certificato.', a: ['fini'], why: '*Ai fini di* = for the purposes of.' },
            { q: 'In ___ di risposta, la richiesta decade.', a: ['assenza'], why: '*In assenza di* = in the absence of.' },
            { q: 'Il documento sarà inviato, ___ conferma.', a: ['previa'], why: '*Previa* = subject to prior.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right phrase.', items: [
            { q: '___ alla Sua richiesta, La informiamo che il certificato è pronto.', o: ['In riferimento', 'In fronte', 'In pari'], why: '*In riferimento a* = with reference to.' },
            { q: '___ di un errore tecnico, l’invio non è possibile.', o: ['A seguito', 'A seguire', 'A sapere'], why: '*A seguito di* = following.' },
            { q: '___ della domanda, serve un certificato.', o: ['Ai fini', 'Ai tempi', 'Ai lati'], why: '*Ai fini di* = for the purposes of.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the phrase in brackets.', items: [
            { q: 'Dopo la Sua richiesta, Le scriviamo.', cue: 'A seguito', a: ['A seguito della Sua richiesta, Le scriviamo.', 'A seguito della sua richiesta, le scriviamo.'], why: '*A seguito di* + noun.' },
            { q: 'Scrivo per quanto riguarda la pratica.', cue: 'Scrivo in merito', a: ['Scrivo in merito alla pratica.'], why: '*In merito a* + noun.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'In [riferire] alla Sua richiesta, La informiamo che …', a: ['riferimento'], why: '*In riferimento a*.' },
            { s: 'In [mancanza] di risposta, la richiesta decade.', a: ['assenza'], why: 'The formal phrase is *in assenza di*.' },
            { s: 'A seguito [di la] Sua richiesta, Le scriviamo.', a: ['della'], why: '*Di* + *la* = *della*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'In merito alla Sua richiesta, La informiamo che il certificato è pronto.', why: '*In merito a* + noun.' },
            { a: 'A seguito di un errore, l’invio non è possibile.', why: '*A seguito di* + noun.' },
            { a: 'Il documento sarà inviato, previa conferma.', why: '*Previa* + noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Il linguaggio dell’amministrazione',
      about: 'Understand the verbs and the fixed formulas of official Italian.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Official Italian likes the **passive**, the **impersonal** and **nouns**. A request is not simply answered; it is **evaded** (**evadere**), a letter is **forwarded** (**inoltrare**), a certificate is **issued** (**rilasciare**). Useful verbs are **ottemperare a** (to comply with), **presentare** (to submit), **comunicare** (to inform), **dichiarare** (to declare), **sottoscrivere** (to sign) and **essere tenuto a** (to be required to): *Il richiedente è tenuto a presentare i documenti.* The passive often uses **venire**: *La domanda viene esaminata entro dieci giorni.* Fixed words guide the reader: **in allegato** (attached), **il richiedente** (the applicant), **gli interessati** (the people concerned).' },
          { t: 'table', caption: 'The language of administration', explain: ['head', 'col1'], head: ['Expression', 'Meaning', 'Example'], rows: [
            ['inoltrare', 'to forward', 'Si prega di inoltrare la domanda all’ufficio.'],
            ['rilasciare', 'to issue', 'Il certificato viene rilasciato entro dieci giorni.'],
            ['evadere', 'to process a request', 'La pratica sarà evasa a breve.'],
            ['essere tenuto a', 'to be required to', 'Il richiedente è tenuto a presentare i documenti.'],
            ['ottemperare a', 'to comply with', 'Si deve ottemperare alle disposizioni.'],
            ['in allegato', 'attached', 'In allegato trova la copia del documento.'],
            ['si prega di', 'please', 'Si prega di compilare il modulo.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Evadere** has two meanings: in an office, **evadere una pratica** means *to process a file*; **evadere** also means *to escape* and *to evade* (taxes). **Essere tenuto a** is followed by an **infinitive**. **Si prega di** + infinitive is an impersonal request that does not need a subject: *Si prega di compilare il modulo.* These formulas are typical of Italy and of Swiss official texts in Italian.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Il richiedente **è tenuto a** presentare i documenti.', n: '*Essere tenuto a* + infinitive.' },
            { s: 'La domanda **viene esaminata** entro dieci giorni.', n: 'The passive with *venire*.' },
            { s: '**Si prega di** compilare il modulo.', n: 'An impersonal request.' },
            { s: '**In allegato** trova la copia del documento.', n: 'Attached.' },
            { s: 'La pratica **sarà evasa** a breve.', n: 'To process a request.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
            ['inoltrare', 'to forward'],
            ['rilasciare', 'to issue'],
            ['essere tenuto a', 'to be required to'],
            ['in allegato', 'attached'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Il richiedente è tenuto ___ presentare i documenti.', a: ['a'], why: '*Essere tenuto a* + infinitive.' },
            { q: 'Si prega di ___ la domanda all’ufficio. (inoltrare)', a: ['inoltrare'], why: '*Si prega di* + infinitive.' },
            { q: 'Il certificato viene ___ entro dieci giorni. (rilasciare)', a: ['rilasciato'], why: '*Venire* + participle, masculine.' },
            { q: 'La domanda ___ esaminata entro dieci giorni. (venire)', a: ['viene'], why: 'The passive with *venire*.' },
            { q: '___ allegato trova la copia del documento.', a: ['In'], why: '*In allegato* = attached.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best formal expression.', items: [
            { q: 'Which sentence is more formal?', o: ['La domanda viene esaminata entro dieci giorni.', 'Guardiamo la domanda tra dieci giorni.', 'La domanda la vediamo dopo.'], why: 'The passive with *venire* is formal.' },
            { q: 'Which verb means *to issue*?', o: ['rilasciare', 'inoltrare', 'evadere'], why: '*Rilasciare* = to issue.' },
            { q: 'Which phrase means *please*?', o: ['Si prega di', 'Si deve di', 'Si vuole di'], why: '*Si prega di* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it in a formal register.', items: [
            { q: 'Esaminiamo la domanda entro dieci giorni.', cue: 'La domanda', a: ['La domanda viene esaminata entro dieci giorni.'], why: 'The passive with *venire*.' },
            { q: 'Compilate il modulo, per favore.', cue: 'Si prega', a: ['Si prega di compilare il modulo.'], why: '*Si prega di* + infinitive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Il richiedente è tenuto [di] presentare i documenti.', a: ['a'], why: '*Essere tenuto a*.' },
            { s: 'Il certificato viene [rilasciare] entro dieci giorni.', a: ['rilasciato'], why: 'The participle after *venire*.' },
            { s: 'Si prega [a] compilare il modulo.', a: ['di'], why: '*Si prega di* + infinitive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Si prega di compilare il modulo in stampatello.', why: '*Si prega di* + infinitive.' },
            { a: 'Il richiedente è tenuto a presentare i documenti.', why: '*Essere tenuto a* + infinitive.' },
            { a: 'La domanda viene esaminata entro dieci giorni.', why: 'The passive with *venire*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Una richiesta e la risposta',
      about: 'Write a formal request and a reply with the right formulas.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A formal letter starts with the **oggetto** (subject line) and a title such as **Spett.le Ufficio** (to an office) or **Gentile Signora** (to a person). It explains the **reason for writing**, states the **request**, and closes with a polite formula. To start: **Con la presente, il sottoscritto … chiede …** To refer to an earlier contact: **In riferimento alla mia richiesta del …** To ask politely: **Le sarei grato se volesse + infinitive** (Le sarei grata, if the writer is a woman). To close: **In attesa di un Suo cortese riscontro, porgo distinti saluti.** The office replies: **La informiamo che …**, **Ci scusiamo per il disagio arrecato**, **Cordiali saluti**.' },
          { t: 'table', caption: 'Formulas of a formal exchange', explain: ['head', 'col1'], head: ['Formula', 'Use'], rows: [
            ['Con la presente, il sottoscritto … chiede …', 'starting the request'],
            ['In riferimento alla mia richiesta del …', 'referring to an earlier contact'],
            ['Le sarei grato/grata se volesse + infinitive', 'asking very politely'],
            ['In attesa di un Suo cortese riscontro, …', 'closing the request'],
            ['La informiamo che …', 'the office gives news'],
            ['Ci scusiamo per il disagio arrecato.', 'the office apologises'],
            ['Distinti saluti / Cordiali saluti', 'closing'],
          ] },
          { t: 'tip', art: 'owl', md: 'In a formal letter, the pronoun **Lei** is written with a **capital letter**: *Le, La, Suo, Sua*. After **Le sarei grato se**, the verb is in the **congiuntivo imperfetto**: *se volesse*, never *se vuole*. **Il sottoscritto** (masculine) and **la sottoscritta** (feminine) mean *the undersigned*. **Distinti saluti** is more formal than **Cordiali saluti**, which is the neutral choice.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Con la presente**, il sottoscritto chiede il rilascio di un certificato.', n: 'Starting the request.' },
            { s: '**In riferimento alla** mia richiesta telefonica, allego copia del documento.', n: 'Referring to an earlier contact.' },
            { s: '**Le sarei grato se volesse** inviarmi il certificato.', n: 'A very polite request.' },
            { s: '**In attesa di un Suo cortese riscontro**, porgo distinti saluti.', n: 'Closing the request.' },
            { s: '**Ci scusiamo per il disagio arrecato.**', n: 'The office apologises.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Applicant or office? Sort the sentences.', groups: ['applicant', 'office'], explain: ['groups'], items: [
            { s: 'Con la presente, il sottoscritto chiede un certificato.', g: 0, why: 'The applicant starts the request.' },
            { s: 'Le sarei grato se volesse inviarmi il documento.', g: 0, why: 'The applicant asks.' },
            { s: 'In attesa di un Suo cortese riscontro, porgo distinti saluti.', g: 0, why: 'The applicant closes the request.' },
            { s: 'La informiamo che il certificato è stato rilasciato.', g: 1, why: 'The office gives news.' },
            { s: 'Ci scusiamo per il disagio arrecato.', g: 1, why: 'The office apologises.' },
            { s: 'Cordiali saluti, L’Ufficio Anagrafe.', g: 1, why: 'The office closes.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Con la ___, il sottoscritto chiede un certificato.', a: ['presente'], why: '*Con la presente*.' },
            { q: 'In ___ alla mia richiesta del 5 ottobre, allego copia del documento.', a: ['riferimento'], why: '*In riferimento a*.' },
            { q: 'Le sarei grato se ___ inviarmi il certificato. (volere, congiuntivo imperfetto)', a: ['volesse'], why: '*Se* + congiuntivo imperfetto.' },
            { q: 'In attesa di un Suo cortese ___, porgo distinti saluti.', a: ['riscontro'], why: '*In attesa di un Suo cortese riscontro*.' },
            { q: 'Ci scusiamo per il ___ arrecato.', a: ['disagio'], why: '*Il disagio arrecato*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the formula with its use.', pairs: [
            ['Con la presente', 'I start the request'],
            ['In riferimento a', 'I refer to an earlier contact'],
            ['In attesa di un Suo cortese riscontro', 'I close the request'],
            ['Ci scusiamo per il disagio', 'The office apologises'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence in a formal register.', items: [
            { q: 'Vorrei che mi mandasse il certificato.', cue: 'Le sarei grato', a: ['Le sarei grato se volesse inviarmi il certificato.'], why: '*Le sarei grato se volesse* + infinitive.' },
            { q: 'Aspetto una risposta.', cue: 'In attesa', a: ['In attesa di un Suo cortese riscontro.'], why: '*In attesa di un Suo cortese riscontro*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Le sarei grato se [vuole] inviarmi il certificato.', a: ['volesse'], why: 'After *se*: congiuntivo imperfetto.' },
            { s: 'In attesa di un Suo cortese [riscontrare], porgo distinti saluti.', a: ['riscontro'], why: 'We need the noun *riscontro*.' },
            { s: 'Ci scusiamo per il [disagiare] arrecato.', a: ['disagio'], why: 'We need the noun.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Con la presente, il sottoscritto chiede un certificato.', why: 'The formal opening.' },
            { a: 'Le sarei grato se volesse inviarmi il documento.', why: '*Se* + congiuntivo imperfetto.' },
            { a: 'Ci scusiamo per il disagio arrecato.', why: 'The formal apology.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Una lettera ufficiale e la risposta',
      about: 'Read a formal request and the reply.',
      art: 'cactus',
      spreads: [
        [
          { t: 'reading', title: 'Richiesta di certificato di residenza', md: 'Oggetto: richiesta di certificato di residenza\n\nSpett.le Ufficio Anagrafe,\n\ncon la presente, il sottoscritto Luca Neri chiede il rilascio di un certificato di residenza ai fini della presentazione di una domanda di iscrizione scolastica. In relazione alla mia richiesta telefonica del 5 ottobre, allego copia del documento di identità. Le sarei grato se volesse inviarmi il certificato in formato elettronico.\n\nIn attesa di un Suo cortese riscontro, porgo distinti saluti.\n\nLuca Neri\n\nRisposta: Gentile Signor Neri, in riferimento alla Sua richiesta del 12 ottobre, La informiamo che il certificato è stato rilasciato in data odierna. A seguito di un errore tecnico, l’invio per via elettronica non è al momento possibile; il documento sarà quindi trasmesso per posta ordinaria, previa conferma del Suo indirizzo. Ci scusiamo per il disagio arrecato.\n\nCordiali saluti\nL’Ufficio Anagrafe' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Il richiedente chiede un certificato di residenza.', a: 't', why: '*Chiede il rilascio di un certificato di residenza.*' },
            { q: 'Il richiedente aveva già telefonato il 5 ottobre.', a: 't', why: '*Mia richiesta telefonica del 5 ottobre.*' },
            { q: 'Il certificato è stato rilasciato.', a: 't', why: '*Il certificato è stato rilasciato in data odierna.*' },
            { q: 'L’invio elettronico è possibile.', a: 'f', why: '*Non è al momento possibile.*' },
            { q: 'Il documento sarà inviato per posta ordinaria, previa conferma dell’indirizzo.', a: 't', why: '*Trasmesso per posta ordinaria, previa conferma del Suo indirizzo.*' },
            { q: 'Il richiedente ha tre figli.', a: 'ng', why: 'The letter does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Perché serve il certificato?', o: ['Per una domanda di iscrizione scolastica.', 'Per aprire un conto.', 'Per cambiare lavoro.'], why: '*Ai fini della presentazione di una domanda di iscrizione scolastica.*' },
            { q: 'Che cosa allega il richiedente?', o: ['Copia del documento di identità.', 'Una foto.', 'Una bolletta.'], why: '*Allego copia del documento di identità.*' },
            { q: 'Come sarà trasmesso il documento?', o: ['Per posta ordinaria.', 'Per via elettronica.', 'Di persona.'], why: '*Sarà trasmesso per posta ordinaria.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the formal prepositional phrases.', items: [
            { s: 'Il certificato serve [ai fini della] presentazione di una domanda. [In relazione alla] mia richiesta telefonica, allego copia del documento.', why: '*Ai fini di* and *in relazione a*.' },
            { s: '[In riferimento alla] Sua richiesta, La informiamo che il certificato è stato rilasciato.', why: '*In riferimento a*.' },
            { s: '[A seguito di] un errore tecnico, l’invio non è possibile; il documento sarà trasmesso [previa] conferma del Suo indirizzo.', why: '*A seguito di* and *previa*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'In ___ alla mia richiesta telefonica del 5 ottobre, allego copia del documento.', a: ['relazione'], why: '*In relazione a*.' },
            { q: 'A ___ di un errore tecnico, l’invio non è possibile.', a: ['seguito'], why: '*A seguito di*.' },
            { q: 'In attesa di un Suo cortese ___, porgo distinti saluti.', a: ['riscontro'], why: '*In attesa di un Suo cortese riscontro*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Il documento sarà trasmesso per posta ordinaria, previa conferma.', why: '*Previa conferma* at the end.' },
            { a: 'La informiamo che il certificato è stato rilasciato.', why: '*La informiamo che* + clause.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '___ alla Sua richiesta, La informiamo che il certificato è pronto.', o: ['In riferimento', 'In fronte', 'In pari'], why: '*In riferimento a*.' },
      { q: '___ di un errore tecnico, l’invio non è possibile.', o: ['A seguito', 'A seguire', 'A sapere'], why: '*A seguito di*.' },
      { q: 'Il richiedente è tenuto ___ presentare i documenti.', o: ['a', 'di', 'per'], why: '*Essere tenuto a* + infinitive.' },
      { q: 'Le sarei grato se ___ inviarmi il certificato.', o: ['volesse', 'vuole', 'vorrà'], why: '*Se* + congiuntivo imperfetto.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Si prega di ___ la domanda all’ufficio. (inoltrare)', a: ['inoltrare'], why: '*Si prega di* + infinitive.' },
      { q: 'In attesa di un Suo cortese ___, porgo distinti saluti.', a: ['riscontro'], why: '*In attesa di un Suo cortese riscontro*.' },
      { q: 'Il certificato viene ___ entro dieci giorni. (rilasciare)', a: ['rilasciato'], why: '*Venire* + participle.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the phrase with its meaning.', pairs: [
      ['ai fini di', 'for the purposes of'],
      ['a seguito di', 'following'],
      ['previa', 'subject to prior'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the phrase in brackets.', items: [
      { q: 'Dopo la Sua richiesta, Le scriviamo.', cue: 'A seguito', a: ['A seguito della Sua richiesta, Le scriviamo.', 'A seguito della sua richiesta, le scriviamo.'], why: '*A seguito di* + noun.' },
      { q: 'Scrivo per quanto riguarda la pratica.', cue: 'Scrivo in merito', a: ['Scrivo in merito alla pratica.'], why: '*In merito a* + noun.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'In [riferire] alla Sua richiesta, La informiamo che …', a: ['riferimento'], why: '*In riferimento a*.' },
      { s: 'Il richiedente è tenuto [di] presentare i documenti.', a: ['a'], why: '*Essere tenuto a*.' },
    ] },
  ],
};
