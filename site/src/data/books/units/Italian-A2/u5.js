// Italian A2, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Health',
  goal: 'Say what hurts, make a doctor’s appointment and understand simple advice. Learn mi fa male, devo and bisogna, and the imperative with advice.',
  art: 'ghost',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['body', 'mi fa male', 'illness', 'dovere', 'bisogna', 'advice', 'appointments', 'pharmacy'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Mi fa male la testa',
      about: 'Name parts of the body and say what hurts.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'To say that a part of your body hurts, use **mi fa male** + the part of the body when it is singular, and **mi fanno male** when it is plural: *Mi fa male la testa. Mi fanno male i piedi.* The thing that hurts is the **subject**, so it comes with the article. Another way is **ho mal di** + the part: *Ho mal di testa. Ho mal di gola. Ho mal di denti.* To ask *Where does it hurt?*, say **Dove ti fa male?** or **Dove le fa male?**' },
          { t: 'table', caption: 'The body', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['la testa', 'head'],
            ['gli occhi', 'eyes'],
            ['il naso, la bocca', 'nose, mouth'],
            ['l’orecchio (m.)', 'ear'],
            ['la gola', 'throat'],
            ['la schiena', 'back'],
            ['la pancia, lo stomaco', 'stomach, belly'],
            ['il braccio, la mano', 'arm, hand'],
            ['la gamba, il piede', 'leg, foot'],
            ['i denti', 'teeth'],
          ] },
          { t: 'tip', art: 'owl', md: 'The plural of **il braccio** is **le braccia**, and of **l’orecchio** it is **gli orecchi**. For a cold, use **ho il raffreddore**; for a fever, **ho la febbre**; for a cough, **ho la tosse**. In Italian, **l’influenza** is the flu. Say **sto male** (I feel ill) and **sto meglio** (I feel better).' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Dove ti fa male? – **Mi fa male** la gola.', n: '*gola* is singular: *mi fa male*.' },
            { s: '**Gli fanno male** i piedi dopo la corsa.', n: '*i piedi* is plural: *fanno male*.' },
            { s: '**Ho mal di** testa da stamattina.', n: '*avere mal di* + body part.' },
            { s: 'Lei **ha la febbre** e **la tosse**.', n: 'Describing an illness.' },
            { s: '**Sto male**, ho bisogno di un medico.', n: 'Feeling ill.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose fa or fanno.', items: [
            { q: 'Mi ___ male la testa.', o: ['fa', 'fanno', 'faccio'], why: '*la testa* is singular: *mi fa male*.' },
            { q: 'Gli ___ male i denti.', o: ['fanno', 'fa', 'fate'], why: '*i denti* is plural: *fanno male*.' },
            { q: 'Ti ___ male la schiena?', o: ['fa', 'fanno', 'fai'], why: '*la schiena* is singular: *fa male*.' },
            { q: 'Le ___ male gli occhi.', o: ['fanno', 'fa', 'fate'], why: '*gli occhi* is plural: *fanno male*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
            ['la gola', 'throat'],
            ['la schiena', 'back'],
            ['la mano', 'hand'],
            ['i denti', 'teeth'],
            ['la pancia', 'stomach'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing words.', items: [
            { q: 'Dove ti fa ___ ?', a: ['male'], why: '*Dove ti fa male?*' },
            { q: 'Ho mal ___ gola.', a: ['di'], why: '*avere mal di* + body part.' },
            { q: 'Ha la ___. (fever)', a: ['febbre'], why: '*la febbre*' },
            { q: 'Mi fanno male ___ occhi.', a: ['gli'], why: '*gli occhi* is plural masculine.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'search', h: 'Find the parts of the body.', words: ['testa', 'mano', 'piede', 'pancia', 'gola', 'denti'] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Mi fa male la testa.', why: '*mi fa male* + singular subject.' },
            { a: 'Gli fanno male i piedi.', why: 'Plural: *fanno male*.' },
            { a: 'Dove ti fa male?', why: 'Question with *tu*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Deve riposarsi',
      about: 'dovere, bisogna and advice with the imperative.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To give advice or say what you must do, use **dovere** (must, to have to) and **bisogna** + an infinitive: *Devi riposarti. Bisogna bere molta acqua.* **dovere** is irregular. For polite advice, Italian uses **dovresti** (you should, tu) or **dovrebbe** (you should, Lei) + infinitive: *Dovrebbe vedere un medico.* Use it as a fixed phrase at this level.' },
          { t: 'table', caption: 'dovere (must, to have to)', quiz: true, head: ['', 'dovere'], rows: [
            ['io', 'devo'],
            ['tu', 'devi'],
            ['lui / lei / Lei', 'deve'],
            ['noi', 'dobbiamo'],
            ['voi', 'dovete'],
            ['loro', 'devono'],
          ] },
          { t: 'tip', art: 'owl', md: '**Bisogna** is the same for every person: *Bisogna mangiare. Bisogna che tu mangi* is a more advanced form for later. Compare: **Deve** is stronger (you must), and **Dovrebbe** is softer (you should). Another soft way is **È meglio** + infinitive: *È meglio riposarsi.*' },
        ],
        [
          { t: 'text', md: 'The doctor often gives advice with the **imperative**. With **Lei**, the forms are **riposi**, **beva**, **prenda**, **resti** (for -are: -i; for -ere and -ire: -a). With **tu**, the pronoun joins the end of a positive command: **Riposati. Alzati. Mangiala.** In a negative command with **tu**, use **non** + infinitive and the pronoun can go before or after: **Non preoccuparti** or **Non ti preoccupare.**' },
          { t: 'table', caption: 'Common advice', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['Si riposi.', 'Rest. (Lei)'],
            ['Beva molta acqua.', 'Drink a lot of water.'],
            ['Prenda questa medicina due volte al giorno.', 'Take this medicine twice a day.'],
            ['Resti a letto.', 'Stay in bed.'],
            ['Non si preoccupi.', 'Do not worry.'],
            ['Dovrebbe vedere un medico.', 'You should see a doctor.'],
            ['È meglio dormire otto ore.', 'It is better to sleep eight hours.'],
          ] },
          { t: 'examples', items: [
            { s: '**Devo** andare dal medico.', n: '*dovere* + infinitive.' },
            { s: '**Devi** riposarti.', n: '*tu devi*' },
            { s: '**Dobbiamo** partire alle otto.', n: '*noi dobbiamo*' },
            { s: '**Bisogna** bere acqua.', n: 'The same for everybody.' },
            { s: 'Non **si preoccupi**.', n: 'Negative with *Lei*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of dovere.', verb: 'dovere', tense: 'present', rows: [
            ['io', 'devo'],
            ['tu', 'devi'],
            ['lui / lei', 'deve'],
            ['noi', 'dobbiamo'],
            ['voi', 'dovete'],
            ['loro', 'devono'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the right form of the verb.', items: [
            { q: 'Tu ___ riposarti. (dovere)', a: ['devi'], why: '*tu devi*' },
            { q: 'Noi ___ partire alle otto. (dovere)', a: ['dobbiamo'], why: '*noi dobbiamo*' },
            { q: 'Lei ___ prendere le medicine. (dovere)', a: ['deve'], why: '*lei deve*' },
            { q: '___ bere molta acqua.', a: ['Bisogna'], why: '*bisogna* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the doctor say?', items: [
            { q: 'Ha la febbre: «___ a letto.»', o: ['Resti', 'Vada', 'Esca'], why: 'With a fever, stay in bed: *Resti a letto.*' },
            { q: 'Tossisce: «___ molta acqua.»', o: ['Beva', 'Mangi', 'Cerchi'], why: 'Drink water: *Beva*.' },
            { q: 'È molto stanco: «Si ___.»', o: ['riposi', 'riposare', 'riposa'], why: '*Si riposi.*' },
            { q: 'È preoccupato: «Non si ___.»', o: ['preoccupi', 'preoccupa', 'preoccupare'], why: 'Negative with *Lei*: *Non si preoccupi.*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Dovrebbe vedere un medico.', why: '*dovrebbe* + infinitive.' },
            { a: 'Si riposi e beva molta acqua.', why: 'Two imperatives joined by *e*.' },
            { a: 'Non si preoccupi.', why: 'Negative imperative with *Lei*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Prendere un appuntamento',
      about: 'Make an appointment by phone and talk to a pharmacist.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To make an appointment, say **Vorrei prendere un appuntamento con il dottore …**. The receptionist asks **Quando è libero?** (When are you free?) and **È urgente?** You answer **Martedì alle dieci, se possibile** (Tuesday at ten, if possible). To cancel or change, say **Devo disdire l’appuntamento** or **Vorrei spostarlo**.' },
          { t: 'dialogue', title: 'Al telefono', lines: [
            { who: 'Segretaria', s: 'Studio del dottor Rossi, buongiorno.' },
            { who: 'Paolo', s: 'Buongiorno, vorrei prendere un appuntamento, per favore. Ho molto mal di gola.' },
            { who: 'Segretaria', s: 'Quando è libero? Il dottore è disponibile domani alle dieci.' },
            { who: 'Paolo', s: 'Domani alle dieci va benissimo. Grazie mille.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Italy, many people see their **medico di base** (family doctor) first. For urgent problems, people go to **il pronto soccorso** (the emergency room) or call **il 118** (the emergency number for an ambulance). In many countries in Europe, the number **112** also works.' },
        ],
        [
          { t: 'table', caption: 'At the doctor’s and at the pharmacy', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['un appuntamento', 'an appointment'],
            ['un medico, il dottore', 'a doctor'],
            ['una ricetta', 'a prescription'],
            ['una medicina', 'a medicine'],
            ['una scatola di compresse', 'a box of tablets'],
            ['uno sciroppo', 'a syrup'],
            ['la farmacia', 'the pharmacy'],
            ['due volte al giorno', 'twice a day'],
          ] },
          { t: 'dialogue', title: 'In farmacia', lines: [
            { who: 'Marco', s: 'Buongiorno, ho mal di testa e la febbre. Che cosa mi consiglia?' },
            { who: 'Farmacista', s: 'Prenda questa medicina due volte al giorno, dopo i pasti.' },
            { who: 'Marco', s: 'Per quanto tempo?' },
            { who: 'Farmacista', s: 'Per tre giorni. Se ha ancora la febbre, deve vedere un medico.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Fill the gaps with the words in the bank.', extra: ['ricetta', 'urgente'], items: [
            { q: 'Vorrei prendere un ___ con il dottore.', a: 'appuntamento', why: '*prendere un appuntamento*' },
            { q: 'Quando è ___?', a: 'libero', why: '*Quando è libero?*' },
            { q: 'Prenda questa medicina due ___ al giorno.', a: 'volte', why: '*due volte al giorno* means twice a day.' },
            { q: 'Se ha ancora la febbre, ___ vedere un medico.', a: 'deve', why: '*deve* means you must.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'Paolo ha mal di gola.', a: 't', why: '*Ho molto mal di gola.*' },
            { q: 'L’appuntamento è per domani alle dieci.', a: 't', why: '*Domani alle dieci va benissimo.*' },
            { q: 'Marco deve prendere la medicina per una settimana.', a: 'f', why: 'For three days.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You want an appointment:', o: ['Vorrei prendere un appuntamento.', 'Vorrei prendere il treno.', 'Vorrei un caffè.'], why: '*prendere un appuntamento*' },
            { q: 'The receptionist asks when you are free. You say:', o: ['Martedì alle dieci, se possibile.', 'Ho mal di schiena.', 'Sono in ritardo.'], why: 'Answer with a day and a time.' },
            { q: 'You cannot come to the appointment:', o: ['Devo disdire l’appuntamento.', 'Sono arrivato.', 'Prendo una medicina.'], why: '*disdire* means to cancel.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Vorrei prendere un appuntamento domani.', why: '*Vorrei* + infinitive.' },
            { a: 'Quando è libero il dottore?', why: 'The receptionist’s question.' },
            { a: 'Prenda questa medicina due volte al giorno.', why: 'Imperative + frequency.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'In farmacia',
      about: 'Read a pharmacy leaflet and an appointment confirmation.',
      art: 'ghost',
      spreads: [
        [
          { t: 'reading', title: 'I consigli della farmacia', md: '**Ha il raffreddore?**\nSi riposi e beva molta acqua calda. Dorma otto ore per notte. Si lavi spesso le mani. Se ha la febbre per più di tre giorni, deve vedere un medico.\n\nAperti dal lunedì al sabato, dalle 9 alle 19.' },
          { t: 'reading', title: 'Conferma dell’appuntamento', md: 'Buongiorno,\n\nIl suo appuntamento con il dottor Rossi è confermato per martedì alle 10,30. Si prega di arrivare dieci minuti prima. Porti la tessera sanitaria e le vecchie ricette. Se non può venire, la preghiamo di scriverci a studio@example.com almeno un giorno prima.\n\nCordiali saluti,\nLa segreteria' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Per il raffreddore, bisogna bere molta acqua calda.', a: 't', why: '*beva molta acqua calda*' },
            { q: 'Si deve vedere un medico se si ha la febbre per più di tre giorni.', a: 't', why: '*se ha la febbre per più di tre giorni, deve vedere un medico*' },
            { q: 'La farmacia è aperta la domenica.', a: 'f', why: 'It is open from Monday to Saturday.' },
            { q: 'L’appuntamento è confermato per martedì alle 10,30.', a: 't', why: '*martedì alle 10,30*' },
            { q: 'Bisogna pagare in contanti.', a: 'ng', why: 'The message does not talk about payment.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Che cosa bisogna portare all’appuntamento?', o: ['La tessera sanitaria e le vecchie ricette.', 'Una medicina.', 'Un documento di viaggio.'], why: '*Porti la tessera sanitaria e le vecchie ricette.*' },
            { q: 'A che ora bisogna arrivare?', o: ['Alle 10,20.', 'Alle 10,30.', 'Alle 11.'], why: 'Ten minutes before 10,30.' },
            { q: 'Che cosa fare se non si può venire?', o: ['Scrivere allo studio un giorno prima.', 'Venire comunque.', 'Chiamare il 118.'], why: '*la preghiamo di scriverci … almeno un giorno prima*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Bisogna dormire ___ ore per notte.', a: ['otto'], why: '*Dorma otto ore per notte.*' },
            { q: 'Si lavi spesso le ___.', a: ['mani'], why: '*Si lavi spesso le mani.*' },
            { q: 'La farmacia chiude alle ___.', a: ['19', 'diciannove'], why: '*dalle 9 alle 19*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Mi ___ male la testa.', o: ['fa', 'fanno', 'faccio'], why: 'Singular: *fa*.' },
      { q: 'Gli ___ male i denti.', o: ['fanno', 'fa', 'fate'], why: 'Plural: *fanno*.' },
      { q: 'Tu ___ riposarti.', o: ['devi', 'deve', 'dobbiamo'], why: '*tu devi*' },
      { q: 'Quando è malato: «Si ___.»', o: ['riposi', 'riposare', 'riposa'], why: '*Si riposi.*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Ho mal ___ gola.', a: ['di'], why: '*avere mal di*' },
      { q: '___ bere molta acqua.', a: ['Bisogna'], why: '*bisogna*' },
      { q: 'Vorrei prendere un ___ con il dottore.', a: ['appuntamento'], why: '*prendere un appuntamento*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
      ['la gola', 'throat'],
      ['la schiena', 'back'],
      ['una ricetta', 'a prescription'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Mi fa male la testa.', why: '*mi fa male* + subject.' },
      { a: 'Dovrebbe vedere un medico.', why: '*dovrebbe* + infinitive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Mi [fanno] male la testa.', a: ['fa'], why: 'Singular: *mi fa male*.' },
      { s: 'Noi [devete] partire.', a: ['dobbiamo'], why: '*noi dobbiamo*' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
      { q: 'Se ha la febbre, ___ a letto.', o: ['resti', 'resta', 'restare'], why: 'The imperative with *Lei*: *resti*.' },
    ] },
  ],
};
