// Third design (docs/BLOG_PLAN.md). Verificato il 31 ott 2026 su cambridgeenglish.org: pagina dell'esame B2 First,
// formato, risultati (fasce di punteggio, voti, tempi dei risultati, nessuna scadenza), handbook ufficiale B2 First
// (parti, punti, peso uguale, criteri di valutazione, regole delle key word transformations, 1939) e guida allo
// Statement of Results; ore di apprendimento guidato dal sito di supporto Cambridge English. Alimun non è affiliata a Cambridge.
export default {
  key: 'b2-first',
  site: 'it',
  slug: 'esame-b2-first-cambridge',
  section: 'exams',
  course: 'English',
  published: '2026-10-31',
  updated: '2026-10-31',
  title: 'Esame B2 First Cambridge (FCE): la guida completa',
  metaTitle: 'B2 First Cambridge (FCE): prove, punteggi e preparazione – Alimun',
  desc: "Tutte le prove e le parti del B2 First, l'ex FCE, con i tempi, come funzionano la Cambridge English Scale e i voti, e un piano di preparazione.",
  lead: "Il B2 First, per anni chiamato First Certificate in English o FCE, è una delle certificazioni d'inglese più conosciute in Italia e in Europa. Valuta le quattro abilità più grammatica e lessico, e **dimostra che hai raggiunto il livello intermedio superiore**. Ecco come funziona, parte per parte, e come prepararti.",
  photo: 'b2-first-desk-notebook',
  sticker: { draw: 'owl', say: 'Cinque punteggi, una media, un certificato.' },
  facts: [
    { n: 4, unit: 'prove', text: 'Reading and Use of English, Writing, Listening e Speaking' },
    { n: 52, unit: 'domande', text: 'in Reading and Use of English, divise in sette parti in 1 ora e 15 minuti' },
    { n: 180, text: 'il punteggio della Cambridge English Scale che dà il voto A e un certificato di livello C1' },
    { label: 'Nessuna scadenza', text: 'per il certificato, anche se alcuni enti chiedono un risultato recente' },
  ],
  blocks: [
    { take: { title: 'La risposta breve', text: "Il B2 First è l'esame Cambridge English di livello B2 del QCER. Ha quattro prove e dura **circa tre ore e mezza**. Ricevi un punteggio da 122 a 190 sulla Cambridge English Scale: da 160 a 179 ottieni il certificato B2, da 180 in su il voto A e un certificato di livello C1, e da 140 a 159 un certificato di livello B1. Il certificato non scade.", draw: 'owl' } },

    { h: "Che cos'è il B2 First e a chi serve" },
    { p: "Il B2 First fa parte delle Cambridge English Qualifications, una serie di esami che va dall'A2 Key al C2 Proficiency, ognuno pensato per un solo livello. È stato proposto per la prima volta nel 1939 e per decenni si è chiamato **First Certificate in English**, o FCE. Molti insegnanti e datori di lavoro usano ancora il vecchio nome, e il certificato stesso riporta ancora la dicitura “B2 First Certificate in English”." },
    { p: "L'esame punta al **livello B2**, intermedio superiore, del Quadro comune europeo di riferimento per le lingue (QCER), la scala di sei livelli da A1 a C2. Cambridge lo descrive come la prova che sai lavorare in un ambiente in cui si parla inglese, vivere in autonomia in un paese anglofono o studiare a livello intermedio superiore, per esempio in un corso preparatorio all'università. In pratica, al B2 segui una conferenza su un argomento che conosci, sostieni una conversazione su temi abbastanza vari e dai la tua opinione motivandola." },
    { p: "È quindi il passo naturale dopo il B1 Preliminary, e Cambridge ricorda che è accettato da molte scuole e università per lo studio, oltre che dai datori di lavoro. Se non sei sicuro del tuo livello, verificalo prima: il B2 First misura un solo livello, e **sostenerlo troppo presto è un modo facile per perdere tempo e soldi**." },

    { h: 'Le quattro prove in sintesi' },
    { p: "L'esame ha quattro prove. Reading and Use of English, Writing e Listening sono prove scritte, mentre lo Speaking si svolge di persona con due esaminatori; il centro d'esame ti comunica data e orario di ciascuna. Cambridge indica una durata complessiva di **circa 3 ore e mezza**." },
    { table: {
      head: ['Prova', 'Durata', 'Parti', 'Domande', 'Cosa valuta'],
      rows: [
        ['Reading and Use of English', '1 ora e 15 minuti', '7', '52', 'Grammatica, lessico e comprensione del testo'],
        ['Writing', '1 ora e 20 minuti', '2', '2 testi', 'Un saggio e un testo a scelta, da 140 a 190 parole ciascuno'],
        ['Listening', 'Circa 40 minuti', '4', '30', 'Comprensione orale; ogni registrazione si ascolta due volte'],
        ['Speaking', '14 minuti a coppia', '4', '–', "Parlare da soli, con l'esaminatore e con un altro candidato"],
      ],
      note: 'Lo Speaking dura 20 minuti quando i candidati sono tre. Il formato è identico su carta e al computer.',
    } },
    { p: "I cinque punteggi che ricevi, per Reading, Use of English, Writing, Listening e Speaking, **hanno lo stesso peso**. Quindi, anche se Reading and Use of English è una sola prova, vale due dei tuoi cinque punteggi: un buon motivo per prenderla sul serio." },

    { figure: { photo: 'b2-first-reading-book', alt: 'Una persona che legge un libro tascabile, vista da dietro la spalla', caption: 'I testi di Reading and Use of English arrivano in tutto a 2.200-2.500 parole: la velocità di lettura conta quanto la grammatica.' } },

    { h: 'Reading and Use of English' },
    { p: "Questa prova dura 1 ora e 15 minuti e ha sette parti con 52 domande. Le prime quattro parti sono lo **Use of English**: esercizi brevi che verificano direttamente grammatica e lessico. Le ultime tre sono di lettura: testi più lunghi presi da articoli, relazioni, narrativa, pubblicità, lettere e altre fonti, per circa 2.200-2.500 parole in tutto." },
    { h3: 'Parti da 1 a 4: Use of English' },
    { p: "Nella Part 1, un cloze a scelta multipla, leggi un breve testo con otto spazi vuoti e scegli la parola giusta fra quattro opzioni. Verifica il lessico: collocazioni, espressioni fisse, phrasal verbs e parole di significato simile. Nella Part 2, un cloze aperto, ci sono altri otto spazi ma **nessuna opzione**: scrivi tu una parola, di solito una parola grammaticale come una preposizione, un articolo, un ausiliare o un pronome. Nella Part 3, la formazione delle parole, trasformi una parola data per completare otto spazi, per esempio “decide” in “decision” o “able” in “unable”." },
    { p: "La Part 4, le key word transformations, è quella di cui si parla di più. Ricevi una frase e una parola chiave, e completi una seconda frase con lo stesso significato usando **da due a cinque parole**, parola chiave compresa, senza modificarla. Le forme contratte come didn’t contano come due parole. Le domande sono sei e ognuna vale fino a due punti, perché la risposta viene corretta in due metà. Nelle parti 2, 3 e 4 l'ortografia deve essere corretta." },
    { examples: [
      ['I haven’t seen Maria for three years. (SINCE) It ___ I saw Maria.', 'Risposta: **has been three years since** (cinque parole, il massimo).'],
      ['It wasn’t necessary for us to book a table. (NEED) We ___ a table.', 'Risposta: **didn’t need to book**. Sono cinque parole, perché didn’t conta come due.'],
      ['“Can you help me?” Anna asked Ben. (WHETHER) Anna asked Ben ___ help her.', 'Risposta: **whether he could** (tre parole). È il discorso indiretto: can diventa could, come in italiano “puoi” diventa “potesse”.'],
    ] },
    { h3: 'Parti da 5 a 7: Reading' },
    { p: "La Part 5 è un testo più lungo con sei domande a scelta multipla su dettagli, opinioni e atteggiamenti, ognuna da **due punti**. La Part 6 è un testo con lacune: da un articolo sono state tolte sei frasi, mescolate a una settima che non va da nessuna parte, e tu le rimetti al loro posto seguendo la logica e i riferimenti da un paragrafo all'altro. La Part 7 è un abbinamento multiplo: dieci domande in cui trovi quale testo, o quale parte di un testo, cita una certa informazione. Premia la lettura rapida più di quella minuziosa." },
    { note: { title: 'Due punti a domanda nelle parti 5 e 6', text: "Le parti 5 e 6 hanno solo sei domande ciascuna, ma ogni domanda vale due punti. Lasciati tempo a sufficienza: **correre sui testi lunghi alla fine** costa più di un inizio lento nella Part 1.", draw: 'snail' } },

    { h: 'Writing' },
    { p: "La prova di Writing dura 1 ora e 20 minuti e scrivi due testi da **140 a 190 parole** ciascuno. La Part 1 è obbligatoria: **un saggio** (essay) in cui dai la tua opinione su un tema di interesse generale. Ricevi due idee da sviluppare e ne aggiungi una terza tua. Il saggio è scritto per il tuo insegnante, quindi va bene uno stile neutro o abbastanza formale." },
    { p: "Nella Part 2 scegli **un compito da una breve lista**. Nel B2 First i formati sono articolo, email o lettera, recensione (review) e relazione (report). Ogni compito indica un destinatario e uno scopo, come consigliare un posto a un amico o riferire su un evento scolastico al responsabile di un gruppo, e vieni valutato su quanto il testo funziona per quel lettore." },
    { p: "Gli esaminatori valutano ogni testo su **quattro scale**: Content, se hai fatto tutto ciò che il compito chiedeva; Communicative Achievement, se stile e formato sono adatti al lettore; Organisation, quanto il testo è coeso; e Language, la varietà e la correttezza di grammatica e lessico. Cambridge chiede anche di restare coerente con una varietà d'inglese: l'ortografia britannica e quella americana vanno entrambe bene, purché tu non le mescoli." },
    { figure: { photo: 'b2-first-writing-notes', alt: 'Persone a un tavolo, una prende appunti su un quaderno a spirale accanto a una tazza di caffè', caption: 'Entrambi i compiti di Writing chiedono da 140 a 190 parole: qualche minuto di scaletta ti aiuta a coprire tutti i punti richiesti.' } },
    { note: { title: 'Il numero di parole è una guida', text: "I testi troppo corti rischiano di non mostrare abbastanza varietà o di saltare un punto; quelli troppo lunghi rischiano di andare fuori tema. **Punta al centro della forbice** e usa le parole per ciò che serve al lettore.", draw: 'teacup' } },

    { h: 'Listening' },
    { p: "Il Listening dura circa 40 minuti e ha quattro parti con 30 domande. Nella Part 1 ascolti otto brevi registrazioni scollegate, di circa 30 secondi, e rispondi a una domanda con tre opzioni per ciascuna. Nella Part 2 ascolti un intervento di tre o quattro minuti e completi dieci frasi con le parole che senti. Nella Part 3 cinque persone parlano di un tema comune per circa 30 secondi ciascuna, e devi **abbinare ogni persona** a una di otto affermazioni. Nella Part 4 rispondi a sette domande con tre opzioni su un'intervista o una conversazione di tre o quattro minuti." },
    { p: "Ogni registrazione si ascolta **due volte**. Usa il primo ascolto per l'idea generale e una risposta provvisoria, il secondo per controllarla. La Part 3 è la più insidiosa: tre delle otto affermazioni non servono, e chi parla può citare un'idea di un'opzione sbagliata prima di dire che cosa pensa davvero." },
    { figure: { photo: 'b2-first-headphones', alt: 'Un ragazzo con le cuffie che guarda il telefono', caption: "Ogni registrazione del Listening si ascolta due volte: la prima per l'idea generale, la seconda per controllare la risposta." } },

    { h: 'Speaking' },
    { p: "Di solito sostieni lo Speaking **con un altro candidato**, o in un gruppo di tre, davanti a due esaminatori. Uno, l'interlocutor, fa le domande e ti assegna i compiti; l'altro, l'assessor, ascolta e assegna i punti. La prova dura 14 minuti per una coppia e ha quattro parti. Vieni valutato sulla tua prestazione, non in confronto al tuo compagno." },
    { p: "La Part 1 è una breve intervista, di circa due minuti, con domande su di te, sul lavoro o lo studio, sul tempo libero e sui tuoi progetti. Nella Part 2 ogni candidato riceve due fotografie e ne parla da solo per un minuto, confrontandole e rispondendo alla domanda scritta sopra; poi commenti le foto del compagno per circa 30 secondi. Nella Part 3 tu e il compagno discutete una domanda con alcuni spunti scritti per due minuti, poi avete **un altro minuto per prendere una decisione** insieme. Nella Part 4 l'esaminatore fa altre domande sullo stesso tema, e la discussione dura circa quattro minuti." },
    { p: "L'assessor valuta Grammar and Vocabulary, Discourse Management, Pronunciation e **Interactive Communication**, mentre l'interlocutor dà un voto complessivo (global achievement). L'interazione conta: nelle parti 3 e 4, reagire a ciò che dice il compagno, chiedere la sua opinione e costruirci sopra vale più di un discorso preparato." },
    { figure: { photo: 'b2-first-street-chat', alt: 'Tre amici che parlano in una strada di città soleggiata', caption: 'Nella Part 3 parli con il compagno per due minuti, poi avete un minuto per mettervi d’accordo su una decisione.' } },

    { cta: true },

    { h: 'Come funziona la Cambridge English Scale' },
    { p: "I risultati del B2 First sono espressi sulla **Cambridge English Scale**, una scala di punteggi comune a tutte le Cambridge English Qualifications. Ricevi un punteggio separato per Reading, Use of English, Writing, Listening e Speaking, e il punteggio complessivo è la media dei cinque. Il voto e il livello QCER dipendono entrambi da quel punteggio complessivo." },
    { table: {
      head: ['Punteggio complessivo', 'Risultato', 'Che cosa ricevi'],
      rows: [
        ['Da 180 a 190', 'Voto A', 'Il certificato B2 First che attesta un livello C1'],
        ['Da 173 a 179', 'Voto B', 'Il certificato B2 First di livello B2'],
        ['Da 160 a 172', 'Voto C', 'Il certificato B2 First di livello B2'],
        ['Da 140 a 159', 'Livello B1', 'Un certificato Cambridge English di livello B1'],
        ['Da 122 a 139', 'Nessun certificato', 'Il punteggio compare nello Statement of Results'],
      ],
      note: 'Ogni candidato riceve uno Statement of Results con i cinque punteggi e il punteggio complessivo.',
    } },
    { p: "Ne derivano due cose. Primo, **una prova debole da sola non ti affonda**: un Writing più basso può essere compensato da un buon Listening e un buon Reading. Secondo, la scala ti fa da rete di sicurezza. Se manchi il B2 di poco, con 140-159 ottieni comunque un certificato B1; se vai molto bene, con 180 o più ottieni il voto A e un certificato di livello C1." },
    { p: "Un C1 sul certificato B2 First è un vero vantaggio, ma non equivale a superare il C1 Advanced, che è pensato per verificare tutto il livello C1. Se un'università o un datore di lavoro chiede esplicitamente il C1 Advanced, è quello l'esame da sostenere. Molti enti fissano il requisito come punteggio complessivo minimo anziché come voto, e Cambridge stessa definisce il punteggio complessivo **l'informazione più importante** del risultato." },
    { quote: 'Cinque punteggi, una media: una prova storta non decide il risultato.' },
    { note: { title: 'Guarda il punteggio, non solo il voto', text: "Se un ente chiede un punteggio minimo, controlla il punteggio complessivo nello Statement of Results. Alcuni fissano anche un minimo per ogni abilità, quindi **leggi il requisito parola per parola**.", draw: 'parrot' } },

    { h: 'Su carta o al computer' },
    { p: "Puoi sostenere il B2 First su carta o al computer in un centro d'esame autorizzato. **Contenuti, tempi e formato sono gli stessi**, e anche il certificato. Al computer digiti le risposte e alla fine del Listening hai due minuti per controllarle; su carta scrivi su un foglio risposte e hai cinque minuti per trascrivere le risposte del Listening. Lo Speaking è sempre di persona." },
    { p: "La differenza pratica principale è la velocità. I risultati dell'esame digitale arrivano di solito **dopo 5-10 giorni lavorativi**, quelli su carta di norma dopo 4-6 settimane. La Confirmation of Entry del tuo centro indica la data entro cui avrai i risultati. Se hai una scadenza per un'iscrizione o una candidatura, questa differenza può decidere il formato per te." },

    { h: 'B2 First o B2 First for Schools?' },
    { p: "Allo stesso livello esistono due versioni dell'esame. **B2 First for Schools** ha le stesse prove, parti, tempi e punteggi del B2 First, e lo stesso livello QCER. C'è una sola differenza nella Part 2 del Writing: la versione for Schools può includere un racconto (story), mentre la relazione (report) compare solo nella versione standard." },
    { p: "Cambridge pensa il B2 First per gli adulti e il B2 First for Schools per chi va ancora a scuola. Il livello è lo stesso; cambiano solo **argomenti e testi**, scelti in base agli interessi e all'esperienza dei candidati più giovani. Se sei uno studente, chiedi al centro quale versione propone." },

    { h: 'Validità e chi lo riconosce' },
    { p: "I certificati Cambridge English **non scadono**. Un B2 First superato quest'anno resta un certificato valido fra vent'anni. Ogni ente decide però quanto recente debba essere un risultato, e alcune università, aziende e amministrazioni chiedono un certificato recente. Verifica prima di contare su un certificato vecchio." },
    { p: "Cambridge afferma che le sue certificazioni sono accettate da **migliaia di aziende e istituzioni educative** in tutto il mondo. Il B2 First è riconosciuto come prova di inglese intermedio superiore per lavori nell'industria, nell'amministrazione e nei servizi, e da molte scuole e università per lo studio. Cambridge elenca sul suo sito gli enti che lo riconoscono, ma l'ultima parola spetta sempre alla pagina dei requisiti dell'università o dell'azienda a cui ti candidi." },

    { h: 'B2 First o IELTS?' },
    { p: "Vengono spesso confrontati, e rispondono a domande diverse. IELTS è un unico test per tutti i livelli e ti dà un punteggio da 0 a 9; la maggior parte degli enti accetta un risultato IELTS per **due anni**. Il B2 First certifica un livello, con un certificato che non scade. Nel Listening IELTS ascolti ogni registrazione una volta e lo Speaking è a tu per tu con l'esaminatore; nel B2 First ascolti tutto due volte e di solito parli con un compagno." },
    { p: "Per emigrare e per molte iscrizioni universitarie nei paesi anglofoni, spesso è l'ente stesso a indicare IELTS. Per **il CV in Europa**, per obiettivi scolastici e per lavori in cui devi dimostrare il B2, il B2 First è molto conosciuto e mantiene il suo valore. Il nostro articolo su IELTS o Cambridge mette a confronto i due nel dettaglio." },

    { h: 'Quanto tempo serve per prepararsi' },
    { p: "Cambridge English indica delle **ore di apprendimento guidato** approssimative per ogni livello: circa 350-400 ore da principiante assoluto per il B1, e circa 500-600 per il B2. Sono indicazioni, non regole, e contano le ore con un insegnante, ma danno un'idea: passare da un B1 solido al B2 richiede di solito **circa 150-200 ore** di apprendimento guidato, più lo studio personale." },
    { p: "La risposta onesta, quindi, dipende da dove parti. Se sei già al B2 e devi solo imparare il formato, spesso bastano da qualche settimana a due o tre mesi di esercitazione regolare. Se sei al B1, metti in conto mesi di lavoro costante sulla lingua, e poi il formato d'esame. Con tre ore di lezione a settimana, 150-200 ore guidate significano **circa un anno o più** di corso." },

    { h: 'Un piano di preparazione concreto' },
    { p: "Comincia con un **test diagnostico**: fai un esame di prova ufficiale completo con i tempi reali, o almeno una prova di ogni tipo. Correggilo e annota il punteggio di ciascuna delle cinque aree. Così capisci se ti serve più lingua o più pratica d'esame, e dove investire le tue ore." },
    { p: "All'inizio, costruisci la lingua. Leggi articoli e brevi racconti ogni settimana e tieni un quaderno di collocazioni, phrasal verbs e famiglie di parole, che alimentano direttamente le parti 1, 2 e 3. Esercitati a **riformulare**: prendi una frase e dilla in un altro modo. È proprio l'abilità che serve nelle key word transformations, e aiuta anche nel Writing e nello Speaking." },
    { p: "Quando la lingua comincia a girare, lavora sull'esame parte per parte. Fai una o due parti di Use of English più volte a settimana, controlla ogni errore e annota perché era sbagliato. Scrivi un testo a settimana in un formato diverso della Part 2 e fallo correggere: **un riscontro sui tuoi testi** vale più di scriverne il doppio senza. Ascolta podcast e interviste, poi fai le parti del Listening con il cronometro." },
    { p: "Esercita lo Speaking ad alta voce **con un'altra persona**. Cronometra il tuo minuto di monologo con il telefono, confronta le foto invece di descriverle una alla volta, e nel compito collaborativo allenati a coinvolgere il compagno e ad arrivare a una decisione prima che scada il minuto." },
    { p: "Nelle ultime quattro-sei settimane, fai **simulazioni complete** in condizioni d'esame, idealmente una ogni una o due settimane, e rivedile con attenzione. Iscriviti all'esame quando i tuoi punteggi di prova sono all'altezza dell'obiettivo, non prima." },
    { p: "Su Alimun, le lezioni dal vivo con un insegnante e lo stesso piccolo gruppo ti danno un compagno con cui parlare ogni settimana, e **il tuo insegnante corregge i tuoi compiti**, che è ciò di cui la preparazione al Writing ha più bisogno. Non sai a che livello sei? Il test di livello ti colloca da A1 a C1 in pochi minuti." },

    { h: "Errori comuni il giorno dell'esame" },
    { mistakes: [
      ['Scrivere sei parole in una key word transformation', 'Usare **da due a cinque parole**, parola chiave compresa', 'Con più di cinque parole la risposta vale zero, anche se il significato è giusto.'],
      ['Modificare la parola chiave, per esempio need in needed', 'Lasciare la parola chiave **esattamente com’è**', 'Se la parola chiave è cambiata o manca, la risposta non prende punti.'],
      ['Descrivere le foto una per una nella Part 2 dello Speaking', '**Confrontare** le due foto e rispondere alla domanda scritta sopra', 'Il compito chiede di confrontare e rispondere, non di descrivere.'],
      ['Parlare sopra al compagno nella Part 3', 'Chiedergli la sua opinione e **costruire su ciò che dice**', "L'Interactive Communication è uno dei criteri di valutazione."],
      ['Scrivere 240 parole in una review della Part 2', 'Restare **fra 140 e 190 parole**', 'I testi troppo lunghi possono contenere parti fuori tema e perdere punti.'],
    ] },
  ],
  quiz: [
    { q: 'Come si chiamava prima il B2 First?', options: ['First Certificate in English (FCE)', 'Certificate in Advanced English', 'Preliminary English Test', 'IELTS General Training'], a: 0, why: 'Il B2 First si è chiamato per decenni First Certificate in English, o FCE.' },
    { q: 'Quante domande ha Reading and Use of English?', options: ['30', '40', '52', '56'], a: 2, why: 'La prova ha 52 domande in sette parti e dura 1 ora e 15 minuti.' },
    { q: 'Quante parole puoi scrivere in una key word transformation?', options: ['Una sola', 'Da una a tre', 'Da due a cinque, parola chiave compresa', 'Fino a otto'], a: 2, why: 'La risposta deve avere da due a cinque parole, parola chiave compresa, senza modificarla.' },
    { q: 'Quanto deve essere lungo ogni testo del Writing?', options: ['Da 80 a 100 parole', 'Da 140 a 190 parole', 'Da 220 a 260 parole', 'Almeno 250 parole'], a: 1, why: 'Entrambi i compiti di Writing del B2 First chiedono da 140 a 190 parole.' },
    { q: 'Quante volte ascolti ogni registrazione del Listening?', options: ['Una', 'Due', 'Tre', 'Solo la Part 1 si ripete'], a: 1, why: 'Nel Listening del B2 First ogni registrazione si ascolta due volte.' },
    { q: 'Come si calcola il punteggio complessivo?', options: ['Contano solo Reading e Writing', 'Lo Speaking vale doppio', 'È la media di cinque punteggi con lo stesso peso', 'È il più basso dei tuoi punteggi'], a: 2, why: 'Il punteggio complessivo è la media di Reading, Use of English, Writing, Listening e Speaking.' },
    { q: 'Ottieni 165 come punteggio complessivo. Che cosa ricevi?', options: ['Nessun certificato', 'Un certificato B1', 'Voto C e un certificato B2', 'Voto A e un certificato C1'], a: 2, why: 'Da 160 a 172 si ottiene il voto C e il certificato B2 First di livello B2.' },
    { q: "Quando arrivano di solito i risultati del B2 First digitale?", options: ['Il giorno stesso', "Dopo 5-10 giorni lavorativi", "Dopo 4-6 settimane", 'Dopo tre mesi'], a: 1, why: "I risultati digitali arrivano di solito dopo 5-10 giorni lavorativi; quelli su carta dopo 4-6 settimane." },
  ],
  faq: [
    ['Il B2 First è lo stesso esame del FCE?', 'Sì. B2 First è il nome attuale dell’esame conosciuto per anni come First Certificate in English, o FCE. Il livello, B2, ora fa parte del nome, e il certificato riporta ancora “B2 First Certificate in English”.'],
    ['Si può essere bocciati al B2 First?', 'Se il punteggio complessivo è sotto 160 non ottieni il certificato B2, ma con 140-159 ricevi comunque un certificato di livello B1. Sotto 140 ricevi lo Statement of Results senza certificato.'],
    ['Il certificato B2 First scade?', 'No. I certificati Cambridge English non scadono. Alcune università e aziende chiedono un risultato recente, quindi controlla i loro requisiti prima di contare su un certificato vecchio.'],
    ['L’esame al computer è più facile?', 'No. Contenuti, tempi, formato e certificato sono gli stessi. Le differenze principali sono che digiti le risposte e che i risultati arrivano prima, di solito in 5-10 giorni lavorativi.'],
    ['Con il B2 First posso ottenere un certificato C1?', 'Sì. Con un punteggio complessivo da 180 a 190 ottieni il voto A e un certificato che attesta un livello C1. Se però un ente chiede esplicitamente il C1 Advanced, devi sostenere quell’esame.'],
  ],
  related: ['ielts-or-cambridge', 'cefr-english', 'how-long-english'],
  sources: [
    ['B2 First, Cambridge English', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/'],
    ['Formato del B2 First', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/format/'],
    ['Risultati del B2 First', 'https://www.cambridgeenglish.org/exams-and-tests/first/results/'],
    ['Handbook B2 First per insegnanti', 'https://www.cambridgeenglish.org/images/167791-b2-first-handbook.pdf'],
    ['Cambridge English, ore di apprendimento guidato', 'https://support.cambridgeenglish.org/hc/en-gb/articles/202838506-Guided-learning-hours'],
  ],
};
