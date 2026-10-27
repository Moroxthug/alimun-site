// Italian B2, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Science, society and the future',
  goal: 'Discuss science and society, speculate and express cause, effect and probability. Learn modal verbs in compound tenses, connectors of cause and effect, and the vocabulary and phrases of a formal argument.',
  art: 'alien',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['modal verbs', 'probability', 'cause and effect', 'connectors', 'progress', 'technology', 'argument'], goals: ['foundations', 'academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Deve essere stato, avrebbe potuto',
      about: 'Use dovere and potere to express probability, impossibility and regret.',
      art: 'alien',
      spreads: [
        [
          { t: 'text', md: 'The modal verbs **dovere** and **potere** do more than say “must” and “can”. With an infinitive they express **probability**: *Marco non risponde: deve essere ancora al lavoro.* With a past infinitive (**essere stato, aver perso**), they speak about the past: *Deve essere stato difficile. Potrebbe aver perso il treno.* With **non**, **potere** says it is impossible: *Non può essere stato lui.* In the condizionale passato, they express **regret**: *Avrebbe potuto avvisarci* (he could have told us). *Avresti dovuto dirmelo* (you should have told me).' },
          { t: 'table', caption: 'Probability, impossibility and regret', explain: ['head', 'col0'], head: ['Meaning', 'Form', 'Example'], rows: [
            ['probable now', 'deve + infinitive', 'Deve essere stanco.'],
            ['probable before', 'deve + essere stato / aver + participle', 'Deve essere stato difficile.'],
            ['impossible', 'non può + infinitive', 'Non può essere stato lui.'],
            ['possible', 'potrebbe / può darsi che', 'Può darsi che sia già partito.'],
            ['expected', 'dovrebbe + infinitive', 'Il treno dovrebbe arrivare alle otto.'],
            ['regret', 'avrebbe potuto / avrebbe dovuto', 'Avrebbe potuto avvisarci.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the compound tenses, a modal verb takes the **auxiliary of the infinitive**: *Ho dovuto lavorare* (lavorare takes avere), but *Sono dovuto partire* (partire takes essere). In speech, many people use *avere* for both. **Può darsi che** always takes the congiuntivo: *Può darsi che sia già partito.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Marco non risponde: **deve essere** ancora al lavoro.', n: 'A probable present.' },
            { s: '**Deve essere stato** difficile.', n: 'A probable past.' },
            { s: '**Non può essere stato** lui.', n: 'Impossible.' },
            { s: '**Potrebbe aver perso** il treno.', n: 'A possibility.' },
            { s: '**Avrebbe potuto** avvisarci.', n: 'A regret.' },
          ] },
          { t: 'dialogue', title: 'Un ritardo', lines: [
            { who: 'Sara', s: 'Marco non è ancora arrivato. Deve aver trovato traffico.' },
            { who: 'Paolo', s: 'Può darsi che abbia perso il treno. Avrebbe potuto avvisarci.' },
            { who: 'Sara', s: 'Non può essere partito tardi: l’ho visto uscire presto.' },
            { who: 'Paolo', s: 'Allora dovrebbe arrivare tra poco.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Marco non risponde: ___ essere ancora al lavoro. (dovere)', a: ['deve'], why: 'A probable present: *deve*.' },
            { q: 'Non ___ essere stato lui. (potere)', a: ['può'], why: 'Impossible: *non può*.' },
            { q: 'Avrebbe ___ avvisarci. (potere)', a: ['potuto'], why: '*Avrebbe potuto*.' },
            { q: 'Il treno ___ arrivare alle otto. (dovere, expected)', a: ['dovrebbe'], why: '*Dovrebbe* = it is expected to.' },
            { q: 'Ieri ___ dovuto lavorare fino a tardi. (avere)', a: ['ho'], why: '*Lavorare* takes *avere*: *ho dovuto lavorare*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Probable, impossible or regret? Sort the sentences.', explain: ['groups'], groups: ['Probable', 'Impossible', 'Regret'], items: [
            { s: 'Deve essere stanco.', g: 0, why: '*Deve* = probably.' },
            { s: 'Deve essere stato difficile.', g: 0, why: '*Deve essere stato* = it was probably.' },
            { s: 'Non può essere stato lui.', g: 1, why: '*Non può* = impossible.' },
            { s: 'Non può essere vero.', g: 1, why: '*Non può* = impossible.' },
            { s: 'Avrebbe potuto avvisarci.', g: 2, why: 'Condizionale passato: a regret.' },
            { s: 'Avresti dovuto dirmelo.', g: 2, why: 'Condizionale passato: a regret.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Può darsi che lui ___ già partito.', o: ['sia', 'è', 'sarebbe'], why: '*Può darsi che* + congiuntivo.' },
            { q: 'Marco non risponde: ___ essere ancora al lavoro.', o: ['deve', 'può darsi', 'sia'], why: '*Deve essere* = probably is.' },
            { q: 'Avresti ___ dirmelo.', o: ['dovuto', 'dovere', 'devi'], why: '*Avresti dovuto* = you should have.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say it with a modal verb.', items: [
            { q: 'Probabilmente è stato difficile.', a: ['Deve essere stato difficile.'], why: '*Probabilmente è stato* → *deve essere stato*.' },
            { q: 'È impossibile che sia stato lui.', a: ['Non può essere stato lui.'], why: 'Impossible: *non può essere stato*.' },
            { q: 'Forse ha perso il treno.', a: ['Potrebbe aver perso il treno.'], why: 'A possibility: *potrebbe aver perso*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ieri [sono] dovuto lavorare fino a tardi.', a: ['ho'], why: '*Lavorare* takes *avere*: *ho dovuto lavorare*.' },
            { s: 'Avrebbe [potere] avvisarci.', a: ['potuto'], why: '*Avrebbe potuto*.' },
            { s: 'Può darsi che [è] già partito.', a: ['sia'], why: '*Può darsi che* + congiuntivo.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Deve essere stato molto difficile.', why: 'A probable past.' },
            { a: 'Non può essere stato lui.', why: 'Impossible.' },
            { a: 'Avrebbe potuto avvisarci prima.', why: 'A regret.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Dato che, a causa di, perciò',
      about: 'Express cause and effect with the right connector.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To give a **reason**, use **dato che, visto che, poiché, siccome** + indicative: *Dato che piove, resto a casa.* Before a noun, use **a causa di** (a negative cause), **grazie a** (a positive cause) or **per colpa di** (blame): *A causa del traffico, siamo arrivati tardi. Grazie al vostro aiuto, abbiamo finito presto.* To give a **result**, use **perciò, quindi, dunque, di conseguenza, pertanto**: *Era tardi, perciò siamo tornati a casa.* **Così … che** and **tanto … che** show a strong result: *Era così stanco che si è addormentato.*' },
          { t: 'table', caption: 'Cause and result', explain: ['head', 'col0'], head: ['Function', 'Connector', 'Example'], rows: [
            ['reason (clause)', 'dato che / visto che / poiché / siccome', 'Dato che piove, resto a casa.'],
            ['reason (noun), negative', 'a causa di / per colpa di', 'A causa del traffico, siamo arrivati tardi.'],
            ['reason (noun), positive', 'grazie a', 'Grazie al vostro aiuto, abbiamo finito.'],
            ['result', 'perciò / quindi / dunque / di conseguenza', 'Era tardi, perciò siamo tornati.'],
            ['strong result', 'così … che / tanto … che', 'Era così stanco che si è addormentato.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Siccome** and **dato che** usually come at the **start** of a sentence: *Siccome piove, resto a casa* (not *Resto a casa siccome piove*). **Perché** can come in the middle: *Resto a casa perché piove.* **Pertanto** and **di conseguenza** are formal. Do not use **grazie a** for something bad.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Dato che** piove, resto a casa.', n: 'A reason before the main clause.' },
            { s: '**A causa del** traffico, siamo arrivati tardi.', n: 'A negative cause before a noun.' },
            { s: '**Grazie al** vostro aiuto, abbiamo finito presto.', n: 'A positive cause.' },
            { s: 'Era tardi, **perciò** siamo tornati a casa.', n: 'A result.' },
            { s: 'Era **così** stanco **che** si è addormentato.', n: 'A strong result.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the connector with its function.', pairs: [
            ['dato che', 'since (a reason)'],
            ['a causa di', 'because of (negative)'],
            ['grazie a', 'thanks to'],
            ['perciò', 'therefore'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ piove, resto a casa. (since)', a: ['Dato che', 'Visto che', 'Siccome', 'Poiché'], why: 'A reason before the main clause.' },
            { q: 'Il treno è in ritardo a ___ del maltempo.', a: ['causa'], why: '*A causa di* = because of.' },
            { q: '___ al vostro aiuto, abbiamo finito presto.', a: ['Grazie'], why: '*Grazie a* = thanks to.' },
            { q: 'Era tardi, ___ siamo tornati a casa.', a: ['perciò', 'quindi', 'dunque'], why: 'A result: *perciò*.' },
            { q: 'Era così stanco ___ si è addormentato.', a: ['che'], why: '*Così … che*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right connector.', items: [
            { q: '___ aiuto dei vicini, abbiamo finito presto.', o: ['Grazie all’', 'A causa dell’', 'Per colpa dell’'], why: 'A positive cause: *grazie a*.' },
            { q: 'Il treno era in ritardo, ___ sono arrivato tardi.', o: ['perciò', 'siccome', 'dato che'], why: 'A result: *perciò*.' },
            { q: '___ il traffico, siamo arrivati in ritardo.', o: ['A causa del', 'Grazie al', 'Dato che'], why: 'A negative cause before a noun.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the connector in brackets.', items: [
            { q: 'Piove, perciò resto a casa.', cue: 'Dato che', a: ['Dato che piove, resto a casa.'], why: 'The reason comes first.' },
            { q: 'Siccome era tardi, siamo tornati.', a: ['Era tardi, perciò siamo tornati.', 'Era tardi, quindi siamo tornati.', 'Era tardi, dunque siamo tornati.'], why: 'Reason and result.' },
            { q: 'Siamo arrivati tardi perché c’era traffico.', cue: 'A causa', a: ['A causa del traffico, siamo arrivati tardi.'], why: 'A noun after *a causa di*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: '[Grazie al] ritardo, ho perso la riunione.', a: ['A causa del'], why: 'A negative cause: *a causa di*.' },
            { s: 'Era tardi, [siccome] siamo tornati a casa.', a: ['perciò', 'quindi', 'dunque'], why: 'A result: *perciò*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Dato che piove, resto a casa.', why: 'The reason first.' },
            { a: 'Grazie al vostro aiuto, abbiamo finito presto.', why: '*Grazie a* = positive cause.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Progresso, rischio, responsabilità',
      about: 'Learn the vocabulary and phrases of a balanced argument.',
      art: 'sun',
      spreads: [
        [
          { t: 'table', caption: 'Abstract words', explain: ['head', 'col1'], head: ['Word', 'Meaning'], rows: [
            ['il progresso', 'progress'],
            ['il rischio', 'risk'],
            ['il vantaggio', 'advantage'],
            ['lo svantaggio', 'disadvantage'],
            ['la responsabilità', 'responsibility'],
            ['la ricerca', 'research'],
            ['la scoperta', 'discovery'],
            ['l’impatto', 'impact'],
            ['la sfida', 'challenge'],
            ['il limite', 'limit'],
          ] },
          { t: 'text', md: 'Verbs go with these nouns: **offrire** vantaggi, **comportare** rischi, **mettere a rischio** la salute, **fare progressi**, **avere un impatto su** qualcosa, **sottovalutare** un aspetto. A balanced argument uses fixed phrases: **da un lato … dall’altro**, **se da una parte … dall’altra**, **un aspetto da non sottovalutare**, **a ben vedere** (on reflection), **in conclusione**.' },
          { t: 'tip', art: 'owl', md: 'With **da un lato … dall’altro**, you show two sides of a question: *Da un lato la tecnologia offre vantaggi, dall’altro comporta dei rischi.* End with **in conclusione** or **in definitiva** and a clear view. Avoid strong words like **sempre** and **mai** unless you can prove them.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Da un lato la ricerca **offre vantaggi**, dall’altro **comporta dei rischi**.', n: 'Two sides.' },
            { s: 'Questo progetto **mette a rischio** la salute.', n: '*Mettere a rischio* = to endanger.' },
            { s: 'Abbiamo **fatto grandi progressi** nella ricerca.', n: '*Fare progressi*.' },
            { s: 'Un aspetto **da non sottovalutare** è la sicurezza.', n: 'A fixed phrase.' },
            { s: '**In conclusione**, il progresso è una risorsa.', n: 'The closing phrase.' },
          ] },
          { t: 'dialogue', title: 'Il progresso', lines: [
            { who: 'Sara', s: 'Da un lato la tecnologia ci aiuta, dall’altro ci distrae.' },
            { who: 'Paolo', s: 'È vero, e comporta dei rischi che spesso sottovalutiamo.' },
            { who: 'Sara', s: 'A ben vedere, la responsabilità è di chi la usa.' },
            { who: 'Paolo', s: 'In conclusione, il progresso va guidato.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['il progresso', 'progress'],
            ['il rischio', 'risk'],
            ['il vantaggio', 'advantage'],
            ['la sfida', 'challenge'],
            ['la scoperta', 'discovery'],
            ['il limite', 'limit'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Da un ___ offre vantaggi, dall’altro comporta rischi.', a: ['lato'], why: '*Da un lato … dall’altro*.' },
            { q: 'Il progresso ___ dei rischi. (comportare)', a: ['comporta'], why: '*Comportare rischi*.' },
            { q: 'Un aspetto da non ___ è la sicurezza. (sottovalutare)', a: ['sottovalutare'], why: '*Da non sottovalutare*.' },
            { q: 'In ___ , il progresso è una risorsa.', a: ['conclusione', 'definitiva'], why: 'The closing phrase.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'La nuova tecnologia ___ dei vantaggi evidenti.', o: ['offre', 'sfida', 'limita'], why: '*Offrire vantaggi*.' },
            { q: 'Questo progetto ___ a rischio la salute.', o: ['mette', 'fa', 'dà'], why: '*Mettere a rischio*.' },
            { q: 'Abbiamo fatto grandi ___ nella ricerca.', o: ['progressi', 'rischi', 'limiti'], why: '*Fare progressi*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Da un lato la ricerca offre vantaggi, dall’altro comporta rischi.', why: '*Da un lato … dall’altro*.' },
            { a: 'Un aspetto da non sottovalutare è la sicurezza.', why: 'A fixed phrase.' },
            { a: 'In conclusione il progresso è una risorsa.', why: 'The closing phrase.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'La tecnologia di ogni giorno',
      about: 'Read a short essay on technology and everyday life.',
      art: 'alien',
      spreads: [
        [
          { t: 'reading', title: 'Un saggio breve', md: 'Le tecnologie digitali hanno cambiato la vita quotidiana più in fretta di quanto avremmo potuto immaginare. Da un lato offrono vantaggi evidenti: si può lavorare a distanza, trovare informazioni in pochi secondi e restare in contatto con persone lontane. Dall’altro comportano dei rischi, perché passiamo molto tempo davanti agli schermi e rischiamo di perdere l’abitudine a concentrarci.\n\nA causa della velocità con cui tutto cambia, non è sempre facile capire che cosa sia davvero utile. Dato che la tecnologia non è né buona né cattiva in sé, la responsabilità è di chi la usa. Può darsi che in futuro impariamo a usarla meglio; per ora, conviene chiederci ogni tanto se uno strumento ci fa risparmiare tempo o ce lo fa perdere.\n\nIn conclusione, il progresso è una risorsa a condizione che resti al servizio delle persone.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Le tecnologie digitali hanno cambiato la vita quotidiana lentamente.', a: 'f', why: 'They changed it faster than we could have imagined.' },
            { q: 'Secondo il testo, si può lavorare a distanza.', a: 't', why: '*Si può lavorare a distanza.*' },
            { q: 'L’autore dice che la tecnologia è sempre cattiva.', a: 'f', why: '*Non è né buona né cattiva in sé.*' },
            { q: 'L’autore usa uno strumento digitale ogni giorno.', a: 'ng', why: 'The text speaks in general.' },
            { q: 'Il progresso è una risorsa se resta al servizio delle persone.', a: 't', why: '*A condizione che resti al servizio delle persone.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Quale rischio cita l’autore?', o: ['Passare molto tempo davanti agli schermi.', 'Perdere il lavoro.', 'Avere troppe informazioni.'], why: '*Passiamo molto tempo davanti agli schermi.*' },
            { q: 'Di chi è la responsabilità, secondo l’autore?', o: ['Di chi usa la tecnologia.', 'Di chi la produce.', 'Dello Stato.'], why: '*La responsabilità è di chi la usa.*' },
            { q: 'Che cosa conviene chiederci ogni tanto?', o: ['Se uno strumento ci fa risparmiare tempo.', 'Se è nuovo.', 'Se costa molto.'], why: '*Se uno strumento ci fa risparmiare tempo o ce lo fa perdere.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the connectors of cause.', items: [
            { s: '[A causa] della velocità con cui tutto cambia, non è facile capire che cosa sia utile.', why: '*A causa di* introduces a cause.' },
            { s: '[Dato che] la tecnologia non è né buona né cattiva, la responsabilità è di chi la usa.', why: '*Dato che* introduces a reason.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Da un lato offrono vantaggi, ___ l’altro comportano rischi.', a: ['dall’', 'dall'], why: '*Da un lato … dall’altro*.' },
            { q: 'Può darsi che in futuro ___ a usarla meglio. (noi, imparare)', a: ['impariamo'], why: '*Può darsi che* + congiuntivo.' },
            { q: 'In ___ , il progresso è una risorsa.', a: ['conclusione'], why: 'The closing phrase.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Dato che la tecnologia non è cattiva in sé, la responsabilità è di chi la usa.', why: '*Dato che* gives the reason first.' },
            { a: 'Può darsi che in futuro impariamo a usarla meglio.', why: '*Può darsi che* + congiuntivo.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Marco non risponde: ___ essere ancora al lavoro.', o: ['deve', 'può darsi', 'sia'], why: '*Deve essere* = probably is.' },
      { q: 'Ieri ___ dovuto lavorare fino a tardi.', o: ['ho', 'sono', 'ha'], why: '*Lavorare* takes *avere*: *ho dovuto*.' },
      { q: '___ aiuto dei vicini, abbiamo finito presto.', o: ['Grazie all’', 'A causa dell’', 'Per colpa dell’'], why: 'A positive cause: *grazie a*.' },
      { q: 'Questo progetto ___ a rischio la salute.', o: ['mette', 'fa', 'dà'], why: '*Mettere a rischio*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Può darsi che lui ___ già partito. (essere)', a: ['sia'], why: '*Può darsi che* + congiuntivo.' },
      { q: 'Avrebbe ___ avvisarci. (potere)', a: ['potuto'], why: '*Avrebbe potuto*.' },
      { q: '___ piove, resto a casa. (since)', a: ['Dato che', 'Visto che', 'Siccome', 'Poiché'], why: 'A reason before the main clause.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['il vantaggio', 'advantage'],
      ['il rischio', 'risk'],
      ['la sfida', 'challenge'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence.', items: [
      { q: 'Piove, perciò resto a casa.', cue: 'Dato che', a: ['Dato che piove, resto a casa.'], why: 'The reason comes first.' },
      { q: 'Probabilmente è stato difficile.', a: ['Deve essere stato difficile.'], why: '*Deve essere stato*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Può darsi che [è] già partito.', a: ['sia'], why: '*Può darsi che* + congiuntivo.' },
      { s: 'Avrebbe [potere] avvisarci.', a: ['potuto'], why: '*Avrebbe potuto*.' },
    ] },
  ],
};
