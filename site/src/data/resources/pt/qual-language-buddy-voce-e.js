// Resource: fun. Each option votes for a buddy from the drawing cast; the most votes wins.
export default {
  key: 'buddy-quiz', site: 'pt', slug: 'qual-language-buddy-voce-e', kind: 'fun', course: null, level: 'Só por diversão',
  draw: 'churro', tint: 'sun', published: '2026-10-26',
  title: 'Qual language buddy é você?',
  metaTitle: 'Qual language buddy é você? Quiz divertido e grátis – Alimun',
  desc: 'Um quiz grátis de três perguntas para quem estuda idiomas: descubra o buddy da Alimun que combina com o seu jeito de aprender e compartilhe com um amigo.',
  lead: 'Três perguntas sobre o seu jeito de aprender. No final você conhece o seu buddy e pode compartilhar com um amigo.',
  about: [
    'Cada pessoa aprende um idioma de um jeito um pouco diferente. Algumas aprendem conversando, outras planejando, outras com filmes e música.',
    'Este quiz é só por diversão, mas o resultado diz algo verdadeiro sobre você: o jeito como você aprende melhor é o jeito que vai fazer você continuar.',
  ],
  buddy: {
    questions: [
      ['Como você gosta de aprender?', [['Conversando com as pessoas', 'churro'], ['Com um plano claro e regras', 'pretzel'], ['Com filmes e música', 'croissant'], ['Com uma xícara de chá e um bom livro', 'teacup']]],
      ['Seu fim de semana ideal?', [['Um almoço longo com os amigos', 'pizza'], ['Uma viagem para um lugar novo', 'nata'], ['Um museu e depois um café', 'croissant'], ['Organizar a próxima semana', 'pretzel']]],
      ['Quando você erra...', [['Dou risada e sigo em frente', 'churro'], ['Anoto para corrigir', 'pretzel'], ['Peço para alguém me explicar', 'teacup'], ['Tento de novo, mais alto', 'pizza']]],
    ],
    results: {
      churro: ['Churro', 'Caloroso, sociável e sem medo. Você aprende mais rápido conversando.'],
      pretzel: ['Pretzel', 'Organizado e constante. Regras e rotina são o seu superpoder.'],
      croissant: ['Croissant', 'Curioso e cheio de estilo. Filmes, música e cultura atraem você.'],
      teacup: ['Xícara de chá', 'Calmo e reflexivo. Você gosta de entender antes de falar.'],
      pizza: ['Pizza', 'Generoso e expressivo. Você aprende com as mãos e com o coração.'],
      nata: ['Pastel de nata', 'Aventureiro. Lugares novos e palavras novas são o que você ama.'],
    },
  },
  related: ['false-friends', 'en-quiz-b1', 'cefr-poster'],
};
