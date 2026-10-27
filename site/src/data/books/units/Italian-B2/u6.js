// Italian B2, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'The language of reports and letters',
  goal: 'Write and understand a formal report, a complaint and a reply. Learn participle clauses, the gerundio composto, nouns in place of verbs, and the set phrases of formal letters.',
  art: 'mug',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['participle clauses', 'gerundio composto', 'nominalisation', 'formal register', 'complaint', 'reply'], goals: ['foundations', 'professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Finito il lavoro, avendo finito',
      about: 'Shorten time and reason clauses with the past participle and the gerundio composto.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In writing, a time clause with *dopo che* can be shortened with the **past participle**: *Dopo che ho finito il lavoro, sono uscito* becomes *Finito il lavoro, sono uscito.* The participle **agrees** with the object if the verb is transitive (*Finita la riunione*), and with the subject if the verb takes *essere* (*Arrivati a casa, abbiamo cenato*). For a reason or an earlier action, use the **gerundio composto**: *Avendo finito il lavoro, sono uscito. Essendo arrivato tardi, ho perso il treno.* The subject of the shortened clause must be the **same** as in the main clause.' },
          { t: 'table', caption: 'Shortened clauses', explain: ['head'], head: ['Full clause', 'Shortened'], rows: [
            ['Dopo che ho finito il lavoro, sono uscito.', 'Finito il lavoro, sono uscito.'],
            ['Dopo che hanno letto la lettera, hanno risposto.', 'Letta la lettera, hanno risposto.'],
            ['Quando siamo arrivati a casa, abbiamo cenato.', 'Arrivati a casa, abbiamo cenato.'],
            ['Poiché ho finito il lavoro, sono uscito.', 'Avendo finito il lavoro, sono uscito.'],
            ['Siccome è arrivato tardi, ha perso il treno.', 'Essendo arrivato tardi, ha perso il treno.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The **gerundio semplice** gives a reason or a time in the present: *Essendo stanco, resto a casa.* The **gerundio composto** points to something already done: *Essendo stato stanco tutto il giorno, sono andato a letto.* These forms are formal; in speech, use *dopo che* or *siccome*.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Finito** il lavoro, sono uscito.', n: 'The participle agrees with *lavoro*.' },
            { s: '**Letta** la lettera, ha risposto subito.', n: 'The participle agrees with *lettera*: *letta*.' },
            { s: '**Arrivati** a casa, abbiamo cenato.', n: '*Arrivare* uses *essere*: the participle agrees with the subject.' },
            { s: '**Avendo finito** il lavoro, sono uscito.', n: 'A reason or an earlier action.' },
            { s: '**Essendo arrivato** tardi, ho perso il treno.', n: '*Essendo arrivato*: the same subject.' },
          ] },
          { t: 'dialogue', title: 'Dopo la riunione', lines: [
            { who: 'Sara', s: 'Finita la riunione, che cosa fai?' },
            { who: 'Paolo', s: 'Terminato il lavoro, torno a casa.' },
            { who: 'Sara', s: 'Avendo già letto il rapporto, posso scriverti subito.' },
            { who: 'Paolo', s: 'Perfetto. Scrivimi appena possibile.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the participle or the gerundio.', items: [
            { q: '___ il lavoro, sono uscito. (finire)', a: ['Finito'], why: '*Finito il lavoro*; the participle agrees with *lavoro*.' },
            { q: '___ la lettera, ha risposto. (leggere)', a: ['Letta'], why: '*Letta la lettera*; the participle agrees with *lettera*.' },
            { q: 'Avendo ___ il lavoro, sono uscito. (finire)', a: ['finito'], why: '*Avendo finito*.' },
            { q: 'Essendo ___ tardi, ha perso il treno. (arrivare)', a: ['arrivato'], why: '*Essendo arrivato*.' },
            { q: '___ a casa, abbiamo cenato. (arrivare)', a: ['Arrivati'], why: '*Arrivati*; agrees with the subject.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: '___ il lavoro, sono uscito.', o: ['Avendo finito', 'Finito essendo', 'Finire'], why: 'The gerundio composto with *avere*: *avendo finito*.' },
            { q: '___ la lettera, ha risposto.', o: ['Letta', 'Letto', 'Leggere'], why: 'The participle agrees with *lettera*: *letta*.' },
            { q: '___ tardi, ho perso il treno.', o: ['Essendo arrivato', 'Avendo arrivato', 'Arrivando'], why: '*Arrivare* uses *essere*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Shorten the clause.', items: [
            { q: 'Dopo che ho finito il lavoro, sono uscito.', a: ['Finito il lavoro, sono uscito.'], why: 'The participle agrees with *lavoro*.' },
            { q: 'Dopo che hanno letto la lettera, hanno risposto.', a: ['Letta la lettera, hanno risposto.'], why: 'The participle agrees with *lettera*.' },
            { q: 'Poiché ho finito il lavoro, sono uscito.', a: ['Avendo finito il lavoro, sono uscito.'], why: 'The gerundio composto gives the reason.' },
            { q: 'Siccome è arrivato tardi, ha perso il treno.', a: ['Essendo arrivato tardi, ha perso il treno.'], why: '*Essendo arrivato*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: '[Finito] la riunione, siamo usciti.', a: ['Finita'], why: 'The participle agrees with *la riunione*.' },
            { s: '[Avendo] arrivato tardi, ha perso il treno.', a: ['Essendo'], why: '*Arrivare* uses *essere*.' },
            { s: '[Letto] la lettera, ha risposto.', a: ['Letta'], why: 'The participle agrees with *lettera*: *letta*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Finito il lavoro, sono uscito.', why: 'A participle clause first.' },
            { a: 'Avendo letto il rapporto, ho scritto subito.', why: '*Avendo letto* gives the reason.' },
            { a: 'Arrivati a casa, abbiamo cenato.', why: '*Arrivati* agrees with the subject.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the full clause with the short one.', pairs: [
            ['Dopo che ho finito il lavoro,', 'Finito il lavoro,'],
            ['Poiché ho finito il lavoro,', 'Avendo finito il lavoro,'],
            ['Quando siamo arrivati,', 'Arrivati,'],
            ['Siccome è arrivato tardi,', 'Essendo arrivato tardi,'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Nouns instead of verbs',
      about: 'Use nouns in place of verbs to sound formal.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Formal Italian often uses a **noun** where speech would use a **verb**. *Dopo che hanno consegnato il pacco, ho pagato* becomes *Dopo la consegna del pacco, ho pagato.* This is called **nominalisation**. Many nouns are made from a verb: **consegnare → la consegna**, **ritardare → il ritardo**, **rimborsare → il rimborso**, **spedire → la spedizione**, **pagare → il pagamento**. Formal writing also uses verbs that carry little meaning with a noun: **effettuare un pagamento**, **presentare un reclamo**, **procedere al rimborso**.' },
          { t: 'table', caption: 'From verb to noun', explain: ['head'], head: ['Verb', 'Noun', 'Formal phrase'], rows: [
            ['consegnare', 'la consegna', 'la consegna del pacco'],
            ['ritardare', 'il ritardo', 'il ritardo nella consegna'],
            ['rimborsare', 'il rimborso', 'procedere al rimborso'],
            ['spedire', 'la spedizione', 'la spedizione dell’ordine'],
            ['pagare', 'il pagamento', 'effettuare il pagamento'],
            ['lamentarsi', 'la lamentela / il reclamo', 'presentare un reclamo'],
            ['sostituire', 'la sostituzione', 'chiedere la sostituzione'],
          ] },
          { t: 'tip', art: 'owl', md: 'Nominalisation keeps a sentence short and neutral: *Il ritardo nella consegna ha causato un danno* instead of *Poiché il pacco è arrivato in ritardo, ho subito un danno.* But too many nouns make a text heavy. In an e-mail to a friend, use verbs; in a complaint or a report, nouns are expected.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Dopo **la consegna** del pacco, ho pagato.', n: '= dopo che hanno consegnato il pacco.' },
            { s: 'A causa **del ritardo**, ho perso la riunione.', n: '= poiché il treno è arrivato in ritardo.' },
            { s: 'Chiedo **il rimborso** del libro mancante.', n: '= chiedo che mi rimborsino il libro.' },
            { s: 'Ho **presentato un reclamo** al servizio clienti.', n: '*Presentare un reclamo* = to make a complaint.' },
            { s: 'Il cliente ha richiesto **la sostituzione** del prodotto.', n: '*Sostituire* → *la sostituzione*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the verb with the noun.', pairs: [
            ['consegnare', 'la consegna'],
            ['rimborsare', 'il rimborso'],
            ['spedire', 'la spedizione'],
            ['pagare', 'il pagamento'],
            ['sostituire', 'la sostituzione'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the noun.', items: [
            { q: 'Dopo la ___ del pacco, ho pagato. (consegnare)', a: ['consegna'], why: '*Consegnare* → *la consegna*.' },
            { q: 'Chiedo il ___ del libro mancante. (rimborsare)', a: ['rimborso'], why: '*Rimborsare* → *il rimborso*.' },
            { q: 'A causa del ___ , ho perso la riunione. (ritardare)', a: ['ritardo'], why: '*Ritardare* → *il ritardo*.' },
            { q: 'Ho presentato un ___ al servizio clienti.', a: ['reclamo'], why: '*Presentare un reclamo*.' },
            { q: 'Ho effettuato il ___ ieri. (pagare)', a: ['pagamento'], why: '*Pagare* → *il pagamento*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Dopo la ___ del pacco, ho pagato.', o: ['consegna', 'consegnare', 'consegnato'], why: 'A noun after *la*: *consegna*.' },
            { q: 'Chiedo il ___ del libro mancante.', o: ['rimborso', 'rimborsare', 'rimborsato'], why: 'A noun after *il*: *rimborso*.' },
            { q: 'Ho ___ un reclamo al servizio clienti.', o: ['presentato', 'consegnato', 'pagato'], why: '*Presentare un reclamo*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Use a noun instead of the verb.', items: [
            { q: 'Dopo che hanno consegnato il pacco, ho pagato.', cue: 'Dopo', a: ['Dopo la consegna del pacco, ho pagato.'], why: '*Consegnare* → *la consegna*.' },
            { q: 'Chiedo che mi rimborsino il libro.', cue: 'Chiedo', a: ['Chiedo il rimborso del libro.'], why: '*Rimborsare* → *il rimborso*.' },
            { q: 'Poiché il pacco è arrivato in ritardo, ho perso la riunione.', cue: 'A causa', a: ['A causa del ritardo del pacco, ho perso la riunione.'], why: '*Ritardo* as a noun after *a causa di*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Dopo la [consegnare] del pacco, ho pagato.', a: ['consegna'], why: 'A noun is needed: *la consegna*.' },
            { s: 'Chiedo il [rimborsare] del libro.', a: ['rimborso'], why: 'A noun is needed: *il rimborso*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Dopo la consegna del pacco ho effettuato il pagamento.', why: 'Formal nouns.' },
            { a: 'Chiedo il rimborso del libro mancante.', why: '*Chiedo* + noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Una lettera di reclamo',
      about: 'Write a complaint and a reply in the right tone.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'A complaint has a clear structure. Begin with the **subject line** (*Oggetto: Reclamo per ordine n. 4521*) and a formal greeting (*Spettabile servizio clienti,*). State your reason with **Con la presente desidero segnalare …**. Give the **facts** with dates (*In data 5 ottobre ho effettuato un ordine …*). Say what you **want**: **Chiedo pertanto il rimborso / la sostituzione**. Ask for an answer: **Si prega di rispondere entro …** or **In attesa di un Suo cortese riscontro**. Close: **Distinti saluti**.' },
          { t: 'table', caption: 'Phrases for a complaint', explain: ['head'], head: ['Function', 'Phrase'], rows: [
            ['state the reason', 'Con la presente desidero segnalare …'],
            ['refer to something', 'In merito a …; Con riferimento a …'],
            ['give facts', 'In data 5 ottobre ho effettuato un ordine …'],
            ['say what you want', 'Chiedo pertanto il rimborso / la sostituzione.'],
            ['ask for an answer', 'In attesa di un Suo cortese riscontro, …'],
            ['close', 'Distinti saluti'],
          ] },
          { t: 'tip', art: 'owl', md: 'The reply is also formal. Start with a thanks and an apology: **Ci scusiamo per il disagio.** Say what you did: **Abbiamo provveduto a …** (= we have taken steps to). Give a date: **entro cinque giorni lavorativi**. Close with **Restiamo a disposizione** and **Cordiali saluti**. In a complaint, avoid anger; stay precise and polite.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Con la presente** desidero segnalare un problema.', n: 'A formal opening.' },
            { s: '**In merito** all’ordine n. 4521, **chiedo** il rimborso.', n: '*In merito a* = regarding.' },
            { s: '**Chiedo pertanto** la sostituzione del libro.', n: '*Pertanto* = therefore.' },
            { s: '**Ci scusiamo** per il disagio.', n: 'A formal apology.' },
            { s: '**Abbiamo provveduto** a rimborsare l’importo.', n: '*Provvedere a* = to take care of.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the function with the phrase.', pairs: [
            ['to state the reason', 'Con la presente desidero segnalare …'],
            ['to say what you want', 'Chiedo pertanto il rimborso.'],
            ['to apologise', 'Ci scusiamo per il disagio.'],
            ['to say what you did', 'Abbiamo provveduto a …'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Con la ___ desidero segnalare un problema.', a: ['presente'], why: '*Con la presente* = with this letter.' },
            { q: '___ merito all’ordine n. 4521, chiedo il rimborso.', a: ['In'], why: '*In merito a* = regarding.' },
            { q: 'Chiedo ___ la sostituzione del libro.', a: ['pertanto'], why: '*Pertanto* = therefore.' },
            { q: 'In attesa di un Suo cortese ___ , porgo distinti saluti.', a: ['riscontro'], why: '*Un Suo cortese riscontro* = your kind reply.' },
            { q: 'Ci ___ per il disagio. (scusare)', a: ['scusiamo'], why: '*Ci scusiamo*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the formal one.', items: [
            { q: 'How do you ask for your money back?', o: ['Chiedo il rimborso.', 'Voglio i soldi indietro.', 'Ridatemi i soldi.'], why: 'The formal version uses the noun.' },
            { q: 'How do you end a formal letter?', o: ['Distinti saluti', 'A presto', 'Ciao'], why: 'The usual formal closing.' },
            { q: 'How do you open a complaint?', o: ['Con la presente desidero segnalare …', 'Volevo dire che …', 'Senti, ho un problema …'], why: 'The formal opening.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Make it formal.', items: [
            { q: 'Voglio i soldi indietro.', a: ['Chiedo il rimborso.'], why: 'The noun *rimborso* is formal.' },
            { q: 'Scusate il ritardo.', a: ['Ci scusiamo per il ritardo.'], why: 'The formal apology.' },
            { q: 'Rispondetemi presto.', a: ['Si prega di rispondere al più presto.', 'Si prega di rispondere entro breve.'], why: '*Si prega di* + infinitive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Con la presente desidero segnalare un problema.', why: 'A formal opening.' },
            { a: 'Chiedo pertanto la sostituzione del libro.', why: '*Pertanto* links the request.' },
            { a: 'Abbiamo provveduto a rimborsare l’importo.', why: '*Abbiamo provveduto a* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un reclamo e una risposta',
      about: 'Read a formal complaint and the company’s answer.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Il reclamo', md: '**Oggetto:** Reclamo per ordine n. 4521\n\nSpettabile servizio clienti,\n\ncon la presente desidero segnalare un problema relativo all’ordine n. 4521, effettuato il 5 ottobre. Il pacco, consegnato con dodici giorni di ritardo, conteneva due libri invece dei tre ordinati, uno dei quali danneggiato. Avendo già inoltrato due richieste telefoniche senza ottenere risposta, mi vedo costretta a scrivere per iscritto.\n\nChiedo pertanto la sostituzione del libro danneggiato e il rimborso del libro mancante.\n\nIn attesa di un Suo cortese riscontro, porgo distinti saluti.\n\nAnna Ferri' },
          { t: 'reading', title: 'La risposta', md: 'Gentile signora Ferri,\n\nci scusiamo per il disagio. Abbiamo verificato l’ordine: il ritardo è stato causato da un problema di spedizione e il terzo libro non era stato inserito nel pacco. Abbiamo provveduto a spedire oggi il libro mancante e a rimborsare il prezzo di quello danneggiato; l’importo sarà accreditato entro cinque giorni lavorativi.\n\nRestiamo a disposizione per qualsiasi chiarimento.\n\nCordiali saluti\nIl servizio clienti' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'L’ordine è stato effettuato il 5 ottobre.', a: 't', why: '*Effettuato il 5 ottobre.*' },
            { q: 'Il pacco è arrivato in anticipo.', a: 'f', why: 'It arrived twelve days late: *con dodici giorni di ritardo*.' },
            { q: 'Nel pacco c’erano tre libri.', a: 'f', why: 'There were two books instead of the three ordered.' },
            { q: 'La cliente ha pagato con la carta.', a: 'ng', why: 'The letter does not say how she paid.' },
            { q: 'L’importo sarà accreditato entro cinque giorni lavorativi.', a: 't', why: 'The reply says so.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Perché la cliente scrive?', o: ['Non ha ottenuto risposta al telefono.', 'Vuole ordinare altri libri.', 'Vuole cambiare indirizzo.'], why: '*Avendo già inoltrato due richieste telefoniche senza ottenere risposta.*' },
            { q: 'Che cosa chiede la cliente?', o: ['La sostituzione e il rimborso.', 'Solo un buono.', 'Un nuovo ordine gratuito.'], why: '*Chiedo pertanto la sostituzione … e il rimborso.*' },
            { q: 'Qual è stata la causa del ritardo?', o: ['Un problema di spedizione.', 'Il maltempo.', 'Un errore della cliente.'], why: '*Il ritardo è stato causato da un problema di spedizione.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the nouns used in place of verbs.', items: [
            { s: 'Chiedo la [sostituzione] del libro danneggiato e il [rimborso] del libro mancante.', why: '*Sostituzione* and *rimborso* are formal nouns.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ già inoltrato due richieste, mi vedo costretta a scrivere. (avere)', a: ['Avendo'], why: 'The gerundio composto: *avendo inoltrato*.' },
            { q: 'Abbiamo ___ a spedire oggi il libro mancante. (provvedere)', a: ['provveduto'], why: '*Abbiamo provveduto a*.' },
            { q: 'Restiamo a ___ per qualsiasi chiarimento.', a: ['disposizione'], why: 'A formal closing.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ci scusiamo per il disagio.', why: 'A formal apology.' },
            { a: 'Chiedo pertanto la sostituzione del libro danneggiato.', why: '*Pertanto* links the request.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '___ il lavoro, sono uscito.', o: ['Avendo finito', 'Finito essendo', 'Finire'], why: 'The gerundio composto with *avere*.' },
      { q: '___ la lettera, ha risposto.', o: ['Letta', 'Letto', 'Leggere'], why: 'The participle agrees with *lettera*.' },
      { q: 'Dopo la ___ del pacco, ho pagato.', o: ['consegna', 'consegnare', 'consegnato'], why: 'A noun after *la*.' },
      { q: 'Chiedo il ___ del libro mancante.', o: ['rimborso', 'rimborsare', 'rimborsato'], why: 'A noun after *il*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Essendo ___ tardi, ha perso il treno. (arrivare)', a: ['arrivato'], why: '*Essendo arrivato*.' },
      { q: 'Con la ___ desidero segnalare un problema.', a: ['presente'], why: '*Con la presente*.' },
      { q: 'In attesa di un Suo cortese ___ , porgo distinti saluti.', a: ['riscontro'], why: 'A formal closing phrase.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the verb with the noun.', pairs: [
      ['consegnare', 'la consegna'],
      ['rimborsare', 'il rimborso'],
      ['spedire', 'la spedizione'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence.', items: [
      { q: 'Dopo che ho finito il lavoro, sono uscito.', a: ['Finito il lavoro, sono uscito.'], why: 'The participle agrees with *lavoro*.' },
      { q: 'Voglio i soldi indietro.', a: ['Chiedo il rimborso.'], why: 'The noun *rimborso* is formal.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: '[Finito] la riunione, siamo usciti.', a: ['Finita'], why: 'The participle agrees with *la riunione*.' },
      { s: '[Avendo] arrivato tardi, ha perso il treno.', a: ['Essendo'], why: '*Arrivare* uses *essere*.' },
    ] },
  ],
};
