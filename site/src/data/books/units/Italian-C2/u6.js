// Italian C2, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Legal Italian and plain language',
  goal: 'Read legal and formal Italian and rewrite it in plain language. Learn the key legal words, why legal Italian is dense, and how to state obligations, rights and conditions.',
  art: 'owl',
  tags: { skills: ['reading', 'writing', 'vocabulary'], topics: ['legal language', 'contracts', 'plain language', 'obligation', 'conditions'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Il locatore, il conduttore, suddetto',
      about: 'Learn the words that appear again and again in contracts.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A contract names its parties with fixed terms. In a lease (*contratto di locazione*), **il locatore** is the owner who lets the property and **il conduttore** is the person who rents it. **Il presente contratto** means *this contract*. To point back to something already named, legal writers use **suddetto**, **summenzionato** or **anzidetto** (*the above-mentioned*): *il suddetto immobile*. To say *from the date*, they write **a decorrere da**: *a decorrere dal 1° gennaio*. To make an exception, they write **fatto salvo**: *fatto salvo quanto previsto dall’articolo 5*.' },
          { t: 'table', caption: 'Legal words', explain: ['head', 'col0'], head: ['Legal phrase', 'Plain meaning', 'Example'], rows: [
            ['il locatore', 'the owner who lets', 'Il locatore consegna le chiavi.'],
            ['il conduttore', 'the person who rents', 'Il conduttore paga l’affitto.'],
            ['il presente contratto', 'this contract', 'Il presente contratto dura quattro anni.'],
            ['suddetto, summenzionato', 'the one named above', 'Il suddetto immobile è in via Roma.'],
            ['a decorrere da', 'starting from', 'A decorrere dal 1° maggio, l’affitto sale.'],
            ['fatto salvo', 'except for', 'Fatto salvo quanto previsto dall’articolo 5, il canone è fisso.'],
          ] },
        ],
        [
          { t: 'text', md: 'Legal Italian prefers **precision to elegance**: the same noun is repeated rather than replaced by a pronoun, so that nobody can doubt what is meant. That is why you read *il locatore… il locatore…* instead of *egli*. It also prefers **formal verbs**: *corrispondere* (to pay), *recedere* (to withdraw), *adempiere* (to carry out an obligation), *stipulare* (to sign an agreement). You do not need to write like this every day, but you must be able to **read** it.' },
          { t: 'tip', art: 'owl', md: 'When you read a contract, find the **parties** first (who does what), then the **verbs** (what they must do), then the **conditions** (when and under what terms). The rest is detail.' },
          { t: 'ex', kind: 'match', h: 'Match the legal word to its plain meaning.', pairs: [
            ['il conduttore', 'the person who rents'],
            ['a decorrere da', 'starting from'],
            ['suddetto', 'named above'],
            ['recedere', 'to withdraw'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
            { q: 'Il ___ consegna le chiavi al conduttore.', o: ['locatore', 'testimone', 'notaio'], why: 'The *locatore* is the owner who lets the property.' },
            { q: 'Il canone sarà pagato ___ dal 1° marzo.', o: ['a decorrere', 'a patto', 'a rischio'], why: '*A decorrere dal* = starting from.' },
            { q: 'Il ___ immobile si trova in via Roma, come indicato sopra.', o: ['suddetto', 'seguente', 'futuro'], why: '*Suddetto* points back to what has been named.' },
            { q: 'Le parti possono ___ dal contratto con tre mesi di preavviso.', o: ['recedere', 'ricevere', 'ricordare'], why: '*Recedere* = to withdraw.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Who is it: the locatore or the conduttore?', groups: ['locatore', 'conduttore'], explain: ['groups'], items: [
            { s: 'Possiede l’appartamento.', g: 0, why: 'The owner.' },
            { s: 'Paga l’affitto ogni mese.', g: 1, why: 'The tenant.' },
            { s: 'Consegna le chiavi.', g: 0, why: 'The owner hands them over.' },
            { s: 'Abita nella casa.', g: 1, why: 'The tenant lives there.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Perché il linguaggio giuridico è denso',
      about: 'See why legal sentences are long and how to simplify them.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Three habits make legal Italian dense. First, **long sentences**: one sentence holds a rule, an exception and a condition. Second, **passive and impersonal forms**: *il canone è corrisposto dal conduttore* instead of *il conduttore paga il canone*. Third, **nominalisation**: a verb becomes a noun, so *se il conduttore non paga* turns into *in caso di mancato pagamento da parte del conduttore*. The result is exact but heavy. **Plain language** (*linguaggio chiaro*) keeps the same meaning with shorter sentences, active verbs and everyday words.' },
          { t: 'table', caption: 'From dense to plain', explain: ['head', 'col0'], head: ['Dense', 'Plain', 'What changed'], rows: [
            ['Il canone è corrisposto dal conduttore.', 'Il conduttore paga l’affitto.', 'passive to active'],
            ['In caso di mancato pagamento…', 'Se il conduttore non paga…', 'noun to verb'],
            ['Il medesimo è tenuto a provvedere alla restituzione.', 'Deve restituirlo.', 'long phrase to one verb'],
            ['Ai sensi del presente articolo…', 'Secondo questo articolo…', 'formal phrase to everyday words'],
          ] },
        ],
        [
          { t: 'text', md: 'To simplify a clause, ask four questions. **Who** does it? **What** must they do? **When**? **Under what condition**? Then write one sentence for each answer, with the subject first. Keep the legal meaning: do not remove a condition or an exception. If the meaning might change, keep the original and add a plain explanation beside it, as many public offices now do.' },
          { t: 'tip', art: 'owl', md: 'Simplifying is not dumbing down. A good plain-language rewrite is **shorter, clearer and just as exact**. Test it by asking: would the other person know exactly what to do?' },
          { t: 'ex', kind: 'transform', h: 'Rewrite in plain language, using the words given.', items: [
            { q: 'Il canone è corrisposto dal conduttore entro il giorno cinque.', cue: 'Il conduttore paga', a: ['Il conduttore paga il canone entro il giorno cinque.', 'Il conduttore paga l’affitto entro il giorno cinque.'], why: 'Active verb, subject first.' },
            { q: 'In caso di mancato pagamento, il contratto si intende risolto.', cue: 'Se il conduttore non paga', a: ['Se il conduttore non paga, il contratto finisce.', 'Se il conduttore non paga, il contratto si chiude.'], why: 'Noun to verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence is plainer?', items: [
            { q: 'Choose the plain version.', o: ['Il conduttore deve pagare l’affitto entro il cinque del mese.', 'Il canone è tenuto a essere corrisposto dal conduttore entro il giorno cinque.', 'Si prescrive il versamento del canone da parte del medesimo.'], why: 'Active, short, and everyday words.' },
            { q: 'Choose the plain version.', o: ['Se vuole andarsene, il conduttore deve avvisare tre mesi prima.', 'Qualora il conduttore intenda recedere, il medesimo è tenuto al preavviso.', 'In ipotesi di recesso, sussiste l’obbligo di preavviso.'], why: 'Short clauses with a clear subject.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Dense or plain?', groups: ['dense', 'plain'], explain: ['groups'], items: [
            { s: 'Ai sensi del presente articolo', g: 0, why: 'Formal phrase.' },
            { s: 'Secondo questo articolo', g: 1, why: 'Everyday words.' },
            { s: 'In caso di mancato pagamento', g: 0, why: 'Nominalised.' },
            { s: 'Se non paga', g: 1, why: 'A verb in a short clause.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'È tenuto a, ha facoltà di, purché',
      about: 'Express obligations, rights, prohibitions and conditions.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'Contracts say **who must**, **who may**, **who may not** and **under what terms**. **Obligation**: *è tenuto a* + infinitive, *ha l’obbligo di*, *deve*. **Right or permission**: *ha facoltà di*, *ha diritto a*, *può*. **Prohibition**: *è vietato* + infinitive, *non è consentito*, *è fatto divieto di*. **Condition**: *purché* and *a condizione che* (both with the **subjunctive**), *salvo che* (also with the subjunctive: *salvo che le parti non dispongano diversamente*), *qualora* (if, with the subjunctive).' },
          { t: 'table', caption: 'Obligation, right, prohibition, condition', explain: ['head', 'col0'], head: ['Function', 'Phrases', 'Example'], rows: [
            ['obligation', 'è tenuto a, ha l’obbligo di', 'Il conduttore è tenuto a pagare l’affitto.'],
            ['right or permission', 'ha facoltà di, ha diritto a', 'Il locatore ha facoltà di ispezionare l’immobile.'],
            ['prohibition', 'è vietato, non è consentito', 'È vietato sublocare l’immobile.'],
            ['condition', 'purché, a condizione che, qualora', 'Può recedere, purché dia tre mesi di preavviso.'],
            ['exception', 'salvo che, fatto salvo', 'Il canone è fisso, salvo che le parti non dispongano diversamente.'],
          ] },
        ],
        [
          { t: 'text', md: 'Be careful with the **mood**. *Purché*, *a condizione che*, *salvo che* and *qualora* take the **subjunctive**: *purché il conduttore paghi*, *qualora il conduttore non paghi*. And remember that *è tenuto a* must be followed by the **infinitive**: *è tenuto a pagare*, not *è tenuto di pagare*. In plain language, these structures become simpler: *deve pagare*, *può recedere, ma deve avvisare*, *non può sublocare*.' },
          { t: 'tip', art: 'suitcase', md: 'Look at the **verb after the phrase** to know its function: infinitive after *è tenuto a* (obligation), infinitive after *ha facoltà di* (right), infinitive after *è vietato* (prohibition), subjunctive after *purché* (condition).' },
          { t: 'ex', kind: 'choice', h: 'Choose the best option.', items: [
            { q: 'Il conduttore ___ pagare l’affitto entro il cinque del mese.', o: ['è tenuto a', 'ha facoltà di', 'è vietato'], why: 'An obligation.' },
            { q: 'Il locatore ___ ispezionare l’immobile, con preavviso.', o: ['ha facoltà di', 'è tenuto a', 'è vietato'], why: 'A right.' },
            { q: 'È ___ sublocare l’immobile senza il consenso del locatore.', o: ['vietato', 'consentito', 'tenuto'], why: 'A prohibition.' },
            { q: 'Il conduttore può recedere, purché ___ tre mesi di preavviso.', o: ['dia', 'dà', 'darà'], why: '*Purché* + subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'Il conduttore è ___ a pagare l’affitto ogni mese.', a: ['tenuto'], why: '*È tenuto a* + infinitive.' },
            { q: 'Il locatore ha ___ di ispezionare l’immobile.', a: ['facoltà'], why: '*Ha facoltà di*.' },
            { q: 'Può recedere ___ dia un preavviso di tre mesi.', a: ['purché'], why: '*Purché* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite in plain language, using the words given.', items: [
            { q: 'Il conduttore è tenuto a provvedere al pagamento del canone.', cue: 'Il conduttore deve', a: ['Il conduttore deve pagare il canone.', 'Il conduttore deve pagare l’affitto.'], why: 'One verb replaces the long phrase.' },
            { q: 'È fatto divieto di sublocare l’immobile.', cue: 'Il conduttore non può', a: ['Il conduttore non può sublocare l’immobile.'], why: 'A direct prohibition.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Una clausola e la sua versione chiara',
      about: 'Read a contract clause and its plain-language version.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Una clausola e la sua versione chiara', md: 'Versione originale\n\nArt. 4 – Il conduttore è tenuto a corrispondere al locatore il canone mensile pattuito, entro e non oltre il giorno cinque di ciascun mese, a decorrere dalla data di consegna dell’immobile suddetto. In caso di mancato pagamento, il locatore ha facoltà di risolvere il presente contratto, fatto salvo il diritto al risarcimento del danno, purché abbia previamente comunicato per iscritto la propria intenzione. È vietato al conduttore sublocare l’immobile, salvo che il locatore vi abbia consentito per iscritto.\n\nVersione in linguaggio chiaro\n\nArt. 4 – Il conduttore paga l’affitto ogni mese, entro il cinque, a partire dal giorno in cui riceve le chiavi. Se non paga, il locatore può chiudere il contratto e chiedere anche un risarcimento, ma prima deve avvisarlo per iscritto. Il conduttore non può affittare la casa a un’altra persona, a meno che il locatore non lo permetta per iscritto.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Il conduttore deve pagare l’affitto entro il giorno cinque di ogni mese.', a: 't', why: '«Entro e non oltre il giorno cinque di ciascun mese.»' },
            { q: 'Il locatore può chiudere il contratto senza avvisare.', a: 'f', why: 'He must first notify in writing.' },
            { q: 'Il conduttore può sublocare l’immobile senza permesso.', a: 'f', why: 'It is forbidden unless the locatore agrees in writing.' },
            { q: 'Il canone mensile è di 800 euro.', a: 'ng', why: 'The amount is not given.' },
            { q: 'La versione chiara è più breve della versione originale.', a: 't', why: 'It uses shorter sentences and fewer words.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does «a decorrere dalla data di consegna» mean in plain language?', o: ['starting from the day of handover', 'until the day of handover', 'before the handover'], why: 'The plain version says «a partire dal giorno in cui riceve le chiavi».' },
            { q: 'What does «fatto salvo il diritto al risarcimento» add?', o: ['The locatore may still ask for compensation.', 'The locatore gives up compensation.', 'The conduttore receives compensation.'], why: '*Fatto salvo* keeps the right alive.' },
            { q: 'Which verb form shows a prohibition in the original?', o: ['È vietato', 'Ha facoltà', 'È tenuto'], why: '*È vietato* + infinitive.' },
            { q: 'What mood follows «purché» in the clause?', o: ['Subjunctive', 'Indicative', 'Imperative'], why: '«Purché abbia previamente comunicato».' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the legal phrases.', items: [
            { s: 'Il conduttore [è tenuto a] corrispondere il canone mensile.', why: 'An obligation.' },
            { s: 'Il locatore [ha facoltà di] risolvere il presente contratto.', why: 'A right.' },
            { s: '[Fatto salvo] il diritto al risarcimento del danno.', why: 'An exception.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'È ___ al conduttore sublocare l’immobile.', a: ['vietato'], why: '*È vietato*.' },
            { q: 'Il locatore può risolvere il contratto, ___ abbia previamente comunicato per iscritto.', a: ['purché'], why: '*Purché* + subjunctive.' },
            { q: 'Il conduttore paga l’affitto entro il ___ di ogni mese.', a: ['cinque'], why: 'The fifth day.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Il conduttore non può affittare la casa a un’altra persona.', why: 'A plain prohibition.' },
            { a: 'Se non paga, il locatore può chiudere il contratto.', why: 'A plain condition and consequence.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'Il ___ è la persona che prende in affitto la casa.', o: ['conduttore', 'locatore', 'notaio'], why: 'The tenant.' },
      { q: 'Il locatore ___ ispezionare l’immobile con preavviso.', o: ['ha facoltà di', 'è tenuto a', 'è vietato'], why: 'A right.' },
      { q: 'Può recedere, purché ___ un preavviso.', o: ['dia', 'dà', 'darà'], why: '*Purché* + subjunctive.' },
      { q: 'Which is plainer?', o: ['Il conduttore paga l’affitto.', 'Il canone è corrisposto dal medesimo.', 'Si prescrive il versamento del canone.'], why: 'Active and short.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Dense or plain?', groups: ['dense', 'plain'], explain: ['groups'], items: [
      { s: 'Ai sensi del presente articolo', g: 0, why: 'Formal.' },
      { s: 'Secondo questo articolo', g: 1, why: 'Plain.' },
      { s: 'In caso di mancato pagamento', g: 0, why: 'Nominalised.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Il conduttore è ___ a pagare l’affitto.', a: ['tenuto'], why: '*È tenuto a*.' },
      { q: '___ dal 1° maggio, l’affitto sale. (starting from)', a: ['A decorrere'], why: '*A decorrere da*.' },
      { q: 'Il canone è fisso, ___ che le parti non dispongano diversamente.', a: ['salvo'], why: '*Salvo che* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite in plain language, using the words given.', items: [
      { q: 'Il canone è corrisposto dal conduttore.', cue: 'Il conduttore paga', a: ['Il conduttore paga il canone.', 'Il conduttore paga l’affitto.'], why: 'Active verb.' },
      { q: 'È fatto divieto di sublocare.', cue: 'Non si può', a: ['Non si può sublocare.'], why: 'A direct prohibition.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the problem.', items: [
      { s: 'Il conduttore è tenuto [di] pagare l’affitto.', a: ['a'], why: '*È tenuto a* + infinitive.' },
      { s: 'Può recedere, purché [dà] un preavviso di tre mesi.', a: ['dia'], why: '*Purché* needs the subjunctive.' },
    ] },
  ],
};
