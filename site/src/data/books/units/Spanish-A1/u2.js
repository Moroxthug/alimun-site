// Spanish A1, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Family and people',
  goal: 'Talk about your family, say how old people are and describe them.',
  art: 'dog',
  tags: { skills: ['vocabulary', 'grammar', 'reading'], topics: ['tener', 'family', 'age', 'numbers', 'possessives', 'adjectives', 'describing-people'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Tengo dos hermanos',
      about: 'Say who is in your family and how old people are.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: '**tener** means *to have*. It is irregular, so learn every form. Use it to talk about your family: *Tengo dos hermanos* (I have two brothers).' },
          { t: 'table', caption: 'tener (to have)', quiz: true, head: ['', 'tener'], rows: [
            ['yo', 'tengo'],
            ['tú', 'tienes'],
            ['él / ella / usted', 'tiene'],
            ['nosotros / nosotras', 'tenemos'],
            ['vosotros / vosotras', 'tenéis'],
            ['ellos / ellas / ustedes', 'tienen'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Spanish, you *have* your age: *Tengo veinte años* means I am twenty. Do not say *soy veinte años*. To ask, say **¿Cuántos años tienes?** or, politely, **¿Cuántos años tiene usted?**' },
        ],
        [
          { t: 'text', md: 'Many family words end in **-o** for a man and **-a** for a woman: *el hermano, la hermana*. Always learn the word with *el* or *la*.' },
          { t: 'table', caption: 'La familia', quiz: true, head: ['el', 'la'], rows: [
            ['el padre', 'la madre'],
            ['el hijo', 'la hija'],
            ['el hermano', 'la hermana'],
            ['el abuelo', 'la abuela'],
            ['el tío', 'la tía'],
            ['el primo', 'la prima'],
            ['el marido', 'la mujer'],
            ['el novio', 'la novia'],
          ] },
          { t: 'tip', art: 'owl', md: 'The plural with **-os** is for men, or for men and women together: *los padres* (mother and father), *los hermanos* (brothers, or brothers and sisters), *los hijos* (sons, or children). *Mi mujer* means my wife. You can also say *mi esposa* and *mi esposo*.' },
        ],
        [
          { t: 'text', md: 'From 21 to 29, the numbers are one word: *veintiuno, veintidós*. From 31, they are three words with **y** (and): *treinta y dos, cincuenta y ocho*. Before a noun, *uno* becomes **un**: *Tengo veintiún años.*' },
          { t: 'table', caption: 'Numbers 20 to 100', explain: ['head'], quiz: true, head: ['Number', 'Spanish'], rows: [
            ['20', 'veinte'],
            ['21', 'veintiuno'],
            ['22', 'veintidós'],
            ['23', 'veintitrés'],
            ['26', 'veintiséis'],
            ['30', 'treinta'],
            ['31', 'treinta y uno'],
            ['40', 'cuarenta'],
            ['45', 'cuarenta y cinco'],
            ['50', 'cincuenta'],
            ['60', 'sesenta'],
            ['70', 'setenta'],
            ['80', 'ochenta'],
            ['90', 'noventa'],
            ['100', 'cien'],
          ] },
          { t: 'examples', items: [
            { s: '¿Cuántos años **tienes**? – **Tengo** treinta y cuatro años.', n: '*tener* + number + *años*.' },
            { s: 'Mi abuela **tiene** ochenta y dos años.', n: 'One person: *tiene*.' },
            { s: 'Mi hijo **tiene** veintiún años.', n: '*veintiuno* becomes *veintiún* before *años*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the partner.', pairs: [
            ['el padre', 'la madre'],
            ['el hijo', 'la hija'],
            ['el abuelo', 'la abuela'],
            ['el tío', 'la tía'],
            ['el marido', 'la mujer'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the right form of tener.', items: [
            { q: 'Yo ___ dos hermanas.', a: ['tengo'], why: '*yo tengo*' },
            { q: '¿Cuántos años ___ tú?', a: ['tienes'], why: '*tú tienes*' },
            { q: 'Mi abuelo ___ noventa años.', a: ['tiene'], why: 'One person, *él*: *tiene*.' },
            { q: 'Nosotros ___ un hijo.', a: ['tenemos'], why: '*nosotros tenemos*' },
            { q: '¿Vosotros ___ primos en Madrid?', a: ['tenéis'], why: '*vosotros tenéis*, with an accent.' },
            { q: 'Pedro y Ana ___ tres hijos.', a: ['tienen'], why: 'Two people, *ellos*: *tienen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the age in words.', items: [
            { q: 'Mi madre tiene ___ años. (45)', a: ['cuarenta y cinco'], why: '40 + 5: *cuarenta y cinco*, three words.' },
            { q: 'Mi primo tiene ___ años. (22)', a: ['veintidós'], why: 'From 21 to 29, one word: *veintidós*, with an accent.' },
            { q: 'Mi padre tiene ___ años. (58)', a: ['cincuenta y ocho'], why: '50 + 8: *cincuenta y ocho*.' },
            { q: 'Mi abuelo tiene ___ años. (67)', a: ['sesenta y siete'], why: '60 + 7: *sesenta y siete*.' },
            { q: 'Mi tía tiene ___ años. (31)', a: ['treinta y un'], why: 'Before *años*, *uno* becomes *un*: *treinta y un años*.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Find the odd one out.', items: [
            { o: ['la tía', 'el tío', 'el primo', 'el abuelo'], why: '*la tía* is a woman. The others are men.' },
            { o: ['hablo', 'tengo', 'tienes', 'tenemos'], why: '*hablo* is from *hablar*. The others are forms of *tener*.' },
            { o: ['cien', 'veintidós', 'veintitrés', 'veintiséis'], why: '*cien* is 100. The others are between 20 and 30.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'mi, tu, su',
      about: 'Say who someone or something belongs to.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: '**Possessives** say who something belongs to: *mi madre* (my mother), *tu hermano* (your brother). They go before the noun. With a plural noun, add **-s**: *mis hermanos*.' },
          { t: 'table', caption: 'Possessives', explain: ['head'], quiz: true, head: ['Person', 'One thing', 'More than one'], rows: [
            ['yo', 'mi', 'mis'],
            ['tú', 'tu', 'tus'],
            ['él / ella / usted', 'su', 'sus'],
            ['nosotros / nosotras', 'nuestro / nuestra', 'nuestros / nuestras'],
            ['vosotros / vosotras', 'vuestro / vuestra', 'vuestros / vuestras'],
            ['ellos / ellas / ustedes', 'su', 'sus'],
          ] },
          { t: 'tip', art: 'owl', md: '*tu* (your) has no accent. *tú* (you) has an accent: *Tú tienes un perro. Tu perro es grande.*' },
        ],
        [
          { t: 'text', md: '**nuestro** and **vuestro** also change for masculine and feminine nouns: *nuestro hijo, nuestra hija, nuestros hijos, nuestras hijas*. The other possessives only change for the plural.' },
          { t: 'examples', items: [
            { s: '**Mi** hermana se llama Inés.', n: 'One sister: *mi*.' },
            { s: '**Mis** abuelos son de Galicia.', n: 'Plural: *mis*.' },
            { s: '¿Cómo se llama **tu** padre?', n: '*tu*, without an accent.' },
            { s: 'Ana y **su** marido tienen dos hijos.', n: '*su* here means her.' },
            { s: '**Nuestra** madre es profesora.', n: '*la madre* is feminine: *nuestra*.' },
            { s: '¿Cuántos años tienen **vuestros** hijos?', n: 'Masculine plural: *vuestros*.' },
          ] },
          { t: 'tip', art: 'owl', md: '*su* and *sus* can mean his, her, its, their, and also your for *usted* and *ustedes*. *Ana y su hermano*: her brother. *Pedro y su hermano*: his brother.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right possessive.', items: [
            { q: 'Tengo una hermana. ___ hermana se llama Marta.', o: ['Mi', 'Mis', 'Tu'], why: 'The sister is mine, and she is one person: *mi*.' },
            { q: 'Sara, ¿cómo se llaman ___ padres?', o: ['tus', 'tu', 'mis'], why: 'You ask Sara (*tú*) about her parents. Plural: *tus*.' },
            { q: 'Pedro tiene dos hijos. ___ hijos tienen diez y doce años.', o: ['Sus', 'Su', 'Mis'], why: 'They are Pedro’s sons. Plural: *sus*.' },
            { q: 'Tenemos una hija. ___ hija tiene cinco años.', o: ['Nuestra', 'Nuestro', 'Nuestras'], why: '*nosotros*, and *la hija* is feminine and singular: *nuestra*.' },
            { q: 'Chicos, ¿cómo se llama ___ abuela?', o: ['vuestra', 'vuestro', 'vuestras'], why: 'You speak to a group (*vosotros*). *la abuela* is feminine: *vuestra*.' },
            { q: 'Señor Gil, ¿es ___ hijo?', o: ['su', 'tu', 'sus'], why: 'You speak politely (*usted*): *su*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the possessive.', items: [
            { q: '___ abuelos son de Cuba. (yo)', a: ['Mis'], why: 'Plural: *mis*.' },
            { q: '¿Es ___ perro? (tú)', a: ['tu'], why: '*tu*, without an accent.' },
            { q: 'Lucía y ___ marido son de Lugo. (ella)', a: ['su'], why: 'Her husband: *su*.' },
            { q: '___ casa es muy grande. (nosotros)', a: ['Nuestra'], why: '*la casa* is feminine: *nuestra*.' },
            { q: '¿Cómo se llaman ___ hijas? (vosotros)', a: ['vuestras'], why: 'Feminine plural: *vuestras*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Tengo dos hermanos. [Mi] hermanos son de Valencia.', a: ['Mis'], why: '*hermanos* is plural: *mis*.' },
            { s: '[Nuestro] hija tiene tres años.', a: ['Nuestra'], why: '*la hija* is feminine: *nuestra*.' },
            { s: '¿Cómo se llama [tú] madre?', a: ['tu'], why: 'The possessive *tu* has no accent.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: '¿Cómo es?',
      about: 'Describe people with ser and an adjective.',
      art: 'monster',
      spreads: [
        [
          { t: 'text', md: 'To describe a person, use **ser** + adjective: *Mi hermano es alto.* The adjective changes with the person. For a woman, **-o** becomes **-a**: *Mi hermana es alta.* For more than one person, add **-s**: *Mis hermanos son altos.*' },
          { t: 'table', caption: 'Adjectives', explain: ['head', 'col0'], quiz: true, head: ['', 'Man', 'Woman', 'Men', 'Women'], rows: [
            ['tall', 'alto', 'alta', 'altos', 'altas'],
            ['short', 'bajo', 'baja', 'bajos', 'bajas'],
            ['slim', 'delgado', 'delgada', 'delgados', 'delgadas'],
            ['good-looking', 'guapo', 'guapa', 'guapos', 'guapas'],
            ['nice', 'simpático', 'simpática', 'simpáticos', 'simpáticas'],
            ['kind', 'amable', 'amable', 'amables', 'amables'],
            ['young', 'joven', 'joven', 'jóvenes', 'jóvenes'],
          ] },
          { t: 'tip', art: 'owl', md: 'Adjectives that end in **-e** or in a consonant are the same for men and women: *amable, joven*. For the plural, add **-s** after a vowel and **-es** after a consonant: *amables, jóvenes*. For a group of men and women, use the form for men: *Mis padres son altos.*' },
        ],
        [
          { t: 'text', md: 'To ask what someone is like, say **¿Cómo es…?** To talk about hair and eyes, use **tener**: *Tiene el pelo largo. Tiene los ojos azules.*' },
          { t: 'examples', items: [
            { s: '¿Cómo **es** tu madre? – **Es** muy simpática.', n: '*muy* means very.' },
            { s: 'Mi padre **es** alto y delgado.', n: 'One man: *alto, delgado*.' },
            { s: 'Mis primas **son** muy guapas.', n: 'Women, plural: *-as*.' },
            { s: 'Mis abuelos **son** mayores, pero muy activos.', n: 'For old people, say *mayor*. It is more polite than *viejo*.' },
            { s: 'Mi hermana **tiene** el pelo corto y los ojos verdes.', n: '*tener* for hair and eyes.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Write the adjective in the right form.', items: [
            { q: 'Mis hermanas son ___.', base: 'alto', a: ['altas'], why: 'Women, plural: *altas*.' },
            { q: 'Mi tía es muy ___.', base: 'simpático', a: ['simpática'], why: 'One woman: *simpática*.' },
            { q: 'Mis padres son ___.', base: 'joven', a: ['jóvenes'], why: 'Plural after a consonant: *-es*. Add an accent: *jóvenes*.' },
            { q: 'Las profesoras son muy ___.', base: 'amable', a: ['amables'], why: '*amable* is the same for women. Plural: *-s*.' },
            { q: 'Tu hermana es muy ___.', base: 'guapo', a: ['guapa'], why: 'One woman: *guapa*.' },
            { q: 'Mi abuelo y mi abuela son ___.', base: 'delgado', a: ['delgados'], why: 'A man and a woman together: the form for men, *delgados*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the adjectives.', items: [
            { s: 'Mi prima es [alta] y muy [simpática].', why: '*alta* and *simpática* describe the cousin. *muy* is not an adjective.' },
            { s: 'Mis tíos son [jóvenes] y [amables].', why: 'Both adjectives are plural, like *tíos*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence. Start with the words given.', items: [
            { q: 'Mi hermano es alto.', cue: 'Mi hermana', a: ['Mi hermana es alta.'], why: 'One woman: *alta*.' },
            { q: 'Mi amigo es simpático.', cue: 'Mis amigas', a: ['Mis amigas son simpáticas.'], why: 'Women, plural: *son simpáticas*.' },
            { q: 'El profesor es joven.', cue: 'Los profesores', a: ['Los profesores son jóvenes.'], why: 'Plural: *son jóvenes*, with an accent.' },
            { q: 'Mi padre es amable.', cue: 'Mis padres', a: ['Mis padres son amables.'], why: 'Plural: *son amables*.' },
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the verb?', items: [
            { key: 'ser', o: ['alto', 'de Madrid', 'simpática', 'veinte años', 'dos hijos'], a: [0, 1, 2], why: '*ser* + adjective or *de* + place. For age and children, use *tener*.' },
            { key: 'tener', o: ['treinta años', 'una hermana', 'los ojos azules', 'guapo', 'de Lima'], a: [0, 1, 2], why: '*tener* for age, family, hair and eyes. *guapo* and *de Lima* go with *ser*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A family photo',
      about: 'Read a message with a family photo.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'Una foto de mi familia', md: '¡Hola, Marta!\n\nAquí tienes una foto de mi familia. Es el cumpleaños de mi abuela. Ella tiene ochenta años y es muy simpática.\n\nEl hombre alto con gafas es mi padre, Javier. Tiene cincuenta y dos años y es profesor de inglés. Mi madre, Carmen, es la mujer del pelo corto. Es baja y muy divertida.\n\nTambién tengo dos hermanos, Pablo y Hugo. Tienen diecisiete años. Son altos y delgados, como mi padre.\n\nLa niña pequeña es mi prima Sara. Tiene seis años. Es la hija de mi tía Rosa.\n\n¿Y tu familia? ¿Tienes hermanos?\n\nUn abrazo,\nLucía' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La abuela de Lucía tiene ochenta años.', a: 't', why: '*Ella tiene ochenta años.*' },
            { q: 'El padre de Lucía es profesor.', a: 't', why: '*Es profesor de inglés.*' },
            { q: 'La madre de Lucía es alta.', a: 'f', why: '*Es baja y muy divertida.*' },
            { q: 'Lucía tiene tres hermanos.', a: 'f', why: 'She has two brothers: Pablo and Hugo.' },
            { q: 'Sara es la hermana de Lucía.', a: 'f', why: 'Sara is her cousin: *mi prima Sara*.' },
            { q: 'Rosa tiene dos hijos.', a: 'ng', why: 'Sara is Rosa’s daughter, but the message does not say how many children Rosa has.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the message again and choose.', items: [
            { q: '¿Quién es Javier?', o: ['el padre de Lucía', 'el hermano de Lucía', 'el abuelo de Lucía'], why: '*El hombre alto con gafas es mi padre, Javier.*' },
            { q: '¿Cómo es la madre de Lucía?', o: ['baja y divertida', 'alta y delgada', 'alta y simpática'], why: '*Es baja y muy divertida.*' },
            { q: '¿Cómo son Pablo y Hugo?', o: ['altos y delgados', 'bajos y simpáticos', 'mayores'], why: '*Son altos y delgados, como mi padre.*' },
            { q: '¿Qué pregunta Lucía a Marta?', o: ['si tiene hermanos', 'cuántos años tiene', 'de dónde es'], why: '*¿Tienes hermanos?*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Mi hermana ___ veinticinco años.', o: ['tiene', 'es', 'son'], why: 'Age goes with *tener*: *tiene*.' },
      { q: 'Tengo dos primos. ___ primos son de Chile.', o: ['Mis', 'Mi', 'Su'], why: 'The cousins are mine. Plural: *mis*.' },
      { q: 'Mis abuelas son muy ___.', o: ['simpáticas', 'simpáticos', 'simpática'], why: 'Women, plural: *simpáticas*.' },
      { q: 'Somos hermanos. ___ madre se llama Rosa.', o: ['Nuestra', 'Nuestro', 'Vuestra'], why: '*nosotros*, and *la madre* is feminine: *nuestra*.' },
      { q: '¿Cuántos años ___ usted?', o: ['tiene', 'tienes', 'es'], why: '*usted* takes the same form as *él*: *tiene*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'El padre de mi padre es mi ___.', a: ['abuelo'], why: 'Your father’s father is your *abuelo*.' },
      { q: 'La hija de mi tía es mi ___.', a: ['prima'], why: 'The daughter of your aunt is your *prima*.' },
      { q: 'Nosotros ___ un perro. (tener)', a: ['tenemos'], why: '*nosotros tenemos*' },
      { q: 'Mi abuelo tiene ___ años. (70)', a: ['setenta'], why: '70: *setenta*.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Write the adjective in the right form.', items: [
      { q: 'Mis hermanos son ___.', base: 'joven', a: ['jóvenes'], why: 'Plural after a consonant: *-es*, with an accent.' },
      { q: 'Mi madre es ___.', base: 'alto', a: ['alta'], why: 'One woman: *alta*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Mi hija [es] diez años.', a: ['tiene'], why: 'Age goes with *tener*: *tiene diez años*.' },
      { s: '¿Cómo son [tu] hijos?', a: ['tus'], why: '*hijos* is plural: *tus*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: '¿Cuántos años tiene tu hermano?', why: '*¿Cuántos años* + *tener* + the person.' },
      { a: '¿Cómo es tu madre?', why: '*¿Cómo es…?* asks what a person is like.' },
    ] },
  ],
};
