// Portuguese B2, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'What might have been',
  goal: 'Talk about the unreal past, regrets and opinions about what happened. Learn the pretérito perfeito do conjuntivo, the mais-que-perfeito do conjuntivo, the condicional composto and se + mais-que-perfeito do conjuntivo + condicional composto.',
  art: 'ghost',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['perfeito do conjuntivo', 'mais-que-perfeito do conjuntivo', 'condicional composto', 'hypotheses', 'regrets'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Não acho que tenha feito',
      about: 'Use the pretérito perfeito do conjuntivo when the action came before the main verb.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'The **pretérito perfeito do conjuntivo** is made with the **present subjunctive of ter** and the **past participle**: *tenha feito, tenhas ido, tenham chegado*. Use it where you would use the presente do conjuntivo, when the action happened **before** the main verb: *Não acho que ele tenha feito isso* (I do not think he did that). It follows doubt, denial, feeling and possibility: *Lamento que não tenhas vindo. É possível que tenham perdido o comboio. Duvido que tenha acabado.*' },
          { t: 'table', caption: 'The pretérito perfeito do conjuntivo', quiz: true, head: ['', 'fazer', 'ir', 'chegar'], rows: [
            ['que eu', 'tenha feito', 'tenha ido', 'tenha chegado'],
            ['que tu', 'tenhas feito', 'tenhas ido', 'tenhas chegado'],
            ['que ele / ela / você', 'tenha feito', 'tenha ido', 'tenha chegado'],
            ['que nós', 'tenhamos feito', 'tenhamos ido', 'tenhamos chegado'],
            ['que eles / elas / vocês', 'tenham feito', 'tenham ido', 'tenham chegado'],
          ] },
          { t: 'tip', art: 'owl', md: 'Compare **the same time** and **earlier**. *Não acho que ele faça isso* (he does not do it, now or later). *Não acho que ele tenha feito isso* (he did not do it). After **acho que** (an opinion, no denial), Portuguese uses the **indicative**: *Acho que ele fez isso.* The compound always uses **ter**, never *ser*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Não acho que ele **tenha feito** isso.', n: 'Denial about the past.' },
            { s: 'Lamento que não **tenhas vindo**.', n: 'A feeling about the past.' },
            { s: 'É possível que eles **tenham perdido** o comboio.', n: 'A possibility about the past.' },
            { s: 'Duvido que ela **tenha acabado** o trabalho.', n: 'A doubt about the past.' },
            { s: 'Acho que ele **fez** isso.', n: 'An opinion without denial: the indicative.' },
          ] },
          { t: 'dialogue', title: 'Na festa', lines: [
            { who: 'Ana', s: 'Porque não veio o Paulo à festa?' },
            { who: 'Pedro', s: 'Acho que se esqueceu do convite.' },
            { who: 'Ana', s: 'Lamento que não tenha vindo.' },
            { who: 'Pedro', s: 'Talvez tenha acontecido alguma coisa. Duvido que tenha esquecido de propósito.' },
            { who: 'Ana', s: 'É possível que o tenham chamado do escritório.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the pretérito perfeito do conjuntivo of fazer.', verb: 'fazer', tense: 'perfeito do conjuntivo (que …)', rows: [
            ['que eu', 'tenha feito'],
            ['que tu', 'tenhas feito'],
            ['que ele / ela', 'tenha feito'],
            ['que nós', 'tenhamos feito'],
            ['que eles / elas', 'tenham feito'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the pretérito perfeito do conjuntivo.', items: [
            { q: 'Não acho que ele ___ feito isso. (ter)', a: ['tenha'], why: '*Tenha feito*.' },
            { q: 'Lamento que tu não ___ vindo. (ter)', a: ['tenhas'], why: '*Tenhas vindo*.' },
            { q: 'É possível que eles ___ perdido o comboio. (ter)', a: ['tenham'], why: '*Tenham perdido*.' },
            { q: 'Duvido que nós ___ chegado a horas. (ter)', a: ['tenhamos'], why: '*Tenhamos chegado*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Não acho que ele ___ feito isso.', o: ['tenha', 'tem', 'teve'], why: 'Denial about the past: the perfeito do conjuntivo.' },
            { q: 'Acho que ele ___ isso.', o: ['fez', 'tenha feito', 'fizesse'], why: '*Acho que* + indicative.' },
            { q: 'Lamento que tu não ___ vindo.', o: ['tenhas', 'tens', 'tinhas'], why: '*Lamento que* + *tenhas vindo*.' },
            { q: 'Duvido que ela ___ acabado.', o: ['tenha', 'tem', 'tinha'], why: '*Duvido que* + *tenha acabado*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Add the phrase and change the verb.', items: [
            { q: 'Ele fez isso.', cue: 'Não acho que', a: ['Não acho que ele tenha feito isso.'], why: '*Fez* → *tenha feito*.' },
            { q: 'Eles perderam o comboio.', cue: 'É possível que', a: ['É possível que eles tenham perdido o comboio.'], why: '*Perderam* → *tenham perdido*.' },
            { q: 'Tu não vieste.', cue: 'Lamento que', a: ['Lamento que não tenhas vindo.', 'Lamento que tu não tenhas vindo.'], why: '*Vieste* → *tenhas vindo*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Não acho que ele [fez] isso.', a: ['tenha feito'], why: 'Denial about the past: *tenha feito*.' },
            { s: 'Lamento que tu não [vieste].', a: ['tenhas vindo'], why: '*Lamento que* + *tenhas vindo*.' },
            { s: 'Duvido que ela [acabou] o trabalho.', a: ['tenha acabado'], why: 'A doubt about the past.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Não acho que ele tenha feito isso.', why: 'Denial about the past.' },
            { a: 'Lamento que não tenhas vindo.', why: '*Lamento que* + *tenhas vindo*.' },
            { a: 'É possível que eles tenham perdido o comboio.', why: 'A possibility about the past.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Tivesse sabido, teria feito',
      about: 'Form the mais-que-perfeito do conjuntivo and the condicional composto.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The **mais-que-perfeito do conjuntivo** is made with the **imperfeito do conjuntivo of ter** and the **past participle**: *tivesse feito, tivesses ido*. The **condicional composto** is made with the **condicional of ter** and the participle: *teria feito, terias ido*. The condicional composto says what you **would have done**: *Teria ido com prazer.* It also gives a polite regret: *Deveria ter avisado* (I should have told you). And it gives a **future seen from the past**: *Disse que teria acabado até sexta.*' },
          { t: 'table', caption: 'Mais-que-perfeito do conjuntivo and condicional composto', quiz: true, head: ['', 'mais-que-perfeito do conjuntivo', 'condicional composto'], rows: [
            ['eu', 'tivesse feito', 'teria feito'],
            ['tu', 'tivesses feito', 'terias feito'],
            ['ele / ela / você', 'tivesse feito', 'teria feito'],
            ['nós', 'tivéssemos feito', 'teríamos feito'],
            ['eles / elas / vocês', 'tivessem feito', 'teriam feito'],
          ] },
          { t: 'tip', art: 'owl', md: 'Both forms always use **ter**, and the participle does not change. After a **past** main verb of doubt or opinion, the mais-que-perfeito do conjuntivo shows an earlier action: *Não achava que ele tivesse feito isso.* In speech, **devia ter** + participle is the usual way to give a regret: *Devia ter avisado.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Não achava que ele **tivesse feito** isso.', n: 'A past denial about an earlier action.' },
            { s: '**Teria ido** com prazer, mas tinha trabalho.', n: 'What I would have done.' },
            { s: '**Deveria ter avisado**.', n: 'A polite regret.' },
            { s: 'Disse que **teria acabado** até sexta.', n: 'A future seen from the past.' },
            { s: 'Se **tivesse sabido**, **teria vindo**.', n: 'Both forms together.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the condicional composto of fazer.', verb: 'fazer', tense: 'condicional composto', rows: [
            ['eu', 'teria feito'],
            ['tu', 'terias feito'],
            ['ele / ela / você', 'teria feito'],
            ['nós', 'teríamos feito'],
            ['eles / elas / vocês', 'teriam feito'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Não achava que ele ___ feito isso. (ter)', a: ['tivesse'], why: '*Tivesse feito*.' },
            { q: 'Eu ___ ido com prazer. (ter)', a: ['teria'], why: '*Teria ido*.' },
            { q: 'Tu ___ ido, não é? (ter)', a: ['terias'], why: '*Terias ido*.' },
            { q: 'Nós ___ chegado a horas. (ter)', a: ['teríamos'], why: '*Teríamos chegado*.' },
            { q: 'Ele disse que ___ acabado até sexta. (ter)', a: ['teria'], why: 'A future seen from the past: *teria acabado*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Esperava que ela já ___ chegado.', o: ['tivesse', 'tenha', 'teria'], why: 'A past main verb and an earlier action: *tivesse chegado*.' },
            { q: 'Eu ___ ido com prazer, mas não pude.', o: ['teria', 'tivesse', 'tenha'], why: 'What I would have done: *teria ido*.' },
            { q: '___ ter avisado, desculpa. (a regret)', o: ['Devia', 'Deverei', 'Dever'], why: '*Devia ter avisado*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the infinitive with its condicional composto (eu).', pairs: [
            ['ir', 'teria ido'],
            ['fazer', 'teria feito'],
            ['vir', 'teria vindo'],
            ['dizer', 'teria dito'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Esperava que ela já [tenha] chegado.', a: ['tivesse'], why: 'A past main verb: *tivesse chegado*.' },
            { s: 'Eu [seria] ido com prazer.', a: ['teria'], why: 'The condicional composto uses *ter*: *teria ido*.' },
            { s: 'Nós [tínhamos] ido com prazer, mas não pudemos. (we would have)', a: ['teríamos'], why: 'What we would have done: *teríamos ido*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Se tivesse sabido',
      about: 'Talk about the unreal past with se + mais-que-perfeito do conjuntivo + condicional composto.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'To talk about something that **did not happen** in the past, use **se** + **mais-que-perfeito do conjuntivo** and the **condicional composto**: *Se tivesse sabido, teria vindo. Se tivesse estudado, teria passado no exame.* In a **mixed** sentence, the cause is in the past and the result is now: *Se tivesse estudado, hoje teria um emprego melhor.* To express regret, use **quem me dera** or **se ao menos** and **pena que**: *Quem me dera ter ido! Se ao menos tivesse ido! Pena que não tenhas vindo.*' },
          { t: 'table', caption: 'Four kinds of if', explain: ['head', 'col1'], head: ['Type', 'Pattern', 'Example'], rows: [
            ['possible', 'se + futuro do conjuntivo, future', 'Se estudares, passarás.'],
            ['unreal now', 'se + imperfeito do conjuntivo, condicional', 'Se estudasses mais, passarias.'],
            ['unreal past', 'se + mais-que-perfeito do conjuntivo, condicional composto', 'Se tivesse estudado, teria passado.'],
            ['mixed', 'se + mais-que-perfeito do conjuntivo, condicional', 'Se tivesse estudado, hoje teria um emprego melhor.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In everyday speech, many people use the **imperfeito** or the **mais-que-perfeito composto** in both parts: *Se tinha sabido, vinha.* This is informal and not accepted in writing or exams. In a formal text, use the full forms: *Se tivesse sabido, teria vindo.*' },
        ],
        [
          { t: 'dialogue', title: 'Uma oportunidade perdida', lines: [
            { who: 'Ana', s: 'Pena que não tenhas ido ao Porto connosco!' },
            { who: 'Pedro', s: 'Se tivesse sabido mais cedo, teria ido.' },
            { who: 'Ana', s: 'Escrevi-te uma mensagem.' },
            { who: 'Pedro', s: 'Eu sei, mas o telemóvel estava sem bateria. Se tivesse visto o convite, teria respondido logo.' },
            { who: 'Ana', s: 'Quem me dera que tivesses ido! Divertimo-nos muito.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which kind of if? Sort the sentences.', explain: ['groups'], groups: ['Possible', 'Unreal now', 'Unreal past'], items: [
            { s: 'Se estudares, passarás.', g: 0, why: 'Futuro do conjuntivo: it can happen.' },
            { s: 'Se chover, fico em casa.', g: 0, why: 'Futuro do conjuntivo: it can happen.' },
            { s: 'Se estudasses mais, passarias.', g: 1, why: 'Imperfeito do conjuntivo: imagined now.' },
            { s: 'Se fosse rico, compraria uma casa.', g: 1, why: 'Imperfeito do conjuntivo: imagined now.' },
            { s: 'Se tivesse estudado, teria passado.', g: 2, why: 'Mais-que-perfeito do conjuntivo: it did not happen.' },
            { s: 'Se tivesses partido mais cedo, terias chegado a horas.', g: 2, why: 'Mais-que-perfeito do conjuntivo: it did not happen.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Se ___ sabido, teria vindo. (eu, ter)', a: ['tivesse'], why: '*Se tivesse sabido*.' },
            { q: 'Se tivesse estudado, ___ passado no exame. (eu, ter)', a: ['teria'], why: '*Teria passado*.' },
            { q: 'Se tivesses partido mais cedo, ___ chegado a horas. (tu, ter)', a: ['terias'], why: '*Terias chegado*.' },
            { q: 'Se o Marco ___ visto o convite, teria respondido. (ter)', a: ['tivesse'], why: '*Se tivesse visto*.' },
            { q: 'Pena que tu não ___ vindo. (ter)', a: ['tenhas'], why: '*Pena que* + *tenhas vindo*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Se tivesse estudado, ___ o exame.', o: ['teria passado', 'passasse', 'tivesse passado'], why: 'The result in the condicional composto.' },
            { q: 'Se ___ partido mais cedo, teríamos chegado a horas.', o: ['tivéssemos', 'teríamos', 'tenhamos'], why: 'After *se*: the mais-que-perfeito do conjuntivo.' },
            { q: 'Se tivesse estudado, hoje ___ um emprego melhor.', o: ['teria', 'tivesse', 'terei'], why: 'A mixed sentence: the result now is in the condicional.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Imagine the opposite in the past. Start with se.', items: [
            { q: 'Não estudei, por isso não passei.', cue: 'Se', a: ['Se tivesse estudado, teria passado.'], why: '*Se tivesse estudado, teria passado.*' },
            { q: 'Não partiste cedo, por isso chegaste tarde.', cue: 'Se', a: ['Se tivesses partido cedo, não terias chegado tarde.', 'Se tivesses partido cedo, terias chegado a horas.'], why: '*Se tivesses partido …, não terias chegado …*' },
            { q: 'Não soube, por isso não vim.', cue: 'Se', a: ['Se tivesse sabido, teria vindo.'], why: '*Se tivesse sabido, teria vindo.*' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Se eu [teria] sabido, teria vindo.', a: ['tivesse'], why: 'After *se*, never the condicional.' },
            { s: 'Se tivesse estudado, [passaria] no exame.', a: ['teria passado'], why: 'The unreal past needs the condicional composto.' },
            { s: 'Se [tinha] partido cedo, terias chegado.', a: ['tivesses'], why: 'After *se*: *tivesses partido*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Se tivesse sabido, teria vindo.', why: '*Se* + mais-que-perfeito do conjuntivo, condicional composto.' },
            { a: 'Teria passado no exame se tivesse estudado.', why: 'The *se* part can come second.' },
            { a: 'Pena que não tenhas vindo.', why: '*Pena que* + perfeito do conjuntivo.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the beginning with the end.', pairs: [
            ['Se tivesse estudado,', 'teria passado no exame.'],
            ['Se tivesses partido cedo,', 'terias chegado a horas.'],
            ['Se tivesse sabido,', 'teria vindo.'],
            ['Se tivesse visto o convite,', 'teria respondido.'],
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Uma carta do passado',
      about: 'Read a letter that looks back on a decision.',
      art: 'ghost',
      spreads: [
        [
          { t: 'reading', title: 'Uma carta', md: 'Querida Marta,\n\nontem encontrei numa gaveta a carta com a oferta de trabalho em Londres. Há dez anos decidi ficar aqui e desde então pergunto-me muitas vezes como teria sido se tivesse aceitado. Talvez tivesse aprendido bem inglês, teria conhecido pessoas novas e hoje trabalharia numa grande empresa.\n\nMas se tivesse partido, não teria conhecido o Paulo nem teria tido os meus filhos. Não sei se foi a melhor escolha, mas penso que foi a escolha certa para mim. Pena que não tenhas podido visitar-me este verão: gostaria de ter falado contigo.\n\nUm abraço,\nElena' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'A Elena encontrou uma carta com uma oferta de trabalho.', a: 't', why: '*Encontrei … a carta com a oferta de trabalho.*' },
            { q: 'A Elena aceitou o trabalho em Londres.', a: 'f', why: 'She decided to stay: *decidi ficar aqui*.' },
            { q: 'A Elena tem dois filhos.', a: 'ng', why: 'She says *os meus filhos* but not how many.' },
            { q: 'A Elena acha que ficar foi a escolha certa para ela.', a: 't', why: '*Penso que foi a escolha certa para mim.*' },
            { q: 'A Marta visitou a Elena este verão.', a: 'f', why: '*Pena que não tenhas podido visitar-me.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Há quanto tempo decidiu a Elena ficar?', o: ['Há dez anos.', 'Há um ano.', 'Há dois meses.'], why: '*Há dez anos decidi ficar aqui.*' },
            { q: 'O que teria aprendido em Londres?', o: ['Inglês.', 'Espanhol.', 'Francês.'], why: '*Talvez tivesse aprendido bem inglês.*' },
            { q: 'Porque não lamenta a escolha?', o: ['Não teria conhecido o Paulo.', 'O trabalho era mal pago.', 'Londres é longe.'], why: '*Se tivesse partido, não teria conhecido o Paulo.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the condicional composto.', items: [
            { s: 'Talvez [teria conhecido] pessoas novas e hoje trabalharia numa grande empresa.', why: '*Teria conhecido* is the condicional composto.' },
            { s: 'Se tivesse partido, não [teria conhecido] o Paulo nem [teria tido] os meus filhos.', why: 'Both are the condicional composto.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Pergunto-me como ___ sido se tivesse aceitado. (ter, condicional)', a: ['teria'], why: '*Teria sido*.' },
            { q: 'Se ___ partido, não teria conhecido o Paulo. (eu, ter)', a: ['tivesse'], why: '*Se tivesse partido*.' },
            { q: 'Pena que tu não ___ podido visitar-me. (ter)', a: ['tenhas'], why: '*Pena que* + *tenhas podido*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Gostaria de ter falado contigo.', why: '*Gostaria de* + past infinitive.' },
            { a: 'Se tivesse partido, não teria conhecido o Paulo.', why: '*Se* + mais-que-perfeito do conjuntivo, condicional composto.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Não acho que ele ___ feito isso.', o: ['tenha', 'tem', 'teve'], why: 'Denial about the past: the perfeito do conjuntivo.' },
      { q: 'Lamento que tu não ___ vindo.', o: ['tenhas', 'tens', 'tinhas'], why: '*Lamento que* + *tenhas vindo*.' },
      { q: 'Se ___ sabido, teria vindo.', o: ['tivesse', 'tinha', 'tenha'], why: 'After *se*: the mais-que-perfeito do conjuntivo.' },
      { q: 'Se tivesse estudado, ___ o exame.', o: ['teria passado', 'passasse', 'tivesse passado'], why: 'The result in the condicional composto.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
      { q: 'É possível que eles ___ perdido o comboio. (ter)', a: ['tenham'], why: '*Tenham perdido*.' },
      { q: 'Se eu ___ tido tempo, teria ido. (ter)', a: ['tivesse'], why: '*Se eu tivesse tido tempo*.' },
      { q: 'Se tivesse partido, não ___ conhecido o Paulo. (ter)', a: ['teria'], why: '*Teria conhecido*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the phrase with its meaning.', pairs: [
      ['Quem me dera!', 'If only!'],
      ['Pena que …', 'What a pity that …'],
      ['Se ao menos …', 'If only …'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence.', items: [
      { q: 'Não estudei, por isso não passei.', cue: 'Se', a: ['Se tivesse estudado, teria passado.'], why: '*Se tivesse estudado, teria passado.*' },
      { q: 'Ele fez isso.', cue: 'Não acho que', a: ['Não acho que ele tenha feito isso.'], why: '*Fez* → *tenha feito*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Se eu [tinha] sabido, teria vindo.', a: ['tivesse'], why: 'After *se*: the mais-que-perfeito do conjuntivo.' },
      { s: 'Duvido que ele [fez] isso.', a: ['tenha feito'], why: 'A doubt about the past: *tenha feito*.' },
    ] },
  ],
};
