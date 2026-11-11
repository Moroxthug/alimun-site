// Resource: quiz. German items stay German; explanations are in Italian.
export default {
  key: 'de-quiz-a2', site: 'it', slug: 'quiz-tedesco-a2', kind: 'quiz', course: 'German', level: 'A2',
  draw: 'mug', tint: 'coral', published: '2026-10-26',
  title: 'Quiz veloce di tedesco: dieci domande di livello A2',
  metaTitle: 'Quiz di tedesco A2 gratis: grammatica e vocabolario – Alimun',
  desc: 'Un quiz gratis di tedesco di livello A2 in dieci domande: Perfekt, verbi modali, dativo, verbi separabili e comparativi, con ogni risposta spiegata.',
  lead: 'Dieci domande sulla grammatica del livello A2. Scegli una risposta per vedere perché è giusta.',
  instructions: 'Scegli la risposta migliore.',
  about: [
    "L'A2 è il livello in cui sai raccontare cosa hai fatto lo scorso fine settimana, descrivere la tua routine quotidiana, dire cosa puoi, devi o vuoi fare e fare confronti con frasi semplici.",
    'Questo quiz verifica i punti che mettono in difficoltà la maggior parte di chi studia a questo livello: haben o sein al Perfekt, i participi passati, i verbi modali, il dativo dopo verbi e preposizioni, i verbi separabili e i comparativi. Ogni risposta ha una breve spiegazione.',
  ],
  items: [
    { q: 'Gestern ___ ich ins Kino gegangen.', options: ['habe', 'bin', 'war', 'hatte'], a: 1, why: 'I verbi di movimento da un luogo a un altro, come gehen, formano il Perfekt con sein: ich bin gegangen.' },
    { q: 'Wir haben den ganzen Abend Pizza ___.', options: ['gegessen', 'geessen', 'gegesst', 'essen'], a: 0, why: 'Essen è irregolare, e il suo participio passato è gegessen.' },
    { q: 'Hier ___ man nicht rauchen. Das ist verboten.', options: ['muss', 'will', 'darf', 'möchte'], a: 2, why: 'Nicht dürfen esprime che qualcosa non è permesso.' },
    { q: 'Ich helfe ___ Mutter in der Küche.', options: ['meine', 'meiner', 'meinen', 'meinem'], a: 1, why: 'Helfen vuole il dativo, e mein al femminile diventa meiner al dativo.' },
    { q: 'Wann stehst du morgens ___?', options: ['an', 'auf', 'aus', 'ein'], a: 1, why: 'Aufstehen (alzarsi) è separabile, quindi auf va alla fine della frase.' },
    { q: 'Mein Bruder ist drei Jahre ___ als ich.', options: ['am ältesten', 'alt', 'älter', 'ältere'], a: 2, why: "I confronti con als usano il comparativo, e alt prende l'Umlaut: alt, älter, am ältesten." },
    { q: 'Ich trinke lieber Tee ___ Kaffee.', options: ['als', 'wie', 'dann', 'wenn'], a: 0, why: 'Dopo un comparativo come lieber il tedesco usa als (di, che).' },
    { q: 'Das Buch liegt auf ___ Tisch.', options: ['der', 'den', 'dem', 'des'], a: 2, why: 'Liegen descrive una posizione, quindi auf vuole il dativo: auf dem Tisch.' },
    { q: 'Hast du schon ___?', options: ['geeinkauft', 'einkaufen', 'eingekaufen', 'eingekauft'], a: 3, why: 'Nei verbi separabili ge- va tra il prefisso e la radice: einkaufen, eingekauft.' },
    { q: 'Gefällt ___ das Kleid?', options: ['dich', 'du', 'dein', 'dir'], a: 3, why: 'Gefallen vuole il dativo, quindi du diventa dir: das Kleid gefällt dir.' },
  ],
  related: ['de-quiz-a1', 'de-quiz-b1', 'de-ex-a2'],
};
