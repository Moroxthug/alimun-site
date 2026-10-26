// Resource: quiz. German items stay German; explanations are in Italian.
export default {
  key: 'de-quiz-c1', site: 'it', slug: 'quiz-tedesco-c1', kind: 'quiz', course: 'German', level: 'C1',
  draw: 'cactus', tint: 'sun', published: '2026-10-26',
  title: 'Quiz veloce di tedesco: dieci domande di livello C1',
  metaTitle: 'Quiz di tedesco C1 gratis: grammatica e vocabolario – Alimun',
  desc: 'Un quiz gratis di tedesco di livello C1 in dieci domande: Konjunktiv I, costruzioni participiali, stile nominale, modi di dire e connettivi, con ogni risposta spiegata.',
  lead: 'Dieci domande sulla grammatica e sulle espressioni del livello C1. Scegli una risposta per vedere perché è giusta.',
  instructions: 'Scegli la risposta migliore.',
  about: [
    'Il C1 è il livello in cui leggi giornali, relazioni e testi accademici senza troppa fatica, ti esprimi in modo fluido e preciso e passi senza problemi dal tedesco di tutti i giorni a quello formale.',
    "Questo quiz verifica i tratti di quel registro formale, come il discorso indiretto con il Konjunktiv I, le lunghe costruzioni participiali prima del sostantivo e lo stile nominale, insieme a modi di dire comuni e connettivi che richiedono attenzione all'ordine delle parole. Ogni risposta ha una breve spiegazione.",
  ],
  items: [
    { q: 'Konjunktiv I: Der Sprecher sagte, das Unternehmen ___ keine Pläne für Entlassungen.', options: ['habe', 'hat', 'hätte', 'hatte'], a: 0, why: 'Il discorso indiretto formale usa il Konjunktiv I, e per er, sie ed es la forma di haben è habe.' },
    { q: 'Die ___ Maßnahmen haben sich bewährt.', options: ['von der Regierung beschlossene', 'von der Regierung beschlossenen', 'beschließend von der Regierung', 'von der Regierung beschlossen'], a: 1, why: "Una costruzione participiale prima del sostantivo prende una normale desinenza dell'aggettivo, e dopo die al plurale la desinenza è -en." },
    { q: 'Der seit Jahren ___ Streit wurde endlich beigelegt.', options: ['angedauerte', 'andauernden', 'andauernde', 'angedauerten'], a: 2, why: 'Il Partizip I andauernd descrive qualcosa che è ancora in corso, e dopo der al nominativo la desinenza è -e.' },
    { q: 'Wir müssen das Problem lösen. Die ___ des Problems hat Vorrang.', options: ['Lösen', 'Gelöstheit', 'Löserei', 'Lösung'], a: 3, why: 'Il sostantivo femminile che deriva da lösen è die Lösung; das Lösen vorrebbe un articolo neutro.' },
    { q: '___ seiner Krankheit hat er den Termin vergessen.', options: ['Trotz', 'Statt', 'Wegen', 'Mangels'], a: 2, why: 'Wegen più il genitivo indica una causa e trasforma una frase con weil in un gruppo nominale.' },
    { q: 'Das geht mich nichts an. Das ist nicht mein ___.', options: ['Wein', 'Brot', 'Kaffee', 'Bier'], a: 3, why: 'Das ist nicht mein Bier significa non sono affari miei.' },
    { q: 'Es hilft nichts, wir müssen in den sauren ___ beißen.', options: ['Apfel', 'Zitrone', 'Gurke', 'Kirsche'], a: 0, why: "In den sauren Apfel beißen significa fare qualcosa di sgradevole perché va fatto, un po' come ingoiare il rospo." },
    { q: 'Das stimmt doch nicht! Er hat dir einen ___ aufgebunden.', options: ['Hund', 'Bären', 'Fuchs', 'Wolf'], a: 1, why: 'Jemandem einen Bären aufbinden significa raccontare a qualcuno una frottola.' },
    { q: 'Er ist sehr talentiert, ___ fehlt ihm die Erfahrung.', options: ['allerdings', 'obwohl', 'zumal', 'sofern'], a: 0, why: "Il verbo viene subito dopo lo spazio vuoto, quindi va bene solo l'avverbio allerdings; obwohl, zumal e sofern mandano il verbo alla fine." },
    { q: 'Wir sollten das Angebot annehmen, ___ es nur noch bis Freitag gilt.', options: ['trotzdem', 'zumal', 'dennoch', 'folglich'], a: 1, why: 'Zumal (tanto più che) aggiunge un motivo in più e manda il verbo alla fine della sua frase.' },
  ],
  related: ['de-quiz-b2', 'de-ex-c1', 'de-ex-b2'],
};
