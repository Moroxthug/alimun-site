// Italian B1, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Opinions and feelings',
  goal: 'Give an opinion, say what you hope and feel, and discuss a topic. Learn the congiuntivo presente and when to use it, and when to use di + infinitive instead.',
  art: 'alien',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['congiuntivo presente', 'opinions', 'hopes', 'feelings', 'discussion'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Penso che sia…',
      about: 'Choose between the indicative and the congiuntivo after expressions of opinion and certainty.',
      art: 'alien',
      spreads: [
        [
          { t: 'text', md: 'To give an opinion, Italian uses **che** and a verb in the **congiuntivo** (subjunctive): *Penso che sia una buona idea.* The congiuntivo is used for what you **think, believe or doubt**, not for what you **know**. After a statement of certainty, the verb stays in the **indicative**: *So che è una buona idea. Sono sicuro che è vero.* After **secondo me** and **per me**, there is no *che*, and the verb is in the indicative: *Secondo me è troppo caro.*' },
          { t: 'table', caption: 'Opinion and certainty', explain: ['head', 'col1'], head: ['Expression', 'Verb', 'Example'], rows: [
            ['penso / credo / ritengo che', 'subjunctive', 'Penso che sia utile.'],
            ['mi sembra / mi pare che', 'subjunctive', 'Mi sembra che abbia ragione.'],
            ['non sono sicuro che', 'subjunctive', 'Non sono sicuro che sia vero.'],
            ['sono sicuro / so che', 'indicative', 'So che è vero.'],
            ['è vero / è chiaro che', 'indicative', 'È chiaro che ha ragione.'],
            ['secondo me / per me', 'indicative', 'Secondo me è utile.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In everyday speech, many Italians use the indicative after *penso che* (*Penso che è utile*). The congiuntivo is the standard form: use it in writing, in exams and in careful speech.' },
        ],
        [
          { t: 'table', caption: 'Forms to start with: lui / lei', explain: ['head'], head: ['Infinitive', 'che lui / lei'], rows: [
            ['essere', 'sia'],
            ['avere', 'abbia'],
            ['fare', 'faccia'],
            ['andare', 'vada'],
            ['potere', 'possa'],
            ['volere', 'voglia'],
          ] },
          { t: 'examples', items: [
            { s: 'Penso che **sia** una buona idea.', n: '*Penso che* + congiuntivo of *essere*.' },
            { s: 'Credo che Marco **abbia** ragione.', n: '*Credo che* + *abbia*.' },
            { s: 'Mi sembra che lei **faccia** un lavoro difficile.', n: '*Mi sembra che* + *faccia*.' },
            { s: 'Non sono sicuro che **sia** vero.', n: 'A doubt: the congiuntivo.' },
            { s: 'Sono sicuro che **è** vero.', n: 'A certainty: the indicative.' },
            { s: 'Secondo me **è** troppo caro.', n: 'No *che* after *secondo me*.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Un ristorante nuovo', lines: [
            { who: 'Giulia', s: 'Che cosa pensi del nuovo ristorante?' },
            { who: 'Marco', s: 'Penso che sia troppo caro.' },
            { who: 'Giulia', s: 'Secondo me è buono. Credo che il cuoco sia bravo.' },
            { who: 'Marco', s: 'Forse hai ragione, ma non sono sicuro che i prezzi siano giusti.' },
            { who: 'Giulia', s: 'Allora proviamo e poi decidiamo!' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which mood follows? Sort the expressions.', explain: ['groups'], groups: ['Indicative', 'Subjunctive'], items: [
            { s: 'penso che', g: 1, why: 'An opinion: the congiuntivo.' },
            { s: 'credo che', g: 1, why: 'An opinion: the congiuntivo.' },
            { s: 'mi sembra che', g: 1, why: 'An impression: the congiuntivo.' },
            { s: 'non sono sicuro che', g: 1, why: 'A doubt: the congiuntivo.' },
            { s: 'sono sicuro che', g: 0, why: 'A certainty: the indicative.' },
            { s: 'so che', g: 0, why: 'A certainty: the indicative.' },
            { s: 'è vero che', g: 0, why: 'A fact: the indicative.' },
            { s: 'secondo me', g: 0, why: 'No *che*; the indicative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Penso che Marco ___ ragione.', o: ['abbia', 'ha', 'avrà'], why: '*Penso che* + congiuntivo: *abbia*.' },
            { q: 'Sono sicuro che lei ___ a casa.', o: ['è', 'sia', 'fosse'], why: 'A certainty: the indicative *è*.' },
            { q: 'Non sono sicuro che il film ___ bello.', o: ['sia', 'è', 'era'], why: 'A doubt: the congiuntivo *sia*.' },
            { q: 'Secondo me il corso ___ troppo caro.', o: ['è', 'sia', 'fosse'], why: 'After *secondo me*, the indicative.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Penso che questo libro ___ interessante. (essere)', a: ['sia'], why: '*Penso che* + *sia*.' },
            { q: 'Credo che lei ___ un lavoro difficile. (fare)', a: ['faccia'], why: '*Credo che* + *faccia*.' },
            { q: 'Non sono sicuro che lui ___ ragione. (avere)', a: ['abbia'], why: 'A doubt: *abbia*.' },
            { q: 'Sono sicuro che Marco ___ ragione. (avere)', a: ['ha'], why: 'A certainty: the indicative *ha*.' },
            { q: 'Mi sembra che Marco ___ a casa. (andare)', a: ['vada'], why: '*Mi sembra che* + *vada*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'The forms of the congiuntivo',
      about: 'Form the congiuntivo presente of regular and irregular verbs.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Verbs in **-are** take the endings **-i, -i, -i, -iamo, -iate, -ino**. Verbs in **-ere** and **-ire** take **-a, -a, -a, -iamo, -iate, -ano**. Many **-ire** verbs add **-isc-** in the singular and in the third person plural, as in the present: *finisca, finiscano*. The **three singular forms are the same**, so use the pronoun when it is not clear: *Penso che tu sia stanco.*' },
          { t: 'table', caption: 'The congiuntivo presente: regular verbs', quiz: true, head: ['', 'parlare', 'prendere', 'dormire', 'finire'], rows: [
            ['che io', 'parli', 'prenda', 'dorma', 'finisca'],
            ['che tu', 'parli', 'prenda', 'dorma', 'finisca'],
            ['che lui / lei / Lei', 'parli', 'prenda', 'dorma', 'finisca'],
            ['che noi', 'parliamo', 'prendiamo', 'dormiamo', 'finiamo'],
            ['che voi', 'parliate', 'prendiate', 'dormiate', 'finiate'],
            ['che loro', 'parlino', 'prendano', 'dormano', 'finiscano'],
          ] },
          { t: 'tip', art: 'owl', md: 'Verbs in **-care** and **-gare** add an **h**: *cercare → che io cerchi*, *pagare → che tu paghi*. Verbs in **-ciare** and **-giare** keep one **i**: *mangiare → che io mangi*. The forms for **noi** and **voi** are easy to remember: *-iamo* and *-iate*.' },
        ],
        [
          { t: 'table', caption: 'Irregular verbs', explain: ['head'], head: ['Infinitive', 'che lui / lei', 'che noi', 'che loro'], rows: [
            ['essere', 'sia', 'siamo', 'siano'],
            ['avere', 'abbia', 'abbiamo', 'abbiano'],
            ['andare', 'vada', 'andiamo', 'vadano'],
            ['fare', 'faccia', 'facciamo', 'facciano'],
            ['potere', 'possa', 'possiamo', 'possano'],
            ['volere', 'voglia', 'vogliamo', 'vogliano'],
            ['venire', 'venga', 'veniamo', 'vengano'],
            ['dire', 'dica', 'diciamo', 'dicano'],
          ] },
          { t: 'examples', items: [
            { s: 'Penso che tu **sia** stanco.', n: '*Tu* is added: *sia* is the same for all three singular persons.' },
            { s: 'Credo che noi **abbiamo** poco tempo.', n: '*Noi*: the same as the indicative.' },
            { s: 'Mi sembra che loro **vadano** al mare.', n: '*Andare* → *vadano*.' },
            { s: 'Penso che lui **dica** la verità.', n: '*Dire* → *dica*.' },
            { s: 'Credo che voi **lavoriate** troppo.', n: 'Regular *-are*: *lavoriate*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the congiuntivo of essere.', verb: 'essere', tense: 'congiuntivo presente (che …)', rows: [
            ['che io', 'sia'],
            ['che tu', 'sia'],
            ['che lui / lei', 'sia'],
            ['che noi', 'siamo'],
            ['che voi', 'siate'],
            ['che loro', 'siano'],
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the congiuntivo of andare.', verb: 'andare', tense: 'congiuntivo presente (che …)', rows: [
            ['che io', 'vada'],
            ['che tu', 'vada'],
            ['che lui / lei', 'vada'],
            ['che noi', 'andiamo'],
            ['che voi', 'andiate'],
            ['che loro', 'vadano'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the congiuntivo.', items: [
            { q: 'Penso che tu ___ ragione. (avere)', a: ['abbia'], why: '*Avere* → *abbia*.' },
            { q: 'Credo che Marco ___ a Roma domani. (andare)', a: ['vada'], why: '*Andare* → *vada*.' },
            { q: 'Mi sembra che loro ___ stanchi. (essere)', a: ['siano'], why: '*Essere* → *siano*.' },
            { q: 'Penso che noi ___ in ritardo. (essere)', a: ['siamo'], why: 'With *noi*: *siamo*, the same as the indicative.' },
            { q: 'Credo che voi ___ molto. (lavorare)', a: ['lavoriate'], why: '*Lavorare* → *lavoriate*.' },
            { q: 'Penso che lui ___ la verità. (dire)', a: ['dica'], why: '*Dire* → *dica*.' },
            { q: 'Credo che lei ___ presto. (partire)', a: ['parta'], why: '*Partire* → *parta*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Penso che lui [è] molto simpatico.', a: ['sia'], why: '*Penso che* + congiuntivo: *sia*.' },
            { s: 'Credo che Marco [ha] ragione.', a: ['abbia'], why: '*Credo che* + *abbia*.' },
            { s: 'Mi sembra che loro [fanno] un buon lavoro.', a: ['facciano'], why: '*Fare* → *facciano*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Credo che lei ___ presto.', o: ['finisca', 'finisce', 'finire'], why: '*Finire* → *finisca* with *-isc-*.' },
            { q: 'Penso che loro ___ al mare.', o: ['vadano', 'vanno', 'andino'], why: '*Andare* → *vadano*.' },
            { q: 'Credo che tu ___ troppo.', o: ['lavori', 'lavora', 'lavorerai'], why: '*-are* verbs: *lavori*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Penso che sia una buona idea.', why: '*Penso che* + congiuntivo.' },
            { a: 'Credo che loro vadano al mare.', why: '*Credo che* + *vadano*.' },
            { a: 'Mi sembra che lei abbia ragione.', why: '*Mi sembra che* + *abbia*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Hopes, feelings and what is needed',
      about: 'Use che + congiuntivo for wishes and feelings, and di + infinitive when the subject stays the same.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'The congiuntivo is also used for **wishes** and **feelings**: *spero che, voglio che, preferisco che, mi dispiace che, sono contento che, ho paura che*. And it follows **impersonal** expressions: *è importante che, bisogna che, è necessario che, è meglio che, è possibile che*. When the subject of both verbs is the **same**, do not use *che*: use the infinitive, with **di** after some verbs: *Spero di venire. Sono contento di essere qui.* Compare: *Spero che tu venga.*' },
          { t: 'table', caption: 'Same subject or different subject', explain: ['head'], head: ['Same subject (infinitive)', 'Different subject (che + subjunctive)'], rows: [
            ['Spero di venire.', 'Spero che tu venga.'],
            ['Voglio partire.', 'Voglio che tu parta.'],
            ['Sono contento di essere qui.', 'Sono contento che tu sia qui.'],
            ['È importante studiare.', 'È importante che tu studi.'],
            ['Bisogna partire presto.', 'Bisogna che tu parta presto.'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **volere**, **preferire** and **dovere**, the infinitive follows directly: *Voglio partire.* After **sperare**, **avere paura**, **essere contento**, use **di**: *Ho paura di sbagliare.* After a feeling, **che** introduces the other person: *Mi dispiace che non ci sia più tempo.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Spero che** tu **venga** alla festa.', n: 'A hope about someone else.' },
            { s: '**Voglio che** tu **parta** presto.', n: '*Volere che* + congiuntivo: someone else does it.' },
            { s: '**Sono contento che** lei **sia** qui.', n: 'A feeling about someone else.' },
            { s: '**È importante che** ognuno **dica** la sua.', n: 'An impersonal expression + congiuntivo.' },
            { s: '**Bisogna che** noi **partiamo** presto.', n: '*Bisogna che* + congiuntivo.' },
            { s: '**Ho paura di** sbagliare.', n: 'Same subject: *di* + infinitive.' },
          ] },
          { t: 'dialogue', title: 'Una festa', lines: [
            { who: 'Giulia', s: 'Spero che tu venga alla festa.' },
            { who: 'Marco', s: 'Vorrei venire, ma ho paura che il treno sia in ritardo.' },
            { who: 'Giulia', s: 'Bisogna che tu parta presto.' },
            { who: 'Marco', s: 'Hai ragione. Mi dispiace che non ci sia più tempo.' },
            { who: 'Giulia', s: 'Sono contenta che tu ci provi.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Voglio ___ tu parta.', o: ['che', 'di', 'a'], why: 'Different subject: *voglio che* + congiuntivo.' },
            { q: 'Spero ___ venire alla festa.', o: ['di', 'che', 'a'], why: 'Same subject: *spero di* + infinitive.' },
            { q: 'È importante che tu ___ puntuale.', o: ['sia', 'sei', 'eri'], why: '*È importante che* + congiuntivo.' },
            { q: 'Ho paura ___ sbagliare.', o: ['di', 'che', 'a'], why: 'Same subject: *ho paura di* + infinitive.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word or verb.', items: [
            { q: 'Spero che tu ___ alla festa. (venire)', a: ['venga'], why: '*Venire* → *venga*.' },
            { q: 'Bisogna che noi ___ presto. (partire)', a: ['partiamo'], why: '*Noi*: *partiamo*.' },
            { q: 'Sono contento che lei ___ qui. (essere)', a: ['sia'], why: '*Essere* → *sia*.' },
            { q: 'Preferisco che loro ___ domani. (arrivare)', a: ['arrivino'], why: '*Arrivare* → *arrivino*.' },
            { q: 'Mi dispiace ___ non ci sia più tempo.', a: ['che'], why: 'A feeling about a situation: *mi dispiace che*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'The subject changes. Rewrite the sentence.', items: [
            { q: 'Voglio partire. (tu)', cue: 'Voglio che', a: ['Voglio che tu parta.'], why: 'A different subject: *voglio che tu parta*.' },
            { q: 'Spero di venire. (tu)', cue: 'Spero che', a: ['Spero che tu venga.'], why: 'A different subject: *spero che tu venga*.' },
            { q: 'È importante studiare. (tu)', cue: 'È importante che', a: ['È importante che tu studi.'], why: 'With a subject, add *che* + congiuntivo.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Spero [che] venire alla festa.', a: ['di'], why: 'The same subject: *spero di venire*.' },
            { s: 'Voglio che tu [parti] presto.', a: ['parta'], why: '*Voglio che* + congiuntivo: *parta*.' },
            { s: 'È importante che tu [studii] di più.', a: ['studi'], why: '*Studiare* keeps one *i* in the congiuntivo: *che tu studi*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Spero che tu venga alla festa.', why: '*Spero che* + congiuntivo.' },
            { a: 'Bisogna che noi partiamo presto.', why: '*Bisogna che* + congiuntivo.' },
            { a: 'Ho paura di sbagliare.', why: 'The same subject: *di* + infinitive.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
            ['Spero che…', 'I hope that…'],
            ['Mi dispiace che…', 'I am sorry that…'],
            ['È meglio che…', 'It is better that…'],
            ['Ho paura che…', 'I am afraid that…'],
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Lavorare da casa',
      about: 'Read a forum discussion and notice the opinions.',
      art: 'alien',
      spreads: [
        [
          { t: 'reading', title: 'Lavorare da casa: che cosa ne pensate?', md: '**Sofia:** Penso che lavorare da casa sia comodo, perché non perdo tempo nel traffico. Credo che sia anche più tranquillo, ma ho paura che a volte si lavori troppo.\n\n**Marco:** Non sono d’accordo. Mi sembra che il contatto con i colleghi sia importante. Sono sicuro che in ufficio si impara di più. Però sono contento che la mia azienda permetta due giorni a casa alla settimana.\n\n**Elena:** Secondo me dipende dal lavoro. È importante che ognuno scelga quello che preferisce. Spero che in futuro ci siano più possibilità per tutti.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Sofia pensa che lavorare da casa sia comodo.', a: 't', why: '*Penso che lavorare da casa sia comodo.*' },
            { q: 'Marco pensa che il contatto con i colleghi non sia importante.', a: 'f', why: 'He says it is important: *mi sembra che … sia importante*.' },
            { q: 'La sua azienda permette due giorni a casa alla settimana.', a: 't', why: '*La mia azienda permetta due giorni a casa alla settimana.*' },
            { q: 'Elena lavora da casa.', a: 'ng', why: 'She does not say where she works.' },
            { q: 'Sofia ha paura di lavorare troppo.', a: 't', why: '*Ho paura che a volte si lavori troppo.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Perché Sofia trova comodo lavorare da casa?', o: ['Non perde tempo nel traffico.', 'Guadagna di più.', 'Ha più colleghi.'], why: '*Non perdo tempo nel traffico.*' },
            { q: 'Che cosa spera Elena?', o: ['Che ci siano più possibilità per tutti.', 'Di lavorare meno.', 'Di cambiare lavoro.'], why: '*Spero che in futuro ci siano più possibilità per tutti.*' },
            { q: 'Dove si impara di più, secondo Marco?', o: ['In ufficio.', 'A casa.', 'In treno.'], why: '*Sono sicuro che in ufficio si impara di più.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the congiuntivo.', items: [
            { s: 'Penso che lavorare da casa [sia] comodo, ma ho paura che a volte si [lavori] troppo.', why: '*Sia* and *lavori* follow *penso che* and *ho paura che*.' },
            { s: 'Sono contento che la mia azienda [permetta] due giorni a casa.', why: '*Permetta* follows *sono contento che*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Penso che lavorare da casa ___ comodo. (essere)', a: ['sia'], why: '*Penso che* + *sia*.' },
            { q: 'È importante che ognuno ___ quello che preferisce. (scegliere)', a: ['scelga'], why: '*Scegliere* → *scelga*.' },
            { q: 'Sono sicuro che in ufficio si ___ di più. (imparare)', a: ['impara'], why: 'A certainty: the indicative *impara*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Spero che ci siano più possibilità.', why: '*Spero che* + congiuntivo.' },
            { a: 'Sono sicuro che in ufficio si impara di più.', why: 'A certainty: the indicative.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Penso che il film ___ bello.', o: ['sia', 'è', 'era'], why: '*Penso che* + congiuntivo.' },
      { q: 'Sono sicuro che lui ___ ragione.', o: ['ha', 'abbia', 'avesse'], why: 'A certainty: the indicative.' },
      { q: 'Voglio ___ tu parta.', o: ['che', 'di', 'a'], why: 'Different subject: *voglio che*.' },
      { q: 'È importante che tu ___ puntuale.', o: ['sia', 'sei', 'eri'], why: '*È importante che* + congiuntivo.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Credo che lei ___ un lavoro difficile. (fare)', a: ['faccia'], why: '*Fare* → *faccia*.' },
      { q: 'Bisogna che noi ___ presto. (partire)', a: ['partiamo'], why: '*Noi*: *partiamo*.' },
      { q: 'Spero ___ venire alla festa.', a: ['di'], why: 'Same subject: *spero di* + infinitive.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the infinitive with its congiuntivo (che lui / lei).', pairs: [
      ['essere', 'sia'],
      ['avere', 'abbia'],
      ['fare', 'faccia'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Give your opinion with the phrase in brackets.', items: [
      { q: 'Marco ha ragione.', cue: 'Penso che', a: ['Penso che Marco abbia ragione.'], why: '*Penso che* + *abbia*.' },
      { q: 'Il film è bello.', cue: 'Credo che', a: ['Credo che il film sia bello.'], why: '*Credo che* + *sia*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Penso che lui [è] molto simpatico.', a: ['sia'], why: '*Penso che* + congiuntivo: *sia*.' },
      { s: 'Spero [che] venire alla festa.', a: ['di'], why: 'The same subject: *spero di venire*.' },
    ] },
  ],
};
