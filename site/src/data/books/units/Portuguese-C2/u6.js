// Portuguese C2, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Legal Portuguese and plain language',
  goal: 'Read legal and formal Portuguese and rewrite it in plain language. Learn the key legal words, why legal Portuguese is dense, and how to state obligations, rights and conditions.',
  art: 'owl',
  tags: { skills: ['reading', 'writing', 'vocabulary'], topics: ['legal language', 'contracts', 'plain language', 'obligation', 'conditions'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'O senhorio, o arrendatário, supramencionado',
      about: 'Learn the words that appear again and again in contracts.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A contract names its parties with fixed terms. In a lease (*contrato de arrendamento*), **o senhorio** is the owner who lets the property and **o arrendatário** is the person who rents it. **O presente contrato** means *this contract*. To point back to something already named, legal writers use **supramencionado**, **supracitado** or **acima referido** (*the above-mentioned*): *o imóvel supramencionado*. To say *from the date*, they write **a partir de** or **a contar de**: *a contar de 1 de janeiro*. To make an exception, they write **sem prejuízo de**: *sem prejuízo do disposto no artigo 5.º*.' },
          { t: 'table', caption: 'Legal words', explain: ['head', 'col0'], head: ['Legal phrase', 'Plain meaning', 'Example'], rows: [
            ['o senhorio', 'the owner who lets', 'O senhorio entrega as chaves.'],
            ['o arrendatário', 'the person who rents', 'O arrendatário paga a renda.'],
            ['o presente contrato', 'this contract', 'O presente contrato dura quatro anos.'],
            ['supramencionado, supracitado', 'the one named above', 'O imóvel supramencionado fica na Rua Nova.'],
            ['a contar de', 'starting from', 'A contar de 1 de maio, a renda sobe.'],
            ['sem prejuízo de', 'without affecting, except for', 'Sem prejuízo do disposto no artigo 5.º, a renda é fixa.'],
          ] },
        ],
        [
          { t: 'text', md: 'Legal Portuguese prefers **precision to elegance**: the same noun is repeated rather than replaced by a pronoun, so that nobody can doubt what is meant. That is why you read *o senhorio… o senhorio…* instead of *ele*. It also prefers **formal verbs**: *proceder ao pagamento* (to pay), *denunciar* (to give notice of ending), *cumprir* (to carry out an obligation), *celebrar* (to sign an agreement). You do not need to write like this every day, but you must be able to **read** it.' },
          { t: 'tip', art: 'owl', md: 'When you read a contract, find the **parties** first (who does what), then the **verbs** (what they must do), then the **conditions** (when and under what terms). The rest is detail.' },
          { t: 'ex', kind: 'match', h: 'Match the legal word to its plain meaning.', pairs: [
            ['o arrendatário', 'the person who rents'],
            ['a contar de', 'starting from'],
            ['supramencionado', 'named above'],
            ['denunciar o contrato', 'to give notice of ending it'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
            { q: 'O ___ entrega as chaves ao arrendatário.', o: ['senhorio', 'notário', 'inquilino'], why: 'The *senhorio* is the owner who lets the property.' },
            { q: 'A renda será paga ___ 1 de março.', o: ['a contar de', 'a bem de', 'a favor de'], why: '*A contar de* = starting from.' },
            { q: 'O imóvel ___ fica na Rua Nova, como indicado acima.', o: ['supramencionado', 'seguinte', 'futuro'], why: '*Supramencionado* points back to what has been named.' },
            { q: 'As partes podem ___ o contrato com três meses de aviso prévio.', o: ['denunciar', 'receber', 'recordar'], why: '*Denunciar* = to give notice of ending.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Who is it: the senhorio or the arrendatário?', groups: ['senhorio', 'arrendatário'], explain: ['groups'], items: [
            { s: 'É dono do apartamento.', g: 0, why: 'The owner.' },
            { s: 'Paga a renda todos os meses.', g: 1, why: 'The tenant.' },
            { s: 'Entrega as chaves.', g: 0, why: 'The owner hands them over.' },
            { s: 'Vive na casa.', g: 1, why: 'The tenant lives there.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Porque é que a linguagem jurídica é densa',
      about: 'See why legal sentences are long and how to simplify them.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Three habits make legal Portuguese dense. First, **long sentences**: one sentence holds a rule, an exception and a condition. Second, **passive and impersonal forms**: *a renda é paga pelo arrendatário* instead of *o arrendatário paga a renda*. Third, **nominalisation**: a verb becomes a noun, so *se o arrendatário não pagar* turns into *em caso de falta de pagamento por parte do arrendatário*. The result is exact but heavy. **Plain language** (*linguagem clara*) keeps the same meaning with shorter sentences, active verbs and everyday words.' },
          { t: 'table', caption: 'From dense to plain', explain: ['head', 'col0'], head: ['Dense', 'Plain', 'What changed'], rows: [
            ['A renda é paga pelo arrendatário.', 'O arrendatário paga a renda.', 'passive to active'],
            ['Em caso de falta de pagamento…', 'Se o arrendatário não pagar…', 'noun to verb'],
            ['O mesmo fica obrigado a proceder à devolução.', 'Tem de devolver.', 'long phrase to one verb'],
            ['Nos termos do presente artigo…', 'Segundo este artigo…', 'formal phrase to everyday words'],
          ] },
        ],
        [
          { t: 'text', md: 'To simplify a clause, ask four questions. **Who** does it? **What** must they do? **When**? **Under what condition**? Then write one sentence for each answer, with the subject first. Keep the legal meaning: do not remove a condition or an exception. If the meaning might change, keep the original and add a plain explanation beside it, as many public offices now do.' },
          { t: 'tip', art: 'owl', md: 'Simplifying is not dumbing down. A good plain-language rewrite is **shorter, clearer and just as exact**. Test it by asking: would the other person know exactly what to do?' },
          { t: 'ex', kind: 'transform', h: 'Rewrite in plain language, using the words given.', items: [
            { q: 'A renda é paga pelo arrendatário até ao dia cinco.', cue: 'O arrendatário paga', a: ['O arrendatário paga a renda até ao dia cinco.'], why: 'Active verb, subject first.' },
            { q: 'Em caso de falta de pagamento, o contrato considera-se rescindido.', cue: 'Se o arrendatário não pagar', a: ['Se o arrendatário não pagar, o contrato termina.', 'Se o arrendatário não pagar, o contrato acaba.'], why: 'Noun to verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence is plainer?', items: [
            { q: 'Choose the plain version.', o: ['O arrendatário deve pagar a renda até ao dia cinco do mês.', 'A renda deve ser objeto de pagamento por parte do mesmo até ao dia cinco.', 'Determina-se o pagamento da renda pelo respetivo obrigado.'], why: 'Active, short, and everyday words.' },
            { q: 'Choose the plain version.', o: ['Se quiser sair, o arrendatário deve avisar com três meses de antecedência.', 'Caso o arrendatário pretenda denunciar, o mesmo deve respeitar o aviso prévio.', 'Em hipótese de denúncia, subsiste a obrigação de aviso prévio.'], why: 'Short clauses with a clear subject.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Dense or plain?', groups: ['dense', 'plain'], explain: ['groups'], items: [
            { s: 'Nos termos do presente artigo', g: 0, why: 'Formal phrase.' },
            { s: 'Segundo este artigo', g: 1, why: 'Everyday words.' },
            { s: 'Em caso de falta de pagamento', g: 0, why: 'Nominalised.' },
            { s: 'Se não pagar', g: 1, why: 'A verb in a short clause.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Fica obrigado a, tem a faculdade de, desde que',
      about: 'Express obligations, rights, prohibitions and conditions.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'Contracts say **who must**, **who may**, **who may not** and **under what terms**. **Obligation**: *fica obrigado a* + infinitive, *tem o dever de*, *deve*. **Right or permission**: *tem a faculdade de*, *tem direito a*, *pode*. **Prohibition**: *é proibido* + infinitive, *não é permitido*, *é vedado*. **Condition**: *desde que* and *com a condição de que* (both with the **subjunctive**), *salvo se* (with the future subjunctive or the indicative: *salvo se o senhorio autorizar por escrito*), *caso* (if, with the subjunctive).' },
          { t: 'table', caption: 'Obligation, right, prohibition, condition', explain: ['head', 'col0'], head: ['Function', 'Phrases', 'Example'], rows: [
            ['obligation', 'fica obrigado a, tem o dever de', 'O arrendatário fica obrigado a pagar a renda.'],
            ['right or permission', 'tem a faculdade de, tem direito a', 'O senhorio tem a faculdade de inspecionar o imóvel.'],
            ['prohibition', 'é proibido, não é permitido', 'É proibido subarrendar o imóvel.'],
            ['condition', 'desde que, caso', 'Pode denunciar, desde que dê três meses de aviso prévio.'],
            ['exception', 'salvo se, sem prejuízo de', 'A renda é fixa, salvo se as partes acordarem outra coisa.'],
          ] },
        ],
        [
          { t: 'text', md: 'Be careful with the **mood**. *Desde que*, *com a condição de que* and *caso* take the **subjunctive**: *desde que o arrendatário pague*, *caso o arrendatário não pague*. *Salvo se* usually takes the **future subjunctive** for an event that has not happened yet: *salvo se o senhorio autorizar*. And remember that *fica obrigado a* must be followed by the **infinitive**: *fica obrigado a pagar*, not *fica obrigado de pagar*. In plain language, these structures become simpler: *tem de pagar*, *pode sair, mas tem de avisar*, *não pode subarrendar*.' },
          { t: 'tip', art: 'suitcase', md: 'Look at the **verb after the phrase** to know its function: infinitive after *fica obrigado a* (obligation), infinitive after *tem a faculdade de* (right), infinitive after *é proibido* (prohibition), subjunctive after *desde que* (condition).' },
          { t: 'ex', kind: 'choice', h: 'Choose the best option.', items: [
            { q: 'O arrendatário ___ pagar a renda até ao dia cinco do mês.', o: ['fica obrigado a', 'tem a faculdade de', 'é proibido'], why: 'An obligation.' },
            { q: 'O senhorio ___ inspecionar o imóvel, com aviso prévio.', o: ['tem a faculdade de', 'fica obrigado a', 'é proibido'], why: 'A right.' },
            { q: 'É ___ subarrendar o imóvel sem o consentimento do senhorio.', o: ['proibido', 'permitido', 'obrigado'], why: 'A prohibition.' },
            { q: 'Pode denunciar o contrato, desde que ___ três meses de aviso prévio.', o: ['dê', 'dá', 'dará'], why: '*Desde que* + subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'O arrendatário fica ___ a pagar a renda todos os meses.', a: ['obrigado'], why: '*Fica obrigado a* + infinitive.' },
            { q: 'O senhorio tem a ___ de inspecionar o imóvel.', a: ['faculdade'], why: '*Tem a faculdade de*.' },
            { q: 'Pode denunciar o contrato ___ que dê três meses de aviso prévio.', a: ['desde'], why: '*Desde que* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite in plain language, using the words given.', items: [
            { q: 'O arrendatário fica obrigado a proceder ao pagamento da renda.', cue: 'O arrendatário tem de', a: ['O arrendatário tem de pagar a renda.'], why: 'One verb replaces the long phrase.' },
            { q: 'É vedado subarrendar o imóvel.', cue: 'O arrendatário não pode', a: ['O arrendatário não pode subarrendar o imóvel.'], why: 'A direct prohibition.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Uma cláusula e a sua versão clara',
      about: 'Read a contract clause and its plain-language version.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Uma cláusula e a sua versão clara', md: 'Versão original\n\nCláusula 4.ª – O arrendatário fica obrigado a pagar ao senhorio a renda mensal acordada, até ao dia cinco de cada mês, a contar da data de entrega do imóvel supramencionado. Em caso de falta de pagamento, o senhorio tem a faculdade de resolver o presente contrato, sem prejuízo do direito a indemnização pelos danos sofridos, desde que tenha previamente comunicado por escrito a sua intenção. É proibido ao arrendatário subarrendar o imóvel, salvo se o senhorio o autorizar por escrito.\n\nVersão em linguagem clara\n\nCláusula 4.ª – O arrendatário paga a renda todos os meses, até ao dia cinco, a partir do dia em que recebe as chaves. Se não pagar, o senhorio pode pôr fim ao contrato e pedir também uma indemnização, mas antes tem de o avisar por escrito. O arrendatário não pode arrendar a casa a outra pessoa, a não ser que o senhorio o permita por escrito.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'O arrendatário deve pagar a renda até ao dia cinco de cada mês.', a: 't', why: '«Até ao dia cinco de cada mês.»' },
            { q: 'O senhorio pode pôr fim ao contrato sem avisar.', a: 'f', why: 'He must first notify in writing.' },
            { q: 'O arrendatário pode subarrendar o imóvel sem autorização.', a: 'f', why: 'It is forbidden unless the senhorio agrees in writing.' },
            { q: 'A renda mensal é de 700 euros.', a: 'ng', why: 'The amount is not given.' },
            { q: 'A versão clara é mais curta do que a versão original.', a: 't', why: 'It uses shorter sentences and fewer words.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does «a contar da data de entrega» mean in plain language?', o: ['starting from the day of handover', 'until the day of handover', 'before the handover'], why: 'The plain version says «a partir do dia em que recebe as chaves».' },
            { q: 'What does «sem prejuízo do direito a indemnização» add?', o: ['The senhorio may still ask for compensation.', 'The senhorio gives up compensation.', 'The arrendatário receives compensation.'], why: '*Sem prejuízo de* keeps the right alive.' },
            { q: 'Which verb form shows a prohibition in the original?', o: ['É proibido', 'Tem a faculdade', 'Fica obrigado'], why: '*É proibido* + infinitive.' },
            { q: 'What mood follows «desde que» in the clause?', o: ['Subjunctive', 'Indicative', 'Imperative'], why: '«Desde que tenha previamente comunicado».' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the legal phrases.', items: [
            { s: 'O arrendatário [fica obrigado a] pagar a renda mensal.', why: 'An obligation.' },
            { s: 'O senhorio [tem a faculdade de] resolver o presente contrato.', why: 'A right.' },
            { s: '[Sem prejuízo do] direito a indemnização pelos danos sofridos.', why: 'An exception.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'É ___ ao arrendatário subarrendar o imóvel.', a: ['proibido'], why: '*É proibido*.' },
            { q: 'O senhorio pode resolver o contrato, ___ que tenha previamente comunicado por escrito.', a: ['desde'], why: '*Desde que* + subjunctive.' },
            { q: 'O arrendatário paga a renda até ao dia ___ de cada mês.', a: ['cinco'], why: 'The fifth day.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'O arrendatário não pode arrendar a casa a outra pessoa.', why: 'A plain prohibition.' },
            { a: 'Se não pagar, o senhorio pode pôr fim ao contrato.', why: 'A plain condition and consequence.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'O ___ é a pessoa que arrenda a casa para viver nela.', o: ['arrendatário', 'senhorio', 'notário'], why: 'The tenant.' },
      { q: 'O senhorio ___ inspecionar o imóvel com aviso prévio.', o: ['tem a faculdade de', 'fica obrigado a', 'é proibido'], why: 'A right.' },
      { q: 'Pode denunciar, desde que ___ um aviso prévio.', o: ['dê', 'dá', 'dará'], why: '*Desde que* + subjunctive.' },
      { q: 'Which is plainer?', o: ['O arrendatário paga a renda.', 'A renda é paga pelo mesmo.', 'Determina-se o pagamento da renda.'], why: 'Active and short.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Dense or plain?', groups: ['dense', 'plain'], explain: ['groups'], items: [
      { s: 'Nos termos do presente artigo', g: 0, why: 'Formal.' },
      { s: 'Segundo este artigo', g: 1, why: 'Plain.' },
      { s: 'Em caso de falta de pagamento', g: 0, why: 'Nominalised.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'O arrendatário fica ___ a pagar a renda.', a: ['obrigado'], why: '*Fica obrigado a*.' },
      { q: '___ de 1 de maio, a renda sobe. (starting from)', a: ['A contar'], why: '*A contar de*.' },
      { q: 'A renda é fixa, ___ se as partes acordarem outra coisa.', a: ['salvo'], why: '*Salvo se*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite in plain language, using the words given.', items: [
      { q: 'A renda é paga pelo arrendatário.', cue: 'O arrendatário paga', a: ['O arrendatário paga a renda.'], why: 'Active verb.' },
      { q: 'É vedado subarrendar.', cue: 'Não se pode', a: ['Não se pode subarrendar.'], why: 'A direct prohibition.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the problem.', items: [
      { s: 'O arrendatário fica obrigado [de] pagar a renda.', a: ['a'], why: '*Fica obrigado a* + infinitive.' },
      { s: 'Pode denunciar, desde que [dá] aviso prévio de três meses.', a: ['dê'], why: '*Desde que* needs the subjunctive.' },
    ] },
  ],
};
