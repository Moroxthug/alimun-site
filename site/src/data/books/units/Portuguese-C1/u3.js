// Portuguese C1, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Words that build words',
  goal: 'Understand and create words with prefixes, suffixes and altered forms. Learn diminutives and augmentatives, the main prefixes and suffixes with the hyphen rules of the spelling agreement, parasynthetic verbs and compounds.',
  art: 'nata',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['word formation', 'prefixes', 'suffixes', 'diminutives', 'compounds'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Casinha, casarão, velhote',
      about: 'Understand diminutives, augmentatives and pejoratives.',
      art: 'nata',
      spreads: [
        [
          { t: 'text', md: 'Portuguese changes the size and the **attitude** of a noun with a suffix. The **diminutive** is **-inho** or **-zinho**: **casa** → **casinha**, **café** → **cafezinho**, **pão** → **pãozinho**. It can mean *small*, *dear* or *polite*: **um minutinho**. The **augmentative** is **-ão** or **-zão**: **casa** → **casarão** (a big house), **homem** → **homenzarrão**, **tempo** → **tempão** (a long time). The **pejorative** suffixes are **-aço**, **-eco** and **-ote**: **rico** → **ricaço** (a vulgarly rich man), **livro** → **livreco** (a poor book), **velho** → **velhote** (an old fellow, often kind). Some words have **changed meaning**: **porta** → **portão** (a gate), **caixa** → **caixote** (a bin), **carta** → **cartão** (a card).' },
          { t: 'table', caption: 'Altered nouns', explain: ['head', 'col1'], head: ['Word', 'Altered form', 'Meaning'], rows: [
            ['casa', 'casinha / casarão', 'small house / big house'],
            ['café', 'cafezinho', 'a little coffee, a polite request'],
            ['tempo', 'tempão', 'a long time'],
            ['rico', 'ricaço', 'a vulgarly rich man'],
            ['livro', 'livreco', 'a poor book'],
            ['velho', 'velhote', 'an old fellow'],
            ['porta / caixa / carta', 'portão / caixote / cartão', 'gate / bin / card (new meaning)'],
          ] },
          { t: 'tip', art: 'owl', md: 'The **gender** can change: **a porta** becomes **o portão**, **a caixa** becomes **o caixote**, **a carta** becomes **o cartão**. After **-inho** a noun ending in **-s, -z, -r** or a stressed vowel often takes **-zinho**: **pão → pãozinho**, **café → cafezinho**, **mulher → mulherzinha**. The diminutive is very common in **Brazil** and in **Portugal** for politeness (**um bocadinho**, **um segundinho**). Pejorative suffixes can offend: use them only with friends.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Vivem numa **casinha** junto ao rio.', n: 'A small house.' },
            { s: 'Moram num **casarão** antigo.', n: 'A big house.' },
            { s: 'Esperei um **tempão**.', n: 'A long time.' },
            { s: 'É um **ricaço** que não ajuda ninguém.', n: 'A vulgarly rich man.' },
            { s: 'Fechou o **portão** do jardim.', n: 'A gate: not a big door.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['casarão', 'a big house'],
            ['cafezinho', 'a little coffee'],
            ['velhote', 'an old fellow'],
            ['cartão', 'a card'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the altered form.', items: [
            { q: 'Vivem numa ___ junto ao rio. (casa, small)', a: ['casinha'], why: 'The diminutive of *casa*.' },
            { q: 'Esperei um ___. (tempo, a long time)', a: ['tempão'], why: 'The augmentative of *tempo*.' },
            { q: 'Quer um ___ depois do almoço? (café, small)', a: ['cafezinho'], why: '*Café* takes *-zinho*.' },
            { q: 'Fechou o ___ do jardim. (porta, gate)', a: ['portão'], why: '*Portão* means gate.' },
            { q: 'Guardei o lixo no ___. (caixa, bin)', a: ['caixote'], why: '*Caixote* means bin.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Small, big or pejorative? Sort the words.', groups: ['small', 'big', 'pejorative'], explain: ['groups'], items: [
            { s: 'casinha', g: 0, why: 'The diminutive.' },
            { s: 'cafezinho', g: 0, why: 'The diminutive.' },
            { s: 'casarão', g: 1, why: 'The augmentative.' },
            { s: 'tempão', g: 1, why: 'The augmentative.' },
            { s: 'ricaço', g: 2, why: 'The pejorative.' },
            { s: 'livreco', g: 2, why: 'The pejorative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with an altered form.', items: [
            { q: 'Vivem numa casa pequena.', cue: 'Vivem numa', a: ['Vivem numa casinha.'], why: '*-inha* for small.' },
            { q: 'Esperei muito tempo.', cue: 'Esperei um', a: ['Esperei um tempão.'], why: '*-ão* for big.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Moram num [casinha] enorme. (a big house)', a: ['casarão'], why: 'Big: the augmentative.' },
            { s: 'É um [ricinho] que não ajuda ninguém. (a vulgarly rich man)', a: ['ricaço'], why: 'The pejorative suffix *-aço*.' },
            { s: 'Falámos um [tempinho] enorme, quase duas horas. (a long time)', a: ['tempão'], why: 'A long time: the augmentative.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Vivem numa casinha junto ao rio.', why: 'The diminutive.' },
            { a: 'Esperei um tempão na estação.', why: 'The augmentative.' },
            { a: 'Fechou o portão do jardim.', why: '*Portão* means gate.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Prefixos e sufixos',
      about: 'Build words with prefixes and suffixes and write them correctly.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Prefixes and suffixes build families of words. The prefix **des-** reverses: **fazer** → **desfazer**. **In-** (**im-** before p and b, **ir-** before r, **il-** before l) denies: **possível** → **impossível**, **real** → **irreal**. **Re-** repeats: **fazer** → **refazer**. **Pré-** means *before*: **pré-história**. **Contra-** means *against*: **contradizer**. The suffix **-ção** and **-mento** make nouns from verbs: **informar** → **informação**, **pagar** → **pagamento**. **-dade** makes nouns from adjectives: **feliz** → **felicidade**. **-ável / -ível** mean *can be*: **confortável**. **-oso** means *full of*: **generoso**.' },
          { t: 'table', caption: 'Prefixes and suffixes', explain: ['head', 'col1'], head: ['Element', 'Meaning', 'Example'], rows: [
            ['des-', 'the opposite', 'desfazer, desigual'],
            ['in- / im- / ir-', 'not', 'impossível, irreal'],
            ['re-', 'again', 'refazer, reescrever'],
            ['pré- / pós-', 'before / after', 'pré-história, pós-guerra'],
            ['-ção / -mento', 'a noun from a verb', 'informação, pagamento'],
            ['-dade', 'a noun from an adjective', 'felicidade'],
            ['-ável / -ível', 'can be', 'confortável, possível'],
          ] },
          { t: 'tip', art: 'owl', md: 'The **spelling agreement** (Acordo Ortográfico) has hyphen rules. Use a **hyphen** before **h** and when the prefix ends in the same vowel the word begins with: **anti-higiénico**, **contra-ataque**, **micro-ondas**. With the stressed prefixes **pré-, pós-, pró-**, the hyphen stays: **pré-história**. Before **r** or **s**, double the letter and write **no hyphen**: **antissocial**, **ultrarrápido**, **contrarregra**. **Re-** and **co-** do not take a hyphen: **reescrever**, **coautor**.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Tenho de **refazer** o trabalho.', n: 'Do again.' },
            { s: 'É **impossível** chegar a tempo.', n: '*Im-* before p.' },
            { s: 'O **pagamento** é feito no fim do mês.', n: 'A noun from *pagar*.' },
            { s: 'Ele é um pouco **antissocial**.', n: 'Doubled *s*, no hyphen.' },
            { s: 'Estudei a **pré-história**.', n: 'The hyphen after *pré-*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the prefix with its meaning.', pairs: [
            ['des-', 'the opposite'],
            ['in-', 'not'],
            ['re-', 'again'],
            ['pré-', 'before'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Tenho de ___ o trabalho. (fazer de novo)', a: ['refazer'], why: '*Re-* means again.' },
            { q: 'É ___ chegar a tempo. (possível, not)', a: ['impossível'], why: '*Im-* before p.' },
            { q: 'O ___ é feito no fim do mês. (pagar, noun)', a: ['pagamento'], why: '*-mento* makes a noun.' },
            { q: 'A ___ dele era enorme. (feliz, noun)', a: ['felicidade'], why: '*-dade* makes a noun.' },
            { q: 'Ele é um pouco ___. (social, against)', a: ['antissocial'], why: 'Doubled *s*, no hyphen.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the correct spelling.', items: [
            { q: 'Estudei a ___ na escola.', o: ['pré-história', 'prehistória', 'pré história'], why: '*Pré-* keeps the hyphen.' },
            { q: 'Este produto é ___.', o: ['anti-higiénico', 'antihigiénico', 'anti higiénico'], why: 'A hyphen before *h*.' },
            { q: 'O carro é ___.', o: ['ultrarrápido', 'ultra-rápido', 'ultrarápido'], why: 'Double *r*, no hyphen.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Build a new word.', items: [
            { q: 'Fazer de novo o trabalho.', cue: 'Refazer', a: ['Refazer o trabalho.'], why: '*Re-* + fazer.' },
            { q: 'Não é possível.', cue: 'É', a: ['É impossível.'], why: '*Im-* + possível.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ele é um pouco [anti-social].', a: ['antissocial'], why: 'Before *s*: doubled letter, no hyphen.' },
            { s: 'Estudei a [pré história].', a: ['pré-história'], why: 'The hyphen after *pré-*.' },
            { s: 'Foi [possível] chegar a tempo, por isso desistiu. (not)', a: ['impossível'], why: '*Im-* before p.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Tenho de refazer o trabalho todo.', why: '*Re-* means again.' },
            { a: 'O pagamento é feito no fim do mês.', why: '*-mento* makes a noun.' },
            { a: 'Ele é um pouco antissocial.', why: 'Doubled *s*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Verbos parassintéticos e compostos',
      about: 'Understand parasynthetic verbs and compounds, and guess words from their parts.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A **parasynthetic verb** (verbo parassintético) is built from an adjective or a noun with a **prefix and a suffix at the same time**: **branco** → **embranquecer** (*to turn white*), **triste** → **entristecer** (*to sadden*), **largo** → **alargar** (*to widen*), **noite** → **anoitecer** (*night falls*), **manhã** → **amanhecer** (*day breaks*). **Compounds** join two words: **guarda-chuva** (*umbrella*), **arranha-céus** (*skyscraper*), **girassol** (*sunflower*), **passatempo** (*pastime*), **pontapé** (*a kick*). The plural of a compound with a hyphen follows rules: **guarda-chuvas, arranha-céus**. **Loanwords** keep their form or adapt: **o email, o design, o stresse, o futebol, o stand**.' },
          { t: 'table', caption: 'Parasynthetic verbs and compounds', explain: ['head', 'col1'], head: ['Word', 'Built from', 'Meaning'], rows: [
            ['embranquecer', 'em- + branco + -ecer', 'to turn white'],
            ['entristecer', 'en- + triste + -ecer', 'to sadden'],
            ['alargar', 'a- + largo + -ar', 'to widen'],
            ['anoitecer', 'a- + noite + -ecer', 'night falls'],
            ['guarda-chuva', 'guardar + chuva', 'umbrella'],
            ['girassol', 'gira + sol', 'sunflower'],
          ] },
          { t: 'tip', art: 'owl', md: 'You can **guess** a word from its parts: **desalinhado** is **des-** + **alinhar** + **-ado**, *untidy, not lined up*. The hyphen in a compound follows the **spelling agreement**: **guarda-chuva** keeps it, **girassol** and **passatempo** do not. In the **singular**, the compound is **o arranha-céus**; the plural is the same. The verbs in **-ecer** can be **intransitive**: **O céu escurece.** **Ela entristeceu ao ouvir a notícia.**' },
        ],
        [
          { t: 'examples', items: [
            { s: 'O céu **escurece** depressa.', n: 'A verb in *-ecer*.' },
            { s: 'Ela **entristeceu** ao ouvir a notícia.', n: 'To become sad.' },
            { s: 'Vamos **alargar** a rua.', n: 'To widen.' },
            { s: 'Leva o **guarda-chuva**, vai chover.', n: 'A compound with a hyphen.' },
            { s: 'O **girassol** vira-se para o sol.', n: 'A compound without a hyphen.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['embranquecer', 'to turn white'],
            ['entristecer', 'to sadden'],
            ['alargar', 'to widen'],
            ['anoitecer', 'night falls'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Ela ___ ao ouvir a notícia. (entristecer, perfeito)', a: ['entristeceu'], why: 'A parasynthetic verb.' },
            { q: 'Vamos ___ a rua. (largo, verb)', a: ['alargar'], why: '*A-* + largo + *-ar*.' },
            { q: 'Leva o ___, vai chover. (umbrella)', a: ['guarda-chuva'], why: 'A compound.' },
            { q: 'O ___ vira-se para o sol. (sunflower)', a: ['girassol'], why: 'A compound without a hyphen.' },
            { q: 'O cabelo dela ___ cedo. (embranquecer, perfeito)', a: ['embranqueceu'], why: 'To turn white.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
            { q: 'Ao fim do dia, ___ e acendemos as luzes.', o: ['anoiteceu', 'amanheceu', 'alargou'], why: '*Anoitecer*: night falls.' },
            { q: 'Ele é muito ___: nunca tem a roupa arrumada.', o: ['desalinhado', 'realinhado', 'alinhável'], why: '*Des-* means the opposite.' },
            { q: 'Os ___ de Lisboa são mais baixos que os de Nova Iorque.', o: ['arranha-céus', 'arranha-céu', 'arranhacéus'], why: 'Plural of the compound.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with a verb in -ecer.', items: [
            { q: 'O céu fica escuro depressa.', cue: 'O céu', a: ['O céu escurece depressa.'], why: '*Escurecer*.' },
            { q: 'Ela ficou triste ao ouvir a notícia.', cue: 'Ela', a: ['Ela entristeceu ao ouvir a notícia.'], why: '*Entristecer*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ela [entristeu] ao ouvir a notícia.', a: ['entristeceu'], why: 'The ending of *-ecer* verbs.' },
            { s: 'Vamos [larguar] a rua.', a: ['alargar'], why: 'The parasynthetic verb from *largo*.' },
            { s: 'Leva o [guardachuva], vai chover.', a: ['guarda-chuva'], why: 'This compound keeps its hyphen.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'O céu escurece muito depressa.', why: 'A verb in *-ecer*.' },
            { a: 'Leva o guarda-chuva, vai chover.', why: 'A compound.' },
            { a: 'Ela entristeceu ao ouvir a notícia.', why: 'A parasynthetic verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Como o português muda',
      about: 'Read an essay about how Portuguese builds new words.',
      art: 'nata',
      spreads: [
        [
          { t: 'reading', title: 'Como o português muda', md: 'A língua portuguesa não para de crescer. Cada geração inventa palavras, pede outras emprestadas e dá novo sentido às antigas.\n\nMuitas palavras novas nascem de sufixos e prefixos. Um jovem pode dizer que uma conversa foi um tempão, que o café é um cafezinho rápido e que um colega é um pouco antissocial. Dizemos refazer, desfazer e reescrever sem pensar que estamos a construir palavras. Os verbos como entristecer, embranquecer e anoitecer nascem de um adjetivo ou de um nome, com um prefixo e um sufixo ao mesmo tempo.\n\nOutras palavras vêm de longe. O futebol, o design e o email chegaram de outras línguas, e hoje ninguém os estranha. Já o guarda-chuva, o arranha-céus e o girassol mostram como duas palavras podem fundir-se numa só.\n\nÀs vezes, a mudança está no sentido. A porta é a entrada da casa, mas o portão é a entrada do jardim; a carta vai pelo correio, mas o cartão está na carteira. A língua vive, e quem a aprende deve ouvir, ler e perguntar.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'A língua portuguesa não para de crescer.', a: 't', why: '*Não para de crescer.*' },
            { q: 'Os verbos como entristecer nascem de um adjetivo, com prefixo e sufixo.', a: 't', why: '*Com um prefixo e um sufixo ao mesmo tempo.*' },
            { q: 'O futebol e o email chegaram de outras línguas.', a: 't', why: '*Chegaram de outras línguas.*' },
            { q: 'O portão é a entrada da casa.', a: 'f', why: '*O portão é a entrada do jardim.*' },
            { q: 'O cartão está na carteira.', a: 't', why: '*O cartão está na carteira.*' },
            { q: 'O português é falado em oito países.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Como nasce uma palavra como guarda-chuva?', o: ['De duas palavras juntas.', 'De um sufixo.', 'De uma língua estrangeira.'], why: '*Duas palavras podem fundir-se numa só.*' },
            { q: 'O que mostra o exemplo da porta e do portão?', o: ['Uma mudança de sentido.', 'Um erro de ortografia.', 'Uma palavra emprestada.'], why: '*A mudança está no sentido.*' },
            { q: 'O que deve fazer quem aprende a língua?', o: ['Ouvir, ler e perguntar.', 'Só ler gramáticas.', 'Evitar palavras novas.'], why: 'The last sentence.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the altered words and the prefixed words.', items: [
            { s: 'Uma conversa foi [um tempão], o café é [um cafezinho] rápido.', why: 'An augmentative and a diminutive.' },
            { s: 'Dizemos [refazer], [desfazer] e [reescrever] sem pensar.', why: 'Prefixes *re-* and *des-*.' },
            { s: 'Um colega é um pouco [antissocial]. O [guarda-chuva] mostra como duas palavras se fundem.', why: 'A prefixed word and a compound.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'O café é um ___ rápido. (café, small)', a: ['cafezinho'], why: 'The diminutive.' },
            { q: 'Dizemos ___, desfazer e reescrever. (fazer de novo)', a: ['refazer'], why: '*Re-* means again.' },
            { q: 'A porta é a entrada da casa, mas o ___ é a entrada do jardim.', a: ['portão'], why: 'A change of meaning.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'A língua portuguesa não para de crescer.', why: 'The first sentence of the essay.' },
            { a: 'Cada geração inventa palavras e pede outras emprestadas.', why: 'How a language grows.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Esperei um ___. (a long time)', o: ['tempão', 'tempinho', 'tempaço'], why: 'The augmentative.' },
      { q: 'É ___ chegar a tempo. (not possible)', o: ['impossível', 'dispossível', 'repossível'], why: '*Im-* before p.' },
      { q: 'Estudei a ___ na escola.', o: ['pré-história', 'prehistória', 'pré história'], why: '*Pré-* keeps the hyphen.' },
      { q: 'Ela ___ ao ouvir a notícia.', o: ['entristeceu', 'entristeu', 'entristou'], why: 'A verb in *-ecer*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Moram num ___ antigo. (casa, big)', a: ['casarão'], why: 'The augmentative.' },
      { q: 'Tenho de ___ o trabalho. (fazer de novo)', a: ['refazer'], why: '*Re-* means again.' },
      { q: 'Leva o ___, vai chover. (umbrella)', a: ['guarda-chuva'], why: 'A compound.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['portão', 'a gate'],
      ['caixote', 'a bin'],
      ['cartão', 'a card'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with a verb in -ecer.', items: [
      { q: 'O céu fica escuro depressa.', cue: 'O céu', a: ['O céu escurece depressa.'], why: '*Escurecer*.' },
      { q: 'Vivem numa casa pequena.', cue: 'Vivem numa', a: ['Vivem numa casinha.'], why: 'The diminutive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Ele é um pouco [anti-social].', a: ['antissocial'], why: 'Doubled *s*, no hyphen.' },
      { s: 'Vamos [larguar] a rua.', a: ['alargar'], why: 'The parasynthetic verb.' },
    ] },
  ],
};
