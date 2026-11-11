// Italian B2, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Although, provided that, unless',
  goal: 'Build precise complex sentences with conjunctions that take the congiuntivo. Learn benché, sebbene, per quanto, affinché, purché, a meno che non, prima che and senza che, and when to use the infinitive instead.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['concession', 'purpose', 'condition', 'conjunctions', 'congiuntivo'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Benché, sebbene, nonostante',
      about: 'Express a contrast with conjunctions that take the congiuntivo.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'To say that something happens **in spite of** something else, Italian has several connectors. **Benché**, **sebbene**, **malgrado** and **per quanto** are followed by the **congiuntivo**: *Benché sia stanco, lavora ancora. Sebbene piova, usciamo. Per quanto sia difficile, ce la faremo.* **Anche se** is followed by the **indicative**: *Anche se piove, usciamo.* **Nonostante** and **malgrado** can be followed by a **noun**: *Nonostante il freddo, siamo usciti.*' },
          { t: 'table', caption: 'Concession', explain: ['head', 'col1'], head: ['Connector', 'Followed by', 'Example'], rows: [
            ['benché / sebbene', 'subjunctive', 'Benché sia stanco, lavora ancora.'],
            ['per quanto', 'subjunctive', 'Per quanto sia difficile, ce la faremo.'],
            ['anche se', 'indicative', 'Anche se piove, usciamo.'],
            ['nonostante / malgrado', 'a noun', 'Nonostante il freddo, siamo usciti.'],
            ['pur + gerundio', 'same subject', 'Pur essendo stanco, lavora ancora.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Never use the indicative after **benché** or **sebbene**. When the subject of both verbs is the same, you can shorten the sentence with **pur** and the gerundio: *Pur essendo stanco, lavora ancora.* **Nonostante** + *che* + congiuntivo is also possible: *Nonostante sia tardi, restiamo.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Benché sia** stanco, lavora ancora.', n: '*Benché* + congiuntivo.' },
            { s: '**Sebbene piova**, usciamo lo stesso.', n: '*Sebbene* + congiuntivo.' },
            { s: '**Per quanto sia** difficile, ce la faremo.', n: '*Per quanto* + congiuntivo.' },
            { s: '**Anche se piove**, usciamo lo stesso.', n: '*Anche se* + indicative.' },
            { s: '**Nonostante il freddo**, siamo usciti.', n: '*Nonostante* + noun.' },
          ] },
          { t: 'dialogue', title: 'Una gita', lines: [
            { who: 'Sara', s: 'Andiamo in montagna sabato?' },
            { who: 'Paolo', s: 'Benché le previsioni siano brutte, io vengo volentieri.' },
            { who: 'Sara', s: 'Anche se piove?' },
            { who: 'Paolo', s: 'Sì, sebbene non mi piaccia camminare sotto la pioggia, ci vengo.' },
            { who: 'Sara', s: 'Allora porto gli impermeabili.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Benché ___ stanco, lavora ancora. (lui, essere)', a: ['sia'], why: '*Benché* + congiuntivo: *sia*.' },
            { q: 'Sebbene ___ , usciamo. (piovere)', a: ['piova'], why: '*Sebbene* + congiuntivo: *piova*.' },
            { q: 'Per quanto ___ difficile, ce la faremo. (essere)', a: ['sia'], why: '*Per quanto* + congiuntivo.' },
            { q: 'Benché loro ___ poco tempo, aiutano tutti. (avere)', a: ['abbiano'], why: '*Benché* + congiuntivo: *abbiano*.' },
            { q: 'Sebbene noi ___ molto, siamo ancora in ritardo. (correre)', a: ['corriamo'], why: 'With *noi*, the congiuntivo is *corriamo*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Anche se oggi ___ , andiamo al mare.', o: ['piove', 'piova', 'pioverebbe'], why: '*Anche se* + indicative.' },
            { q: 'Benché ___ tardi, restiamo ancora un po’.', o: ['sia', 'è', 'sarebbe'], why: '*Benché* + congiuntivo.' },
            { q: '___ il freddo, siamo usciti.', o: ['Nonostante', 'Benché', 'Sebbene'], why: 'Before a noun: *nonostante*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with the connector in brackets.', items: [
            { q: 'È stanco. Lavora ancora.', cue: 'Benché', a: ['Benché sia stanco, lavora ancora.'], why: '*Benché* + congiuntivo.' },
            { q: 'Piove. Usciamo lo stesso.', cue: 'Sebbene', a: ['Sebbene piova, usciamo lo stesso.'], why: '*Sebbene* + congiuntivo.' },
            { q: 'È tardi. Restiamo ancora.', cue: 'Benché', a: ['Benché sia tardi, restiamo ancora.'], why: '*Benché* + congiuntivo.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Benché [è] stanco, lavora ancora.', a: ['sia'], why: '*Benché* + congiuntivo.' },
            { s: 'Sebbene [piove], usciamo.', a: ['piova'], why: '*Sebbene* + congiuntivo.' },
            { s: 'Anche se [sia] tardi, restiamo.', a: ['è'], why: '*Anche se* + indicative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'What follows the connector? Sort them.', explain: ['groups'], groups: ['Indicative', 'Subjunctive', 'Noun'], items: [
            { s: 'anche se', g: 0, why: '*Anche se* + indicative.' },
            { s: 'benché', g: 1, why: '*Benché* + congiuntivo.' },
            { s: 'sebbene', g: 1, why: '*Sebbene* + congiuntivo.' },
            { s: 'per quanto', g: 1, why: '*Per quanto* + congiuntivo.' },
            { s: 'nonostante il freddo', g: 2, why: '*Nonostante* + noun.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Benché sia stanco, lavora ancora.', why: '*Benché* + congiuntivo.' },
            { a: 'Anche se piove, usciamo lo stesso.', why: '*Anche se* + indicative.' },
            { a: 'Nonostante il freddo, siamo usciti.', why: '*Nonostante* + noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Affinché, purché, a meno che non',
      about: 'Express purpose and condition with the congiuntivo.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To say **for what purpose**, use **affinché** (or **perché**) + congiuntivo: *Te lo spiego affinché tu capisca.* To say **on one condition**, use **purché**, **a condizione che**, **a patto che** + congiuntivo: *Vengo purché non piova.* To say **unless**, use **a meno che non** + congiuntivo: *Partiamo domani, a meno che non nevichi.* To say **in case**, use **nel caso in cui** (or **qualora**, formal) + congiuntivo or condizionale: *Nel caso in cui tu abbia bisogno, chiamami.*' },
          { t: 'table', caption: 'Purpose and condition', explain: ['head', 'col1'], head: ['Connector', 'Meaning', 'Example'], rows: [
            ['affinché / perché', 'so that (purpose)', 'Te lo spiego affinché tu capisca.'],
            ['purché / a condizione che / a patto che', 'provided that', 'Vengo purché non piova.'],
            ['a meno che non', 'unless', 'Partiamo, a meno che non nevichi.'],
            ['nel caso in cui', 'in case', 'Nel caso in cui tu abbia bisogno, chiamami.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Perché** has two meanings. With the indicative it means *because*: *Resto perché sono stanco.* With the congiuntivo it means *so that*: *Parlo piano perché tu capisca.* In formal writing, prefer **affinché** for purpose. After **a meno che**, the **non** is a little word that does not make the sentence negative.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Te lo spiego **affinché tu capisca**.', n: 'Purpose.' },
            { s: 'Vengo **purché non piova**.', n: 'One condition.' },
            { s: 'Ti presto la macchina **a condizione che** tu la **restituisca** domani.', n: 'A condition.' },
            { s: 'Partiamo domani, **a meno che non nevichi**.', n: 'An exception.' },
            { s: '**Nel caso in cui** tu **abbia** bisogno, chiamami.', n: '*In case*.' },
          ] },
          { t: 'dialogue', title: 'Un picnic', lines: [
            { who: 'Giulia', s: 'Facciamo il picnic domenica?' },
            { who: 'Marco', s: 'Va bene, purché non piova.' },
            { who: 'Giulia', s: 'Partiamo presto, a meno che non nevichi in montagna.' },
            { who: 'Marco', s: 'Porto una coperta, nel caso in cui faccia freddo.' },
            { who: 'Giulia', s: 'Bene. Ti chiamo sabato, affinché tu sappia l’orario.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the congiuntivo.', items: [
            { q: 'Te lo spiego affinché tu ___. (capire)', a: ['capisca'], why: '*Capire* → *capisca*.' },
            { q: 'Vengo purché non ___. (piovere)', a: ['piova'], why: '*Piovere* → *piova*.' },
            { q: 'Partiamo domani, a meno che non ___. (nevicare)', a: ['nevichi'], why: '*Nevicare* → *nevichi*.' },
            { q: 'Nel caso in cui tu ___ bisogno, chiamami. (avere)', a: ['abbia'], why: '*Avere* → *abbia*.' },
            { q: 'Ti presto la macchina a condizione che tu la ___ domani. (restituire)', a: ['restituisca'], why: '*Restituire* → *restituisca*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right connector.', items: [
            { q: 'Parlo piano ___ tu capisca.', o: ['affinché', 'siccome', 'benché'], why: 'Purpose: *affinché*.' },
            { q: 'Vengo ___ non piova.', o: ['purché', 'benché', 'siccome'], why: 'One condition: *purché*.' },
            { q: 'Partiamo domani, ___ non nevichi.', o: ['a meno che', 'prima che', 'senza che'], why: '*A meno che non* = unless.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the connector.', items: [
            { q: 'Parlo piano. Voglio che tu capisca.', cue: 'Parlo piano', a: ['Parlo piano affinché tu capisca.'], why: '*Affinché* + congiuntivo.' },
            { q: 'Vengo. Però non deve piovere.', cue: 'Vengo', a: ['Vengo purché non piova.'], why: '*Purché* + congiuntivo.' },
            { q: 'Partiamo domani. Se nevica, non partiamo.', cue: 'Partiamo', a: ['Partiamo domani, a meno che non nevichi.'], why: '*A meno che non* + congiuntivo.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Vengo purché non [piove].', a: ['piova'], why: '*Purché* + congiuntivo.' },
            { s: 'Parlo piano affinché tu [capisci].', a: ['capisca'], why: '*Affinché* + congiuntivo.' },
            { s: 'Partiamo, a meno che non [nevica].', a: ['nevichi'], why: '*A meno che non* + congiuntivo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the connector with its meaning.', pairs: [
            ['affinché', 'so that'],
            ['purché', 'provided that'],
            ['a meno che non', 'unless'],
            ['nel caso in cui', 'in case'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Vengo purché non piova.', why: '*Purché* + congiuntivo.' },
            { a: 'Te lo spiego affinché tu capisca.', why: '*Affinché* + congiuntivo.' },
            { a: 'Partiamo domani a meno che non nevichi.', why: '*A meno che non* + congiuntivo.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Prima che, senza che, come se',
      about: 'Use the congiuntivo for time and manner, and the infinitive when the subject is the same.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'Several other conjunctions take the **congiuntivo**: **prima che** (before), **senza che** (without), **come se** (as if), **in modo che** (so that). But when the **subject is the same** in both clauses, use the **infinitive** with **prima di, senza, per, in modo da**: *Prima di uscire, chiudo la porta* (the same person), but *Prima che tu esca, chiudo la porta* (two people). **Dopo che** takes the indicative: *Dopo che sei uscito, ho chiamato.*' },
          { t: 'table', caption: 'Same subject or different subject', explain: ['head'], head: ['Same subject (infinitive)', 'Different subject (che + subjunctive)'], rows: [
            ['Prima di uscire, chiudo la porta.', 'Prima che tu esca, chiudo la porta.'],
            ['Se n’è andato senza parlare.', 'Se n’è andato senza che nessuno parlasse.'],
            ['Studio per capire.', 'Ti spiego affinché tu capisca.'],
            ['Mi alzo presto in modo da arrivare in tempo.', 'Ti sveglio in modo che tu arrivi in tempo.'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **come se**, use the congiuntivo imperfetto or trapassato: *Parla come se fosse il capo. Si comporta come se non avesse sentito.* Remember: **dopo che** + indicative, but **prima che** + congiuntivo.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Prima che tu parta**, voglio salutarti.', n: 'Two subjects: *prima che* + congiuntivo.' },
            { s: '**Prima di partire**, ho salutato tutti.', n: 'One subject: *prima di* + infinitive.' },
            { s: 'Se n’è andato **senza che nessuno lo vedesse**.', n: '*Senza che* + congiuntivo imperfetto.' },
            { s: 'Ti scrivo **in modo che tu sappia** tutto.', n: 'Purpose with *in modo che*.' },
            { s: 'Parla **come se fosse** il capo.', n: '*Come se* + congiuntivo imperfetto.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Same subject or different subject? Sort the phrases.', explain: ['groups'], groups: ['Same subject', 'Different subject'], items: [
            { s: 'prima di uscire', g: 0, why: '*Prima di* + infinitive: one subject.' },
            { s: 'prima che tu esca', g: 1, why: '*Prima che* + congiuntivo: two subjects.' },
            { s: 'senza parlare', g: 0, why: '*Senza* + infinitive: one subject.' },
            { s: 'senza che nessuno parli', g: 1, why: '*Senza che* + congiuntivo: two subjects.' },
            { s: 'per capire', g: 0, why: '*Per* + infinitive: one subject.' },
            { s: 'affinché tu capisca', g: 1, why: '*Affinché* + congiuntivo: two subjects.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word or verb.', items: [
            { q: 'Prima che tu ___ , voglio salutarti. (partire)', a: ['parta'], why: '*Prima che* + congiuntivo: *parta*.' },
            { q: 'Se n’è andato senza che nessuno lo ___ . (vedere)', a: ['vedesse'], why: '*Senza che* + congiuntivo imperfetto.' },
            { q: 'Parla come se ___ il capo. (essere)', a: ['fosse'], why: '*Come se* + *fosse*.' },
            { q: 'Ti scrivo in modo che tu ___ tutto. (sapere)', a: ['sappia'], why: '*In modo che* + congiuntivo: *sappia*.' },
            { q: 'Prima ___ uscire, chiudi la porta.', a: ['di'], why: 'Same subject: *prima di* + infinitive.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Prima ___ uscire, chiudi la porta.', o: ['di', 'che', 'da'], why: 'Same subject: *prima di* + infinitive.' },
            { q: 'Prima ___ tu esca, chiudi la porta.', o: ['che', 'di', 'da'], why: 'Different subject: *prima che* + congiuntivo.' },
            { q: 'Se n’è andato senza ___ nessuno se ne accorgesse.', o: ['che', 'di', 'a'], why: 'Two subjects: *senza che* + congiuntivo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the phrase in brackets.', items: [
            { q: 'Esco. Prima chiudo la porta.', cue: 'Prima di', a: ['Prima di uscire, chiudo la porta.'], why: 'One subject: *prima di* + infinitive.' },
            { q: 'Tu parti. Prima voglio salutarti.', cue: 'Prima che', a: ['Prima che tu parta, voglio salutarti.'], why: 'Two subjects: *prima che* + congiuntivo.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Prima che [parti], voglio salutarti.', a: ['parta'], why: '*Prima che* + congiuntivo.' },
            { s: 'Prima [che] uscire, chiudo la porta.', a: ['di'], why: 'One subject: *prima di* + infinitive.' },
            { s: 'Parla come se [è] il capo.', a: ['fosse'], why: '*Come se* + congiuntivo imperfetto.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Prima che tu parta, voglio salutarti.', why: '*Prima che* + congiuntivo.' },
            { a: 'Prima di partire, ho salutato tutti.', why: '*Prima di* + infinitive.' },
            { a: 'Parla come se fosse il capo.', why: '*Come se* + congiuntivo imperfetto.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un autobus ogni dieci minuti',
      about: 'Read an opinion piece on public transport.',
      art: 'cactus',
      spreads: [
        [
          { t: 'reading', title: 'I mezzi pubblici in città', md: 'Benché molti pensino che l’auto sia il mezzo più comodo, in città i mezzi pubblici possono essere la scelta migliore, purché funzionino bene. Un autobus che arriva in ritardo o che salta una corsa spinge le persone a riprendere la macchina, nonostante il traffico.\n\nAffinché più persone usino il trasporto pubblico, il comune dovrebbe aumentare le corse, a meno che non voglia continuare a pagare il costo del traffico. Prima che la situazione peggiori, servono scelte coraggiose: biglietti più semplici, corsie riservate e orari chiari.\n\nSenza che nessuno debba cambiare le proprie abitudini da un giorno all’altro, si può cominciare da una linea.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Molte persone pensano che l’auto sia il mezzo più comodo.', a: 't', why: '*Molti pensino che l’auto sia il mezzo più comodo.*' },
            { q: 'L’autore dice che i mezzi pubblici non servono a niente.', a: 'f', why: 'He says they can be the best choice.' },
            { q: 'L’autore propone biglietti più semplici.', a: 't', why: '*Biglietti più semplici, corsie riservate e orari chiari.*' },
            { q: 'Il comune ha già costruito una nuova linea.', a: 'ng', why: 'The text does not say so.' },
            { q: 'L’autore consiglia di cambiare tutto in un giorno.', a: 'f', why: '*Senza che nessuno debba cambiare le proprie abitudini da un giorno all’altro.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'A quale condizione i mezzi pubblici sono la scelta migliore?', o: ['Purché funzionino bene.', 'Purché costino poco.', 'Purché siano nuovi.'], why: '*Purché funzionino bene.*' },
            { q: 'Che cosa spinge le persone a riprendere la macchina?', o: ['Un autobus che arriva in ritardo.', 'Il prezzo del biglietto.', 'Il rumore.'], why: '*Un autobus che arriva in ritardo … spinge le persone a riprendere la macchina.*' },
            { q: 'Da dove si può cominciare?', o: ['Da una linea.', 'Da tutte le linee.', 'Dalle strade.'], why: '*Si può cominciare da una linea.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the congiuntivo.', items: [
            { s: 'Benché molti [pensino] che l’auto [sia] il mezzo più comodo, i mezzi pubblici possono essere la scelta migliore.', why: '*Pensino* and *sia* follow *benché* and *pensare che*.' },
            { s: 'Affinché più persone [usino] il trasporto pubblico, il comune dovrebbe aumentare le corse.', why: '*Usino* follows *affinché*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word or verb.', items: [
            { q: 'Prima che la situazione ___ , servono scelte coraggiose. (peggiorare)', a: ['peggiori'], why: '*Prima che* + congiuntivo.' },
            { q: 'I mezzi pubblici sono la scelta migliore, ___ funzionino bene.', a: ['purché'], why: '*Purché* = provided that.' },
            { q: 'Affinché più persone ___ il trasporto pubblico, il comune deve aumentare le corse. (usare)', a: ['usino'], why: '*Affinché* + congiuntivo.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Benché molti pensino che l’auto sia comoda, i mezzi pubblici servono.', why: '*Benché* + congiuntivo.' },
            { a: 'Si può cominciare da una sola linea.', why: 'A simple conclusion.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Benché ___ stanco, lavora ancora.', o: ['sia', 'è', 'sarebbe'], why: '*Benché* + congiuntivo.' },
      { q: 'Parlo piano ___ tu capisca.', o: ['affinché', 'siccome', 'benché'], why: 'Purpose: *affinché*.' },
      { q: 'Partiamo domani, ___ non nevichi.', o: ['a meno che', 'prima che', 'senza che'], why: '*A meno che non* = unless.' },
      { q: 'Anche se oggi ___ , andiamo al mare.', o: ['piove', 'piova', 'pioverebbe'], why: '*Anche se* + indicative.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
      { q: 'Vengo purché non ___. (piovere)', a: ['piova'], why: '*Purché* + congiuntivo.' },
      { q: 'Prima che tu ___ , voglio salutarti. (partire)', a: ['parta'], why: '*Prima che* + congiuntivo.' },
      { q: 'Parla come se ___ il capo. (essere)', a: ['fosse'], why: '*Come se* + congiuntivo imperfetto.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the connector with its meaning.', pairs: [
      ['affinché', 'so that'],
      ['purché', 'provided that'],
      ['a meno che non', 'unless'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Join the two sentences with the connector in brackets.', items: [
      { q: 'Piove. Usciamo lo stesso.', cue: 'Sebbene', a: ['Sebbene piova, usciamo lo stesso.'], why: '*Sebbene* + congiuntivo.' },
      { q: 'Esco. Prima chiudo la porta.', cue: 'Prima di', a: ['Prima di uscire, chiudo la porta.'], why: 'One subject: *prima di* + infinitive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Benché [è] stanco, lavora ancora.', a: ['sia'], why: '*Benché* + congiuntivo.' },
      { s: 'Parlo piano affinché tu [capisci].', a: ['capisca'], why: '*Affinché* + congiuntivo.' },
    ] },
  ],
};
