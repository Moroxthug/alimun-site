// Resource: fun. Each option votes for a learner type; the most votes wins. No word meanings to check; "tagarela", "coruja" (pessoa que fica acordada até tarde) and "rato de biblioteca" checked against Michaelis. The types are playful, not a research-based "learning styles" test, and the about text says so.
export default {
  key: 'learner-type-quiz', site: 'pt', slug: 'que-tipo-de-estudante-de-idiomas-voce-e', kind: 'fun', course: null, level: 'Só por diversão',
  draw: 'owl', tint: 'mint', published: '2026-11-01',
  title: 'Que tipo de estudante de idiomas você é?',
  metaTitle: 'Que tipo de estudante de idiomas você é? Quiz divertido – Alimun',
  desc: 'Um quiz grátis de três perguntas: você é tagarela, planejador, explorador, coruja ou rato de biblioteca? Descubra e ganhe uma dica que combina com você.',
  lead: 'Três perguntas divertidas sobre os seus hábitos. No final você descobre o seu tipo, com uma dica que combina com o seu jeito de aprender.',
  about: [
    'Tem gente que aprende um idioma conversando com todo mundo, gente que faz listas, gente que aprende com filmes e viagens, gente que estuda de madrugada e gente que prefere um bom livro.',
    'Este quiz é só por diversão, não é um teste científico. O seu resultado é um empurrãozinho: os hábitos de que você já gosta são os que vão fazer você continuar.',
  ],
  youAre: 'Você é: {}',
  buddy: {
    questions: [
      ['De onde vêm as suas palavras novas?', [['De conversas com as pessoas', 'parrot'], ['De uma lista organizada no meu caderno', 'cat'], ['De um filme ou uma série com legendas', 'suitcase'], ['De um livro que eu não consigo largar', 'teacup']]],
      ['Quando você estuda melhor?', [['Tarde da noite, quando a casa está em silêncio', 'owl'], ['No mesmo horário todos os dias', 'cat'], ['Quando encontro alguém para conversar', 'parrot'], ['No trem, a caminho de algum lugar', 'suitcase']]],
      ['Escolha a noite perfeita:', [['Um jantar com amigos de outro país', 'parrot'], ['Um romance e um bule de chá', 'teacup'], ['Um filme estrangeiro e o plano da próxima viagem', 'suitcase'], ['Acordado depois da meia-noite, feliz e ocupado', 'owl']]],
    ],
    results: {
      parrot: ['Tagarela', 'Você aprende falando, e os erros não assustam você. Tente usar cada palavra nova em voz alta, numa frase sua, no mesmo dia em que aprender.'],
      cat: ['Planejador', 'Você adora horários e listas de palavras organizadas. Planeje a sua semana, mas deixe uma sessão livre para usar essas palavras numa conversa de verdade.'],
      suitcase: ['Explorador', 'Filmes, música e lugares novos atraem você. Assista a algo de que você gosta no idioma que está aprendendo e anote três palavras que ouvir.'],
      owl: ['Coruja', 'O seu cérebro acorda quando todo mundo vai dormir. Estude pouco, mas com regularidade, antes de deitar, e revise as mesmas palavras na noite seguinte.'],
      teacup: ['Rato de biblioteca', 'Você aprende melhor lendo, uma página de cada vez. Escolha um livro um pouco abaixo do seu nível, para ler pela história e não pelo dicionário.'],
    },
  },
  related: ['buddy-quiz', 'german-word-quiz', 'city-quiz'],
};
