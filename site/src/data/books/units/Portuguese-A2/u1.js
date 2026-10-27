// Portuguese A2, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'People and relationships',
  goal: 'Describe people and their character, compare them and talk about relationships. Learn ser and estar with adjectives, comparisons and the direct object pronouns o, a, os, as.',
  art: 'cat',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['character', 'appearance', 'ser-estar', 'comparisons', 'direct object pronouns'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Como é ele?',
      about: 'Describe character and appearance, and choose between ser and estar.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To say what someone is like, use **ser** + an adjective: *O Miguel é simpático.* To give an opinion, say **acho que** or **na minha opinião**: *Acho que ele é divertido. Na minha opinião, a Ana é muito trabalhadora.* To say how someone seems, use **parecer**: *Ele parece simpático.* Adjectives agree with the person: *simpático, simpática, simpáticos, simpáticas*.' },
          { t: 'table', caption: 'Character and appearance', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['simpático / antipático', 'friendly / unfriendly'],
            ['divertido', 'fun, amusing'],
            ['sério', 'serious'],
            ['tímido', 'shy'],
            ['generoso', 'generous'],
            ['trabalhador', 'hard-working'],
            ['preguiçoso', 'lazy'],
            ['calmo', 'calm'],
            ['o cabelo loiro / castanho / ruivo', 'blond / brown / red hair'],
            ['os olhos azuis / verdes / castanhos', 'blue / green / brown eyes'],
            ['os óculos', 'glasses'],
          ] },
          { t: 'tip', art: 'owl', md: 'The adjective **trabalhador** ends in *-r*: the feminine is **trabalhadora**, the plural is **trabalhadores**. Most adjectives in *-or* add **-a** for the feminine. Hair and eyes use **ter**: *Tem cabelo castanho e olhos verdes.*' },
        ],
        [
          { t: 'text', md: 'Use **ser** for a lasting quality, a character: *O Pedro é calmo.* Use **estar** for how someone is today or for a short time: *Hoje o Pedro está nervoso.* The same adjective can go with both, but the meaning changes: **ser calmo** (to be a calm person), **estar calmo** (to be calm now).' },
          { t: 'examples', items: [
            { s: 'O Miguel **é** simpático.', n: 'His character: *ser*.' },
            { s: 'Hoje o Miguel **está** nervoso.', n: 'Today only: *estar*.' },
            { s: 'Acho que ela **é** muito trabalhadora.', n: '*Acho que* + indicative.' },
            { s: 'Na minha opinião, o Pedro **é** divertido.', n: 'An opinion.' },
            { s: 'A Ana **tem** cabelo castanho e olhos verdes.', n: '*Ter* for hair and eyes.' },
          ] },
          { t: 'dialogue', title: 'O novo colega', lines: [
            { who: 'Ana', s: 'Como é o teu novo colega?' },
            { who: 'Rafael', s: 'Acho que é muito simpático e divertido.' },
            { who: 'Ana', s: 'E como é fisicamente?' },
            { who: 'Rafael', s: 'É alto e magro, tem cabelo castanho e usa óculos.' },
            { who: 'Ana', s: 'Hoje está um pouco nervoso, não está?' },
            { who: 'Rafael', s: 'É o primeiro dia, é normal.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['simpático', 'friendly'],
            ['tímido', 'shy'],
            ['preguiçoso', 'lazy'],
            ['generoso', 'generous'],
            ['trabalhador', 'hard-working'],
            ['calmo', 'calm'],
          ] },
          { t: 'ex', kind: 'choice', h: 'ser or estar? Choose.', items: [
            { q: 'O Pedro ___ muito calmo: nunca se zanga.', o: ['é', 'está', 'são'], why: 'A lasting quality: *ser*.' },
            { q: 'Hoje ele ___ nervoso por causa do exame.', o: ['está', 'é', 'estão'], why: 'Only today: *estar*.' },
            { q: 'A minha irmã ___ preguiçosa: nunca ajuda em casa.', o: ['é', 'está', 'estás'], why: 'Her character: *ser*.' },
            { q: 'Hoje ela ___ cansada.', o: ['está', 'é', 'estão'], why: 'A state today: *estar*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the adjective in the right form.', items: [
            { q: 'A Ana é muito ___. (simpático)', a: ['simpática'], why: 'Feminine singular: *simpática*.' },
            { q: 'Os meus colegas são ___. (trabalhador)', a: ['trabalhadores'], why: 'Plural of *trabalhador*: *trabalhadores*.' },
            { q: 'A minha chefe é ___. (sério)', a: ['séria'], why: 'Feminine: *séria*.' },
            { q: 'Os meus primos são muito ___. (divertido)', a: ['divertidos'], why: 'Masculine plural: *divertidos*.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Find the odd one out.', items: [
            { o: ['antipático', 'simpático', 'generoso', 'divertido'], why: '*Antipático* is a negative quality. The others are positive.' },
            { o: ['tímido', 'ruivo', 'loiro', 'castanho'], why: '*Tímido* is a character. The others are colours of hair.' },
            { o: ['preguiçoso', 'trabalhador', 'sério', 'calmo'], why: '*Preguiçoso* is negative. The others are neutral or positive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Acho que ele é muito simpático.', why: '*Acho que* + indicative.' },
            { a: 'Na minha opinião, a Ana é divertida.', why: '*Na minha opinião* + sentence.' },
            { a: 'Ela tem cabelo castanho e olhos verdes.', why: '*Ter* for hair and eyes.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'A Ana é muito [simpático].', a: ['simpática'], why: 'It agrees with *Ana*: *simpática*.' },
            { s: 'Hoje o Pedro [é] nervoso.', a: ['está'], why: 'A state today: *está*.' },
            { s: 'Os meus colegas são [trabalhadors].', a: ['trabalhadores'], why: 'The plural of *trabalhador* is *trabalhadores*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Mais alto do que',
      about: 'Compare people and things.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To say that one is more or less than another, use **mais … do que** and **menos … do que**: *A Ana é mais alta do que o Pedro. O Pedro é menos simpático do que a Clara.* To say that two things are equal, use **tão … como**: *A Clara é tão simpática como a Ana.* Before a number, use **de**: *Tenho mais de dez primos.*' },
          { t: 'table', caption: 'Comparing', explain: ['head', 'col1'], head: ['Pattern', 'Meaning', 'Example'], rows: [
            ['mais + adjective + do que', 'more … than', 'A Ana é mais alta do que o Pedro.'],
            ['menos + adjective + do que', 'less … than', 'O Pedro é menos simpático do que a Clara.'],
            ['tão + adjective + como', 'as … as', 'A Clara é tão simpática como a Ana.'],
            ['tanto … como', 'as much … as', 'Trabalho tanto como tu.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Portugal, **do que** and **que** are both used: *mais alta do que o Pedro* and *mais alta que o Pedro*. Four adjectives have irregular forms: **bom → melhor**, **mau → pior**, **grande → maior**, **pequeno → menor**. Do not say *mais bom*: say **melhor**.' },
        ],
        [
          { t: 'table', caption: 'Irregular comparatives', explain: ['head'], head: ['Adjective', 'Comparative', 'Example'], rows: [
            ['bom', 'melhor', 'Este café é melhor do que aquele.'],
            ['mau', 'pior', 'O tempo hoje é pior do que ontem.'],
            ['grande', 'maior', 'Lisboa é maior do que Coimbra.'],
            ['pequeno', 'menor', 'A minha casa é menor do que a tua.'],
          ] },
          { t: 'examples', items: [
            { s: 'A Ana é **mais** alta **do que** o Pedro.', n: 'More than.' },
            { s: 'O Pedro é **menos** simpático **do que** a Clara.', n: 'Less than.' },
            { s: 'A Clara é **tão** simpática **como** a Ana.', n: 'As … as.' },
            { s: 'Este café é **melhor do que** aquele.', n: 'Irregular: *melhor*.' },
            { s: 'Sou **mais velho** do que o meu irmão.', n: '*Mais velho* = older.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'A Ana é ___ alta do que o Pedro. (more)', a: ['mais'], why: '*Mais … do que*.' },
            { q: 'O Pedro é ___ simpático do que a Clara. (less)', a: ['menos'], why: '*Menos … do que*.' },
            { q: 'A Clara é tão simpática ___ a Ana.', a: ['como'], why: '*Tão … como*.' },
            { q: 'Este café é ___ do que aquele. (better)', a: ['melhor'], why: '*Bom* → *melhor*.' },
            { q: 'Lisboa é ___ do que Coimbra. (bigger)', a: ['maior'], why: '*Grande* → *maior*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'O tempo hoje é ___ do que ontem. (worse)', o: ['pior', 'mais mau', 'mais pior'], why: '*Mau* → *pior*.' },
            { q: 'A minha casa é ___ do que a tua. (smaller)', o: ['menor', 'mais pequeno', 'mais menor'], why: '*Pequeno* → *menor*.' },
            { q: 'Sou ___ do que o meu irmão. (older)', o: ['mais velho', 'mais velha', 'velho mais'], why: 'A man: *mais velho*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Compare the two people or things.', items: [
            { q: 'A Ana tem 25 anos. O Pedro tem 30 anos.', cue: 'A Ana', a: ['A Ana é mais nova do que o Pedro.', 'A Ana é mais nova que o Pedro.'], why: '*Mais nova do que* = younger than.' },
            { q: 'Este café custa 1 euro. Aquele custa 2 euros.', cue: 'Este café', a: ['Este café é mais barato do que aquele.', 'Este café é mais barato que aquele.'], why: '*Mais barato do que*.' },
            { q: 'A Clara é simpática. A Ana é simpática.', cue: 'A Clara', a: ['A Clara é tão simpática como a Ana.'], why: '*Tão … como*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Este café é [mais bom] do que aquele.', a: ['melhor'], why: '*Bom* → *melhor*.' },
            { s: 'A Ana é mais alta [como] o Pedro.', a: ['do que', 'que'], why: 'After *mais*, use *do que* (or *que*), not *como*.' },
            { s: 'A Clara é tão simpática [do que] a Ana.', a: ['como'], why: '*Tão … como*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'A Ana é mais alta do que o Pedro.', why: '*Mais … do que*.' },
            { a: 'Este café é melhor do que aquele.', why: '*Melhor do que*.' },
            { a: 'A Clara é tão simpática como a Ana.', why: '*Tão … como*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Conheço-o, vejo-a',
      about: 'Replace a person or thing with the pronouns o, a, os, as.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To avoid repeating a noun, use a **direct object pronoun**: **o** (him, it), **a** (her, it), **os** (them, masculine), **as** (them, feminine). In Portugal, the pronoun goes **after** the verb with a hyphen: *Conheço o Pedro* becomes *Conheço-o.* *Vejo a Ana* becomes *Vejo-a.* *Compro os livros* becomes *Compro-os.* *Vejo as meninas* becomes *Vejo-as.*' },
          { t: 'table', caption: 'Direct object pronouns', explain: ['head'], head: ['Noun', 'Pronoun', 'Example'], rows: [
            ['o Pedro', 'o', 'Conheço-o.'],
            ['a Ana', 'a', 'Vejo-a.'],
            ['os livros', 'os', 'Compro-os.'],
            ['as meninas', 'as', 'Vejo-as.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The pronoun goes **before** the verb in a negative sentence and after words like *também, já, quem*: *Não o conheço. Também a vi. Quem o viu?* In Brazil, people often say *Eu conheço ele* or put the pronoun before the verb: *Eu o conheço.*' },
        ],
        [
          { t: 'text', md: 'After an **infinitive**, the pronoun joins the verb and the *r* disappears: **o** becomes **-lo**, **a** becomes **-la**, **os** becomes **-los**, **as** becomes **-las**. The vowel before it gets an accent: *Quero ver o filme* becomes *Quero vê-lo.* *Vou comprar a casa* becomes *Vou comprá-la.* After a verb that ends in **-m** or a nasal sound, use **-no, -na, -nos, -nas**: *Eles conhecem a Ana* becomes *Eles conhecem-na.*' },
          { t: 'examples', items: [
            { s: 'Quero **vê-lo**.', n: '*Ver* + *o* = *vê-lo*.' },
            { s: 'Vou **comprá-la**.', n: '*Comprar* + *a* = *comprá-la*.' },
            { s: 'Eles **conhecem-na**.', n: 'After *-em*: *-na*.' },
            { s: '**Não o** conheço.', n: 'Negative: the pronoun goes before.' },
            { s: 'Quem **o** viu?', n: 'After *quem*: before the verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Replace the noun with a pronoun.', items: [
            { q: 'Vejo o Pedro.', a: ['Vejo-o.'], why: '*O Pedro* → *-o*.' },
            { q: 'Conheço a Ana.', a: ['Conheço-a.'], why: '*A Ana* → *-a*.' },
            { q: 'Compro os livros.', a: ['Compro-os.'], why: '*Os livros* → *-os*.' },
            { q: 'Vejo as meninas.', a: ['Vejo-as.'], why: '*As meninas* → *-as*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Replace the noun with a pronoun after the infinitive.', items: [
            { q: 'Quero ver o filme.', a: ['Quero vê-lo.'], why: '*Ver* + *o* = *vê-lo*.' },
            { q: 'Vou comprar a casa.', a: ['Vou comprá-la.'], why: '*Comprar* + *a* = *comprá-la*.' },
            { q: 'Preciso de ler os livros.', a: ['Preciso de lê-los.'], why: '*Ler* + *os* = *lê-los*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'O Pedro? Conheço-___.', o: ['o', 'a', 'lo'], why: '*O Pedro* → *-o*.' },
            { q: 'A Ana? Vejo-___ todos os dias.', o: ['a', 'o', 'na'], why: '*A Ana* → *-a*.' },
            { q: 'O filme? Quero ___.', o: ['vê-lo', 'ver-o', 'vê-o'], why: 'After an infinitive: *vê-lo*.' },
            { q: 'Os livros? Não ___ conheço.', o: ['os', 'as', 'lhes'], why: 'Negative: the pronoun goes before: *não os conheço*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Vejo-[a] o Pedro todos os dias.', a: ['o'], why: '*O Pedro* → *-o*.' },
            { s: 'Quero [ver-o].', a: ['vê-lo'], why: 'After an infinitive: *vê-lo*.' },
            { s: 'Eles conhecem-[a].', a: ['na'], why: 'After *-em*: *-na*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Conheço-o desde segunda-feira.', why: 'The pronoun after the verb.' },
            { a: 'Não o conheço bem.', why: 'In a negative: before the verb.' },
            { a: 'Quero vê-lo amanhã.', why: '*Ver* + *o* = *vê-lo*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Uma carta a uma amiga',
      about: 'Read a letter about a new colleague.',
      art: 'cat',
      spreads: [
        [
          { t: 'reading', title: 'Querida Sofia', md: 'Querida Sofia,\n\nTenho um colega novo no escritório. Chama-se Miguel e é muito simpático. É mais velho do que eu, tem quarenta anos, mas parece mais novo. É alto, magro e tem cabelo castanho e óculos. Acho que é muito trabalhador e divertido. Conheço-o desde segunda-feira e almoço com ele todos os dias.\n\nA minha chefe, a Teresa, é menos simpática do que ele, mas é muito justa. Na minha opinião, o Miguel é a pessoa mais divertida do escritório. Vejo-o todos os dias e gosto de trabalhar com ele.\n\nUm beijinho,\nAna' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'O Miguel é um colega novo.', a: 't', why: '*Tenho um colega novo no escritório.*' },
            { q: 'O Miguel é mais novo do que a Ana.', a: 'f', why: 'He is older: *é mais velho do que eu*.' },
            { q: 'O Miguel usa óculos.', a: 't', why: '*Tem cabelo castanho e óculos.*' },
            { q: 'O Miguel é casado.', a: 'ng', why: 'The letter does not say.' },
            { q: 'A Teresa é menos simpática do que o Miguel.', a: 't', why: '*É menos simpática do que ele.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Quantos anos tem o Miguel?', o: ['Quarenta.', 'Trinta.', 'Cinquenta.'], why: '*Tem quarenta anos.*' },
            { q: 'Como é o Miguel?', o: ['Alto e magro, com óculos.', 'Baixo e gordo.', 'Loiro e de barba.'], why: '*É alto, magro e tem cabelo castanho e óculos.*' },
            { q: 'Com quem almoça a Ana todos os dias?', o: ['Com o Miguel.', 'Com a Teresa.', 'Com a Sofia.'], why: '*Almoço com ele todos os dias.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the pronouns.', items: [
            { s: 'Conheço-[o] desde segunda-feira e vejo-[o] todos os dias.', why: '*-o* replaces *o Miguel*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'O Miguel é ___ velho do que eu. (more)', a: ['mais'], why: '*Mais … do que*.' },
            { q: 'A Teresa é ___ simpática do que ele. (less)', a: ['menos'], why: '*Menos … do que*.' },
            { q: 'Conheço-___ desde segunda-feira. (o Miguel)', a: ['o'], why: '*O Miguel* → *-o*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'O Miguel é mais velho do que eu.', why: '*Mais … do que*.' },
            { a: 'Acho que ele é muito trabalhador.', why: '*Acho que* + indicative.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'A Ana é ___ alta do que o Pedro.', o: ['mais', 'menos', 'tão'], why: '*Mais … do que*.' },
      { q: 'Este café é ___ do que aquele.', o: ['melhor', 'mais bom', 'pior'], why: '*Bom* → *melhor*.' },
      { q: 'O Pedro? Conheço-___.', o: ['o', 'a', 'lo'], why: '*O Pedro* → *-o*.' },
      { q: 'O filme? Quero ___.', o: ['vê-lo', 'ver-o', 'vê-o'], why: 'After an infinitive: *vê-lo*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'A Clara é tão simpática ___ a Ana.', a: ['como'], why: '*Tão … como*.' },
      { q: 'Hoje o Pedro ___ nervoso. (estar)', a: ['está'], why: 'Today only: *estar*.' },
      { q: 'Vejo-___ todos os dias. (a Ana)', a: ['a'], why: '*A Ana* → *-a*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['simpático', 'friendly'],
      ['tímido', 'shy'],
      ['preguiçoso', 'lazy'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'A Ana é muito [simpático].', a: ['simpática'], why: 'It agrees with *Ana*.' },
      { s: 'Eles conhecem-[a].', a: ['na'], why: 'After *-em*: *-na*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Acho que ele é muito simpático.', why: '*Acho que* + indicative.' },
      { a: 'Quero vê-lo amanhã.', why: '*Ver* + *o* = *vê-lo*.' },
    ] },
  ],
};
