// Portuguese C2, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Academic and critical writing',
  goal: 'Take a measured, evidence-based stance in academic writing. Learn hedging and boosting, nominal style and reporting verbs, and critical evaluation with signposting.',
  art: 'owl',
  tags: { skills: ['writing', 'reading', 'vocabulary'], topics: ['hedging', 'boosting', 'reporting verbs', 'nominal style', 'critical evaluation', 'signposting'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Ao que parece, tende a, sem dúvida',
      about: 'Hedge and boost claims to show exactly how sure you are.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Academic writers rarely say that something is simply true. They show **how sure** they are. **Hedges** make a claim less certain: *parece que, ao que parece, tende a, em certa medida, presumivelmente, poderá, sugere que*. **Boosters** make it stronger: *sem dúvida, indubitavelmente, é evidente que, de facto*. The **conditional** and the **future** are classic hedges in Portuguese: *Os dados poderão confirmar esta hipótese.* **Presumivelmente** and **ao que parece** show doubt: *A reunião era, ao que parece, privada.*' },
          { t: 'table', caption: 'Hedges and boosters', explain: ['head', 'col0'], head: ['Function', 'Examples', 'Sample sentence'], rows: [
            ['hedge: possibility', 'poderá, sugere que, parece que', 'Os dados poderão confirmar esta tese.'],
            ['hedge: frequency or degree', 'tende a, em certa medida', 'Os preços tendem a subir no verão.'],
            ['hedge: probability', 'ao que parece, presumivelmente', 'Ao que parece, já partiu.'],
            ['hedge: doubt about truth', 'ao que parece, presumivelmente', 'A visita era presumivelmente privada.'],
            ['booster', 'sem dúvida, indubitavelmente, é evidente que', 'Os resultados são indubitavelmente significativos.'],
          ] },
        ],
        [
          { t: 'text', md: 'Too many hedges make you sound unsure; too many boosters make you sound arrogant. A strong paragraph balances them. Weak: *É indubitável que todos os estudantes preferem as aulas em linha.* Measured: *O inquérito sugere que muitos estudantes preferem as aulas em linha, embora isso possa variar consoante a disciplina.* Notice **sugere**, **muitos** and **possa**: three small hedges that make the claim defensible.' },
          { t: 'tip', art: 'owl', md: 'Be careful with absolute words: *todos, sempre, nunca, prova, impossível*. They are almost always too strong in academic writing. Replace them: *todos → a maioria / muitos*; *sempre → frequentemente / tende a*; *prova → sugere / indica*.' },
          { t: 'ex', kind: 'transform', h: 'Make the claim more cautious, using the word given.', items: [
            { q: 'As redes sociais causam ansiedade nos adolescentes.', cue: 'podem', a: ['As redes sociais podem causar ansiedade nos adolescentes.'], why: 'The hedge *podem* reduces certainty.' },
            { q: 'O estudo prova que o desporto melhora a memória.', cue: 'sugere', a: ['O estudo sugere que o desporto melhora a memória.'], why: '*Sugere* is weaker than *prova*.' },
            { q: 'Todos os jovens preferem as mensagens de texto.', cue: 'tendem', a: ['Os jovens tendem a preferir as mensagens de texto.'], why: '*Tender a* hedges frequency.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
            { q: 'A lei foi ___ criada para proteger os trabalhadores, mas os críticos veem uma vantagem para os patrões.', o: ['presumivelmente', 'indubitavelmente', 'sem dúvida'], why: '*Presumivelmente*: as claimed, but perhaps not true.' },
            { q: 'As provas apontam ___ a favor do novo tratamento: os quatro estudos concordam.', o: ['claramente', 'presumivelmente', 'ao que parece'], why: 'A strong booster fits strong evidence.' },
            { q: 'Este é ___ o romance mais influente da década, embora alguém discorde.', o: ['provavelmente', 'indubitavelmente', 'sem dúvida'], why: '*Provavelmente* hedges an opinion.' },
            { q: '___ que os dados confirmam esta hipótese.', o: ['Parece', 'É indubitável', 'Está provado'], why: '*Parece que* is a hedge.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Hedge or booster?', groups: ['hedge', 'booster'], explain: ['groups'], items: [
            { s: 'tende a', g: 0, why: 'A hedge for frequency.' },
            { s: 'indubitavelmente', g: 1, why: 'A booster.' },
            { s: 'parece que', g: 0, why: 'A hedge.' },
            { s: 'é evidente que', g: 1, why: 'A booster.' },
            { s: 'em certa medida', g: 0, why: 'A hedge for degree.' },
            { s: 'sem dúvida', g: 1, why: 'A booster.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Sustentar, objetar, admitir',
      about: 'Use nominal style and precise reporting verbs.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Academic Portuguese packs information into **noun phrases**. Instead of *Cada vez mais pessoas trabalham de casa, e isso é importante*, a writer might say *o número crescente de pessoas que trabalham de casa* or *a difusão do teletrabalho*. Useful frames: *o alcance de…*, *um número crescente de…*, *a ausência de…*, *as implicações de…*, *um conjunto de indícios*. The noun phrase can be the subject: *Um conjunto de indícios sugere que…*' },
          { t: 'examples', items: [
            { s: '**O alcance** do efeito dos ecrãs no sono continua incerto.', n: 'A noun phrase as subject, then *continua incerto*.' },
            { s: '**Um número crescente** de estudos sugere que o bilinguismo favorece a concentração.', n: 'Impersonal and academic.' },
            { s: '**A ausência** de financiamento atrasou o projeto.', n: 'A noun phrase replacing *não havia financiamento*.' },
          ] },
        ],
        [
          { t: 'text', md: 'To refer to other writers, choose a **reporting verb** that shows their stance. **Afirmar**, **referir** and **indicar** are neutral. **Sustentar** and **defender** show a firm position. **Avançar** means *put forward* an idea. **Admitir** means *admit reluctantly*. **Objetar**, **contestar** and **refutar** show disagreement. **Pretender** is a **false friend**: it means *to intend* or *to want*, not *to pretend* (**fingir**). Use the **present** for what an author says and the **pretérito perfeito** for what a study did.' },
          { t: 'table', caption: 'Reporting verbs', explain: ['head', 'col0'], head: ['Verb', 'What it shows', 'Example'], rows: [
            ['afirmar / referir', 'neutral', 'O autor refere que as cidades devem reduzir o tráfego.'],
            ['sustentar / defender', 'firm position', 'Ela sustenta que esta política falhou.'],
            ['avançar', 'puts forward an idea', 'Esta teoria avança que a memória é reconstruída.'],
            ['admitir', 'admits reluctantly', 'A autora admite que a amostra era pequena.'],
            ['objetar / contestar', 'disagrees', 'Vários especialistas contestam estes números.'],
            ['pretender', 'intends (false friend of to pretend)', 'Pretende terminar o curso este ano.'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Use **pretender** with care: *Pretende terminar o curso* means *he intends to finish the course*. The Portuguese for *to pretend* is **fingir**: *Finge que dorme.* In academic writing, **afirmar** and **referir** are the safest choices when you are not sure of an author’s strength of feeling.' },
          { t: 'ex', kind: 'choice', h: 'Choose the best reporting verb.', items: [
            { q: 'A autora ___ que a amostra era demasiado pequena para tirar conclusões sólidas.', o: ['admite', 'pretende', 'contesta'], why: '*Admitir*: admit reluctantly, against the writer’s own case.' },
            { q: 'Esta teoria ___ que a linguagem se aprende por imitação.', o: ['avança', 'admite', 'contesta'], why: '*Avançar*: put forward.' },
            { q: 'Vários especialistas ___ a exatidão dos números.', o: ['contestam', 'avançam', 'sustentam'], why: '*Contestar*: challenge.' },
            { q: 'Ele ___ que dorme para não responder.', o: ['finge', 'pretende', 'admite'], why: '*Fingir* = to pretend.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with a noun phrase, starting with the words given.', items: [
            { q: 'Cada vez mais pessoas vão de bicicleta para o trabalho, e isso é importante.', cue: 'O número crescente', a: ['O número crescente de pessoas que vão de bicicleta para o trabalho é importante.'], why: 'A noun phrase as subject.' },
            { q: 'Não havia financiamento suficiente, por isso o projeto atrasou.', cue: 'A falta', a: ['A falta de financiamento suficiente atrasou o projeto.', 'A falta de financiamento atrasou o projeto.'], why: '*A falta de* + noun.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'Um ___ de indícios sugere que o sono influencia a memória.', a: ['conjunto'], why: '*Um conjunto de indícios*.' },
            { q: 'O ___ do efeito dos ecrãs no sono continua incerto.', a: ['alcance'], why: '*O alcance de*.' },
            { q: 'O jornal ___ que o ministro mentiu, sem provas.', a: ['sustenta', 'afirma'], why: 'A reporting verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Pontos fortes e limitações',
      about: 'Evaluate a piece of research and signpost your argument.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'A critical writer does not only describe; they **evaluate**. For any study, ask: what is its **ponto forte** (strength), and what are its **limitações**? Typical strengths: *uma amostra ampla e variada, um método claro, resultados que coincidem com outros estudos*. Typical limits: *uma amostra reduzida ou homogénea, um período curto, dados autodeclarados, uma conclusão que vai além dos dados*. Useful phrases: *Um dos pontos fortes do estudo é…*, *Uma limitação relevante é que…*, *Estes resultados não podem ser generalizados a…*.' },
          { t: 'examples', items: [
            { s: '**Um dos pontos fortes** do estudo é a amostra ampla e variada.', n: 'A positive evaluation.' },
            { s: '**Uma limitação relevante** é que os dados são autodeclarados.', n: 'A negative evaluation.' },
            { s: 'Estes resultados **não podem ser generalizados** aos idosos.', n: 'The sample did not include them.' },
          ] },
        ],
        [
          { t: 'text', md: '**Signposting** tells the reader where the argument is going. To contrast: *ao passo que*, *pelo contrário*, *em contrapartida*. To draw a conclusion: *daqui resulta que*, *por conseguinte*, *importa salientar que*. To add: *além disso*, *ademais*. To concede and then argue: *embora… contudo…*. **Embora** means *although* and takes the **subjunctive**: *Embora a amostra fosse pequena, a tendência é clara.* These words are the grammar of an argument; without them, a paragraph is a list of facts.' },
          { t: 'table', caption: 'Signposting', explain: ['head', 'col0'], head: ['Function', 'Phrases', 'Example'], rows: [
            ['contrast', 'ao passo que, pelo contrário', 'O primeiro estudo encontrou uma relação, ao passo que o segundo não encontrou nenhuma.'],
            ['conclusion', 'daqui resulta que, por conseguinte', 'Por conseguinte, a política deve ser revista.'],
            ['addition', 'além disso, ademais', 'Além disso, a amostra era reduzida.'],
            ['concession', 'embora… contudo…', 'Embora a amostra fosse pequena, a tendência é clara.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Strength or limit?', groups: ['strength', 'limit'], explain: ['groups'], items: [
            { s: 'A amostra incluía cinco mil participantes de doze países.', g: 0, why: 'A large and varied sample.' },
            { s: 'Todos os participantes eram estudantes.', g: 1, why: 'A narrow sample.' },
            { s: 'Os resultados coincidem com os de três estudos anteriores.', g: 0, why: 'Consistency with earlier research.' },
            { s: 'O estudo durou apenas duas semanas.', g: 1, why: 'A short time period.' },
            { s: 'Os dados provêm de questionários preenchidos pelos próprios participantes.', g: 1, why: 'Self-reporting can be unreliable.' },
            { s: 'Os investigadores descreveram o método com pormenor.', g: 0, why: 'A clear method.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best signpost.', items: [
            { q: 'O primeiro estudo encontrou uma relação clara; ___, o segundo não encontrou nenhuma.', o: ['pelo contrário', 'além disso', 'por conseguinte'], why: 'Contrast between the studies.' },
            { q: '___ a amostra fosse pequena, a tendência é clara.', o: ['Embora', 'Além disso', 'Por conseguinte'], why: '*Embora* concedes a point.' },
            { q: 'Os dados provêm de dois países; ___, os resultados podem não valer noutros.', o: ['por conseguinte', 'pelo contrário', 'ao passo que'], why: 'A logical conclusion.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the sentences with the signpost given.', items: [
            { q: 'O primeiro estudo encontrou uma relação. O segundo não encontrou nenhuma.', cue: 'ao passo que', a: ['O primeiro estudo encontrou uma relação, ao passo que o segundo não encontrou nenhuma.', 'O primeiro estudo encontrou uma relação ao passo que o segundo não encontrou nenhuma.'], why: '*Ao passo que* links two contrasting clauses.' },
            { q: 'A amostra era pequena. A tendência era clara.', cue: 'Embora', a: ['Embora a amostra fosse pequena, a tendência era clara.'], why: '*Embora* + subjunctive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'O teletrabalho: o que sabemos?',
      about: 'Read an extract from a literature review and identify stance, hedging and evaluation.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'O teletrabalho: o que sabemos?', md: 'Um conjunto de indícios sugere que o teletrabalho transformou a organização dos dias de muitos trabalhadores. O alcance dos seus efeitos na produtividade continua, porém, a ser objeto de debate.\n\nUm primeiro estudo sustentava que os trabalhadores em casa eram mais produtivos, presumivelmente porque eram menos interrompidos. Um estudo posterior, pelo contrário, registou uma quebra de produtividade nas tarefas que exigiam trabalho de equipa estreito. Ambos os estudos têm limitações: a primeira amostra provinha de uma única empresa, ao passo que a segunda se baseava nas estimativas dos próprios trabalhadores.\n\nVários investigadores admitem que os dados são incompletos. Um deles avança que a variável decisiva não seja o local, mas a qualidade da chefia, uma leitura que poderá ajustar-se às provas disponíveis, embora não tenha sido verificada diretamente. Outros contestam-na e objetam que o tipo de trabalho conta mais do que o modo de o gerir.\n\nNo conjunto, os estudos sugerem que o teletrabalho tende a convir às tarefas individuais, mas que os seus efeitos na criatividade e na colaboração são menos nítidos. Daqui resulta que as organizações devem evitar generalizações precipitadas. Uma limitação relevante da literatura é a brevidade do período observado; futuras investigações poderão, por conseguinte, acompanhar os mesmos trabalhadores durante vários anos.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'O autor afirma que é certo que o teletrabalho aumenta a produtividade.', a: 'f', why: 'The extent of the effects “continua a ser objeto de debate”.' },
            { q: 'Um primeiro estudo sustentava que os trabalhadores eram mais produtivos em casa.', a: 't', why: '«Eram mais produtivos.»' },
            { q: 'O estudo posterior registou que todas as tarefas pioravam em casa.', a: 'f', why: 'Only «as tarefas que exigiam trabalho de equipa estreito».' },
            { q: 'Um investigador avança que a qualidade da chefia é a variável decisiva.', a: 't', why: '«Um deles avança que a variável decisiva… seja a qualidade da chefia.»' },
            { q: 'O autor recomenda as generalizações precipitadas.', a: 'f', why: '«As organizações devem evitar generalizações precipitadas.»' },
            { q: 'O primeiro estudo foi realizado num hospital.', a: 'ng', why: 'The text says only «uma única empresa».' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does «presumivelmente porque eram menos interrompidos» suggest?', o: ['The reason is claimed, but may not be true.', 'The reason is certainly true.', 'The reason is unimportant.'], why: '*Presumivelmente*: presumably.' },
            { q: 'What does «admitem» show about the researchers?', o: ['They admit the data are incomplete.', 'They reject the data.', 'They collected the data.'], why: '*Admitir*: admit reluctantly.' },
            { q: 'What is the function of «pelo contrário» in the second paragraph?', o: ['It introduces a different finding.', 'It adds a similar finding.', 'It concludes the argument.'], why: 'Signposting a contrast between studies.' },
            { q: 'What limit of the literature is named in the last paragraph?', o: ['A short observation period.', 'A small number of countries.', 'A lack of interest.'], why: '«A brevidade do período observado.»' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the hedges.', items: [
            { s: 'Uma leitura que [poderá] ajustar-se às provas disponíveis, embora não tenha sido verificada diretamente.', why: 'A hedge: the future *poderá*.' },
            { s: 'O teletrabalho [tende a] convir às tarefas individuais.', why: 'A hedge for frequency.' },
            { s: 'Os estudos [sugerem] que os seus efeitos são [menos nítidos].', why: 'Hedged claims.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Um ___ de indícios sugere que o teletrabalho transformou os dias.', a: ['conjunto'], why: '*Um conjunto de indícios*.' },
            { q: 'Daqui ___ que as organizações devem evitar generalizações precipitadas.', a: ['resulta'], why: '*Daqui resulta que* = therefore.' },
            { q: 'A primeira amostra provinha de uma única empresa, ao ___ que a segunda se baseava nas estimativas dos trabalhadores.', a: ['passo'], why: '*Ao passo que* contrasts two things.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'O alcance dos seus efeitos na produtividade continua a ser objeto de debate.', why: 'A noun phrase as subject.' },
            { a: 'Ambos os estudos têm limitações que não se podem ignorar.', why: 'Evaluation of research.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'A visita era ___ privada, mas foi sobretudo uma reunião de negócios.', o: ['presumivelmente', 'indubitavelmente', 'sem dúvida'], why: '*Presumivelmente*: presumably.' },
      { q: 'A autora ___ que a amostra era demasiado pequena.', o: ['admite', 'pretende', 'contesta'], why: 'Admits reluctantly.' },
      { q: 'O primeiro estudo encontrou uma relação; ___, o segundo não encontrou nenhuma.', o: ['pelo contrário', 'além disso', 'por conseguinte'], why: 'Contrast.' },
      { q: 'Um ___ de indícios sugere esta tese.', o: ['conjunto', 'grupo', 'lugar'], why: '*Um conjunto de indícios*.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Hedge or booster?', groups: ['hedge', 'booster'], explain: ['groups'], items: [
      { s: 'tende a', g: 0, why: 'Hedge.' },
      { s: 'indubitavelmente', g: 1, why: 'Booster.' },
      { s: 'parece que', g: 0, why: 'Hedge.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'O ___ do efeito dos ecrãs no sono continua incerto.', a: ['alcance'], why: '*O alcance de*.' },
      { q: 'Estes resultados não podem ser ___ aos idosos.', a: ['generalizados'], why: '*Generalizados a*.' },
      { q: '___ a amostra fosse pequena, a tendência é clara.', a: ['Embora'], why: '*Embora* concedes a point.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the word given.', items: [
      { q: 'O estudo prova que o desporto melhora a memória.', cue: 'sugere', a: ['O estudo sugere que o desporto melhora a memória.'], why: '*Sugere* is weaker than *prova*.' },
      { q: 'Não havia financiamento suficiente, por isso o projeto atrasou.', cue: 'A falta', a: ['A falta de financiamento suficiente atrasou o projeto.', 'A falta de financiamento atrasou o projeto.'], why: '*A falta de* + noun.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the problem.', items: [
      { s: 'O estudo [prova] que o desporto melhora a memória, em todos os casos.', a: ['sugere', 'indica'], why: 'Too strong for academic writing.' },
      { s: 'Ele [pretende] que dorme para não responder. (to pretend)', a: ['finge'], why: '*Fingir* = to pretend; *pretender* means to intend.' },
    ] },
  ],
};
