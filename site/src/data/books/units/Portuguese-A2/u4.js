// Portuguese A2, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Food, shopping and recipes',
  goal: 'Shop for food, follow a simple recipe and say how much you need. Learn quantities, the indirect object pronouns lhe and lhes, and the imperative in recipes.',
  art: 'churro',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['quantities', 'shopping', 'indirect object pronouns', 'imperative', 'recipes', 'kitchen verbs'], goals: ['foundations', 'pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Um quilo de maçãs',
      about: 'Say how much you need and ask for quantities.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'To say how much of something, use a **quantity** + **de** + the thing: *um quilo de maçãs, uma garrafa de água*. To say what you need, use **preciso de** (I need) or **é preciso** (one needs): *Preciso de um quilo de maçãs. É preciso um pouco de sal.* To ask how much, use **quanto** for a thing you cannot count and **quantos** for things you can count: *Quanto leite? Quantos ovos?*' },
          { t: 'table', caption: 'Quantities', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['um quilo de', 'a kilo of'],
            ['meio quilo de', 'half a kilo of'],
            ['um litro de', 'a litre of'],
            ['uma garrafa de', 'a bottle of'],
            ['uma lata de', 'a tin of'],
            ['um pacote de', 'a packet of'],
            ['uma dúzia de / meia dúzia de', 'a dozen / half a dozen'],
            ['um pouco de', 'a little'],
            ['muito, pouco, bastante', 'a lot, little, enough'],
          ] },
          { t: 'tip', art: 'owl', md: '**Muito** and **pouco** agree with the noun: **muito** leite, **muita** água, **muitos** ovos, **muitas** maçãs. **Bastante** has the same form for both genders. For *half*, use **meio** with a masculine noun and **meia** with a feminine one: *meio quilo, meia dúzia, meia garrafa*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Preciso de **um quilo de** maçãs.', n: '*De* after a quantity.' },
            { s: 'Quero **meia dúzia de** ovos.', n: '*Meia* with the feminine *dúzia*.' },
            { s: '**Quanto** leite queres? – **Um litro.**', n: '*Quanto* for something you cannot count.' },
            { s: '**Quantos** ovos queres? – **Seis.**', n: '*Quantos* for things you count.' },
            { s: 'Tenho **muitas** laranjas e **pouco** sumo.', n: '*Muitas* agrees with *laranjas*.' },
          ] },
          { t: 'dialogue', title: 'No mercado', lines: [
            { who: 'Marta', s: 'Bom dia. Queria um quilo de maçãs e meia dúzia de ovos.' },
            { who: 'Tomás', s: 'Mais alguma coisa?' },
            { who: 'Marta', s: 'Sim, um litro de leite e um pacote de arroz.' },
            { who: 'Tomás', s: 'Aqui tem. São sete euros e vinte.' },
            { who: 'Marta', s: 'Aqui tem. Obrigada.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the quantity with its meaning.', pairs: [
            ['um quilo de', 'a kilo of'],
            ['um litro de', 'a litre of'],
            ['uma garrafa de', 'a bottle of'],
            ['uma lata de', 'a tin of'],
            ['um pacote de', 'a packet of'],
            ['meia dúzia de', 'half a dozen'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Preciso ___ um quilo de maçãs.', a: ['de'], why: '*Precisar de*.' },
            { q: 'Quero meio litro ___ leite.', a: ['de'], why: '*De* after a quantity.' },
            { q: '___ ovos queres? – Seis. (how many)', a: ['Quantos'], why: '*Quantos* for things you count.' },
            { q: '___ leite queres? – Um litro. (how much)', a: ['Quanto'], why: '*Quanto* for something you cannot count.' },
            { q: 'Tenho ___ laranjas. (a lot of)', a: ['muitas'], why: '*Muitas* agrees with *laranjas*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Tenho muit___ água.', o: ['a', 'o', 'as'], why: '*Água* is feminine singular: *muita*.' },
            { q: 'Quero meia ___ de ovos.', o: ['dúzia', 'quilo', 'litro'], why: '*Meia dúzia de ovos*.' },
            { q: 'Preciso de um ___ de arroz.', o: ['pacote', 'garrafa', 'dúzia'], why: 'Rice comes in a packet.' },
            { q: 'Tenho pouc___ tempo.', o: ['o', 'a', 'os'], why: '*Tempo* is masculine singular: *pouco*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Quero um quilo [das] maçãs.', a: ['de'], why: '*Um quilo de maçãs*.' },
            { s: 'Tenho [muito] laranjas.', a: ['muitas'], why: '*Muitas* agrees with *laranjas*.' },
            { s: 'Quero meio [dúzia] de ovos.', a: ['meia'], why: '*Meia dúzia*, feminine.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Queria um quilo de maçãs e meia dúzia de ovos.', why: 'Quantity + *de* + thing.' },
            { a: 'Preciso de um litro de leite.', why: '*Precisar de* + quantity.' },
            { a: 'Quantos ovos queres?', why: '*Quantos* + noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Dou-lhe o livro',
      about: 'Use the indirect object pronouns me, te, lhe, nos, lhes.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'An **indirect object** says **to whom** something is given, said or written: *dou o livro **ao Pedro***. Replace it with an **indirect object pronoun**: **me** (to me), **te** (to you), **lhe** (to him, to her, to you polite), **nos** (to us), **lhes** (to them). In Portugal, the pronoun goes after the verb with a hyphen: *Dou-lhe o livro. Escrevo-lhe uma carta. Telefono-lhe amanhã.*' },
          { t: 'table', caption: 'Indirect object pronouns', explain: ['head'], head: ['Pronoun', 'Meaning', 'Example'], rows: [
            ['me', 'to me', 'Dá-me o livro.'],
            ['te', 'to you (tu)', 'Dou-te o livro.'],
            ['lhe', 'to him, to her, to you (polite)', 'Dou-lhe o livro.'],
            ['nos', 'to us', 'Ele escreve-nos uma carta.'],
            ['lhes', 'to them', 'Dou-lhes o livro.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The pronoun goes **before** the verb after **não, já, também, nunca, sempre** and question words: *Não lhe dei o livro. Já lhe telefonei. Quem te escreveu?* Common verbs with an indirect object: **dar, dizer, escrever, telefonar a, oferecer, mostrar, emprestar**.' },
        ],
        [
          { t: 'text', md: 'When you have both a direct and an indirect pronoun, they **join**: **me + o = mo**, **te + o = to**, **lhe + o = lho**. The forms for **a, os, as** are **ma, mos, mas; ta, tos, tas; lha, lhos, lhas**. So *Dou o livro ao Pedro* becomes *Dou-lhe o livro*, and then *Dou-lho*. Learn **lho** and **lha** first: they are the most useful.' },
          { t: 'examples', items: [
            { s: 'Dou-**lhe** o livro.', n: '*Lhe* = to him or her.' },
            { s: 'Escrevo-**te** uma carta.', n: '*Te* = to you.' },
            { s: 'Telefono-**lhe** amanhã.', n: '*Telefonar a* → *lhe*.' },
            { s: 'Já **lhe** dei o presente.', n: 'After *já*, the pronoun goes before.' },
            { s: 'Dou-**lho** amanhã.', n: '*Lhe* + *o* = *lho*.' },
          ] },
          { t: 'dialogue', title: 'O presente', lines: [
            { who: 'Ana', s: 'Já deste o presente ao Rui?' },
            { who: 'Pedro', s: 'Já lho dei ontem.' },
            { who: 'Ana', s: 'E a ti, o que te ofereceu?' },
            { who: 'Pedro', s: 'Ofereceu-me um livro. Vou emprestá-lo à Clara.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the pronoun.', items: [
            { q: 'Dou-___ o livro. (to him)', a: ['lhe'], why: '*Dou-lhe*.' },
            { q: 'Ela escreve-___ uma carta. (to me)', a: ['me'], why: '*Escreve-me*.' },
            { q: 'Telefono-___ amanhã. (to her)', a: ['lhe'], why: '*Telefono-lhe*.' },
            { q: 'Ele oferece-___ um livro. (to us)', a: ['nos'], why: '*Oferece-nos*.' },
            { q: 'Eu dei-___ o presente. (to them)', a: ['lhes'], why: '*Dei-lhes*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Replace the person with a pronoun.', items: [
            { q: 'Dou o livro ao Pedro.', a: ['Dou-lhe o livro.'], why: '*Ao Pedro* → *lhe*.' },
            { q: 'Escrevo uma carta à Ana.', a: ['Escrevo-lhe uma carta.'], why: '*À Ana* → *lhe*.' },
            { q: 'Telefono aos meus pais.', a: ['Telefono-lhes.'], why: '*Aos meus pais* → *lhes*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right pronoun.', items: [
            { q: 'Dou-___ o livro, Pedro. (to you, tu)', o: ['te', 'lhe', 'lhes'], why: '*Tu* → *te*.' },
            { q: 'Ele dá-___ um presente. (to us)', o: ['nos', 'me', 'lhes'], why: '*Nós* → *nos*.' },
            { q: 'Já ___ telefonei. (to her)', o: ['lhe', 'lhes', 'me'], why: 'After *já*, before the verb: *lhe*.' },
            { q: 'Dou o livro ao Pedro. → Dou-___.', o: ['lho', 'lhe o', 'o lhe'], why: '*Lhe* + *o* = *lho*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Dou-[me] o livro ao Pedro.', a: ['lhe'], why: 'To him: *lhe*.' },
            { s: 'Telefono-[o] amanhã. (to her)', a: ['lhe'], why: '*Telefonar a* takes *lhe*.' },
            { s: 'Já [dei-lhe] o presente.', a: ['lhe dei'], why: 'After *já*, the pronoun goes before the verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the pronoun with its meaning.', pairs: [
            ['me', 'to me'],
            ['te', 'to you (tu)'],
            ['lhe', 'to him, to her'],
            ['nos', 'to us'],
            ['lhes', 'to them'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Dou-lhe o livro amanhã.', why: 'The pronoun after the verb.' },
            { a: 'Já lhe telefonei.', why: 'After *já*, before the verb.' },
            { a: 'Não lhe dei o livro.', why: 'After *não*, before the verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Corta, mistura, junta',
      about: 'Follow and give a recipe with the imperative.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'In a recipe, the **imperative** tells what to do. For **tu**, use the form that looks like *ele* in the present: **Corta a cebola. Mistura os ovos. Põe sal.** For **você** (or **o senhor / a senhora**), use the form that ends in **-e** for *-ar* verbs and in **-a** for *-er* and *-ir* verbs: **Corte a cebola. Misture os ovos. Ponha sal.** To say *do not*, use **não** + the form with **-es** (tu) or **-e / -a** (você): *Não mexas. Não mexa.*' },
          { t: 'table', caption: 'Imperative', explain: ['head', 'col0'], head: ['Verb', 'tu', 'você'], rows: [
            ['cortar (to cut)', 'corta', 'corte'],
            ['misturar (to mix)', 'mistura', 'misture'],
            ['juntar (to add)', 'junta', 'junte'],
            ['deitar (to pour)', 'deita', 'deite'],
            ['mexer (to stir)', 'mexe', 'mexa'],
            ['ferver (to boil)', 'ferve', 'ferva'],
            ['pôr (to put)', 'põe', 'ponha'],
          ] },
          { t: 'tip', art: 'owl', md: 'In a recipe for a friend, use **tu**; in a printed recipe for everybody, use **você**. The pronouns go after the verb with a hyphen: **Corta-a. Mistura-os.** (*Corta a cebola* → *Corta-a*.)' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Descasca** as batatas e **corta-as**.', n: 'Two imperatives for *tu*, the second with a pronoun.' },
            { s: '**Põe** água numa panela.', n: '*Pôr* → *põe*.' },
            { s: '**Deixa** ferver vinte minutos.', n: '*Deixar* + infinitive.' },
            { s: '**Misture** tudo e **junte** sal.', n: 'Polite or printed: *misture*, *junte*.' },
            { s: 'Não **mexas** muito.', n: 'Negative *tu*: *não mexas*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the imperative for tu.', items: [
            { q: '___ a cebola. (cortar)', a: ['Corta'], why: '*Cortar* → *corta*.' },
            { q: '___ os ovos. (misturar)', a: ['Mistura'], why: '*Misturar* → *mistura*.' },
            { q: '___ sal. (pôr)', a: ['Põe'], why: '*Pôr* → *põe*.' },
            { q: '___ água na panela. (deitar)', a: ['Deita'], why: '*Deitar* → *deita*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Change the imperative from tu to você.', items: [
            { q: 'Corta a cebola.', a: ['Corte a cebola.'], why: '*Corta* → *corte*.' },
            { q: 'Mistura os ovos.', a: ['Misture os ovos.'], why: '*Mistura* → *misture*.' },
            { q: 'Põe sal.', a: ['Ponha sal.'], why: '*Põe* → *ponha*.' },
            { q: 'Mexe a sopa.', a: ['Mexa a sopa.'], why: '*Mexe* → *mexa*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the verb with its meaning.', pairs: [
            ['cortar', 'to cut'],
            ['misturar', 'to mix'],
            ['juntar', 'to add'],
            ['deitar', 'to pour'],
            ['mexer', 'to stir'],
            ['ferver', 'to boil'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'A um amigo: ___ a cebola.', o: ['Corta', 'Corte', 'Cortar'], why: '*Tu*: *corta*.' },
            { q: 'A uma senhora: ___ os ovos.', o: ['Misture', 'Mistura', 'Misturar'], why: '*Você*: *misture*.' },
            { q: 'A um amigo: ___ muito! (not)', o: ['Não mexas', 'Não mexe', 'Não mexer'], why: 'Negative *tu*: *não mexas*.' },
            { q: 'A um amigo: ___ as batatas. (descascar and cut them)', o: ['Corta-as', 'Corta-os', 'Corte-as'], why: '*As batatas* → *-as*; *tu* → *corta*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Descasca as batatas e corta-as.', why: 'Two imperatives, the second with a pronoun.' },
            { a: 'Põe água numa panela.', why: '*Põe* = put.' },
            { a: 'Deixa ferver vinte minutos.', why: '*Deixar* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Uma receita e um folheto',
      about: 'Read a recipe and a shop leaflet.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'Sopa de legumes', md: 'Para fazer uma sopa de legumes para quatro pessoas, precisa de três batatas, duas cenouras, uma cebola, meio litro de água e um pouco de sal. Descasque as batatas e as cenouras e corte-as. Ponha a água numa panela e junte os legumes. Deixe ferver vinte minutos. Misture tudo e junte o sal.' },
          { t: 'reading', title: 'Mercado da Vila', md: 'Esta semana a fruta está barata. As maçãs custam um euro e vinte o quilo, as laranjas custam um euro o quilo e os ovos custam dois euros a dúzia. Aberto de terça a sábado, das oito às treze horas.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'A receita é para quatro pessoas.', a: 't', why: '*Para quatro pessoas.*' },
            { q: 'A sopa leva meio litro de água.', a: 't', why: '*Meio litro de água.*' },
            { q: 'A sopa ferve uma hora.', a: 'f', why: 'It boils for twenty minutes: *vinte minutos*.' },
            { q: 'A sopa leva alho.', a: 'ng', why: 'Garlic is not in the list.' },
            { q: 'O mercado está aberto ao domingo.', a: 'f', why: 'It is open from Tuesday to Saturday.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Quantas batatas leva a sopa?', o: ['Três.', 'Duas.', 'Quatro.'], why: '*Três batatas.*' },
            { q: 'Quanto custa o quilo de maçãs?', o: ['Um euro e vinte.', 'Um euro.', 'Dois euros.'], why: '*As maçãs custam um euro e vinte o quilo.*' },
            { q: 'Quanto tempo ferve a sopa?', o: ['Vinte minutos.', 'Uma hora.', 'Cinco minutos.'], why: '*Deixe ferver vinte minutos.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the imperative verbs.', items: [
            { s: '[Descasque] as batatas e [corte]-as. [Ponha] a água numa panela.', why: '*Descasque, corte* and *ponha* are imperatives (você).' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Precisa ___ três batatas. (de)', a: ['de'], why: '*Precisar de*.' },
            { q: 'Um pouco ___ sal.', a: ['de'], why: '*De* after a quantity.' },
            { q: '___ ferver vinte minutos. (você, deixar)', a: ['Deixe'], why: '*Deixe ferver*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ponha a água numa panela.', why: '*Ponha* = put.' },
            { a: 'Misture tudo e junte o sal.', why: 'Two imperatives.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Preciso ___ um quilo de maçãs.', o: ['de', 'a', 'em'], why: '*Precisar de*.' },
      { q: 'Quero meio litro ___ leite.', o: ['de', 'do', 'a'], why: '*De* after a quantity.' },
      { q: 'Dou-___ o livro. (to him)', o: ['lhe', 'lhes', 'te'], why: '*Dou-lhe*.' },
      { q: 'A uma senhora: ___ a cebola.', o: ['Corte', 'Corta', 'Cortar'], why: '*Você*: *corte*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Tenho ___ ovos. (a lot)', a: ['muitos'], why: '*Muitos* agrees with *ovos*.' },
      { q: 'Telefono-___ amanhã. (to her)', a: ['lhe'], why: '*Telefono-lhe*.' },
      { q: '___ água numa panela. (tu, pôr)', a: ['Põe'], why: '*Pôr* → *põe*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the quantity with its meaning.', pairs: [
      ['um quilo de', 'a kilo of'],
      ['uma garrafa de', 'a bottle of'],
      ['meia dúzia de', 'half a dozen'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Tenho [muito] laranjas.', a: ['muitas'], why: '*Muitas* agrees with *laranjas*.' },
      { s: 'Dou-[me] o livro ao Pedro.', a: ['lhe'], why: 'To him: *lhe*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Queria um quilo de maçãs e meia dúzia de ovos.', why: 'Quantity + *de* + thing.' },
      { a: 'Descasca as batatas e corta-as.', why: 'Two imperatives.' },
    ] },
  ],
};
