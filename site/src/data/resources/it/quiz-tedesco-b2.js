// Resource: quiz. German items stay German; explanations are in Italian.
export default {
  key: 'de-quiz-b2', site: 'it', slug: 'quiz-tedesco-b2', kind: 'quiz', course: 'German', level: 'B2',
  draw: 'ghost', tint: 'lime', published: '2026-10-26',
  title: 'Quiz veloce di tedesco: dieci domande di livello B2',
  metaTitle: 'Quiz di tedesco B2 gratis: grammatica e vocabolario – Alimun',
  desc: 'Un quiz gratis di tedesco di livello B2 in dieci domande: Konjunktiv II, passivo con i verbi modali, desinenze degli aggettivi, n-Deklination e verbi con preposizione.',
  lead: 'Dieci domande sulla grammatica del livello B2. Scegli una risposta per vedere perché è giusta.',
  instructions: 'Scegli la risposta migliore.',
  about: [
    'Il B2 è il livello in cui segui quasi tutta una discussione su un argomento familiare, spieghi nel dettaglio il tuo punto di vista, parli di cosa sarebbe o avrebbe potuto succedere e scrivi testi chiari su molti argomenti diversi.',
    'Questo quiz verifica la grammatica che distingue chi parla bene a livello intermedio da chi parla in modo preciso: il Konjunktiv II, il passivo con i verbi modali, le desinenze degli aggettivi, i sostantivi della n-Deklination e i verbi con preposizione fissa. Ogni risposta ha una breve spiegazione.',
  ],
  items: [
    { q: 'Wenn ich mehr Zeit ___, würde ich öfter reisen.', options: ['habe', 'hatte', 'hätte', 'hat'], a: 2, why: 'Una condizione irreale nel presente usa il Konjunktiv II: wenn ich mehr Zeit hätte.' },
    { q: 'Wenn du mich angerufen ___, wäre ich gekommen.', options: ['hättest', 'wärst', 'würdest', 'hast'], a: 0, why: 'Una condizione irreale nel passato usa hätte o wäre più il participio passato, e anrufen forma il Perfekt con haben.' },
    { q: 'Der Antrag muss bis Freitag ___.', options: ['abgeben werden', 'abgegeben werden', 'abgegeben worden', 'abgegeben wird'], a: 1, why: "Il passivo con un verbo modale è participio passato più werden all'infinito: muss abgegeben werden." },
    { q: 'Ich habe mir einen ___ Mantel gekauft.', options: ['warme', 'warmer', 'warmes', 'warmen'], a: 3, why: "Dopo einen (maschile accusativo) l'aggettivo finisce in -en: einen warmen Mantel." },
    { q: 'Bei ___ Wetter bleiben wir zu Hause.', options: ['schlechtem', 'schlechten', 'schlechtes', 'schlechter'], a: 0, why: "Senza articolo è l'aggettivo a mostrare il caso: bei vuole il dativo, e il dativo neutro è -em." },
    { q: 'Ich habe gestern mit ___ gesprochen.', options: ['dem Nachbar', 'dem Nachbarn', 'den Nachbar', 'der Nachbar'], a: 1, why: 'Nachbar appartiene alla n-Deklination e aggiunge -n fuori dal nominativo singolare: mit dem Nachbarn.' },
    { q: 'Die Ärztin untersucht ___.', options: ['den Patient', 'dem Patient', 'den Patienten', 'der Patienten'], a: 2, why: "Patient è un sostantivo della n-Deklination, quindi l'accusativo è den Patienten." },
    { q: 'Ich kann mich nicht ___ seinen Namen erinnern.', options: ['an', 'auf', 'für', 'über'], a: 0, why: "Il verbo è sich erinnern an più l'accusativo: ich erinnere mich an seinen Namen." },
    { q: 'Ob wir fahren, hängt ___ dem Wetter ab.', options: ['an', 'mit', 'von', 'aus'], a: 2, why: 'Il verbo è abhängen von più il dativo: es hängt vom Wetter ab.' },
    { q: '___ wartest du? – Auf meinen Freund.', options: ['Worauf', 'Wofür', 'Woran', 'Auf wen'], a: 3, why: 'Quando la risposta è una persona, la domanda mantiene la preposizione e aggiunge wen o wem: auf wen; worauf si usa per le cose.' },
  ],
  related: ['de-quiz-b1', 'de-quiz-c1', 'de-ex-b2'],
};
