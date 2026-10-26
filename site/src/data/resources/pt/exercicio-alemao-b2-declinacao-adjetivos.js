// Resource: exercise. German items stay German; instructions and explanations are in Portuguese.
export default {
  key: 'de-ex-b2', site: 'pt', slug: 'exercicio-alemao-b2-declinacao-adjetivos', kind: 'exercise', course: 'German', level: 'B2',
  draw: 'cat', tint: 'coral', published: '2026-10-26',
  title: 'Exercício de alemão: declinação dos adjetivos (B2)',
  metaTitle: 'Exercício de declinação de adjetivos em alemão (B2) – Alimun',
  desc: 'Doze perguntas grátis sobre a declinação dos adjetivos em alemão depois de der, ein e sem artigo, para o nível B2, com correção na hora e cada resposta explicada.',
  lead: 'Escolha a terminação certa do adjetivo em cada frase. Você vê na hora se acertou e por quê.',
  instructions: 'Escolha o adjetivo com a terminação certa.',
  about: [
    'Um adjetivo antes de um substantivo recebe uma terminação que depende de três coisas: o gênero do substantivo, o caso e a palavra que vem antes. Depois de der, die, das e de palavras como dieser e jeder, o artigo já mostra o gênero e o caso, então o adjetivo recebe a declinação fraca: -e no nominativo singular e no acusativo singular feminino e neutro, e -en em todos os outros casos, como em "der alte Mann" e "dem kleinen Kind".',
    'Sem artigo, o próprio adjetivo precisa mostrar o gênero e o caso e recebe a terminação que der, die ou das teria: "guter Wein", "kaltes Wasser", "starken Kaffee". Depois de ein, kein e possessivos como mein, as terminações são fracas, menos nos três lugares em que ein não tem terminação própria (nominativo masculino, nominativo e acusativo neutro), onde o adjetivo recebe -er ou -es: "ein interessantes Buch", "mein altes Auto".',
  ],
  items: [
    { q: 'Der ___ Mann von nebenan heißt Herr Weber.', options: ['alt', 'alte', 'alten', 'alter'], a: 1, why: 'Depois de der no nominativo singular, o adjetivo recebe -e: der alte Mann.' },
    { q: 'Ich habe mir einen ___ Wagen gekauft.', options: ['neuen', 'neue', 'neuer', 'neues'], a: 0, why: 'Der Wagen está no acusativo masculino aqui, e depois de einen o adjetivo recebe -en: einen neuen Wagen.' },
    { q: 'Das ist ein sehr ___ Buch.', options: ['interessante', 'interessanter', 'interessanten', 'interessantes'], a: 3, why: 'Ein não tem terminação no nominativo neutro, então o adjetivo mostra isso com -es: ein interessantes Buch.' },
    { q: 'Morgens trinke ich gern ___ Kaffee.', options: ['starker', 'starken', 'starke', 'starkes'], a: 1, why: 'Sem artigo, o adjetivo recebe a terminação do artigo, e o acusativo masculino é den, então starken Kaffee.' },
    { q: 'Mit ___ Grüßen, Ihre Maria Schmidt', options: ['freundliche', 'freundlicher', 'freundlichen'], a: 2, why: 'Mit pede o dativo, e sem artigo a terminação do dativo plural é -en: mit freundlichen Grüßen.' },
    { q: 'Sie wohnt in einer ___ Wohnung im Zentrum.', options: ['kleiner', 'kleinen', 'kleine'], a: 1, why: 'Wohnen in descreve uma posição, então se usa o dativo, e depois de einer o adjetivo recebe -en: in einer kleinen Wohnung.' },
    { q: 'Das ___ Wetter gefällt mir.', options: ['schön', 'schönes', 'schöne', 'schönen'], a: 2, why: 'Depois de das no nominativo singular, o adjetivo recebe -e: das schöne Wetter.' },
    { q: '___ Wasser ist im Sommer besonders gut.', options: ['Kaltes', 'Kalte', 'Kalten', 'Kalter'], a: 0, why: 'Sem artigo, o adjetivo recebe a terminação de das, então um substantivo neutro no nominativo leva -es: kaltes Wasser.' },
    { q: 'Ich gebe dem ___ Kind ein Eis.', options: ['kleine', 'kleinen', 'kleines'], a: 1, why: 'Depois de dem, no dativo, o adjetivo recebe sempre -en: dem kleinen Kind.' },
    { q: 'Das ist der Hund meines ___ Bruders.', options: ['jüngere', 'jüngerer', 'jüngeren'], a: 2, why: 'No genitivo, depois de meines, o adjetivo recebe -en: meines jüngeren Bruders.' },
    { q: '___ Wein ist nicht immer teuer.', options: ['Gute', 'Guter', 'Guten', 'Gutes'], a: 1, why: 'Sem artigo, o adjetivo recebe a terminação de der, então um substantivo masculino no nominativo leva -er: guter Wein.' },
    { q: 'Mein ___ Auto ist schon wieder kaputt.', options: ['alte', 'alten', 'altes'], a: 2, why: 'Mein não tem terminação no nominativo neutro, então o adjetivo mostra isso com -es: mein altes Auto.' },
  ],
  related: ['de-ex-b1', 'de-ex-c1', 'de-quiz-b2'],
};
