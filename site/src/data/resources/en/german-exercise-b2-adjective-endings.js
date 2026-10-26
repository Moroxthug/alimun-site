// Resource: exercise. German items stay German; instructions and explanations are in the reader's language.
export default {
  key: 'de-ex-b2', site: 'en', slug: 'german-exercise-b2-adjective-endings', kind: 'exercise', course: 'German', level: 'B2',
  draw: 'cat', tint: 'coral', published: '2026-10-26',
  title: 'German exercise: adjective endings (B2)',
  metaTitle: 'German adjective endings exercise with answers (B2) – Alimun',
  desc: 'Twelve free questions on German adjective endings after der, ein and no article for B2 learners, with instant feedback and an explanation for every answer.',
  lead: 'Choose the right adjective ending for each sentence. You see straight away if you are right, and why.',
  instructions: 'Choose the adjective with the right ending.',
  about: [
    'An adjective in front of a noun takes an ending that depends on three things: the gender of the noun, its case, and the word in front of it. After der, die, das and words like dieser and jeder, the article already shows gender and case, so the adjective takes a weak ending: -e in the nominative singular and in the accusative singular for feminine and neuter nouns, and -en everywhere else, as in "der alte Mann" and "dem kleinen Kind".',
    'With no article, the adjective has to show gender and case itself and takes the ending der, die or das would have had: "guter Wein", "kaltes Wasser", "starken Kaffee". After ein, kein and possessives such as mein, the endings are weak except in the three places where ein has no ending of its own (masculine nominative, neuter nominative and accusative), where the adjective takes -er or -es: "ein interessantes Buch", "mein altes Auto".',
  ],
  items: [
    { q: 'Der ___ Mann von nebenan heißt Herr Weber.', options: ['alt', 'alte', 'alten', 'alter'], a: 1, why: 'After der in the nominative singular the adjective takes -e: der alte Mann.' },
    { q: 'Ich habe mir einen ___ Wagen gekauft.', options: ['neuen', 'neue', 'neuer', 'neues'], a: 0, why: 'Der Wagen is masculine accusative here, and after einen the adjective takes -en: einen neuen Wagen.' },
    { q: 'Das ist ein sehr ___ Buch.', options: ['interessante', 'interessanter', 'interessanten', 'interessantes'], a: 3, why: 'Ein has no ending in the neuter nominative, so the adjective shows it with -es: ein interessantes Buch.' },
    { q: 'Morgens trinke ich gern ___ Kaffee.', options: ['starker', 'starken', 'starke', 'starkes'], a: 1, why: 'With no article the adjective takes the ending of the article, and the masculine accusative is den, so starken Kaffee.' },
    { q: 'Mit ___ Grüßen, Ihre Maria Schmidt', options: ['freundliche', 'freundlicher', 'freundlichen'], a: 2, why: 'Mit takes the dative, and with no article the dative plural ending is -en: mit freundlichen Grüßen.' },
    { q: 'Sie wohnt in einer ___ Wohnung im Zentrum.', options: ['kleiner', 'kleinen', 'kleine'], a: 1, why: 'Wohnen in describes a position, so the dative is used, and after einer the adjective takes -en: in einer kleinen Wohnung.' },
    { q: 'Das ___ Wetter gefällt mir.', options: ['schön', 'schönes', 'schöne', 'schönen'], a: 2, why: 'After das in the nominative singular the adjective takes -e: das schöne Wetter.' },
    { q: '___ Wasser ist im Sommer besonders gut.', options: ['Kaltes', 'Kalte', 'Kalten', 'Kalter'], a: 0, why: 'With no article the adjective takes the ending of das, so a neuter noun in the nominative gets -es: kaltes Wasser.' },
    { q: 'Ich gebe dem ___ Kind ein Eis.', options: ['kleine', 'kleinen', 'kleines'], a: 1, why: 'After dem, in the dative, the adjective always takes -en: dem kleinen Kind.' },
    { q: 'Das ist der Hund meines ___ Bruders.', options: ['jüngere', 'jüngerer', 'jüngeren'], a: 2, why: 'In the genitive after meines the adjective takes -en: meines jüngeren Bruders.' },
    { q: '___ Wein ist nicht immer teuer.', options: ['Gute', 'Guter', 'Guten', 'Gutes'], a: 1, why: 'With no article the adjective takes the ending of der, so a masculine noun in the nominative gets -er: guter Wein.' },
    { q: 'Mein ___ Auto ist schon wieder kaputt.', options: ['alte', 'alten', 'altes'], a: 2, why: 'Mein has no ending in the neuter nominative, so the adjective shows it with -es: mein altes Auto.' },
  ],
  related: ['de-ex-b1', 'de-ex-c1', 'de-quiz-b2'],
};
