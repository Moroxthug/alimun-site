// Resource: exercise. German items stay German; instructions and explanations are in French.
export default {
  key: 'de-ex-b2', site: 'fr', slug: 'exercice-allemand-b2-declinaison-adjectif', kind: 'exercise', course: 'German', level: 'B2',
  draw: 'cat', tint: 'coral', published: '2026-10-26',
  title: "Exercice d'allemand : la déclinaison de l'adjectif (B2)",
  metaTitle: "Exercice allemand déclinaison de l'adjectif, corrigé (B2) – Alimun",
  desc: "Douze questions gratuites sur les terminaisons de l'adjectif allemand après der, ein ou sans article (B2), avec correction immédiate et chaque réponse expliquée.",
  lead: "Choisis la bonne terminaison de l'adjectif dans chaque phrase. Tu vois tout de suite si tu as juste, et pourquoi.",
  instructions: "Choisis l'adjectif avec la bonne terminaison.",
  about: [
    "Un adjectif placé devant un nom prend une terminaison qui dépend de trois choses : le genre du nom, son cas et le mot qui le précède. Après der, die, das et des mots comme dieser et jeder, l'article montre déjà le genre et le cas, donc l'adjectif prend une terminaison faible : -e au nominatif singulier et à l'accusatif singulier féminin et neutre, et -en partout ailleurs, comme dans \"der alte Mann\" et \"dem kleinen Kind\".",
    "Sans article, l'adjectif doit montrer lui-même le genre et le cas, et il prend la terminaison qu'aurait eue der, die ou das : \"guter Wein\", \"kaltes Wasser\", \"starken Kaffee\". Après ein, kein et les possessifs comme mein, les terminaisons sont faibles, sauf aux trois endroits où ein n'a pas de terminaison propre (nominatif masculin, nominatif et accusatif neutres) : là, l'adjectif prend -er ou -es : \"ein interessantes Buch\", \"mein altes Auto\".",
  ],
  items: [
    { q: 'Der ___ Mann von nebenan heißt Herr Weber.', options: ['alt', 'alte', 'alten', 'alter'], a: 1, why: "Après der au nominatif singulier, l'adjectif prend -e : der alte Mann." },
    { q: 'Ich habe mir einen ___ Wagen gekauft.', options: ['neuen', 'neue', 'neuer', 'neues'], a: 0, why: "Der Wagen est ici à l'accusatif masculin, et après einen l'adjectif prend -en : einen neuen Wagen." },
    { q: 'Das ist ein sehr ___ Buch.', options: ['interessante', 'interessanter', 'interessanten', 'interessantes'], a: 3, why: "Ein n'a pas de terminaison au nominatif neutre, donc c'est l'adjectif qui la montre avec -es : ein interessantes Buch." },
    { q: 'Morgens trinke ich gern ___ Kaffee.', options: ['starker', 'starken', 'starke', 'starkes'], a: 1, why: "Sans article, l'adjectif prend la terminaison de l'article, et l'accusatif masculin est den, donc starken Kaffee." },
    { q: 'Mit ___ Grüßen, Ihre Maria Schmidt', options: ['freundliche', 'freundlicher', 'freundlichen'], a: 2, why: 'Mit est suivi du datif, et sans article la terminaison du datif pluriel est -en : mit freundlichen Grüßen.' },
    { q: 'Sie wohnt in einer ___ Wohnung im Zentrum.', options: ['kleiner', 'kleinen', 'kleine'], a: 1, why: "Wohnen in décrit une position, donc on utilise le datif, et après einer l'adjectif prend -en : in einer kleinen Wohnung." },
    { q: 'Das ___ Wetter gefällt mir.', options: ['schön', 'schönes', 'schöne', 'schönen'], a: 2, why: "Après das au nominatif singulier, l'adjectif prend -e : das schöne Wetter." },
    { q: '___ Wasser ist im Sommer besonders gut.', options: ['Kaltes', 'Kalte', 'Kalten', 'Kalter'], a: 0, why: "Sans article, l'adjectif prend la terminaison de das, donc un nom neutre au nominatif reçoit -es : kaltes Wasser." },
    { q: 'Ich gebe dem ___ Kind ein Eis.', options: ['kleine', 'kleinen', 'kleines'], a: 1, why: "Après dem, au datif, l'adjectif prend toujours -en : dem kleinen Kind." },
    { q: 'Das ist der Hund meines ___ Bruders.', options: ['jüngere', 'jüngerer', 'jüngeren'], a: 2, why: "Au génitif après meines, l'adjectif prend -en : meines jüngeren Bruders." },
    { q: '___ Wein ist nicht immer teuer.', options: ['Gute', 'Guter', 'Guten', 'Gutes'], a: 1, why: "Sans article, l'adjectif prend la terminaison de der, donc un nom masculin au nominatif reçoit -er : guter Wein." },
    { q: 'Mein ___ Auto ist schon wieder kaputt.', options: ['alte', 'alten', 'altes'], a: 2, why: "Mein n'a pas de terminaison au nominatif neutre, donc c'est l'adjectif qui la montre avec -es : mein altes Auto." },
  ],
  related: ['de-ex-b1', 'de-ex-c1', 'de-quiz-b2'],
};
