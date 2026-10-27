// French C1, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Idioms, humour and word play',
  goal: 'Understand idioms, humour and figures of speech and use some of them. Learn common idioms, proverbs, similes and metaphors, homophones and puns, and the ironic tone of the second degree.',
  art: 'parrot',
  tags: { skills: ['vocabulary', 'reading', 'speaking', 'writing'], topics: ['idioms', 'proverbs', 'similes', 'homophones', 'humour'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Expressions imagées',
      about: 'Understand and use the idioms of everyday French.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'An **idiom** (une expression imagée) has a meaning that you cannot guess from its words. **Avoir le cafard** does not mean *to have a cockroach*: it means *to feel down*. **Poser un lapin à quelqu’un** means *to stand someone up*. **Coûter les yeux de la tête** means *to cost a fortune*. Learn each idiom as a **whole phrase**, with its verb and its article. Use idioms **sparingly** in speech and in writing: one well-chosen expression is better than many.' },
          { t: 'table', caption: 'Idioms', explain: ['head', 'col1'], head: ['Idiom', 'Meaning', 'Example'], rows: [
            ['avoir le cafard', 'to feel down', 'Il a le cafard ce matin.'],
            ['poser un lapin à quelqu’un', 'to stand someone up', 'Elle m’a posé un lapin hier soir.'],
            ['coûter les yeux de la tête', 'to cost a fortune', 'Cette voiture coûte les yeux de la tête.'],
            ['passer du coq à l’âne', 'to jump from one subject to another', 'Tu passes du coq à l’âne !'],
            ['tomber dans les pommes', 'to faint', 'Elle est tombée dans les pommes.'],
            ['être dans la lune', 'to daydream', 'Il est toujours dans la lune.'],
            ['il pleut des cordes', 'it is pouring', 'Il pleut des cordes dehors.'],
            ['avoir le coup de foudre', 'to fall in love at first sight', 'Ils ont eu le coup de foudre.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not translate idioms word for word. **Avoir un chat dans la gorge** means *to have a frog in one’s throat*, with a cat in French and a frog in English. Some idioms are **familiar**, such as **casser les pieds à quelqu’un** (to annoy someone). Others are **neutral**, such as **tomber dans les pommes**. Idioms differ in Quebec, Belgium and Switzerland; for example, in Belgium *il drache* means *it is pouring*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Il **a le cafard** ce matin.', n: 'He feels down.' },
            { s: 'Elle m’**a posé un lapin** hier soir.', n: 'She stood me up.' },
            { s: 'Cette voiture **coûte les yeux de la tête**.', n: 'It costs a fortune.' },
            { s: 'Tu **passes du coq à l’âne** !', n: 'You jump from topic to topic.' },
            { s: 'Il **pleut des cordes** dehors.', n: 'It is pouring.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the idiom with its meaning.', pairs: [
            ['avoir le cafard', 'to feel down'],
            ['poser un lapin', 'to stand someone up'],
            ['coûter les yeux de la tête', 'to cost a fortune'],
            ['passer du coq à l’âne', 'to change subject suddenly'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the idiom.', items: [
            { q: 'Il a le ___ ce matin.', a: ['cafard'], why: '*Avoir le cafard* = to feel down.' },
            { q: 'Elle m’a posé un ___ hier soir.', a: ['lapin'], why: '*Poser un lapin* = to stand someone up.' },
            { q: 'Cette voiture coûte les ___ de la tête.', a: ['yeux'], why: '*Coûter les yeux de la tête*.' },
            { q: 'Tu passes du coq à l’___ !', a: ['âne'], why: '*Passer du coq à l’âne*.' },
            { q: 'Il pleut des ___ dehors.', a: ['cordes'], why: '*Il pleut des cordes*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right meaning.', items: [
            { q: 'Il est tombé dans les pommes.', o: ['He fainted.', 'He ate apples.', 'He fell in the garden.'], why: '*Tomber dans les pommes* = to faint.' },
            { q: 'Elle est toujours dans la lune.', o: ['She is always daydreaming.', 'She travels to the moon.', 'She is always late.'], why: '*Être dans la lune* = to daydream.' },
            { q: 'Ils ont eu le coup de foudre.', o: ['They fell in love at first sight.', 'They were struck by lightning.', 'They had an argument.'], why: '*Le coup de foudre* = love at first sight.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Il pleut des [chiens] dehors.', a: ['cordes'], why: '*Il pleut des cordes*.' },
            { s: 'Elle m’a posé un [chat] hier soir.', a: ['lapin'], why: '*Poser un lapin*.' },
            { s: 'Il a le [crabe] ce matin.', a: ['cafard'], why: '*Avoir le cafard*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Cette voiture coûte les yeux de la tête.', why: '*Coûter les yeux de la tête*.' },
            { a: 'Il pleut des cordes dehors.', why: '*Il pleut des cordes*.' },
            { a: 'Elle m’a posé un lapin hier soir.', why: '*Poser un lapin*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Proverbes, comparaisons, métaphores',
      about: 'Understand proverbs and use similes and metaphors.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'A **proverb** (un proverbe) is a short saying that states a general truth: *L’habit ne fait pas le moine* (Do not judge by appearances). *Tout ce qui brille n’est pas or.* *Petit à petit, l’oiseau fait son nid.* *Chat échaudé craint l’eau froide* (Once bitten, twice shy). A **comparaison** (simile) joins two things with **comme**: *têtu comme une mule, fier comme un paon, rusé comme un renard*. A **métaphore** says that one thing **is** another, without *comme*: *Il a un cœur de pierre.*' },
          { t: 'table', caption: 'Proverbs', explain: ['head'], head: ['Proverbe', 'Meaning'], rows: [
            ['L’habit ne fait pas le moine.', 'Do not judge by appearances.'],
            ['Tout ce qui brille n’est pas or.', 'Not everything that looks good is good.'],
            ['Petit à petit, l’oiseau fait son nid.', 'Slowly and steadily, one succeeds.'],
            ['Chat échaudé craint l’eau froide.', 'Once bitten, twice shy.'],
            ['Mieux vaut tard que jamais.', 'Better late than never.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use a proverb to **close** an argument, not to start it, and only when you are sure of it. **Similes** are easy to build: *adjective + comme + animal or thing*. Some are fixed: *rouge comme une tomate, heureux comme un poisson dans l’eau*. A **métaphore** is stronger than a *comparaison*: *Cette ville est une fourmilière.* Avoid animal similes that are **offensive**; choose neutral ones.' },
        ],
        [
          { t: 'table', caption: 'Similes', explain: ['head'], head: ['Simile', 'Meaning'], rows: [
            ['têtu comme une mule', 'very stubborn'],
            ['fier comme un paon', 'very proud'],
            ['rusé comme un renard', 'very clever'],
            ['rouge comme une tomate', 'very red, embarrassed'],
            ['heureux comme un poisson dans l’eau', 'very comfortable'],
          ] },
          { t: 'ex', kind: 'sort', h: 'Simile or metaphor? Sort the sentences.', groups: ['comparaison (with comme)', 'métaphore (without comme)'], explain: ['groups'], items: [
            { s: 'Il est têtu comme une mule.', g: 0, why: 'It has *comme*.' },
            { s: 'Il a un cœur de pierre.', g: 1, why: 'No *comme*.' },
            { s: 'Elle est rusée comme un renard.', g: 0, why: 'It has *comme*.' },
            { s: 'Cette ville est une fourmilière.', g: 1, why: 'No *comme*.' },
            { s: 'Il est heureux comme un poisson dans l’eau.', g: 0, why: 'It has *comme*.' },
            { s: 'Le temps est un voleur.', g: 1, why: 'No *comme*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'L’habit ne fait pas le ___.', a: ['moine'], why: 'The proverb.' },
            { q: 'Tout ce qui brille n’est pas ___.', a: ['or'], why: 'The proverb.' },
            { q: 'Il est têtu comme une ___.', a: ['mule'], why: 'The simile.' },
            { q: 'Il est rusé comme un ___.', a: ['renard'], why: 'The simile.' },
            { q: 'Elle est rouge comme une ___.', a: ['tomate'], why: 'The simile.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the proverb with its meaning.', pairs: [
            ['L’habit ne fait pas le moine.', 'Do not judge by appearances.'],
            ['Chat échaudé craint l’eau froide.', 'Once bitten, twice shy.'],
            ['Mieux vaut tard que jamais.', 'Better late than never.'],
            ['Petit à petit, l’oiseau fait son nid.', 'Slowly and steadily, one succeeds.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Add a simile.', items: [
            { q: 'Il est très têtu.', cue: 'Il est têtu', a: ['Il est têtu comme une mule.'], why: '*Têtu comme une mule*.' },
            { q: 'Elle est très rouge.', cue: 'Elle est rouge', a: ['Elle est rouge comme une tomate.'], why: '*Rouge comme une tomate*.' },
            { q: 'Il est très fier.', cue: 'Il est fier', a: ['Il est fier comme un paon.'], why: '*Fier comme un paon*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Il est fier comme un [pigeon].', a: ['paon'], why: '*Fier comme un paon*.' },
            { s: 'L’habit ne fait pas le [moineau].', a: ['moine'], why: '*L’habit ne fait pas le moine*.' },
            { s: 'Elle est rusée [que] un renard.', a: ['comme'], why: 'A simile uses *comme*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Il est têtu comme une mule.', why: 'Adjective + *comme* + noun.' },
            { a: 'L’habit ne fait pas le moine.', why: 'The proverb.' },
            { a: 'Cette ville est une fourmilière.', why: 'A metaphor.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Jeux de mots et second degré',
      about: 'Understand homophones, puns and irony.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'French has many **homophones**: words that sound the same but have different meanings and spellings. **Verre, vert, vers** and **ver** all sound like *[vɛʀ]*: *un verre* (a glass), *vert* (green), *vers* (towards, or a line of poetry), *un ver* (a worm). **Seau, saut, sot** and **sceau** sound like *[so]*. Puns (**jeux de mots**) use them, or a word with **two meanings**: *Le comble pour un électricien : ne pas être au courant* (**au courant** means *informed* and *in the current*). Another one: *Pourquoi les poissons n’aiment-ils pas le tennis ? Ils ont peur du filet* (**filet** is a *net* in tennis and in fishing).' },
          { t: 'table', caption: 'Homophones', explain: ['head'], head: ['Sound', 'Words', 'Meanings'], rows: [
            ['[vɛʀ]', 'un verre, vert, vers, un ver', 'a glass, green, towards, a worm'],
            ['[so]', 'un seau, un saut, sot, un sceau', 'a bucket, a jump, silly, a seal'],
            ['[sɑ̃]', 'cent, sans, le sang, il sent', 'a hundred, without, blood, he smells'],
          ] },
          { t: 'tip', art: 'owl', md: 'In French, a pun is often in the **spoken language**, so you need to hear it. The **second degree** (le second degré) is humour where you say the opposite of what you mean, with a straight face. **Bravo, quel talent !** said after a mistake is ironic. French humour also loves **understatement**: *Pas mal !* can mean *very good*. In Quebec and Belgium, many jokes depend on local words.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'J’ai bu un **verre** d’eau.', n: '*Verre*: a glass.' },
            { s: 'Le feuillage est **vert**.', n: '*Vert*: green.' },
            { s: 'Il court **vers** la gare.', n: '*Vers*: towards.' },
            { s: 'Le comble pour un électricien : ne pas être **au courant**.', n: 'A pun with two meanings.' },
            { s: '**Bravo, quel talent !** (after a mistake)', n: 'Irony: the opposite of the meaning.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the homophone with its meaning.', pairs: [
            ['un verre', 'a glass'],
            ['vert', 'green'],
            ['un ver', 'a worm'],
            ['vers', 'towards'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'J’ai bu un ___ d’eau.', o: ['verre', 'vert', 'vers'], why: '*Un verre* = a glass.' },
            { q: 'Le feuillage est ___.', o: ['vert', 'verre', 'ver'], why: '*Vert* = green.' },
            { q: 'Il court ___ la gare.', o: ['vers', 'verre', 'vert'], why: '*Vers* = towards.' },
            { q: 'Un ___ de terre vit sous le sol.', o: ['ver', 'verre', 'vers'], why: '*Un ver* = a worm.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Le comble pour un électricien : ne pas être au ___.', a: ['courant'], why: '*Au courant* has two meanings.' },
            { q: 'Les poissons n’aiment pas le tennis : ils ont peur du ___.', a: ['filet'], why: '*Filet* is a net.' },
            { q: 'Le mot « sans » se prononce comme « cent » et comme « le ___ ».', a: ['sang'], why: '*Cent, sans, sang* sound alike.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Literal or ironic? Sort the sentences.', groups: ['literal', 'ironic'], explain: ['groups'], items: [
            { s: 'Bravo, quel talent ! (after a clumsy mistake)', g: 1, why: 'The opposite of the meaning.' },
            { s: 'Bravo, tu as gagné ! (after a real victory)', g: 0, why: 'A sincere compliment.' },
            { s: 'Quelle belle journée ! (in a storm)', g: 1, why: 'The opposite of the meaning.' },
            { s: 'Quelle belle journée ! (in the sun)', g: 0, why: 'A sincere remark.' },
            { s: 'C’est du joli ! (after a mess)', g: 1, why: 'It means *what a fine mess*.' },
            { s: 'Merci beaucoup pour ton aide. (after real help)', g: 0, why: 'A sincere thanks.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Le comble pour un électricien, c’est de ne pas être au courant.', why: 'A pun with *au courant*.' },
            { a: 'Il court vers la gare avec un verre d’eau.', why: 'Two homophones in one sentence.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Chronique : mon chat philosophe',
      about: 'Read a humorous column.',
      art: 'parrot',
      spreads: [
        [
          { t: 'reading', title: 'Mon chat, ce philosophe', md: 'Mon chat a décidé de s’installer sur mon ordinateur. Chaque matin, c’est la même scène : je pose mon café, il pose son derrière sur le clavier. Il est têtu comme une mule, fier comme un paon et, il faut bien le dire, paresseux comme un loir, enfin, comme un chat.\n\nHier, j’ai voulu le déplacer ; il m’a regardé comme si je venais de dire une énormité. J’ai eu beau lui expliquer que j’avais du travail, il n’a pas bougé. Mon voisin dit que je suis dans la lune. C’est possible, mais enfin, qui peut résister à un tel regard ?\n\nLe comble pour un écrivain, c’est de ne plus pouvoir écrire parce que son chat dort sur le clavier. Au bout d’une heure, j’avais passé du coq à l’âne : mon article parlait de poissons. Finalement, j’ai posé un lapin à mon patron. Mais le chat, lui, ne m’a jamais posé de lapin.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Le chat s’installe chaque matin sur l’ordinateur.', a: 't', why: '*Chaque matin, c’est la même scène.*' },
            { q: 'Le narrateur a réussi à déplacer le chat.', a: 'f', why: '*Il n’a pas bougé.*' },
            { q: 'Le voisin pense que le narrateur est dans la lune.', a: 't', why: '*Mon voisin dit que je suis dans la lune.*' },
            { q: 'L’article du narrateur parlait de chats.', a: 'f', why: '*Mon article parlait de poissons.*' },
            { q: 'Le narrateur a posé un lapin à son patron.', a: 't', why: '*J’ai posé un lapin à mon patron.*' },
            { q: 'Le chat est âgé de dix ans.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Comment le chat est-il décrit ?', o: ['Têtu et fier.', 'Timide et rapide.', 'Doux et obéissant.'], why: '*Têtu comme une mule, fier comme un paon.*' },
            { q: 'Que veut dire « passer du coq à l’âne » ?', o: ['Changer brusquement de sujet.', 'Aller à la ferme.', 'Parler d’animaux.'], why: 'The idiom means *to change subject suddenly*.' },
            { q: 'Que veut dire « poser un lapin » ?', o: ['Ne pas venir à un rendez-vous.', 'Offrir un animal.', 'Faire une blague.'], why: '*Poser un lapin* = to stand someone up.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the idioms and similes.', items: [
            { s: 'Il est [têtu comme une mule], [fier comme un paon] et [paresseux comme un loir].', why: 'Three similes.' },
            { s: 'Mon voisin dit que je suis [dans la lune].', why: 'An idiom: to daydream.' },
            { s: 'J’avais [passé du coq à l’âne]. Finalement, j’ai [posé un lapin] à mon patron.', why: 'Two idioms.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Il est têtu comme une ___.', a: ['mule'], why: 'The simile.' },
            { q: 'Mon voisin dit que je suis dans la ___.', a: ['lune'], why: '*Être dans la lune*.' },
            { q: 'J’avais passé du coq à l’___.', a: ['âne'], why: '*Passer du coq à l’âne*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Il est têtu comme une mule et fier comme un paon.', why: 'Two similes.' },
            { a: 'Le chat ne m’a jamais posé de lapin.', why: '*Poser un lapin*, in the negative.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Que veut dire « poser un lapin » ?', o: ['Ne pas venir à un rendez-vous.', 'Offrir un animal.', 'Manger du lapin.'], why: '*Poser un lapin* = to stand someone up.' },
      { q: 'J’ai bu un ___ d’eau.', o: ['verre', 'vert', 'vers'], why: '*Un verre* = a glass.' },
      { q: 'L’habit ne fait pas le ___.', o: ['moine', 'moineau', 'mort'], why: 'The proverb.' },
      { q: '« Il est têtu comme une mule » est …', o: ['une comparaison', 'une métaphore', 'une litote'], why: 'It has *comme*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Cette voiture coûte les ___ de la tête.', a: ['yeux'], why: '*Coûter les yeux de la tête*.' },
      { q: 'Le comble pour un électricien : ne pas être au ___.', a: ['courant'], why: '*Au courant* has two meanings.' },
      { q: 'Tout ce qui brille n’est pas ___.', a: ['or'], why: 'The proverb.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the idiom with its meaning.', pairs: [
      ['avoir le cafard', 'to feel down'],
      ['passer du coq à l’âne', 'to change subject suddenly'],
      ['tomber dans les pommes', 'to faint'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Add a simile.', items: [
      { q: 'Il est très têtu.', cue: 'Il est têtu', a: ['Il est têtu comme une mule.'], why: '*Têtu comme une mule*.' },
      { q: 'Elle est très rouge.', cue: 'Elle est rouge', a: ['Elle est rouge comme une tomate.'], why: '*Rouge comme une tomate*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Il pleut des [chiens] dehors.', a: ['cordes'], why: '*Il pleut des cordes*.' },
      { s: 'Il est fier comme un [pigeon].', a: ['paon'], why: '*Fier comme un paon*.' },
    ] },
  ],
};
