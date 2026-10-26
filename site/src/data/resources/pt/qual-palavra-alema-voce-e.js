// Resource: fun. Each option votes for a drawing from the cast; the result is a German word that fits. Result words stay German; everything else is in Portuguese.
export default {
  key: 'german-word-quiz', site: 'pt', slug: 'qual-palavra-alema-voce-e', kind: 'fun', course: 'German', level: 'Só por diversão',
  draw: 'pretzel', tint: 'coral', published: '2026-10-27',
  title: 'Qual palavra alemã é você?',
  metaTitle: 'Qual palavra alemã é você? Um quiz divertido e grátis – Alimun',
  desc: 'Um quiz grátis de três perguntas: descubra a palavra alemã que combina com a sua personalidade, de Fernweh a Gemütlichkeit, e compartilhe com um amigo.',
  lead: 'Três perguntas rápidas, uma palavra alemã que resume você. Compartilhe com um amigo e aprenda o que ela significa.',
  about: [
    'O alemão tem palavras para sentimentos que outros idiomas precisam de uma frase para explicar. Uma delas provavelmente descreve você melhor do que você imagina.',
    'Este quiz é só por diversão, mas todas as palavras são reais e usadas todos os dias, então você termina com uma palavra nova que não vai esquecer.',
  ],
  youAre: 'Sua palavra alemã: {}',
  buddy: {
    questions: [
      ['Sexta-feira, seis da tarde. Você...', [['Reserva uma viagem para um lugar novo', 'suitcase'], ['Acende uma vela e faz um chá', 'teacup'], ['Fecha o notebook e comemora', 'mug'], ['Planeja o fim de semana inteiro', 'owl']]],
      ['Seu jeito favorito de passar o domingo?', [['Uma longa caminhada bem longe de casa', 'suitcase'], ['Cobertor, sofá e um bom livro', 'teacup'], ['Uma cervejaria ao ar livre com os amigos', 'mug'], ['Uma música no repeat enquanto cozinha', 'parrot']]],
      ['Escolha um som:', [['Um trem saindo da estação', 'suitcase'], ['Chuva na janela', 'teacup'], ['Copos brindando', 'mug'], ['Um refrão chiclete', 'parrot']]],
    ],
    results: {
      suitcase: ['Fernweh', 'A vontade de estar em lugares distantes. Você é mais feliz a caminho de algum lugar novo.'],
      teacup: ['Gemütlichkeit', 'Aconchego, conforto e sensação de pertencer. Você deixa qualquer lugar mais acolhedor.'],
      mug: ['Feierabend', 'A alegria do fim do expediente. Você sabe desligar e aproveitar.'],
      owl: ['Ordnung', 'Ordem. Você gosta de um plano, e os seus planos funcionam de verdade.'],
      parrot: ['Ohrwurm', 'Uma música que não sai da cabeça. Você leva ritmo e diversão aonde vai.'],
    },
  },
  related: ['untranslatable-german', 'german-idioms', 'buddy-quiz'],
};
