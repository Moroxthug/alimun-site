// Resource: exercise. German items stay German; instructions and explanations are in Italian.
export default {
  key: 'de-articles-a1', site: 'it', slug: 'esercizio-articoli-tedeschi-a1', kind: 'exercise', course: 'German', level: 'A1',
  draw: 'pretzel', tint: 'sun', published: '2026-10-26',
  title: 'Esercizio sugli articoli tedeschi: der, die o das? (A1)',
  metaTitle: 'Esercizio articoli tedeschi der, die, das (A1, gratis) – Alimun',
  desc: 'Dodici domande gratis su der, die e das per chi studia tedesco al livello A1, con correzione immediata e una spiegazione per ogni risposta.',
  lead: 'Scegli der, die o das per ogni sostantivo. Vedi subito se hai ragione, e perché.',
  instructions: "Scegli l'articolo giusto.",
  about: [
    "Ogni sostantivo tedesco ha un genere, e l'articolo lo mostra: der per il maschile, die per il femminile e das per il neutro. Al plurale tutti e tre usano die.",
    "Molti sostantivi rivelano il loro genere dalla desinenza: quelli in -ung, -heit e -keit sono femminili, quelli in -chen sono neutri, e giorni, mesi e stagioni sono maschili. Gli altri li impari insieme al sostantivo, ed è per questo che conviene dire sempre l'articolo ad alta voce.",
  ],
  items: [
    { q: '___ Zeitung', options: ['der', 'die', 'das'], a: 1, why: 'I sostantivi che finiscono in -ung sono femminili: die Zeitung.' },
    { q: '___ Mädchen', options: ['der', 'die', 'das'], a: 2, why: 'I sostantivi che finiscono in -chen sono sempre neutri, anche quando indicano una persona: das Mädchen.' },
    { q: '___ Montag', options: ['der', 'die', 'das'], a: 0, why: 'I giorni della settimana sono maschili: der Montag.' },
    { q: '___ Freiheit', options: ['der', 'die', 'das'], a: 1, why: 'I sostantivi che finiscono in -heit sono femminili: die Freiheit.' },
    { q: '___ Sommer', options: ['der', 'die', 'das'], a: 0, why: 'Le stagioni sono maschili: der Sommer.' },
    { q: '___ Brötchen', options: ['der', 'die', 'das'], a: 2, why: 'La desinenza -chen rende neutro il sostantivo: das Brötchen.' },
    { q: '___ Universität', options: ['der', 'die', 'das'], a: 1, why: 'I sostantivi che finiscono in -tät sono femminili: die Universität.' },
    { q: '___ Januar', options: ['der', 'die', 'das'], a: 0, why: 'I mesi sono maschili: der Januar.' },
    { q: '___ Möglichkeit', options: ['der', 'die', 'das'], a: 1, why: 'I sostantivi che finiscono in -keit sono femminili: die Möglichkeit.' },
    { q: '___ Haustür', options: ['der', 'die', 'das'], a: 1, why: "Un sostantivo composto prende il genere dell'ultima parte: die Tür, quindi die Haustür." },
    { q: '___ Bücher (plurale)', options: ['der', 'die', 'das'], a: 1, why: 'Al plurale tutti i sostantivi usano die: die Bücher.' },
    { q: '___ Museum', options: ['der', 'die', 'das'], a: 2, why: 'La maggior parte dei sostantivi che finiscono in -um sono neutri: das Museum.' },
  ],
  related: ['en-quiz-b1', 'de-articles-sheet', 'false-friends'],
};
