// Resource: exercise. German items stay German; instructions and explanations are in Italian.
export default {
  key: 'de-ex-b2', site: 'it', slug: 'esercizio-tedesco-b2-declinazione-aggettivi', kind: 'exercise', course: 'German', level: 'B2',
  draw: 'cat', tint: 'coral', published: '2026-10-26',
  title: 'Esercizio di tedesco: la declinazione degli aggettivi (B2)',
  metaTitle: 'Esercizi declinazione aggettivi tedesco B2 con soluzioni – Alimun',
  desc: 'Dodici domande gratis sulle desinenze degli aggettivi tedeschi dopo der, ein e senza articolo, livello B2, con correzione immediata e ogni risposta spiegata.',
  lead: "Scegli la desinenza giusta dell'aggettivo in ogni frase. Vedi subito se hai ragione, e perché.",
  instructions: "Scegli l'aggettivo con la desinenza giusta.",
  about: [
    "Un aggettivo davanti a un sostantivo prende una desinenza che dipende da tre cose: il genere del sostantivo, il suo caso e la parola che lo precede. Dopo der, die, das e parole come dieser e jeder, l'articolo mostra già genere e caso, quindi l'aggettivo prende la desinenza debole: -e al nominativo singolare e all'accusativo singolare femminile e neutro, e -en in tutti gli altri casi, come in \"der alte Mann\" e \"dem kleinen Kind\".",
    "Senza articolo, l'aggettivo deve mostrare da solo genere e caso e prende la desinenza che avrebbe avuto der, die o das: \"guter Wein\", \"kaltes Wasser\", \"starken Kaffee\". Dopo ein, kein e i possessivi come mein, le desinenze sono deboli tranne nei tre casi in cui ein non ha una desinenza propria (maschile nominativo, neutro nominativo e accusativo), dove l'aggettivo prende -er o -es: \"ein interessantes Buch\", \"mein altes Auto\".",
  ],
  items: [
    { q: 'Der ___ Mann von nebenan heißt Herr Weber.', options: ['alt', 'alte', 'alten', 'alter'], a: 1, why: "Dopo der al nominativo singolare l'aggettivo prende -e: der alte Mann." },
    { q: 'Ich habe mir einen ___ Wagen gekauft.', options: ['neuen', 'neue', 'neuer', 'neues'], a: 0, why: "Der Wagen qui è maschile accusativo, e dopo einen l'aggettivo prende -en: einen neuen Wagen." },
    { q: 'Das ist ein sehr ___ Buch.', options: ['interessante', 'interessanter', 'interessanten', 'interessantes'], a: 3, why: "Ein non ha desinenza al neutro nominativo, quindi la mostra l'aggettivo con -es: ein interessantes Buch." },
    { q: 'Morgens trinke ich gern ___ Kaffee.', options: ['starker', 'starken', 'starke', 'starkes'], a: 1, why: "Senza articolo l'aggettivo prende la desinenza dell'articolo, e il maschile accusativo è den, quindi starken Kaffee." },
    { q: 'Mit ___ Grüßen, Ihre Maria Schmidt', options: ['freundliche', 'freundlicher', 'freundlichen'], a: 2, why: 'Mit vuole il dativo, e senza articolo la desinenza del dativo plurale è -en: mit freundlichen Grüßen.' },
    { q: 'Sie wohnt in einer ___ Wohnung im Zentrum.', options: ['kleiner', 'kleinen', 'kleine'], a: 1, why: "Wohnen in descrive una posizione, quindi si usa il dativo, e dopo einer l'aggettivo prende -en: in einer kleinen Wohnung." },
    { q: 'Das ___ Wetter gefällt mir.', options: ['schön', 'schönes', 'schöne', 'schönen'], a: 2, why: "Dopo das al nominativo singolare l'aggettivo prende -e: das schöne Wetter." },
    { q: '___ Wasser ist im Sommer besonders gut.', options: ['Kaltes', 'Kalte', 'Kalten', 'Kalter'], a: 0, why: "Senza articolo l'aggettivo prende la desinenza di das, quindi un neutro al nominativo prende -es: kaltes Wasser." },
    { q: 'Ich gebe dem ___ Kind ein Eis.', options: ['kleine', 'kleinen', 'kleines'], a: 1, why: "Dopo dem, al dativo, l'aggettivo prende sempre -en: dem kleinen Kind." },
    { q: 'Das ist der Hund meines ___ Bruders.', options: ['jüngere', 'jüngerer', 'jüngeren'], a: 2, why: "Al genitivo dopo meines l'aggettivo prende -en: meines jüngeren Bruders." },
    { q: '___ Wein ist nicht immer teuer.', options: ['Gute', 'Guter', 'Guten', 'Gutes'], a: 1, why: "Senza articolo l'aggettivo prende la desinenza di der, quindi un maschile al nominativo prende -er: guter Wein." },
    { q: 'Mein ___ Auto ist schon wieder kaputt.', options: ['alte', 'alten', 'altes'], a: 2, why: "Mein non ha desinenza al neutro nominativo, quindi la mostra l'aggettivo con -es: mein altes Auto." },
  ],
  related: ['de-ex-b1', 'de-ex-c1', 'de-quiz-b2'],
};
