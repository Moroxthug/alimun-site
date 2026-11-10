// Articolo (terzo design, docs/BLOG_PLAN.md). Fatti verificati il 10 nov 2026 solo su fonti ufficiali:
// normattiva.it: d.lgs. 165/2001 art. 37 (accertamento della lingua inglese nei bandi; livelli fissati da regolamento);
// DPR 487/1994 nel testo in vigore dal 14-7-2023: art. 3 c. 2 lett. c (il bando indica l'accertamento di almeno una
// lingua straniera, le prove e i punteggi), art. 4 (partecipazione solo tramite il Portale unico del reclutamento inPA),
// art. 9 c. 11 (membri aggiunti per gli esami di lingua straniera); DM 249/2010 art. 14 (corsi CLIL: abilitati con
// certificazione almeno C1, almeno 60 CFU con tirocinio di 300 ore pari a 12 CFU).
// mim.gov.it: OM n. 27 del 16 febbraio 2026 (GPS 2026/27-2027/28), Allegati A (tabelle titoli A_1-A_10: certificazioni
// almeno B2, B2 3 punti, C1 4, C2 6, un solo titolo per lingua, solo enti in elenco e nel periodo di vigenza del
// riconoscimento; nelle tabelle della secondaria B.12 titolo CLIL art. 14 DM 249/2010 6 punti, B.13 CeClil/corsi CLIL
// 3 punti se congiunti alla certificazione B.14), Allegato D1 (elenco enti e nota sulla scadenza dei certificati,
// es. TOEFL e IELTS), art. 13 c. 16 (supplenze di inglese alla primaria); Piattaforma Enti Certificatori (elenco vigente
// dall'a.s. 2024/2025: per l'inglese British Institutes, Cambridge University Press & Assessment, ETS (TOEFL iBT),
// Pearson Education Limited, Trinity College London; avviso su livello QCER e certificato "auto-consistente");
// DM 205 e DM 206 del 26 ottobre 2023 e Allegati B (concorsi docenti: 5 quesiti su 50 di inglese B2 nello scritto,
// orale con inglese almeno B2, 250 punti di cui 50 per i titoli, soglia 70; certificazioni almeno C1: C1 3,75, C2 5;
// CLIL 3,75; CeClil 2,5).
// Non verificato e quindi omesso: eventuali modifiche successive alle tabelle dei DM 205/206, livelli richiesti dai
// singoli concorsi non scolastici, prezzi degli esami, durata di validità dei singoli certificati.
export default {
  key: 'english-public-competitions',
  site: 'it',
  slug: 'certificazione-inglese-concorsi-pubblici',
  section: 'exams',
  course: 'English',
  published: '2026-11-10',
  updated: '2026-11-10',
  title: 'Certificazione di inglese nei concorsi pubblici e nelle GPS: quanto vale davvero',
  metaTitle: 'Certificazione inglese per concorsi pubblici e GPS – Alimun',
  desc: "Quanto vale una certificazione di inglese nelle GPS e nei concorsi pubblici: punteggi per B2, C1 e C2, enti riconosciuti dal MIM e cosa controllare nel bando.",
  lead: "Nei concorsi pubblici l'inglese c'è sempre, ma non vale sempre allo stesso modo. Nelle graduatorie della scuola una certificazione B2 porta punti, nei concorsi docenti conta solo dal C1, e negli altri concorsi **decide il bando**. Qui trovi le regole ufficiali, gli enti riconosciuti e i controlli da fare prima di iscriverti a un esame.",
  photo: 'english-public-competitions-chalkboard',
  sticker: { draw: 'owl', say: 'Prima il bando, poi l’esame.' },
  facts: [
    { n: 3, unit: 'punti', text: 'per una certificazione B2 nelle GPS 2026/27 e 2027/28, secondo le tabelle dell’OM 27/2026' },
    { n: 6, unit: 'punti', text: 'per una certificazione C2 nelle stesse tabelle, contro i 4 del C1' },
    { label: 'Solo dal C1', text: 'le certificazioni che danno punti nei concorsi docenti dei DM 205 e 206 del 2023' },
    { label: '5 enti', text: 'riconosciuti dal Ministero per l’inglese nell’elenco vigente dall’anno scolastico 2024/2025' },
  ],
  blocks: [
    { take: {
      title: 'La risposta breve',
      text: "Per legge ogni bando di concorso pubblico deve prevedere **l'accertamento della lingua inglese**, ma il livello e l'eventuale punteggio dei certificati li fissa il singolo bando. Nella scuola le regole sono scritte: nelle GPS 2026/28 una certificazione vale 3 punti al B2, 4 al C1 e 6 al C2, mentre nei concorsi docenti ordinari conta solo **dal C1 in su**. In entrambi i casi il certificato deve venire da un ente dell'elenco del Ministero dell'istruzione e del merito.",
      draw: 'owl',
    } },

    { h: "Perché l'inglese c'è in ogni concorso" },
    { p: "Il punto di partenza è l'articolo 37 del decreto legislativo 165 del 2001, il testo base sul pubblico impiego. Dice che i bandi per l'accesso alle pubbliche amministrazioni prevedono **l'accertamento della conoscenza della lingua inglese**, oltre che degli strumenti informatici più diffusi, e, quando serve per il profilo, di altre lingue straniere. Lo stesso articolo rinvia a un regolamento per stabilire i livelli di conoscenza richiesti e le modalità dell'accertamento." },
    { p: "Il regolamento sui concorsi, il DPR 487 del 1994 nel testo aggiornato in vigore dal 14 luglio 2023, ripete l'obbligo in modo pratico. Tra le cose che il bando deve indicare ci sono il numero e il tipo di prove, compreso **l'accertamento di almeno una lingua straniera**, i punteggi attribuibili e il punteggio minimo per passare alle fasi successive. L'articolo 9 permette di aggiungere alle commissioni membri esterni proprio per gli esami di lingua straniera." },
    { p: "In pratica questo significa che non esiste un livello di inglese unico per tutti i concorsi pubblici. Esiste un obbligo generale di verificarlo, e poi **ogni bando decide come**: una domanda all'orale, qualche quesito nella prova scritta, una prova a parte, oppure punti per i titoli. Per questo, prima di prenotare un esame di certificazione, la prima cosa da leggere è il bando che ti interessa." },
    { note: { title: 'Dove trovi i bandi', text: "Secondo il DPR 487, nel testo in vigore dal 14 luglio 2023, ai concorsi che regola si partecipa solo dopo esserti registrato sul **Portale unico del reclutamento**, inPA, e lì arrivano anche le comunicazioni ai candidati, comprese date e sedi delle prove. È il primo posto dove cercare il testo completo del bando e i suoi allegati.", draw: 'cat' } },

    { h: 'Le GPS: quanti punti vale una certificazione' },
    { p: "Le graduatorie provinciali per le supplenze (GPS) sono il caso più chiaro, perché i punteggi sono fissati a livello nazionale. Per il biennio 2026/27 e 2027/28 vale l'**ordinanza ministeriale n. 27 del 16 febbraio 2026**, che ha aggiornato e rinnovato le graduatorie provinciali e di istituto. Le tabelle di valutazione dei titoli sono negli Allegati A, una per ogni fascia e tipo di posto: infanzia e primaria, secondaria, insegnanti tecnico-pratici, sostegno e personale educativo." },
    { p: "In tutte le tabelle trovi la stessa voce: certificazioni linguistiche di livello almeno B2 in lingua straniera. Sotto il B2 non ci sono punti, e il punteggio sale con il livello. Nelle tabelle della secondaria è la voce B.14, ma il contenuto è lo stesso anche nelle altre." },
    { table: {
      head: ['Livello della certificazione', 'Punti nelle GPS 2026/28'],
      rows: [
        ['B1 o inferiore', 'Nessun punto'],
        ['B2', '3'],
        ['C1', '4'],
        ['C2', '6'],
      ],
      note: "Fonte: OM n. 27 del 16 febbraio 2026, Allegati A. Si valuta un solo titolo per ciascuna lingua straniera.",
    } },
    { p: "Le condizioni sono tre, e tutte scritte nella stessa voce della tabella. La certificazione deve essere conseguita secondo i decreti ministeriali che regolano gli enti (il decreto del 7 marzo 2012 prot. 3889, il DM 62 del 10 marzo 2022 e il DM 200 del 18 ottobre 2022). Deve venire **esclusivamente da un ente dell'elenco** riconosciuto dal Ministero. E deve essere stata ottenuta mentre il riconoscimento di quell'ente era in vigore: un ente uscito dall'elenco non rende validi i certificati presi dopo la sua uscita." },
    { p: "C'è poi la regola di un solo titolo per lingua. Se hai un B2 First e poi un C1 Advanced, non sommi 3 e 4 punti: ti viene valutato **un solo titolo per l'inglese**, quindi conviene dichiarare quello più alto. Puoi invece avere punti per lingue diverse, per esempio inglese e tedesco, perché il limite è per ciascuna lingua." },
    { figure: { photo: 'english-public-competitions-document', alt: 'Un documento stampato con sezioni numerate e una penna appoggiata sopra, accanto a un quaderno blu', caption: "La tabella dei titoli è un allegato dell'ordinanza: leggila per la tua fascia prima di compilare la domanda." } },

    { h3: 'CLIL e certificazione: perché vanno insieme' },
    { p: "Il CLIL è l'insegnamento di una disciplina non linguistica in lingua straniera, per esempio storia o scienze in inglese. Il decreto ministeriale 249 del 2010, all'articolo 14, prevede i corsi di perfezionamento per insegnare così nella secondaria di secondo grado. Sono aperti ai docenti già abilitati con una competenza linguistica certificata di **almeno livello C1** e valgono almeno 60 crediti formativi, compreso un tirocinio di almeno 300 ore pari a 12 crediti." },
    { p: "Nelle tabelle GPS della secondaria il titolo di perfezionamento CLIL ottenuto secondo l'articolo 14, o il titolo abilitante al CLIL ottenuto in un altro paese dell'Unione, vale 6 punti. La certificazione CeClil, i percorsi di perfezionamento CLIL del 2012 e i corsi universitari di metodologia CLIL da 60 crediti valgono invece 3 punti, ma solo **se sono congiunti alla certificazione** nella relativa lingua straniera della voce B.14. Senza un certificato di lingua valido, questi titoli non danno punti." },
    { note: { title: 'Un certificato valido oggi può non valere domani', text: "Nell'allegato all'ordinanza GPS con l'elenco degli enti, il Ministero avverte che la validità dell'ente **non basta da sola**: alcuni enti prevedono una scadenza del certificato, dopo la quale bisogna ripetere l'esame, e cita come esempi TOEFL e IELTS. Controlla la data di scadenza stampata sul tuo certificato.", draw: 'snail' } },

    { h: 'I concorsi docenti: B2 obbligatorio, punti solo dal C1' },
    { p: "Nei concorsi ordinari per entrare di ruolo, le regole sono nei regolamenti del Ministero del 26 ottobre 2023: il **DM 205** per la secondaria di primo e secondo grado e il **DM 206** per infanzia e primaria. Qui l'inglese entra in due modi diversi: come conoscenza verificata nelle prove e come titolo che dà punteggio." },
    { p: "Nella prova scritta, che è computer-based e dura 100 minuti, ci sono cinquanta quesiti a risposta multipla. Quaranta riguardano pedagogia, psicopedagogia e didattica, cinque le competenze digitali e **cinque la lingua inglese al livello B2** del Quadro comune europeo. La prova si supera con almeno 70 punti su 100. Anche all'orale, per i posti comuni e di sostegno, la commissione valuta la capacità di comprensione e conversazione in inglese almeno al livello B2." },
    { p: "Per chi concorre a insegnare proprio inglese le regole cambiano. Nella secondaria, per le classi di concorso A-24, A-25 e B-02 l'orale si svolge nella lingua oggetto di insegnamento, e chi concorre per l'inglese in queste classi non fa la verifica separata del B2. Per la primaria il DM 206 prevede che la commissione nazionale indichi nei quadri di riferimento dell'orale il livello con cui il candidato ottiene anche **l'idoneità all'insegnamento della lingua inglese**." },
    { p: "Sui titoli, invece, la soglia è più alta che nelle GPS. Le commissioni hanno 250 punti, di cui 100 per lo scritto, 100 per l'orale e 50 per i titoli. Nelle tabelle allegate ai due decreti le certificazioni linguistiche valgono solo se sono **di livello almeno C1**, sempre rilasciate da enti dell'elenco ministeriale e con un solo titolo per lingua." },
    { table: {
      head: ['Titolo', 'GPS 2026/28 (OM 27/2026)', 'Concorsi docenti (DM 205 e 206 del 2023)'],
      rows: [
        ['Certificazione B2', '3 punti', 'Nessun punto'],
        ['Certificazione C1', '4 punti', '3,75 punti'],
        ['Certificazione C2', '6 punti', '5 punti'],
        ['Perfezionamento CLIL (art. 14 DM 249/2010)', '6 punti (secondaria)', '3,75 punti'],
        ['CeClil o corso CLIL, con certificazione', '3 punti (secondaria)', '2,5 punti'],
      ],
      note: "Fonti: Allegati A dell'OM 27/2026 e Allegati B dei DM 205 e 206 del 26 ottobre 2023. Il bando di ogni procedura può richiamare tabelle aggiornate: controlla quelle in vigore.",
    } },
    { p: "La tabella mostra il paradosso che confonde molti candidati. Un B2 ti serve comunque, perché è il livello su cui sei verificato allo scritto e all'orale, ma **come titolo nel concorso non vale nulla**, mentre nelle GPS vale 3 punti. Se pensi di fare sia le supplenze sia il concorso, puntare al C1 ha senso doppio: dà punti in entrambi." },
    { cta: true },

    { h: 'Quali enti sono riconosciuti per l’inglese' },
    { p: "Il Ministero tiene un elenco degli enti certificatori delle competenze linguistico-comunicative del personale scolastico. L'elenco vigente dall'**anno scolastico 2024/2025** si consulta sulla Piattaforma Enti Certificatori del Ministero ed è riportato anche nell'Allegato D1 dell'ordinanza GPS, che lo cita come aggiornato con il decreto del 21 novembre 2024, n. 2813. Per l'inglese, oggi gli enti sono cinque." },
    { table: {
      head: ['Ente certificatore', 'Esami indicati per l’inglese'],
      rows: [
        ['Cambridge University Press & Assessment', 'Dal B2 First (B2) al C1 Advanced e al C2 Proficiency, oltre ai livelli inferiori'],
        ['Educational Testing Service (ETS)', 'TOEFL iBT, per i livelli dal B1 al C2'],
        ['Pearson Education Limited', 'Pearson English International Certificate, dall’A1 al C2'],
        ['Trinity College London', 'ISE, dall’ISE II (B2) all’ISE IV (C2), oltre ai livelli inferiori'],
        ['British Institutes', 'BI Level Certificate in ESOL International, dall’A1 al C2'],
      ],
      note: 'Fonte: Piattaforma Enti Certificatori del MIM, elenco vigente dall’a.s. 2024/2025, e Allegato D1 dell’OM 27/2026. L’elenco può cambiare: controllalo prima di iscriverti.',
    } },
    { p: "Un'assenza salta all'occhio: **l'IELTS non compare** tra gli enti dell'elenco attuale. Nell'Allegato D1 l'IELTS risulta riconosciuto dal 12 luglio 2012 al 20 novembre 2024. Se hai un certificato IELTS preso in quel periodo, la regola della vigenza del riconoscimento conta, insieme alla scadenza del certificato stesso. Se invece devi ancora fare l'esame per la scuola, scegli un ente presente oggi nell'elenco." },
    { p: "Il Ministero aggiunge un avviso sulla stessa piattaforma. Per essere riconosciuta in concorsi ed esami, la certificazione deve **riportare il livello raggiunto** del Quadro comune (A1, A2, B1, B2, C1 o C2) ed essere auto-consistente, cioè non rinviare ad altri documenti per la valutazione. Un attestato di frequenza di un corso, o un certificato senza livello, non basta." },
    { figure: { photo: 'english-public-competitions-student', alt: 'Una persona con un berretto di lana disegna su un quaderno a spirale, su un tavolo di legno con un libro colorato e uno smartphone', caption: "Prepararsi a una certificazione richiede mesi: conviene iniziare molto prima della finestra per la domanda." } },

    { h: 'I concorsi fuori dalla scuola' },
    { p: "Per i concorsi di ministeri, enti locali, agenzie e altre amministrazioni non c'è una tabella nazionale dei titoli linguistici come nelle GPS. Valgono l'obbligo generale dell'articolo 37 e le regole del DPR 487: il bando dice come verifica l'inglese, quante prove ci sono, quali punteggi si possono ottenere e quali titoli contano. Alcuni bandi verificano l'inglese con qualche domanda all'orale, altri lo inseriscono nello scritto, altri ancora prevedono punti per i titoli linguistici." },
    { p: "Questo vuol dire che **non puoi dare per scontato** che il tuo certificato valga punti, né quanti. Se il bando prevede una valutazione dei titoli, cerca la voce sulle certificazioni linguistiche e leggi bene le condizioni: il livello minimo, gli enti accettati, se conta un solo titolo, e la data entro cui devi averlo conseguito. Se il bando non parla di certificazioni, il tuo inglese conterà solo per come risponderai nella prova." },
    { p: "Anche quando il certificato non dà punti, la preparazione non è sprecata. Una prova orale in cui ti chiedono di leggere e commentare un testo in inglese, o di rispondere a qualche domanda, si affronta molto meglio se parli con sicurezza. Nelle lezioni dal vivo di Alimun lavori con un insegnante in un piccolo gruppo, con esercizi a correzione immediata e compiti che l'insegnante corregge, e puoi partire da un test di livello per capire quanto ti manca al B2 o al C1." },

    { h: 'Cosa controllare nel bando, prima di iscriverti a un esame' },
    { p: "Il primo controllo è il livello. Per le GPS la soglia è il B2, per il punteggio nei concorsi docenti il C1, per gli altri concorsi quello che scrive il bando. Se oggi sei a metà strada tra B2 e C1 e ti servono punti nel concorso, iscriverti a un esame B2 ti dà un certificato utile per le GPS ma **zero punti nel concorso**." },
    { p: "Il secondo controllo è l'ente. Nella scuola contano solo gli enti dell'elenco ministeriale, nel periodo in cui erano riconosciuti; negli altri concorsi conta quello che dice il bando. Il terzo è la data: il bando indica entro quando devi possedere i titoli che dichiari, quindi un esame sostenuto troppo tardi, o con risultati che arrivano dopo quella data, può non servire per quella procedura. Verifica il termine nel bando e i tempi di uscita dei risultati sul sito dell'ente." },
    { p: "L'ultimo controllo è la validità del certificato stesso. Alcuni certificati scadono, come ricorda il Ministero per TOEFL e IELTS, altri no. Prima di dichiararlo in una domanda, guarda il documento: deve riportare il **livello del Quadro comune**, il nome dell'ente e la data. Se qualcosa non torna, chiedi all'ente prima della scadenza, non dopo." },
    { quote: "Il certificato giusto è quello che il **tuo bando** riconosce, al livello che il bando premia." },
  ],
  quiz: [
    { q: "Quale norma stabilisce che i bandi di concorso pubblico prevedono l'accertamento della lingua inglese?", options: ["L'articolo 37 del d.lgs. 165/2001", "L'articolo 14 del DM 249/2010", "L'ordinanza GPS n. 27 del 2026", "Il DM 206 del 2023"], a: 0, why: "L'articolo 37 del d.lgs. 165/2001 prevede l'accertamento della lingua inglese nei bandi per l'accesso alle pubbliche amministrazioni." },
    { q: 'Quanti punti vale una certificazione C1 nelle GPS 2026/28?', options: ['3 punti', '3,75 punti', '4 punti', '6 punti'], a: 2, why: "Nelle tabelle dell'OM 27/2026 il B2 vale 3 punti, il C1 4 e il C2 6." },
    { q: 'Hai un B2 First e un C1 Advanced. Come vengono valutati nelle GPS?', options: ['Si sommano: 7 punti', 'Si valuta un solo titolo per lingua', 'Vale solo il primo conseguito', 'Non valgono, perché sono due'], a: 1, why: "Le tabelle valutano un solo titolo per ciascuna lingua straniera, quindi conviene dichiarare il più alto." },
    { q: 'Nei concorsi docenti dei DM 205 e 206 del 2023, da quale livello una certificazione dà punti come titolo?', options: ['B1', 'B2', 'C1', 'Solo C2'], a: 2, why: "Le tabelle dei titoli dei due decreti valutano le certificazioni di livello almeno C1: 3,75 punti per il C1 e 5 per il C2." },
    { q: "Quanti quesiti di inglese ci sono nella prova scritta computer-based dei concorsi docenti, e a che livello?", options: ['Cinque, al livello B2', 'Dieci, al livello B1', 'Cinque, al livello C1', 'Nessuno: solo all’orale'], a: 0, why: "Su cinquanta quesiti, cinque riguardano la lingua inglese al livello B2 del Quadro comune europeo." },
    { q: "Quale di questi enti non è nell'elenco per l'inglese vigente dall'anno scolastico 2024/2025?", options: ['Trinity College London', 'Educational Testing Service (ETS)', 'IELTS', 'Pearson Education Limited'], a: 2, why: "Nell'Allegato D1 l'IELTS risulta riconosciuto fino al 20 novembre 2024 e non compare nell'elenco attuale." },
    { q: 'Quando un titolo CeClil o un corso di metodologia CLIL dà punti nelle GPS?', options: ['Sempre', 'Solo se congiunto alla certificazione nella relativa lingua', 'Solo per la primaria', 'Mai'], a: 1, why: "La tabella lo valuta 3 punti purché sia congiunto alla certificazione linguistica della voce B.14." },
    { q: 'Che livello di lingua serve, secondo il DM 249/2010, per accedere ai corsi di perfezionamento CLIL?', options: ['B1', 'B2', 'Almeno C1', 'C2'], a: 2, why: "L'articolo 14 apre i corsi ai docenti abilitati con una competenza linguistica certificata di almeno livello C1." },
  ],
  faq: [
    ["Per un concorso pubblico serve per forza una certificazione di inglese?", "No, non come regola generale. La legge obbliga i bandi ad accertare la conoscenza dell'inglese, ma molti lo fanno con una prova o con domande all'orale. Se e quanto vale un certificato lo stabilisce il singolo bando."],
    ["L'IELTS vale punti nelle GPS?", "L'IELTS non è nell'elenco degli enti vigente dall'anno scolastico 2024/2025; nell'Allegato D1 dell'ordinanza GPS risulta riconosciuto dal 12 luglio 2012 al 20 novembre 2024. Il Ministero ricorda anche che alcuni certificati, tra cui l'IELTS, hanno una scadenza. Per un nuovo esame da usare nella scuola, scegli un ente dell'elenco attuale."],
    ["Un B2 mi dà punti nel concorso docenti?", "Come titolo no: nei DM 205 e 206 del 2023 le certificazioni contano dal C1 in su. Il livello B2 però è quello su cui sei verificato nella prova scritta e all'orale. Nelle GPS, invece, un B2 vale 3 punti."],
    ["Dove trovo l'elenco ufficiale degli enti certificatori?", "Sulla Piattaforma Enti Certificatori del Ministero dell'istruzione e del merito, nella pagina dell'elenco degli enti accreditati, e nell'Allegato D1 dell'ordinanza GPS n. 27 del 2026 pubblicata su mim.gov.it."],
  ],
  related: ['english-b2-level', 'c1-advanced', 'b2-first', 'ielts-or-cambridge', 'cefr-english', 'ielts-band-scores', 'how-long-english'],
  sources: [
    ['Normattiva, d.lgs. 30 marzo 2001, n. 165, art. 37', 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2001-03-30;165~art37'],
    ['Normattiva, DPR 9 maggio 1994, n. 487, art. 3 (bando di concorso)', 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1994-05-09;487~art3'],
    ['Normattiva, DPR 9 maggio 1994, n. 487, art. 4 (Portale inPA)', 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1994-05-09;487~art4'],
    ['Normattiva, DPR 9 maggio 1994, n. 487, art. 9 (commissioni esaminatrici)', 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1994-05-09;487~art9'],
    ['Normattiva, DM 10 settembre 2010, n. 249, art. 14 (CLIL)', 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.istruzione.universita.ricerca:decreto:2010-09-10;249~art14'],
    ['MIM, Ordinanza ministeriale n. 27 del 16 febbraio 2026 (GPS), tabelle dei titoli e Allegato D', 'https://www.mim.gov.it/-/ordinanza-ministeriale-n-27-del-16-febbraio-2026'],
    ['MIM, Piattaforma Enti Certificatori: elenco degli enti accreditati', 'https://piattaformaenticert.pubblica.istruzione.it/pocl-piattaforma-enti-cert-web/elenco-enti-accreditati'],
    ['MIM, Decreto ministeriale n. 205 del 26 ottobre 2023 (concorso secondaria)', 'https://www.mim.gov.it/-/decreto-ministeriale-n-205-del-26-ottobre-2023'],
    ['MIM, Decreto ministeriale n. 206 del 26 ottobre 2023 (concorso infanzia e primaria)', 'https://www.mim.gov.it/-/decreto-ministeriale-n-206-del-26-ottobre-2023'],
    ['inPA, Portale unico del reclutamento', 'https://www.inpa.gov.it/'],
  ],
};
