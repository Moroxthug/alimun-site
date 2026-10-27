// English A1, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'My family and my things',
  goal: 'Talk about your family, your things and what you can see.',
  art: 'dog',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['a and an', 'plurals', 'this and that', 'possessives', 'family', 'have got', 'adjectives'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'A, an, plurals, this and that',
      about: 'Use a and an, make plurals and point to things with this, that, these and those.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'Use **a** or **an** before a singular noun: *a book, an apple*. Use **an** when the next word starts with a **vowel sound** (a, e, i, o, u): *an orange, an egg*. Use **a** when it starts with a **consonant sound**: *a pen, a car*. Listen to the sound, not the letter: *a university* (it starts with the sound *yoo*) but *an hour* (the *h* is silent).' },
          { t: 'examples', items: [
            { s: 'It is **a** pen.', n: '*pen* starts with a consonant sound.' },
            { s: 'It is **an** apple.', n: '*apple* starts with a vowel sound.' },
            { s: 'She is **a** teacher.', n: 'Use *a* or *an* with jobs.' },
            { s: 'He is **an** engineer.', n: '*engineer* starts with a vowel sound.' },
            { s: 'It is **a** university.', n: 'The first sound is *yoo*, a consonant sound.' },
          ] },
          { t: 'tip', art: 'owl', md: 'There is no word for *a* before a plural noun. Say *a book* but *books*, not *a books*. You do not use *a* or *an* with **my**, **your** or **his**: *my book*, not *a my book*.' },
        ],
        [
          { t: 'text', md: 'To make a plural, add **-s**: *book, books*. After **s, sh, ch** and **x**, add **-es**: *bus, buses; watch, watches*. After a consonant + **y**, change **y** to **ies**: *baby, babies*. A few plurals are irregular, so learn them: *man, men; woman, women; child, children; person, people*.' },
          { t: 'table', caption: 'Plurals', explain: ['head', 'col1'], quiz: true, head: ['Rule', 'One', 'More than one'], rows: [
            ['add -s', 'book', 'books'],
            ['add -s', 'key', 'keys'],
            ['after s: add -es', 'bus', 'buses'],
            ['after ch: add -es', 'watch', 'watches'],
            ['consonant + y: change y to ies', 'baby', 'babies'],
            ['irregular', 'man', 'men'],
            ['irregular', 'woman', 'women'],
            ['irregular', 'child', 'children'],
            ['irregular', 'person', 'people'],
          ] },
        ],
        [
          { t: 'text', md: 'To point to things, use **this** and **these** for things that are **near** you, and **that** and **those** for things that are **far** from you. *This* and *that* are singular. *These* and *those* are plural. Short forms: *that’s* for *that is*.' },
          { t: 'table', caption: 'This, that, these, those', explain: ['head'], head: ['', 'near', 'far'], rows: [
            ['one thing', 'this', 'that'],
            ['more than one thing', 'these', 'those'],
          ] },
          { t: 'dialogue', title: 'In the classroom', lines: [
            { who: 'Grace', s: 'What’s this?' },
            { who: 'Ben', s: 'It’s a pen.' },
            { who: 'Grace', s: 'And what are those?' },
            { who: 'Ben', s: 'They’re keys.' },
            { who: 'Grace', s: 'Are they your keys?' },
            { who: 'Ben', s: 'Yes, they are.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write a or an.', items: [
            { q: 'It is ___ apple.', a: ['an'], why: '*apple* starts with a vowel sound: *an*.' },
            { q: 'It is ___ pen.', a: ['a'], why: '*pen* starts with a consonant sound: *a*.' },
            { q: 'She is ___ student.', a: ['a'], why: '*student* starts with a consonant sound: *a*.' },
            { q: 'This is ___ umbrella.', a: ['an'], why: '*umbrella* starts with a vowel sound: *an*.' },
            { q: 'He is ___ engineer.', a: ['an'], why: '*engineer* starts with a vowel sound: *an*.' },
            { q: 'It is ___ university.', a: ['a'], why: '*university* starts with the sound *yoo*: *a*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'a or an? Sort the words.', groups: ['a', 'an'], explain: ['groups'], items: [
            { s: 'book', g: 0, why: 'Consonant sound: *a book*.' },
            { s: 'apple', g: 1, why: 'Vowel sound: *an apple*.' },
            { s: 'university', g: 0, why: 'It starts with the sound *yoo*: *a university*.' },
            { s: 'hour', g: 1, why: 'The *h* is silent: *an hour*.' },
            { s: 'orange', g: 1, why: 'Vowel sound: *an orange*.' },
            { s: 'teacher', g: 0, why: 'Consonant sound: *a teacher*.' },
            { s: 'egg', g: 1, why: 'Vowel sound: *an egg*.' },
            { s: 'car', g: 0, why: 'Consonant sound: *a car*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Write the plural.', items: [
            { q: 'There are three ___ in the street.', base: 'bus', a: ['buses'], why: 'After *s*, add *-es*.' },
            { q: 'Look at those ___!', base: 'baby', a: ['babies'], why: 'Consonant + *y*: change *y* to *ies*.' },
            { q: 'There are two ___ in the room.', base: 'woman', a: ['women'], why: 'Irregular: *woman, women*.' },
            { q: 'There are five ___ in the class.', base: 'child', a: ['children'], why: 'Irregular: *child, children*.' },
            { q: 'These ___ are new.', base: 'watch', a: ['watches'], why: 'After *ch*, add *-es*.' },
            { q: 'There are three ___ on the table.', base: 'key', a: ['keys'], why: 'Vowel + *y*: just add *-s*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Look! ___ is my house over there.', o: ['That', 'This', 'These'], why: 'One thing, far from you: *that*.' },
            { q: '___ is my phone, here in my hand.', o: ['This', 'That', 'Those'], why: 'One thing, near you: *this*.' },
            { q: '___ are my friends, here with me.', o: ['These', 'Those', 'This'], why: 'More than one, near you: *these*.' },
            { q: 'Look at ___ cars over there!', o: ['those', 'these', 'that'], why: 'More than one, far from you: *those*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'What is this?', why: 'The question word, *is*, then *this*.' },
            { a: 'These are my keys.', why: '*These are* + a plural noun.' },
            { a: 'That is a big house.', why: '*That is* + *a* + adjective + noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'My family',
      about: 'Talk about your family with my, your, his, her and the possessive ’s.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Use a **possessive adjective** before a noun to show who it belongs to: *my name, your book*. Each pronoun has its own possessive adjective. The adjective stays the same before a singular or a plural noun: *my brother, my brothers*.' },
          { t: 'table', caption: 'Possessive adjectives', quiz: true, head: ['Pronoun', 'Possessive adjective'], rows: [
            ['I', 'my'],
            ['you', 'your'],
            ['he', 'his'],
            ['she', 'her'],
            ['it', 'its'],
            ['we', 'our'],
            ['they', 'their'],
          ] },
          { t: 'tip', art: 'owl', md: 'The word depends on the **owner**, not on the thing: *Ben’s sister* is *his sister*, and *Grace’s brother* is *her brother*. Do not write **its** with an apostrophe: *its* shows who owns something, *it’s* means *it is*.' },
        ],
        [
          { t: 'text', md: 'To say that something belongs to a person, add **’s** to the name: *Ben’s car, my father’s name*. These are the words for family. Many come in pairs, one for a woman and one for a man. **Parents** means your mother and father, and a **cousin** is the child of your uncle or aunt.' },
          { t: 'table', caption: 'Family words', explain: ['head'], quiz: true, head: ['Woman', 'Man'], rows: [
            ['mother', 'father'],
            ['sister', 'brother'],
            ['daughter', 'son'],
            ['wife', 'husband'],
            ['grandmother', 'grandfather'],
            ['aunt', 'uncle'],
          ] },
          { t: 'examples', items: [
            { s: 'This is **my mother**. **Her** name is Priya.', n: '*her* for a woman.' },
            { s: 'That is **my brother**. **His** name is Leo.', n: '*his* for a man.' },
            { s: 'These are **my parents**. **Their** house is big.', n: '*their* for more than one person.' },
            { s: 'This is **Ben’s** sister.', n: '*’s* shows who the sister belongs to.' },
            { s: '**My** cousin is **our** teacher.', n: 'A cousin is the child of your uncle or aunt.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write my, your, his, her, its, our or their.', items: [
            { q: 'I am Ben. ___ name is Ben.', a: ['My', 'my'], why: 'For *I*: *my*.' },
            { q: 'You are Grace. ___ sister is Hannah.', a: ['Your', 'your'], why: 'For *you*: *your*.' },
            { q: 'Ben is tall. ___ sister is short.', a: ['His', 'his'], why: 'Ben is a man: *his*.' },
            { q: 'Grace is my sister. ___ husband is Tom.', a: ['Her', 'her'], why: 'Grace is a woman: *her*.' },
            { q: 'We are students. ___ teacher is Mr Hill.', a: ['Our', 'our'], why: 'For *we*: *our*.' },
            { q: 'My parents are old. ___ house is big.', a: ['Their', 'their'], why: 'For *they*: *their*.' },
            { q: 'It is a dog. ___ name is Max.', a: ['Its', 'its'], why: 'For *it*: *its*, without an apostrophe.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'This is ___ bag.', o: ['Ben’s', 'Bens', 'Ben'], why: 'Add *’s* to show who owns it: *Ben’s bag*.' },
            { q: 'This is my ___ car.', o: ['father’s', 'fathers', 'father'], why: 'Add *’s*: *my father’s car*.' },
            { q: 'Grace is ___ sister.', o: ['Ben’s', 'Bens’', 'Ben'], why: 'Add *’s*: *Ben’s sister*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the family word.', pairs: [
            ['my mother’s brother', 'uncle'],
            ['my father’s mother', 'grandmother'],
            ['my uncle’s son', 'cousin'],
            ['my mother and father', 'parents'],
          ] },
          { t: 'ex', kind: 'sort', h: 'Is it for a woman, for a man, or for both?', groups: ['woman', 'man', 'woman or man'], explain: ['groups'], items: [
            { s: 'mother', g: 0, why: 'A mother is a woman.' },
            { s: 'father', g: 1, why: 'A father is a man.' },
            { s: 'cousin', g: 2, why: 'A cousin can be a woman or a man.' },
            { s: 'aunt', g: 0, why: 'An aunt is a woman.' },
            { s: 'uncle', g: 1, why: 'An uncle is a man.' },
            { s: 'parents', g: 2, why: '*Parents* means a mother and a father.' },
            { s: 'daughter', g: 0, why: 'A daughter is a girl or a woman.' },
            { s: 'husband', g: 1, why: 'A husband is a man.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'I have got a brother',
      about: 'Use have got and adjectives to say what you have and to describe people and things.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Use **have got** to say what you have: *I have got a brother. She has got two cars.* It is also used to describe people: *He has got short hair.* **Have got** is for **I, you, we, they**. **Has got** is for **he, she, it**. In speech people use short forms: *I’ve got, she’s got*.' },
          { t: 'table', caption: 'have got', quiz: true, head: ['', 'have got'], rows: [
            ['I', 'have got'],
            ['you', 'have got'],
            ['he / she / it', 'has got'],
            ['we', 'have got'],
            ['you (many people)', 'have got'],
            ['they', 'have got'],
          ] },
          { t: 'tip', art: 'owl', md: 'The short form **’s got** is *has got*, not *is got*: *She’s got a dog* means *She has got a dog*. The short form **’s** can also be *is*: *She’s tall* means *She is tall*.' },
        ],
        [
          { t: 'text', md: 'For the negative, say **have not** or **has not**. The short forms are **haven’t got** and **hasn’t got**. For a question, put **have** or **has** before the pronoun: *Have you got a pen?* Short answers: **Yes, I have.** or **No, I haven’t.** *Has she got a car?* – **Yes, she has.** or **No, she hasn’t.**' },
          { t: 'examples', items: [
            { s: 'I **have got** a brother and two sisters.', n: '*I have got* for what you have.' },
            { s: 'She **has got** long black hair.', n: 'A description with *has got*.' },
            { s: 'We **haven’t got** a car.', n: 'The negative: *haven’t got*.' },
            { s: '**Have** you **got** a pen? – **Yes, I have.**', n: 'A question and a short answer.' },
            { s: '**Has** he **got** a dog? – **No, he hasn’t.**', n: 'A question with *he*.' },
          ] },
        ],
        [
          { t: 'text', md: 'An **adjective** tells you more about a noun. In English, it goes **before** the noun and it never changes: *a tall man, two tall men*. After **be**, it goes after the verb: *He is tall.* Many adjectives come in pairs of opposites.' },
          { t: 'table', caption: 'Adjectives and opposites', explain: ['head'], quiz: true, head: ['Adjective', 'Opposite'], rows: [
            ['tall', 'short'],
            ['big', 'small'],
            ['old (a person)', 'young'],
            ['old (a thing)', 'new'],
            ['long', 'short'],
            ['happy', 'sad'],
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of have got.', verb: 'have got', tense: 'present', rows: [
            ['I', 'have got'],
            ['you', 'have got'],
            ['he / she / it', 'has got'],
            ['we', 'have got'],
            ['you (many people)', 'have got'],
            ['they', 'have got'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write have or has.', items: [
            { q: 'I ___ got a brother.', a: ['have'], why: '*I have got*' },
            { q: 'She ___ got a sister.', a: ['has'], why: '*she has got*' },
            { q: 'We ___ got a big dog.', a: ['have'], why: '*we have got*' },
            { q: 'My parents ___ got a new car.', a: ['have'], why: 'More than one person, *they*: *have got*.' },
            { q: 'Ben ___ got short hair.', a: ['has'], why: 'One person, *he*: *has got*.' },
            { q: 'The cat ___ got a small bed.', a: ['has'], why: 'One animal, *it*: *has got*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '___ you got a pen?', o: ['Have', 'Has', 'Do'], why: 'With *you*: *have you got*.' },
            { q: 'He ___ got a car.', o: ['hasn’t', 'haven’t', 'isn’t'], why: 'With *he*: *hasn’t got*.' },
            { q: '“Have you got a brother?” – “Yes, I ___.”', o: ['have', 'am', 'has'], why: 'The short answer repeats *have*: *Yes, I have.*' },
            { q: 'He is a ___ man.', o: ['tall', 'talls', 'tally'], why: 'An adjective never changes: *a tall man*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the opposite.', pairs: [
            ['tall', 'short'],
            ['big', 'small'],
            ['old (a thing)', 'new'],
            ['happy', 'sad'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'She [have] got a dog.', a: ['has'], why: 'With *she*: *has got*.' },
            { s: 'I have got two [bigs] dogs.', a: ['big'], why: 'An adjective never changes.' },
            { s: '[Has] you got a pen?', a: ['Have'], why: 'With *you*: *have you got*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A family photo',
      about: 'Read a girl’s description of a family photo.',
      art: 'dog',
      spreads: [
        [
          { t: 'reading', title: 'My family', md: 'Hello! My name is Maya and I’m sixteen. This is a photo of my family.\n\nThis is my mother, Priya. She’s a doctor and she’s tall. This is my father, Raj. He’s a teacher. He’s got short grey hair and a big smile.\n\nThese are my brothers, Arjun and Leo. Arjun is twelve and Leo is eight. They’ve got black hair, like me.\n\nThat is my grandmother. She’s old, but she’s very happy. And that is our dog, Bruno. He’s small and he’s very funny.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Maya is sixteen.', a: 't', why: '*I’m sixteen.*' },
            { q: 'Priya is Maya’s sister.', a: 'f', why: 'Priya is Maya’s mother.' },
            { q: 'Raj is a doctor.', a: 'f', why: 'Raj is a teacher. Priya is the doctor.' },
            { q: 'Arjun is twelve.', a: 't', why: '*Arjun is twelve.*' },
            { q: 'The dog is big.', a: 'f', why: '*He’s small.*' },
            { q: 'Maya has got a sister.', a: 'ng', why: 'Maya talks about her brothers, but not about a sister.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Who is it?', pairs: [
            ['Priya', 'Maya’s mother'],
            ['Raj', 'Maya’s father'],
            ['Arjun', 'Maya’s brother'],
            ['Bruno', 'the family’s dog'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Read the text again and choose.', items: [
            { q: 'Who is a teacher?', o: ['Raj', 'Priya', 'Arjun'], why: '*He’s a teacher* is about Raj.' },
            { q: 'How old is Leo?', o: ['Eight', 'Twelve', 'Sixteen'], why: '*Leo is eight.*' },
            { q: 'What has Raj got?', o: ['Short grey hair', 'A dog', 'Black hair'], why: '*He’s got short grey hair and a big smile.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'This is ___ apple.', o: ['an', 'a', 'some'], why: '*apple* starts with a vowel sound: *an*.' },
      { q: 'There are two ___ in the car.', o: ['children', 'childs', 'childrens'], why: 'Irregular: *child, children*.' },
      { q: '___ are my keys, here in my hand.', o: ['These', 'This', 'That'], why: 'More than one, near you: *these*.' },
      { q: 'Grace is my sister. ___ husband is Tom.', o: ['Her', 'His', 'Their'], why: 'Grace is a woman: *her*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'We ___ got a big house.', a: ['have'], why: '*we have got*' },
      { q: 'That is a bus. These are two ___.', a: ['buses'], why: 'After *s*, add *-es*.' },
      { q: 'It is ___ umbrella.', a: ['an'], why: '*umbrella* starts with a vowel sound: *an*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the family word.', pairs: [
      ['my mother’s brother', 'uncle'],
      ['my mother’s mother', 'grandmother'],
      ['my uncle’s child', 'cousin'],
      ['my mother and father', 'parents'],
    ] },
    { t: 'ex', kind: 'build', h: 'Build the sentences. Two words do not belong.', items: [
      { a: 'My brother has got a small car.', extra: ['have', 'their'], why: 'With *he*: *has got*.' },
      { a: 'These are my parents.', extra: ['this', 'your'], why: '*These are* + a plural noun.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'She [have] got two brothers.', a: ['has'], why: 'With *she*: *has got*.' },
      { s: 'Two [childs] are in the park.', a: ['children'], why: 'Irregular: *child, children*.' },
    ] },
  ],
};
