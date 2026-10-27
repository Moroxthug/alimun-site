// French A1, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Home',
  goal: 'Describe your flat, its rooms and furniture.',
  art: 'mug',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['home', 'rooms', 'furniture', 'il y a', 'adjectives', 'colours', 'prepositions of place'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Dans mon appartement',
      about: 'Rooms, furniture, il y a and ce / cette / ces.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In French, a flat is **un appartement** and a house is **une maison**. The rooms are **les pièces**. A one-room flat is a *studio*; the number of rooms counts the living room and bedrooms, but not the kitchen or bathroom: *un trois-pièces* has a living room and two bedrooms.' },
          { t: 'table', caption: 'Rooms', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['l’entrée (f.)', 'hall, entrance'],
            ['le salon, le séjour', 'living room'],
            ['la cuisine', 'kitchen'],
            ['la chambre', 'bedroom'],
            ['la salle de bains', 'bathroom'],
            ['les toilettes (f.)', 'toilet'],
            ['le balcon', 'balcony'],
            ['le jardin', 'garden'],
          ] },
          { t: 'tip', art: 'owl', md: 'In a French home, the **toilettes** are often a separate small room, and the **salle de bains** has the bath or shower. In Belgium, the living room is often called **le living**.' },
        ],
        [
          { t: 'table', caption: 'Furniture', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['le lit', 'bed'],
            ['la table, la chaise', 'table, chair'],
            ['le canapé', 'sofa'],
            ['l’armoire (f.)', 'wardrobe'],
            ['le bureau', 'desk'],
            ['la lampe', 'lamp'],
            ['la fenêtre, la porte', 'window, door'],
            ['le frigo', 'fridge'],
            ['le placard', 'cupboard'],
            ['la douche', 'shower'],
          ] },
          { t: 'examples', items: [
            { s: '**Il y a** un lit et une armoire dans la chambre.', n: '*il y a* means there is and there are.' },
            { s: '**Il y a** trois chaises dans la cuisine.', n: 'The same form for singular and plural.' },
            { s: '**Il n’y a pas de** balcon.', n: 'In a negative sentence: *pas de* + noun.' },
            { s: '**Est-ce qu’il y a** un jardin ?', n: 'Is there a garden?' },
            { s: '**Ce** salon est grand. **Cette** chambre est petite. **Ces** fenêtres sont belles.', n: 'This, this and these: *ce*, *cette*, *ces*.' },
          ] },
        ],
        [
          { t: 'text', md: '**Ce** (masculine), **cette** (feminine) and **ces** (plural) point to a thing: *ce canapé, cette table, ces chaises*. Before a vowel or a silent **h**, a masculine noun takes **cet**: *cet appartement*. To point to something near you, say **Voici** (here is); for something farther, **Voilà** (there is).' },
          { t: 'ex', kind: 'select', h: 'Choose ce, cet, cette or ces.', items: [
            { q: '___ cuisine est petite.', o: ['Cette', 'Ce', 'Ces'], why: '*cuisine* is feminine: *cette*.' },
            { q: '___ appartement est grand.', o: ['Cet', 'Ce', 'Cette'], why: 'Masculine noun before a vowel: *cet*.' },
            { q: '___ chaises sont jaunes.', o: ['Ces', 'Cette', 'Ce'], why: 'Plural: *ces*.' },
            { q: 'J’aime ___ canapé.', o: ['ce', 'cette', 'ces'], why: '*canapé* is masculine: *ce*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Where do you find it?', pairs: [
            ['le lit', 'la chambre'],
            ['le frigo', 'la cuisine'],
            ['le canapé', 'le salon'],
            ['la douche', 'la salle de bains'],
          ] },
        ],
        [
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'house', o: ['une maison', 'une clé', 'un lit'], why: '*une maison* is a house.' },
            { pic: 'key', o: ['une clé', 'une porte', 'un téléphone'], why: '*une clé* is a key.' },
            { pic: 'clock', o: ['une horloge', 'une lampe', 'un bureau'], why: 'A clock on the wall: *une horloge*.' },
            { pic: 'phone', o: ['un téléphone', 'un placard', 'un lit'], why: '*un téléphone* is a phone.' },
          ] },
          { t: 'ex', kind: 'label', h: 'Label the kitchen.', scene: 'kitchen', extra: ['le lit', 'la porte'], items: [
            { x: 160, y: 50, a: 'la fenêtre', why: 'The window.' },
            { x: 260, y: 70, a: 'le frigo', why: 'The fridge.' },
            { x: 71, y: 100, a: 'la casserole', why: 'The pot.' },
            { x: 156, y: 100, a: 'la bouilloire', why: 'The kettle.' },
            { x: 160, y: 165, a: 'le placard', why: 'The cupboard.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Un grand salon bleu',
      about: 'Adjectives before and after the noun, and colours.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Most French adjectives come **after** the noun: *une table ronde, un canapé bleu, un appartement moderne*. A few common short adjectives come **before** it: *un petit appartement, une grande cuisine, un joli salon, un bon lit, un vieux canapé, un nouvel appartement*. They agree with the noun like all adjectives: *une petite chambre, de grandes fenêtres*.' },
          { t: 'table', caption: 'Adjectives before the noun', explain: ['head', 'col3'], head: ['Masculine', 'Feminine', 'Plural', 'Meaning'], rows: [
            ['petit', 'petite', 'petits, petites', 'small'],
            ['grand', 'grande', 'grands, grandes', 'big'],
            ['joli', 'jolie', 'jolis, jolies', 'pretty'],
            ['bon', 'bonne', 'bons, bonnes', 'good'],
            ['beau', 'belle', 'beaux, belles', 'beautiful'],
            ['vieux', 'vieille', 'vieux, vieilles', 'old'],
            ['nouveau', 'nouvelle', 'nouveaux, nouvelles', 'new'],
          ] },
          { t: 'tip', art: 'owl', md: 'Before a plural noun, **des** often becomes **de** when an adjective comes first: *des chaises* but *de belles chaises*. Before a vowel, **beau**, **nouveau** and **vieux** change for a masculine noun: *un bel appartement*, *un nouvel appartement*, *un vieil immeuble*.' },
        ],
        [
          { t: 'text', md: 'Colours come after the noun and agree with it. For a woman or a feminine noun, add **-e** when the colour changes: *blanc, blanche*; *vert, verte*; *gris, grise*. Colours that already end in **-e** do not change: *rouge, jaune*. A few do not change at all: *marron* (brown), *orange*.' },
          { t: 'table', caption: 'Colours', explain: ['head', 'col3'], head: ['Masculine', 'Feminine', 'Plural', 'Meaning'], rows: [
            ['rouge', 'rouge', 'rouges', 'red'],
            ['bleu', 'bleue', 'bleus, bleues', 'blue'],
            ['vert', 'verte', 'verts, vertes', 'green'],
            ['jaune', 'jaune', 'jaunes', 'yellow'],
            ['blanc', 'blanche', 'blancs, blanches', 'white'],
            ['noir', 'noire', 'noirs, noires', 'black'],
            ['gris', 'grise', 'gris, grises', 'grey'],
            ['marron', 'marron', 'marron', 'brown'],
          ] },
          { t: 'examples', items: [
            { s: 'Le salon a un **grand** canapé **gris**.', n: '*grand* before, *gris* after.' },
            { s: 'La cuisine a une **petite** table **blanche**.', n: 'Feminine: *petite*, *blanche*.' },
            { s: 'J’ai deux **chaises** **rouges**.', n: 'Plural: add *-s*.' },
            { s: 'Ma chambre est **bleue**.', n: 'After *être*, the adjective agrees: *chambre* is feminine.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Does it come before or after the noun?', groups: ['before', 'after'], explain: ['groups'], items: [
            { s: 'petit', g: 0, why: 'Common short adjectives come before: *un petit lit*.' },
            { s: 'bleu', g: 1, why: 'Colours come after: *un canapé bleu*.' },
            { s: 'grand', g: 0, why: '*un grand salon*' },
            { s: 'rond', g: 1, why: 'Shapes come after: *une table ronde*.' },
            { s: 'joli', g: 0, why: '*un joli balcon*' },
            { s: 'blanc', g: 1, why: 'Colours come after: *un mur blanc*.' },
          ] },
          { t: 'ex', kind: 'wordform', h: 'Write the adjective in the right form.', items: [
            { q: 'La table est ___.', base: 'blanc', a: ['blanche'], why: '*table* is feminine: *blanche*.' },
            { q: 'Le canapé est ___.', base: 'vert', a: ['vert'], why: '*canapé* is masculine: *vert*.' },
            { q: 'Les chaises sont ___.', base: 'rouge', a: ['rouges'], why: 'Plural: *rouges*.' },
            { q: 'Une ___ chambre avec un balcon.', base: 'grand', a: ['grande'], why: 'Before a feminine noun: *grande*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'J’ai un petit appartement.', why: 'The short adjective *petit* comes before the noun.' },
            { a: 'Le salon a une table ronde.', why: 'The shape *ronde* comes after the noun.' },
            { a: 'La chambre a un grand lit.', why: '*grand* comes before *lit*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['Nous avons un canapé bleu.', 'Nous avons un bleu canapé.', 'Nous avons un canapé bleue.'], why: 'Colours come after the noun and *canapé* is masculine: *bleu*.' },
            { q: '', o: ['Elle a une belle cuisine.', 'Elle a une cuisine belle.', 'Elle a un belle cuisine.'], why: '*belle* comes before *cuisine*, feminine.' },
            { q: '', o: ['Ce sont des chaises noires.', 'Ce sont des noires chaises.', 'Ce sont des chaises noir.'], why: 'The colour comes after the noun and takes *-es*: *noires*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Où est la clé ?',
      about: 'Say where things are, and how many rooms there are.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To ask where something is, say **Où est …?** (one thing) or **Où sont …?** (several). The words for place are small and very useful: **sur** (on), **sous** (under), **dans** (in), **devant** (in front of), **derrière** (behind), **à côté de** (next to), **entre** (between). After **de**, remember: *de* + *le* = **du**, and *de* + *les* = **des**.' },
          { t: 'table', caption: 'Where is it?', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['sur la table', 'on the table'],
            ['sous le lit', 'under the bed'],
            ['dans le placard', 'in the cupboard'],
            ['devant la porte', 'in front of the door'],
            ['derrière le canapé', 'behind the sofa'],
            ['à côté du frigo', 'next to the fridge'],
            ['entre la lampe et le lit', 'between the lamp and the bed'],
            ['à droite, à gauche', 'on the right, on the left'],
          ] },
          { t: 'tip', art: 'owl', md: '*de* joins with the article that follows: *à côté de* + *le* gives **à côté du**, and + *les* gives **à côté des**: *à côté du lit*, *à côté des chaises*. With *la* or *l’*, nothing changes: *à côté de la porte*, *à côté de l’armoire*.' },
        ],
        [
          { t: 'dialogue', title: 'Where are the keys?', lines: [
            { who: 'Sophie', s: 'Paul, où est ma clé ?' },
            { who: 'Paul', s: 'Elle est sur la table, à côté du téléphone.' },
            { who: 'Sophie', s: 'Non, il n’y a pas de clé sur la table.' },
            { who: 'Paul', s: 'Ah, elle est dans le placard de l’entrée, derrière le parapluie.' },
            { who: 'Sophie', s: 'Merci ! Je la vois.' },
          ] },
          { t: 'text', md: 'To ask how many rooms a flat has, say **Combien de pièces a l’appartement ?** The answer is **L’appartement a trois pièces.** In a rental advert, **il y a** is often replaced by **avec**: *Un appartement avec un balcon.*' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Le chat est ___ le lit. (it is under it)', o: ['sous', 'sur', 'devant'], why: '*sous* means under.' },
            { q: 'La lampe est ___ la table.', o: ['sur', 'sous', 'entre'], why: '*sur* means on.' },
            { q: 'La chaise est à côté ___ lit.', o: ['du', 'de la', 'des'], why: '*de* + *le* = *du*.' },
            { q: 'Le jardin est ___ la maison. (at the back)', o: ['derrière', 'devant', 'sur'], why: '*derrière* means behind.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Le téléphone est [dans] la table.', a: ['sur'], why: 'On a table: *sur la table*.' },
            { s: 'Le chat est à côté [de le] canapé.', a: ['du'], why: '*de* + *le* = *du*.' },
            { s: 'Il n’y a pas [des] chaises ici.', a: ['de'], why: 'In a negative sentence: *pas de*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Read the dialogue again and decide.', items: [
            { q: 'La clé est sur la table.', a: 'f', why: 'There is no key on the table: it is in the cupboard.' },
            { q: 'Le placard est dans l’entrée.', a: 't', why: '*le placard de l’entrée*' },
            { q: 'Le parapluie est derrière la clé.', a: 'f', why: 'The key is *derrière le parapluie*: the umbrella is in front of the key.' },
          ] },
          { t: 'ex', kind: 'bank', h: 'Fill the gaps with the words in the bank.', extra: ['sur', 'sous'], items: [
            { q: 'Le lit est dans la ___.', a: 'chambre', why: 'A bed is in the bedroom.' },
            { q: 'On mange dans la ___.', a: 'cuisine', why: 'We cook and often eat in the kitchen.' },
            { q: 'Le frigo est à côté du ___.', a: 'placard', why: 'The fridge is next to the cupboard.' },
            { q: 'Le lit est ___ la lampe et l’armoire.', a: 'entre', why: '*entre* means between.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un nouvel appartement',
      about: 'Read a flat advert and an email about a new flat.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'À louer', md: '**Appartement trois pièces, centre-ville**\nUn salon avec balcon, deux chambres, une cuisine et une salle de bains. Il n’y a pas de jardin. Le salon est grand et clair, avec une belle fenêtre. La cuisine est petite, mais moderne. Il y a un placard dans l’entrée.\n\nLoyer : 800 € par mois.\nContact : annonce@example.com' },
          { t: 'reading', title: 'Un e-mail à une amie', md: 'Salut Clara !\n\nJ’ai un nouvel appartement ! Il est au troisième étage, avec un petit balcon. Il y a un grand salon avec un canapé gris et une table ronde. La chambre est bleue et il y a un grand lit blanc. La cuisine est jaune.\n\nVenez samedi ! Mon adresse : rue des Fleurs. À bientôt !\n\nLucas' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'L’appartement à louer a trois pièces.', a: 't', why: '*Appartement trois pièces*' },
            { q: 'Il y a un jardin.', a: 'f', why: '*Il n’y a pas de jardin.*' },
            { q: 'La cuisine est moderne.', a: 't', why: '*La cuisine est petite, mais moderne.*' },
            { q: 'L’appartement est près d’une gare.', a: 'ng', why: 'The advert says it is in the city centre, but not near a station.' },
            { q: 'Lucas habite au troisième étage.', a: 't', why: '*Il est au troisième étage.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the e-mail again and choose.', items: [
            { q: 'De quelle couleur est la chambre de Lucas ?', o: ['bleue', 'jaune', 'grise'], why: '*La chambre est bleue.*' },
            { q: 'Qu’est-ce qu’il y a dans le salon ?', o: ['un canapé gris et une table ronde', 'un lit blanc', 'une table jaune'], why: '*un canapé gris et une table ronde*' },
            { q: 'Quand est-ce que Clara peut venir ?', o: ['samedi', 'dimanche', 'lundi'], why: '*Venez samedi !*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the e-mail.', items: [
            { q: 'La cuisine de Lucas est ___.', a: ['jaune'], why: '*La cuisine est jaune.*' },
            { q: 'Il y a un petit ___ dans son appartement.', a: ['balcon'], why: '*avec un petit balcon*' },
            { q: 'Son lit est grand et ___.', a: ['blanc'], why: '*un grand lit blanc*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Il y a ___ lit dans la chambre.', o: ['un', 'une', 'des'], why: '*lit* is masculine: *un lit*.' },
      { q: '___ appartement est grand.', o: ['Cet', 'Ce', 'Cette'], why: 'Before a vowel, masculine: *cet*.' },
      { q: 'Une table ___.', o: ['ronde', 'rond', 'rondes'], why: '*table* is feminine singular: *ronde*.' },
      { q: 'Le chat est ___ le canapé. (it is on it)', o: ['sur', 'sous', 'devant'], why: '*sur* means on.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Il n’y a pas ___ jardin.', a: ['de'], why: 'In a negative sentence: *pas de*.' },
      { q: 'Où ___ les clés ? (être)', a: ['sont'], why: 'Several keys: *sont*.' },
      { q: 'La chaise est à côté ___ lit. (de + le)', a: ['du'], why: '*de* + *le* = *du*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the room.', pairs: [
      ['le lit', 'la chambre'],
      ['le frigo', 'la cuisine'],
      ['le canapé', 'le salon'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Nous avons un petit balcon.', why: '*petit* comes before the noun.' },
      { a: 'La clé est dans le placard.', why: 'Subject, *est*, place.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Le salon a un canapé [bleue].', a: ['bleu'], why: '*canapé* is masculine: *bleu*.' },
      { s: 'Il y a [une] fenêtres.', a: ['des'], why: 'Plural: *des fenêtres*.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Write the adjective in the right form.', items: [
      { q: 'Une ___ cuisine.', base: 'petit', a: ['petite'], why: 'Before a feminine noun: *petite*.' },
      { q: 'Deux chaises ___.', base: 'noir', a: ['noires'], why: 'Feminine plural: *noires*.' },
    ] },
  ],
};
