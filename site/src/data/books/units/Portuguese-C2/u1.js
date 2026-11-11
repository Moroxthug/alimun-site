// Portuguese C2, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Precision and nuance',
  goal: 'Choose the exact word for the exact shade of meaning. Learn near-synonyms and their connotations, collocations and fixed pairs, and how euphemism and litotes soften a message.',
  art: 'nata',
  tags: { skills: ['vocabulary', 'reading', 'writing'], topics: ['near-synonyms', 'connotation', 'collocations', 'fixed pairs', 'euphemism', 'litotes'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Olhar, fitar, contemplar',
      about: 'Tell near-synonyms apart by their shade of meaning and feeling.',
      art: 'nata',
      spreads: [
        [
          { t: 'text', md: 'At C2, two words that seem to mean the same are almost never equal. Each carries a **shade of meaning** and a **feeling** (its *conotação*). Take verbs of looking. **Olhar** is neutral: *Olhou para o relógio.* **Fitar** means to look steadily, often with intensity: *Fitou-me sem dizer nada.* **Observar** is careful and attentive: *Observou o comportamento das abelhas.* **Contemplar** is to gaze with admiration or calm: *Contemplou o pôr do sol.* **Espreitar** is to peek, often in secret: *Espreitou pela janela.*' },
          { t: 'table', caption: 'Verbs of looking', explain: ['head', 'col0'], head: ['Verb', 'Shade of meaning', 'Example'], rows: [
            ['olhar', 'neutral', 'Olhou para o relógio.'],
            ['fitar', 'steady, intense', 'Fitou-me sem dizer nada.'],
            ['observar', 'careful, attentive', 'Observou o comportamento das abelhas.'],
            ['contemplar', 'admiring, calm', 'Contemplou o pôr do sol.'],
            ['espreitar', 'secret, quick', 'Espreitou pela janela.'],
          ] },
        ],
        [
          { t: 'text', md: 'The same happens with adjectives. *Magro* is neutral. **Esbelto** is slim and elegant, a compliment. **Franzino** suggests someone frail and small. **Esquelético** is very thin, almost unhealthy, and usually negative. And the same fact can be shown with **different feeling**: a person who does not change their mind is *firme* (positive), *teimoso* (negative) or *cabeçudo* (informal and a little critical). Choosing among them is choosing how your reader will see the person.' },
          { t: 'table', caption: 'Describing thin people', explain: ['head', 'col0'], head: ['Adjective', 'Feeling', 'Example'], rows: [
            ['magro', 'neutral', 'É um rapaz magro.'],
            ['esbelto', 'positive', 'A bailarina é alta e esbelta.'],
            ['franzino', 'frail', 'Era um menino franzino para a idade.'],
            ['esquelético', 'negative, unhealthy', 'Ficou esquelético depois da doença.'],
          ] },
          { t: 'tip', art: 'nata', md: 'When two words seem alike, ask three questions: **how intense is it, is it positive or negative, and how formal is it?** If you cannot answer, look the word up in a dictionary of synonyms (*dicionário de sinónimos*) and read the examples before you use it.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the word that fits the shade of meaning.', items: [
            { q: 'Ficámos a ___ o mar durante uma hora, em silêncio e admirados.', o: ['contemplar', 'espreitar', 'fitar'], why: '*Contemplar*: gaze with calm and admiration.' },
            { q: 'A criança ___ pela porta entreaberta para ver os presentes.', o: ['espreitou', 'contemplou', 'observou'], why: '*Espreitar*: peek in secret.' },
            { q: 'A bailarina, alta e ___, atravessou o palco.', o: ['esbelta', 'esquelética', 'franzina'], why: '*Esbelto* is a compliment.' },
            { q: 'O cientista ___ o comportamento das aves durante meses.', o: ['observou', 'espreitou', 'contemplou'], why: '*Observar*: careful and attentive.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Is the word positive or negative?', groups: ['positive', 'negative'], explain: ['groups'], items: [
            { s: 'esbelto', g: 0, why: 'A compliment.' },
            { s: 'esquelético', g: 1, why: 'Thin to the point of illness.' },
            { s: 'firme', g: 0, why: 'A positive way to say someone does not change their mind.' },
            { s: 'teimoso', g: 1, why: 'A negative way to say the same.' },
            { s: 'contemplar', g: 0, why: 'Gazing with admiration.' },
            { s: 'cabeçudo', g: 1, why: 'Critical and informal.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Colocações e pares fixos',
      about: 'Learn which words naturally go together.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A **collocation** (*colocação*) is a pair of words that native speakers choose together without thinking. In Portuguese we say **profundamente comovido** (not *fortemente comovido*), **gravemente ferido** (not *muito ferido* in careful writing), **um erro crasso** and **uma generalização precipitada**. The other word may be possible in grammar, but it sounds wrong. Collocations are the secret of natural, precise writing: the right adverb with the right adjective.' },
          { t: 'table', caption: 'Collocations', explain: ['head', 'col0'], head: ['Collocation', 'Meaning', 'Example'], rows: [
            ['profundamente comovido', 'deeply moved', 'Ficou profundamente comovido com o gesto.'],
            ['gravemente ferido', 'seriously injured', 'O condutor ficou gravemente ferido.'],
            ['um erro crasso', 'a gross mistake', 'Foi um erro crasso confiar nele.'],
            ['uma generalização precipitada', 'a hasty generalisation', 'Dizer isso é uma generalização precipitada.'],
            ['uma decisão ponderada', 'a carefully weighed decision', 'Tomou uma decisão ponderada.'],
          ] },
        ],
        [
          { t: 'text', md: 'There are also **fixed pairs** (*expressões fixas*), where the words never change. **Mais cedo ou mais tarde**: *Mais cedo ou mais tarde, a verdade aparece.* **São e salvo**: *Chegaram são e salvos a casa.* **Nem mais nem menos**: *Custou nem mais nem menos que mil euros.* **Pouco a pouco**: *Pouco a pouco, habituou-se à cidade.* Learn them as one block. If you change a word, the expression stops working.' },
          { t: 'tip', art: 'owl', md: 'Keep a small notebook of collocations. When you read, write down not only new words but the **words next to them**: *erro* with *crasso*, *ferido* with *gravemente*. This will improve your writing faster than a long list of single words.' },
          { t: 'ex', kind: 'match', h: 'Match the two halves of the expression.', pairs: [
            ['mais cedo', 'ou mais tarde'],
            ['são', 'e salvo'],
            ['pouco', 'a pouco'],
            ['nem mais', 'nem menos'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the natural collocation.', items: [
            { q: 'O motociclista ficou ___ ferido no acidente.', o: ['gravemente', 'fortemente', 'altamente'], why: '*Gravemente ferido* is the fixed collocation.' },
            { q: 'Foi um erro ___ não ter lido o contrato.', o: ['crasso', 'grosso', 'forte'], why: '*Erro crasso*.' },
            { q: 'Dizer que todos os jovens são iguais é uma generalização ___.', o: ['precipitada', 'rápida', 'veloz'], why: '*Generalização precipitada*.' },
            { q: 'Ficámos ___ comovidos com a homenagem.', o: ['profundamente', 'altamente', 'pesadamente'], why: '*Profundamente comovido*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the fixed expression.', items: [
            { q: 'Mais cedo ou mais ___, a verdade aparece.', a: ['tarde'], why: '*Mais cedo ou mais tarde*.' },
            { q: 'Depois da tempestade, chegaram são e ___ a casa.', a: ['salvos', 'salvo'], why: '*São e salvo*.' },
            { q: '___ a pouco, habituou-se à nova cidade.', a: ['Pouco'], why: '*Pouco a pouco* = gradually.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Eufemismo e litotes',
      about: 'Soften a message with care, and know when softening hides the truth.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Sometimes we choose a gentler word on purpose. This is **euphemism** (*eufemismo*). Instead of *morreu* we may say **faleceu** (formal) or **partiu** or **deixou-nos** (gentle). Instead of *despedido* a company may write **dispensado** or **cessou funções**. A euphemism is kind when it protects feelings: *Ele já não está entre nós.* It is misleading when it hides a fact the reader needs: *redimensionamento de pessoal* for *despedimento em massa*.' },
          { t: 'table', caption: 'Euphemisms', explain: ['head', 'col0'], head: ['Direct', 'Softer', 'Use'], rows: [
            ['morreu', 'faleceu, partiu, deixou-nos', 'kind when speaking of a loss'],
            ['despedido', 'dispensado, cessou funções', 'official, may hide the facts'],
            ['velho', 'idoso, de idade avançada', 'polite'],
            ['mentiu', 'faltou à verdade', 'diplomatic'],
          ] },
        ],
        [
          { t: 'text', md: '**Litotes** (*litote*) is a different kind of softening: we say less to mean more, usually by **denying the opposite**. **Não é mau** means *it is quite good*. **Não é pouco** means *it is a lot*: *Pagou não pouco dinheiro por aquele quadro.* **Não gostei nada** means *I disliked it strongly* (in Portugal, *nada* after the verb makes the negation stronger). Litotes is polite, a little ironic and very Portuguese. The tone matters: *Não está mal* may be modest praise or cool disappointment.' },
          { t: 'tip', art: 'ghost', md: 'Before using a softer word, ask: **does it protect someone, or does it hide something?** In a condolence message, *partiu* is kind. In a company report, a euphemism for dismissals can look dishonest.' },
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: '“O jantar não esteve mau.” O que quer dizer?', o: ['Esteve razoavelmente bom.', 'Esteve péssimo.', 'Não houve jantar.'], why: 'Litotes: denying the opposite to praise lightly.' },
            { q: 'Qual é o eufemismo mais suave para “morreu”?', o: ['Partiu', 'Acabou', 'Terminou'], why: '*Partiu* is a gentle euphemism.' },
            { q: '“Pagou não pouco dinheiro” significa que pagou ___.', o: ['muito dinheiro', 'pouco dinheiro', 'nenhum dinheiro'], why: 'Litotes: *não pouco* = a lot.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with a softer expression, using the words given.', items: [
            { q: 'O senhor Silva morreu ontem.', cue: 'O senhor Silva faleceu', a: ['O senhor Silva faleceu ontem.'], why: '*Faleceu* is the formal, respectful verb.' },
            { q: 'O teste foi bom.', cue: 'O teste não', a: ['O teste não foi mau.'], why: 'Litotes: a modest way of praising.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Is the expression kind or misleading in the situation?', groups: ['kind', 'misleading'], explain: ['groups'], items: [
            { s: 'Ele deixou-nos esta manhã, numa mensagem de condolências.', g: 0, why: 'It protects feelings.' },
            { s: 'A empresa vai proceder a um redimensionamento, num relatório que omite os despedimentos.', g: 1, why: 'It hides a fact.' },
            { s: 'Faltou à verdade, num comentário diplomático.', g: 0, why: 'A polite way to say someone lied.' },
            { s: 'Houve ajustamentos de pessoal, sem se dizer quantos foram dispensados.', g: 1, why: 'It avoids the key number.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'As palavras que escolhemos',
      about: 'Read an essay on how we choose our words.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'As palavras que escolhemos', md: 'Quando era miúda, a minha avó dizia que as palavras são como ferramentas: servem todas para trabalhar, mas cada uma serve melhor para um trabalho. Só mais tarde percebi quanta razão tinha.\n\nTome-se o simples ato de olhar. Podemos olhar para uma paisagem, mas também podemos contemplá-la, e então já há tempo, admiração e silêncio. Podemos fitar alguém, e então há desafio ou ternura. Podemos espreitar, e então há segredo. O mesmo gesto, mas quatro histórias diferentes.\n\nO mesmo acontece com as pessoas. Dizer que alguém é teimoso não é o mesmo que dizer que é firme, embora ambos descrevam quem não muda de ideias. O primeiro julga; o segundo elogia. O escritor atento sabe que cada adjetivo é uma pequena decisão sobre o leitor.\n\nHá também as palavras que suavizam. Dizemos que alguém partiu, em vez de dizer que morreu, e fazemos bem: é uma delicadeza. Mas há suavizações que escondem, e essas pedem cuidado. Uma empresa que fala de ajustamentos quando quer dizer despedimentos não está a ser delicada; está a esconder.\n\nPor isso, mais cedo ou mais tarde, quem escreve aprende uma lição simples: não existem sinónimos perfeitos. Existe apenas a palavra certa, que é a que diz exatamente o que queremos dizer, e nada mais.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'A avó da autora comparava as palavras a ferramentas.', a: 't', why: '«As palavras são como ferramentas.»' },
            { q: 'Para a autora, “teimoso” e “firme” têm exatamente o mesmo sentido.', a: 'f', why: 'The first judges, the second praises.' },
            { q: 'A autora condena todos os eufemismos.', a: 'f', why: 'She finds *partiu* kind; only the concealing ones need care.' },
            { q: 'A avó da autora era professora de português.', a: 'ng', why: 'Her profession is not mentioned.' },
            { q: 'A autora conclui que não há sinónimos perfeitos.', a: 't', why: '«Não existem sinónimos perfeitos.»' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does «contemplar» add to «olhar»?', o: ['Time, admiration and silence.', 'Speed and secrecy.', 'Anger and challenge.'], why: 'The essay says so in the second paragraph.' },
            { q: 'Why are «teimoso» and «firme» different?', o: ['One judges and the other praises.', 'One is longer.', 'One is only for children.'], why: 'The third paragraph.' },
            { q: 'When is a euphemism a problem, according to the author?', o: ['When it hides a fact.', 'When it is short.', 'When it is old.'], why: '«Há suavizações que escondem.»' },
            { q: 'What does the author say a writer learns?', o: ['There are no perfect synonyms.', 'Long words are best.', 'Adjectives are unnecessary.'], why: 'The last paragraph.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the collocations and fixed pairs.', items: [
            { s: '[mais cedo ou mais tarde], quem escreve aprende uma lição simples.', why: 'A fixed pair.' },
            { s: 'Podemos [fitar] alguém, e então há desafio ou ternura.', why: 'A verb of looking with intensity.' },
            { s: 'Uma empresa que fala de [ajustamentos] quando quer dizer despedimentos.', why: 'A concealing euphemism.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Podemos olhar para uma paisagem, mas também podemos ___-la.', a: ['contemplá'], why: '*Contemplá-la*, with a hyphen and the pronoun.' },
            { q: 'O mesmo gesto, mas quatro ___ diferentes.', a: ['histórias'], why: 'Four different stories.' },
            { q: 'Dizemos que alguém ___, em vez de dizer que morreu.', a: ['partiu'], why: 'A gentle euphemism.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Não existem sinónimos perfeitos, só a palavra certa.', why: 'The conclusion of the essay.' },
            { a: 'O escritor atento sabe que cada adjetivo é uma decisão.', why: 'A key idea.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'Ficámos a ___ o pôr do sol, em silêncio e admirados.', o: ['contemplar', 'espreitar', 'fitar'], why: 'Calm admiration.' },
      { q: 'O condutor ficou ___ ferido no acidente.', o: ['gravemente', 'fortemente', 'altamente'], why: 'Fixed collocation.' },
      { q: '“O filme não esteve mau.” significa que o filme foi ___.', o: ['razoavelmente bom', 'péssimo', 'inexistente'], why: 'Litotes.' },
      { q: 'Qual é o eufemismo gentil para “morreu”?', o: ['Partiu', 'Terminou', 'Acabou'], why: 'Gentle and respectful.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Positive or negative?', groups: ['positive', 'negative'], explain: ['groups'], items: [
      { s: 'esbelto', g: 0, why: 'A compliment.' },
      { s: 'esquelético', g: 1, why: 'Unhealthy thinness.' },
      { s: 'firme', g: 0, why: 'Positive.' },
      { s: 'teimoso', g: 1, why: 'Negative.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Mais cedo ou mais ___, a verdade aparece.', a: ['tarde'], why: 'Fixed pair.' },
      { q: 'Foi um erro ___ confiar naquele contrato.', a: ['crasso'], why: '*Erro crasso*.' },
      { q: 'Chegaram são e ___ depois da viagem.', a: ['salvos', 'salvo'], why: 'Fixed pair.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite with a softer expression, using the words given.', items: [
      { q: 'O senhor Silva morreu ontem.', cue: 'O senhor Silva faleceu', a: ['O senhor Silva faleceu ontem.'], why: 'Formal and respectful.' },
      { q: 'O teste foi bom.', cue: 'O teste não', a: ['O teste não foi mau.'], why: 'Litotes.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the problem.', items: [
      { s: 'O motociclista ficou [fortemente] ferido no acidente.', a: ['gravemente'], why: 'The natural collocation is *gravemente ferido*.' },
      { s: 'Dizer isso é uma generalização [rápida].', a: ['precipitada'], why: '*Generalização precipitada* is the collocation.' },
    ] },
  ],
};
