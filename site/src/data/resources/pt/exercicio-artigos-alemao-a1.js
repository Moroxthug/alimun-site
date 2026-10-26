// Resource: exercise. German items stay German; instructions and explanations are in Portuguese.
export default {
  key: 'de-articles-a1', site: 'pt', slug: 'exercicio-artigos-alemao-a1', kind: 'exercise', course: 'German', level: 'A1',
  draw: 'pretzel', tint: 'sun', published: '2026-10-26',
  title: 'Exercício de artigos em alemão: der, die ou das? (A1)',
  metaTitle: 'Exercício de artigos em alemão der, die, das (A1, grátis) – Alimun',
  desc: 'Doze perguntas grátis sobre der, die e das para quem estuda alemão no nível A1, com correção na hora e uma explicação para cada resposta.',
  lead: 'Escolha der, die ou das para cada substantivo. Você vê na hora se acertou e por quê.',
  instructions: 'Escolha o artigo certo.',
  about: [
    'Todo substantivo alemão tem um gênero, e o artigo mostra qual é: der para o masculino, die para o feminino e das para o neutro. No plural, os três usam die.',
    'Muitos substantivos revelam o gênero pela terminação: os terminados em -ung, -heit e -keit são femininos, os terminados em -chen são neutros, e os dias, meses e estações do ano são masculinos. O resto você aprende junto com a palavra, e é por isso que vale a pena sempre dizer o artigo em voz alta.',
  ],
  items: [
    { q: '___ Zeitung', options: ['der', 'die', 'das'], a: 1, why: 'Substantivos terminados em -ung são femininos: die Zeitung.' },
    { q: '___ Mädchen', options: ['der', 'die', 'das'], a: 2, why: 'Substantivos terminados em -chen são sempre neutros, mesmo quando se referem a uma pessoa: das Mädchen.' },
    { q: '___ Montag', options: ['der', 'die', 'das'], a: 0, why: 'Os dias da semana são masculinos: der Montag.' },
    { q: '___ Freiheit', options: ['der', 'die', 'das'], a: 1, why: 'Substantivos terminados em -heit são femininos: die Freiheit.' },
    { q: '___ Sommer', options: ['der', 'die', 'das'], a: 0, why: 'As estações do ano são masculinas: der Sommer.' },
    { q: '___ Brötchen', options: ['der', 'die', 'das'], a: 2, why: 'A terminação -chen deixa o substantivo neutro: das Brötchen.' },
    { q: '___ Universität', options: ['der', 'die', 'das'], a: 1, why: 'Substantivos terminados em -tät são femininos: die Universität.' },
    { q: '___ Januar', options: ['der', 'die', 'das'], a: 0, why: 'Os meses são masculinos: der Januar.' },
    { q: '___ Möglichkeit', options: ['der', 'die', 'das'], a: 1, why: 'Substantivos terminados em -keit são femininos: die Möglichkeit.' },
    { q: '___ Haustür', options: ['der', 'die', 'das'], a: 1, why: 'Um substantivo composto tem o gênero da última parte: die Tür, então die Haustür.' },
    { q: '___ Bücher (plural)', options: ['der', 'die', 'das'], a: 1, why: 'No plural, todos os substantivos usam die: die Bücher.' },
    { q: '___ Museum', options: ['der', 'die', 'das'], a: 2, why: 'A maioria dos substantivos terminados em -um é neutra: das Museum.' },
  ],
  related: ['en-quiz-b1', 'de-articles-sheet', 'false-friends'],
};
