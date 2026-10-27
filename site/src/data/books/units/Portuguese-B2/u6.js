// Portuguese B2, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'The language of reports and letters',
  goal: 'Write and understand a formal report, a complaint and a reply. Learn participle and gerund clauses, nouns in place of verbs, and the set phrases of a formal letter.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['formal writing', 'complaint', 'participle', 'gerund', 'register'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Feito o trabalho, tendo acabado',
      about: 'Open a sentence with a participle or a compound gerund.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'In formal writing a sentence often opens with what happened **first**. Use the **past participle** with its noun, and make it **agree** with that noun: *Feito o trabalho, fomos embora. Terminada a reunião, saímos. Lidas as cartas, ela respondeu.* Use **tendo + participle** (the compound gerund) when the **subject is the same**: *Tendo acabado o trabalho, saímos.* For the negative, put **não** before **tendo**: *Não tendo recebido resposta, escrevi de novo.*' },
          { t: 'table', caption: 'Opening a sentence', explain: ['head', 'col1'], head: ['Structure', 'Meaning', 'Example'], rows: [
            ['participle + noun', 'after it was done', 'Feito o trabalho, fomos embora.'],
            ['participle + noun', 'after it was done', 'Terminada a reunião, saímos.'],
            ['tendo + participle', 'having done (same subject)', 'Tendo acabado o trabalho, saímos.'],
            ['não tendo + participle', 'not having done', 'Não tendo recebido resposta, escrevi de novo.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The participle agrees with the noun that follows it: *lido o texto, lida a carta, lidos os textos, lidas as cartas*. After **tendo**, the participle never changes: *tendo escrito as cartas*. In speech people usually say **depois de + infinitive**: *Depois de acabar o trabalho, saímos.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Feito o trabalho**, fomos embora.', n: 'Participle agrees with *trabalho*.' },
            { s: '**Terminada a reunião**, saímos.', n: 'Participle agrees with *reunião*.' },
            { s: '**Lidas as cartas**, ela respondeu.', n: 'Participle agrees with *cartas*.' },
            { s: '**Tendo acabado** o trabalho, saímos.', n: 'Same subject.' },
            { s: '**Não tendo recebido** resposta, escrevi de novo.', n: 'Negative.' },
          ] },
          { t: 'dialogue', title: 'Depois da reunião', lines: [
            { who: 'Ana', s: 'Terminada a reunião, vais almoçar?' },
            { who: 'Pedro', s: 'Vou. Tendo acabado o relatório, tenho tempo.' },
            { who: 'Ana', s: 'Lido o relatório, o diretor ficou satisfeito.' },
            { who: 'Pedro', s: 'Então vamos comemorar.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ o trabalho, fomos embora. (fazer)', a: ['Feito'], why: 'Participle agrees with *trabalho*.' },
            { q: '___ a reunião, saímos. (terminar)', a: ['Terminada'], why: 'Participle agrees with *reunião*.' },
            { q: '___ os documentos, assinou. (ler)', a: ['Lidos'], why: 'Participle agrees with *documentos*.' },
            { q: 'Tendo ___ o trabalho, saímos. (acabar)', a: ['acabado'], why: 'After *tendo* the participle does not change.' },
            { q: 'Não ___ recebido resposta, escrevi de novo. (ter)', a: ['tendo'], why: '*Não tendo* + participle.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: '___ as cartas, ela respondeu.', o: ['Lidas', 'Lidos', 'Lido'], why: 'It agrees with *cartas*.' },
            { q: '___ a porta, saiu.', o: ['Fechada', 'Fechado', 'Fechadas'], why: 'It agrees with *porta*.' },
            { q: 'Tendo ___ o trabalho, saímos.', o: ['acabado', 'acabei', 'acabar'], why: '*Tendo* + participle.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word in brackets.', items: [
            { q: 'Depois de acabar o trabalho, saímos.', cue: 'Tendo', a: ['Tendo acabado o trabalho, saímos.'], why: '*Tendo* + participle.' },
            { q: 'Depois de terminar a reunião, saímos.', cue: 'Terminada', a: ['Terminada a reunião, saímos.'], why: 'The participle agrees with *reunião*.' },
            { q: 'Como não recebi resposta, escrevi de novo.', cue: 'Não tendo', a: ['Não tendo recebido resposta, escrevi de novo.'], why: '*Não tendo* + participle.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: '[Lido] as cartas, ela respondeu.', a: ['Lidas'], why: 'It agrees with *cartas*.' },
            { s: 'Tendo [acabei] o trabalho, saímos.', a: ['acabado'], why: '*Tendo* + participle.' },
            { s: '[Terminado] a reunião, saímos.', a: ['Terminada'], why: 'It agrees with *reunião*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Feito o trabalho, fomos embora.', why: 'Participle first, then the noun.' },
            { a: 'Tendo acabado o trabalho, saímos.', why: '*Tendo* + participle.' },
            { a: 'Terminada a reunião, saímos.', why: 'Participle first, then the noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'The noun in place of the verb',
      about: 'Use nouns such as a entrega, o atraso and o reembolso to write in a formal register.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Formal writing prefers a **noun** to a verb. Instead of *Entregaram o produto tarde*, a report says *A entrega do produto foi tardia*. Instead of *Quero que me reembolsem*, a letter says *Solicito o reembolso*. The common pairs are **entregar → a entrega**, **atrasar → o atraso**, **reembolsar → o reembolso**, **reclamar → a reclamação**, **pagar → o pagamento** and **substituir → a substituição**. Formal verbs such as **efetuar**, **apresentar** and **solicitar** go with these nouns: *efetuar o pagamento, apresentar uma reclamação, solicitar a substituição*.' },
          { t: 'table', caption: 'Verb and noun', explain: ['head', 'col1'], head: ['Verb', 'Noun', 'Example'], rows: [
            ['entregar', 'a entrega', 'A entrega foi feita com atraso.'],
            ['atrasar', 'o atraso', 'O atraso foi de três dias.'],
            ['reembolsar', 'o reembolso', 'Solicito o reembolso do valor pago.'],
            ['reclamar', 'a reclamação', 'Apresentei uma reclamação.'],
            ['pagar', 'o pagamento', 'O pagamento foi efetuado ontem.'],
            ['substituir', 'a substituição', 'Peço a substituição do produto.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Write **o atraso** (masculine) and **a entrega** (feminine); the noun keeps the gender it has. In speech people say *pagar* and *entregar*; in a letter the noun sounds more careful. Do not overuse nouns: one or two per sentence is enough.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**A entrega** foi feita com atraso.', n: 'The delivery.' },
            { s: '**O atraso** foi de três dias.', n: 'The delay.' },
            { s: 'Solicito **o reembolso** do valor pago.', n: 'The refund.' },
            { s: 'Apresentei **uma reclamação**.', n: 'The complaint.' },
            { s: '**O pagamento** foi efetuado ontem.', n: 'The payment.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Verb or noun? Sort the words.', explain: ['groups'], groups: ['Verb', 'Noun'], items: [
            { s: 'entregar', g: 0, why: 'A verb.' },
            { s: 'a entrega', g: 1, why: 'A noun.' },
            { s: 'atrasar', g: 0, why: 'A verb.' },
            { s: 'o atraso', g: 1, why: 'A noun.' },
            { s: 'reembolsar', g: 0, why: 'A verb.' },
            { s: 'o reembolso', g: 1, why: 'A noun.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the noun.', items: [
            { q: 'A ___ foi feita com atraso. (entregar)', a: ['entrega'], why: 'The noun of *entregar*.' },
            { q: 'O ___ foi de três dias. (atrasar)', a: ['atraso'], why: 'The noun of *atrasar*.' },
            { q: 'Solicito o ___ do valor pago. (reembolsar)', a: ['reembolso'], why: 'The noun of *reembolsar*.' },
            { q: 'Apresentei uma ___. (reclamar)', a: ['reclamação'], why: 'The noun of *reclamar*.' },
            { q: 'O ___ foi efetuado ontem. (pagar)', a: ['pagamento'], why: 'The noun of *pagar*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the verb with its noun.', pairs: [
            ['entregar', 'a entrega'],
            ['atrasar', 'o atraso'],
            ['reembolsar', 'o reembolso'],
            ['substituir', 'a substituição'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Which sentence is more formal?', o: ['Solicito o reembolso do valor.', 'Quero o meu dinheiro de volta.', 'Devolvam o dinheiro.'], why: 'The noun and *solicito* sound formal.' },
            { q: 'A ___ do produto foi feita tarde.', o: ['entrega', 'entregar', 'entregou'], why: 'After *a* we need a noun.' },
            { q: 'Apresentei uma ___.', o: ['reclamação', 'reclamar', 'reclamei'], why: 'After *uma* we need a noun.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence in a formal register.', items: [
            { q: 'Quero que substituam o produto.', cue: 'Peço', a: ['Peço a substituição do produto.'], why: 'The noun of *substituir*.' },
            { q: 'Quero que me reembolsem o valor.', cue: 'Solicito', a: ['Solicito o reembolso do valor.'], why: 'The noun of *reembolsar*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Solicito o [reembolsar] do valor.', a: ['reembolso'], why: 'We need the noun.' },
            { s: 'Apresentei uma [reclamar].', a: ['reclamação'], why: 'We need the noun.' },
            { s: 'O [pagar] foi efetuado ontem.', a: ['pagamento'], why: 'We need the noun.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Solicito o reembolso do valor pago.', why: '*Solicitar* + noun.' },
            { a: 'A entrega foi feita com atraso.', why: 'Subject, verb, complement.' },
            { a: 'Apresentei uma reclamação ontem.', why: '*Apresentar uma reclamação*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A complaint and a reply',
      about: 'Learn the structure and set phrases of a formal complaint and of the reply.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'A complaint follows a clear order in prose. It opens with **Exmos. Senhores,** (or **Exmo. Senhor,**), says what is wrong, then says what you want, and closes politely. Use **Venho por este meio reclamar …** to start, **No seguimento de …** to refer to an earlier contact, **Solicito …** to ask, and **Aguardo uma resposta** to close the request. The company answers with **Agradecemos a sua mensagem**, **Informamos que …** and **Lamentamos o incómodo causado**. Both sides end with **Com os melhores cumprimentos,**.' },
          { t: 'table', caption: 'Set phrases', explain: ['head', 'col1'], head: ['Phrase', 'Use'], rows: [
            ['Exmos. Senhores,', 'opening a formal letter'],
            ['Venho por este meio reclamar …', 'starting the complaint'],
            ['No seguimento de …', 'referring to an earlier contact'],
            ['Solicito …', 'asking formally'],
            ['Aguardo uma resposta.', 'closing the request'],
            ['Informamos que …', 'the company gives news'],
            ['Lamentamos o incómodo causado.', 'the company apologises'],
            ['Com os melhores cumprimentos,', 'closing'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Portugal a formal letter ends with **Com os melhores cumprimentos**; in Brazil you will often see **Atenciosamente**. **Solicita-se** (with *se*) is the impersonal form used in notices: *Solicita-se a sua presença.* Keep the tone calm: say what happened and what you ask, not how angry you are.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Venho por este meio** reclamar do atraso.', n: 'Starting the complaint.' },
            { s: '**No seguimento da** nossa chamada, envio os documentos.', n: 'Referring to an earlier contact.' },
            { s: '**Aguardo** uma resposta com a máxima brevidade.', n: 'Closing the request.' },
            { s: '**Informamos que** a encomenda foi enviada.', n: 'The company gives news.' },
            { s: '**Lamentamos o incómodo** causado.', n: 'The company apologises.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Customer or company? Sort the sentences.', explain: ['groups'], groups: ['Customer', 'Company'], items: [
            { s: 'Venho por este meio reclamar.', g: 0, why: 'The customer starts the complaint.' },
            { s: 'Solicito o reembolso do valor.', g: 0, why: 'The customer asks.' },
            { s: 'Aguardo uma resposta.', g: 0, why: 'The customer closes the request.' },
            { s: 'Lamentamos o incómodo causado.', g: 1, why: 'The company apologises.' },
            { s: 'Informamos que o reembolso foi efetuado.', g: 1, why: 'The company gives news.' },
            { s: 'Agradecemos a sua mensagem.', g: 1, why: 'The company thanks.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Venho por este ___ reclamar do atraso.', a: ['meio'], why: '*Por este meio*.' },
            { q: 'No ___ da nossa conversa, envio os documentos.', a: ['seguimento'], why: '*No seguimento de*.' },
            { q: 'Aguardo uma ___ com a máxima brevidade.', a: ['resposta'], why: '*Aguardo uma resposta*.' },
            { q: 'Com os melhores ___,', a: ['cumprimentos'], why: 'The usual closing.' },
            { q: 'Lamentamos o ___ causado.', a: ['incómodo'], why: '*O incómodo causado*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the phrase with what it does.', pairs: [
            ['Venho por este meio', 'I start a formal complaint'],
            ['No seguimento de', 'I refer to an earlier contact'],
            ['Aguardo uma resposta', 'I ask for a reply'],
            ['Lamentamos o incómodo', 'The company apologises'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'You close a formal letter:', o: ['Com os melhores cumprimentos,', 'Beijinhos,', 'Até já,'], why: 'The formal closing.' },
            { q: 'You refer to an earlier call:', o: ['No seguimento da nossa chamada,', 'Já que ligaste,', 'Olha,'], why: 'The formal way to refer to a contact.' },
            { q: 'The company apologises:', o: ['Lamentamos o incómodo causado.', 'Paciência.', 'Não é nosso problema.'], why: 'A polite apology.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence in a formal register.', items: [
            { q: 'Escrevo para reclamar.', cue: 'Venho', a: ['Venho por este meio reclamar.'], why: 'The formal opening.' },
            { q: 'Espero que respondam depressa.', cue: 'Aguardo', a: ['Aguardo uma resposta com a máxima brevidade.'], why: 'The formal closing of a request.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Venho por este [modo] reclamar.', a: ['meio'], why: '*Por este meio*.' },
            { s: 'Com os melhores [cumprimentar],', a: ['cumprimentos'], why: 'We need the noun.' },
            { s: 'Lamentamos [do] incómodo causado.', a: ['o'], why: '*Lamentar* takes the object directly.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Venho por este meio reclamar do atraso.', why: 'The formal opening.' },
            { a: 'No seguimento da nossa chamada, envio os documentos.', why: '*No seguimento de* + noun.' },
            { a: 'Aguardo uma resposta com a máxima brevidade.', why: 'The formal closing of a request.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Uma reclamação e a resposta',
      about: 'Read a formal complaint and the company\'s answer.',
      art: 'cactus',
      spreads: [
        [
          { t: 'reading', title: 'Uma encomenda atrasada', md: 'Exmos. Senhores,\n\nVenho por este meio reclamar do atraso na entrega da minha encomenda, feita a 3 de outubro. Tendo pago o valor total no momento da compra, esperava recebê-la no prazo indicado. Não tendo recebido qualquer informação, contactei o vosso serviço de apoio, mas o problema não foi resolvido. Solicito, por isso, a entrega imediata do produto ou o reembolso do valor pago. Aguardo uma resposta com a máxima brevidade.\n\nCom os melhores cumprimentos,\nRui Matos\n\nResposta: Exmo. Senhor Matos,\n\nNo seguimento da sua reclamação, informamos que a encomenda foi enviada hoje. Verificado o atraso, a empresa decidiu oferecer-lhe o transporte gratuito na próxima compra. Lamentamos o incómodo causado.\n\nCom os melhores cumprimentos,\nO Serviço de Apoio ao Cliente' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'O cliente fez a encomenda a 3 de outubro.', a: 't', why: '*Encomenda, feita a 3 de outubro.*' },
            { q: 'O cliente pagou só metade do valor.', a: 'f', why: '*Tendo pago o valor total.*' },
            { q: 'O serviço de apoio resolveu o problema logo.', a: 'f', why: '*O problema não foi resolvido.*' },
            { q: 'A empresa enviou a encomenda hoje.', a: 't', why: '*A encomenda foi enviada hoje.*' },
            { q: 'A empresa vai devolver o dinheiro ao cliente.', a: 'ng', why: 'The answer does not mention a refund.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'O que pede o cliente?', o: ['A entrega imediata ou o reembolso.', 'Um desconto.', 'Uma visita.'], why: '*A entrega imediata do produto ou o reembolso.*' },
            { q: 'O que oferece a empresa?', o: ['Transporte gratuito na próxima compra.', 'Um desconto de metade.', 'Um produto novo.'], why: '*Transporte gratuito na próxima compra.*' },
            { q: 'Como termina o pedido do cliente?', o: ['Aguardo uma resposta com a máxima brevidade.', 'Até breve.', 'Obrigado por tudo.'], why: 'The formal closing of a request.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the participle and gerund clauses.', items: [
            { s: '[Tendo pago] o valor total, esperava recebê-la no prazo indicado.', why: '*Tendo pago*: compound gerund, same subject.' },
            { s: '[Não tendo recebido] qualquer informação, contactei o apoio.', why: '*Não tendo recebido*: negative compound gerund.' },
            { s: '[Verificado o atraso], a empresa decidiu oferecer transporte gratuito.', why: 'Participle clause: *verificado* agrees with *atraso*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Venho por este ___ reclamar do atraso.', a: ['meio'], why: '*Por este meio*.' },
            { q: '___ o atraso, a empresa decidiu oferecer transporte gratuito. (verificar)', a: ['Verificado'], why: 'Participle agrees with *atraso*.' },
            { q: 'Lamentamos o ___ causado.', a: ['incómodo'], why: '*O incómodo causado*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Venho por este meio reclamar do atraso na entrega.', why: 'The formal opening.' },
            { a: 'Aguardo uma resposta com a máxima brevidade.', why: 'The formal closing of a request.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '___ a reunião, saímos.', o: ['Terminada', 'Terminado', 'Terminadas'], why: 'It agrees with *reunião*.' },
      { q: 'Tendo ___ o trabalho, saímos.', o: ['acabado', 'acabei', 'acabar'], why: '*Tendo* + participle.' },
      { q: 'Which sentence is more formal?', o: ['Solicito o reembolso do valor.', 'Quero o meu dinheiro de volta.', 'Devolvam o dinheiro.'], why: 'The noun and *solicito* sound formal.' },
      { q: 'You close a formal letter:', o: ['Com os melhores cumprimentos,', 'Beijinhos,', 'Até já,'], why: 'The formal closing.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Solicito o ___ do valor pago. (reembolsar)', a: ['reembolso'], why: 'The noun of *reembolsar*.' },
      { q: 'Não ___ recebido resposta, escrevi de novo. (ter)', a: ['tendo'], why: '*Não tendo* + participle.' },
      { q: 'No ___ da nossa chamada, envio os documentos.', a: ['seguimento'], why: '*No seguimento de*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the verb with its noun.', pairs: [
      ['entregar', 'a entrega'],
      ['atrasar', 'o atraso'],
      ['reclamar', 'a reclamação'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word in brackets.', items: [
      { q: 'Depois de acabar o trabalho, saímos.', cue: 'Tendo', a: ['Tendo acabado o trabalho, saímos.'], why: '*Tendo* + participle.' },
      { q: 'Quero que substituam o produto.', cue: 'Peço', a: ['Peço a substituição do produto.'], why: 'The noun of *substituir*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Venho por este [modo] reclamar.', a: ['meio'], why: '*Por este meio*.' },
      { s: '[Lido] as cartas, ela respondeu.', a: ['Lidas'], why: 'It agrees with *cartas*.' },
    ] },
  ],
};
