// Portuguese B1, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Work and careers',
  goal: 'Talk about jobs and experience, join sentences with relative pronouns and write a formal e-mail. Learn the vocabulary of an interview, que, quem, onde, o qual and cujo, and the formal register.',
  art: 'mug',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['jobs', 'interview', 'cv', 'relative pronouns', 'formal register', 'cover email'], goals: ['foundations', 'professional'] },
  pages: [
    {
      id: 'p1',
      title: 'A entrevista de emprego',
      about: 'Talk about your work, your skills and how long you have been doing something.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'At a job interview, people ask about your **experience** and your **skills**. To say how long something has been going on, use the present with **há** or **desde**: *Trabalho nesta empresa há dois anos. Trabalho aqui desde 2022.* To say how long something lasted and is finished, use the perfeito with **durante**: *Trabalhei durante três anos numa loja.* To say what you do, use the present: *Atendo os clientes e preparo orçamentos.* To say what you can do, use **sei** + infinitive: *Sei usar o computador.*' },
          { t: 'table', caption: 'Work words', explain: ['head', 'col1'], head: ['Word', 'Meaning'], rows: [
            ['a entrevista', 'job interview'],
            ['o currículo', 'CV'],
            ['a experiência', 'experience'],
            ['as competências', 'skills'],
            ['o ordenado', 'salary'],
            ['o contrato', 'contract'],
            ['o horário', 'working hours'],
            ['a tempo inteiro / parcial', 'full-time / part-time'],
            ['candidatar-se a', 'to apply for'],
            ['contratar', 'to hire'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Portugal, **o ordenado** and **o salário** both mean pay; **o curriculum** is also written **o currículo**. At an interview, address the interviewer with **o senhor** or **a senhora**, or with the title and name: *Senhor Doutor Silva*. Brazilian Portuguese says *emprego em tempo integral* instead of *a tempo inteiro*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Trabalho nesta empresa **há** dois anos.', n: 'It continues.' },
            { s: 'Trabalhei **durante** três anos numa loja.', n: 'A finished period.' },
            { s: '**Atendo** os clientes e **preparo** orçamentos.', n: 'What I do.' },
            { s: '**Sei** usar bem o computador.', n: '*Saber* + infinitive = to know how to.' },
            { s: '**Candidatei-me** ao lugar de rececionista.', n: '*Candidatar-se a* = to apply for.' },
          ] },
          { t: 'dialogue', title: 'A entrevista', lines: [
            { who: 'Ana', s: 'Bom dia, faça favor de se sentar. Fale-me da sua experiência.' },
            { who: 'Rafael', s: 'Trabalhei três anos numa loja de roupa. Agora trabalho numa agência de viagens há um ano.' },
            { who: 'Ana', s: 'O que faz exatamente?' },
            { who: 'Rafael', s: 'Atendo os clientes e preparo orçamentos. Sei usar bem o computador e falo inglês e espanhol.' },
            { who: 'Ana', s: 'Porque quer mudar de emprego?' },
            { who: 'Rafael', s: 'Gostaria de ter mais responsabilidade e um horário mais flexível.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['a entrevista', 'job interview'],
            ['o ordenado', 'salary'],
            ['as competências', 'skills'],
            ['candidatar-se a', 'to apply for'],
            ['o horário', 'working hours'],
            ['o currículo', 'CV'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Fale-me da sua ___ profissional.', o: ['experiência', 'contrato', 'horário'], why: 'At an interview, you talk about your experience.' },
            { q: 'O ___ é de mil e seiscentos euros por mês.', o: ['ordenado', 'currículo', 'chefe'], why: 'The money you earn: *o ordenado*.' },
            { q: 'Amanhã tenho uma ___ para um novo emprego.', o: ['entrevista', 'contrato', 'colega'], why: 'A meeting with an employer: *uma entrevista*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Trabalho neste escritório ___ dois anos.', a: ['há'], why: 'It continues: *há* + present.' },
            { q: 'Trabalhei ___ três anos numa loja.', a: ['durante'], why: 'A finished period: *durante* + perfeito.' },
            { q: 'Atendo os clientes e preparo ___. (quotes)', a: ['orçamentos'], why: '*Preparo orçamentos*.' },
            { q: 'O Marco candidatou-___ a um lugar num banco.', a: ['se'], why: '*Candidatou-se*.' },
            { q: 'Tenho um contrato a tempo ___. (full-time)', a: ['inteiro'], why: '*A tempo inteiro* = full-time.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Trabalho aqui [desde] dois anos.', a: ['há'], why: '*Há* + a length of time.' },
            { s: 'Trabalhei aqui [há] três anos e depois saí.', a: ['durante'], why: 'A finished period: *durante*.' },
            { s: 'Candidatei-me [de] um lugar na loja.', a: ['a'], why: '*Candidatar-se a*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Trabalho numa agência de viagens há um ano.', why: '*Há* + time: it continues.' },
            { a: 'Trabalhei durante três anos numa loja.', why: '*Durante* + time: finished.' },
            { a: 'Sei usar bem o computador.', why: '*Saber* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Que, quem, onde, cujo',
      about: 'Join two sentences with relative pronouns.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A **relative pronoun** joins two sentences about the same person or thing. **Que** is the most common: *O homem que trabalha aqui é o meu chefe. O emprego que procuro é a tempo inteiro.* After a **preposition**, use **que** (for things), **quem** (for people) or **o qual** (for both): *A empresa em que trabalho é grande. O colega com quem trabalho é simpático. A empresa para a qual trabalho fica em Lisboa.* For a place, use **onde**: *O escritório onde trabalho fica no centro.* For *what*, use **o que**: *Faço o que posso.* For *whose*, use **cujo**: *O autor cujo livro li vive em Lisboa.*' },
          { t: 'table', caption: 'Relative pronouns', explain: ['head', 'col1'], head: ['Pronoun', 'Use', 'Example'], rows: [
            ['que', 'subject or object, people or things', 'O emprego que procuro é interessante.'],
            ['preposition + que', 'after a preposition (things)', 'A empresa em que trabalho é grande.'],
            ['preposition + quem', 'after a preposition (people)', 'O colega com quem trabalho é simpático.'],
            ['o qual / a qual / os quais / as quais', 'after a preposition, formal', 'A empresa para a qual trabalho é grande.'],
            ['onde', 'a place', 'O escritório onde trabalho fica no centro.'],
            ['o que', 'what, the thing that', 'Faço o que posso.'],
            ['cujo / cuja / cujos / cujas', 'whose', 'O autor cujo livro li vive em Lisboa.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Cujo** agrees with the **thing owned**, not with the owner: *a mulher cuja filha estuda comigo*. **Quem** is only for people and always follows a preposition: *a pessoa com quem falei*. In speech, many people use only **que**, but **quem** after a preposition is the correct form for people.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Tenho um colega **que** fala três línguas.', n: '*Que* = subject.' },
            { s: 'O emprego **que** procuro é a tempo inteiro.', n: '*Que* = object.' },
            { s: 'A empresa **em que** trabalho é grande.', n: 'After a preposition: *em que*.' },
            { s: 'O colega **com quem** trabalho é simpático.', n: 'After a preposition, for a person: *com quem*.' },
            { s: 'O escritório **onde** trabalho fica no centro.', n: 'A place: *onde*.' },
            { s: 'O autor **cujo** livro li vive em Lisboa.', n: '*Cujo livro* = whose book.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the relative pronoun.', items: [
            { q: 'O homem ___ trabalha aqui é o meu chefe.', a: ['que'], why: 'Subject: *que*.' },
            { q: 'A empresa para ___ trabalho é grande.', a: ['a qual'], why: '*Para a qual*, formal.' },
            { q: 'O colega com ___ trabalho é simpático.', a: ['quem'], why: 'A person after a preposition: *quem*.' },
            { q: 'O escritório ___ trabalho fica no centro.', a: ['onde'], why: 'A place: *onde*.' },
            { q: 'Faço ___ posso.', a: ['o que'], why: '*O que* = what.' },
            { q: 'O autor ___ livro li vive em Lisboa. (whose)', a: ['cujo'], why: '*Cujo livro*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right pronoun.', items: [
            { q: 'O rapaz ___ encontrei é meu primo.', o: ['que', 'quem', 'onde'], why: 'Object, no preposition: *que*.' },
            { q: 'A pessoa com ___ falei é a diretora.', o: ['quem', 'que', 'onde'], why: 'A person after a preposition: *quem*.' },
            { q: 'A cidade ___ vivo é pequena.', o: ['onde', 'quem', 'cujo'], why: 'A place: *onde*.' },
            { q: 'A mulher ___ filha estuda comigo mora aqui.', o: ['cuja', 'cujo', 'que'], why: '*Cuja filha*: agrees with *filha*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with a relative pronoun.', items: [
            { q: 'Tenho um colega. O colega fala três línguas.', a: ['Tenho um colega que fala três línguas.'], why: '*Que* replaces *o colega*.' },
            { q: 'O chefe é simpático. Trabalho com o chefe.', a: ['O chefe com quem trabalho é simpático.'], why: '*Com quem* for a person.' },
            { q: 'A empresa é grande. Trabalho nessa empresa.', a: ['A empresa em que trabalho é grande.', 'A empresa onde trabalho é grande.'], why: '*Em que* or *onde*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'O colega com [que] trabalho é simpático.', a: ['quem'], why: 'A person after a preposition: *quem*.' },
            { s: 'A mulher [cujo] filha estuda comigo mora aqui.', a: ['cuja'], why: '*Cuja* agrees with *filha*.' },
            { s: 'A empresa [quem] trabalho é grande.', a: ['em que'], why: 'A thing after a preposition: *em que*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'A empresa em que trabalho é grande.', why: '*Em que* after a preposition.' },
            { a: 'O colega com quem trabalho é simpático.', why: '*Com quem* for a person.' },
            { a: 'Faço o que posso.', why: '*O que* = what.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Escrever ao senhor',
      about: 'Use the formal register in e-mails and on the phone.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'In a work letter or e-mail to someone you do not know, use the polite form. Begin with **Exmo. Senhor,** (Dear Sir) or **Exma. Senhora,**; for a company, write **Exmos. Senhores,**. State your reason with **Venho por este meio …** or **Escrevo-lhe a propósito de …**. In your closing, say **Aguardo a vossa resposta** or **Agradeço desde já a atenção dispensada**, then **Com os melhores cumprimentos** (or simply **Cumprimentos**). The verb is in the third person: **o senhor / a senhora**.' },
          { t: 'table', caption: 'Informal and formal', explain: ['head'], head: ['Informal', 'Formal'], rows: [
            ['Olá, Pedro,', 'Exmo. Senhor,'],
            ['Escrevo-te porque …', 'Escrevo-lhe a propósito de …'],
            ['Envio-te o meu currículo.', 'Em anexo envio o meu currículo.'],
            ['Podes responder-me?', 'Poderia responder-me?'],
            ['Obrigado!', 'Agradeço desde já a atenção dispensada.'],
            ['Um abraço', 'Com os melhores cumprimentos'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Portugal, titles are used a lot: **Dr.** and **Dra.** (a degree), **Eng.** and **Eng.ª** (an engineer), **Prof.** and **Prof.ª**. You say *Senhor Doutor Silva* or *Senhora Engenheira Costa*. On the phone, say **Bom dia, fala o Pedro Gomes.**' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Exmo. Senhor**, venho por este meio candidatar-me ao lugar.', n: 'A formal opening and the reason.' },
            { s: '**Em anexo** envio o meu currículo.', n: '*Em anexo* = attached.' },
            { s: '**Agradeço desde já** a atenção dispensada.', n: 'Thanks in advance.' },
            { s: '**Fico ao dispor** para uma entrevista.', n: 'I am available.' },
            { s: '**Com os melhores cumprimentos**', n: 'The usual formal closing.' },
          ] },
          { t: 'dialogue', title: 'Ao telefone', lines: [
            { who: 'Pedro', s: 'Bom dia. Fala o Pedro Gomes. Queria falar com a engenheira Costa.' },
            { who: 'Secretária', s: 'Um momento, vou ver se está disponível.' },
            { who: 'Secretária', s: 'Lamento, mas a engenheira está numa reunião. Quer deixar recado?' },
            { who: 'Pedro', s: 'Sim, peço-lhe que lhe diga que liguei. O meu número é 210 555 0123.' },
            { who: 'Secretária', s: 'Com certeza, digo-lhe.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the informal phrase with the formal one.', pairs: [
            ['Olá, Pedro,', 'Exmo. Senhor,'],
            ['Escrevo-te porque …', 'Escrevo-lhe a propósito de …'],
            ['Obrigado!', 'Agradeço desde já a atenção dispensada.'],
            ['Um abraço', 'Com os melhores cumprimentos'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the formal one.', items: [
            { q: 'How do you open an e-mail to a woman you do not know?', o: ['Exma. Senhora,', 'Olá,', 'Oi,'], why: '*Exma. Senhora* is formal.' },
            { q: 'How do you close a formal e-mail?', o: ['Com os melhores cumprimentos', 'Um beijinho', 'Abraços'], why: 'The usual formal closing.' },
            { q: 'How do you ask a stranger to repeat?', o: ['Poderia repetir, por favor?', 'Podes repetir?', 'Repete!'], why: 'Polite, in the third person.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ Senhor, venho por este meio candidatar-me. (Dear Sir, abbreviated)', a: ['Exmo.', 'Exmo'], why: 'The formal opening: *Exmo. Senhor*.' },
            { q: 'Em ___ envio o meu currículo.', a: ['anexo'], why: '*Em anexo* = attached.' },
            { q: 'Agradeço ___ já a atenção dispensada.', a: ['desde'], why: '*Desde já* = in advance.' },
            { q: 'Fico ao ___ para uma entrevista.', a: ['dispor'], why: '*Fico ao dispor* = I am available.' },
            { q: 'Com os melhores ___', a: ['cumprimentos'], why: 'The closing: *Com os melhores cumprimentos*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make it formal.', items: [
            { q: 'Podes responder-me?', a: ['Poderia responder-me?', 'Podia responder-me?'], why: 'The polite condicional or imperfeito.' },
            { q: 'Obrigado!', a: ['Agradeço desde já a atenção dispensada.', 'Agradeço desde já.'], why: 'A formal thank you.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: '[Olá] Senhor, escrevo-lhe a propósito de um lugar.', a: ['Exmo.'], why: 'A formal opening: *Exmo. Senhor*.' },
            { s: 'Escrevo-[te] a propósito do lugar. (to a stranger)', a: ['lhe'], why: 'Polite: *lhe*.' },
            { s: '[Um beijinho]', a: ['Com os melhores cumprimentos'], why: 'A formal closing.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Em anexo envio o meu currículo.', why: '*Em anexo* = attached.' },
            { a: 'Agradeço desde já a atenção dispensada.', why: 'A formal thank you.' },
            { a: 'Fico ao dispor para uma entrevista.', why: 'A formal closing.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Um anúncio e uma candidatura',
      about: 'Read a job advert and a cover e-mail.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Um anúncio', md: 'Hotel no centro procura rececionista. Pede-se bom conhecimento de português e inglês e um ano de experiência em atendimento ao público. Oferece-se contrato de seis meses a tempo inteiro, com possibilidade de renovação. O horário é das 14h às 22h, cinco dias por semana. Enviar o currículo para trabalho@example.com até 20 de novembro.' },
          { t: 'reading', title: 'A candidatura', md: '**Assunto:** Candidatura a rececionista\n\nExmo. Senhor,\n\nEscrevo-lhe para me candidatar ao lugar de rececionista que vi no vosso site. Chamo-me Clara Moreira e tenho vinte e seis anos. Trabalhei dois anos num restaurante, onde aprendi a lidar com os clientes, e trabalho há seis meses numa loja. Falo bem inglês e um pouco de espanhol. O trabalho que procuro é a tempo inteiro e gostaria de trabalhar com o público.\n\nEm anexo envio o meu currículo. Fico ao dispor para uma entrevista. Agradeço desde já a atenção dispensada.\n\nCom os melhores cumprimentos,\nClara Moreira\nclara.moreira@example.com' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'A Clara tem vinte e seis anos.', a: 't', why: '*Tenho vinte e seis anos.*' },
            { q: 'A Clara trabalha agora num restaurante.', a: 'f', why: 'She now works in a shop: *trabalho há seis meses numa loja*.' },
            { q: 'O hotel oferece um contrato de seis meses.', a: 't', why: '*Contrato de seis meses a tempo inteiro.*' },
            { q: 'A Clara já trabalhou num hotel.', a: 'ng', why: 'She mentions a restaurant and a shop, not a hotel.' },
            { q: 'Deve enviar o currículo até 20 de novembro.', a: 't', why: '*Até 20 de novembro.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'O que procura o hotel?', o: ['Um rececionista.', 'Um cozinheiro.', 'Um diretor.'], why: '*Procura rececionista.*' },
            { q: 'Onde aprendeu a Clara a lidar com os clientes?', o: ['Num restaurante.', 'Num hotel.', 'Num banco.'], why: '*Num restaurante, onde aprendi a lidar com os clientes.*' },
            { q: 'Qual é o horário do trabalho?', o: ['Das 14h às 22h.', 'Das 8h às 16h.', 'Das 9h às 17h.'], why: '*Das 14h às 22h.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the relative pronouns.', items: [
            { s: 'Trabalhei dois anos num restaurante, [onde] aprendi a lidar com os clientes.', why: '*Onde* = in the restaurant.' },
            { s: 'O trabalho [que] procuro é a tempo inteiro.', why: '*Que* = object of *procuro*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'A Clara trabalha numa loja ___ seis meses.', a: ['há'], why: 'It continues: *há*.' },
            { q: 'Fico ao ___ para uma entrevista.', a: ['dispor'], why: 'A formal closing.' },
            { q: 'Em ___ envio o meu currículo.', a: ['anexo'], why: '*Em anexo* = attached.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Escrevo-lhe para me candidatar ao lugar de rececionista.', why: '*Escrevo-lhe para* + infinitive.' },
            { a: 'O trabalho que procuro é a tempo inteiro.', why: '*Que* = object.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Trabalho neste escritório ___ dois anos.', o: ['há', 'durante', 'desde'], why: 'It continues for a length of time: *há*.' },
      { q: 'O colega com ___ trabalho é simpático.', o: ['quem', 'que', 'onde'], why: 'A person after a preposition: *quem*.' },
      { q: 'O escritório ___ trabalho fica no centro.', o: ['onde', 'quem', 'cujo'], why: 'A place: *onde*.' },
      { q: 'How do you open an e-mail to a woman you do not know?', o: ['Exma. Senhora,', 'Olá,', 'Oi,'], why: '*Exma. Senhora* is formal.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Trabalhei ___ três anos numa loja.', a: ['durante'], why: 'A finished period: *durante*.' },
      { q: 'O autor ___ livro li vive em Lisboa. (whose)', a: ['cujo'], why: '*Cujo livro*.' },
      { q: 'Em ___ envio o meu currículo.', a: ['anexo'], why: '*Em anexo* = attached.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['a entrevista', 'job interview'],
      ['o ordenado', 'salary'],
      ['o horário', 'working hours'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence.', items: [
      { q: 'Tenho um colega. O colega fala três línguas.', a: ['Tenho um colega que fala três línguas.'], why: '*Que* replaces *o colega*.' },
      { q: 'Podes responder-me?', a: ['Poderia responder-me?', 'Podia responder-me?'], why: 'The polite condicional or imperfeito.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'O colega com [que] trabalho é simpático.', a: ['quem'], why: 'A person after a preposition: *quem*.' },
      { s: 'Trabalho aqui [desde] dois anos.', a: ['há'], why: '*Há* + a length of time.' },
    ] },
  ],
};
