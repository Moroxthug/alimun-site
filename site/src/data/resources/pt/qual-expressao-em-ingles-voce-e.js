// Resource: fun. Each option votes for a drawing from the cast; the result is an English idiom that fits. Idioms stay in English; everything else is in Portuguese. Idiom meanings checked against Cambridge Dictionary (night owl, life and soul of the party, go the extra mile, on cloud nine, as cool as a cucumber).
export default {
  key: 'english-idiom-quiz', site: 'pt', slug: 'qual-expressao-em-ingles-voce-e', kind: 'fun', course: 'English', level: 'Só por diversão',
  draw: 'parrot', tint: 'coral', published: '2026-11-01',
  title: 'Qual expressão em inglês é você?',
  metaTitle: 'Qual expressão em inglês é você? Um quiz divertido – Alimun',
  desc: 'Um quiz grátis de três perguntas: descubra a expressão em inglês que combina com a sua personalidade, de a night owl a on cloud nine, e compartilhe.',
  lead: 'Três perguntas rápidas, uma expressão em inglês que resume você. Compartilhe com um amigo e aprenda o que ela significa.',
  about: [
    'O inglês está cheio de expressões idiomáticas, frases cujo sentido não dá para adivinhar pelas palavras. Os nativos usam essas expressões o tempo todo, e uma delas provavelmente descreve você melhor do que você imagina.',
    'Este quiz é só por diversão, mas todas as expressões são reais e comuns, então você termina com uma expressão nova para usar na sua próxima conversa em inglês.',
  ],
  youAre: 'Sua expressão em inglês: {}',
  buddy: {
    questions: [
      ['Sábado à noite. Você...', [['Começa um projeto novo à meia-noite', 'owl'], ['Dança no meio da sala', 'parrot'], ['Ajuda um amigo a carregar caixas para o apartamento novo', 'dog'], ['Fica calmo enquanto todo mundo discute o programa', 'cat']]],
      ['Um amigo tem um prazo importante amanhã. Você...', [['Fica acordado até tarde trabalhando com ele', 'owl'], ['Leva lanche e fica até terminar', 'dog'], ['Diz que vai dar tudo certo e faz um plano claro', 'cat'], ['Organiza a comemoração para quando ele terminar', 'sun']]],
      ['Escolha um som:', [['Uma cidade em silêncio às duas da manhã', 'owl'], ['Risadas numa festa cheia', 'parrot'], ['O celular tocando com uma ótima notícia', 'sun'], ['Ondas lentas num mar calmo', 'cat']]],
    ],
    results: {
      owl: ['a night owl', 'Literalmente "uma coruja da noite": alguém que prefere ficar acordado e ativo à noite. Suas melhores ideias chegam quando todo mundo está dormindo.'],
      parrot: ['the life and soul of the party', 'A alma da festa: alguém cheio de energia e engraçado, sempre no centro de qualquer encontro. Quando você chega, a diversão começa.'],
      dog: ['go the extra mile', 'Fazer mais esforço do que esperam de você. Seus amigos sabem que sempre podem contar com você.'],
      sun: ['on cloud nine', 'Estar nas nuvens: extremamente feliz e animado. Seu bom humor ilumina o ambiente inteiro.'],
      cat: ['as cool as a cucumber', 'Calmíssimo, principalmente quando ninguém esperaria. Nada abala você, nem quando todo mundo entra em pânico.'],
    },
  },
  related: ['english-idioms', 'buddy-quiz', 'british-american'],
};
