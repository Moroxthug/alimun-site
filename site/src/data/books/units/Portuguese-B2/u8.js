// Portuguese B2, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Science, society and the future',
  goal: 'Discuss science and society, speculate and express cause, effect and probability. Learn deve ter sido, pode ter and devia ter, the words of cause and effect, and the abstract vocabulary of an argument.',
  art: 'dragon',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['science', 'technology', 'cause and effect', 'probability', 'argument'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Deve ter sido, devia ter',
      about: 'Guess about the past and express regret with modal verbs and ter + participle.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'Use a modal verb with **ter + participle** to talk about the past. **Dever + ter + participle** is a **guess**: *Deve ter sido difícil.* **Poder + ter + participle** says it is **possible**: *Ela pode ter perdido o comboio.* **Dever** in the imperfeito (**devia**) with **ter + participle** is a **regret or reproach**: *Devias ter avisado.* **Poder** in the imperfeito (**podia**) is the same for something that was possible but did not happen: *Podias ter ligado.* For the future or the present, **pode ser que** takes the conjuntivo: *Pode ser que chova. Pode ser que tenha chovido.*' },
          { t: 'table', caption: 'Modal verbs in the past', explain: ['head', 'col1'], head: ['Form', 'Meaning', 'Example'], rows: [
            ['deve ter + participle', 'a guess about the past', 'Deve ter sido difícil.'],
            ['pode ter + participle', 'it is possible that', 'Ela pode ter perdido o comboio.'],
            ['devia ter + participle', 'a regret or reproach', 'Devias ter avisado.'],
            ['podia ter + participle', 'it was possible but did not happen', 'Podias ter ligado.'],
            ['pode ser que + conjuntivo', 'it may be that', 'Pode ser que chova.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The two forms look alike, but the meaning is different: **deve ter sido** is a guess, **devia ter sido** is a regret. The participle after **ter** never changes: *Ela deve ter chegado, eles devem ter chegado.* For a guess about the present, use **dever** alone: *Deve estar cansado.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Deve ter sido** muito difícil.', n: 'A guess.' },
            { s: 'Ela **pode ter perdido** o comboio.', n: 'It is possible.' },
            { s: '**Devias ter avisado** mais cedo.', n: 'A reproach.' },
            { s: '**Podias ter ligado**.', n: 'It was possible but did not happen.' },
            { s: '**Pode ser que tenha chovido** ontem.', n: '*Pode ser que* + perfeito do conjuntivo.' },
          ] },
          { t: 'dialogue', title: 'Um atraso', lines: [
            { who: 'Ana', s: 'O Pedro ainda não chegou.' },
            { who: 'Sara', s: 'Pode ter perdido o comboio.' },
            { who: 'Ana', s: 'Devia ter avisado.' },
            { who: 'Sara', s: 'Deve ter ficado sem bateria. Pode ser que chegue daqui a pouco.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Deve ter ___ difícil. (ser)', a: ['sido'], why: 'The participle of *ser*: *sido*.' },
            { q: 'Ela pode ter ___ o comboio. (perder)', a: ['perdido'], why: 'The participle of *perder*: *perdido*.' },
            { q: 'Devias ter ___. (avisar)', a: ['avisado'], why: 'The participle of *avisar*: *avisado*.' },
            { q: 'Pode ser que ___ amanhã. (chover)', a: ['chova'], why: '*Pode ser que* + conjuntivo.' },
            { q: 'Pode ser que tenha ___ ontem. (chover)', a: ['chovido'], why: 'The participle of *chover*: *chovido*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'A guess or a regret? Sort the sentences.', explain: ['groups'], groups: ['A guess', 'A regret or reproach'], items: [
            { s: 'Deve ter sido difícil.', g: 0, why: '*Deve ter* = a guess.' },
            { s: 'Pode ter perdido o comboio.', g: 0, why: '*Pode ter* = a guess.' },
            { s: 'Deve ter chegado tarde.', g: 0, why: '*Deve ter* = a guess.' },
            { s: 'Devias ter avisado.', g: 1, why: '*Devias ter* = a reproach.' },
            { s: 'Podias ter ligado.', g: 1, why: '*Podias ter* = a reproach.' },
            { s: 'Devia ter estudado mais.', g: 1, why: '*Devia ter* = a regret.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'You guess about the past:', o: ['Deve ter sido difícil.', 'Devia ter sido difícil.', 'Deve ser difícil.'], why: '*Deve ter* + participle = a guess about the past.' },
            { q: 'You reproach a friend:', o: ['Devias ter avisado.', 'Deves ter avisado.', 'Deves avisar.'], why: '*Devias ter* + participle = a reproach.' },
            { q: 'Pode ser que ___ amanhã.', o: ['chova', 'chove', 'choveu'], why: '*Pode ser que* + conjuntivo.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word in brackets.', items: [
            { q: 'Provavelmente foi difícil.', cue: 'Deve', a: ['Deve ter sido difícil.'], why: '*Deve ter* + participle.' },
            { q: 'Foi um erro não avisares.', cue: 'Devias', a: ['Devias ter avisado.'], why: '*Devias ter* + participle.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Deve [tem] sido difícil.', a: ['ter'], why: '*Deve ter* + participle.' },
            { s: 'Ela pode ter [perder] o comboio.', a: ['perdido'], why: 'After *ter* we need the participle.' },
            { s: 'Devias ter [avisar].', a: ['avisado'], why: 'After *ter* we need the participle.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Deve ter sido muito difícil.', why: '*Deve ter* + participle.' },
            { a: 'Ela pode ter perdido o comboio.', why: '*Pode ter* + participle.' },
            { a: 'Devias ter avisado mais cedo.', why: '*Devias ter* + participle.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Cause and effect',
      about: 'Say why something happened and what followed.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To give a **cause**, use **visto que** or **uma vez que** (since), **devido a** (because of, neutral and formal), **graças a** (thanks to, for a good result) and **por culpa de** (because of, for blame). To give an **effect**, use **por isso** (so), **por conseguinte** and **consequentemente** (as a result, formal). *Visto que chove, ficamos em casa. O voo foi cancelado devido ao nevoeiro. Graças à tua ajuda, acabámos. Chegámos tarde por culpa do trânsito. O preço subiu; consequentemente, vendemos menos.*' },
          { t: 'table', caption: 'Cause and effect', explain: ['head', 'col1'], head: ['Expression', 'Use', 'Example'], rows: [
            ['visto que / uma vez que', 'since (cause)', 'Visto que chove, ficamos em casa.'],
            ['devido a', 'because of (formal)', 'O voo foi cancelado devido ao nevoeiro.'],
            ['graças a', 'thanks to (good result)', 'Graças à tua ajuda, acabámos.'],
            ['por culpa de', 'because of (blame)', 'Chegámos tarde por culpa do trânsito.'],
            ['por isso', 'so (effect)', 'Chovia; por isso, ficámos em casa.'],
            ['consequentemente', 'as a result (formal)', 'O preço subiu; consequentemente, vendemos menos.'],
          ] },
          { t: 'tip', art: 'owl', md: '**A** and **de** join the article: *devido ao nevoeiro, graças à tua ajuda, por culpa do trânsito.* Never use **graças a** for something bad: *graças ao trânsito, chegámos tarde* would be ironic. **Visto que** and **uma vez que** take the **indicative**.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Visto que** chove, ficamos em casa.', n: 'Cause, with the indicative.' },
            { s: 'O voo foi cancelado **devido ao** nevoeiro.', n: 'Neutral and formal.' },
            { s: '**Graças à** tua ajuda, acabámos cedo.', n: 'A good result.' },
            { s: 'Chegámos tarde **por culpa do** trânsito.', n: 'Blame.' },
            { s: 'Chovia; **por isso**, ficámos em casa.', n: 'Effect.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Cause or effect? Sort the expressions.', explain: ['groups'], groups: ['Cause', 'Effect'], items: [
            { s: 'visto que', g: 0, why: 'It gives the cause.' },
            { s: 'devido a', g: 0, why: 'It gives the cause.' },
            { s: 'graças a', g: 0, why: 'It gives the cause.' },
            { s: 'por isso', g: 1, why: 'It gives the effect.' },
            { s: 'consequentemente', g: 1, why: 'It gives the effect.' },
            { s: 'por conseguinte', g: 1, why: 'It gives the effect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'O voo foi cancelado ___ ao nevoeiro.', a: ['devido'], why: '*Devido a* + noun.' },
            { q: '___ à tua ajuda, acabámos.', a: ['Graças'], why: '*Graças a* for a good result.' },
            { q: 'Chegámos tarde por ___ do trânsito.', a: ['culpa'], why: '*Por culpa de* for blame.' },
            { q: 'Chovia; ___, ficámos em casa.', a: ['por isso'], why: '*Por isso* gives the effect.' },
            { q: '___ que chove, ficamos em casa.', a: ['Visto'], why: '*Visto que* gives the cause.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
            ['devido a', 'because of'],
            ['graças a', 'thanks to'],
            ['por culpa de', 'because of (blame)'],
            ['consequentemente', 'as a result'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Perdemos o jogo ___ erro do árbitro.', o: ['por culpa do', 'graças ao', 'visto o'], why: 'Blame: *por culpa de*.' },
            { q: 'Acabámos cedo ___ tua ajuda.', o: ['graças à', 'por culpa da', 'embora a'], why: 'A good result: *graças a*.' },
            { q: 'O preço subiu; ___, vendemos menos.', o: ['consequentemente', 'embora', 'visto que'], why: '*Consequentemente* gives the effect.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the words in brackets.', items: [
            { q: 'Chovia. Ficámos em casa.', cue: 'Visto que', a: ['Visto que chovia, ficámos em casa.'], why: '*Visto que* + indicative.' },
            { q: 'O nevoeiro cancelou o voo.', cue: 'Devido ao nevoeiro', a: ['Devido ao nevoeiro, o voo foi cancelado.'], why: '*Devido a* + noun.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Graças [de] tua ajuda, acabámos.', a: ['à'], why: '*Graças a* + *a* = *graças à*.' },
            { s: 'O voo foi cancelado devido [de] nevoeiro.', a: ['ao'], why: '*Devido a* + *o* = *devido ao*.' },
            { s: 'Chegámos tarde [graças ao] trânsito.', a: ['por culpa do'], why: 'Blame: *por culpa de*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'O voo foi cancelado devido ao nevoeiro.', why: '*Devido a* + noun.' },
            { a: 'Graças à tua ajuda, acabámos cedo.', why: '*Graças a* opens the sentence.' },
            { a: 'Chovia; por isso, ficámos em casa.', why: '*Por isso* gives the effect.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Progress, risk, responsibility',
      about: 'Learn the abstract words and the formal phrases of an argument.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'An essay on science and society uses abstract nouns: **o progresso** (progress), **o risco** (risk), **o benefício** (benefit) and **a responsabilidade** (responsibility). To argue, introduce a view with **Há quem defenda que …** (some people argue that), admit a point with **É certo que …**, and answer it with **no entanto** or **contudo** (however). Say who decides with **Cabe a … decidir** (it is up to … to decide). **Há quem** takes the conjuntivo: *Há quem defenda que a tecnologia nos isola.*' },
          { t: 'table', caption: 'The words of an argument', explain: ['head', 'col1'], head: ['Word or phrase', 'Meaning', 'Example'], rows: [
            ['o progresso', 'progress', 'O progresso científico melhora a vida.'],
            ['o risco', 'risk', 'Toda a inovação tem riscos.'],
            ['o benefício', 'benefit', 'Os benefícios superam os riscos.'],
            ['a responsabilidade', 'responsibility', 'A responsabilidade é de todos.'],
            ['Há quem defenda que …', 'some people argue that', 'Há quem defenda que a tecnologia nos isola.'],
            ['Cabe a … decidir', 'it is up to … to decide', 'Cabe aos governos decidir.'],
          ] },
          { t: 'tip', art: 'owl', md: '**No entanto** and **contudo** both mean *however* and take a comma: *É certo que há riscos; no entanto, os benefícios são maiores.* **Cabe** is only used in the third person: *cabe a mim, cabe aos governos*. **Há quem** with the indicative is heard in speech, but the conjuntivo is the careful form.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**O progresso** científico melhora a vida.', n: 'Progress.' },
            { s: 'Toda a inovação tem **riscos**.', n: 'Risks.' },
            { s: 'Os **benefícios** superam os riscos.', n: 'Benefits.' },
            { s: '**Há quem defenda** que a tecnologia nos isola.', n: 'Introducing a view.' },
            { s: '**Cabe aos governos** decidir o que é permitido.', n: 'Who decides.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Introduces a view or answers it? Sort the phrases.', explain: ['groups'], groups: ['Introduces a view', 'Answers it'], items: [
            { s: 'Há quem defenda que …', g: 0, why: 'It introduces a view.' },
            { s: 'É certo que …', g: 0, why: 'It admits a point.' },
            { s: 'Parece-me que …', g: 0, why: 'It gives a view.' },
            { s: 'No entanto, …', g: 1, why: 'It answers a point.' },
            { s: 'Contudo, …', g: 1, why: 'It answers a point.' },
            { s: 'Na verdade, …', g: 1, why: 'It answers a point.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'O ___ científico melhora a vida. (progress)', a: ['progresso'], why: '*O progresso*.' },
            { q: 'Toda a inovação tem ___. (risks)', a: ['riscos'], why: '*Os riscos*.' },
            { q: 'Os ___ superam os riscos. (benefits)', a: ['benefícios'], why: '*Os benefícios*.' },
            { q: 'A ___ é de todos. (responsibility)', a: ['responsabilidade'], why: '*A responsabilidade*.' },
            { q: 'Há quem ___ que a tecnologia nos isola. (defender)', a: ['defenda'], why: '*Há quem* + conjuntivo.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['o progresso', 'progress'],
            ['o risco', 'risk'],
            ['o benefício', 'benefit'],
            ['a responsabilidade', 'responsibility'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'É certo que há riscos; ___, os benefícios são maiores.', o: ['no entanto', 'porque', 'embora'], why: '*No entanto* = however.' },
            { q: 'Cabe aos governos ___.', o: ['decidir', 'decide', 'decidiu'], why: '*Caber a* + infinitive.' },
            { q: 'Toda a inovação tem ___.', o: ['riscos', 'cabe', 'enquanto'], why: '*Os riscos* is a noun.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Os [benefício] superam os riscos.', a: ['benefícios'], why: 'Plural: *benefícios*.' },
            { s: 'É certo que há riscos; [embora], os benefícios são maiores.', a: ['no entanto'], why: '*No entanto* = however.' },
            { s: 'Cabe aos governos [decide].', a: ['decidir'], why: '*Caber a* + infinitive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Toda a inovação tem riscos e benefícios.', why: 'Subject, verb, objects.' },
            { a: 'Cabe aos governos decidir o que é permitido.', why: '*Caber a* + infinitive.' },
            { a: 'É certo que há riscos; no entanto, os benefícios são maiores.', why: 'Admit a point, then answer it.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A tecnologia e a vida de todos os dias',
      about: 'Read an essay on technology and everyday life.',
      art: 'dragon',
      spreads: [
        [
          { t: 'reading', title: 'A tecnologia e a vida de todos os dias', md: 'Há quem defenda que a tecnologia nos isola. É certo que o telemóvel pode distrair-nos à mesa e que muitos jovens passam horas diante do ecrã. No entanto, graças à tecnologia, uma avó consegue ver os netos que vivem noutro país, e um doente pode falar com o médico sem sair de casa.\n\nO progresso traz benefícios, mas também riscos. Visto que os dados de cada pessoa ficam guardados em muitos sítios, a privacidade deve ser protegida. Cabe aos governos criar regras e às empresas cumpri-las; por isso, a responsabilidade é partilhada.\n\nQuando penso nos meus avós, deve ter sido difícil viver sem telefone. Podiam ter esperado semanas por uma carta. Devemos ter isto em conta: a tecnologia não é boa nem má, depende do uso que lhe dermos.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Segundo o autor, a tecnologia só traz problemas.', a: 'f', why: '*O progresso traz benefícios, mas também riscos.*' },
            { q: 'Graças à tecnologia, uma avó pode ver os netos que vivem noutro país.', a: 't', why: '*Graças à tecnologia, uma avó consegue ver os netos.*' },
            { q: 'O autor pensa que a responsabilidade é só das empresas.', a: 'f', why: '*A responsabilidade é partilhada.*' },
            { q: 'O autor trabalha numa empresa de tecnologia.', a: 'ng', why: 'The text does not say so.' },
            { q: 'O autor acha que viver sem telefone deve ter sido difícil.', a: 't', why: '*Deve ter sido difícil viver sem telefone.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'O que deve ser protegido?', o: ['A privacidade.', 'O ecrã.', 'O telemóvel.'], why: '*A privacidade deve ser protegida.*' },
            { q: 'A quem cabe criar regras?', o: ['Aos governos.', 'Aos jovens.', 'Aos avós.'], why: '*Cabe aos governos criar regras.*' },
            { q: 'De que depende que a tecnologia seja boa ou má?', o: ['Do uso que lhe dermos.', 'Do preço.', 'Da idade.'], why: '*Depende do uso que lhe dermos.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the expressions of cause and effect.', items: [
            { s: '[Visto que] os dados de cada pessoa ficam guardados em muitos sítios, a privacidade deve ser protegida.', why: '*Visto que* gives the cause.' },
            { s: 'Cabe aos governos criar regras; [por isso], a responsabilidade é partilhada.', why: '*Por isso* gives the effect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ à tecnologia, uma avó consegue ver os netos.', a: ['Graças'], why: '*Graças a* for a good result.' },
            { q: 'Deve ___ sido difícil viver sem telefone. (ter)', a: ['ter'], why: '*Deve ter* + participle.' },
            { q: 'Cabe aos governos criar regras; ___, a responsabilidade é partilhada.', a: ['por isso'], why: '*Por isso* gives the effect.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Cabe aos governos criar regras e às empresas cumpri-las.', why: '*Caber a* + infinitive.' },
            { a: 'A tecnologia não é boa nem má.', why: '*Nem … nem* pattern.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'You guess about the past:', o: ['Deve ter sido difícil.', 'Devia ter sido difícil.', 'Deve ser difícil.'], why: '*Deve ter* + participle.' },
      { q: 'O voo foi cancelado ___ ao nevoeiro.', o: ['devido', 'graças', 'culpa'], why: '*Devido a* + noun.' },
      { q: 'O preço subiu; ___, vendemos menos.', o: ['consequentemente', 'embora', 'visto que'], why: '*Consequentemente* gives the effect.' },
      { q: 'Os ___ superam os riscos.', o: ['benefícios', 'decisões', 'cabe'], why: '*Os benefícios*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Devias ter ___. (avisar)', a: ['avisado'], why: 'The participle of *avisar*.' },
      { q: '___ à tua ajuda, acabámos.', a: ['Graças'], why: '*Graças a* for a good result.' },
      { q: 'Pode ser que ___ amanhã. (chover)', a: ['chova'], why: '*Pode ser que* + conjuntivo.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
      ['devido a', 'because of'],
      ['graças a', 'thanks to'],
      ['por culpa de', 'because of (blame)'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the words in brackets.', items: [
      { q: 'Provavelmente foi difícil.', cue: 'Deve', a: ['Deve ter sido difícil.'], why: '*Deve ter* + participle.' },
      { q: 'Chovia. Ficámos em casa.', cue: 'Visto que', a: ['Visto que chovia, ficámos em casa.'], why: '*Visto que* + indicative.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Deve [tem] sido difícil.', a: ['ter'], why: '*Deve ter* + participle.' },
      { s: 'Os [benefício] superam os riscos.', a: ['benefícios'], why: 'Plural: *benefícios*.' },
    ] },
  ],
};
