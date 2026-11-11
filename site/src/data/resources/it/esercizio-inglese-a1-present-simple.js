// Resource: exercise. English items stay English; explanations are in Italian.
export default {
  key: 'en-ex-a1', site: 'it', slug: 'esercizio-inglese-a1-present-simple', kind: 'exercise', course: 'English', level: 'A1',
  draw: 'teacup', tint: 'mint', published: '2026-10-26',
  title: 'Esercizio di inglese: present simple (A1)',
  metaTitle: 'Esercizi inglese present simple A1 con soluzioni – Alimun',
  desc: 'Dodici domande gratis sul present simple per chi studia inglese al livello A1: am, is, are, do e does e la -s con he, she e it, con ogni risposta spiegata.',
  lead: 'Scegli la forma giusta del verbo in ogni frase. Vedi subito se hai ragione, e perché.',
  instructions: 'Scegli la forma giusta.',
  about: [
    'Il present simple descrive abitudini, routine e fatti sempre veri: I work in an office, she drinks tea, water boils at 100 degrees. Con il verbo be usi am con I, is con he, she e it, e are con you, we e they. Con gli altri verbi aggiungi -s con he, she e it (she lives, he works), -es dopo ch, sh, s, x e o (he watches, she goes), e trasformi consonante + y finale in -ies (the baby cries). Have diventa has.',
    "Le domande e le frasi negative con gli altri verbi hanno bisogno di un ausiliare: do con I, you, we e they, e does con he, she e it. Dopo does e doesn't il verbo principale torna alla forma base, quindi si dice \"Does she live here?\" e \"He doesn't eat meat\", mai \"Does she lives\". Il verbo be non ha bisogno di questo ausiliare: \"Are you tired?\" e \"I am not ready.\"",
  ],
  items: [
    { q: 'She ___ in a big city.', options: ['live', 'lives', 'living'], a: 1, why: 'Con he, she e it aggiungi -s al verbo: she lives.' },
    { q: 'They ___ from Brazil.', options: ['is', 'am', 'are'], a: 2, why: 'Con they il verbo be diventa are: they are.' },
    { q: '___ you like coffee?', options: ['Do', 'Does', 'Are'], a: 0, why: 'Le domande con you usano do + la forma base del verbo: Do you like...?' },
    { q: 'My brother ___ eat meat.', options: ["don't", "doesn't", "isn't"], a: 1, why: "My brother equivale a he, quindi la negazione è doesn't + la forma base del verbo." },
    { q: 'I ___ a student.', options: ['is', 'are', 'am'], a: 2, why: 'Con I il verbo be è sempre am: I am.' },
    { q: 'He ___ TV every evening.', options: ['watches', 'watchs', 'watch'], a: 0, why: 'I verbi che finiscono in ch aggiungono -es con he, she e it: he watches.' },
    { q: '___ your sister work in a bank?', options: ['Do', 'Is', 'Does'], a: 2, why: 'Your sister equivale a she, quindi la domanda usa does + la forma base del verbo.' },
    { q: 'My parents ___ have a car.', options: ["doesn't", "don't", "aren't"], a: 1, why: "My parents equivale a they, quindi la negazione è don't + la forma base del verbo." },
    { q: 'He ___ two brothers.', options: ['has', 'have', 'haves'], a: 0, why: 'Have è irregolare: con he, she e it diventa has.' },
    { q: 'The baby ___ a lot at night.', options: ['crys', 'cry', 'cries'], a: 2, why: 'Dopo una consonante, la y finale diventa -ies: cry diventa cries.' },
    { q: 'Where ___ he live?', options: ['do', 'does', 'is'], a: 1, why: 'Le domande con he usano does, e il verbo principale resta alla forma base: Where does he live?' },
    { q: "The store ___ at nine o'clock.", options: ['opens', 'open', 'opening'], a: 0, why: 'The store equivale a it, quindi il verbo prende la -s: it opens.' },
  ],
  related: ['en-ex-a2', 'en-quiz-a1', 'en-quiz-a2'],
};
