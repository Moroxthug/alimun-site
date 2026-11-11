// Portuguese C1, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Formal and administrative Portuguese',
  goal: 'Understand and write the Portuguese of letters, contracts and official notices. Learn prepositional phrases such as no âmbito de and ao abrigo de, the impersonal and passive style, the verbs of administration, and the structure of a formal request and its reply.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['formal Portuguese', 'administration', 'prepositional phrases', 'letters', 'requests'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'No âmbito de, ao abrigo de, no seguimento de',
      about: 'Use the prepositional phrases of formal Portuguese.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Official Portuguese uses **prepositional phrases** (locuções prepositivas) where everyday Portuguese uses a clause. They keep the text short and exact. **No âmbito de** means *within the scope of*: **No âmbito do projeto, …** **Ao abrigo de** means *under, pursuant to*: **Ao abrigo da lei, …** **No seguimento de** means *following*: **No seguimento da sua carta, …** **Em conformidade com** means *in accordance with*: **Em conformidade com o regulamento, …** **Por força de** means *by virtue of*: **Por força da lei, …** **A fim de** means *in order to*: **A fim de evitar atrasos, …** **Relativamente a** and **no que diz respeito a** mean *regarding*: **Relativamente ao seu pedido, …**' },
          { t: 'table', caption: 'Formal prepositional phrases', explain: ['head', 'col1'], head: ['Phrase', 'Meaning', 'Example'], rows: [
            ['no âmbito de', 'within the scope of', 'No âmbito do projeto, foram contratadas duas pessoas.'],
            ['ao abrigo de', 'under, pursuant to', 'Ao abrigo da lei, o pedido é válido.'],
            ['no seguimento de', 'following', 'No seguimento da sua carta, informamos que …'],
            ['em conformidade com', 'in accordance with', 'Em conformidade com o regulamento, o prazo é de dez dias.'],
            ['por força de', 'by virtue of', 'Por força da lei, o contrato é nulo.'],
            ['a fim de', 'in order to', 'A fim de evitar atrasos, envie os documentos.'],
            ['relativamente a', 'regarding', 'Relativamente ao seu pedido, informamos que …'],
          ] },
          { t: 'tip', art: 'owl', md: 'The preposition joins the article: **no âmbito do** projeto, **ao abrigo da** lei, **no seguimento da** carta, **em conformidade com o** regulamento. **A fim de** is followed by the **infinitive**: **a fim de evitar atrasos**. **Relativamente a** is lighter than **no que diz respeito a**. These phrases are used in the same way in Portugal, Brazil and Africa, although the **spelling** of some words differs (**receção** and **recepção**).' },
        ],
        [
          { t: 'examples', items: [
            { s: '**No âmbito do** projeto, foram contratadas duas pessoas.', n: 'Within the scope of.' },
            { s: '**Ao abrigo da** lei, o pedido é válido.', n: 'Pursuant to.' },
            { s: '**No seguimento da** sua carta, informamos que o pedido foi aceite.', n: 'Following.' },
            { s: '**A fim de** evitar atrasos, envie os documentos.', n: 'In order to.' },
            { s: '**Relativamente ao** seu pedido, informamos que …', n: 'Regarding.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the phrase with its meaning.', pairs: [
            ['no âmbito de', 'within the scope of'],
            ['ao abrigo de', 'pursuant to'],
            ['no seguimento de', 'following'],
            ['relativamente a', 'regarding'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'No ___ do projeto, foram contratadas duas pessoas.', a: ['âmbito'], why: '*No âmbito de*.' },
            { q: 'Ao ___ da lei, o pedido é válido.', a: ['abrigo'], why: '*Ao abrigo de*.' },
            { q: 'No ___ da sua carta, informamos que o pedido foi aceite.', a: ['seguimento'], why: '*No seguimento de*.' },
            { q: 'A fim ___ evitar atrasos, envie os documentos.', a: ['de'], why: '*A fim de* + infinitive.' },
            { q: 'Em ___ com o regulamento, o prazo é de dez dias.', a: ['conformidade'], why: '*Em conformidade com*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right phrase.', items: [
            { q: '___ da lei, o contrato é nulo.', o: ['Por força', 'Por parte', 'Por conta'], why: '*Por força de* = by virtue of.' },
            { q: '___ ao seu pedido, informamos que foi aceite.', o: ['Relativamente', 'Relativamento', 'Relativa'], why: '*Relativamente a* = regarding.' },
            { q: 'A fim de ___ atrasos, envie os documentos.', o: ['evitar', 'evitamos', 'evitando'], why: '*A fim de* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the phrase in brackets.', items: [
            { q: 'Depois da sua carta, escrevemos-lhe.', cue: 'No seguimento', a: ['No seguimento da sua carta, escrevemos-lhe.'], why: '*No seguimento de* + noun.' },
            { q: 'Sobre o seu pedido, informamos que foi aceite.', cue: 'Relativamente', a: ['Relativamente ao seu pedido, informamos que foi aceite.'], why: '*Relativamente a* + noun.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'No [âmbitos] do projeto, foram contratadas duas pessoas.', a: ['âmbito'], why: '*No âmbito de*, singular.' },
            { s: 'Ao [abrigar] da lei, o pedido é válido.', a: ['abrigo'], why: '*Ao abrigo de*.' },
            { s: 'A fim [para] evitar atrasos, envie os documentos.', a: ['de'], why: '*A fim de* + infinitive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ao abrigo da lei, o pedido é válido.', why: '*Ao abrigo de* + noun.' },
            { a: 'No seguimento da sua carta, informamos que o pedido foi aceite.', why: '*No seguimento de* + noun.' },
            { a: 'A fim de evitar atrasos, envie os documentos.', why: '*A fim de* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'A linguagem da administração',
      about: 'Understand the impersonal style and the verbs of official texts.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Official Portuguese prefers the **impersonal** and the **passive** to a named person. The **passive with se** is the usual form: **Aceitam-se candidaturas até dia 30.** **Informa-se que o prazo termina hoje.** The **passive with ser** names the doer less often: **O pedido foi deferido.** Common verbs are **requerer** (*to apply for*), **deferir** (*to grant*), **indeferir** (*to reject*), **comunicar** (*to inform*), **remeter** (*to send*), **solicitar** (*to request*) and **proceder a** (*to carry out*): **Proceda ao pagamento até dia 30.** People are **o requerente** (*the applicant*) and **os interessados** (*the people concerned*). Documents are **em anexo** (*attached*).' },
          { t: 'table', caption: 'The language of administration', explain: ['head', 'col1'], head: ['Expression', 'Meaning', 'Example'], rows: [
            ['requerer', 'to apply for', 'O requerente requer um certificado.'],
            ['deferir / indeferir', 'to grant / to reject', 'O pedido foi deferido.'],
            ['comunicar', 'to inform', 'Comunica-se que o prazo terminou.'],
            ['remeter', 'to send', 'Os documentos foram remetidos hoje.'],
            ['proceder a', 'to carry out', 'Proceda ao pagamento até dia 30.'],
            ['em anexo', 'attached', 'Envia-se em anexo a cópia do documento.'],
            ['aceitam-se / informa-se', 'passive with se', 'Aceitam-se candidaturas até dia 30.'],
          ] },
          { t: 'tip', art: 'owl', md: 'With the **passive with se**, the verb agrees with the thing: **Aceita-se** o pedido, **aceitam-se** os pedidos. **Deferir** means *to grant*; **diferir** means *to differ* or *to postpone* and is spelled with **i**: do not confuse them. **Indeferir** is *to reject* a request. **Proceder** is followed by **a**: **proceder ao pagamento**, **proceder à verificação**. These forms are used in **Portugal** and **Brazil** in official texts.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Aceitam-se** candidaturas até dia 30.', n: 'The passive with *se*.' },
            { s: 'O pedido **foi deferido**.', n: 'To grant.' },
            { s: '**Comunica-se** que o prazo terminou.', n: 'To inform.' },
            { s: '**Proceda ao** pagamento até dia 30.', n: '*Proceder a*.' },
            { s: 'Envia-se **em anexo** a cópia do documento.', n: 'Attached.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the verb with its meaning.', pairs: [
            ['requerer', 'to apply for'],
            ['deferir', 'to grant'],
            ['indeferir', 'to reject'],
            ['proceder a', 'to carry out'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Aceitam-___ candidaturas até dia 30.', a: ['se'], why: 'The passive with *se*.' },
            { q: 'O pedido foi ___. (to grant)', a: ['deferido'], why: '*Deferir*.' },
            { q: 'O pedido foi ___, por falta de documentos. (to reject)', a: ['indeferido'], why: '*Indeferir*.' },
            { q: 'Proceda ___ pagamento até dia 30.', a: ['ao'], why: '*Proceder a* + article.' },
            { q: 'Envia-se em ___ a cópia do documento.', a: ['anexo'], why: '*Em anexo* = attached.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best formal expression.', items: [
            { q: 'Which sentence is more formal?', o: ['Aceitam-se candidaturas até dia 30.', 'Nós aceitamos candidaturas até dia 30.', 'Pode mandar a candidatura até dia 30.'], why: 'The passive with *se*.' },
            { q: 'Which verb means *to reject*?', o: ['indeferir', 'deferir', 'remeter'], why: '*Indeferir* = to reject.' },
            { q: 'Which phrase means *attached*?', o: ['em anexo', 'em cima', 'em seguimento'], why: '*Em anexo*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it in a formal register.', items: [
            { q: 'Aceitamos candidaturas até dia 30.', cue: 'Aceitam-se', a: ['Aceitam-se candidaturas até dia 30.'], why: 'The passive with *se*.' },
            { q: 'Pague até dia 30, por favor.', cue: 'Proceda', a: ['Proceda ao pagamento até dia 30.'], why: '*Proceder a* + noun.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right form.', items: [
            { s: '[Aceita-se] candidaturas até dia 30.', a: ['Aceitam-se'], why: 'The verb agrees with the plural noun.' },
            { s: 'Proceda [do] pagamento até dia 30.', a: ['ao'], why: '*Proceder a* + article.' },
            { s: 'O pedido foi [diferido], porque os documentos estavam corretos. (to grant)', a: ['deferido'], why: '*Deferir*, with *e*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Aceitam-se candidaturas até dia 30.', why: 'The passive with *se*.' },
            { a: 'Proceda ao pagamento até dia 30.', why: '*Proceder a*.' },
            { a: 'O pedido foi deferido em maio.', why: 'The passive with *ser*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Um requerimento e a resposta',
      about: 'Write a formal request and a reply with the right formulas.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A formal letter starts with the **assunto** (subject line) and a salutation such as **Exmo. Senhor** or **Exma. Senhora** (*Dear Sir, Madam*). It states the **reason for writing**, the **request**, and ends with a polite formula. To start: **Venho por este meio requerer …** To refer to an earlier contact: **No seguimento do nosso contacto telefónico de …** To ask politely: **Agradeço que me seja enviado …** or **Solicito que …** To close: **Agradeço desde já a atenção dispensada. Com os melhores cumprimentos,** The office replies: **Em resposta ao seu pedido de …, informamos que …**, **Lamentamos o incómodo causado**, **Com os melhores cumprimentos**.' },
          { t: 'table', caption: 'Formulas of a formal exchange', explain: ['head', 'col1'], head: ['Formula', 'Use'], rows: [
            ['Venho por este meio requerer …', 'starting the request'],
            ['No seguimento do nosso contacto de …', 'referring to an earlier contact'],
            ['Agradeço que me seja enviado …', 'asking politely'],
            ['Agradeço desde já a atenção dispensada.', 'closing the request'],
            ['Em resposta ao seu pedido, informamos que …', 'the office gives news'],
            ['Lamentamos o incómodo causado.', 'the office apologises'],
            ['Com os melhores cumprimentos', 'closing'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **Agradeço que**, the verb is in the **conjuntivo**: **Agradeço que me seja enviado**, **Agradeço que me envie**. **Solicito que** + conjuntivo is also formal: **Solicito que me enviem**. In **Brazil**, letters end with **Atenciosamente** and **Cordialmente**; in Portugal, **Com os melhores cumprimentos** and **Com os meus cumprimentos** are the usual choices. Use **Exmo. Senhor** only when you do not know the name; with a name, write **Exmo. Senhor Dr. Costa**.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Venho por este meio requerer** uma certidão de residência.', n: 'Starting the request.' },
            { s: '**No seguimento do** nosso contacto telefónico, envio em anexo a cópia do documento.', n: 'Referring to an earlier contact.' },
            { s: '**Agradeço que** me seja enviada a certidão em formato eletrónico.', n: 'A polite request.' },
            { s: '**Agradeço desde já** a atenção dispensada.', n: 'Closing the request.' },
            { s: '**Lamentamos o incómodo** causado.', n: 'The office apologises.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Applicant or office? Sort the sentences.', groups: ['applicant', 'office'], explain: ['groups'], items: [
            { s: 'Venho por este meio requerer uma certidão.', g: 0, why: 'The applicant starts the request.' },
            { s: 'Agradeço que me seja enviada a certidão.', g: 0, why: 'The applicant asks.' },
            { s: 'Agradeço desde já a atenção dispensada.', g: 0, why: 'The applicant closes.' },
            { s: 'Em resposta ao seu pedido, informamos que a certidão foi emitida.', g: 1, why: 'The office gives news.' },
            { s: 'Lamentamos o incómodo causado.', g: 1, why: 'The office apologises.' },
            { s: 'Com os melhores cumprimentos, O Serviço de Atendimento.', g: 1, why: 'The office closes.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Venho por este ___ requerer uma certidão.', a: ['meio'], why: '*Venho por este meio*.' },
            { q: 'No ___ do nosso contacto telefónico, envio em anexo a cópia.', a: ['seguimento'], why: '*No seguimento de*.' },
            { q: 'Agradeço que me ___ enviada a certidão. (ser, conjuntivo)', a: ['seja'], why: '*Agradeço que* + conjuntivo.' },
            { q: 'Agradeço desde já a atenção ___. (dispensar, participle)', a: ['dispensada'], why: 'The fixed phrase.' },
            { q: 'Lamentamos o ___ causado.', a: ['incómodo'], why: 'The fixed phrase.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the formula with its use.', pairs: [
            ['Venho por este meio', 'I start the request'],
            ['No seguimento de', 'I refer to an earlier contact'],
            ['Agradeço desde já', 'I close the request'],
            ['Lamentamos o incómodo', 'The office apologises'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence in a formal register.', items: [
            { q: 'Quero uma certidão.', cue: 'Venho por este meio', a: ['Venho por este meio requerer uma certidão.'], why: '*Venho por este meio requerer*.' },
            { q: 'Peço-lhe que me envie o documento.', cue: 'Agradeço que', a: ['Agradeço que me envie o documento.', 'Agradeço que me seja enviado o documento.'], why: '*Agradeço que* + conjuntivo.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right form.', items: [
            { s: 'Agradeço que me [é] enviada a certidão.', a: ['seja'], why: '*Agradeço que* + conjuntivo.' },
            { s: 'Agradeço desde já a atenção dispensada. Com os [melhor] cumprimentos.', a: ['melhores'], why: 'The formula is *Com os melhores cumprimentos*.' },
            { s: 'Lamentamos o [incómodar] causado.', a: ['incómodo'], why: 'We need the noun.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Venho por este meio requerer uma certidão.', why: 'The formal opening.' },
            { a: 'Agradeço que me seja enviada a certidão.', why: '*Agradeço que* + conjuntivo.' },
            { a: 'Lamentamos o incómodo causado a todos.', why: 'The formal apology.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Uma carta oficial e a resposta',
      about: 'Read a formal request and the reply.',
      art: 'cactus',
      spreads: [
        [
          { t: 'reading', title: 'Pedido de certidão de residência', md: 'Assunto: pedido de certidão de residência\n\nExmos. Senhores,\n\nvenho por este meio requerer a emissão de uma certidão de residência, a fim de instruir um pedido de inscrição escolar. No seguimento do nosso contacto telefónico de 5 de outubro, envio em anexo a cópia do cartão de cidadão. Agradeço que me seja enviada a certidão em formato eletrónico.\n\nAgradeço desde já a atenção dispensada. Com os melhores cumprimentos,\n\nLuís Neves\n\nResposta: Exmo. Senhor Luís Neves, em resposta ao seu pedido de 12 de outubro, informamos que a certidão foi emitida na data de hoje. Devido a uma falha técnica, o envio por via eletrónica não é possível neste momento; o documento será, por isso, remetido por correio, após confirmação da sua morada. Lamentamos o incómodo causado. Com os melhores cumprimentos, O Serviço de Atendimento.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'O requerente pede uma certidão de residência.', a: 't', why: '*Requerer a emissão de uma certidão de residência.*' },
            { q: 'O requerente já tinha telefonado em 5 de outubro.', a: 't', why: '*Contacto telefónico de 5 de outubro.*' },
            { q: 'A certidão já foi emitida.', a: 't', why: '*A certidão foi emitida na data de hoje.*' },
            { q: 'O envio eletrónico é possível.', a: 'f', why: '*Não é possível neste momento.*' },
            { q: 'O documento será enviado por correio, após confirmação da morada.', a: 't', why: '*Remetido por correio, após confirmação da sua morada.*' },
            { q: 'O requerente tem três filhos.', a: 'ng', why: 'The letter does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Para que é preciso a certidão?', o: ['Para uma inscrição escolar.', 'Para abrir uma conta.', 'Para mudar de emprego.'], why: '*A fim de instruir um pedido de inscrição escolar.*' },
            { q: 'O que envia o requerente em anexo?', o: ['A cópia do cartão de cidadão.', 'Uma fotografia.', 'Uma fatura.'], why: '*Envio em anexo a cópia do cartão de cidadão.*' },
            { q: 'Como será enviado o documento?', o: ['Por correio.', 'Por via eletrónica.', 'Em mão.'], why: '*Remetido por correio.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the formal prepositional phrases.', items: [
            { s: 'Venho requerer uma certidão, [a fim de] instruir um pedido. [No seguimento do] nosso contacto, envio a cópia.', why: '*A fim de* and *no seguimento de*.' },
            { s: '[Em resposta ao] seu pedido, informamos que a certidão foi emitida.', why: '*Em resposta a*.' },
            { s: '[Devido a] uma falha técnica, o envio não é possível; o documento será remetido [após] confirmação da morada.', why: '*Devido a* and *após*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'No ___ do nosso contacto telefónico, envio em anexo a cópia.', a: ['seguimento'], why: '*No seguimento de*.' },
            { q: 'Agradeço desde já a atenção ___.', a: ['dispensada'], why: 'The fixed phrase.' },
            { q: 'Lamentamos o ___ causado.', a: ['incómodo'], why: 'The fixed phrase.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'O documento será remetido por correio, após confirmação da morada.', why: 'The passive with *ser*.' },
            { a: 'Informamos que a certidão foi emitida hoje.', why: '*Informamos que* + clause.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '___ da lei, o pedido é válido.', o: ['Ao abrigo', 'Ao lado', 'Ao fundo'], why: '*Ao abrigo de*.' },
      { q: 'A fim ___ evitar atrasos, envie os documentos.', o: ['de', 'para', 'em'], why: '*A fim de* + infinitive.' },
      { q: 'Agradeço que me ___ enviada a certidão.', o: ['seja', 'é', 'será'], why: '*Agradeço que* + conjuntivo.' },
      { q: 'Aceitam-___ candidaturas até dia 30.', o: ['se', 'me', 'te'], why: 'The passive with *se*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Venho por este ___ requerer uma certidão.', a: ['meio'], why: 'The fixed phrase.' },
      { q: 'Proceda ___ pagamento até dia 30.', a: ['ao'], why: '*Proceder a* + article.' },
      { q: 'Envia-se em ___ a cópia do documento.', a: ['anexo'], why: '*Em anexo*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the verb with its meaning.', pairs: [
      ['deferir', 'to grant'],
      ['indeferir', 'to reject'],
      ['requerer', 'to apply for'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the phrase in brackets.', items: [
      { q: 'Depois da sua carta, escrevemos-lhe.', cue: 'No seguimento', a: ['No seguimento da sua carta, escrevemos-lhe.'], why: '*No seguimento de* + noun.' },
      { q: 'Aceitamos candidaturas até dia 30.', cue: 'Aceitam-se', a: ['Aceitam-se candidaturas até dia 30.'], why: 'The passive with *se*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Agradeço que me [é] enviada a certidão.', a: ['seja'], why: '*Agradeço que* + conjuntivo.' },
      { s: '[Aceita-se] candidaturas até dia 30.', a: ['Aceitam-se'], why: 'The verb agrees with the plural noun.' },
    ] },
  ],
};
