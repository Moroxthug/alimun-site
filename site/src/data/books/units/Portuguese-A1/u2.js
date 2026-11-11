// Portuguese A1, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Family and people',
  goal: 'Talk about your family, say how old people are and describe them.',
  art: 'pizza',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['family', 'ter', 'age', 'numbers 20-100', 'possessives', 'adjectives', 'description'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'A minha família',
      about: 'ter, family words and age.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: '**ter** means *to have*. Use it to say what family you have: *Tenho uma irmã e dois irmãos.* Use it also to say your age: *Tenho vinte anos* (literally, I have twenty years). It is irregular, so learn every form.' },
          { t: 'table', caption: 'ter (to have)', quiz: true, head: ['', 'ter'], rows: [
            ['eu', 'tenho'],
            ['tu', 'tens'],
            ['ele / ela / você', 'tem'],
            ['nós', 'temos'],
            ['eles / elas / vocês', 'têm'],
          ] },
          { t: 'tip', art: 'owl', md: 'Look at the accent: **ele tem** (one person) and **eles têm** (more than one) sound different. The plural has a circumflex: *têm*. To ask the age, say **Quantos anos tens?** or **Quantos anos tem?** (polite). The answer is **Tenho … anos.**' },
        ],
        [
          { t: 'table', caption: 'Family words', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['o pai / a mãe', 'father / mother'],
            ['os pais', 'parents'],
            ['o irmão / a irmã', 'brother / sister'],
            ['os irmãos', 'brothers, or brothers and sisters'],
            ['o avô / a avó', 'grandfather / grandmother'],
            ['os avós', 'grandparents'],
            ['o filho / a filha', 'son / daughter'],
            ['o tio / a tia', 'uncle / aunt'],
            ['o primo / a prima', 'cousin (male / female)'],
            ['o marido / a mulher', 'husband / wife'],
          ] },
          { t: 'tip', art: 'owl', md: 'The masculine plural also covers a mixed group: **os irmãos** can mean *brothers* or *brothers and sisters*; **os avós** are both grandparents; **os pais** are both parents. To say you have no brothers or sisters, say **Sou filho único** (a man) or **Sou filha única** (a woman).' },
        ],
        [
          { t: 'table', caption: 'Numbers 20 to 100', explain: ['head'], head: ['Number', 'Word', 'Number', 'Word'], rows: [
            ['20', 'vinte', '60', 'sessenta'],
            ['21', 'vinte e um', '70', 'setenta'],
            ['22', 'vinte e dois', '80', 'oitenta'],
            ['30', 'trinta', '90', 'noventa'],
            ['31', 'trinta e um', '99', 'noventa e nove'],
            ['40', 'quarenta', '100', 'cem'],
            ['50', 'cinquenta', '', ''],
          ] },
          { t: 'tip', art: 'owl', md: 'Between the tens and the units, say **e**: *trinta e cinco* (35). The word for 100 is **cem**.' },
          { t: 'dialogue', title: 'Irmãos', lines: [
            { who: 'Ana', s: 'Tens irmãos, Pedro?' },
            { who: 'Pedro', s: 'Tenho uma irmã e dois irmãos. A minha irmã chama-se Clara.' },
            { who: 'Ana', s: 'Quantos anos tem a tua irmã?' },
            { who: 'Pedro', s: 'Tem vinte e dois anos. E tu, tens irmãos?' },
            { who: 'Ana', s: 'Não, sou filha única.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of ter.', verb: 'ter', tense: 'present', rows: [
            ['eu', 'tenho'],
            ['tu', 'tens'],
            ['ele / ela / você', 'tem'],
            ['nós', 'temos'],
            ['eles / elas / vocês', 'têm'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the right form of ter.', items: [
            { q: 'Eu ___ uma irmã.', a: ['tenho'], why: '*eu tenho*' },
            { q: 'Tu ___ irmãos?', a: ['tens'], why: '*tu tens*' },
            { q: 'O Pedro ___ vinte anos.', a: ['tem'], why: 'One person: *ele tem*.' },
            { q: 'Nós ___ dois filhos.', a: ['temos'], why: '*nós temos*' },
            { q: 'Eles ___ três filhos.', a: ['têm'], why: 'More than one person: *eles têm*, with a circumflex.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the family word with its meaning.', pairs: [
            ['o pai', 'father'],
            ['a avó', 'grandmother'],
            ['o irmão', 'brother'],
            ['a tia', 'aunt'],
            ['o primo', 'cousin (male)'],
            ['os avós', 'grandparents'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Os pais do meu pai são os meus ___.', o: ['avós', 'tios', 'irmãos'], why: 'The parents of your parents are your grandparents.' },
            { q: 'A irmã da minha mãe é a minha ___.', o: ['tia', 'prima', 'avó'], why: 'The sister of your mother is your aunt.' },
            { q: 'O filho do meu tio é o meu ___.', o: ['primo', 'irmão', 'avô'], why: 'The son of your uncle is your cousin.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the number in words.', items: [
            { q: '21 = ___', a: ['vinte e um'], why: '*vinte e um*' },
            { q: '35 = ___', a: ['trinta e cinco'], why: '*trinta e cinco*' },
            { q: '48 = ___', a: ['quarenta e oito'], why: '*quarenta e oito*' },
            { q: '60 = ___', a: ['sessenta'], why: '*sessenta*' },
            { q: '100 = ___', a: ['cem'], why: '*cem*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Tenho dois irmãos e uma irmã.', why: '*Tenho* + family.' },
            { a: 'Quantos anos tens?', why: 'The question for age.' },
            { a: 'Tenho vinte e cinco anos.', why: '*Tenho* + number + *anos*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'O meu, a minha',
      about: 'Say whose it is: my, your, our.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In Portuguese, a possessive word (my, your) agrees with the **thing owned**, not with the owner, and in Portugal it is normally used **with the article**: *o meu pai, a minha mãe, os meus irmãos, as minhas irmãs.* Notice that *o meu* and *a minha* are different words, because *pai* is masculine and *mãe* is feminine.' },
          { t: 'table', caption: 'Possessives', quiz: true, head: ['', 'masculine', 'feminine', 'masculine plural', 'feminine plural'], rows: [
            ['my', 'o meu', 'a minha', 'os meus', 'as minhas'],
            ['your (tu)', 'o teu', 'a tua', 'os teus', 'as tuas'],
            ['his, her, your (polite)', 'o seu', 'a sua', 'os seus', 'as suas'],
            ['our', 'o nosso', 'a nossa', 'os nossos', 'as nossas'],
          ] },
          { t: 'tip', art: 'owl', md: '**O seu** and **a sua** can mean *his*, *her*, *their* or *your* (polite), so they are not always clear. To be clear, say **dele** (his), **dela** (hers), **deles** or **delas** (theirs) after the noun: *a mãe dele* (his mother), *a mãe dela* (her mother). In Brazil, people often leave out the article: *meu pai*.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**O meu** pai chama-se Rui.', n: '*Pai* is masculine singular: *o meu*.' },
            { s: '**A minha** irmã tem vinte anos.', n: '*Irmã* is feminine singular: *a minha*.' },
            { s: '**Os teus** avós são simpáticos.', n: 'Masculine plural: *os teus*.' },
            { s: '**As nossas** primas são do Porto.', n: 'Feminine plural: *as nossas*.' },
            { s: '**A mãe dele** é professora.', n: 'Clear: the mother of a man.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the possessive with its article.', items: [
            { q: '___ mãe chama-se Teresa. (my)', a: ['A minha'], why: '*Mãe* is feminine: *a minha*.' },
            { q: '___ irmãos são simpáticos. (my)', a: ['Os meus'], why: 'Masculine plural: *os meus*.' },
            { q: '___ pai é alto. (your, tu)', a: ['O teu'], why: '*Pai* is masculine: *o teu*.' },
            { q: '___ casa é grande. (our)', a: ['A nossa'], why: '*Casa* is feminine: *a nossa*.' },
            { q: 'A mãe ___ é professora. (her)', a: ['dela'], why: 'To say clearly *her mother*: *a mãe dela*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '___ pais chamam-se Rui e Teresa.', o: ['Os meus', 'O meu', 'As minhas'], why: '*Pais* is masculine plural: *os meus*.' },
            { q: 'A Clara é ___ irmã.', o: ['a minha', 'o meu', 'os meus'], why: '*Irmã* is feminine singular: *a minha*.' },
            { q: '___ avós são do Porto. (our)', o: ['Os nossos', 'O nosso', 'As nossas'], why: 'Masculine plural: *os nossos*.' },
            { q: '___ prima tem trinta anos. (your, tu)', o: ['A tua', 'O teu', 'Os teus'], why: '*Prima* is feminine: *a tua*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: '[O meu] irmã chama-se Clara.', a: ['A minha'], why: '*Irmã* is feminine: *a minha*.' },
            { s: '[As meus] pais são simpáticos.', a: ['Os meus'], why: '*Pais* is masculine plural: *os meus*.' },
            { s: '[O nossa] casa é grande.', a: ['A nossa'], why: '*Casa* is feminine: *a nossa*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'A minha irmã tem vinte anos.', why: '*A minha* goes before the noun.' },
            { a: 'Os meus avós são do Porto.', why: 'Masculine plural: *os meus*.' },
            { a: 'A mãe dele é professora.', why: '*Dele* goes after the noun.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the English with the Portuguese.', pairs: [
            ['my mother', 'a minha mãe'],
            ['your father (tu)', 'o teu pai'],
            ['our children', 'os nossos filhos'],
            ['his sister', 'a irmã dele'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Como é?',
      about: 'Describe people with ser and an adjective.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To describe a person, use **ser** + an adjective: *A minha irmã é alta e simpática.* An adjective agrees in **gender** and **number** with the person: *alto, alta, altos, altas*. Many adjectives end in **-o** for masculine and **-a** for feminine. Adjectives that end in **-e** are the same for both: *inteligente*. Adjectives that end in a consonant are the same for both too: *jovem*, plural *jovens*.' },
          { t: 'table', caption: 'Adjectives', explain: ['head'], head: ['masculine', 'feminine', 'masculine plural', 'feminine plural'], rows: [
            ['alto', 'alta', 'altos', 'altas'],
            ['baixo', 'baixa', 'baixos', 'baixas'],
            ['simpático', 'simpática', 'simpáticos', 'simpáticas'],
            ['novo', 'nova', 'novos', 'novas'],
            ['inteligente', 'inteligente', 'inteligentes', 'inteligentes'],
            ['jovem', 'jovem', 'jovens', 'jovens'],
          ] },
          { t: 'tip', art: 'owl', md: 'Most adjectives go **after** the noun: *cabelo castanho, olhos verdes*. To say that someone has a feature, use **ter**: *Tenho cabelo curto e olhos castanhos.* To soften an adjective, say **muito** (very) or **um pouco** (a little): *É muito simpático. É um pouco baixa.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'A minha irmã **é alta** e **simpática**.', n: 'Feminine singular.' },
            { s: 'O meu pai **é baixo** e **muito simpático**.', n: 'Masculine singular.' },
            { s: 'Os meus avós **são velhos**, mas muito **simpáticos**.', n: 'Masculine plural.' },
            { s: 'As minhas primas **são jovens** e **inteligentes**.', n: '*Jovens* and *inteligentes* are the same for both genders.' },
            { s: 'O Tiago **tem cabelo curto** e olhos castanhos.', n: '*Ter* for a feature.' },
          ] },
          { t: 'dialogue', title: 'Quem é?', lines: [
            { who: 'Ana', s: 'Como é o teu irmão?' },
            { who: 'Pedro', s: 'É alto e muito simpático. Tem cabelo curto e olhos castanhos.' },
            { who: 'Ana', s: 'E a tua irmã?' },
            { who: 'Pedro', s: 'É baixa, mas muito inteligente.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'A minha irmã é ___.', o: ['alta', 'alto', 'altos'], why: '*Irmã* is feminine singular: *alta*.' },
            { q: 'Os meus irmãos são ___.', o: ['simpáticos', 'simpático', 'simpáticas'], why: 'Masculine plural: *simpáticos*.' },
            { q: 'As minhas primas são ___.', o: ['inteligentes', 'inteligente', 'inteligentas'], why: '*Inteligente* ends in *-e*; the plural is *inteligentes*.' },
            { q: 'O meu avô é muito ___.', o: ['velho', 'velha', 'velhos'], why: 'Masculine singular: *velho*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the adjective in the right form.', items: [
            { q: 'A mãe da Ana é ___. (simpático)', a: ['simpática'], why: 'Feminine: *simpática*.' },
            { q: 'Os filhos dela são ___. (alto)', a: ['altos'], why: 'Masculine plural: *altos*.' },
            { q: 'As minhas tias são ___. (jovem)', a: ['jovens'], why: 'Plural of *jovem*: *jovens*.' },
            { q: 'O meu tio é ___. (baixo)', a: ['baixo'], why: 'Masculine singular: *baixo*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'A minha irmã é [alto].', a: ['alta'], why: '*Irmã* is feminine: *alta*.' },
            { s: 'Os meus pais [é] simpáticos.', a: ['são'], why: 'More than one person: *são*.' },
            { s: 'As minhas primas são [jovem].', a: ['jovens'], why: 'The plural of *jovem* is *jovens*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'O meu pai é alto e simpático.', why: '*Ser* + two adjectives.' },
            { a: 'A minha irmã é baixa mas inteligente.', why: '*Mas* joins the adjectives.' },
            { a: 'O Tiago tem cabelo curto.', why: '*Ter* + feature.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Uma fotografia',
      about: 'Read a message with a family photo.',
      art: 'pizza',
      spreads: [
        [
          { t: 'reading', title: 'Uma mensagem', md: 'Olá, Sofia!\n\nTenho uma fotografia da minha família. O meu pai chama-se Rui e tem cinquenta e dois anos. É alto e simpático. A minha mãe chama-se Teresa e tem quarenta e nove anos. É professora. Tenho um irmão, o Tiago. Tem catorze anos e é muito inteligente.\n\nE tu, tens irmãos?\n\nBeijinhos,\nAna' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'O pai da Ana tem cinquenta e dois anos.', a: 't', why: '*Tem cinquenta e dois anos.*' },
            { q: 'A mãe da Ana é professora.', a: 't', why: '*É professora.*' },
            { q: 'O Tiago tem vinte anos.', a: 'f', why: 'Tiago is fourteen: *tem catorze anos*.' },
            { q: 'O pai da Ana é baixo.', a: 'f', why: '*É alto e simpático.*' },
            { q: 'A Ana tem uma irmã.', a: 'ng', why: 'She says she has a brother, but not whether she has a sister.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Como se chama a mãe da Ana?', o: ['Teresa.', 'Rui.', 'Sofia.'], why: '*A minha mãe chama-se Teresa.*' },
            { q: 'Quantos anos tem a mãe da Ana?', o: ['Quarenta e nove.', 'Cinquenta e dois.', 'Catorze.'], why: '*Tem quarenta e nove anos.*' },
            { q: 'Como é o Tiago?', o: ['Muito inteligente.', 'Muito alto.', 'Muito velho.'], why: '*É muito inteligente.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'O meu pai ___ cinquenta e dois anos. (ter)', a: ['tem'], why: '*Ele tem …*' },
            { q: 'A minha mãe ___ professora. (ser)', a: ['é'], why: '*Ela é professora.*' },
            { q: 'Tenho um ___, o Tiago.', a: ['irmão'], why: '*Tenho um irmão.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Eu ___ dois irmãos.', o: ['tenho', 'tens', 'tem'], why: '*Eu tenho*.' },
      { q: 'Quantos anos ___ a tua irmã?', o: ['tem', 'têm', 'tens'], why: 'One person: *tem*.' },
      { q: '___ pais são simpáticos.', o: ['Os meus', 'O meu', 'As minhas'], why: '*Pais* is masculine plural: *os meus*.' },
      { q: 'A minha irmã é ___.', o: ['alta', 'alto', 'altos'], why: 'Feminine singular: *alta*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Ele ___ trinta e dois anos. (ter)', a: ['tem'], why: '*Ele tem*.' },
      { q: 'Os meus avós ___ muito simpáticos. (ser)', a: ['são'], why: '*Eles são*.' },
      { q: '35 = ___', a: ['trinta e cinco'], why: '*Trinta e cinco*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the family word with its meaning.', pairs: [
      ['o irmão', 'brother'],
      ['a avó', 'grandmother'],
      ['o tio', 'uncle'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'A minha irmã é [alto].', a: ['alta'], why: 'Feminine: *alta*.' },
      { s: 'Os meus pais [tem] cinquenta anos.', a: ['têm'], why: 'More than one person: *têm*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'A minha mãe tem quarenta e nove anos.', why: '*Ter* + number + *anos*.' },
      { a: 'O meu pai é alto e simpático.', why: '*Ser* + adjectives.' },
    ] },
  ],
};
