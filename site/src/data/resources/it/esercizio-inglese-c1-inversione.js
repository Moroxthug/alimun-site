// Resource: exercise. English items stay English; explanations are in Italian.
export default {
  key: 'en-ex-c1', site: 'it', slug: 'esercizio-inglese-c1-inversione', kind: 'exercise', course: 'English', level: 'C1',
  draw: 'dragon', tint: 'mint', published: '2026-10-26',
  title: "Esercizio di inglese: l'inversione (C1)",
  metaTitle: 'Esercizi inversione inglese C1: Never have I, Had I – Alimun',
  desc: "Dodici domande gratis sull'inversione per chi studia inglese al livello C1: Never have I, Hardly had, Not only, Should you e altro, con ogni risposta spiegata.",
  lead: "Scegli l'ordine delle parole giusto in ogni frase. Vedi subito se hai ragione, e perché.",
  instructions: 'Scegli la forma giusta.',
  about: [
    "Quando una frase comincia con una parola negativa o restrittiva come never, rarely, seldom, little, hardly, no sooner, not only, not until, only after o under no circumstances, l'inglese inverte soggetto e ausiliare, proprio come in una domanda: \"Never have I seen such a view\", \"Not only was he late, but...\". Se non c'è un ausiliare, aggiungi do, does o did: \"Little did she know\", \"Rarely do we see this.\" Hardly è seguito da when e no sooner da than: \"Hardly had I arrived when the phone rang\", \"No sooner had we sat down than the music started.\"",
    "Anche le frasi ipotetiche possono togliere if e usare l'inversione, che suona formale ed è frequente in lettere, email ed esami: \"Should you need help\" significa \"If you need help\", \"Had I known\" significa \"If I had known\" e \"Were he to resign\" significa \"If he resigned\". Queste strutture danno enfasi o formalità ai testi scritti e ai discorsi, e compaiono negli esami avanzati come C1 Advanced e IELTS.",
  ],
  items: [
    { q: 'Never ___ such a beautiful sunset.', options: ['I have seen', 'have I seen', 'I saw', 'did I saw'], a: 1, why: "Dopo una parola negativa a inizio frase, metti l'ausiliare prima del soggetto: Never have I seen." },
    { q: 'Hardly ___ arrived when the phone rang.', options: ['had I', 'I had', 'did I', 'have I'], a: 0, why: "Hardly a inizio frase vuole l'inversione con il past perfect: Hardly had I arrived when..." },
    { q: 'Not only ___ late, but he also forgot the tickets.', options: ['he was', 'did he be', 'was he'], a: 2, why: 'Not only a inizio frase inverte il verbo be e il soggetto: Not only was he late.' },
    { q: '___ you need any help, please call me.', options: ['Would', 'Should', 'Were', 'Had'], a: 1, why: 'Should + soggetto sostituisce "If you need" in un periodo ipotetico di primo tipo formale.' },
    { q: '___ I known about the traffic, I would have left earlier.', options: ['Have', 'Did', 'Had', 'Were'], a: 2, why: 'Had + soggetto sostituisce "If I had" in un periodo ipotetico di terzo tipo.' },
    { q: '___ he to resign, the company would be in trouble.', options: ['Were', 'Was', 'Should', 'Did'], a: 0, why: 'Were + soggetto + to-infinitive sostituisce "If he resigned" in un periodo ipotetico di secondo tipo formale.' },
    { q: 'No sooner had we sat down ___ the music started.', options: ['when', 'than', 'then', 'that'], a: 1, why: 'No sooner è sempre seguito da than.' },
    { q: 'Only after the meeting ___ the truth.', options: ['we learned', 'learned we', 'we did learn', 'did we learn'], a: 3, why: "Only after + un'indicazione di tempo inverte la frase principale, con did quando non c'è un altro ausiliare." },
    { q: 'Little ___ that she was being watched.', options: ['she knew', 'knew she', 'did she know', 'she did know'], a: 2, why: "Little a inizio frase significa per niente e vuole l'inversione con did: Little did she know." },
    { q: 'Under no circumstances ___ open this door.', options: ['you should', 'should you', 'you must', 'must'], a: 1, why: 'Under no circumstances è negativo, quindi il modale va prima del soggetto: should you.' },
    { q: 'Rarely ___ such talent in someone so young.', options: ['do we see', 'we see', 'see we', 'we do see'], a: 0, why: "Rarely a inizio frase vuole l'inversione, con do al present simple: Rarely do we see." },
    { q: 'Not until I read the letter ___ how worried she had been.', options: ['I realized', 'did I realize', 'I did realize', 'realized I'], a: 1, why: "Con Not until l'inversione avviene nella frase principale: did I realize." },
  ],
  related: ['en-ex-b2', 'en-quiz-c1', 'en-quiz-b2'],
};
