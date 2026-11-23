// Third design (docs/BLOG_PLAN.md). Verificato il 19 nov 2026 su cambridgeenglish.org: pagina del formato B2 First
// (Reading and Use of English 1 ora e 15 minuti, 7 parti, 52 domande; Part 1 multiple-choice cloze 8 domande,
// Part 2 open cloze 8, Part 3 word formation 8, Part 4 key word transformations 6 da fino a 2 punti ciascuna);
// handbook ufficiale B2 First (Part 4: da due a cinque parole compresa la parola chiave, che non si modifica, punteggio
// diviso in due metà; Part 2: una sola parola, niente forme contratte tranne can't; ortografia corretta in tutte le parti
// di Use of English; Part 3: la parola data va sempre modificata, anche con cambi interni come long > length);
// pagina di preparazione con sample test gratuiti digitali e cartacei. Risorse Alimun controllate nei file
// site/src/data/resources/it (quiz B2 di dieci domande, esercizio sul periodo ipotetico B2 di dodici domande).
// Tutti gli esercizi sono originali, scritti per questo articolo; nessun item preso dai materiali Cambridge.
// Non verificato e quindi omesso: soglie di punteggio "da superamento" per le singole parti, prezzi degli esami.
// Alimun non è affiliata a Cambridge.
export default {
  key: 'english-b2-exercises',
  site: 'it',
  slug: 'esercizi-inglese-b2-con-soluzioni',
  section: 'levels',
  course: 'English',
  published: '2026-11-19',
  updated: '2026-11-19',
  title: 'Esercizi di inglese B2 con soluzioni: 52 frasi in stile B2 First',
  metaTitle: 'Esercizi inglese B2 con soluzioni in stile B2 First – Alimun',
  desc: "Esercizi di inglese B2 con soluzioni spiegate in italiano: cloze, formazione delle parole, key word transformations, periodo ipotetico, phrasal verbs.",
  lead: "Qui trovi 52 frasi di inglese di livello B2 da completare, costruite sui quattro compiti di Use of English del B2 First e sugli errori che noi italiani facciamo più spesso. **Le soluzioni sono in fondo**, ognuna con una spiegazione in italiano, così puoi correggerti da solo e capire dove sbagli.",
  photo: 'english-b2-exercises-it-notebook-desk',
  sticker: { draw: 'owl', say: 'Prima scrivi la risposta, poi guardi la soluzione.' },
  facts: [
    { n: 52, unit: 'domande', text: 'nella prova Reading and Use of English del B2 First, divise in sette parti' },
    { label: '1 ora e 15 minuti', text: 'la durata di Reading and Use of English, secondo Cambridge English' },
    { label: 'Da 2 a 5 parole', text: 'in una key word transformation, parola chiave compresa e senza modificarla' },
    { n: 36, unit: 'punti', text: 'il totale delle quattro serie in formato Use of English di questo articolo' },
  ],
  blocks: [
    { take: { title: 'La risposta breve', text: "Gli esercizi di questa pagina imitano le **quattro parti di Use of English** del B2 First: cloze a scelta multipla, cloze aperto, formazione delle parole e key word transformations. Poi ci sono quattro serie sui punti dove gli italiani inciampano di più: periodo ipotetico, present perfect e past simple, phrasal verbs e false friends. Sono esercizi di pratica, non una simulazione ufficiale: ti dicono su cosa lavorare, **non che livello certificato otterresti**.", draw: 'owl' } },

    { h: 'Come sono fatti questi esercizi' },
    { p: "Il B2 First di Cambridge ha una prova chiamata Reading and Use of English che dura 1 ora e 15 minuti e contiene 52 domande in sette parti. Le prime quattro parti sono lo Use of English, cioè esercizi brevi che misurano grammatica e lessico in modo diretto. Secondo la pagina ufficiale del formato, la Part 1 è un **cloze a scelta multipla** con otto spazi, la Part 2 un cloze aperto con otto spazi, la Part 3 un esercizio di formazione delle parole con otto spazi e la Part 4 una serie di sei key word transformations, ognuna da due punti." },
    { p: "Le prime quattro serie di questa pagina seguono la stessa struttura e lo stesso numero di domande, ma **tutte le frasi sono originali**, scritte apposta per questo articolo: non sono copiate dai materiali Cambridge. Nell'esame vero gli spazi delle parti 1, 2 e 3 sono dentro un unico testo; qui alcune serie sono un testo continuo e altre sono frasi separate, così ogni errore è più facile da isolare. Le ultime quattro serie non hanno un equivalente diretto nell'esame, ma allenano proprio le strutture che compaiono dappertutto nelle quattro parti." },
    { p: "Il modo migliore per usarle è semplice. Scrivi le risposte su un foglio, senza guardare le soluzioni e senza dizionario, e cronometrati se vuoi un'idea del ritmo d'esame. Solo quando hai finito tutta una serie scorri fino alla sezione delle soluzioni. **Correggere a metà serie** ti dà un punteggio più alto ma meno utile, perché la seconda metà la fai già sapendo che tipo di errore stai facendo." },

    { h: 'Serie 1: cloze a scelta multipla' },
    { p: "Nella Part 1 del B2 First scegli fra quattro parole quella che completa lo spazio. Il manuale per gli insegnanti di Cambridge spiega che qui si verificano soprattutto **collocazioni, espressioni fisse, connettivi e phrasal verbs**, e consiglia di leggere anche le parole che vengono dopo lo spazio: spesso è una preposizione successiva a decidere la risposta. Le otto frasi qui sotto formano un breve testo su Laura, che si trasferisce a Dublino." },
    { table: {
      head: ['Frase', 'A', 'B', 'C', 'D'],
      rows: [
        ['When Laura moved to Dublin, she had to ___ friends from scratch.', 'do', 'make', 'take', 'get'],
        ['At first she found it hard to ___ used to the rain.', 'get', 'make', 'stay', 'keep'],
        ['Her colleagues were very helpful and ___ her to join a running club.', 'suggested', 'encouraged', 'proposed', 'insisted'],
        ['The club met every Sunday, ___ of the weather.', 'despite', 'however', 'regardless', 'although'],
        ['After a few months she had ___ up a small circle of friends.', 'built', 'made', 'done', 'put'],
        ['She also ___ part in a local theatre group.', 'took', 'made', 'had', 'got'],
        ['She says the move was the best decision of her life, ___ the difficult start.', 'although', 'in spite', 'even though', 'despite'],
        ['Her parents were worried at first, but now they are ___ of what she has achieved.', 'satisfied', 'happy', 'proud', 'content'],
      ],
      note: 'Scegli una sola opzione per frase. Soluzioni nella sezione finale.',
    } },

    { h: 'Serie 2: cloze aperto' },
    { p: "Nella Part 2 non ci sono opzioni: scrivi tu **una sola parola**, quasi sempre una parola grammaticale come una preposizione, un pronome, un ausiliare o un connettivo. Il manuale Cambridge precisa due dettagli che costano punti a molti candidati: le forme contratte come didn't non sono accettate, perché valgono due parole (l'unica eccezione è can't), e l'ortografia deve essere corretta. Applica le stesse regole anche qui." },
    { table: {
      head: ['Frase', 'Spazio'],
      rows: [
        ['I have lived in this flat ___ 2019.', 'Una parola'],
        ['After ten years in the job, she is used to ___ up at six.', 'Una parola'],
        ['___ the traffic was heavy, we arrived on time.', 'Una parola'],
        ['This is the village ___ my grandmother was born.', 'Una parola'],
        ['Neither Marco ___ his sister speaks German.', 'Una parola'],
        ['If you need help, ask me rather ___ waiting until the last minute.', 'Una parola'],
        ['It is the ___ interesting book I have read this year.', 'Una parola'],
        ['She asked me ___ I had ever been to Scotland.', 'Una parola'],
      ],
      note: 'Niente forme contratte e niente abbreviazioni.',
    } },

    { figure: { photo: 'english-b2-exercises-it-laptop-pen', alt: 'Un quaderno a quadretti aperto, una penna, una tazza di caffè e un portatile su un tavolo di legno', caption: 'Scrivi le risposte su carta prima di guardare le soluzioni: è il modo più onesto per sapere dove sei.' } },

    { h: 'Serie 3: formazione delle parole' },
    { p: "Nella Part 3 ricevi una parola in maiuscolo e la trasformi per completare la frase. Cambridge ricorda che **la parola data va sempre modificata**, a volte con un prefisso o un suffisso, a volte con un cambio interno come long che diventa length, e che spesso serve un plurale o una forma negativa. Prima di scrivere, chiediti che parte del discorso serve nello spazio: un nome, un aggettivo, un avverbio?" },
    { table: {
      head: ['Frase', 'Parola data'],
      rows: [
        ['Her ___ to help everyone made her very popular.', 'WILLING'],
        ['The instructions were completely ___, so nobody knew what to do.', 'CLEAR'],
        ['He gave a very ___ answer to a difficult question.', 'THOUGHT'],
        ['The ___ of the bridge is about 300 metres.', 'LONG'],
        ['We were impressed by the ___ of the hotel staff.', 'FRIEND'],
        ['It is ___ to drive a car without insurance.', 'LEGAL'],
        ['The second half of the film was ___ boring.', 'INCREDIBLE'],
        ['The company is looking for an ___ project manager.', 'EXPERIENCE'],
      ],
      note: 'Controlla l’ortografia: nell’esame una lettera sbagliata annulla la risposta.',
    } },

    { h: 'Serie 4: key word transformations' },
    { p: "È la parte che spaventa di più, e per una buona ragione. Ricevi una frase, una parola chiave e l'inizio e la fine di una seconda frase: devi completarla in modo che **significhi la stessa cosa**, usando da due a cinque parole, parola chiave compresa, senza cambiarla in nessun modo. Le forme contratte contano come due parole. Nel B2 First ogni risposta è corretta in due metà e vale fino a due punti, per cui anche una risposta solo in parte giusta porta un punto." },
    { table: {
      head: ['Prima frase', 'Parola chiave', 'Seconda frase'],
      rows: [
        ['“I’m sorry I didn’t call you,” Tom said to me.', 'APOLOGISED', 'Tom ___ me.'],
        ['It’s possible that Sara has missed the bus.', 'MIGHT', 'Sara ___ the bus.'],
        ['I haven’t been to the cinema for months.', 'SINCE', 'It’s months ___ to the cinema.'],
        ['They are building a new stadium near the station.', 'BEING', 'A new stadium ___ near the station.'],
        ['I regret not studying harder at school.', 'WISH', 'I ___ harder at school.'],
        ['The concert was so expensive that we didn’t go.', 'TOO', 'The concert ___ for us to go to.'],
      ],
      note: 'Da due a cinque parole per spazio, compresa la parola chiave.',
    } },

    { h: 'Come darti un punteggio onesto' },
    { p: "Per le prime quattro serie usa lo stesso sistema del B2 First: **un punto per ogni risposta giusta** nelle serie 1, 2 e 3, e fino a due punti per ogni key word transformation, uno per ciascuna metà della risposta. Il totale massimo è quindi 36 punti, cioè 24 per le prime tre serie e 12 per la quarta. Per le ultime quattro serie conta un punto per frase, per un massimo di 22." },
    { p: "Essere onesti con sé stessi qui conta più del numero finale. Una parola scritta male vale zero, perché nell'esame l'ortografia deve essere corretta. Una risposta con sei parole in una trasformazione vale zero, anche se il senso è giusto. E se hai esitato fra due opzioni e hai scelto quella giusta “per caso”, segnatela comunque come punto debole: **la prossima volta potrebbe andarti male**." },
    { p: "Più del punteggio, guarda **dove si concentrano gli errori**. Se sbagli soprattutto la serie 1, ti mancano collocazioni ed espressioni fisse, e la cura è leggere molto e annotare le parole a gruppi, non da sole. Se cadi nella serie 2, ripassa preposizioni, pronomi relativi e connettivi. Se la serie 4 ti sembra impossibile, di solito il problema è la grammatica che c'è sotto, come il passivo, wish o i verbi modali al passato, più che la tecnica." },

    { cta: true },

    { h: 'Serie 5: il periodo ipotetico' },
    { p: "In italiano il congiuntivo e il condizionale ci portano spesso a mettere would anche dopo if, con frasi come if I would have known. In inglese standard, invece, **would non va nella frase con if**: va solo nella frase principale. Completa le frasi con la forma giusta del verbo tra parentesi, o con una sola parola dove manca il verbo." },
    { table: {
      head: ['Frase', 'Verbo'],
      rows: [
        ['If I ___ about the strike, I would have taken the train.', 'know'],
        ['If you heat water to 100 °C, it ___.', 'boil'],
        ['If I ___ you, I would accept the offer.', 'be'],
        ['We ___ to the beach tomorrow if it doesn’t rain.', 'go'],
        ['If she had taken the job in London, she ___ there now.', 'live'],
        ['I won’t go to the party ___ you come with me.', 'una parola'],
      ],
      note: 'Nella frase con if non si usa would.',
    } },
    { p: "Se questa serie ti è sembrata difficile, nelle risorse gratuite di Alimun c'è l'**esercizio di inglese B2 sul periodo ipotetico**, con dodici domande sul tipo zero, primo, secondo, terzo e misto e una spiegazione per ogni risposta. Il link è tra le fonti in fondo alla pagina." },

    { h: 'Serie 6: present perfect o past simple' },
    { p: "In italiano usiamo il passato prossimo sia per “ieri ho visto un film” sia per “non ho mai visto quel film”. In inglese le due frasi vogliono tempi diversi: il past simple quando il momento è finito e indicato, come yesterday, last year o in 2015, e il present perfect quando conta **il legame con il presente**, come con ever, never, yet, for e since. Metti il verbo nella forma giusta." },
    { table: {
      head: ['Frase', 'Verbo'],
      rows: [
        ['I ___ in Bologna since 2020.', 'live'],
        ['We ___ that film last Saturday.', 'see'],
        ['___ you ever ___ sushi?', 'try'],
        ['She ___ her report yet.', 'not finish'],
        ['When ___ you ___ working here?', 'start'],
        ['I ___ Giulia for ten years.', 'know'],
      ],
      note: 'Cerca nella frase le parole che indicano il tempo: since, last, ever, yet, when, for.',
    } },

    { figure: { photo: 'english-b2-exercises-it-dictionary-page', alt: 'Primo piano di una pagina di dizionario inglese con la voce tax return', caption: 'Al B2 conta sapere quali parole stanno insieme: un buon dizionario monolingue mostra anche le collocazioni.' } },

    { h: 'Serie 7: phrasal verbs' },
    { p: "I phrasal verbs compaiono soprattutto nella Part 1 e nella Part 2, e Cambridge spiega che possono essere verificati in tre modi: l'intero verbo, solo il verbo oppure **solo la particella** che lo segue. Qui ti chiediamo proprio la particella, che è il pezzo che di solito si dimentica. Scrivi una parola." },
    { table: {
      head: ['Frase', 'Spazio'],
      rows: [
        ['Can you look ___ my cat while I’m on holiday?', 'Una parola'],
        ['The meeting has been called ___ because the manager is ill.', 'Una parola'],
        ['I can’t put ___ with this noise any longer.', 'Una parola'],
        ['We ran ___ of milk, so I went to the shop.', 'Una parola'],
        ['She takes ___ her mother: they have exactly the same smile.', 'Una parola'],
      ],
      note: 'Put up with ha due particelle: qui manca solo la prima.',
    } },

    { h: 'Serie 8: false friends' },
    { p: "Le parole che sembrano italiane ma non lo sono sono una trappola classica, perché **la frase sembra giusta** a chi la scrive. Per ogni frase italiana scegli la parola inglese che la traduce correttamente." },
    { table: {
      head: ['Frase italiana', 'Frase inglese', 'Opzioni'],
      rows: [
        ['Attualmente lavoro a Milano.', '___ I work in Milan.', 'Actually / Currently'],
        ['È molto sensibile alle critiche.', 'She is very ___ to criticism.', 'sensible / sensitive'],
        ['Ho comprato questo romanzo in libreria.', 'I bought this novel at a ___.', 'library / bookshop'],
        ['Al matrimonio sono venuti tutti i miei parenti.', 'All my ___ came to the wedding.', 'parents / relatives'],
        ['Dopo mesi di ricerche, alla fine ha trovato lavoro.', 'After months of searching, she ___ found a job.', 'eventually / possibly'],
      ],
      note: 'Una sola opzione è la traduzione giusta.',
    } },

    { h: 'Esercizi di pratica e certificato ufficiale' },
    { p: "Fare bene questi esercizi è un buon segnale, ma **non equivale a un certificato**. Il B2 First vero ha quattro prove, Reading and Use of English, Writing, Listening e Speaking, e ti dà un punteggio sulla Cambridge English Scale: è quel risultato, rilasciato da un ente riconosciuto, che università, aziende e bandi accettano. Come funzionano le prove, i punteggi e i voti lo spieghiamo nella nostra guida all'esame B2 First, e cosa significa davvero essere B2 nell'articolo sul livello B2 di inglese." },
    { p: "Una pagina di esercizi, poi, allena soprattutto grammatica e lessico. Le parti di lettura del B2 First, e ancora di più Listening, Writing e Speaking, chiedono abilità che non si misurano completando frasi. Se vuoi una **simulazione d'esame vera**, Cambridge English pubblica gratuitamente sample test digitali di Reading and Use of English, Listening e Writing, oltre a prove complete in formato cartaceo: fai una prova intera rispettando i tempi e vedrai subito se il ritmo ti basta." },
    { p: "Per un controllo veloce, nelle risorse gratuite di Alimun trovi anche il **quiz di inglese B2**: dieci domande su passivo, discorso indiretto, wish, used to, phrasal verbs e collocazioni, con la spiegazione di ogni risposta. E se preferisci lavorare con qualcuno che ti corregge, nei corsi di Alimun studi in piccoli gruppi con un insegnante dal vivo, dopo un test di livello iniziale." },

    { figure: { photo: 'english-b2-exercises-it-notepad-pen', alt: 'Un quaderno a righe aperto con una penna appoggiata sopra, su un tavolo scuro', caption: 'Segna gli errori per tipo, non solo il totale: è da lì che capisci cosa ripassare.' } },

    { h: 'Soluzioni' },
    { p: "Ecco tutte le risposte, serie per serie, con una frase di spiegazione in italiano. In ogni frase **la risposta è evidenziata**. Dove più risposte sono accettabili, le trovi indicate nella spiegazione." },

    { h3: 'Soluzioni della serie 1' },
    { table: {
      head: ['Frase completa', 'Perché'],
      rows: [
        ['She had to **make** friends from scratch.', 'In inglese gli amici si “fanno” con make: make friends è una collocazione fissa.'],
        ['She found it hard to **get** used to the rain.', 'Get used to indica il processo di abituarsi, be used to lo stato di essere abituati.'],
        ['They **encouraged** her to join a running club.', 'Encourage regge persona + to + verbo; suggest e propose no, e insist vuole on.'],
        ['The club met every Sunday, **regardless** of the weather.', 'Regardless of significa “indipendentemente da” ed è l’unica opzione che si lega a of.'],
        ['She had **built** up a small circle of friends.', 'Build up significa costruire poco a poco; make up vuol dire inventare o fare pace.'],
        ['She also **took** part in a local theatre group.', 'Partecipare si dice take part in, non make part come in “fare parte”.'],
        ['The best decision of her life, **despite** the difficult start.', 'Despite è seguito da un nome; although ed even though vogliono una frase, in spite vuole of.'],
        ['Now they are **proud** of what she has achieved.', 'Proud regge of; satisfied, happy e content vogliono with.'],
      ],
    } },

    { h3: 'Soluzioni della serie 2' },
    { table: {
      head: ['Frase completa', 'Perché'],
      rows: [
        ['I have lived in this flat **since** 2019.', 'Since introduce il punto di partenza; for introduce la durata, come for five years.'],
        ['She is used to **getting** up at six.', 'Dopo be used to il verbo va in -ing, perché to è una preposizione; accettabile anche waking.'],
        ['**Although** the traffic was heavy, we arrived on time.', 'Serve un connettivo concessivo seguito da una frase; va bene anche Though.'],
        ['This is the village **where** my grandmother was born.', 'Where è il relativo di luogo: la nonna è nata in quel paese.'],
        ['Neither Marco **nor** his sister speaks German.', 'Neither va sempre in coppia con nor.'],
        ['Ask me rather **than** waiting until the last minute.', 'L’espressione è rather than, “piuttosto che”.'],
        ['It is the **most** interesting book I have read this year.', 'Gli aggettivi lunghi formano il superlativo con the most.'],
        ['She asked me **if** I had ever been to Scotland.', 'Le domande sì/no al discorso indiretto si introducono con if o whether.'],
      ],
    } },

    { h3: 'Soluzioni della serie 3' },
    { table: {
      head: ['Frase completa', 'Perché'],
      rows: [
        ['Her **willingness** to help everyone made her very popular.', 'Dopo her serve un nome: dall’aggettivo willing si forma willingness.'],
        ['The instructions were completely **unclear**.', 'Il senso è negativo, perché nessuno sapeva cosa fare, quindi serve il prefisso un-.'],
        ['He gave a very **thoughtful** answer.', 'Prima del nome answer serve un aggettivo: thoughtful, riflessivo e ponderato.'],
        ['The **length** of the bridge is about 300 metres.', 'Il nome di long è length, con un cambio interno e non solo un suffisso.'],
        ['We were impressed by the **friendliness** of the hotel staff.', 'Serve un nome astratto: friend, poi friendly, poi friendliness, con la y che diventa i.'],
        ['It is **illegal** to drive a car without insurance.', 'Il contrario di legal si forma con il prefisso il-.'],
        ['The second half was **incredibly** boring.', 'Prima di un aggettivo come boring serve un avverbio, quindi il suffisso -ly.'],
        ['The company is looking for an **experienced** project manager.', 'L’aggettivo che significa “esperto” è experienced, con il suffisso -ed.'],
      ],
    } },

    { h3: 'Soluzioni della serie 4' },
    { table: {
      head: ['Frase completa', 'Perché'],
      rows: [
        ['Tom **apologised for not calling** me.', 'Apologise regge for + -ing, e la negazione dell’-ing si fa con not davanti: un punto per apologised for, uno per not calling.'],
        ['Sara **might have missed** the bus.', 'Per una possibilità nel passato si usa modale + have + participio passato.'],
        ['It’s months **since I last went** to the cinema.', 'It’s + periodo di tempo + since + past simple; va bene anche since I went o since I have been.'],
        ['A new stadium **is being built** near the station.', 'È un passivo in corso adesso: is being + participio passato.'],
        ['I **wish I had studied** harder at school.', 'Per un rimpianto sul passato si usa wish + past perfect.'],
        ['The concert **was too expensive** for us to go to.', 'Too + aggettivo + for qualcuno + to + verbo esprime che qualcosa è eccessivo per fare un’azione.'],
      ],
    } },

    { h3: 'Soluzioni della serie 5' },
    { table: {
      head: ['Frase completa', 'Perché'],
      rows: [
        ['If I **had known** about the strike, I would have taken the train.', 'Terzo tipo: if + past perfect, mai if I would have known.'],
        ['If you heat water to 100 °C, it **boils**.', 'Tipo zero per un fatto sempre vero: presente in entrambe le frasi.'],
        ['If I **were** you, I would accept the offer.', 'Nei consigli con if I were you si usa were, anche con I.'],
        ['We **will go** to the beach tomorrow if it doesn’t rain.', 'Primo tipo per una possibilità reale: will nella principale, presente dopo if.'],
        ['If she had taken the job in London, she **would be living** there now.', 'Periodo misto, passato nella condizione e presente nella conseguenza; accettabile anche would live.'],
        ['I won’t go to the party **unless** you come with me.', 'Unless significa if not e segue lo schema del primo tipo.'],
      ],
    } },

    { h3: 'Soluzioni della serie 6' },
    { table: {
      head: ['Frase completa', 'Perché'],
      rows: [
        ['I **have lived** in Bologna since 2020.', 'Con since e un’azione che dura ancora si usa il present perfect; va bene anche have been living.'],
        ['We **saw** that film last Saturday.', 'Last Saturday è un momento finito, quindi past simple.'],
        ['**Have** you ever **tried** sushi?', 'Ever chiede di un’esperienza in tutta la vita fino a oggi: present perfect.'],
        ['She **hasn’t finished** her report yet.', 'Yet nelle frasi negative va con il present perfect.'],
        ['When **did** you **start** working here?', 'Le domande con when chiedono un momento preciso, quindi vogliono il past simple.'],
        ['I **have known** Giulia for ten years.', 'Know è un verbo di stato e non va nella forma -ing: present perfect simple con for.'],
      ],
    } },

    { h3: 'Soluzioni della serie 7' },
    { table: {
      head: ['Frase completa', 'Perché'],
      rows: [
        ['Can you look **after** my cat while I’m on holiday?', 'Look after significa prendersi cura di qualcuno o di qualcosa.'],
        ['The meeting has been called **off**.', 'Call off significa annullare un evento già previsto.'],
        ['I can’t put **up** with this noise any longer.', 'Put up with significa sopportare.'],
        ['We ran **out** of milk.', 'Run out of significa finire una scorta di qualcosa.'],
        ['She takes **after** her mother.', 'Take after significa assomigliare a un familiare più anziano.'],
      ],
    } },

    { h3: 'Soluzioni della serie 8' },
    { table: {
      head: ['Frase completa', 'Perché'],
      rows: [
        ['**Currently** I work in Milan.', 'Attualmente si dice currently; actually significa “in realtà”.'],
        ['She is very **sensitive** to criticism.', 'Sensibile è sensitive; sensible significa sensato, assennato.'],
        ['I bought this novel at a **bookshop**.', 'La libreria è bookshop, in inglese americano bookstore; library è la biblioteca.'],
        ['All my **relatives** came to the wedding.', 'I parenti sono relatives; parents sono solo i genitori.'],
        ['She **eventually** found a job.', 'Eventually significa “alla fine”; per “eventualmente” si usa if necessary o possibly.'],
      ],
    } },

    { note: { title: 'E adesso?', text: "Riprendi gli esercizi fra una settimana, senza guardare le soluzioni, e confronta i due punteggi. Le frasi che sbagli due volte sono **la tua lista di ripasso** più utile.", draw: 'snail' } },
  ],
  quiz: [
    { q: 'Quante domande ha in tutto la prova Reading and Use of English del B2 First?', options: ['30', '42', '52', '60'], a: 2, why: 'La prova ha 52 domande divise in sette parti e dura 1 ora e 15 minuti.' },
    { q: 'Quante parole puoi usare in una key word transformation?', options: ['Una sola', 'Da due a cinque, parola chiave compresa', 'Da tre a sei', 'Quante ne servono'], a: 1, why: 'Il manuale Cambridge indica da due a cinque parole, compresa la parola chiave, che non va modificata.' },
    { q: 'Quanti punti vale al massimo una key word transformation nel B2 First?', options: ['Mezzo punto', 'Un punto', 'Due punti', 'Tre punti'], a: 2, why: 'La risposta è corretta in due metà e ogni metà giusta vale un punto.' },
    { q: 'Nel cloze aperto puoi scrivere didn’t in uno spazio?', options: ['Sì, sempre', 'No, le forme contratte valgono due parole', 'Solo nelle frasi negative', 'Sì, se l’ortografia è corretta'], a: 1, why: 'Nella Part 2 si scrive una sola parola e le forme contratte non sono accettate, con l’eccezione di can’t.' },
    { q: 'Qual è la frase corretta?', options: ['If I would have known, I would have come.', 'If I had known, I would have come.', 'If I knew, I would have come.', 'If I have known, I would come.'], a: 1, why: 'Nel terzo tipo si usa if + past perfect; would non va nella frase con if.' },
    { q: 'Come si traduce “i miei parenti”?', options: ['my parents', 'my relatives', 'my familiars', 'my parentals'], a: 1, why: 'Parents sono solo i genitori; i parenti sono relatives.' },
    { q: 'Quale frase vuole il past simple?', options: ['I ___ Giulia for ten years.', '___ you ever tried sushi?', 'We ___ that film last Saturday.', 'She ___ her report yet.'], a: 2, why: 'Last Saturday indica un momento finito, quindi si usa il past simple: we saw.' },
    { q: 'Fare bene questi esercizi ti dà un certificato B2?', options: ['Sì, se fai almeno 30 punti', 'Sì, se li fai in un’ora', 'No, il certificato lo rilascia un ente con un esame ufficiale', 'Sì, ma solo per le parti di grammatica'], a: 2, why: 'Gli esercizi servono a esercitarsi; per dimostrare il B2 serve un esame ufficiale come il B2 First.' },
  ],
  faq: [
    ['Questi esercizi sono uguali a quelli del B2 First?', "Le prime quattro serie seguono la struttura delle parti 1-4 di Use of English, con lo stesso numero di domande, ma le frasi sono originali e scritte per questo articolo. Per gli esercizi ufficiali usa i sample test gratuiti che Cambridge English pubblica sul suo sito."],
    ['Dove trovo una simulazione completa del B2 First?', "Nella sezione di preparazione al B2 First del sito Cambridge English ci sono sample test digitali gratuiti di Reading and Use of English, Listening e Writing e prove complete in formato cartaceo. Falle rispettando i tempi: 1 ora e 15 minuti per Reading and Use of English."],
    ['Quanti punti devo fare per essere sicuro di avere il B2?', "Questi esercizi non hanno una soglia ufficiale, quindi non possono dirti se avresti il B2. Usali per capire su quali strutture lavorare; il livello certificato te lo dà solo un esame ufficiale."],
    ['Ci sono altri esercizi di inglese B2 gratuiti su Alimun?', "Sì. Nelle risorse gratuite trovi il quiz di inglese B2, con dieci domande su grammatica e lessico, e un esercizio B2 sul periodo ipotetico con dodici domande. Ogni risposta ha una spiegazione in italiano."],
  ],
  related: ['english-b2-level', 'b2-first', 'english-conditionals', 'present-perfect', 'phrasal-verbs', 'english-false-friends'],
  sources: [
    ["Cambridge English, formato dell'esame B2 First", 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/format/'],
    ['Cambridge English, B2 First handbook for teachers', 'https://www.cambridgeenglish.org/Images/167791-b2-first-handbook.pdf'],
    ['Cambridge English, preparazione e sample test gratuiti del B2 First', 'https://www.cambridgeenglish.org/exams-and-tests/first/preparation/'],
    ['Alimun: quiz di inglese B2 gratuito', 'https://alimun.com/it/risorse/quiz-inglese-b2'],
    ['Alimun: esercizio di inglese B2 sul periodo ipotetico', 'https://alimun.com/it/risorse/esercizio-inglese-b2-periodo-ipotetico-conditionals'],
  ],
};
