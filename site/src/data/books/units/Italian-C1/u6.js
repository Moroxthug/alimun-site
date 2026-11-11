// Italian C1, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Hypotheses and conditions with nuance',
  goal: 'Express conditions with precision. Learn qualora, a patto che and purché with the subjunctive, concessions such as seppure and quand’anche, and the imperfetto of spoken hypotheses and unreal wishes.',
  art: 'owl',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['conditions', 'subjunctive', 'concession', 'hypotheses', 'debate'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Qualora, a patto che, purché',
      about: 'Use the conjunctions of condition with the subjunctive.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Beyond **se**, Italian has conjunctions that state a condition more precisely. **Qualora** means *if, in case* and is formal: *Qualora fosse necessario, ci contatti.* **A patto che** and **a condizione che** mean *on condition that*: *Vengo, a patto che tu guidi.* **Purché** means *provided that*: *Puoi uscire, purché torni presto.* **Ammesso che** and **posto che** mean *assuming that*: *Ammesso che sia vero, che cosa facciamo?* All of them take the **congiuntivo**: the present for the present and future, the imperfect when the main verb is in the past or in the conditional.' },
          { t: 'table', caption: 'Conjunctions of condition', explain: ['head', 'col1'], head: ['Conjunction', 'Meaning', 'Example'], rows: [
            ['qualora', 'if, in case', 'Qualora fosse necessario, ci contatti.'],
            ['a patto che', 'on condition that', 'Vengo, a patto che tu guidi.'],
            ['a condizione che', 'on condition that', 'Accetto, a condizione che sia gratis.'],
            ['purché', 'provided that', 'Puoi uscire, purché torni presto.'],
            ['ammesso che', 'assuming that', 'Ammesso che sia vero, che cosa facciamo?'],
            ['posto che', 'given that', 'Posto che abbia ragione, come procediamo?'],
          ] },
          { t: 'tip', art: 'owl', md: '**Qualora** can take the **congiuntivo imperfetto** even for a future possibility: *qualora si presentasse un problema*. This sounds careful and formal. **Purché** and **a patto che** use the **present subjunctive** in a plain present or future: *purché tu torni presto*. **Ove** and **laddove** are written variants of *if* and *where* in legal texts: *Ove necessario, si proceda così.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Qualora** fosse necessario, ci contatti.', n: 'In case it were necessary.' },
            { s: 'Vengo, **a patto che** tu guidi.', n: 'On condition that.' },
            { s: 'Puoi uscire, **purché** torni presto.', n: 'Provided that.' },
            { s: '**Ammesso che** sia vero, che cosa facciamo?', n: 'Assuming that.' },
            { s: 'Accetto, **a condizione che** sia gratis.', n: 'On condition that.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the conjunction with its meaning.', pairs: [
            ['qualora', 'if, in case'],
            ['a patto che', 'on condition that'],
            ['purché', 'provided that'],
            ['ammesso che', 'assuming that'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Puoi uscire, purché ___ presto. (tornare, tu)', a: ['torni'], why: '*Purché* + present subjunctive.' },
            { q: 'Vengo, a patto che tu ___. (guidare)', a: ['guidi'], why: '*A patto che* + present subjunctive.' },
            { q: 'Qualora ___ necessario, ci contatti. (essere)', a: ['fosse'], why: '*Qualora* + imperfect subjunctive.' },
            { q: 'Ammesso che ___ vero, che cosa facciamo? (essere)', a: ['sia'], why: '*Ammesso che* + present subjunctive.' },
            { q: 'Accetto, a condizione che ___ gratis. (essere)', a: ['sia'], why: '*A condizione che* + present subjunctive.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Puoi uscire, purché ___ presto.', o: ['torni', 'torni tu', 'tornerai'], why: '*Purché* + subjunctive.' },
            { q: 'Qualora ___ un problema, mi chiami.', o: ['si presentasse', 'si presenta', 'si presenterà'], why: '*Qualora* + imperfect subjunctive.' },
            { q: 'Vengo a patto che tu ___.', o: ['guidi', 'guidi tu', 'guiderai'], why: '*A patto che* + subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
            { q: 'Se fosse necessario, ci contatti.', cue: 'Qualora', a: ['Qualora fosse necessario, ci contatti.'], why: '*Qualora* replaces *se*.' },
            { q: 'Puoi uscire se torni presto.', cue: 'Puoi uscire, purché', a: ['Puoi uscire, purché torni presto.'], why: '*Purché* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Vengo, a patto che tu [guiderai].', a: ['guidi'], why: '*A patto che* needs the subjunctive.' },
            { s: 'Qualora [è] necessario, ci contatti.', a: ['fosse'], why: '*Qualora* + subjunctive.' },
            { s: 'Ammesso che [è] vero, che cosa facciamo?', a: ['sia'], why: '*Ammesso che* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Qualora fosse necessario, ci contatti.', why: '*Qualora* + imperfect subjunctive.' },
            { a: 'Vengo, a patto che tu guidi.', why: '*A patto che* + subjunctive.' },
            { a: 'Puoi uscire, purché torni presto.', why: '*Purché* + subjunctive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Seppure, quand’anche, se non fosse per',
      about: 'Express concession and rare conditions.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'To concede a point, formal Italian uses **seppure**, **ancorché** and **quand’anche**. **Seppure** and **ancorché** mean *even if, although* and take the subjunctive: *Seppure fosse stanco, ha finito.* **Quand’anche** means *even if* for an unlikely case: *Quand’anche avesse ragione, non cambierebbe nulla.* For a condition that did not hold: **se non fosse per** means *if it were not for*: *Se non fosse per te, sarei perso.* **Se mai** and **casomai** mean *if ever*: *Se mai tornasse, avvisami.* **Casomai** can also mean *just in case*: *Prendi l’ombrello, casomai piovesse.*' },
          { t: 'table', caption: 'Concession and rare conditions', explain: ['head', 'col1'], head: ['Expression', 'Meaning', 'Example'], rows: [
            ['seppure', 'even if, although', 'Seppure fosse stanco, ha finito.'],
            ['ancorché', 'although', 'Ancorché fosse tardi, siamo partiti.'],
            ['quand’anche', 'even if (unlikely)', 'Quand’anche avesse ragione, non cambierebbe nulla.'],
            ['se non fosse per', 'if it were not for', 'Se non fosse per te, sarei perso.'],
            ['se mai / casomai', 'if ever, just in case', 'Se mai tornasse, avvisami.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Quand’anche** is followed by the **congiuntivo trapassato** for a past hypothesis and by the **imperfetto** for a present one: *quand’anche avesse ragione* (past), *quand’anche fosse vero* (present). The apostrophe in **quand’anche** is part of the word. **Casomai** is written as one word when it means *just in case*. **Ancorché** is rare in speech and common in legal and literary texts.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Seppure** fosse stanco, ha finito il lavoro.', n: 'Even if he was tired.' },
            { s: '**Quand’anche** avesse ragione, non cambierebbe nulla.', n: 'Even if he were right.' },
            { s: '**Se non fosse per** te, sarei perso.', n: 'If it were not for you.' },
            { s: '**Se mai** tornasse, avvisami.', n: 'If ever he came back.' },
            { s: 'Prendi l’ombrello, **casomai** piovesse.', n: 'Just in case.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
            ['seppure', 'even if, although'],
            ['quand’anche', 'even if (unlikely)'],
            ['se non fosse per', 'if it were not for'],
            ['casomai', 'just in case'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ fosse stanco, ha finito il lavoro.', a: ['Seppure'], why: '*Seppure* + subjunctive.' },
            { q: 'Quand’anche ___ ragione, non cambierebbe nulla. (avere)', a: ['avesse'], why: '*Quand’anche* + imperfect subjunctive.' },
            { q: 'Se non ___ per te, sarei perso. (essere)', a: ['fosse'], why: '*Se non fosse per*.' },
            { q: 'Prendi l’ombrello, ___ piovesse.', a: ['casomai'], why: '*Casomai* = just in case.' },
            { q: 'Se ___ tornasse, avvisami.', a: ['mai'], why: '*Se mai* = if ever.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best form.', items: [
            { q: '___ fosse tardi, siamo partiti.', o: ['Ancorché', 'Perché', 'Siccome'], why: '*Ancorché* = although.' },
            { q: '___ per te, sarei perso.', o: ['Se non fosse', 'Se non è', 'Se non sarà'], why: '*Se non fosse per*.' },
            { q: 'Quand’anche ___ vero, non cambierebbe nulla.', o: ['fosse', 'è', 'sarà'], why: '*Quand’anche* + imperfect subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
            { q: 'Anche se fosse stanco, ha finito.', cue: 'Seppure', a: ['Seppure fosse stanco, ha finito.'], why: '*Seppure* + subjunctive.' },
            { q: 'Grazie a te non sono perso.', cue: 'Se non fosse', a: ['Se non fosse per te, sarei perso.'], why: '*Se non fosse per* + conditional.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Quand’anche [ha] ragione, non cambierebbe nulla.', a: ['avesse'], why: '*Quand’anche* + subjunctive.' },
            { s: 'Se non [è] per te, sarei perso.', a: ['fosse'], why: '*Se non fosse per*.' },
            { s: 'Seppure [è] stanco, ha finito il lavoro.', a: ['fosse'], why: '*Seppure* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Quand’anche avesse ragione, non cambierebbe nulla.', why: '*Quand’anche* + subjunctive.' },
            { a: 'Se non fosse per te, sarei perso.', why: '*Se non fosse per* + conditional.' },
            { a: 'Prendi l’ombrello, casomai piovesse.', why: '*Casomai* + subjunctive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Se lo sapevo, venivo',
      about: 'Use the imperfetto in spoken hypotheses and wishes.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In **spoken Italian**, the imperfetto replaces the congiuntivo and the condizionale in hypotheses. The formal sentence **Se l’avessi saputo, sarei venuto** becomes **Se lo sapevo, venivo.** It is natural in conversation and incorrect in formal writing. The imperfetto also expresses an **unreal wish**: **Magari fosse vero!** means *If only it were true!* Or a polite question about the past: **Volevo chiederti una cosa.** The imperfetto also says what **almost happened**: **Stavo per cadere** or **Per poco cadevo.**' },
          { t: 'table', caption: 'The imperfetto in hypotheses', explain: ['head', 'col1'], head: ['Spoken', 'Formal', 'Meaning'], rows: [
            ['Se lo sapevo, venivo.', 'Se l’avessi saputo, sarei venuto.', 'If I had known, I would have come.'],
            ['Se avevo tempo, ti aiutavo.', 'Se avessi avuto tempo, ti avrei aiutato.', 'If I had had time, I would have helped you.'],
            ['Per poco cadevo.', 'Sono quasi caduto.', 'I almost fell.'],
            ['Magari fosse vero!', 'Se solo fosse vero!', 'If only it were true!'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use **Se lo sapevo, venivo** with friends, never in an exam essay or a letter. For writing, keep **se + congiuntivo trapassato + condizionale composto**. **Magari** + imperfect subjunctive expresses a wish that is not real: *Magari avessi più tempo!* **Magari** alone can answer *yes, if only*: *— Vieni? — Magari!*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Se **lo sapevo**, **venivo**.', n: 'Spoken for: if I had known, I would have come.' },
            { s: 'Se **avevo** tempo, ti **aiutavo**.', n: 'Spoken for: if I had had time, I would have helped.' },
            { s: '**Per poco cadevo.**', n: 'I almost fell.' },
            { s: '**Magari fosse** vero!', n: 'If only it were true!' },
            { s: '**Magari avessi** più tempo!', n: 'If only I had more time!' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Spoken or formal? Sort the sentences.', groups: ['spoken', 'formal'], explain: ['groups'], items: [
            { s: 'Se lo sapevo, venivo.', g: 0, why: 'The imperfetto replaces the subjunctive.' },
            { s: 'Se avevo tempo, ti aiutavo.', g: 0, why: 'Spoken style.' },
            { s: 'Per poco cadevo.', g: 0, why: 'Spoken style.' },
            { s: 'Se l’avessi saputo, sarei venuto.', g: 1, why: 'Formal: trapassato + condizionale composto.' },
            { s: 'Se avessi avuto tempo, ti avrei aiutato.', g: 1, why: 'Formal style.' },
            { s: 'Sono quasi caduto.', g: 1, why: 'Neutral and written.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Se lo ___, venivo. (sapere, io)', a: ['sapevo'], why: 'The spoken hypothesis uses the imperfetto.' },
            { q: 'Se avevo tempo, ti ___. (aiutare)', a: ['aiutavo'], why: 'The imperfetto in the result clause.' },
            { q: 'Per poco ___. (cadere, io)', a: ['cadevo'], why: '*Per poco* + imperfetto.' },
            { q: 'Magari ___ vero! (essere)', a: ['fosse'], why: '*Magari* + imperfect subjunctive.' },
            { q: 'Magari ___ più tempo! (avere, io)', a: ['avessi'], why: '*Magari* + imperfect subjunctive.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the spoken sentence with the formal one.', pairs: [
            ['Se lo sapevo, venivo.', 'Se l’avessi saputo, sarei venuto.'],
            ['Se avevo tempo, ti aiutavo.', 'Se avessi avuto tempo, ti avrei aiutato.'],
            ['Per poco cadevo.', 'Sono quasi caduto.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it in a formal register.', items: [
            { q: 'Se lo sapevo, venivo.', cue: 'Se l’avessi', a: ['Se l’avessi saputo, sarei venuto.', 'Se l’avessi saputo, sarei venuta.'], why: 'Trapassato + condizionale composto.' },
            { q: 'Se avevo tempo, ti aiutavo.', cue: 'Se avessi', a: ['Se avessi avuto tempo, ti avrei aiutato.', 'Se avessi avuto tempo, ti avrei aiutata.'], why: 'Trapassato + condizionale composto.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Magari [è] vero!', a: ['fosse'], why: 'The unreal wish needs the imperfect subjunctive.' },
            { s: 'Se l’avessi saputo, [venivo].', a: ['sarei venuto'], why: 'The formal hypothesis needs the condizionale composto.' },
            { s: 'Per poco [cado].', a: ['cadevo'], why: '*Per poco* + imperfetto.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Se lo sapevo, venivo.', why: 'The spoken hypothesis.' },
            { a: 'Magari fosse vero!', why: '*Magari* + imperfect subjunctive.' },
            { a: 'Se avessi avuto tempo, ti avrei aiutato.', why: 'The formal hypothesis.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un dibattito su una decisione pubblica',
      about: 'Read a debate full of conditions and concessions.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'La piazza chiusa alle auto', md: 'Il consiglio comunale discute la chiusura di una piazza al traffico.\n\nSANDRA, assessora: Chiuderemo la piazza, purché i negozianti siano consultati. Qualora emergessero problemi, rivedremo la decisione dopo sei mesi.\n\nMARCO, negoziante: Seppure l’idea sia buona, temo per gli incassi. Quand’anche i clienti aumentassero, i fornitori non potrebbero comunque arrivare.\n\nSANDRA: Ammesso che i fornitori abbiano difficoltà, possiamo prevedere un orario di consegna al mattino. Accettiamo la proposta a patto che sia rispettato.\n\nMARCO: Se non fosse per i fornitori, sarei d’accordo. Magari fosse sempre così semplice!\n\nFRANCA, residente: Se lo sapevo, partecipavo prima! Casomai servisse aiuto, sono disponibile.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La piazza sarà chiusa a condizione che i negozianti siano consultati.', a: 't', why: '*Purché i negozianti siano consultati.*' },
            { q: 'Dopo sei mesi la decisione potrebbe essere rivista.', a: 't', why: '*Qualora emergessero problemi, rivedremo la decisione dopo sei mesi.*' },
            { q: 'Marco pensa che l’idea sia cattiva.', a: 'f', why: '*Seppure l’idea sia buona.*' },
            { q: 'Sandra propone un orario di consegna al mattino.', a: 't', why: '*Un orario di consegna al mattino.*' },
            { q: 'Franca è disponibile ad aiutare.', a: 't', why: '*Casomai servisse aiuto, sono disponibile.*' },
            { q: 'La piazza si trova in centro.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Qual è il problema principale di Marco?', o: ['I fornitori non potrebbero arrivare.', 'Il costo dell’affitto.', 'Il rumore.'], why: '*I fornitori non potrebbero comunque arrivare.*' },
            { q: 'Quale soluzione propone Sandra?', o: ['Un orario di consegna al mattino.', 'Riaprire la piazza.', 'Un parcheggio nuovo.'], why: '*Un orario di consegna al mattino.*' },
            { q: 'Che cosa dice Franca?', o: ['Avrebbe partecipato prima.', 'È contraria.', 'Non vive in zona.'], why: '*Se lo sapevo, partecipavo prima.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the conjunctions of condition and concession.', items: [
            { s: 'Chiuderemo la piazza, [purché] i negozianti siano consultati. [Qualora] emergessero problemi, rivedremo la decisione.', why: '*Purché* and *qualora*.' },
            { s: '[Seppure] l’idea sia buona, temo per gli incassi. [Quand’anche] i clienti aumentassero, i fornitori non potrebbero arrivare.', why: '*Seppure* and *quand’anche*.' },
            { s: '[Ammesso che] i fornitori abbiano difficoltà, possiamo prevedere un orario. Accettiamo [a patto che] sia rispettato.', why: '*Ammesso che* and *a patto che*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Chiuderemo la piazza, ___ i negozianti siano consultati.', a: ['purché'], why: '*Purché* + subjunctive.' },
            { q: 'Qualora ___ problemi, rivedremo la decisione. (emergere)', a: ['emergessero'], why: '*Qualora* + imperfect subjunctive.' },
            { q: 'Se non ___ per i fornitori, sarei d’accordo. (essere)', a: ['fosse'], why: '*Se non fosse per*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Accettiamo la proposta a patto che sia rispettato.', why: '*A patto che* + subjunctive.' },
            { a: 'Se lo sapevo, partecipavo prima.', why: 'The spoken hypothesis.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Puoi uscire, purché ___ presto.', o: ['torni', 'tornerai', 'torni tu'], why: '*Purché* + subjunctive.' },
      { q: 'Qualora ___ necessario, ci contatti.', o: ['fosse', 'è', 'sarà'], why: '*Qualora* + subjunctive.' },
      { q: '___ per te, sarei perso.', o: ['Se non fosse', 'Se non è', 'Se non sarà'], why: '*Se non fosse per*.' },
      { q: 'Vengo, a patto che tu ___.', o: ['guidi', 'guiderai', 'guidi tu'], why: '*A patto che* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Quand’anche ___ ragione, non cambierebbe nulla. (avere)', a: ['avesse'], why: '*Quand’anche* + imperfect subjunctive.' },
      { q: 'Magari ___ vero! (essere)', a: ['fosse'], why: '*Magari* + imperfect subjunctive.' },
      { q: 'Prendi l’ombrello, ___ piovesse.', a: ['casomai'], why: '*Casomai* = just in case.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the spoken sentence with the formal one.', pairs: [
      ['Se lo sapevo, venivo.', 'Se l’avessi saputo, sarei venuto.'],
      ['Se avevo tempo, ti aiutavo.', 'Se avessi avuto tempo, ti avrei aiutato.'],
      ['Per poco cadevo.', 'Sono quasi caduto.'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
      { q: 'Se fosse necessario, ci contatti.', cue: 'Qualora', a: ['Qualora fosse necessario, ci contatti.'], why: '*Qualora* replaces *se*.' },
      { q: 'Anche se fosse stanco, ha finito.', cue: 'Seppure', a: ['Seppure fosse stanco, ha finito.'], why: '*Seppure* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Qualora [è] necessario, ci contatti.', a: ['fosse'], why: '*Qualora* + subjunctive.' },
      { s: 'Vengo, a patto che tu [guiderai].', a: ['guidi'], why: '*A patto che* needs the subjunctive.' },
    ] },
  ],
};
