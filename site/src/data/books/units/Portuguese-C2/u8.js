// Portuguese C2, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Literature and criticism',
  goal: 'Read literary Portuguese closely and write about it. Learn figurative language, narrative voice and tone, and how to write a comentário de texto.',
  art: 'owl',
  tags: { skills: ['reading', 'writing', 'vocabulary'], topics: ['figurative language', 'narrative voice', 'tone', 'irony', 'literary analysis'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Metáfora, comparação, símbolo',
      about: 'Recognise figurative language and say what it does for the reader.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Writers say one thing to suggest another. **A metáfora** says one thing *is* another: *O tempo é um rio.* **A comparação** compares with *como*, *semelhante a* or *parece*: *O tempo corre como um rio.* **A personificação** gives human qualities to a thing: *A cidade dormia.* **O símbolo** is an object that stands for an idea: a *porta fechada* may stand for a lost chance. **As imagens** (*imagery*) are the pictures the words draw in the mind: a *céu de chumbo* is heavy and grey.' },
          { t: 'table', caption: 'Figurative language', explain: ['head', 'col0'], head: ['Figure', 'What it does', 'Example'], rows: [
            ['metáfora', 'says one thing is another', 'A vida é uma viagem.'],
            ['comparação', 'compares with como or parece', 'Estava calado como um gato.'],
            ['personificação', 'gives human qualities to a thing', 'O vento sussurrava entre as árvores.'],
            ['símbolo', 'an object that stands for an idea', 'A porta fechada era o símbolo de uma oportunidade perdida.'],
            ['imagem', 'a picture made of words', 'Um céu de chumbo.'],
          ] },
        ],
        [
          { t: 'text', md: 'Naming a figure is only the first step. The second step is to say **what it does** for the reader. A *céu de chumbo* does not only describe a colour; it makes the reader feel the **weight** of the day. A *porta fechada* does not only describe a door; it suggests a **regret**. In a good analysis, we write: *A metáfora… sugere…*, *Esta imagem cria uma sensação de…*, *O símbolo representa…*.' },
          { t: 'tip', art: 'owl', md: 'Always connect the **figure** to its **effect**. Do not write *Há uma metáfora.* Write *A metáfora do rio sugere que o tempo corre sem regresso.*' },
          { t: 'ex', kind: 'sort', h: 'Metaphor or comparison?', groups: ['metáfora', 'comparação'], explain: ['groups'], items: [
            { s: 'A vida é uma viagem.', g: 0, why: 'One thing *is* another.' },
            { s: 'Corria como o vento.', g: 1, why: 'A comparison with *como*.' },
            { s: 'O silêncio era um muro.', g: 0, why: 'A metaphor.' },
            { s: 'Os seus olhos pareciam duas estrelas.', g: 1, why: 'A comparison with *parecer*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Name the figure.', items: [
            { q: '“O vento sussurrava entre as árvores.”', o: ['personificação', 'comparação', 'símbolo'], why: 'The wind is given a human action.' },
            { q: '“Um céu de chumbo.”', o: ['imagem', 'comparação', 'anáfora'], why: 'A picture made of words.' },
            { q: '“A porta fechada era o símbolo de uma oportunidade perdida.”', o: ['símbolo', 'comparação', 'personificação'], why: 'An object stands for an idea.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Turn the comparison into a metaphor, using the words given.', items: [
            { q: 'O tempo corre como um rio.', cue: 'O tempo é', a: ['O tempo é um rio.'], why: 'A metaphor drops *como* and says one thing is another.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Voz narrativa, tom, ironia',
      about: 'See who tells the story and in what tone.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Every story has a **narrator** (*narrador*). In the **first person** (*eu*), the narrator is a character and knows only what they have seen: *Naquela noite não percebi o que se passava.* In the **third person**, the narrator is outside the story: *Naquela noite a Ana não percebeu o que se passava.* An **omniscient** narrator knows everything, even what the characters think. An **unreliable narrator** may lie, forget or misunderstand, so the reader must question what they say.' },
          { t: 'table', caption: 'Narrative voice', explain: ['head', 'col0'], head: ['Voice', 'What the reader gets', 'Example'], rows: [
            ['first person', 'one view, close and personal', 'Não percebi o que se passava.'],
            ['third person', 'a view from outside', 'A Ana não percebeu o que se passava.'],
            ['omniscient', 'access to every mind', 'A Ana temia o pior; o Marco, pelo contrário, esperava.'],
            ['unreliable', 'a voice that may mislead', 'Eu nunca menti, juro-vos.'],
          ] },
        ],
        [
          { t: 'text', md: '**O tom** (tone) is the writer’s attitude: *sério, nostálgico, irónico, melancólico, distante*. **A ironia** says one thing and means another: *Que lindo dia!*, said in the rain. It can also be a gap between what the characters believe and what the reader knows. To judge tone, look at **word choice** (*gélido* versus *fresco*), **rhythm** (short sentences feel tense) and **register** (a very formal word in a trivial situation can be funny).' },
          { t: 'tip', art: 'ghost', md: 'To decide whether a narrator is reliable, ask: **does the narrator contradict themselves? Do other characters see things differently? Does the narrator defend themselves too much?** If so, the voice may be unreliable.' },
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: '“Naquela noite não percebi o que se passava.” A voz narrativa é ___.', o: ['na primeira pessoa', 'na terceira pessoa', 'omnisciente'], why: '*Percebi* shows the narrator is a character.' },
            { q: '“Que lindo dia!” — dito debaixo de chuva torrencial — é um exemplo de ___.', o: ['ironia', 'símbolo', 'personificação'], why: 'Saying the opposite of what is meant.' },
            { q: 'Um narrador que se contradiz e se defende demasiado pode ser ___.', o: ['pouco fiável', 'omnisciente', 'neutro'], why: 'An unreliable narrator.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which tone?', groups: ['sério', 'irónico'], explain: ['groups'], items: [
            { s: 'O ministro, com a habitual lucidez, esqueceu o discurso em casa.', g: 1, why: '“Com a habitual lucidez” is ironic here.' },
            { s: 'A notícia da sua morte deixou-nos profundamente abalados.', g: 0, why: 'Serious.' },
            { s: 'Que excelente serviço: apenas duas horas de espera!', g: 1, why: 'Ironic praise.' },
            { s: 'O tribunal proferiu a sentença esta manhã.', g: 0, why: 'Neutral and serious.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite in the third person, using the words given.', items: [
            { q: 'Naquela noite não percebi o que se passava.', cue: 'Naquela noite a Ana', a: ['Naquela noite a Ana não percebeu o que se passava.'], why: 'First person *percebi* becomes third person *percebeu*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Escrever um comentário de texto',
      about: 'Structure a short analysis and quote with care.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'A **comentário de texto** has three parts. The **introdução** names the text, its subject and your main idea: *O excerto conta… e mostra que…* The **desenvolvimento** has two or three paragraphs, each with one point, a short **quotation** and an explanation of its effect. The **conclusão** brings the points together and answers the question: *Em suma, o autor… e assim…* Do not retell the story; **analyse** how it is told.' },
          { t: 'table', caption: 'Structure of a commentary', explain: ['head', 'col0'], head: ['Part', 'What it does', 'Example opening'], rows: [
            ['introdução', 'names the text and states the main idea', 'O excerto conta um regresso e mostra que…'],
            ['desenvolvimento', 'one point per paragraph, with a quotation', 'Em primeiro lugar, a metáfora do rio sugere que…'],
            ['conclusão', 'brings the points together', 'Em suma, o autor usa… para…'],
          ] },
        ],
        [
          { t: 'text', md: 'Quote **briefly**. Put the words between **aspas angulares** («…») and explain them: *Quando escreve «uma casa sem vozes», o autor sugere uma sensação de abandono.* Use a **reporting verb** (*sugere, mostra, sublinha, cria, evoca*) and a **cautious** tone (*parece, pode indicar*). Avoid *gosto* and *é bonito*: say instead *é eficaz porque…*' },
          { t: 'tip', art: 'cactus', md: 'Use the formula **quotation, then effect**. First show the words (*«uma casa sem vozes»*), then say what they do (*cria uma sensação de abandono*). A quotation with no comment is not an analysis.' },
          { t: 'ex', kind: 'choice', h: 'Choose the best option.', items: [
            { q: 'Which sentence is the best analysis?', o: ['Quando escreve «uma casa sem vozes», o autor cria uma sensação de abandono.', 'O autor escreve «uma casa sem vozes» e eu gosto muito.', 'No texto há uma casa sem vozes.'], why: 'Quotation, reporting verb and effect.' },
            { q: 'Which part of the essay states the main idea?', o: ['A introdução', 'O desenvolvimento', 'A conclusão'], why: 'The introduction names the text and the main idea.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Turn the comment into an analysis, using the words given.', items: [
            { q: 'Gosto da frase «uma casa sem vozes».', cue: 'A frase «uma casa sem vozes» cria', a: ['A frase «uma casa sem vozes» cria uma sensação de abandono.', 'A frase «uma casa sem vozes» cria uma atmosfera de silêncio.', 'A frase «uma casa sem vozes» cria uma sensação de vazio.'], why: 'Replace opinion with effect.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'Em ___, o autor usa a imagem da casa vazia para sugerir a perda.', a: ['conclusão', 'suma'], why: 'The closing paragraph.' },
            { q: 'Quando escreve «uma casa sem vozes», o autor ___ uma sensação de abandono.', a: ['cria', 'sugere', 'evoca'], why: 'A reporting verb for effect.' },
            { q: 'A citação deve ficar entre ___ angulares («…»).', a: ['aspas'], why: 'The quotation marks of Portugal.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Um conto e uma nota crítica',
      about: 'Read an invented story extract and a critical note on it.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Um conto e uma nota crítica', md: 'O conto (excerto inventado)\n\nVoltei a casa depois de muitos anos. A porta estava fechada, e eu já não tinha a chave. O jardim parecia dormir debaixo de um céu de chumbo. Naquela noite não percebi o que se passava: sabia apenas que a casa me olhava, como uma pessoa que espera uma resposta. Jurei a mim mesmo que não tinha mudado, e que, se alguém mudara, eram os outros. Que bela receção, pensei, depois de tantos anos!\n\nA nota crítica\n\nO excerto é narrado na primeira pessoa, e esta escolha aproxima-nos do protagonista. A porta fechada é um símbolo daquilo que o narrador perdeu; o «céu de chumbo» é uma imagem de peso e de tristeza. A personificação da casa («me olhava») e a comparação («como uma pessoa que espera uma resposta») sugerem que a verdadeira censura vem do passado. A frase «Que bela receção» é irónica. O tom, por fim, revela um narrador talvez pouco fiável, que jura demasiado que não mudou.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'O narrador fala na primeira pessoa.', a: 't', why: '*Voltei*, *não percebi*.' },
            { q: 'O narrador ainda tem a chave da casa.', a: 'f', why: '«Já não tinha a chave.»' },
            { q: 'A frase «Que bela receção» é irónica.', a: 't', why: 'The door is closed, so it is not a welcome.' },
            { q: 'A casa fica na serra.', a: 'ng', why: 'The place is not given.' },
            { q: 'O crítico acha que o narrador é certamente sincero.', a: 'f', why: 'The critic says he may be unreliable.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does the closed door symbolise?', o: ['What the narrator has lost.', 'A new beginning.', 'A safe place.'], why: 'The critic reads it as a symbol of loss.' },
            { q: 'Which figure is «como uma pessoa que espera uma resposta»?', o: ['A comparison', 'A metaphor', 'An anaphora'], why: 'It uses *como*.' },
            { q: 'What effect does the «céu de chumbo» have?', o: ['It suggests weight and sadness.', 'It describes warm weather.', 'It shows the narrator is happy.'], why: 'An image of weight and sadness.' },
            { q: 'Why might the narrator be unreliable?', o: ['He swears too much that he has not changed.', 'He speaks in the third person.', 'He cannot see the house.'], why: 'He defends himself too much.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the figures.', items: [
            { s: 'A casa [me olhava].', why: 'Personification.' },
            { s: 'Um [céu de chumbo].', why: 'An image of weight.' },
            { s: '[Que bela receção], pensei.', why: 'Irony.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'A porta fechada é um ___ daquilo que o narrador perdeu.', a: ['símbolo'], why: 'An object standing for an idea.' },
            { q: 'A frase «Que bela receção» é ___.', a: ['irónica'], why: 'It means the opposite.' },
            { q: 'O excerto é narrado na primeira ___.', a: ['pessoa'], why: 'First person.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'A porta fechada é um símbolo daquilo que o narrador perdeu.', why: 'A symbol and its meaning.' },
            { a: 'O tom revela um narrador talvez pouco fiável.', why: 'A cautious judgment of tone.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: '“O vento sussurrava entre as árvores.” é uma ___.', o: ['personificação', 'comparação', 'antítese'], why: 'The wind is given a human action.' },
      { q: '“O tempo é um rio.” é uma ___.', o: ['metáfora', 'comparação', 'anáfora'], why: 'One thing is another.' },
      { q: '“Que lindo dia!” debaixo de chuva é ___.', o: ['ironia', 'símbolo', 'imagem'], why: 'The opposite of the truth.' },
      { q: 'Which is the best analytical sentence?', o: ['A imagem do chumbo cria uma sensação de peso.', 'Gosto muito do chumbo.', 'No texto há chumbo.'], why: 'Figure plus effect.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Metaphor or comparison?', groups: ['metáfora', 'comparação'], explain: ['groups'], items: [
      { s: 'O silêncio era um muro.', g: 0, why: 'Metaphor.' },
      { s: 'Corria como o vento.', g: 1, why: 'Comparison.' },
      { s: 'A vida é uma viagem.', g: 0, why: 'Metaphor.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Um objeto que representa uma ideia é um ___.', a: ['símbolo'], why: 'A symbol.' },
      { q: 'Um narrador que pode mentir é pouco ___. (reliable)', a: ['fiável'], why: 'An unreliable narrator.' },
      { q: 'No comentário, a ___ resume os pontos principais.', a: ['conclusão'], why: 'The closing part.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
      { q: 'O tempo corre como um rio.', cue: 'O tempo é', a: ['O tempo é um rio.'], why: 'A comparison becomes a metaphor.' },
      { q: 'Naquela noite não percebi o que se passava.', cue: 'Naquela noite a Ana', a: ['Naquela noite a Ana não percebeu o que se passava.'], why: 'First to third person.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the problem.', items: [
      { s: 'O crítico escreve: «[Gosto] da frase da casa vazia.» (analytical style)', a: ['A frase da casa vazia cria uma sensação de abandono', 'A frase é eficaz porque evoca abandono'], why: 'An analysis explains the effect instead of giving a personal reaction.' },
      { s: 'O tempo [corre como] um rio. (a metaphor, not a comparison)', a: ['é'], why: 'A metaphor says one thing *is* another.' },
    ] },
  ],
};
