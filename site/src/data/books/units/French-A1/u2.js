// French A1, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Family and people',
  goal: 'Talk about your family, say how old people are and describe them simply.',
  art: 'cat',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['family', 'avoir', 'age', 'numbers', 'possessives', 'adjectives', 'description'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'J’ai deux frères',
      about: 'avoir, family words, age and numbers up to 100.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: '**avoir** means *to have*. It is irregular and you will use it all the time. In French, you do not *are* a certain age, you *have* it: **J’ai vingt-cinq ans** (I am 25). The word **ans** (years) must be there.' },
          { t: 'table', caption: 'avoir (to have)', quiz: true, head: ['', 'avoir'], rows: [
            ['je', 'ai'],
            ['tu', 'as'],
            ['il / elle / on', 'a'],
            ['nous', 'avons'],
            ['vous', 'avez'],
            ['ils / elles', 'ont'],
          ] },
          { t: 'tip', art: 'owl', md: 'Before a vowel, **je** becomes **j’**: *j’ai*. With *nous*, *vous*, *ils* and *elles* the **s** before a vowel is pronounced like a **z**: *nous avons*, *ils ont*. This sound is called a liaison.' },
        ],
        [
          { t: 'text', md: 'Here are the words for your family. A word for a woman usually has an **e** or a different form: *un cousin, une cousine*. The word **parents** means *mother and father*, not *relatives*.' },
          { t: 'table', caption: 'The family', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['le père, la mère', 'father, mother'],
            ['les parents', 'parents'],
            ['le frère, la sœur', 'brother, sister'],
            ['le fils, la fille', 'son, daughter'],
            ['le grand-père, la grand-mère', 'grandfather, grandmother'],
            ['le mari, la femme', 'husband, wife'],
            ['l’oncle, la tante', 'uncle, aunt'],
            ['le cousin, la cousine', 'cousin (man, woman)'],
            ['un enfant', 'a child'],
            ['les enfants', 'children'],
          ] },
          { t: 'examples', items: [
            { s: 'J’**ai** un frère et deux sœurs.', n: '*un frère*, *deux sœurs*: the number comes before the noun.' },
            { s: 'Elle **a** trois enfants.', n: '*Elle a* + a number + *enfants*.' },
            { s: 'Mes parents **ont** une maison à Lille.', n: '*ils / elles ont*, here for two people.' },
            { s: 'Vous **avez** des frères et sœurs ?', n: '*des frères et sœurs* means brothers and sisters.' },
            { s: 'Je n’**ai** pas de frère.', n: 'In a negative sentence, *un* becomes *de*: *pas de frère*.' },
          ] },
        ],
        [
          { t: 'text', md: 'To ask someone’s age, say **Quel âge as-tu ?** (with *tu*) or **Quel âge avez-vous ?** (with *vous*). For the numbers above 20 you add the tens and the units: *vingt-deux*, *trente-cinq*. With **1**, you say **et un**: *vingt et un*, *trente et un*.' },
          { t: 'table', caption: 'Numbers 20 to 100', explain: ['head'], quiz: true, head: ['Number', 'French', 'Number', 'French'], rows: [
            ['20', 'vingt', '60', 'soixante'],
            ['21', 'vingt et un', '70', 'soixante-dix'],
            ['22', 'vingt-deux', '71', 'soixante et onze'],
            ['30', 'trente', '80', 'quatre-vingts'],
            ['31', 'trente et un', '81', 'quatre-vingt-un'],
            ['40', 'quarante', '90', 'quatre-vingt-dix'],
            ['50', 'cinquante', '100', 'cent'],
          ] },
          { t: 'tip', art: 'owl', md: 'Belgium and Switzerland say **septante** (70) and **nonante** (90); in parts of Switzerland you also hear **huitante** (80). The French of France says *soixante-dix* and *quatre-vingt-dix*, which means *sixty-ten* and *four-twenties-ten*. Learn them as they are.' },
        ],
        [
          { t: 'dialogue', title: 'Brothers and sisters', lines: [
            { who: 'Sophie', s: 'Tu as des frères et sœurs, Lucas ?' },
            { who: 'Lucas', s: 'Oui, j’ai une sœur et un frère. Et toi ?' },
            { who: 'Sophie', s: 'Moi, j’ai deux frères. Quel âge a ta sœur ?' },
            { who: 'Lucas', s: 'Elle a vingt-huit ans. Mon frère a trente et un ans.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of avoir.', verb: 'avoir', tense: 'present', rows: [
            ['je', 'ai'],
            ['tu', 'as'],
            ['il / elle', 'a'],
            ['nous', 'avons'],
            ['vous', 'avez'],
            ['ils / elles', 'ont'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the right form of avoir.', items: [
            { q: 'J’___ une sœur.', a: ['ai'], why: '*j’ai*' },
            { q: 'Tu ___ quel âge ?', a: ['as'], why: '*tu as*' },
            { q: 'Mon père ___ cinquante-huit ans.', a: ['a'], why: 'One person, *il*: *a*.' },
            { q: 'Nous ___ deux enfants.', a: ['avons'], why: '*nous avons*' },
            { q: 'Vous ___ des frères ?', a: ['avez'], why: '*vous avez*' },
            { q: 'Mes cousins ___ une maison.', a: ['ont'], why: 'Several people, *ils*: *ont*.' },
          ] },
          { t: 'ex', kind: 'crossword', h: 'Write the numbers.', words: [
            { a: 'trente', clue: 'Vingt plus dix.' },
            { a: 'quarante', clue: 'Vingt fois deux.' },
            { a: 'cinquante', clue: 'Quarante plus dix.' },
            { a: 'soixante', clue: 'Cinquante plus dix.' },
            { a: 'vingt', clue: 'Dix plus dix.' },
            { a: 'cent', clue: 'Le plus grand nombre de ce tableau.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Ma sœur, mon frère',
      about: 'mon, ma, mes and the other words for my, your, his and her.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'French has different words for *my* for a masculine noun, a feminine noun and a plural. They agree with the **thing owned**: **mon** père, **ma** mère, **mes** parents. It is the same for *your* (**ton, ta, tes**) and for *his* or *her* (**son, sa, ses**).' },
          { t: 'table', caption: 'My, your, his, her', explain: ['head'], head: ['', 'masculine', 'feminine', 'plural'], rows: [
            ['my', 'mon père', 'ma mère', 'mes parents'],
            ['your (tu)', 'ton frère', 'ta sœur', 'tes cousins'],
            ['his, her', 'son oncle', 'sa tante', 'ses enfants'],
            ['our', 'notre père', 'notre mère', 'nos parents'],
            ['your (vous)', 'votre frère', 'votre sœur', 'vos cousins'],
            ['their', 'leur oncle', 'leur tante', 'leurs enfants'],
          ] },
          { t: 'tip', art: 'owl', md: '**son, sa, ses** agree with the noun that follows, not with the owner: *Sophie parle de son frère* and *Lucas parle de son frère* use the same word. Only the context tells you if it is *his* or *her*. Before a feminine word that starts with a vowel, use **mon, ton, son**: *mon amie*, *ton école*, *son adresse*.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Mon** père s’appelle Paul.', n: '*père* is masculine.' },
            { s: '**Ma** sœur a vingt-huit ans.', n: '*sœur* is feminine.' },
            { s: '**Mes** parents habitent à Nantes.', n: 'Plural: *mes*.' },
            { s: 'Voici **mon** amie Clara.', n: 'Feminine, but *amie* starts with a vowel: *mon*.' },
            { s: 'Comment s’appelle **votre** fils ?', n: 'With *vous*: *votre*.' },
            { s: 'Nos voisins ont **leurs** enfants à Lyon.', n: 'Several owners, several children: *leurs*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: '___ mère s’appelle Anna.', o: ['Ma', 'Mon', 'Mes'], why: '*mère* is feminine: *ma*.' },
            { q: '___ frère a trente ans.', o: ['Mon', 'Ma', 'Mes'], why: '*frère* is masculine: *mon*.' },
            { q: 'Tu as ___ parents ici ?', o: ['tes', 'ta', 'ton'], why: '*parents* is plural: *tes*.' },
            { q: 'Voici ___ amie Marta.', o: ['mon', 'ma', 'mes'], why: '*amie* is feminine, but it starts with a vowel: *mon amie*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'tu or vous? Choose the right word.', items: [
            { q: 'Lucas, c’est ___ frère ?', o: ['ton', 'votre', 'ta'], why: 'Lucas is a friend, so *tu*: *ton frère*.' },
            { q: 'Madame Roux, c’est ___ fille ?', o: ['votre', 'ta', 'ton'], why: 'Polite *vous*: *votre fille*.' },
            { q: 'Léa et Nadia, ce sont ___ parents ?', o: ['vos', 'tes', 'votre'], why: 'Two people, *vous*, and *parents* is plural: *vos parents*.' },
            { q: 'Tu aimes ___ cousine ?', o: ['ta', 'ton', 'tes'], why: '*cousine* is feminine: *ta cousine*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'J’habite avec [ma] frère.', a: ['mon'], why: '*frère* is masculine: *mon frère*.' },
            { s: 'Voilà [mon] parents.', a: ['mes'], why: '*parents* is plural: *mes parents*.' },
            { s: 'Elle présente [sa] oncle Paul.', a: ['son'], why: '*oncle* is masculine: *son oncle*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write my, your, his or her.', items: [
            { q: 'Je m’appelle Anna. Voici ___ mère, Rosa.', a: ['ma'], why: 'The speaker says *my mother*, *mère* is feminine: *ma*.' },
            { q: 'Sophie, ___ frère est ici ?', a: ['ton'], why: '*frère* is masculine and you speak to Sophie with *tu*: *ton*.' },
            { q: 'Voici Clara et ___ mari, Paul.', a: ['son'], why: '*mari* is masculine, and he is Clara’s husband: *son mari*.' },
            { q: 'Mes cousins aiment ___ maison.', a: ['leur'], why: 'Several owners, one house: *leur maison*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Il est grand, elle est gentille',
      about: 'Describe people with être and an adjective that agrees.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'An adjective **agrees** with the person it describes. For a woman, add **-e**: *grand, grande*. For several people, add **-s**: *grands, grandes*. Some adjectives already end in **-e** and do not change for a woman: *jeune, sympa*. Others double the last letter: *gentil, gentille*; *mignon, mignonne*.' },
          { t: 'table', caption: 'Describing people', explain: ['head', 'col3'], head: ['Man', 'Woman', 'Plural (men)', 'Meaning'], rows: [
            ['grand', 'grande', 'grands', 'tall'],
            ['petit', 'petite', 'petits', 'short, small'],
            ['gentil', 'gentille', 'gentils', 'kind'],
            ['content', 'contente', 'contents', 'happy'],
            ['blond', 'blonde', 'blonds', 'blond'],
            ['brun', 'brune', 'bruns', 'dark-haired'],
            ['jeune', 'jeune', 'jeunes', 'young'],
            ['sympa', 'sympa', 'sympas', 'nice, friendly'],
          ] },
          { t: 'tip', art: 'owl', md: 'In writing, the **-e** matters; in speech, it often makes a difference you can hear: *petit* ends without a consonant sound, *petite* ends with **t**. With *gentil* and *gentille*, you hear the **l** only in the feminine form.' },
        ],
        [
          { t: 'text', md: 'To describe a person, use **il est** or **elle est** + an adjective: *Mon frère est grand.* To say who someone is, use **c’est**: *C’est mon frère.* At this level, use **c’est** with a name or a noun (*C’est Clara. C’est ma sœur.*) and **il est** or **elle est** with an adjective. To ask a yes/no question, raise your voice at the end or start with **est-ce que**: *Il est grand ? Est-ce qu’il est grand ?*' },
          { t: 'examples', items: [
            { s: 'Mon père **est grand** et brun.', n: '*père* is masculine: no ending.' },
            { s: 'Ma sœur **est petite** et blonde.', n: '*sœur* is feminine: add *-e*.' },
            { s: 'Mes cousins **sont gentils**.', n: 'Plural: add *-s*.' },
            { s: '**C’est** mon amie Clara. **Elle est** sympa.', n: '*c’est* introduces a person, *elle est* describes her.' },
            { s: '**Est-ce que** ta mère est jeune ?', n: 'A yes/no question with *est-ce que*.' },
          ] },
          { t: 'dialogue', title: 'A photo', lines: [
            { who: 'Nadia', s: 'C’est qui, sur la photo ?' },
            { who: 'Karim', s: 'C’est ma sœur. Elle s’appelle Amira.' },
            { who: 'Nadia', s: 'Elle est grande ! Elle a quel âge ?' },
            { who: 'Karim', s: 'Elle a vingt-deux ans. Elle est très gentille.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Mon père est ___.', o: ['grand', 'grande', 'grands'], why: '*père* is masculine and singular: *grand*.' },
            { q: 'Ma sœur est ___.', o: ['petite', 'petit', 'petits'], why: '*sœur* is feminine: *petite*.' },
            { q: 'Mes cousins sont ___.', o: ['gentils', 'gentil', 'gentille'], why: 'Several men: *gentils*.' },
            { q: 'Ma grand-mère est ___.', o: ['contente', 'content', 'contents'], why: 'A woman: *contente*.' },
            { q: 'Sophie est ___.', o: ['sympa', 'sympas', 'sympate'], why: '*sympa* does not change for a woman.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Mon frère est très grand.', why: 'Subject, *est*, *très* and the adjective.' },
            { a: 'Ma mère est jeune et blonde.', why: 'Both adjectives are feminine singular.' },
            { a: 'Ton frère est très sympa.', why: 'Subject, *est*, *très* and the adjective.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Write the adjective in the right form.', items: [
            { q: 'Ma tante est ___.', base: 'petit', a: ['petite'], why: 'A woman: add *-e*.' },
            { q: 'Mes frères sont ___.', base: 'grand', a: ['grands'], why: 'Several men: add *-s*.' },
            { q: 'Ma cousine est très ___.', base: 'gentil', a: ['gentille'], why: 'A woman: *gentil* becomes *gentille*.' },
            { q: 'Mes sœurs sont ___.', base: 'content', a: ['contentes'], why: 'Several women: *-e* and *-s*.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Read and decide.', items: [
            { q: 'On dit « grande » pour un garçon.', a: 'f', why: 'For a boy: *grand*. *grande* is for a girl or woman.' },
            { q: 'On dit « C’est mon frère » pour présenter un homme.', a: 't', why: '*c’est* introduces a person.' },
            { q: 'Jeune est le même mot pour un homme et pour une femme.', a: 't', why: 'It already ends in *-e*: *il est jeune, elle est jeune*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Une photo de famille',
      about: 'Read a short message that comes with a family photo.',
      art: 'cat',
      spreads: [
        [
          { t: 'reading', title: 'Un message de Nadia', md: 'Salut Sophie !\n\nVoici une photo de ma famille. Mon père s’appelle Karim et ma mère s’appelle Rania. Mon père a cinquante-deux ans et ma mère a quarante-neuf ans. Ils sont gentils, mais ils travaillent beaucoup.\n\nJ’ai un frère et une sœur. Mon frère, Omar, a vingt ans. Il est grand et brun. Ma sœur, Amira, est petite. Elle a quatorze ans et elle est très sympa.\n\nMa grand-mère habite avec nous. Elle a quatre-vingts ans et elle est très contente. Elle parle arabe et un peu de français.\n\nEt toi, tu as des frères et sœurs ? À bientôt !\n\nNadia' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Le père de Nadia a cinquante-deux ans.', a: 't', why: '*Mon père a cinquante-deux ans.*' },
            { q: 'Nadia a deux frères.', a: 'f', why: 'Nadia has one brother and one sister.' },
            { q: 'Amira a quatorze ans.', a: 't', why: '*Elle a quatorze ans.*' },
            { q: 'Les parents de Nadia habitent à Lyon.', a: 'ng', why: 'The message does not say where they live.' },
            { q: 'La grand-mère de Nadia parle arabe.', a: 't', why: '*Elle parle arabe et un peu de français.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Who is it?', pairs: [
            ['Karim', 'le père de Nadia'],
            ['Rania', 'la mère de Nadia'],
            ['Omar', 'le frère de Nadia'],
            ['Amira', 'la sœur de Nadia'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the message.', items: [
            { q: 'Omar est grand et ___.', a: ['brun'], why: '*Il est grand et brun.*' },
            { q: 'La grand-mère de Nadia a ___ ans.', a: ['quatre-vingts', 'quatre vingts', '80'], why: '*Elle a quatre-vingts ans.*' },
            { q: 'Les parents de Nadia sont ___, mais ils travaillent beaucoup.', a: ['gentils'], why: '*Ils sont gentils, mais ils travaillent beaucoup.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Nous ___ une grande famille.', o: ['avons', 'sommes', 'avez'], why: '*nous avons*' },
      { q: 'J’___ vingt et un ans.', o: ['ai', 'suis', 'as'], why: 'You have an age in French: *j’ai … ans*.' },
      { q: '___ sœur s’appelle Clara.', o: ['Ma', 'Mon', 'Mes'], why: '*sœur* is feminine: *ma*.' },
      { q: 'Mes parents sont ___.', o: ['gentils', 'gentil', 'gentille'], why: 'Several people: *gentils*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Quel âge ___-vous ? (avoir)', a: ['avez'], why: '*vous avez*' },
      { q: 'Trente plus quarante : ___.', a: ['soixante-dix', 'soixante dix'], why: '30 + 40 = 70: *soixante-dix*.' },
      { q: 'Ma tante est très ___. (jeune)', a: ['jeune'], why: '*jeune* does not change for a woman.' },
      { q: 'Elle est ___. (grand)', a: ['grande'], why: 'A woman: *grande*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the family word.', pairs: [
      ['le père', 'la mère'],
      ['le frère', 'la sœur'],
      ['le fils', 'la fille'],
      ['le mari', 'la femme'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Mon frère a trente et un ans.', why: 'Subject, *a*, number, *ans*.' },
      { a: 'Ma sœur est petite et sympa.', why: '*sœur* is feminine: *petite*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Je [suis] vingt ans.', a: ['ai'], why: 'You have an age: *j’ai vingt ans*.' },
      { s: '[Mon] mère est gentille.', a: ['Ma'], why: '*mère* is feminine: *ma mère*.' },
    ] },
  ],
};
