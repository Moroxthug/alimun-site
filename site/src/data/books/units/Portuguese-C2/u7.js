// Portuguese C2, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Rhetoric and persuasion',
  goal: 'Understand how speeches persuade and use the devices yourself. Learn the three appeals, the main devices of the speech, and how framing and loaded words shape a message.',
  art: 'parrot',
  tags: { skills: ['reading', 'listening', 'speaking'], topics: ['rhetoric', 'persuasion', 'ethos pathos logos', 'rhetorical devices', 'framing', 'loaded language'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Ethos, pathos, logos',
      about: 'See how a speaker builds trust, feeling and argument.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A speaker persuades in three ways. **O ethos** is trust: the audience believes the speaker is honest and competent (*Trabalho neste bairro há vinte anos*). **O pathos** is feeling: the speaker moves the audience with a story or an image (*Pensem numa mãe que espera, todas as noites, pelo último autocarro*). **O logos** is reasoning: the speaker gives facts, figures and logic (*O transporte público custa menos do que o trânsito: os dados mostram-no*). A strong speech uses all three. Too much *pathos* sounds like manipulation; too much *logos* sounds cold.' },
          { t: 'table', caption: 'The three appeals', explain: ['head', 'col0'], head: ['Appeal', 'What it does', 'Example'], rows: [
            ['ethos', 'builds trust in the speaker', 'Trabalho neste bairro há vinte anos.'],
            ['pathos', 'moves the feelings of the audience', 'Pensem numa mãe que espera pelo último autocarro.'],
            ['logos', 'gives facts and logic', 'Os dados mostram uma descida de vinte por cento.'],
          ] },
        ],
        [
          { t: 'text', md: 'To read a speech critically, ask three questions. **Why should I trust this speaker?** (ethos) **How does this make me feel, and why?** (pathos) **Are the facts and the logic sound?** (logos) A speech that works well on feeling but gives no evidence deserves a second look. In Portuguese, you can say *apela aos sentimentos* (it appeals to feelings), *apoia-se em dados* (it relies on data) and *procura ganhar a confiança do público* (it tries to win the audience’s trust).' },
          { t: 'tip', art: 'parrot', md: 'Do not think of rhetoric as something negative. Good speakers, teachers and writers all use it. The skill is to **notice** it, so that you can enjoy a good speech without being carried away by it.' },
          { t: 'ex', kind: 'sort', h: 'Ethos, pathos or logos?', groups: ['ethos', 'pathos', 'logos'], explain: ['groups'], items: [
            { s: 'Dirigi este projeto durante quinze anos.', g: 0, why: 'Builds trust.' },
            { s: 'Imaginem as crianças à espera, ao frio.', g: 1, why: 'Moves feelings.' },
            { s: 'O custo desceu doze por cento.', g: 2, why: 'Gives a figure.' },
            { s: 'Sou uma pessoa honesta e vocês sabem-no.', g: 0, why: 'Appeals to character.' },
            { s: 'Ainda vejo o seu sorriso, naquele dia.', g: 1, why: 'Appeals to emotion.' },
            { s: 'Se a despesa aumentar, o orçamento não aguenta.', g: 2, why: 'A logical argument.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Um orador diz: “Como médico, vi milhares de doentes.” Isto é sobretudo ___.', o: ['ethos', 'pathos', 'logos'], why: 'He builds trust through experience.' },
            { q: 'Um orador descreve uma família sem casa e diz: “Imaginem que eram vocês.” Isto é sobretudo ___.', o: ['pathos', 'ethos', 'logos'], why: 'It moves feelings.' },
            { q: 'Um orador mostra um gráfico com os dados dos últimos dez anos. Isto é sobretudo ___.', o: ['logos', 'pathos', 'ethos'], why: 'Facts and figures.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence so that it appeals to feelings, using the words given.', items: [
            { q: 'Muitos idosos vivem sozinhos.', cue: 'Pensem em', a: ['Pensem em quantos idosos vivem sozinhos.', 'Pensem num idoso que vive sozinho.'], why: 'An invitation to imagine adds pathos.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Anáfora, antítese, gradação',
      about: 'Recognise the devices that give a speech its rhythm.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'Speeches use **devices** (*figuras de retórica*) that make words memorable. **A anáfora** repeats the first words of several sentences: *Queremos escolas abertas. Queremos ruas seguras. Queremos um futuro para todos.* **A antítese** sets two opposite ideas side by side: *Não é o fim, é o princípio.* **O quiasmo** reverses the order of two phrases: *Não se vive para comer, come-se para viver.* **A gradação** (climax) raises the force step by step: *Um passo, um caminho, uma viagem, uma vida.* **A pergunta retórica** asks a question that needs no answer: *Podemos mesmo ficar a ver?*' },
          { t: 'table', caption: 'Rhetorical devices', explain: ['head', 'col0'], head: ['Device', 'What it does', 'Example'], rows: [
            ['anáfora', 'repeats the opening words', 'Queremos escolas abertas. Queremos ruas seguras.'],
            ['antítese', 'sets two opposites together', 'Não é o fim, é o princípio.'],
            ['quiasmo', 'reverses the order of two phrases', 'Não se vive para comer, come-se para viver.'],
            ['gradação', 'raises the force step by step', 'Um passo, um caminho, uma viagem, uma vida.'],
            ['pergunta retórica', 'asks a question with no answer needed', 'Podemos mesmo ficar a ver?'],
          ] },
        ],
        [
          { t: 'text', md: 'Another device is the **extended metaphor** (*metáfora continuada*): one image runs through the speech. A speaker may call a city *um barco*: *Estamos todos no mesmo barco. Se alguém não rema, o barco abranda. Temos de decidir o rumo juntos.* The metaphor gives unity and makes an abstract idea concrete. The danger is to push it too far, so that it becomes funny or false.' },
          { t: 'tip', art: 'dragon', md: 'To spot a device, look for **repetition** (anaphora), **opposites** (antithesis), **a reversed order** (chiasmus), **a rising list** (gradation) or **a question without an answer** (rhetorical question).' },
          { t: 'ex', kind: 'match', h: 'Match the example to the device.', pairs: [
            ['Queremos escolas. Queremos casas. Queremos trabalho.', 'anáfora'],
            ['Não é um adeus, é um até já.', 'antítese'],
            ['Podemos mesmo ficar a ver?', 'pergunta retórica'],
            ['Uma semente, uma árvore, um bosque, uma floresta.', 'gradação'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Name the device.', items: [
            { q: '“Estamos aqui para recordar, estamos aqui para construir, estamos aqui para mudar.”', o: ['anáfora', 'antítese', 'quiasmo'], why: '“Estamos aqui para” opens each clause.' },
            { q: '“Não perguntes o que os outros podem fazer por ti, pergunta o que tu podes fazer pelos outros.”', o: ['quiasmo', 'gradação', 'pergunta retórica'], why: 'The two halves reverse the order of their elements.' },
            { q: '“Calar ou falar, sofrer ou reagir: eis a escolha.”', o: ['antítese', 'anáfora', 'gradação'], why: 'Opposites set side by side.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite as a rhetorical question, using the words given.', items: [
            { q: 'Não podemos ficar indiferentes.', cue: 'Podemos mesmo', a: ['Podemos mesmo ficar indiferentes?'], why: 'A statement becomes a rhetorical question.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Palavras que pesam: a forma de apresentar os factos',
      about: 'Read critically: framing, loaded words and bias.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The same event can be told in two ways. This is **framing** (*enquadramento*). Compare: *A câmara cortou as verbas da biblioteca* and *A câmara reduziu a despesa com a cultura*. The facts are the same, but the first sounds like a loss, the second like good management. **Loaded words** (*palavras carregadas*) carry a judgment: *uma multidão* is neutral, *uma turba* feels negative, *um povo* feels noble. *Um corte* is harsher than *uma racionalização*.' },
          { t: 'table', caption: 'Neutral and loaded words', explain: ['head', 'col0'], head: ['Neutral', 'Loaded (positive)', 'Loaded (negative)'], rows: [
            ['a redução da despesa', 'a racionalização', 'o corte'],
            ['um grupo de pessoas', 'um povo', 'uma turba'],
            ['uma mudança', 'uma viragem', 'uma rutura'],
            ['um cidadão', 'um contribuinte exemplar', 'um evasor'],
          ] },
        ],
        [
          { t: 'text', md: 'To read critically, ask: **who is speaking, and what do they gain? What is stressed, and what is left out? Which words carry a judgment?** Look for **generalisations** (*todos, ninguém, sempre*), **false choices** (*ou estão connosco ou contra nós*) and **appeals to fear**. A good reader does not reject every message; they simply **read twice**: once for the message, once for the way it is built.' },
          { t: 'tip', art: 'cat', md: 'Try to **rewrite** a loaded sentence in neutral words. If the meaning changes a lot, the original relied on the loaded words. This simple test shows you where the persuasion is.' },
          { t: 'ex', kind: 'sort', h: 'Neutral or loaded?', groups: ['neutral', 'loaded'], explain: ['groups'], items: [
            { s: 'um grupo de manifestantes', g: 0, why: 'Neutral.' },
            { s: 'uma turba de arruaceiros', g: 1, why: 'A negative judgment.' },
            { s: 'a redução da despesa', g: 0, why: 'Neutral.' },
            { s: 'o corte selvagem', g: 1, why: 'A strong negative judgment.' },
            { s: 'uma mudança', g: 0, why: 'Neutral.' },
            { s: 'uma viragem histórica', g: 1, why: 'A positive judgment.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Which phrase sounds most negative?', o: ['o corte das verbas', 'a redução das verbas', 'a revisão das verbas'], why: '*Corte* is the harshest.' },
            { q: 'Which phrase is the most neutral?', o: ['um grupo de pessoas', 'uma turba de pessoas', 'um povo'], why: '*Um grupo* carries no judgment.' },
            { q: '“Ou estão connosco ou contra nós” is an example of ___.', o: ['a false choice', 'an anaphora', 'a gradation'], why: 'It offers only two options.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite in neutral words, using the words given.', items: [
            { q: 'A câmara cortou selvaticamente as verbas.', cue: 'A câmara reduziu', a: ['A câmara reduziu as verbas.'], why: 'Removes the loaded words.' },
            { q: 'Uma turba de pessoas invadiu a praça.', cue: 'Um grupo de pessoas', a: ['Um grupo de pessoas chegou à praça.', 'Um grupo de pessoas encheu a praça.'], why: 'A neutral description.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Um discurso e um comentário',
      about: 'Read an invented speech and a commentary on its devices.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Um discurso e um comentário', md: 'O discurso (da presidente da câmara de uma cidade imaginária)\n\nCidadãs e cidadãos, durante vinte anos percorri estas ruas. Vi abrir lojas e vi fechá-las. Vi crianças tornarem-se adultos e adultos tornarem-se avós. Por isso falo-vos com franqueza.\n\nQueremos uma cidade onde se possa andar sem medo. Queremos uma cidade onde cada criança tenha uma escola perto. Queremos uma cidade onde ninguém fique para trás. Isto não é um sonho: os dados do último ano mostram que, onde investimos nos bairros, os furtos desceram quinze por cento.\n\nEstamos todos no mesmo barco. Se alguém não rema, o barco abranda. Podemos mesmo permitir-nos isso? Não é o fim de uma época: é o princípio de uma nova.\n\nO comentário\n\nO discurso usa os três apelos. O ethos nasce da experiência de vinte anos; o pathos, das imagens das crianças e dos avós; o logos, do dado dos quinze por cento. As três frases que começam por «Queremos» formam uma anáfora. «Estamos todos no mesmo barco» abre uma metáfora continuada. A pergunta «Podemos mesmo permitir-nos isso?» é retórica, e a frase final assenta numa antítese. O leitor crítico notará, porém, que o discurso não explica como foram recolhidos os dados.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'A presidente constrói a confiança dizendo que conhece a cidade há vinte anos.', a: 't', why: 'That is the ethos.' },
            { q: 'O discurso não contém qualquer dado.', a: 'f', why: 'It gives a figure: a fifteen per cent fall.' },
            { q: 'A frase “Queremos uma cidade…” é repetida três vezes.', a: 't', why: 'An anaphora.' },
            { q: 'A presidente promete construir dez novas escolas.', a: 'ng', why: 'No such promise is made.' },
            { q: 'O comentador acha o discurso sem defeitos.', a: 'f', why: 'He notes that the data collection is not explained.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Which appeal comes from the figures on theft?', o: ['logos', 'pathos', 'ethos'], why: 'The figure gives logic and evidence.' },
            { q: 'What is the extended metaphor in the speech?', o: ['The city as a boat', 'The city as a garden', 'The city as a house'], why: '«Estamos todos no mesmo barco.»' },
            { q: 'Which device is «Podemos mesmo permitir-nos isso?»', o: ['A rhetorical question', 'An anaphora', 'A chiasmus'], why: 'No answer is expected.' },
            { q: 'What does the commentator criticise?', o: ['The data are not explained.', 'The speech is too long.', 'The speaker is dishonest.'], why: 'The last sentence of the commentary.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the devices.', items: [
            { s: '[Queremos uma cidade] onde se possa andar sem medo. [Queremos uma cidade] onde cada criança tenha uma escola perto.', why: 'Anaphora.' },
            { s: 'Não é [o fim de uma época]: é [o princípio de uma nova].', why: 'Antithesis.' },
            { s: '[Podemos mesmo permitir-nos isso?]', why: 'A rhetorical question.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Estamos todos no mesmo ___.', a: ['barco'], why: 'The extended metaphor.' },
            { q: 'As três frases com «Queremos» formam uma ___.', a: ['anáfora'], why: 'Repetition of the opening words.' },
            { q: 'O dado dos quinze por cento é um exemplo de ___.', a: ['logos'], why: 'Facts and figures.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'O leitor crítico notará que os dados não são explicados.', why: 'A critical reading.' },
            { a: 'Durante vinte anos percorri estas ruas.', why: 'The ethos of the speaker.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: '“Trabalhei num hospital durante trinta anos.” Isto é sobretudo ___.', o: ['ethos', 'pathos', 'logos'], why: 'Trust through experience.' },
      { q: '“Não é o fim, é o princípio.” Esta figura é ___.', o: ['uma antítese', 'uma anáfora', 'uma gradação'], why: 'Two opposites.' },
      { q: 'Which word is the most neutral?', o: ['grupo', 'turba', 'povo'], why: '*Grupo* has no judgment.' },
      { q: '“Ou estão connosco ou contra nós” is ___.', o: ['a false choice', 'a gradation', 'an extended metaphor'], why: 'Only two options are offered.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Which device?', groups: ['anáfora', 'antítese'], explain: ['groups'], items: [
      { s: 'Queremos paz. Queremos trabalho. Queremos justiça.', g: 0, why: 'Repeats the opening words.' },
      { s: 'Não é um adeus, é um até já.', g: 1, why: 'Sets opposites together.' },
      { s: 'Estamos aqui para recordar, estamos aqui para construir.', g: 0, why: 'Repeats the opening words.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Uma semente, uma árvore, um bosque: isto é uma ___.', a: ['gradação'], why: 'A rising list.' },
      { q: 'Podemos mesmo ficar a ver? É uma pergunta ___.', a: ['retórica'], why: 'No answer needed.' },
      { q: 'O ___ move os sentimentos do público.', a: ['pathos'], why: 'Appeal to feeling.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite in neutral words, using the words given.', items: [
      { q: 'A câmara cortou selvaticamente as verbas.', cue: 'A câmara reduziu', a: ['A câmara reduziu as verbas.'], why: 'Neutral.' },
      { q: 'Não podemos ficar indiferentes.', cue: 'Podemos mesmo', a: ['Podemos mesmo ficar indiferentes?'], why: 'A rhetorical question.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the problem.', items: [
      { s: '“Queremos escolas. Queremos casas. Queremos trabalho.” é [um quiasmo].', a: ['uma anáfora'], why: 'Repeated opening words make an anaphora.' },
      { s: 'Uma [turba] de cidadãos assinou a petição. (neutral)', a: ['grupo'], why: '*Turba* is loaded; *grupo* is neutral.' },
    ] },
  ],
};
