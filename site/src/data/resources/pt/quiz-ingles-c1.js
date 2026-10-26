// Resource: quiz. English items stay English; explanations are in Portuguese.
export default {
  key: 'en-quiz-c1', site: 'pt', slug: 'quiz-ingles-c1', kind: 'quiz', course: 'English', level: 'C1',
  draw: 'alien', tint: 'mint', published: '2026-10-26',
  title: 'Quiz rápido de inglês: dez perguntas no nível C1',
  metaTitle: 'Quiz de inglês C1 grátis: gramática e vocabulário online – Alimun',
  desc: 'Um quiz de inglês grátis com dez perguntas no nível C1: inversion, cleft sentences, collocations, idioms e palavras fáceis de confundir, com tudo explicado.',
  lead: 'Dez perguntas sobre a gramática e as palavras que você encontra no C1. Escolha uma resposta para ver por que ela está certa.',
  instructions: 'Escolha a melhor resposta.',
  about: [
    'No C1 você usa o inglês com flexibilidade no trabalho, nos estudos e na vida social. Você entende textos longos e exigentes, percebe o que está nas entrelinhas e se expressa com fluência, sem ficar procurando as palavras. O foco deixa de ser acertar e passa a ser escolher a forma mais precisa e natural de dizer as coisas.',
    'Este quiz confere a inversion depois de inícios negativos e condicionais, as cleft sentences para dar ênfase, collocations avançadas, idioms comuns e palavras parecidas com significados diferentes. Esses pontos também caem no C1 Advanced e no IELTS. Cada resposta vem com uma explicação curta.',
  ],
  items: [
    { q: 'Never ___ such a beautiful sunset.', options: ['I have seen', 'have I seen', 'I saw', 'did I saw'], a: 1, why: 'Quando uma frase começa com uma palavra negativa como never, o sujeito e o auxiliar trocam de lugar: never have I seen.' },
    { q: 'Not only ___ late, but he also forgot the tickets.', options: ['did he arrive', 'he arrived', 'he did arrive', 'arrived he'], a: 0, why: 'Depois de not only no início da frase, use a ordem de pergunta com um auxiliar: not only did he arrive.' },
    { q: '___ I known about the problem, I would have helped.', options: ['If', 'Have', 'Had', 'Should'], a: 2, why: 'Had I known é um third conditional com inversão e significa o mesmo que if I had known.' },
    { q: '___ I need is a long vacation.', options: ['That', 'What', 'Which', 'It'], a: 1, why: 'Uma cleft sentence com what coloca o foco no final: what I need is a long vacation.' },
    { q: 'It was Maria ___ found the mistake, not Tom.', options: ['which', 'what', 'who', 'whom'], a: 2, why: 'Numa it-cleft sobre uma pessoa que é o sujeito, use who (ou that): it was Maria who found it.' },
    { q: 'The report ___ serious doubts about the project.', options: ['rose', 'arose', 'raised', 'lifted'], a: 2, why: 'Raise pede objeto e combina com doubts, questions e concerns; rise e arise não levam objeto.' },
    { q: 'The decision ___ a storm of protest.', options: ['lit', 'fired', 'burned', 'sparked'], a: 3, why: 'Spark combina com protest, debate e controversy e significa provocá-los de repente.' },
    { q: 'I expected the exam to be hard, but it was a ___.', options: ['cup of tea', 'piece of cake', 'slice of bread', 'bag of tricks'], a: 1, why: 'A piece of cake é um idiom para algo muito fácil, como "moleza" em português.' },
    { q: 'We will have to ___ the bullet and pay for the repairs.', options: ['chew', 'hit', 'take', 'bite'], a: 3, why: 'Bite the bullet significa aceitar algo desagradável que não dá para evitar.' },
    { q: 'The instructions were so ___ that nobody knew what to do.', options: ['ambivalent', 'ambitious', 'ambiguous', 'amiable'], a: 2, why: 'Ambiguous significa que admite mais de um sentido; ambivalent descreve sentimentos contraditórios, não textos.' },
  ],
  related: ['en-quiz-b2', 'en-ex-c1', 'en-ex-b2'],
};
