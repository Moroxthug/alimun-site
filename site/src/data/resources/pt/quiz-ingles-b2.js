// Resource: quiz. English items stay English; explanations are in Portuguese.
export default {
  key: 'en-quiz-b2', site: 'pt', slug: 'quiz-ingles-b2', kind: 'quiz', course: 'English', level: 'B2',
  draw: 'monster', tint: 'lime', published: '2026-10-26',
  title: 'Quiz rápido de inglês: dez perguntas no nível B2',
  metaTitle: 'Quiz de inglês B2 grátis: gramática e vocabulário online – Alimun',
  desc: 'Um quiz de inglês grátis com dez perguntas no nível B2: passive voice, reported speech, wish, used to, phrasal verbs e collocations, com as respostas explicadas.',
  lead: 'Dez perguntas sobre a gramática e as palavras que você encontra no B2. Escolha uma resposta para ver por que ela está certa.',
  instructions: 'Escolha a melhor resposta.',
  about: [
    'No B2 você acompanha a maioria das conversas, notícias e filmes sobre assuntos conhecidos, defende um ponto de vista e escreve textos claros e detalhados. A precisão passa a pesar mais: a voz passiva, o reported speech e as combinações naturais de palavras começam a fazer a diferença.',
    'Este quiz confere a voz passiva, perguntas e ordens no reported speech, wish, used to e be used to, phrasal verbs e collocations comuns. São também pontos que caem com frequência no B2 First. Cada resposta vem com uma explicação curta.',
  ],
  items: [
    { q: 'The bridge ___ in 1990.', options: ['built', 'has built', 'was building', 'was built'], a: 3, why: 'A ponte não construiu nada; ela recebeu a ação, então use a voz passiva: was built.' },
    { q: 'The new hospital ___ right now, so the road is closed.', options: ['is building', 'has built', 'builds', 'is being built'], a: 3, why: 'Para uma ação na voz passiva em andamento agora, use is being + past participle.' },
    { q: 'He asked me where ___.', options: ['I lived', 'did I live', 'do I live', 'I did live'], a: 0, why: 'Numa pergunta em reported speech, use a ordem normal de uma afirmação e recue o tempo verbal: where I lived.' },
    { q: 'She told me ___ the door.', options: ['to close', 'close', 'closing', 'that close'], a: 0, why: 'Para relatar uma instrução, use tell someone to do something.' },
    { q: 'I wish I ___ more free time. I am so busy this week.', options: ['have', 'will have', 'had', 'would have'], a: 2, why: 'Para um desejo sobre o presente, use wish + past simple: I wish I had.' },
    { q: 'I wish I ___ to the party last night. Everyone says it was great.', options: ['went', 'had gone', 'have gone', 'would go'], a: 1, why: 'Para um arrependimento sobre o passado, use wish + past perfect: I wish I had gone.' },
    { q: 'I have lived in Chicago for years, so I ___ the cold winters.', options: ['used to', 'use to', 'am use to', 'am used to'], a: 3, why: 'Be used to + substantivo significa estar acostumado com algo, que já não parece estranho.' },
    { q: 'When I was a child, I ___ play outside every day.', options: ['used to', 'am used to', 'was used to', 'use to'], a: 0, why: 'Used to + verbo na forma base descreve um hábito do passado que já não existe.' },
    { q: 'The game was ___ because of the storm.', options: ['called up', 'called on', 'called off', 'called out'], a: 2, why: 'Call off significa cancelar algo que estava planejado.' },
    { q: 'When you choose a school, you should ___ into account how far it is from home.', options: ['make', 'put', 'take', 'give'], a: 2, why: 'A expressão fixa é take something into account, que significa levar algo em conta.' },
  ],
  related: ['en-quiz-b1', 'en-quiz-c1', 'en-ex-b2'],
};
