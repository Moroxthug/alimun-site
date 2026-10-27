// Italian B1, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Society and the environment',
  goal: 'Discuss everyday issues, give reasons and write a short argument. Learn the gerundio and stare + gerundio, prima di, dopo and senza with the infinitive, the superlative, and connectors like anche se, invece di, quindi and però.',
  art: 'sun',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['gerundio', 'stare + gerundio', 'superlative', 'connectors', 'environment', 'city life'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Sto leggendo',
      about: 'Form the gerundio and say what you are doing now.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'The **gerundio** ends in **-ando** for verbs in **-are** and in **-endo** for verbs in **-ere** and **-ire**: *parlando, prendendo, dormendo*. Use it with **stare** to say what is happening **at this moment**: *Sto leggendo il giornale.* In the past, *stare* in the imperfetto says what was in progress: *Stavo uscendo quando ha suonato il telefono.* The gerundio also says **how** or **while**: *Camminando, ho pensato a te.* The gerundio never changes, but pronouns attach to it: *Sto leggendolo* is also possible, though *Lo sto leggendo* is more common.' },
          { t: 'table', caption: 'The gerundio', explain: ['head'], head: ['Infinitive', 'Gerundio', 'stare + gerundio'], rows: [
            ['parlare', 'parlando', 'sto parlando'],
            ['prendere', 'prendendo', 'sto prendendo'],
            ['dormire', 'dormendo', 'sto dormendo'],
            ['fare', 'facendo', 'sto facendo'],
            ['dire', 'dicendo', 'sto dicendo'],
            ['bere', 'bevendo', 'sto bevendo'],
          ] },
          { t: 'tip', art: 'owl', md: '*Stare* + gerundio is for an action in progress, not for a habit: *Sto studiando* (now) but *Studio ogni sera* (habit). The gerundio has no ending for person or number, so the subject comes from *stare*: *sto, stai, sta, stiamo, state, stanno.* *Fare, dire, bere* use the old stem: **facendo, dicendo, bevendo**.' },
        ],
        [
          { t: 'text', md: 'Three words are followed by the **infinitive**: **prima di** (before), **dopo** (after, with *aver* or *essere* + participle) and **senza** (without). Also **invece di** (instead of): *Prima di uscire, ho chiuso la porta. Dopo aver mangiato, siamo usciti. È uscito senza dire niente. Invece di restare a casa, sono uscito.*' },
          { t: 'examples', items: [
            { s: '**Sto leggendo** il giornale.', n: 'Now: *sto* + gerundio.' },
            { s: '**Stavamo mangiando** quando è arrivato.', n: 'In progress in the past.' },
            { s: '**Prima di uscire**, ho chiuso la porta.', n: '*Prima di* + infinitive.' },
            { s: '**Dopo aver mangiato**, siamo usciti.', n: '*Dopo* + *aver* + participle.' },
            { s: 'È uscito **senza dire** niente.', n: '*Senza* + infinitive.' },
          ] },
          { t: 'dialogue', title: 'Che cosa stai facendo?', lines: [
            { who: 'Giulia', s: 'Pronto, Marco? Che cosa stai facendo?' },
            { who: 'Marco', s: 'Sto leggendo il giornale. E tu?' },
            { who: 'Giulia', s: 'Stavo uscendo, ma ho visto che pioveva.' },
            { who: 'Marco', s: 'Dopo aver letto la notizia, usciamo insieme?' },
            { who: 'Giulia', s: 'Va bene. Ti aspetto senza fretta.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write stare + gerundio of leggere.', verb: 'leggere', tense: 'stare + gerundio', rows: [
            ['io', 'sto leggendo'],
            ['tu', 'stai leggendo'],
            ['lui / lei', 'sta leggendo'],
            ['noi', 'stiamo leggendo'],
            ['voi', 'state leggendo'],
            ['loro', 'stanno leggendo'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the gerundio.', items: [
            { q: 'Che cosa stai ___? (fare)', a: ['facendo'], why: '*Fare* → *facendo*.' },
            { q: 'Sto ___ il giornale. (leggere)', a: ['leggendo'], why: '*Leggere* → *leggendo*.' },
            { q: 'Stavamo ___ quando è arrivato. (mangiare)', a: ['mangiando'], why: '*Mangiare* → *mangiando*.' },
            { q: 'Stanno ___ la cena. (preparare)', a: ['preparando'], why: '*Preparare* → *preparando*.' },
            { q: 'Stavo ___ una mail quando è suonato il telefono. (scrivere)', a: ['scrivendo'], why: '*Scrivere* → *scrivendo*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say that it is happening now.', items: [
            { q: 'Leggo il giornale.', a: ['Sto leggendo il giornale.'], why: '*Leggo* → *sto leggendo*.' },
            { q: 'Cuciniamo la cena.', a: ['Stiamo cucinando la cena.'], why: '*Cuciniamo* → *stiamo cucinando*.' },
            { q: 'Marco studia.', a: ['Marco sta studiando.'], why: '*Studia* → *sta studiando*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Prima di ___ ho chiuso la porta. (uscire)', a: ['uscire'], why: '*Prima di* + infinitive.' },
            { q: 'Dopo ___ mangiato, siamo usciti. (avere)', a: ['aver', 'avere'], why: '*Dopo aver mangiato*.' },
            { q: 'È uscito ___ dire niente.', a: ['senza'], why: '*Senza* + infinitive.' },
            { q: 'Invece ___ restare a casa, sono uscito.', a: ['di'], why: '*Invece di* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Sto [leggo] il giornale.', a: ['leggendo'], why: '*Sto* + gerundio: *leggendo*.' },
            { s: 'Stavamo [mangiare] quando è arrivato.', a: ['mangiando'], why: '*Stavamo* + gerundio.' },
            { s: '[Dopo] mangiato, siamo usciti.', a: ['Dopo aver'], why: '*Dopo aver mangiato*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Sto leggendo il giornale.', why: '*Sto* + gerundio.' },
            { a: 'Prima di uscire ho chiuso la porta.', why: '*Prima di* + infinitive.' },
            { a: 'Dopo aver mangiato siamo usciti.', why: '*Dopo aver* + participle.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Il più bello, bellissimo',
      about: 'Compare with the superlative and link ideas with connectors.',
      art: 'monster',
      spreads: [
        [
          { t: 'text', md: 'The **relative superlative** says that something is the best, biggest or smallest of a group: **il più / la più / i più / le più** + adjective: *Questa è la strada più stretta della città.* The **absolute superlative** says *very*: add **-issimo** to the adjective (without the final vowel) or use **molto**: *bello → bellissimo, lungo → lunghissimo, antico → antichissimo*. It agrees: *bellissima, bellissimi, bellissime.* Irregular: **buono → ottimo, cattivo → pessimo, grande → massimo.**' },
          { t: 'table', caption: 'The absolute superlative', explain: ['head'], head: ['Adjective', 'Superlative', 'Agreement'], rows: [
            ['bello', 'bellissimo', 'bellissima, bellissimi, bellissime'],
            ['lungo', 'lunghissimo', 'lunghissima, lunghissimi, lunghissime'],
            ['antico', 'antichissimo', 'antichissima, antichissimi, antichissime'],
            ['buono', 'ottimo / buonissimo', 'ottima, ottimi, ottime'],
            ['alto', 'altissimo', 'altissima, altissimi, altissime'],
          ] },
          { t: 'tip', art: 'owl', md: 'After a relative superlative, Italian often uses the **congiuntivo** if you give an opinion: *È il film più bello che abbia visto.* Compare *Questa è la strada più stretta* (a fact) with *È il libro più bello che abbia letto* (a personal view). Adjectives in **-co** and **-go** add **h** before *-issimo*: *lunghissimo, antichissimo.*' },
        ],
        [
          { t: 'table', caption: 'Connectors', explain: ['head', 'col1'], head: ['Connector', 'Use', 'Example'], rows: [
            ['anche se', 'even if, although; indicative', 'Anche se piove, usciamo.'],
            ['invece di + infinitive', 'instead of', 'Invece di prendere l’auto, vado a piedi.'],
            ['quindi', 'so, therefore', 'Piove, quindi resto a casa.'],
            ['però', 'but', 'Mi piace la città, però è rumorosa.'],
            ['siccome', 'since, as (reason, at the start)', 'Siccome piove, resto a casa.'],
            ['per + infinitive', 'in order to', 'Uso la bici per ridurre l’inquinamento.'],
          ] },
          { t: 'dialogue', title: 'La mia città', lines: [
            { who: 'Sara', s: 'Qual è la cosa più bella della tua città?' },
            { who: 'Paolo', s: 'Il centro storico: è bellissimo. Anche se è piccolo, ha molti parchi.' },
            { who: 'Sara', s: 'E il traffico?' },
            { who: 'Paolo', s: 'È il problema più grande. Invece di prendere la macchina, molti usano la bicicletta.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the superlative.', items: [
            { q: 'Questa è la strada ___ stretta della città. (più)', a: ['più'], why: 'The relative superlative: *la più stretta*.' },
            { q: 'Il parco è molto bello: è ___.', a: ['bellissimo'], why: '*Bello* → *bellissimo*.' },
            { q: 'Le montagne sono molto alte: sono ___.', a: ['altissime'], why: 'Feminine plural: *altissime*.' },
            { q: 'La strada è molto lunga: è ___.', a: ['lunghissima'], why: 'With *h*: *lunghissima*.' },
            { q: 'La casa è molto antica: è ___.', a: ['antichissima'], why: 'With *h*: *antichissima*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right connector.', items: [
            { q: '___ piove, usciamo lo stesso.', o: ['Anche se', 'Quindi', 'Invece di'], why: '*Anche se* = even if.' },
            { q: '___ prendere l’auto, vado a piedi.', o: ['Invece di', 'Anche se', 'Quindi'], why: '*Invece di* + infinitive.' },
            { q: 'Piove, ___ resto a casa.', o: ['quindi', 'anche se', 'senza'], why: '*Quindi* = so.' },
            { q: 'Mi piace la città, ___ è troppo rumorosa.', o: ['però', 'quindi', 'siccome'], why: '*Però* = but.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Use the absolute superlative.', items: [
            { q: 'È molto bello.', a: ['È bellissimo.'], why: '*Molto bello* → *bellissimo*.' },
            { q: 'La strada è molto lunga.', a: ['La strada è lunghissima.'], why: '*Lunga* → *lunghissima*.' },
            { q: 'La torta è molto buona.', a: ['La torta è buonissima.', 'La torta è ottima.'], why: '*Buona* → *buonissima* or *ottima*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'La torta è [buonissimo].', a: ['buonissima'], why: 'It agrees with *la torta*.' },
            { s: 'Le strade sono [lunghissimi].', a: ['lunghissime'], why: 'Feminine plural: *lunghissime*.' },
            { s: 'Invece [a] prendere la macchina, vado a piedi.', a: ['di'], why: '*Invece di* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Questa è la strada più stretta della città.', why: 'The relative superlative: *la più stretta di*.' },
            { a: 'Anche se piove, usciamo lo stesso.', why: '*Anche se* + indicative.' },
            { a: 'Invece di prendere la macchina, vado a piedi.', why: '*Invece di* + infinitive.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the connector with its meaning.', pairs: [
            ['anche se', 'even if'],
            ['quindi', 'so'],
            ['però', 'but'],
            ['siccome', 'since, as'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Città e ambiente',
      about: 'Talk about city life and the environment and build a short argument.',
      art: 'cactus',
      spreads: [
        [
          { t: 'table', caption: 'City and environment', explain: ['head', 'col1'], head: ['Word', 'Meaning'], rows: [
            ['il traffico', 'traffic'],
            ['l’inquinamento', 'pollution'],
            ['i mezzi pubblici', 'public transport'],
            ['la pista ciclabile', 'bike lane'],
            ['i rifiuti', 'rubbish'],
            ['la raccolta differenziata', 'separate waste collection'],
            ['riciclare', 'to recycle'],
            ['ridurre', 'to reduce'],
            ['l’ambiente', 'the environment'],
            ['il rumore', 'noise'],
          ] },
          { t: 'text', md: 'A short **argument** has four steps. Give your **opinion**: *Secondo me, il comune dovrebbe costruire più piste ciclabili.* Give a **reason** with *perché*: *perché il traffico è un problema grande.* Give an **example**: *Per esempio, molte persone vanno in macchina anche per brevi distanze.* End with a **conclusion**: *Quindi, con più piste ciclabili, ci sarebbe meno inquinamento.* You can answer someone with *Sono d’accordo*, *Non sono d’accordo*, *Hai ragione, però …* or *Dipende.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Secondo me**, il comune dovrebbe costruire più piste ciclabili.', n: 'An opinion.' },
            { s: 'Il traffico è un problema grande, **perché** inquina e fa rumore.', n: 'A reason.' },
            { s: '**Per esempio**, molte persone vanno in macchina anche per brevi distanze.', n: 'An example.' },
            { s: '**Quindi**, con più piste ciclabili, ci sarebbe meno inquinamento.', n: 'A conclusion.' },
            { s: '**Anche se** costano, le piste ciclabili sono un buon investimento.', n: 'A contrast.' },
          ] },
          { t: 'dialogue', title: 'Riciclare', lines: [
            { who: 'Giulia', s: 'Penso che riciclare sia importante per l’ambiente.' },
            { who: 'Marco', s: 'Sono d’accordo. Però non tutti hanno lo spazio per separare i rifiuti.' },
            { who: 'Giulia', s: 'Hai ragione, ma basta un piccolo spazio. Se tutti lo facessero, avremmo meno rifiuti.' },
            { who: 'Marco', s: 'Vero. Cominciamo noi, quindi!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['il traffico', 'traffic'],
            ['l’inquinamento', 'pollution'],
            ['la pista ciclabile', 'bike lane'],
            ['i rifiuti', 'rubbish'],
            ['ridurre', 'to reduce'],
            ['il rumore', 'noise'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Il traffico è un problema, ___ inquina e fa rumore.', a: ['perché'], why: '*Perché* gives the reason.' },
            { q: '___ esempio, molte persone vanno in macchina.', a: ['Per'], why: '*Per esempio*.' },
            { q: 'Con più piste ciclabili ci ___ meno inquinamento. (essere, condizionale)', a: ['sarebbe'], why: 'A hypothetical result: *ci sarebbe*.' },
            { q: 'Penso che riciclare ___ importante. (essere)', a: ['sia'], why: '*Penso che* + congiuntivo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Choose the word for each gap.', extra: ['senza', 'invece'], items: [
            { q: 'Il traffico è un problema, ___ è meglio usare i mezzi pubblici.', a: 'quindi', why: '*Quindi* = therefore.' },
            { q: 'Mi piace la città, ___ è rumorosa.', a: 'però', why: '*Però* = but.' },
            { q: '___ piove, resto a casa.', a: 'siccome', why: '*Siccome* = since.' },
            { q: 'Vado a piedi ___ ridurre l’inquinamento.', a: 'per', why: '*Per* + infinitive = in order to.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Secondo me il comune dovrebbe costruire più piste ciclabili.', why: 'An opinion with the condizionale.' },
            { a: 'Penso che riciclare sia importante per l’ambiente.', why: '*Penso che* + congiuntivo.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Una lettera al giornale',
      about: 'Read a letter to the editor about a bike lane.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'La nuova pista ciclabile', md: 'Gentile direttore,\n\nsono un lettore del vostro giornale e abito in centro. Le scrivo a proposito della nuova pista ciclabile di via dei Tigli. Penso che sia un’ottima idea, perché il traffico in città è diventato insopportabile. Andando in bicicletta, si arriva al lavoro più in fretta e si respira meglio. Tuttavia, mi dispiace che la pista sia così stretta e che non ci siano posti per parcheggiare le biciclette. Se la pista fosse più larga, più persone la userebbero.\n\nChiedo al comune di intervenire presto e senza dimenticare chi va a piedi.\n\nCordiali saluti\nLuca Ferri' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Il lettore abita in centro.', a: 't', why: '*Abito in centro.*' },
            { q: 'Pensa che la pista ciclabile sia una cattiva idea.', a: 'f', why: 'He thinks it is an excellent idea: *un’ottima idea*.' },
            { q: 'La pista è troppo stretta.', a: 't', why: '*La pista sia così stretta.*' },
            { q: 'Il lettore va al lavoro in bicicletta.', a: 'ng', why: 'He says cycling is faster, but not that he does it.' },
            { q: 'Chiede al comune di non dimenticare chi va a piedi.', a: 't', why: '*Senza dimenticare chi va a piedi.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Perché il lettore pensa che sia un’ottima idea?', o: ['Il traffico è insopportabile.', 'La pista è nuova.', 'Costa poco.'], why: '*Perché il traffico in città è diventato insopportabile.*' },
            { q: 'Che cosa manca, secondo il lettore?', o: ['Posti per parcheggiare le biciclette.', 'Una pista più corta.', 'Più auto.'], why: '*Non ci siano posti per parcheggiare le biciclette.*' },
            { q: 'Che cosa succederebbe con una pista più larga?', o: ['Più persone la userebbero.', 'Ci sarebbe più traffico.', 'La pista costerebbe meno.'], why: '*Se la pista fosse più larga, più persone la userebbero.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the gerundio and the connector.', items: [
            { s: '[Andando] in bicicletta, si arriva al lavoro più in fretta, [tuttavia] la pista è stretta.', why: '*Andando* is a gerundio; *tuttavia* is a formal connector for *però*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Penso che sia un’ottima idea, ___ il traffico è insopportabile.', a: ['perché'], why: '*Perché* gives the reason.' },
            { q: 'Mi dispiace che la pista ___ così stretta. (essere)', a: ['sia'], why: '*Mi dispiace che* + congiuntivo.' },
            { q: 'Se la pista fosse più larga, più persone la ___. (usare)', a: ['userebbero'], why: '*Se* + congiuntivo imperfetto, then the condizionale.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Penso che sia un’ottima idea.', why: '*Penso che* + congiuntivo.' },
            { a: 'Andando in bicicletta si arriva più in fretta.', why: '*Andando* is the gerundio.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Che cosa stai ___?', o: ['facendo', 'fare', 'fatto'], why: '*Stai* + gerundio: *facendo*.' },
      { q: '___ piove, usciamo lo stesso.', o: ['Anche se', 'Quindi', 'Invece di'], why: '*Anche se* = even if.' },
      { q: 'Le montagne sono molto alte: sono ___.', o: ['altissime', 'altissimi', 'altissima'], why: 'Feminine plural: *altissime*.' },
      { q: 'Sto ___ il giornale.', o: ['leggendo', 'leggere', 'letto'], why: '*Sto* + gerundio: *leggendo*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Stavamo ___ quando è arrivato. (mangiare)', a: ['mangiando'], why: '*Stavamo* + gerundio.' },
      { q: 'Invece ___ prendere l’auto, vado a piedi.', a: ['di'], why: '*Invece di* + infinitive.' },
      { q: 'La strada è molto lunga: è ___.', a: ['lunghissima'], why: 'With *h*: *lunghissima*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['il traffico', 'traffic'],
      ['l’inquinamento', 'pollution'],
      ['la pista ciclabile', 'bike lane'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence.', items: [
      { q: 'Leggo il giornale.', a: ['Sto leggendo il giornale.'], why: '*Leggo* → *sto leggendo*.' },
      { q: 'La torta è molto buona.', a: ['La torta è buonissima.', 'La torta è ottima.'], why: '*Buona* → *buonissima* or *ottima*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Sto [leggo] il giornale.', a: ['leggendo'], why: '*Sto* + gerundio: *leggendo*.' },
      { s: 'Le strade sono [lunghissimi].', a: ['lunghissime'], why: 'Feminine plural: *lunghissime*.' },
    ] },
  ],
};
