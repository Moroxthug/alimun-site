// Italian C2, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Academic and critical writing',
  goal: 'Take a measured, evidence-based stance in academic writing. Learn hedging and boosting, nominal style and reporting verbs, and critical evaluation with signposting.',
  art: 'owl',
  tags: { skills: ['writing', 'reading', 'vocabulary'], topics: ['hedging', 'boosting', 'reporting verbs', 'nominal style', 'critical evaluation', 'signposting'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'A quanto pare, potrebbe, indubbiamente',
      about: 'Hedge and boost claims to show exactly how sure you are.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Academic writers rarely say that something is simply true. They show **how sure** they are. **Hedges** make a claim less certain: *a quanto pare, pare che, tende a, in una certa misura, presumibilmente, potrebbe, sembra suggerire*. **Boosters** make it stronger: *senza dubbio, indubbiamente, è evidente che, a tutti gli effetti*. The **conditional** is a classic hedge in Italian: *I dati potrebbero confermare questa ipotesi.* **Presumibilmente** and **a quanto pare** show doubt: *La riunione era, a quanto pare, privata.*' },
          { t: 'table', caption: 'Hedges and boosters', explain: ['head', 'col0'], head: ['Function', 'Examples', 'Sample sentence'], rows: [
            ['hedge: possibility', 'potrebbe, sembra suggerire, pare che', 'I dati potrebbero confermare questa tesi.'],
            ['hedge: frequency or degree', 'tende a, in una certa misura', 'I prezzi tendono a salire in estate.'],
            ['hedge: probability', 'a quanto pare, presumibilmente', 'A quanto pare, è partito.'],
            ['hedge: doubt about truth', 'a quanto pare, presumibilmente', 'La visita era presumibilmente privata.'],
            ['booster', 'senza dubbio, indubbiamente, è evidente che', 'I risultati sono indubbiamente significativi.'],
          ] },
        ],
        [
          { t: 'text', md: 'Too many hedges make you sound unsure; too many boosters make you sound arrogant. A strong paragraph balances them. Weak: *È indubbio che tutti gli studenti preferiscono le lezioni online.* Measured: *Il sondaggio suggerisce che molti studenti preferiscono le lezioni online, anche se ciò potrebbe variare secondo la disciplina.* Notice **suggerisce**, **molti** and **potrebbe**: three small hedges that make the claim defensible.' },
          { t: 'tip', art: 'owl', md: 'Be careful with absolute words: *tutti, sempre, mai, dimostra, impossibile*. They are almost always too strong in academic writing. Replace them: *tutti → la maggior parte / molti*; *sempre → spesso / tende a*; *dimostra → suggerisce / indica*.' },
          { t: 'ex', kind: 'transform', h: 'Make the claim more cautious, using the word given.', items: [
            { q: 'I social media causano ansia negli adolescenti.', cue: 'possono', a: ['I social media possono causare ansia negli adolescenti.'], why: 'The hedge *possono* reduces certainty.' },
            { q: 'Lo studio dimostra che lo sport migliora la memoria.', cue: 'suggerisce', a: ['Lo studio suggerisce che lo sport migliora la memoria.'], why: '*Suggerisce* is weaker than *dimostra*.' },
            { q: 'Tutti i giovani preferiscono i messaggi di testo.', cue: 'tendono', a: ['I giovani tendono a preferire i messaggi di testo.'], why: '*Tendere a* hedges frequency.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
            { q: 'La legge è stata ___ introdotta per proteggere i lavoratori, ma i critici vedono un vantaggio per i datori di lavoro.', o: ['presumibilmente', 'indubbiamente', 'senza dubbio'], why: '*Presumibilmente*: as claimed, but perhaps not true.' },
            { q: 'Le prove vanno ___ a favore della nuova cura: tutti e quattro gli studi concordano.', o: ['chiaramente', 'presumibilmente', 'a quanto pare'], why: 'A strong booster fits strong evidence.' },
            { q: 'Questo è ___ il romanzo più influente del decennio, anche se qualcuno non sarebbe d’accordo.', o: ['probabilmente', 'indubbiamente', 'senza dubbio'], why: '*Probabilmente* hedges an opinion.' },
            { q: '___ che i dati confermino questa ipotesi.', o: ['Pare', 'È indubbio', 'È dimostrato'], why: '*Pare che* is a hedge.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Hedge or booster?', groups: ['hedge', 'booster'], explain: ['groups'], items: [
            { s: 'tende a', g: 0, why: 'A hedge for frequency.' },
            { s: 'indubbiamente', g: 1, why: 'A booster.' },
            { s: 'pare che', g: 0, why: 'A hedge.' },
            { s: 'è evidente che', g: 1, why: 'A booster.' },
            { s: 'in una certa misura', g: 0, why: 'A hedge for degree.' },
            { s: 'senza dubbio', g: 1, why: 'A booster.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Sostenere, obiettare, ammettere',
      about: 'Use nominal style and precise reporting verbs.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Academic Italian packs information into **noun phrases**. Instead of *Sempre più persone lavorano da casa, e questo è importante*, a writer might say *il numero crescente di persone che lavorano da casa* or *la diffusione del lavoro da remoto*. Useful frames: *la portata di…*, *un numero crescente di…*, *l’assenza di…*, *le implicazioni di…*, *un insieme di indizi*. The noun phrase can be the subject: *Un insieme di indizi suggerisce che…*' },
          { t: 'examples', items: [
            { s: '**La portata** dell’effetto degli schermi sul sonno resta incerta.', n: 'A noun phrase as subject, then *resta incerta*.' },
            { s: '**Un numero crescente** di studi suggerisce che il bilinguismo favorisce la concentrazione.', n: 'Impersonal and academic.' },
            { s: '**L’assenza** di finanziamenti ha rallentato il progetto.', n: 'A noun phrase replacing *non ci sono finanziamenti*.' },
          ] },
        ],
        [
          { t: 'text', md: 'To refer to other writers, choose a **reporting verb** that shows their stance. **Affermare**, **rilevare** and **indicare** are neutral. **Sostenere** and **mantenere** show a firm position. **Avanzare** means *put forward* an idea. **Ammettere** means *admit reluctantly*. **Obiettare**, **contestare** and **confutare** show disagreement. **Asserire** is strong and may sound forceful. **Pretendere** is a **false friend**: it means *to demand*, not *to pretend* (*fingere*). Use the **present** for what an author says and the **passato prossimo** for what a study did.' },
          { t: 'table', caption: 'Reporting verbs', explain: ['head', 'col0'], head: ['Verb', 'What it shows', 'Example'], rows: [
            ['affermare / rilevare', 'neutral', 'L’autore rileva che le città devono ridurre il traffico.'],
            ['sostenere / mantenere', 'firm position', 'Lei sostiene che questa politica è fallita.'],
            ['avanzare', 'puts forward an idea', 'Questa teoria avanza che la memoria sia ricostruita.'],
            ['ammettere', 'admits reluctantly', 'L’autrice ammette che il campione era piccolo.'],
            ['obiettare / contestare', 'disagrees', 'Diversi specialisti contestano queste cifre.'],
            ['pretendere', 'demands (false friend of to pretend)', 'Pretende di avere ragione.'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Use **pretendere** with care: *Pretende di avere ragione* means *he demands to be right* or *he claims he is right* (with a sense of arrogance). The Italian for *to pretend* is **fingere**: *Finge di dormire.* In academic writing, **affermare** and **rilevare** are the safest choices when you are not sure of an author’s strength of feeling.' },
          { t: 'ex', kind: 'choice', h: 'Choose the best reporting verb.', items: [
            { q: 'L’autrice ___ che il campione era troppo piccolo per trarre conclusioni solide.', o: ['ammette', 'pretende', 'contesta'], why: '*Ammettere*: admit reluctantly, against the writer’s own case.' },
            { q: 'Questa teoria ___ che il linguaggio si apprenda per imitazione.', o: ['avanza', 'ammette', 'contesta'], why: '*Avanzare*: put forward.' },
            { q: 'Diversi specialisti ___ l’esattezza delle cifre.', o: ['contestano', 'avanzano', 'mantengono'], why: '*Contestare*: challenge.' },
            { q: 'Lui ___ di dormire per non rispondere.', o: ['finge', 'pretende', 'ammette'], why: '*Fingere* = to pretend.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with a noun phrase, starting with the words given.', items: [
            { q: 'Sempre più persone vanno al lavoro in bicicletta, e questo è importante.', cue: 'Il numero crescente', a: ['Il numero crescente di persone che vanno al lavoro in bicicletta è importante.'], why: 'A noun phrase as subject.' },
            { q: 'Non ci sono abbastanza finanziamenti, quindi il progetto ha rallentato.', cue: 'La mancanza', a: ['La mancanza di finanziamenti ha rallentato il progetto.'], why: '*La mancanza di* + noun.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'Un ___ di indizi suggerisce che il sonno influisce sulla memoria.', a: ['insieme'], why: '*Un insieme di indizi*.' },
            { q: 'La ___ dell’effetto degli schermi sul sonno resta incerta.', a: ['portata'], why: '*La portata di*.' },
            { q: 'Il giornale ___ che il ministro abbia mentito, senza prove.', a: ['sostiene', 'afferma'], why: 'A reporting verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Punti di forza e limiti',
      about: 'Evaluate a piece of research and signpost your argument.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'A critical writer does not only describe; they **evaluate**. For any study, ask: what is its **punto di forza** (strength), and what are its **limiti**? Typical strengths: *un campione ampio e vario, un metodo chiaro, risultati che concordano con altri studi*. Typical limits: *un campione ridotto o omogeneo, un periodo breve, dati autodichiarati, una conclusione che va oltre i dati*. Useful phrases: *Uno dei punti di forza dello studio è…*, *Un limite rilevante è che…*, *Questi risultati non possono essere generalizzati a…*.' },
          { t: 'examples', items: [
            { s: '**Uno dei punti di forza** dello studio è il campione ampio e vario.', n: 'A positive evaluation.' },
            { s: '**Un limite rilevante** è che i dati sono autodichiarati.', n: 'A negative evaluation.' },
            { s: 'Questi risultati **non possono essere generalizzati** agli anziani.', n: 'The sample did not include them.' },
          ] },
        ],
        [
          { t: 'text', md: '**Signposting** tells the reader where the argument is going. To contrast: *mentre*, *invece*, *al contrario*. To draw a conclusion: *ne consegue che*, *pertanto*, *va rilevato che*. To add: *inoltre*, *altresì*. To concede and then argue: *sebbene… tuttavia…*. **Sebbene** means *although* and takes the **subjunctive**: *Sebbene il campione fosse piccolo, la tendenza è chiara.* These words are the grammar of an argument; without them, a paragraph is a list of facts.' },
          { t: 'table', caption: 'Signposting', explain: ['head', 'col0'], head: ['Function', 'Phrases', 'Example'], rows: [
            ['contrast', 'mentre, invece, al contrario', 'Il primo studio ha trovato un legame, mentre il secondo non ne ha trovato.'],
            ['conclusion', 'ne consegue che, pertanto', 'Pertanto la politica va rivista.'],
            ['addition', 'inoltre, altresì', 'Inoltre il campione era ridotto.'],
            ['concession', 'sebbene… tuttavia…', 'Sebbene il campione fosse piccolo, la tendenza è chiara.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Strength or limit?', groups: ['strength', 'limit'], explain: ['groups'], items: [
            { s: 'Il campione comprendeva 5 000 partecipanti di dodici paesi.', g: 0, why: 'A large and varied sample.' },
            { s: 'Tutti i partecipanti erano studenti.', g: 1, why: 'A narrow sample.' },
            { s: 'I risultati concordano con quelli di tre studi precedenti.', g: 0, why: 'Consistency with earlier research.' },
            { s: 'Lo studio è durato solo due settimane.', g: 1, why: 'A short time period.' },
            { s: 'I dati provengono da questionari compilati dai partecipanti stessi.', g: 1, why: 'Self-reporting can be unreliable.' },
            { s: 'I ricercatori hanno descritto il loro metodo in dettaglio.', g: 0, why: 'A clear method.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best signpost.', items: [
            { q: 'Il primo studio ha trovato un legame netto; ___, il secondo non ne ha trovato nessuno.', o: ['invece', 'inoltre', 'pertanto'], why: 'Contrast between the studies.' },
            { q: '___ il campione fosse piccolo, la tendenza è chiara.', o: ['Sebbene', 'Inoltre', 'Pertanto'], why: '*Sebbene* concedes a point.' },
            { q: 'I dati provengono da due paesi; ___, i risultati potrebbero non valere altrove.', o: ['pertanto', 'invece', 'mentre'], why: 'A logical conclusion.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the sentences with the signpost given.', items: [
            { q: 'Il primo studio ha trovato un legame. Il secondo non ne ha trovato.', cue: 'mentre', a: ['Il primo studio ha trovato un legame, mentre il secondo non ne ha trovato.', 'Il primo studio ha trovato un legame mentre il secondo non ne ha trovato.'], why: '*Mentre* links two contrasting clauses.' },
            { q: 'Il campione era piccolo. La tendenza era chiara.', cue: 'Sebbene', a: ['Sebbene il campione fosse piccolo, la tendenza era chiara.'], why: '*Sebbene* + subjunctive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Il lavoro da casa: che cosa sappiamo?',
      about: 'Read an extract from a literature review and identify stance, hedging and evaluation.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Il lavoro da casa: che cosa sappiamo?', md: 'Un insieme di indizi suggerisce che il lavoro da casa abbia trasformato l’organizzazione delle giornate di molti dipendenti. La portata dei suoi effetti sulla produttività resta tuttavia oggetto di dibattito.\n\nUn primo studio sosteneva che i dipendenti che lavoravano da casa fossero più produttivi, presumibilmente perché venivano interrotti meno. Uno studio successivo, invece, ha rilevato un calo di produttività nelle attività che richiedevano un lavoro di squadra stretto. Entrambi gli studi hanno dei limiti: il primo campione proveniva da una sola azienda, mentre il secondo si basava sulle stime dei dipendenti stessi.\n\nDiversi ricercatori ammettono che i dati sono incompleti. Uno avanza che la variabile decisiva non sia il luogo, ma la qualità della direzione, una lettura che potrebbe adattarsi alle prove disponibili, benché non sia stata verificata direttamente. Altri la contestano e obiettano che il tipo di lavoro conti più del modo di gestirlo.\n\nNel complesso, gli studi suggeriscono che il lavoro da casa tende a convenire alle attività individuali, ma che i suoi effetti su creatività e collaborazione sono meno netti. Ne consegue che le organizzazioni dovrebbero evitare le generalizzazioni affrettate. Un limite rilevante della letteratura è la brevità del periodo osservato; future ricerche potrebbero pertanto seguire gli stessi dipendenti per diversi anni.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'L’autore afferma che è certo che il lavoro da casa aumenta la produttività.', a: 'f', why: 'The extent of the effects “resta tuttavia oggetto di dibattito”.' },
            { q: 'Un primo studio sosteneva che i dipendenti fossero più produttivi a casa.', a: 't', why: '«Fossero più produttivi.»' },
            { q: 'Lo studio successivo ha rilevato che tutte le attività andavano peggio a casa.', a: 'f', why: 'Only «le attività che richiedevano un lavoro di squadra stretto».' },
            { q: 'Un ricercatore avanza che la qualità della direzione sia la variabile decisiva.', a: 't', why: '«Uno avanza che la variabile decisiva… sia la qualità della direzione.»' },
            { q: 'L’autore raccomanda le generalizzazioni affrettate.', a: 'f', why: '«Le organizzazioni dovrebbero evitare le generalizzazioni affrettate.»' },
            { q: 'Il primo studio è stato condotto in un ospedale.', a: 'ng', why: 'The text says only «una sola azienda».' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does «presumibilmente perché venivano interrotti meno» suggest?', o: ['The reason is claimed, but may not be true.', 'The reason is certainly true.', 'The reason is unimportant.'], why: '*Presumibilmente*: presumably.' },
            { q: 'What does «ammettono» show about the researchers?', o: ['They admit the data are incomplete.', 'They reject the data.', 'They collected the data.'], why: '*Ammettere*: admit reluctantly.' },
            { q: 'What is the function of «invece» in the second paragraph?', o: ['It introduces a different finding.', 'It adds a similar finding.', 'It concludes the argument.'], why: 'Signposting a contrast between studies.' },
            { q: 'What limit of the literature is named in the last paragraph?', o: ['A short observation period.', 'A small number of countries.', 'A lack of interest.'], why: '«La brevità del periodo osservato.»' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the hedges.', items: [
            { s: 'Una lettura che [potrebbe] adattarsi alle prove disponibili, benché non sia stata verificata direttamente.', why: 'A hedge: the conditional *potrebbe*.' },
            { s: 'Il lavoro da casa [tende a] convenire alle attività individuali.', why: 'A hedge for frequency.' },
            { s: 'Gli studi [suggeriscono] che i suoi effetti sono [meno netti].', why: 'Hedged claims.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Un ___ di indizi suggerisce che il lavoro da casa ha trasformato le giornate.', a: ['insieme'], why: '*Un insieme di indizi*.' },
            { q: 'Ne ___ che le organizzazioni dovrebbero evitare le generalizzazioni affrettate.', a: ['consegue'], why: '*Ne consegue che* = therefore.' },
            { q: 'Il primo campione proveniva da una sola azienda, ___ il secondo si basava sulle stime dei dipendenti.', a: ['mentre'], why: '*Mentre* contrasts two things.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'La portata dei suoi effetti sulla produttività resta oggetto di dibattito.', why: 'A noun phrase as subject.' },
            { a: 'Entrambi gli studi hanno dei limiti che non si possono ignorare.', why: 'Evaluation of research.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'La visita era ___ privata, ma era soprattutto una riunione d’affari.', o: ['presumibilmente', 'indubbiamente', 'senza dubbio'], why: '*Presumibilmente*: presumably.' },
      { q: 'L’autrice ___ che il campione era troppo piccolo.', o: ['ammette', 'pretende', 'contesta'], why: 'Admits reluctantly.' },
      { q: 'Il primo studio ha trovato un legame; ___, il secondo non ne ha trovato nessuno.', o: ['invece', 'inoltre', 'pertanto'], why: 'Contrast.' },
      { q: 'Un ___ di indizi suggerisce questa tesi.', o: ['insieme', 'gruppo', 'posto'], why: '*Un insieme di indizi*.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Hedge or booster?', groups: ['hedge', 'booster'], explain: ['groups'], items: [
      { s: 'tende a', g: 0, why: 'Hedge.' },
      { s: 'indubbiamente', g: 1, why: 'Booster.' },
      { s: 'pare che', g: 0, why: 'Hedge.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'La ___ dell’effetto degli schermi sul sonno resta incerta.', a: ['portata'], why: '*La portata di*.' },
      { q: 'Questi risultati non possono essere ___ agli anziani.', a: ['generalizzati'], why: '*Generalizzati a*.' },
      { q: '___ il campione fosse piccolo, la tendenza è chiara.', a: ['Sebbene'], why: '*Sebbene* concedes a point.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the word given.', items: [
      { q: 'Lo studio dimostra che lo sport migliora la memoria.', cue: 'suggerisce', a: ['Lo studio suggerisce che lo sport migliora la memoria.'], why: '*Suggerisce* is weaker than *dimostra*.' },
      { q: 'Non ci sono abbastanza finanziamenti, quindi il progetto ha rallentato.', cue: 'La mancanza', a: ['La mancanza di finanziamenti ha rallentato il progetto.'], why: '*La mancanza di* + noun.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the problem.', items: [
      { s: 'Lo studio [dimostra] che lo sport migliora la memoria, in tutti i casi.', a: ['suggerisce', 'indica'], why: 'Too strong for academic writing.' },
      { s: 'Lui [pretende] di dormire per non rispondere. (to pretend)', a: ['finge'], why: '*Fingere* = to pretend.' },
    ] },
  ],
};
