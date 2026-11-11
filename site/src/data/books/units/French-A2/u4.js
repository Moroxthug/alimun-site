// French A2, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Food, shopping and recipes',
  goal: 'Shop for food, follow a simple recipe and say how much you need. Learn quantities, the pronoun en and the imperative in recipes.',
  art: 'mug',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['quantities', 'en', 'il faut', 'recipes', 'imperative', 'shops', 'kitchen'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Un kilo de pommes',
      about: 'Say how much you need with quantity words and il faut.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'After a word of quantity, French uses **de** (or **d’** before a vowel) with no article: *un kilo de pommes, beaucoup de fromage, assez d’eau*. This rule works for numbers as well as for containers and measures. The word after **de** keeps the singular or plural of the thing: *un paquet de pâtes, deux bouteilles de lait*.' },
          { t: 'table', caption: 'How much?', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['un peu de', 'a little'],
            ['beaucoup de', 'a lot of'],
            ['assez de', 'enough'],
            ['trop de', 'too much, too many'],
            ['un kilo de', 'a kilo of'],
            ['500 grammes de', '500 grams of'],
            ['un litre de', 'a litre of'],
            ['une bouteille de', 'a bottle of'],
            ['un paquet de', 'a packet of'],
            ['une tranche de', 'a slice of'],
          ] },
          { t: 'tip', art: 'owl', md: 'In shops, French people often ask for **une livre** (500 g) or **une baguette** (a loaf of bread). Ask the price per kilo with **Combien coûte le kilo ?** and say **c’est tout** when you have finished.' },
        ],
        [
          { t: 'text', md: 'To say what you need, use **il faut** + noun or infinitive: *Il faut du pain. Il faut acheter du lait.* To ask how much, use **combien de**: *Combien de pommes voulez-vous ?* To say that someone needs something, use **avoir besoin de**: *J’ai besoin de deux kilos de pommes de terre.*' },
          { t: 'examples', items: [
            { s: 'Je voudrais **un kilo de** tomates, s’il vous plaît.', n: 'A quantity: *de*, no article.' },
            { s: 'Il y a **beaucoup de** monde au marché.', n: '*monde* means people here.' },
            { s: 'Il faut **deux cents grammes de** sucre.', n: 'A measure.' },
            { s: 'Combien **de** bouteilles de lait voulez-vous ?', n: '*combien de* + plural.' },
            { s: 'Nous n’avons **pas assez d’**œufs.', n: '*d’* before a vowel.' },
          ] },
          { t: 'dialogue', title: 'Au marché', lines: [
            { who: 'Sophie', s: 'Bonjour ! Je voudrais un kilo de tomates, s’il vous plaît.' },
            { who: 'Marchand', s: 'Voilà. Et avec ça ?' },
            { who: 'Sophie', s: 'Une bouteille d’huile d’olive et deux cents grammes de fromage.' },
            { who: 'Marchand', s: 'Ça fait onze euros cinquante.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose de, d’ or du.', items: [
            { q: 'Je voudrais un kilo ___ pommes.', o: ['de', 'du', 'des'], why: 'After a quantity: *de*.' },
            { q: 'Il y a beaucoup ___ eau.', o: ['d’', 'de', 'du'], why: 'Before a vowel: *d’eau*.' },
            { q: 'Nous avons assez ___ pain.', o: ['de', 'du', 'des'], why: 'After *assez*: *de*.' },
            { q: 'Elle boit trop ___ café.', o: ['de', 'du', 'd’'], why: 'After *trop*: *de*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the quantity.', pairs: [
            ['du lait', 'une bouteille de lait'],
            ['des pâtes', 'un paquet de pâtes'],
            ['du jambon', 'une tranche de jambon'],
            ['des pommes', 'un kilo de pommes'],
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je voudrais un paquet de pâtes.', why: '*un paquet de* + noun with no article.' },
            { a: 'Il faut deux cents grammes de sucre.', why: '*il faut* + measure + *de*.' },
            { a: 'Combien de bouteilles voulez-vous ?', why: '*combien de* + plural noun.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Il y a trop ___ monde ici.', a: ['de'], why: '*trop de* + noun.' },
            { q: 'Nous avons besoin ___ pain.', a: ['de'], why: '*avoir besoin de*' },
            { q: 'Il ___ du sel pour la soupe.', a: ['faut'], why: '*il faut* + noun.' },
            { q: 'J’ai assez ___ argent.', a: ['d’'], why: 'Before a vowel: *d’argent*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'J’en veux deux',
      about: 'Replace de + a noun with the pronoun en.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The small word **en** replaces **du, de la, des** or a quantity + **de** and the noun. It means *some*, *any* or *of it / of them*, and it goes **before the verb**: *Tu veux du pain ? – Oui, j’en veux. Il y a des pommes ? – Oui, il y en a trois.* When there is a number or a quantity, **keep it** after the verb: *J’en veux deux. J’en prends un kilo.*' },
          { t: 'table', caption: 'Using en', explain: ['head', 'col2'], head: ['Question', 'Answer', 'Meaning'], rows: [
            ['Tu veux du fromage ?', 'Oui, j’en veux.', 'Yes, I want some.'],
            ['Tu as des frères ?', 'Oui, j’en ai deux.', 'Yes, I have two.'],
            ['Il y a du lait ?', 'Non, il n’y en a pas.', 'No, there is none.'],
            ['Vous prenez du sucre ?', 'Non, je n’en prends pas.', 'No, I do not take any.'],
            ['Elle achète des pommes ?', 'Oui, elle en achète un kilo.', 'Yes, she buys a kilo.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In a negative answer, **ne** comes before **en**: *Je n’en veux pas.* With two verbs, **en** goes before the infinitive: *Je vais en acheter.* **en** always replaces something with **de**, so a thing after *aimer* does not use it: *Tu aimes le café ? – Oui, je l’aime.* (the direct object pronoun).' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Tu veux du café ? – Oui, **j’en** veux un peu.', n: '*du café* → *en*.' },
            { s: 'Tu as des enfants ? – Oui, **j’en ai** deux.', n: 'Keep the number.' },
            { s: 'Il y a du pain ? – Non, **il n’y en a pas**.', n: 'Negative: *il n’y en a pas*.' },
            { s: 'Vous voulez des œufs ? – **J’en prends** six.', n: 'A quantity after the verb.' },
            { s: 'Je vais **en** acheter demain.', n: '*en* before the infinitive.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Answer with en.', items: [
            { q: 'Tu veux du thé ? Oui, ...', cue: 'Oui, j’en', a: ['Oui, j’en veux.'], why: '*du thé* → *en*.' },
            { q: 'Tu as des frères ? Oui, deux.', cue: 'Oui, j’en', a: ['Oui, j’en ai deux.'], why: 'Keep the number after the verb.' },
            { q: 'Il y a du pain ? Non.', cue: 'Non, il n’y', a: ['Non, il n’y en a pas.'], why: 'Negative: *il n’y en a pas*.' },
            { q: 'Vous prenez du sucre ? Non.', cue: 'Non, je n’en', a: ['Non, je n’en prends pas.'], why: '*ne … pas* around *en prends*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: '— Tu veux du pain ? — Oui, ___.', o: ['j’en veux', 'je le veux', 'je veux en'], why: '*du pain* → *en*, before the verb.' },
            { q: '— Il y a des pommes ? — Oui, ___.', o: ['il y en a trois', 'il y a en trois', 'il en y a trois'], why: '*il y en a trois*' },
            { q: '— Vous avez du lait ? — Non, ___.', o: ['nous n’en avons pas', 'nous n’avons pas en', 'nous en n’avons pas'], why: '*ne* before *en*, *pas* after the verb.' },
            { q: '— Tu aimes le café ? — Oui, ___.', o: ['je l’aime', 'j’en aime', 'j’aime en'], why: 'After *aimer*, use *le* / *l’*, not *en*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'J’en prends deux kilos.', why: '*en* before the verb, the quantity after.' },
            { a: 'Il n’y en a pas.', why: '*il n’y en a pas*' },
            { a: 'Je vais en acheter demain.', why: '*en* before the infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Tu veux du fromage ? Oui, je [le] veux.', a: ['en'], why: 'For *some* of something: *j’en veux*.' },
            { s: 'Vous avez des œufs ? Oui, nous [les] avons six.', a: ['en'], why: 'With a number and no noun, use *en*: *nous en avons six*.' },
            { s: 'Elle [a en] deux.', a: ['en a'], why: 'The pronoun comes before the verb: *elle en a deux*.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: '« J’en veux » veut dire « I want some ».', a: 't', why: '*en* replaces *du pain* or a similar noun.' },
            { q: 'On dit « J’en ai deux frères ».', a: 'f', why: 'Do not repeat the noun: *J’en ai deux* or *J’ai deux frères*.' },
            { q: '« Je n’en veux pas » veut dire « I do not want any ».', a: 't', why: 'Negative with *en*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Coupez les oignons',
      about: 'Follow a recipe with the imperative.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Recipes use the **imperative**, as you saw in the unit about directions. With a friend or in a family kitchen, use the **tu** form (no final **s** for -er verbs): *Coupe les oignons. Ajoute du sel.* With a group or in a book, use the **vous** form: *Coupez les oignons. Ajoutez du sel.* In a negative sentence, use **ne … pas**: *Ne mettez pas trop de sel.*' },
          { t: 'table', caption: 'Verbs for cooking', explain: ['head', 'col3'], head: ['tu', 'vous', 'Infinitive', 'Meaning'], rows: [
            ['coupe', 'coupez', 'couper', 'cut'],
            ['ajoute', 'ajoutez', 'ajouter', 'add'],
            ['mélange', 'mélangez', 'mélanger', 'mix'],
            ['verse', 'versez', 'verser', 'pour'],
            ['fais cuire', 'faites cuire', 'faire cuire', 'cook'],
            ['laisse', 'laissez', 'laisser', 'leave'],
            ['mets', 'mettez', 'mettre', 'put'],
            ['prends', 'prenez', 'prendre', 'take'],
          ] },
          { t: 'tip', art: 'owl', md: 'The imperative of **mettre** is **mets** (tu) and **mettez** (vous); of **faire**, **fais** and **faites**; of **prendre**, **prends** and **prenez**. For -er verbs, the **tu** form loses its **s**: *tu coupes* becomes **coupe**.' },
        ],
        [
          { t: 'table', caption: 'In the kitchen', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['le four', 'oven'],
            ['la poêle', 'frying pan'],
            ['la casserole', 'saucepan'],
            ['le couteau', 'knife'],
            ['un oignon', 'an onion'],
            ['une tomate', 'a tomato'],
            ['le sel, le poivre', 'salt, pepper'],
            ['l’huile (f.)', 'oil'],
            ['cinq minutes', 'five minutes'],
          ] },
          { t: 'dialogue', title: 'Dans la cuisine', lines: [
            { who: 'Lucas', s: 'Qu’est-ce qu’on fait pour le dîner ?' },
            { who: 'Sophie', s: 'Une omelette. Prends quatre œufs et casse-les dans un bol.' },
            { who: 'Lucas', s: 'D’accord. J’ajoute du sel ?' },
            { who: 'Sophie', s: 'Oui, un peu. Puis verse l’omelette dans la poêle et fais-la cuire cinq minutes.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the imperative with tu.', items: [
            { q: '___ les oignons. (couper)', a: ['Coupe'], why: '*tu coupes* → *Coupe !*' },
            { q: '___ du sel. (ajouter)', a: ['Ajoute'], why: '*Ajoute !*' },
            { q: '___ quatre œufs. (prendre)', a: ['Prends'], why: '*Prends !* with the *s*.' },
            { q: '___ l’huile dans la poêle. (verser)', a: ['Verse'], why: '*Verse !*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the imperative with vous.', items: [
            { q: '___ les tomates. (couper)', a: ['Coupez'], why: '*Coupez !*' },
            { q: '___ cuire pendant dix minutes. (faire)', a: ['Faites'], why: '*Faites cuire !*' },
            { q: '___ pas trop de sel. (ne pas mettre)', a: ['Ne mettez'], why: 'Negative: *Ne mettez pas*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Coupez les oignons en petits morceaux.', why: 'Verb first, then the object.' },
            { a: 'Ajoute un peu de sel.', why: '*Ajoute* + quantity + *de*.' },
            { a: 'Fais cuire pendant cinq minutes.', why: '*Fais cuire* + duration.' },
          ] },
          { t: 'ex', kind: 'match', h: 'What do you use?', pairs: [
            ['pour couper', 'un couteau'],
            ['pour faire cuire une omelette', 'une poêle'],
            ['pour faire de la soupe', 'une casserole'],
            ['pour faire un gâteau', 'le four'],
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Une recette et un prospectus',
      about: 'Read a recipe and a shop leaflet.',
      art: 'pizza',
      spreads: [
        [
          { t: 'reading', title: 'Une salade de pâtes', md: '**Pour quatre personnes**\n250 grammes de pâtes, deux tomates, un peu de fromage, de l’huile d’olive, du sel et du poivre.\n\nFaites cuire les pâtes dans de l’eau pendant dix minutes. Pendant ce temps, coupez les tomates en petits morceaux. Égouttez les pâtes et laissez-les refroidir. Mélangez les pâtes, les tomates et le fromage. Ajoutez un peu d’huile, du sel et du poivre. Servez froid.' },
          { t: 'reading', title: 'Le prospectus du marché', md: '**Cette semaine au marché**\nPommes : 2 € le kilo\nTomates : 3 € le kilo\nFromage de chèvre : 8 € les 200 grammes\nPain : 1 € la baguette\n\nPrix valables du lundi au samedi.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La recette est pour quatre personnes.', a: 't', why: '*Pour quatre personnes*' },
            { q: 'Il faut faire cuire les pâtes pendant vingt minutes.', a: 'f', why: 'For ten minutes.' },
            { q: 'On sert la salade chaude.', a: 'f', why: '*Servez froid.*' },
            { q: 'On met de la viande dans la salade.', a: 'ng', why: 'No meat is mentioned in the recipe.' },
            { q: 'Les pommes coûtent deux euros le kilo.', a: 't', why: '*Pommes : 2 € le kilo*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Que faut-il faire après avoir fait cuire les pâtes ?', o: ['Les égoutter et les laisser refroidir.', 'Les mettre au four.', 'Les manger tout de suite.'], why: '*Égouttez les pâtes et laissez-les refroidir.*' },
            { q: 'Combien coûte le fromage de chèvre ?', o: ['8 € les 200 grammes', '8 € le kilo', '2 € les 200 grammes'], why: '*Fromage de chèvre : 8 € les 200 grammes*' },
            { q: 'Pendant combien de jours les prix sont-ils valables ?', o: ['Du lundi au samedi.', 'Du lundi au dimanche.', 'Le samedi seulement.'], why: '*Prix valables du lundi au samedi.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Pour la salade, il faut deux ___.', a: ['tomates'], why: '*deux tomates*' },
            { q: 'Il faut un peu d’___ d’olive.', a: ['huile'], why: '*de l’huile d’olive*' },
            { q: 'Pour la recette, on ___ les pâtes, les tomates et le fromage.', a: ['mélange'], why: '*Mélangez les pâtes, les tomates et le fromage.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Je voudrais un kilo ___ pommes.', o: ['de', 'des', 'du'], why: 'After a quantity: *de*.' },
      { q: '— Tu veux du pain ? — Oui, ___.', o: ['j’en veux', 'je le veux', 'je veux en'], why: '*en* before the verb.' },
      { q: '___ les oignons. (tu)', o: ['Coupe', 'Coupes', 'Coupez'], why: '*tu coupes* → *Coupe !*' },
      { q: '— Il y a du lait ? — Non, ___.', o: ['il n’y en a pas', 'il y a pas', 'il n’y a pas en'], why: '*il n’y en a pas*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Il y a trop ___ monde ici.', a: ['de'], why: '*trop de*' },
      { q: 'Nous avons besoin ___ pain.', a: ['de'], why: '*avoir besoin de*' },
      { q: '___ cuire pendant dix minutes. (faire, vous)', a: ['Faites'], why: '*Faites cuire !*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the quantity.', pairs: [
      ['du lait', 'une bouteille de lait'],
      ['des pâtes', 'un paquet de pâtes'],
      ['du jambon', 'une tranche de jambon'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Answer with en.', items: [
      { q: 'Tu as des frères ? Oui, trois.', cue: 'Oui, j’en', a: ['Oui, j’en ai trois.'], why: 'Keep the number after the verb.' },
      { q: 'Vous voulez du sucre ? Non.', cue: 'Non, je n’en', a: ['Non, je n’en veux pas.'], why: '*ne … pas* around *en veux*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Je vais en acheter demain.', why: '*en* before the infinitive.' },
      { a: 'Ne mettez pas trop de sel.', why: 'Negative imperative.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Il y a beaucoup [des] pommes.', a: ['de'], why: 'After *beaucoup*: *de*.' },
    ] },
  ],
};
