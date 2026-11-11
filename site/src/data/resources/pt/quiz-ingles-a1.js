// Resource: quiz. English items stay English; explanations are in Portuguese.
export default {
  key: 'en-quiz-a1', site: 'pt', slug: 'quiz-ingles-a1', kind: 'quiz', course: 'English', level: 'A1',
  draw: 'parrot', tint: 'sun', published: '2026-10-26',
  title: 'Quiz rápido de inglês: dez perguntas no nível A1',
  metaTitle: 'Quiz de inglês A1 grátis: gramática e vocabulário online – Alimun',
  desc: 'Um quiz de inglês grátis com dez perguntas no nível A1: to be, artigos, plurais, there is e there are e palavras do dia a dia, com todas as respostas explicadas.',
  lead: 'Dez perguntas sobre a primeira gramática e as primeiras palavras que você aprende em inglês. Escolha uma resposta para ver por que ela está certa.',
  instructions: 'Escolha a melhor resposta.',
  about: [
    'O A1 é o primeiro nível do inglês. Você consegue se apresentar, dizer de onde é, falar da sua família e do seu dia em frases simples e entender perguntas curtas e lentas sobre coisas conhecidas.',
    'Este quiz confere a base sobre a qual todo o resto é construído: o verbo to be, a e an, o plural dos substantivos, there is e there are, preposições simples e palavras comuns do dia a dia. Cada resposta vem com uma explicação curta.',
  ],
  items: [
    { q: 'She ___ a teacher.', options: ['am', 'is', 'are', 'be'], a: 1, why: 'Com he, she e it, o verbo to be é is: she is a teacher.' },
    { q: 'My brother has ___ old car.', options: ['a', 'any', 'many', 'an'], a: 3, why: 'Use an antes de som de vogal: an old car, an apple.' },
    { q: 'I have two ___.', options: ['child', 'childs', 'children', 'childrens'], a: 2, why: 'Child tem plural irregular: one child, two children.' },
    { q: '___ a park near my house.', options: ['There is', 'There are', 'It have', 'It are'], a: 0, why: 'Use there is com uma coisa só (a park) e there are com mais de uma.' },
    { q: 'My birthday is ___ May.', options: ['on', 'in', 'at', 'to'], a: 1, why: 'Use in com os meses: in May, in July.' },
    { q: 'My keys are ___ my bag.', options: ['in', 'at', 'of', 'to'], a: 0, why: 'Use in para algo que está dentro de um recipiente: in my bag, in the box.' },
    { q: 'You eat soup with a ___.', options: ['knife', 'plate', 'spoon', 'glass'], a: 2, why: 'A spoon (colher) é o que você usa para tomar sopa.' },
    { q: '___ you like coffee?', options: ['Are', 'Is', 'Does', 'Do'], a: 3, why: 'Perguntas com like usam do: do you like coffee? Com he, she e it, use does.' },
    { q: 'He ___ have a car.', options: ["don't", "doesn't", "isn't", 'not'], a: 1, why: "Na negativa, use does not (doesn't) com he, she e it: he doesn't have a car." },
    { q: 'The opposite of big is ___.', options: ['tall', 'long', 'old', 'small'], a: 3, why: 'Big e small são opostos: a big house, a small house.' },
  ],
  related: ['en-quiz-a2', 'en-ex-a1', 'en-quiz-b1'],
};
