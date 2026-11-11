// Italian B1, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Wishes and polite requests',
  goal: 'Make polite requests, give advice and talk about wishes. Learn the condizionale presente, regular and irregular, and a first look at the condizionale passato.',
  art: 'teacup',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['condizionale', 'polite requests', 'advice', 'wishes', 'formal email'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Vorrei, mi piacerebbe',
      about: 'Form the condizionale presente of regular verbs and use it for wishes.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'The **condizionale presente** says what you would do or would like. It is also the polite way to ask for things. For regular verbs, take the **infinitive**, remove the final **-e**, and add **-ei, -esti, -ebbe, -emmo, -este, -ebbero**. As in the future, verbs in **-are** change **a** to **e**: *parlare* gives *parlerei*, *prendere* gives *prenderei*, *dormire* gives *dormirei*.' },
          { t: 'table', caption: 'The condizionale presente', quiz: true, head: ['', 'parlare', 'prendere', 'dormire'], rows: [
            ['io', 'parlerei', 'prenderei', 'dormirei'],
            ['tu', 'parleresti', 'prenderesti', 'dormiresti'],
            ['lui / lei / Lei', 'parlerebbe', 'prenderebbe', 'dormirebbe'],
            ['noi', 'parleremmo', 'prenderemmo', 'dormiremmo'],
            ['voi', 'parlereste', 'prendereste', 'dormireste'],
            ['loro', 'parlerebbero', 'prenderebbero', 'dormirebbero'],
          ] },
          { t: 'tip', art: 'owl', md: 'The spelling rules are the same as in the future. Verbs in **-care** and **-gare** keep the hard sound: **cercare → cercherei**, **pagare → pagherei**. Verbs in **-ciare** and **-giare** lose the **i**: **mangiare → mangerei**, **cominciare → comincerei**. Notice the **-mm-** in *noi*: *parleremmo*.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Prenderei** un cappuccino, per favore.', n: 'A polite order, softer than *Prendo un cappuccino*.' },
            { s: 'Mi **piacerebbe** viaggiare di più.', n: '*Piacere* → *mi piacerebbe*: a wish.' },
            { s: 'Noi **resteremmo** volentieri un altro giorno.', n: '*Restare* → *resteremmo*.' },
            { s: 'Marco **comprerebbe** una casa al mare.', n: 'What he would like to do.' },
            { s: 'Io **mangerei** volentieri qualcosa di dolce.', n: '*Mangiare* → *mangerei*: no *i* before *e*.' },
          ] },
          { t: 'dialogue', title: 'Al bar', lines: [
            { who: 'Giulia', s: 'Buongiorno, prenderei un cappuccino.' },
            { who: 'Barista', s: 'Certo. Vorrebbe anche qualcosa da mangiare?' },
            { who: 'Giulia', s: 'Mangerei volentieri un cornetto.' },
            { who: 'Barista', s: 'Ne abbiamo alla crema e alla marmellata.' },
            { who: 'Giulia', s: 'Allora prendo quello alla marmellata, grazie.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the condizionale of dormire.', verb: 'dormire', tense: 'condizionale presente', rows: [
            ['io', 'dormirei'],
            ['tu', 'dormiresti'],
            ['lui / lei', 'dormirebbe'],
            ['noi', 'dormiremmo'],
            ['voi', 'dormireste'],
            ['loro', 'dormirebbero'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the condizionale.', items: [
            { q: 'Io ___ volentieri una pizza. (mangiare)', a: ['mangerei'], why: '*Mangiare* loses the *i*: *mangerei*.' },
            { q: 'Tu ___ un caffè? (prendere)', a: ['prenderesti'], why: '*Prendere* → *prenderesti*.' },
            { q: 'Noi ___ in Italia per un mese. (restare)', a: ['resteremmo'], why: '*Restare* → *resteremmo*, with *-mm-*.' },
            { q: 'Loro ___ una casa al mare. (comprare)', a: ['comprerebbero'], why: '*Comprare* → *comprerebbero*.' },
            { q: 'Marco ___ la finestra, ma fa freddo. (aprire)', a: ['aprirebbe'], why: '*Aprire* → *aprirebbe*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Noi [parlaremmo] volentieri con lui.', a: ['parleremmo'], why: 'In *-are* verbs, *a* changes to *e*: *parleremmo*.' },
            { s: 'Io [mangiarei] volentieri una pizza.', a: ['mangerei'], why: '*Mangiare* loses the *i*: *mangerei*.' },
            { s: 'Loro [cercarebbero] un appartamento.', a: ['cercherebbero'], why: '*Cercare* keeps the hard sound: *cercherebbero*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '', o: ['Mi piacerebbe vivere al mare.', 'Vivo al mare.', 'Ho vissuto al mare.'], why: 'A wish: *mi piacerebbe* + infinitive.' },
            { q: 'Noi ___ volentieri un altro giorno.', o: ['resteremmo', 'resteremo', 'restavamo'], why: 'A wish: the condizionale *resteremmo*. *Resteremo* is the future.' },
            { q: 'Tu ___ un caffè con me?', o: ['prenderesti', 'prenderai', 'prendevi'], why: 'A polite invitation: *prenderesti*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Mi piacerebbe vivere al mare.', why: '*Mi piacerebbe* + infinitive.' },
            { a: 'Prenderei un cappuccino, per favore.', why: 'A polite order.' },
            { a: 'Parleremmo volentieri con lei.', why: '*Parleremmo*: *noi* in the condizionale.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Potrebbe aiutarmi?',
      about: 'Learn the irregular stems and make polite requests.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The verbs that have an irregular **stem** in the future have the same stem in the condizionale. The endings stay the same: **-ei, -esti, -ebbe, -emmo, -este, -ebbero**. The most useful forms are **vorrei** (I would like), **potrei** (I could), **dovrei** (I should), **avrei** (I would have) and **sarei** (I would be).' },
          { t: 'table', caption: 'Irregular stems', explain: ['head', 'col3'], head: ['Infinitive', 'io', 'noi', 'Meaning'], rows: [
            ['essere', 'sarei', 'saremmo', 'to be'],
            ['avere', 'avrei', 'avremmo', 'to have'],
            ['andare', 'andrei', 'andremmo', 'to go'],
            ['fare', 'farei', 'faremmo', 'to do'],
            ['potere', 'potrei', 'potremmo', 'can'],
            ['dovere', 'dovrei', 'dovremmo', 'must'],
            ['volere', 'vorrei', 'vorremmo', 'to want'],
            ['venire', 'verrei', 'verremmo', 'to come'],
          ] },
          { t: 'tip', art: 'owl', md: 'To ask politely, use *potere* in the condizionale instead of the present: **Puoi aiutarmi?** becomes **Potresti aiutarmi?** and **Può ripetere?** becomes **Potrebbe ripetere?** With *Lei*, always use the third person: *Potrebbe dirmi dov’è la stazione?* Another polite way: **Le dispiacerebbe …?** (*Would you mind …?*) and **Ti dispiacerebbe …?**' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Potresti** aiutarmi con questa valigia?', n: 'A polite request to a friend.' },
            { s: '**Potrebbe** dirmi dov’è la stazione?', n: 'A polite request to a stranger: *Lei* form.' },
            { s: 'Le **dispiacerebbe** aprire la finestra?', n: '*Le dispiacerebbe* = would you mind.' },
            { s: '**Vorrei** prenotare un tavolo per due.', n: '*Vorrei* is the polite *voglio*.' },
            { s: '**Avrebbe** un minuto per me?', n: '*Avere* → *avrebbe*.' },
          ] },
          { t: 'dialogue', title: 'In segreteria', lines: [
            { who: 'Segretaria', s: 'Buongiorno, posso aiutarla?' },
            { who: 'Paolo', s: 'Buongiorno. Vorrei prenotare una sala per giovedì. Potrebbe dirmi se è libera?' },
            { who: 'Segretaria', s: 'Un momento. Sì, è libera alle dieci. Le andrebbe bene?' },
            { who: 'Paolo', s: 'Perfetto, grazie. Ci sarebbe anche un proiettore?' },
            { who: 'Segretaria', s: 'Certo, glielo portiamo noi.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the condizionale of potere.', verb: 'potere', tense: 'condizionale presente', rows: [
            ['io', 'potrei'],
            ['tu', 'potresti'],
            ['lui / lei', 'potrebbe'],
            ['noi', 'potremmo'],
            ['voi', 'potreste'],
            ['loro', 'potrebbero'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the condizionale.', items: [
            { q: '___ prenotare un tavolo per due. (io, volere)', a: ['Vorrei'], why: '*Volere* → *vorrei*.' },
            { q: 'Noi ___ in montagna, ma non abbiamo tempo. (andare)', a: ['andremmo'], why: '*Andare* → *andremmo*.' },
            { q: 'Tu ___ venire alla festa? (potere)', a: ['potresti'], why: '*Potere* → *potresti*.' },
            { q: 'Marco ___ volentieri, ma lavora. (venire)', a: ['verrebbe'], why: '*Venire* → *verrebbe*.' },
            { q: 'Loro ___ più tempo libero. (volere)', a: ['vorrebbero'], why: '*Volere* → *vorrebbero*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Make the request more polite.', items: [
            { q: 'Puoi aiutarmi?', a: ['Potresti aiutarmi?'], why: '*Puoi* → *potresti* is softer.' },
            { q: 'Voglio un caffè.', a: ['Vorrei un caffè.'], why: '*Voglio* → *vorrei*.' },
            { q: 'Può ripetere?', a: ['Potrebbe ripetere?'], why: '*Può* → *potrebbe* with *Lei*.' },
            { q: 'Mi dai il tuo numero?', a: ['Mi daresti il tuo numero?'], why: '*Dai* → *daresti*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the most polite form.', items: [
            { q: '___ dirmi dov’è la stazione? (to a stranger)', o: ['Potrebbe', 'Può', 'Puoi'], why: 'With a stranger, use *Lei* and the condizionale: *Potrebbe*.' },
            { q: '___ aprire la finestra? (to a friend)', o: ['Ti dispiacerebbe', 'Ti dispiace', 'Ti è dispiaciuto'], why: '*Ti dispiacerebbe* = would you mind.' },
            { q: '___ un tavolo per due, per favore. (at a restaurant)', o: ['Vorrei', 'Voglio', 'Volevo'], why: '*Vorrei* is the polite form.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Potrebbe dirmi dov’è la stazione?', why: '*Potrebbe* + infinitive with a pronoun: *dirmi*.' },
            { a: 'Le dispiacerebbe aprire la finestra?', why: '*Le dispiacerebbe* + infinitive.' },
            { a: 'Vorrei prenotare un tavolo per due.', why: '*Vorrei* + infinitive.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the situation with the polite sentence.', pairs: [
            ['You ask a stranger for the time.', 'Potrebbe dirmi che ore sono?'],
            ['You ask a friend for help.', 'Potresti aiutarmi?'],
            ['You book a table.', 'Vorrei prenotare un tavolo.'],
            ['You ask someone to open a window.', 'Le dispiacerebbe aprire la finestra?'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Al tuo posto …',
      about: 'Give advice and say what would have been better.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'The condizionale is the natural way to give **advice**. Use **dovresti** (you should) and **potresti** (you could) with the infinitive: *Dovresti dormire di più. Potresti chiamare il medico.* Say **al tuo posto** (in your place) or **al posto tuo** with the condizionale: *Al tuo posto accetterei.* To suggest, use **sarebbe meglio** + infinitive: *Sarebbe meglio partire presto.* To advise politely, use **ti consiglierei di** + infinitive: *Ti consiglierei di aspettare.*' },
          { t: 'table', caption: 'Ways to give advice', explain: ['head'], head: ['Phrase', 'Example'], rows: [
            ['dovresti / dovrebbe + infinitive', 'Dovresti dormire di più.'],
            ['potresti / potrebbe + infinitive', 'Potresti chiamare il medico.'],
            ['al tuo posto + condizionale', 'Al tuo posto accetterei.'],
            ['sarebbe meglio + infinitive', 'Sarebbe meglio partire presto.'],
            ['ti consiglierei di + infinitive', 'Ti consiglierei di aspettare.'],
          ] },
          { t: 'tip', art: 'owl', md: 'To say what you **should have done**, use the condizionale of *avere* or *essere* and the participle: **avrei dovuto** partire prima, **sarei dovuto** restare a casa. This is the **condizionale passato**: *avrei mangiato, sarei andato / andata*. It also reports a plan from the past: *Ha detto che **sarebbe arrivato** alle otto.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Al tuo posto **accetterei** il lavoro.', n: '*Al tuo posto* + condizionale.' },
            { s: '**Dovresti** parlarne con lui.', n: 'Advice with *dovresti*.' },
            { s: '**Sarebbe meglio** aspettare domani.', n: 'A suggestion.' },
            { s: 'Sono arrivato tardi: **avrei dovuto** partire prima.', n: '*Avrei dovuto* = I should have.' },
            { s: 'Marco ha detto che **sarebbe arrivato** alle otto.', n: 'A plan reported from the past.' },
          ] },
          { t: 'dialogue', title: 'Un consiglio', lines: [
            { who: 'Marco', s: 'Non so se accettare il nuovo lavoro.' },
            { who: 'Giulia', s: 'Al tuo posto, accetterei. Lo stipendio è più alto.' },
            { who: 'Marco', s: 'Ma dovrei cambiare città.' },
            { who: 'Giulia', s: 'Potresti tornare nei fine settimana. Sarebbe meglio parlarne con tua madre.' },
            { who: 'Marco', s: 'Hai ragione. Mi piacerebbe sentire la sua opinione.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Sei stanco: ___ dormire di più. (tu, dovere)', a: ['dovresti'], why: '*Dovere* → *dovresti*.' },
            { q: 'Al tuo posto, io ___ il medico. (chiamare)', a: ['chiamerei'], why: '*Al tuo posto* + condizionale: *chiamerei*.' },
            { q: 'Fa freddo: ___ meglio restare a casa. (essere)', a: ['sarebbe'], why: '*Sarebbe meglio* + infinitive.' },
            { q: 'Sono arrivato tardi: ___ dovuto partire prima. (io, avere)', a: ['avrei'], why: '*Avrei dovuto* = I should have.' },
            { q: 'Ha detto che ___ arrivato alle otto, ma non è ancora qui. (essere)', a: ['sarebbe'], why: 'A plan from the past: *sarebbe arrivato*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Al tuo posto ___ il lavoro.', o: ['accetterei', 'accetto', 'ho accettato'], why: '*Al tuo posto* + condizionale.' },
            { q: 'Marco ha detto che ___ alle otto, ma non è ancora qui.', o: ['sarebbe arrivato', 'è arrivato', 'arrivi'], why: 'A plan reported from the past.' },
            { q: 'Sono arrivato tardi: ___ partire prima.', o: ['avrei dovuto', 'dovrei', 'ho dovuto'], why: 'Looking back: *avrei dovuto*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Turn the order into friendly advice.', items: [
            { q: 'Devi dormire di più.', a: ['Dovresti dormire di più.'], why: '*Devi* → *dovresti* is advice.' },
            { q: 'Chiama il medico.', a: ['Potresti chiamare il medico.', 'Dovresti chiamare il medico.'], why: 'Advice with *potresti* or *dovresti*.' },
            { q: 'Accetta il lavoro.', a: ['Al tuo posto accetterei il lavoro.', 'Al posto tuo accetterei il lavoro.'], why: '*Al tuo posto* + condizionale.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the problem with the advice.', pairs: [
            ['Ho mal di testa.', 'Dovresti riposare un po’.'],
            ['Non ho tempo per cucinare.', 'Potresti ordinare una pizza.'],
            ['Il treno parte presto.', 'Sarebbe meglio uscire adesso.'],
            ['Non so se accettare.', 'Al tuo posto accetterei.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Al tuo posto accetterei il lavoro.', why: '*Al tuo posto* + condizionale.' },
            { a: 'Avrei dovuto partire prima.', why: '*Avrei dovuto* + infinitive.' },
            { a: 'Sarebbe meglio aspettare domani.', why: '*Sarebbe meglio* + infinitive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Sei stanco: [devresti] dormire di più.', a: ['dovresti'], why: '*Dovere* → *dovresti*.' },
            { s: 'Al tuo posto io [accetto] il lavoro.', a: ['accetterei'], why: '*Al tuo posto* needs the condizionale.' },
            { s: 'Ieri sono arrivato tardi: [dovrei] partire prima.', a: ['avrei dovuto'], why: 'Looking back at yesterday: *avrei dovuto*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Una richiesta di informazioni',
      about: 'Read a polite e-mail and its answer.',
      art: 'teacup',
      spreads: [
        [
          { t: 'reading', title: 'Una richiesta', md: '**Oggetto:** Informazioni sul corso di fotografia\n\nGentile segreteria,\n\nmi chiamo Elena Rossi e vorrei iscrivermi al corso di fotografia per principianti. Potreste dirmi quando inizia il prossimo corso e quanto costa? Mi piacerebbe sapere anche se ci sarebbe la possibilità di seguire le lezioni la sera, perché di giorno lavoro. Avrei inoltre bisogno di sapere se bisogna portare una macchina fotografica o se la scuola ne mette una a disposizione.\n\nResto in attesa di una vostra risposta.\n\nCordiali saluti\nElena Rossi\nelena.rossi@example.com' },
          { t: 'reading', title: 'La risposta', md: 'Gentile signora Rossi,\n\ngrazie per il suo messaggio. Il prossimo corso inizia il 12 novembre e dura otto settimane. Le lezioni si tengono il martedì e il giovedì dalle 18 alle 20. Il costo è di 180 euro. La scuola mette a disposizione le macchine fotografiche, ma se ne ha una sua, potrebbe portarla.\n\nResto a disposizione per qualsiasi domanda.\n\nCordiali saluti\nLa segreteria' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Elena vorrebbe iscriversi a un corso di fotografia.', a: 't', why: '*Vorrei iscrivermi al corso di fotografia.*' },
            { q: 'Elena lavora di giorno.', a: 't', why: '*Di giorno lavoro.*' },
            { q: 'Il corso dura sei settimane.', a: 'f', why: 'It lasts eight weeks: *dura otto settimane*.' },
            { q: 'Le lezioni sono in un’altra città.', a: 'ng', why: 'The place of the lessons is not mentioned.' },
            { q: 'La scuola presta le macchine fotografiche.', a: 't', why: '*Mette a disposizione le macchine fotografiche.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Quando sono le lezioni?', o: ['Martedì e giovedì sera.', 'Sabato mattina.', 'Ogni giorno.'], why: '*Il martedì e il giovedì dalle 18 alle 20.*' },
            { q: 'Quanto costa il corso?', o: ['180 euro.', '120 euro.', '80 euro.'], why: '*Il costo è di 180 euro.*' },
            { q: 'Che cosa potrebbe portare Elena?', o: ['La sua macchina fotografica.', 'Un computer.', 'Un libro.'], why: '*Se ne ha una sua, potrebbe portarla.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the condizionale.', items: [
            { s: 'Mi chiamo Elena e [vorrei] iscrivermi; [potreste] dirmi quando inizia il corso?', why: '*Vorrei* and *potreste* are in the condizionale.' },
            { s: 'Mi [piacerebbe] sapere se ci [sarebbe] una lezione la sera.', why: '*Piacerebbe* and *sarebbe* are in the condizionale.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word from the e-mail.', items: [
            { q: 'Gentile segreteria, mi ___ Elena Rossi.', a: ['chiamo'], why: 'The opening: *mi chiamo*.' },
            { q: 'Resto in attesa di una vostra ___.', a: ['risposta'], why: 'A formal closing: *una vostra risposta*.' },
            { q: 'La scuola mette a ___ le macchine fotografiche.', a: ['disposizione'], why: '*Mette a disposizione* = provides.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Vorrei iscrivermi al corso di fotografia.', why: '*Vorrei* + infinitive with the pronoun: *iscrivermi*.' },
            { a: 'Potreste dirmi quando inizia il corso?', why: '*Potreste* + infinitive.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Noi ___ volentieri un altro giorno.', o: ['resteremmo', 'resteremo', 'restavamo'], why: 'A wish: the condizionale *resteremmo*.' },
      { q: '___ dirmi dov’è la stazione? (to a stranger)', o: ['Potrebbe', 'Può', 'Puoi'], why: 'Politely, with *Lei*: *Potrebbe*.' },
      { q: 'Al tuo posto ___ il lavoro.', o: ['accetterei', 'accetto', 'ho accettato'], why: '*Al tuo posto* + condizionale.' },
      { q: 'Sono arrivato tardi: ___ partire prima.', o: ['avrei dovuto', 'dovrei', 'ho dovuto'], why: 'Looking back: *avrei dovuto*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the condizionale.', items: [
      { q: 'Io ___ volentieri una pizza. (mangiare)', a: ['mangerei'], why: '*Mangiare* loses the *i*: *mangerei*.' },
      { q: '___ prenotare un tavolo per due. (io, volere)', a: ['Vorrei'], why: '*Volere* → *vorrei*.' },
      { q: 'Sei stanco: ___ dormire di più. (tu, dovere)', a: ['dovresti'], why: '*Dovere* → *dovresti*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the problem with the advice.', pairs: [
      ['Ho mal di testa.', 'Dovresti riposare un po’.'],
      ['Il treno parte presto.', 'Sarebbe meglio uscire adesso.'],
      ['Non so se accettare.', 'Al tuo posto accetterei.'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Make it more polite.', items: [
      { q: 'Puoi aiutarmi?', a: ['Potresti aiutarmi?'], why: '*Puoi* → *potresti* is softer.' },
      { q: 'Voglio un caffè.', a: ['Vorrei un caffè.'], why: '*Voglio* → *vorrei*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Noi [parlaremmo] volentieri con lui.', a: ['parleremmo'], why: 'In *-are* verbs, *a* changes to *e*: *parleremmo*.' },
      { s: 'Ieri sono arrivato tardi: [dovrei] partire prima.', a: ['avrei dovuto'], why: 'Looking back at yesterday: *avrei dovuto*.' },
    ] },
  ],
};
