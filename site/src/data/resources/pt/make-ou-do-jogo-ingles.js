// Resource: game. Make or do: ten English collocations learners mix up. Collocations and usage checked against Cambridge Dictionary and Oxford Learner's Dictionaries.
// The English sentences, verbs and phrases stay English; explanations and translations are in Brazilian Portuguese.
export default {
  key: 'make-or-do', site: 'pt', slug: 'make-ou-do-jogo-ingles', kind: 'game', course: 'English', level: 'Todos os níveis',
  draw: 'owl', tint: 'mint', published: '2026-11-01',
  title: 'Make ou do? O jogo para você não confundir mais em inglês',
  metaTitle: 'Make ou do: jogo grátis com 10 colocações em inglês – Alimun',
  desc: 'Um jogo grátis com dez colocações do inglês do dia a dia, de make a mistake a do your homework. Escolha make, do ou outro verbo e depois ligue os pares.',
  lead: 'Make a mistake ou do a mistake? Do your homework ou make? Escolha o verbo certo em dez frases do inglês do dia a dia.',
  instructions: 'Qual verbo completa a frase?',
  about: [
    'Em português a gente diz fazer nos dois casos, mas o inglês tem dois verbos, make e do, e é fácil confundir. Como regra geral, do é para tarefas, trabalhos e atividades, e make é para criar, produzir ou causar alguma coisa.',
    'A regra tem exceções, como make the bed e do someone a favour, então aprenda cada expressão inteira, verbo e substantivo juntos. Quanto mais inglês você lê e ouve, mais natural o verbo certo vai soar.',
  ],
  items: [
    { q: "Don't worry, everyone ___ mistakes when they're learning.", options: ['makes', 'does', 'has', 'takes'], a: 0, why: 'Diz-se make a mistake, nunca do. Do é para tarefas e trabalho, make é para criar ou causar algo, e um erro é algo que você causa.' },
    { q: 'I have to ___ my homework before dinner.', options: ['make', 'give', 'do', 'have'], a: 2, why: 'Lição de casa é uma tarefa, então leva do, como do the housework e do an exercise. Make homework está errado.' },
    { q: 'We need to ___ a decision by Friday.', options: ['do', 'make', 'give', 'have'], a: 1, why: 'Make a decision é a expressão comum. No inglês britânico também se diz take a decision, principalmente em contextos formais, mas nunca do a decision.' },
    { q: "It's your turn to ___ the dishes tonight.", options: ['make', 'have', 'give', 'do'], a: 3, why: 'Tarefas de casa levam do: do the dishes, do the laundry, do the cleaning. Uma exceção conhecida é make the bed, arrumar a cama.' },
    { q: 'She ___ a real effort to speak only English in class.', options: ['did', 'made', 'had', 'got'], a: 1, why: 'Make an effort, como make progress e make a difference: você produz algo, então o inglês usa make.' },
    { q: "It's a pleasure to ___ business with you.", options: ['make', 'take', 'do', 'give'], a: 2, why: 'Do business é uma expressão fixa, mesmo que negócios criem coisas. Aprenda inteira: do business with someone, fazer negócios com alguém.' },
    { q: 'He ___ a lot of friends at university.', options: ['did', 'took', 'gave', 'made'], a: 3, why: 'Make friends quer dizer fazer amigos, criar novas amizades. No passado fica made friends.' },
    { q: 'Could you ___ me a favour and close the window?', options: ['do', 'make', 'give', 'take'], a: 0, why: 'Do someone a favour é uma exceção: um favor não é bem uma tarefa, mas sempre leva do. No inglês americano se escreve favor.' },
    { q: 'I have to ___ a phone call to my bank before it closes.', options: ['do', 'take', 'make', 'get'], a: 2, why: 'Make a phone call, como make a complaint e make a suggestion. Take a phone call também existe, mas quer dizer atender uma ligação.' },
    { q: "Don't worry about the result, just ___ your best.", options: ['do', 'make', 'have', 'take'], a: 0, why: 'Do your best é uma expressão fixa que quer dizer fazer o seu melhor. Make your best está errado.' },
  ],
  pairs: [
    ['make a mistake', 'errar'],
    ['do homework', 'fazer a lição de casa'],
    ['make a decision', 'tomar uma decisão'],
    ['do the dishes', 'lavar a louça'],
    ['make friends', 'fazer amigos'],
    ['do business', 'fazer negócios'],
    ['make a phone call', 'fazer uma ligação'],
    ['do your best', 'dar o seu melhor'],
  ],
  related: ['english-idioms', 'false-friends', 'en-verbs-sheet'],
};
