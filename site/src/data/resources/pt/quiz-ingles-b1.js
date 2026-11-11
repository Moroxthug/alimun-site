// Resource: quiz. English items stay English; explanations are in Portuguese.
export default {
  key: 'en-quiz-b1', site: 'pt', slug: 'quiz-ingles-b1', kind: 'quiz', course: 'English', level: 'B1',
  draw: 'parrot', tint: 'mint', published: '2026-10-26',
  title: 'Quiz rápido de inglês: dez perguntas no nível B1',
  metaTitle: 'Quiz de inglês B1 grátis: gramática e vocabulário online – Alimun',
  desc: 'Um quiz de inglês grátis com dez perguntas no nível B1: tempos verbais, preposições e vocabulário do dia a dia, com todas as respostas explicadas.',
  lead: 'Dez perguntas sobre a gramática e as palavras que você encontra no B1. Escolha uma resposta para ver por que ela está certa.',
  instructions: 'Escolha a melhor resposta.',
  about: [
    'O B1 é o nível em que você já se vira na maioria das situações do dia a dia: fala de experiências e planos e começa a usar com segurança o present perfect, o past continuous e o first conditional.',
    'Este quiz mistura os pontos sobre os quais os alunos mais perguntam nesse nível. Cada resposta vem com uma explicação curta, então você aprende algo mesmo quando erra.',
  ],
  items: [
    { q: 'I have lived in this city ___ 2019.', options: ['for', 'since', 'from', 'during'], a: 1, why: 'Use since com um ponto de partida no tempo (2019) e for com um período de tempo (seven years).' },
    { q: 'She ___ dinner when the phone rang.', options: ['cooked', 'was cooking', 'has cooked', 'cooks'], a: 1, why: 'O past continuous descreve uma ação em andamento quando outra coisa aconteceu.' },
    { q: 'If it rains tomorrow, we ___ at home.', options: ['stay', 'will stay', 'would stay', 'stayed'], a: 1, why: 'First conditional: if + present simple, depois will + verbo.' },
    { q: 'Have you ever ___ to Canada?', options: ['gone', 'went', 'been', 'go'], a: 2, why: 'Para uma visita que já terminou, use been: have you ever been to Canada?' },
    { q: 'I am really looking forward ___ you.', options: ['to see', 'to seeing', 'seeing', 'see'], a: 1, why: 'Em look forward to, o to é uma preposição, então o verbo vai com -ing.' },
    { q: 'He is good ___ math.', options: ['in', 'on', 'at', 'with'], a: 2, why: 'Em inglês se diz good at something: good at math, good at tennis.' },
    { q: 'We ran out ___ milk, so I went to the shop.', options: ['from', 'of', 'off', 'with'], a: 1, why: 'Run out of significa ficar sem algo, não ter mais nada.' },
    { q: 'This is the ___ film I have ever seen.', options: ['worse', 'baddest', 'worst', 'most bad'], a: 2, why: 'Bad é irregular: bad, worse, the worst.' },
    { q: 'You ___ wear a seatbelt in the car. It is the law.', options: ['must', 'might', 'could', 'would'], a: 0, why: 'Must expressa uma obrigação forte, como uma regra ou uma lei.' },
    { q: 'Can you ___ the music down, please? I am on the phone.', options: ['put', 'take', 'turn', 'make'], a: 2, why: 'Turn down significa abaixar o volume: turn the music down.' },
  ],
  related: ['de-articles-a1', 'en-reading-a2', 'buddy-quiz'],
};
