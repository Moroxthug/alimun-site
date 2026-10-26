// Template: compare. Facts: IELTS (owners, Academic and General Training, bands 0-9, results usually
// accepted for two years), Cambridge English Qualifications (one exam per level, certificate does not
// expire). Alimun practises these formats in its mock tests and is not affiliated with either.
export default {
  key: 'ielts-or-cambridge',
  site: 'it',
  slug: 'ielts-o-cambridge-quale-certificato',
  template: 'compare',
  course: 'English',
  theme: 'levels',
  cover: ['IELTS', 'Cambridge'],
  published: '2026-10-26',
  updated: '2026-10-26',
  title: "IELTS o Cambridge: quale certificazione d'inglese scegliere?",
  metaTitle: 'IELTS o Cambridge (B2 First, C1 Advanced)? Quale scegliere – Alimun',
  desc: "In cosa differiscono IELTS e le certificazioni Cambridge English come B2 First e C1 Advanced, e quale fa al caso tuo per un visto, l'università o il CV.",
  lead: "Entrambe certificano il tuo inglese ed entrambe sono riconosciute in tutto il mondo. Però funzionano in modo diverso, e **quella giusta dipende da cosa ti serve**.",
  blocks: [
    { h: 'Le due in breve' },
    { panels: [
      ['IELTS', "Un solo test per tutti i livelli. Ricevi un **punteggio da 0 a 9** in Listening, Reading, Writing e Speaking, più un punteggio complessivo. Esiste in due versioni: Academic, per lo studio, e General Training, usata spesso per il lavoro e l'immigrazione."],
      ['Cambridge', "Un esame per ogni livello, come **B2 First, C1 Advanced e C2 Proficiency**. Lo superi al livello dell'esame, con un punteggio sulla Cambridge English Scale, e il certificato non scade."],
    ] },
    { h: 'A confronto' },
    { table: {
      head: ['', 'IELTS', 'Cambridge (B2 First, C1 Advanced)'],
      rows: [
        ['Gestito da', 'British Council, IDP e Cambridge University Press & Assessment', 'Cambridge University Press & Assessment'],
        ['Risultato', 'Un punteggio da 0 a 9 per ogni abilità e uno complessivo', "Il superamento al livello dell'esame, con un punteggio sulla Cambridge English Scale"],
        ['Livelli', 'Un solo test per tutti i livelli', "Un esame per livello, dall'A2 Key al C2 Proficiency"],
        ['Prova orale', "Faccia a faccia con un esaminatore", 'Di solito in coppia, con due esaminatori'],
        ['Per quanto vale', 'La maggior parte degli enti accetta risultati con non più di due anni', 'Il certificato non scade, anche se alcuni ne chiedono uno recente'],
      ],
      note: "Verifica i dettagli aggiornati sui siti ufficiali di IELTS e Cambridge English prima di prenotare.",
    } },
    { h: 'Quando conviene IELTS' },
    { p: "Se ti serve l'inglese per **un visto o per emigrare**, IELTS è spesso il test indicato dalle autorità, e alcune richiedono una versione precisa, come General Training. È anche molto accettato dalle università, soprattutto nel Regno Unito, in Australia, in Canada e in Nuova Zelanda." },
    { p: "Dato che tutti sostengono lo stesso test, IELTS fa al caso tuo anche se **non sei sicuro del tuo livello**: il punteggio mostra a che punto sei, senza il rischio di scegliere un esame troppo difficile o troppo facile." },
    { h: 'Quando conviene Cambridge' },
    { p: "Se vuoi una certificazione **per il CV che duri nel tempo**, un esame Cambridge è un'ottima scelta: non scade, e datori di lavoro e università in tutta Europa conoscono bene il B2 First e il C1 Advanced." },
    { p: "È l'ideale quando **conosci già il tuo livello**, perché ogni esame ne punta uno. Prepararti per un esame preciso ti dà anche un obiettivo chiaro per lo studio." },
    { verdict: { title: 'Il nostro consiglio', text: "Parti dal requisito, non dal test. Se un ufficio visti, un'università o un datore di lavoro indica una certificazione, scegli quella. Se la scelta è tua, prendi **IELTS per l'immigrazione e le esigenze a breve termine**, e **Cambridge per una prova duratura** di un livello che hai già raggiunto." } },
    { note: { title: 'Esercitarsi con i formati', text: "Su Alimun puoi esercitarti con prove nel formato di B2 First, C1 Advanced e IELTS nelle simulazioni d'esame. Non sono materiali d'esame ufficiali, e Alimun non è affiliata agli enti certificatori." } },
  ],
  faq: [
    ['IELTS è più difficile di Cambridge?', "Nessuno dei due è più difficile in sé: sono costruiti in modo diverso. IELTS ti misura su un'unica scala, mentre un esame Cambridge verifica se hai raggiunto un livello preciso."],
    ['Quale accettano le università britanniche?', "La maggior parte delle università britanniche accetta IELTS Academic, e molte accettano anche il C1 Advanced o il C2 Proficiency di Cambridge. Ogni università indica i test e i punteggi che accetta per ciascun corso."],
    ['Si può non superare un esame Cambridge?', "Se il tuo punteggio è sotto il livello dell'esame, puoi ricevere un certificato del livello inferiore, oppure nessun certificato se il punteggio è troppo basso. Con IELTS ricevi sempre un punteggio."],
  ],
  related: ['cefr-english', 'how-long-english', 'german-articles'],
  sources: [
    ['IELTS', 'https://ielts.org'],
    ['Certificazioni Cambridge English', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/'],
  ],
};
