// Third design (docs/BLOG_PLAN.md). Verificato il 4 nov 2026 su cambridgeenglish.org: pagina dell'esame C1 Advanced
// (livello, durata di circa 4 ore, digitale o su carta, oltre 11.000 enti che lo accettano), pagina del formato (prove,
// parti, domande, durate, parole del Writing, Speaking 15/23 minuti, formato identico su carta e al computer), pagine dei
// risultati in italiano e spagnolo (fasce 200-210, 193-199, 180-192, 160-179, 142-159, tempi dei risultati e dei
// certificati, media dei punteggi), handbook ufficiale C1 Advanced (1991, punti per parte, key word transformations da tre
// a sei parole, criteri di Writing e Speaking), pagina di preparazione (materiale gratuito), FAQ Cambridge sulla validità
// dei certificati e PDF "Comparing scores to IELTS" (185 = 7.0, 191 = 7.5, grade C paragonabile a 6.5-7.0, 160-179
// paragonabile a 5.5-6.0). Le tasse d'esame dipendono dal centro: nessuna cifra. Alimun non è affiliata a Cambridge.
export default {
  key: 'c1-advanced',
  site: 'it',
  slug: 'cambridge-c1-advanced-esame',
  section: 'exams',
  course: 'English',
  published: '2026-11-04',
  updated: '2026-11-04',
  title: 'Cambridge C1 Advanced (CAE): prove, punteggi e come prepararti',
  metaTitle: 'C1 Advanced Cambridge (CAE): prove, punteggi e test – Alimun',
  desc: "Il test d'inglese di livello C1 di Cambridge spiegato: le quattro prove con tempi e parti, la Cambridge English Scale da 160 a 210, IELTS e simulazioni gratuite.",
  lead: "Il C1 Advanced, che molti chiamano ancora CAE, è l'esame Cambridge che certifica un inglese avanzato, quello che serve per studiare all'università o lavorare in un ambiente internazionale. Qui trovi **come è fatto, parte per parte**, come leggere il punteggio e dove trovare simulazioni ufficiali gratuite.",
  photo: 'c1-advanced-library-shelves',
  sticker: { draw: 'parrot', say: 'Tre-sei parole, non una di più.' },
  facts: [
    { n: 4, unit: 'ore', text: "circa, la durata complessiva dell'esame, divisa in quattro prove" },
    { n: 56, unit: 'domande', text: 'in Reading and Use of English, in otto parti e 1 ora e 30 minuti' },
    { n: 185, text: 'il punteggio sulla Cambridge English Scale che Cambridge mette alla pari con IELTS 7.0' },
    { label: 'Nessuna scadenza', text: 'per il certificato, ma ogni ente decide quanto vecchio può essere un risultato' },
  ],
  blocks: [
    { take: { title: 'La risposta breve', text: "Il C1 Advanced è l'esame Cambridge English di livello C1 del QCER. Ha quattro prove, Reading and Use of English, Writing, Listening e Speaking, e dura **circa quattro ore**. Il punteggio va sulla Cambridge English Scale: da 180 a 199 ottieni il certificato C1, da 200 a 210 il voto A e un certificato che attesta il livello C2, da 160 a 179 un certificato di livello B2. Il certificato non scade.", draw: 'teacup' } },

    { h: "Che cos'è il C1 Advanced e a chi serve" },
    { p: "Il C1 Advanced fa parte delle Cambridge English Qualifications, la serie di esami che va dall'A2 Key al C2 Proficiency, in cui **ogni esame punta a un solo livello**. Cambridge lo ha introdotto nel 1991 e lo descrive come una qualifica di alto livello, riconosciuta da università, datori di lavoro e governi. Sta fra il B2 First e il C2 Proficiency, ed è l'esame che molti italiani cercano quando scrivono “test inglese livello C1”." },
    { p: "Secondo Cambridge, l'esame è pensato per chi deve dimostrare di saper seguire un corso universitario, comunicare in modo efficace a livello manageriale e professionale, partecipare con sicurezza a riunioni di lavoro, seminari e tutorial accademici, e svolgere ricerche complesse. In altre parole, è **la prova di un inglese che regge in contesti esigenti**, non solo nella vita di tutti i giorni." },
    { p: "Cambridge dichiara che il C1 Advanced è accettato da **oltre 11.000** istituzioni educative, aziende ed enti governativi. Prima di iscriverti, però, leggi sempre il requisito esatto dell'ente che ti interessa, che sia un'università, un datore di lavoro o un'amministrazione: a volte basta il livello, a volte serve un punteggio minimo." },

    { h: 'Le quattro prove in sintesi' },
    { p: "L'esame ha quattro prove. Reading and Use of English, Writing e Listening si svolgono in aula, su carta o al computer; lo Speaking si fa con due esaminatori e, di solito, con un altro candidato. Il centro d'esame ti comunica data e orario di ciascuna prova." },
    { table: {
      head: ['Prova', 'Durata', 'Parti', 'Domande', 'Cosa valuta'],
      rows: [
        ['Reading and Use of English', '1 ora e 30 minuti', '8', '56', 'Lessico, grammatica e comprensione di testi lunghi e complessi'],
        ['Writing', '1 ora e 30 minuti', '2', '2 testi', 'Un saggio obbligatorio e un testo a scelta fra tre, da 220 a 260 parole ciascuno'],
        ['Listening', 'Circa 40 minuti', '4', '30', 'Interviste, trasmissioni e conversazioni; ogni registrazione si ascolta due volte'],
        ['Speaking', '15 minuti a coppia', '4', '–', "Parlare con l'esaminatore, con l'altro candidato e con entrambi"],
      ],
      note: 'Lo Speaking dura 23 minuti quando i candidati sono tre. Cambridge precisa che il formato è lo stesso per l’esame digitale e per quello su carta.',
    } },
    { p: "Rispetto al B2 First cambiano parecchie cose: Reading and Use of English ha una parte in più e quindici minuti in più, i testi del Writing sono **più lunghi di circa settanta parole**, e lo Speaking ha qualche minuto in più. Il salto vero, però, è nella lingua richiesta: testi più astratti, opinioni implicite, toni da cogliere." },

    { h: 'Reading and Use of English' },
    { p: "È la prova più lunga e pesa due volte, perché da qui escono due dei cinque punteggi: Reading e Use of English. In 1 ora e 30 minuti affronti otto parti e 56 domande. Non tutte valgono uguale: secondo l'handbook ufficiale, **le parti 4, 5, 6 e 7 valgono due punti a domanda**, le parti 1, 2, 3 e 8 un punto. Tienine conto quando decidi quanto tempo dare a ciascuna." },
    { h3: 'Parti da 1 a 4: lessico e grammatica' },
    { p: "La Part 1 è un cloze a scelta multipla: otto spazi in un testo, quattro opzioni per ognuno. Qui contano idiomi, collocazioni, espressioni fisse, phrasal verbs e la precisione di significato, cioè distinguere parole che in italiano tradurresti allo stesso modo. La Part 2 è un cloze aperto: otto spazi e nessuna opzione, scrivi tu **una sola parola**, spesso un articolo, una preposizione, un ausiliare o un connettivo. Le forme contratte non sono accettate." },
    { p: "La Part 3 è la formazione delle parole: otto spazi e, a lato, la parola base da trasformare con prefissi, suffissi, cambi interni o composti. La Part 4 sono le key word transformations: sei frasi da riscrivere con lo stesso significato usando una parola chiave data. Al C1 la risposta deve avere **da tre a sei parole**, parola chiave compresa, la parola chiave non si cambia e le forme contratte contano come due parole. Ogni risposta è corretta in due metà, un punto ciascuna. In tutto lo Use of English l'ortografia deve essere corretta." },
    { examples: [
      ['She said I was wrong about the dates. (ACCUSED) She ___ the dates wrong.', 'Risposta possibile: **accused me of getting** (quattro parole). Il verbo accuse regge of più la forma in -ing.'],
      ['It was only when I got home that I realised I had lost my keys. (UNTIL) I ___ home that I had lost my keys.', 'Risposta possibile: **did not realise until I got** (sei parole, il massimo). Con didn’t sarebbero comunque sei, perché la contrazione conta come due.'],
      ['People say the castle was built in the twelfth century. (SAID) The castle ___ built in the twelfth century.', 'Risposta possibile: **is said to have been** (cinque parole). È il passivo con i verbi di opinione, molto amato da questa parte.'],
    ] },
    { h3: 'Parti da 5 a 8: lettura' },
    { p: "La Part 5 è un testo lungo con sei domande a scelta multipla su dettagli, opinioni, atteggiamento, tono, scopo e implicazioni. La Part 6 è tipica del C1: **quattro brevi testi sullo stesso tema**, per esempio quattro recensioni di un libro, e quattro domande che ti chiedono di confrontare le opinioni degli autori, capire chi è d'accordo con chi e chi la pensa diversamente. Non basta capire ogni testo da solo, devi leggerli l'uno contro l'altro." },
    { p: "La Part 7 è un testo da cui sono stati tolti sei paragrafi, mescolati a un settimo che non va da nessuna parte; li rimetti al loro posto seguendo la struttura e i riferimenti del testo. La Part 8 è un abbinamento multiplo con dieci domande: trovi in quale testo, o in quale sezione, compare un'informazione o un'opinione. Qui vince chi sa **leggere velocemente cercando**, non chi legge ogni riga." },
    { note: { title: 'Occhio al cronometro', text: "Le parti 5, 6 e 7 hanno poche domande ma valgono due punti ciascuna. Se perdi venti minuti sulla Part 1, li paghi alla fine sui testi lunghi. **Decidi prima un tempo per parte** e allenati a rispettarlo nelle simulazioni.", draw: 'snail' } },

    { h: 'Writing' },
    { p: "Il Writing dura 1 ora e 30 minuti e chiede due testi da **220 a 260 parole** ciascuno. La Part 1 è obbligatoria: un saggio (essay) di taglio argomentativo, di solito scritto per un docente dopo un'attività come un seminario o un documentario. Parti da due punti indicati nel testo del compito, spieghi quale ritieni più importante e motivi la tua opinione, con un'introduzione, uno sviluppo chiaro e una conclusione." },
    { p: "Nella Part 2 scegli un compito fra tre. I formati possibili sono lettera o email, proposta (proposal), relazione (report) e recensione (review). Ogni compito ti dà un contesto, un argomento, uno scopo e un lettore preciso. La proposal è la novità rispetto al B2 First: è un testo per un superiore o per un gruppo di colleghi in cui **suggerisci una linea d'azione** e la sostieni con fatti e valutazioni, di solito organizzato con dei titoletti come una relazione." },
    { p: "Gli esaminatori valutano ogni testo su quattro scale: Content, cioè se hai fatto tutto ciò che il compito chiedeva; Communicative Achievement, se registro e formato sono adatti a quel lettore; Organisation, quanto il testo è coeso e ben collegato; Language, la varietà e la precisione di grammatica e lessico. I due compiti valgono uguale. L'inglese britannico, quello americano e le altre varietà sono tutti accettati, **purché tu sia coerente**." },
    { figure: { photo: 'c1-advanced-laptop-writing', alt: 'Un portatile aperto accanto a un quaderno con una penna rosa e un bicchiere di succo, su una coperta chiara', caption: 'I due testi del Writing chiedono da 220 a 260 parole: allenati a scriverli nel tempo, anche al computer se sceglierai l’esame digitale.' } },
    { note: { title: 'Contare le parole fa perdere tempo', text: "L'handbook lo dice chiaramente: contare le parole durante l'esame spreca tempo. Durante la preparazione, invece, impara **quanto è lungo un tuo testo da 240 parole**, così all'esame lo riconosci a colpo d'occhio.", draw: 'cat' } },

    { h: 'Listening' },
    { p: "Il Listening dura circa 40 minuti, ha quattro parti e 30 domande, e ogni registrazione si ascolta **due volte**. Nella Part 1 ascolti tre brevi conversazioni, con due domande a scelta multipla ciascuna, per sei domande in tutto. Nella Part 2 un monologo di circa tre minuti, una presentazione o un intervento, e completi otto frasi con le parole che senti." },
    { p: "La Part 3 è un'intervista o una discussione di circa quattro minuti con sei domande a scelta multipla, spesso su opinioni e atteggiamenti di chi parla. La Part 4 è la più temuta: **cinque brevi monologhi** di circa 30 secondi sullo stesso tema e due compiti di abbinamento da svolgere insieme, per esempio il lavoro di chi parla e che cosa pensa di un'esperienza. Sono dieci domande, e devi seguire due fili mentre ascolti." },
    { figure: { photo: 'c1-advanced-headphones', alt: 'Una ragazza in maglione chiaro che tiene fra le mani un paio di cuffie bianche', caption: 'Nel Listening ogni registrazione si sente due volte: usa il primo ascolto per orientarti, il secondo per confermare.' } },

    { h: 'Speaking' },
    { p: "Lo Speaking dura 15 minuti per una coppia e 23 per un gruppo di tre. Ci sono due esaminatori: l'interlocutor, che fa le domande e dà un giudizio complessivo, e l'assessor, che non interviene e assegna i punti con criteri analitici. Vieni valutato **sulla tua prestazione**, non in confronto all'altro candidato." },
    { p: "La Part 1 è una breve intervista di circa due minuti. Nella Part 2 ricevi tre immagini, ne scegli due e ne parli da solo per circa un minuto, rispondendo alle domande scritte sopra; poi commenti brevemente le immagini del compagno per circa 30 secondi. Nella Part 3 discutete insieme un tema con alcuni spunti scritti per due minuti, poi avete **un minuto per arrivare a una decisione**. La Part 4 è una discussione più ampia sullo stesso argomento, di circa cinque minuti." },
    { p: "L'assessor valuta Grammatical Resource, Lexical Resource, Discourse Management, Pronunciation e Interactive Communication; l'interlocutor assegna il voto di global achievement. Al C1 contano molto la capacità di **parlare di idee astratte** senza esitare troppo e quella di costruire sul discorso del compagno invece di aspettare il tuo turno." },
    { figure: { photo: 'c1-advanced-business-meeting', alt: 'Un uomo gesticola mentre parla a una riunione attorno a un tavolo con computer portatili', caption: 'Discutere, negoziare e arrivare a una decisione: la Part 3 dello Speaking assomiglia molto a una riunione di lavoro.' } },

    { cta: true },

    { h: 'La Cambridge English Scale: punteggi da 160 a 210' },
    { p: "Il risultato del C1 Advanced è espresso sulla **Cambridge English Scale**, la stessa scala usata per tutte le Cambridge English Qualifications. Ricevi cinque punteggi, per Reading, Use of English, Writing, Listening e Speaking, e il punteggio complessivo è la loro media. Voto e livello QCER dipendono dal punteggio complessivo." },
    { table: {
      head: ['Punteggio complessivo', 'Risultato', 'Livello QCER sul certificato'],
      rows: [
        ['Da 200 a 210', 'Voto A', 'C2'],
        ['Da 193 a 199', 'Voto B', 'C1'],
        ['Da 180 a 192', 'Voto C', 'C1'],
        ['Da 160 a 179', 'Livello B2', 'B2'],
        ['Da 142 a 159', 'Esame non superato', 'Nessun certificato, il punteggio compare nello Statement of Results'],
      ],
      note: 'Fonte: pagina dei risultati del C1 Advanced su cambridgeenglish.org.',
    } },
    { p: "Due cose da capire bene. La prima: il C1 Advanced valuta anche **sopra e sotto il livello** dell'esame. Se vai molto bene, con 200 o più ricevi un certificato che attesta il C2. Se resti fra 160 e 179 non ottieni il C1, ma Cambridge ti rilascia comunque un certificato che attesta il livello B2. Non è il risultato che cercavi, ma non esci a mani vuote." },
    { p: "La seconda: siccome il punteggio è una media, **una prova storta non decide tutto da sola**. Un Writing sotto le attese può essere compensato da un Reading e uno Use of English solidi. Attenzione però ai requisiti: alcune università chiedono un punteggio minimo anche in ciascuna abilità, e lì la media non ti salva." },
    { quote: 'Sotto il C1 non si cade nel vuoto: da 160 a 179 hai comunque un certificato B2.' },

    { h: 'Su carta o al computer' },
    { p: "Puoi sostenere il C1 Advanced su carta o in versione digitale, al computer, in un centro autorizzato. Cambridge precisa che **il formato è lo stesso** nelle due versioni: stesse parti, stessi tempi, stesso certificato. Lo Speaking resta un colloquio con gli esaminatori in entrambi i casi." },
    { p: "Cambia la velocità dei risultati. Secondo la pagina ufficiale dei risultati, lo Statement of Results online arriva circa **2-3 settimane dopo l'esame digitale** e circa 4-6 settimane dopo quello su carta. Il certificato viene spedito al centro circa tre settimane dopo la pubblicazione dei risultati, e il centro poi lo consegna a te. Se hai una scadenza per un'iscrizione all'università o una candidatura, controlla le date sulla conferma d'iscrizione del tuo centro e scegli il formato di conseguenza." },
    { p: "C'è anche una questione di abitudine. Se scrivi più velocemente alla tastiera, il digitale ti aiuta nel Writing; se sei abituato a sottolineare i testi a penna, la carta può farti sentire più a tuo agio nel Reading. **Prova entrambi i formati** con le simulazioni gratuite prima di decidere." },

    { h: 'Quanto costa in Italia' },
    { p: "Il C1 Advanced si sostiene presso i centri d'esame autorizzati da Cambridge, e **la tassa d'iscrizione la stabilisce il centro**: può variare da una città all'altra e fra esame su carta e digitale. Per questo non trovi qui una cifra. Cerca il centro più vicino con lo strumento “Find an exam centre” sul sito di Cambridge e chiedi direttamente prezzi, date disponibili e scadenze d'iscrizione." },

    { h: 'Validità: il certificato scade?' },
    { p: "No. Cambridge lo dice esplicitamente: **i certificati Cambridge English non scadono**. Aggiunge però che gli enti che li riconoscono, come università, college e datori di lavoro, possono decidere per quanto tempo accettare un risultato, quindi conviene verificare i loro requisiti." },
    { p: "In pratica, un C1 Advanced preso dieci anni fa resta un certificato valido, ma un'università o un'azienda potrebbe chiederti un risultato più recente. Se stai preparando una candidatura, **leggi la pagina dei requisiti linguistici** dell'ente prima di contare su un certificato vecchio." },

    { h: 'C1 Advanced e IELTS: come si confrontano' },
    { p: "Cambridge gestisce sia i suoi esami sia IELTS, e ha pubblicato una tabella ufficiale che mette in relazione i punteggi della Cambridge English Scale del B2 First e del C1 Advanced con le fasce IELTS. È utile quando un ente chiede IELTS e tu hai, o vuoi fare, il C1 Advanced." },
    { table: {
      head: ['Fascia IELTS', 'Punteggio Cambridge English Scale'],
      rows: [
        ['7.5', '191'],
        ['7.0', '185'],
        ['6.5', '176'],
        ['6.0', '169'],
        ['5.5', '162'],
      ],
      note: 'Fonte: Cambridge English, “Comparing scores to IELTS” (B2 First e C1 Advanced). La tabella ufficiale si ferma a 7.5.',
    } },
    { p: "Lo stesso documento spiega che chi ottiene il voto C al C1 Advanced, cioè da 180 a 192, è al livello C1 e **paragonabile a chi ha 6.5 o 7.0 in IELTS**; chi resta fra 160 e 179 è paragonabile a 5.5 o 6.0. Quando un ente chiede IELTS 7.0, Cambridge suggerisce di chiedere 185 e, se serve, di specificare che il punteggio deve venire dal C1 Advanced e non dal B2 First." },
    { p: "Questa è una corrispondenza fra punteggi, non una regola d'ammissione: **decide sempre l'ente**. Alcune università accettano il C1 Advanced al posto di IELTS, altre no, e per i visti di alcuni paesi serve proprio IELTS. Il nostro articolo IELTS o Cambridge mette a confronto i due esami nel dettaglio." },

    { h: 'Come prepararti con il materiale ufficiale gratuito' },
    { p: "Se cerchi una “simulazione test C1 inglese”, il primo posto dove guardare è la pagina di preparazione del C1 Advanced su cambridgeenglish.org. Lì trovi **test di esempio digitali gratuiti** per Listening, Reading and Use of English e Writing, che riproducono l'interfaccia dell'esame al computer, e due sample papers per l'esame su carta, con soluzioni e trascrizione dell'ascolto." },
    { p: "Ci sono anche i video dello Speaking con i commenti degli esaminatori su tre coppie di candidati, molto utili per capire che cosa distingue una prestazione da C1. Il manuale per insegnanti, l'handbook, descrive ogni parte con esempi e criteri di valutazione, e c'è una guida per **convertire i punteggi delle simulazioni** sulla Cambridge English Scale. Per il Writing, Cambridge offre gratis Write & Improve, uno strumento online per esercitarti a scrivere." },
    { p: "Un piano sensato parte da una simulazione completa con i tempi reali, così vedi dove sei in ciascuna delle cinque aree. Poi lavora sulla lingua: leggi articoli d'opinione e saggistica in inglese, tieni un quaderno di collocazioni e strutture, ed esercitati a **riformulare le frasi** in più modi, che è proprio quello che chiedono le key word transformations." },
    { p: "Per il Writing, scrivi un testo a settimana in un formato diverso, con particolare attenzione alla proposal e al saggio, e fallo correggere da qualcuno che conosce i criteri. Per lo Speaking, allenati ad alta voce con un'altra persona: cronometra il minuto della Part 2 e prova a raggiungere una decisione condivisa nella Part 3 entro il tempo. Nelle ultime settimane, **fai simulazioni complete** e iscriviti quando i punteggi di prova sono stabilmente all'altezza del tuo obiettivo." },
    { p: "Su Alimun le lezioni dal vivo con un insegnante, in un piccolo gruppo, ti danno ogni settimana qualcuno con cui parlare e un insegnante che corregge i tuoi compiti scritti. Se non sai da che livello parti, il test di livello ti colloca da A1 a C2 in pochi minuti." },

    { h: "Errori comuni il giorno dell'esame" },
    { mistakes: [
      ['Scrivere due parole in una key word transformation del C1', 'Usare **da tre a sei parole**, parola chiave compresa', 'Al C1 il minimo è tre parole e il massimo sei; le forme contratte contano come due.'],
      ['Scrivere didn’t nella Part 2 dello Use of English', 'Scrivere **una sola parola intera**', 'Nel cloze aperto ogni spazio vuole una parola, e le forme contratte non sono accettate.'],
      ['Leggere i quattro testi della Part 6 uno alla volta senza confrontarli', 'Annotare **l’opinione di ogni autore** sul punto in questione', 'Le domande chiedono chi è d’accordo o in disaccordo con chi.'],
      ['Scrivere una proposal come se fosse un saggio', 'Fare proposte motivate, con titoletti e **un tono adatto al lettore**', 'Communicative Achievement valuta proprio se il testo funziona per quel destinatario.'],
      ['Descrivere le immagini nella Part 2 dello Speaking', 'Scegliere due immagini e **rispondere alle domande** stampate sopra', 'Il compito è confrontare e ragionare, non descrivere.'],
    ] },
  ],
  quiz: [
    { q: 'Quanto dura la prova di Reading and Use of English del C1 Advanced?', options: ['1 ora e 15 minuti', '1 ora e 30 minuti', '2 ore', 'Circa 40 minuti'], a: 1, why: 'La prova dura 1 ora e 30 minuti e ha otto parti con 56 domande.' },
    { q: 'Quante parole puoi usare in una key word transformation del C1 Advanced?', options: ['Da due a cinque', 'Da tre a sei', 'Da quattro a otto', 'Una sola'], a: 1, why: "Al C1 la risposta ha da tre a sei parole, parola chiave compresa." },
    { q: 'Quanto devono essere lunghi i testi del Writing?', options: ['Da 140 a 190 parole', 'Da 180 a 220 parole', 'Da 220 a 260 parole', 'Almeno 300 parole'], a: 2, why: 'Entrambi i compiti di Writing del C1 Advanced chiedono da 220 a 260 parole.' },
    { q: 'Che cosa ricevi con un punteggio complessivo di 172?', options: ['Il voto C e un certificato C1', 'Un certificato che attesta il livello B2', 'Nessun certificato', 'Il voto A'], a: 1, why: 'Da 160 a 179 Cambridge rilascia un certificato che attesta il livello B2.' },
    { q: 'Quale punteggio Cambridge mette in relazione con IELTS 7.0?', options: ['176', '180', '185', '200'], a: 2, why: 'Nella tabella ufficiale “Comparing scores to IELTS”, 185 corrisponde a IELTS 7.0.' },
    { q: 'Che cosa succede nella Part 6 di Reading and Use of English?', options: ['Riempi otto spazi con una parola', 'Confronti le opinioni di quattro brevi testi sullo stesso tema', 'Rimetti in ordine sei paragrafi', 'Ascolti cinque monologhi'], a: 1, why: 'La Part 6 è il cross-text multiple matching: quattro testi brevi e domande che confrontano le opinioni.' },
    { q: 'Il certificato C1 Advanced scade?', options: ['Dopo due anni', 'Dopo cinque anni', 'No, ma gli enti possono chiedere un risultato recente', 'Solo se è stato preso su carta'], a: 2, why: 'I certificati Cambridge English non scadono, ma università e datori di lavoro decidono per quanto tempo accettarli.' },
    { q: 'Quanto dura lo Speaking per una coppia di candidati?', options: ['10 minuti', '14 minuti', '15 minuti', '23 minuti'], a: 2, why: 'Lo Speaking dura 15 minuti per una coppia e 23 per un gruppo di tre.' },
  ],
  faq: [
    ['C1 Advanced e CAE sono lo stesso esame?', 'Sì. C1 Advanced è il nome attuale dell’esame Cambridge di livello C1, che molti in Italia chiamano ancora CAE. Il livello è indicato nel nome stesso.'],
    ['Dove trovo una simulazione gratuita del test C1?', 'Sulla pagina di preparazione del C1 Advanced su cambridgeenglish.org: ci sono test di esempio digitali per Listening, Reading and Use of English e Writing, due sample papers su carta con soluzioni e i video dello Speaking con i commenti degli esaminatori.'],
    ['Se non arrivo a 180 perdo tutto?', 'No. Con un punteggio complessivo da 160 a 179 Cambridge ti rilascia un certificato che attesta il livello B2. Solo da 142 a 159 non ricevi il certificato, ma il punteggio compare comunque nello Statement of Results.'],
    ['Quanto costa il C1 Advanced in Italia?', 'Dipende dal centro d’esame autorizzato, che fissa la tassa e può applicare prezzi diversi per l’esame su carta e per quello digitale. Chiedi direttamente al centro più vicino, che trovi con lo strumento “Find an exam centre” di Cambridge.'],
    ['Il C1 Advanced vale come IELTS 7.0?', 'Cambridge mette in relazione un punteggio di 185 sulla Cambridge English Scale con IELTS 7.0. Se un ente accetta il C1 Advanced al posto di IELTS lo decide l’ente stesso, quindi controlla sempre i suoi requisiti.'],
  ],
  related: ['b2-first', 'ielts-or-cambridge', 'cefr-english', 'english-b2-level', 'ielts-band-scores'],
  sources: [
    ['C1 Advanced, Cambridge English', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/advanced/'],
    ['Formato del C1 Advanced', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/advanced/format/'],
    ['Risultati del C1 Advanced (italiano)', 'https://www.cambridgeenglish.org/it/exams-and-tests/advanced/results/'],
    ['Handbook C1 Advanced per insegnanti', 'https://www.cambridgeenglish.org/images/167804-c1-advanced-handbook.pdf'],
    ['Preparazione al C1 Advanced e test di esempio', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/advanced/preparation/'],
    ['Comparing scores to IELTS, Cambridge English', 'https://www.cambridgeenglish.org/Images/461626-cambridge-english-qualifications-comparing-scores-to-ielts.pdf'],
    ['FAQ Cambridge English sulla validità dei certificati', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/business/faqs'],
  ],
};
