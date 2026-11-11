// English A1, unit 2, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Style approved by the owner 7 Nov 2026; draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'My family and my things',
  goal: 'Talk about your family, your things and what you can see.',
  art: 'dog',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['a and an', 'plurals', 'this and that', 'possessives', 'family', 'have got', 'adjectives'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'A, an, plurals, this and that',
      about: 'Use a and an, make plurals and point to things with this, that, these and those.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'In English, when you talk about **one** thing for the first time, you put **a** or **an** before it: *a phone, an apple*. These little words are called **articles**. Many languages do not have them, so learners often forget them. In English you almost always need one before one thing: *I have **a** car*, not *I have car*.\n\nThe choice between **a** and **an** depends on the **sound** at the start of the next word, not the letter. Before a consonant sound, use **a**: *a book, a bag, a university* (it starts with a *yoo* sound). Before a vowel sound, use **an**: *an apple, an egg, an umbrella, an hour* (the *h* is silent).' },
          { t: 'table', caption: 'a or an?', explain: ['head', 'col2'], head: ['Article', 'Example', 'Why'], rows: [
            ['a', 'a pen', 'starts with a consonant sound'],
            ['a', 'a house', 'you say the h'],
            ['a', 'a university', 'starts with a *yoo* sound'],
            ['an', 'an orange', 'starts with a vowel sound'],
            ['an', 'an hour', 'the h is silent'],
            ['an', 'an old car', 'the next word starts with a vowel sound'],
          ] },
          { t: 'tip', art: 'owl', md: 'Say the word aloud and listen. If it starts with *a, e, i, o, u* as a **sound**, use **an**. That is why we say *an old car* but *a new car*: the article goes with the word right after it.' },
        ],
        [
          { t: 'text', md: 'For **more than one** thing, use the **plural**. Most nouns just add **-s**: *a book, two books*. Nouns that end in **-s, -sh, -ch, -x** add **-es**, because you need an extra sound to say them: *a bus, two buses; a box, two boxes*. Nouns that end in a consonant + **-y** change to **-ies**: *a city, two cities*.\n\nA few very common nouns are **irregular**: they change completely. Learn them now, because you will use them every day: *man → men, woman → women, child → children, person → people*. There is no *a* or *an* before a plural: *books*, not *a books*.' },
          { t: 'table', caption: 'Plurals', quiz: true, explain: ['head', 'col2'], head: ['One', 'More than one', 'Rule'], rows: [
            ['a book', 'books', 'add -s'],
            ['a bus', 'buses', '-s, -sh, -ch, -x: add -es'],
            ['a watch', 'watches', '-s, -sh, -ch, -x: add -es'],
            ['a city', 'cities', 'consonant + y: -ies'],
            ['a man', 'men', 'irregular'],
            ['a woman', 'women', 'irregular'],
            ['a child', 'children', 'irregular'],
            ['a person', 'people', 'irregular'],
          ] },
        ],
        [
          { t: 'text', md: 'To point to things, use **this**, **that**, **these** and **those**. Two questions decide which one: is it **near** you or **far** from you, and is it **one** thing or **more**?\n\nNear and one: **this**. Far and one: **that**. Near and more: **these**. Far and more: **those**. You can use them before a noun (*this bag*) or alone (*What’s this?*). To ask about a thing, say **What’s this?** or **What are those?**' },
          { t: 'table', caption: 'this, that, these, those', explain: ['head', 'col0'], head: ['', 'One', 'More than one'], rows: [
            ['near me', 'this', 'these'],
            ['far from me', 'that', 'those'],
          ] },
          { t: 'examples', items: [
            { s: '**This** is my phone.', n: 'One thing, in my hand.' },
            { s: 'Is **that** your car?', n: 'One thing, over there.' },
            { s: '**These** keys are new.', n: 'More than one, near me.' },
            { s: 'Who are **those** people?', n: 'More than one, far away.' },
            { s: '**What’s this?** – It’s **an** umbrella.', n: 'A question and an answer with *an*.' },
          ] },
        ],
        [
          { t: 'text', md: 'These mistakes are very common in the first months. Each one is easy to fix once you know it.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I have car.', 'I have a car.', 'One thing needs *a* or *an*.'],
            ['a apple', 'an apple', '*apple* starts with a vowel sound.'],
            ['two childs', 'two children', '*child* is irregular.'],
            ['This books are new.', 'These books are new.', 'More than one: *these*.'],
          ] },
          { t: 'dialogue', title: 'In a market', lines: [
            { who: 'Sara', s: 'Excuse me, what’s this?' },
            { who: 'Seller', s: 'It’s a mango. It’s from Brazil.' },
            { who: 'Sara', s: 'And those? Are they oranges?' },
            { who: 'Seller', s: 'No, they’re lemons. They’re very good.' },
            { who: 'Sara', s: 'OK. Two mangoes and these apples, please.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose a or an.', items: [
            { q: 'I have ___ umbrella.', o: ['an', 'a'], why: '*umbrella* starts with a vowel sound: *an*.' },
            { q: 'She is ___ teacher.', o: ['a', 'an'], why: '*teacher* starts with a consonant sound: *a*.' },
            { q: 'We wait for ___ hour.', o: ['an', 'a'], why: 'The *h* in *hour* is silent: *an*.' },
            { q: 'It is ___ old phone.', o: ['an', 'a'], why: 'The next word is *old*: a vowel sound, *an*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the plural.', items: [
            { q: 'one box, two ___', a: ['boxes'], why: '*-x*: add *-es*.' },
            { q: 'one city, three ___', a: ['cities'], why: 'Consonant + *y*: *-ies*.' },
            { q: 'one woman, two ___', a: ['women'], why: '*woman* is irregular.' },
            { q: 'one child, four ___', a: ['children'], why: '*child* is irregular.' },
            { q: 'one bus, two ___', a: ['buses'], why: '*-s*: add *-es*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose this, that, these or those.', items: [
            { q: 'Look at ___ birds in the sky!', o: ['those', 'this', 'these'], why: 'More than one, far away: *those*.' },
            { q: '___ is my bag, here on the chair.', o: ['This', 'Those', 'These'], why: 'One thing, near me: *this*.' },
            { q: 'Are ___ your keys, here in my hand?', o: ['these', 'that', 'this'], why: 'More than one, near me: *these*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I have [a] apple.', a: ['an'], why: '*apple* starts with a vowel sound: *an*.' },
            { s: 'There are three [mans] in the room.', a: ['men'], why: '*man* is irregular: *men*.' },
            { s: '[This] shoes are new.', a: ['These'], why: 'More than one, near me: *these*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
            { q: '“What are those?”', o: ['They’re my glasses.', 'It’s my glasses.', 'This is my glass.'], why: '*Those* is plural, so the answer is plural: *They’re …*' },
            { q: '“Is this your pen?”', o: ['Yes, thanks.', 'Yes, they are.', 'No, I’m not.'], why: 'A short, polite answer about one thing.' },
            { q: '“How many children are in the class?”', o: ['Twelve.', 'Yes, there are.', 'A child.'], why: '*How many* asks for a number.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the A2 Key exam, many answers depend on **one or more**. Before you choose, check: is the question about one thing (*this, that, is, it*) or more than one (*these, those, are, they*)?' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'What’s this? It’s an apple.' },
            { a: 'These are my children.' },
            { a: 'Who are those people?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'My family',
      about: 'Talk about your family with my, your, his, her and the possessive ’s.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To say who something belongs to, English uses **possessive adjectives**: *my, your, his, her, its, our, their*. They go **before** a noun, and they never change: *my brother, my brothers*.\n\nThe choice depends on the **owner**, not on the thing. In many languages the word changes with the thing; in English it changes with the person who has it. **His** is for a man’s things, **her** for a woman’s things, whatever the thing is: *Tom and **his** sister*, *Anna and **her** brother*.' },
          { t: 'table', caption: 'Pronoun and possessive', quiz: true, explain: ['head'], head: ['Pronoun', 'Possessive', 'Example'], rows: [
            ['I', 'my', 'my phone'],
            ['you', 'your', 'your name'],
            ['he', 'his', 'his car'],
            ['she', 'her', 'her bag'],
            ['it', 'its', 'its door'],
            ['we', 'our', 'our house'],
            ['they', 'their', 'their children'],
          ] },
          { t: 'tip', art: 'owl', md: 'Two pairs sound the same but have different spelling: **their** (of them) and **they’re** (they are), and **its** (of it) and **it’s** (it is). *They’re at home with their kids.*' },
        ],
        [
          { t: 'text', md: 'To say that something belongs to a **person with a name** or a noun, add **’s**: *Anna’s car, my brother’s phone, the teacher’s desk*. The ’s goes on the owner, and the thing comes after.\n\nFor a plural owner that already ends in **-s**, add only the apostrophe: *my parents’ house* (the house of my parents). For irregular plurals, add ’s: *the children’s room*.\n\nBe careful: **’s** can also mean **is**: *Anna’s here* = *Anna is here*. The rest of the sentence tells you which one it is.' },
          { t: 'examples', items: [
            { s: 'This is **Tom’s** sister.', n: 'The sister of Tom.' },
            { s: '**My mother’s** name is Ruth.', n: 'The name of my mother.' },
            { s: 'This is **my parents’** house.', n: 'Plural owner with -s: only the apostrophe.' },
            { s: 'The **children’s** toys are everywhere.', n: '*children* is irregular: add ’s.' },
            { s: '**Anna’s** a doctor.', n: 'Here ’s means *is*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Family words come in pairs: one for a man or boy, one for a woman or girl. Some words are for both: **parents** (mother and father), **children** (sons and daughters), **grandparents**. In everyday speech people say **mum** and **dad** (in the USA, **mom**).' },
          { t: 'table', caption: 'Family', explain: ['head'], head: ['Man or boy', 'Woman or girl', 'Both'], rows: [
            ['father (dad)', 'mother (mum)', 'parents'],
            ['son', 'daughter', 'children'],
            ['brother', 'sister', ''],
            ['husband', 'wife', ''],
            ['grandfather', 'grandmother', 'grandparents'],
            ['uncle', 'aunt', ''],
            ['', '', 'cousin'],
          ] },
          { t: 'tip', art: 'owl', md: 'A common mistake: *My sister and his husband*. The husband belongs to the sister, a woman, so it is **her** husband. Always look at the owner.' },
        ],
        [
          { t: 'reading', title: 'My family', md: 'My name is Leila and I’m from Rabat. This is my family. My father’s name is Karim. He’s a taxi driver. My mother’s name is Nadia. She’s a teacher.\n\nI have one brother and one sister. My brother’s name is Omar. He’s 16. My sister is Sara. She’s married. Her husband is Paul, and their son is two. His name is Adam, and he’s very funny.\n\nMy grandparents live with us. Our house is small, but it’s always full!' },
          { t: 'ex', kind: 'tf', h: 'Read the text. Are the sentences true or false?', items: [
            { q: 'Leila’s mother is a teacher.', a: 't', why: '*My mother’s name is Nadia. She’s a teacher.*' },
            { q: 'Omar is Leila’s father.', a: 'f', why: 'Omar is her brother.' },
            { q: 'Paul is Sara’s husband.', a: 't', why: '*Her husband is Paul.*' },
            { q: 'Adam is Leila’s son.', a: 'f', why: 'Adam is Sara and Paul’s son.' },
            { q: 'The grandparents live in Leila’s house.', a: 't', why: '*My grandparents live with us.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write my, your, his, her, our or their.', items: [
            { q: 'Tom lives with ___ sister.', a: ['his'], why: 'The owner is Tom, a man: *his*.' },
            { q: 'Anna loves ___ brother.', a: ['her'], why: 'The owner is Anna, a woman: *her*.' },
            { q: 'We live with ___ parents.', a: ['our'], why: '*we* → *our*.' },
            { q: 'My friends are here with ___ children.', a: ['their'], why: '*my friends* = *they* → *their*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Write the sentence again with ’s.', items: [
            { q: 'the car of my father', cue: 'my', a: ['my father’s car', "my father's car"], why: 'Owner + ’s + thing.' },
            { q: 'the name of the teacher', cue: 'the', a: ['the teacher’s name', "the teacher's name"], why: 'Owner + ’s + thing.' },
            { q: 'the house of my parents', cue: 'my', a: ['my parents’ house', "my parents' house"], why: 'Plural owner with -s: only the apostrophe.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the family words.', pairs: [
            ['husband', 'wife'],
            ['son', 'daughter'],
            ['uncle', 'aunt'],
            ['brother', 'sister'],
            ['grandfather', 'grandmother'],
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: read and choose the right word.', items: [
            { q: 'My mother’s sister is my ___.', o: ['aunt', 'cousin', 'niece'], why: 'Your mother’s sister is your *aunt*.' },
            { q: 'My father’s father is my ___.', o: ['grandfather', 'uncle', 'brother'], why: 'Your father’s father is your *grandfather*.' },
            { q: 'My aunt’s children are my ___.', o: ['cousins', 'brothers', 'parents'], why: 'Your aunt’s children are your *cousins*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In one part of the A2 Key reading test, you read a sentence and choose the word that fits. Family words are a favourite: draw a small family tree in your head and follow it.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'This is my brother’s wife.' },
            { a: 'Her name is Nadia.' },
            { a: 'Our parents live in Rabat.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'I have got a brother',
      about: 'Use have got and adjectives to say what you have and to describe people and things.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To say what you **have** (family, things, also hair and eyes), British English often uses **have got**. It means the same as **have**. In speech, use the short forms: *I’ve got, she’s got*.\n\nWith **he, she, it**, the verb is **has got**: *She **has got** a cat.* With the other persons it is **have got**: *We **have got** two cars.*\n\nFor the negative, put **not** between *have* and *got*: *I **haven’t got** a car. He **hasn’t got** a sister.* For a question, put *have* or *has* first: ***Have** you **got** a pen? – Yes, I have. / No, I haven’t.*' },
          { t: 'table', caption: 'have got', quiz: true, explain: ['head'], head: ['', 'Positive', 'Negative', 'Question'], rows: [
            ['I', 'I’ve got', 'I haven’t got', 'Have I got …?'],
            ['you', 'you’ve got', 'you haven’t got', 'Have you got …?'],
            ['he / she / it', 'she’s got', 'she hasn’t got', 'Has she got …?'],
            ['we', 'we’ve got', 'we haven’t got', 'Have we got …?'],
            ['they', 'they’ve got', 'they haven’t got', 'Have they got …?'],
          ] },
          { t: 'tip', art: 'owl', md: 'In American English, people usually say **have** without *got*: *I have a brother. Do you have a pen?* Both are correct, and you will hear both in exams.' },
        ],
        [
          { t: 'text', md: '**Adjectives** describe people and things: *big, small, new, old, tall, short, young, beautiful*. In English, adjectives have two rules that surprise many learners.\n\nFirst, the adjective goes **before** the noun: *a **new** phone*, not *a phone new*.\n\nSecond, the adjective **never changes**: no plural, no feminine. *a tall man, two **tall** women* (not *talls*).\n\nYou can also put an adjective after **be**: *The house is **big**. My brothers are **young**.*' },
          { t: 'examples', items: [
            { s: 'I’ve got a **small** dog.', n: 'The adjective before the noun.' },
            { s: 'She’s got **long** hair and **brown** eyes.', n: 'Describing a person.' },
            { s: 'They’ve got two **old** cars.', n: 'Plural noun, but the adjective does not change.' },
            { s: 'My sister is very **tall**.', n: 'After *be*, with *very* to make it stronger.' },
            { s: '**Has** he **got** a **new** job? – Yes, he **has**.', n: 'A question and a short answer.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['She have got a cat.', 'She has got a cat.', 'With *he, she, it*: *has got*.'],
            ['I have got not a car.', 'I haven’t got a car.', '*not* goes after *have*.'],
            ['a car red', 'a red car', 'The adjective goes before the noun.'],
            ['two bigs houses', 'two big houses', 'Adjectives never take -s.'],
          ] },
          { t: 'dialogue', title: 'Talking about pets', lines: [
            { who: 'Mia', s: 'Have you got any pets?' },
            { who: 'Jack', s: 'Yes, I have. I’ve got a dog. He’s small and very friendly.' },
            { who: 'Mia', s: 'Has he got a name?' },
            { who: 'Jack', s: 'Yes, Biscuit! He’s got big brown eyes. And you?' },
            { who: 'Mia', s: 'I haven’t got a dog, but my sister has got two cats.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the short forms of have got.', verb: 'have got', tense: 'present', rows: [
            ['I', '’ve got|have got'],
            ['you', '’ve got|have got'],
            ['he / she / it', '’s got|has got'],
            ['we', '’ve got|have got'],
            ['they', '’ve got|have got'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
            { q: 'My brother ___ a new bike.', o: ['has got', 'have got', 'got'], why: '*my brother* = *he*: *has got*.' },
            { q: 'We ___ a car. We go by bus.', o: ['haven’t got', 'hasn’t got', 'have got not'], why: '*we* + negative: *haven’t got*.' },
            { q: '___ you got a pen? – Yes, I have.', o: ['Have', 'Has', 'Do'], why: 'With *you*: *Have you got …?*' },
            { q: 'Has she got a sister? – No, she ___.', o: ['hasn’t', 'haven’t', 'isn’t'], why: 'Short answer with *she*: *No, she hasn’t.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'build', h: 'Write the sentence. Two words do not belong.', items: [
            { a: 'She has got a red car.', extra: ['have', 'reds'], why: '*she* + *has got*; adjectives never take -s.' },
            { a: 'They have got two small children.', extra: ['has', 'smalls'], why: '*they* + *have got*; the adjective does not change.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'My father [have] got a big house.', a: ['has'], why: '*my father* = *he*: *has got*.' },
            { s: 'I’ve got a [bag new].', a: ['new bag'], why: 'The adjective goes before the noun.' },
            { s: 'They are [talls] men.', a: ['tall'], why: 'Adjectives never take -s.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
            { q: '“Have you got any brothers or sisters?”', o: ['Yes, I’ve got one sister.', 'Yes, I am.', 'She’s my sister.'], why: 'The question is about having: answer with *have got*.' },
            { q: '“Has your flat got a garden?”', o: ['No, it hasn’t.', 'No, it isn’t.', 'No, I haven’t.'], why: '*your flat* = *it*: *No, it hasn’t.*' },
            { q: '“What’s your dog like?”', o: ['He’s small and friendly.', 'He likes meat.', 'Yes, I’ve got a dog.'], why: '*What’s … like?* asks for a description.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Short answers must match the question. If it starts with **Have** or **Has**, the answer uses *have* or *has*: *Yes, I have. No, it hasn’t.* Never *Yes, I’ve got.*' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'I’ve got a small dog.' },
            { a: 'She’s got long brown hair.' },
            { a: 'Have you got a pen?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'A family photo',
      about: 'Read a girl’s description of a family photo, and describe your own family.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'When you describe a photo, three phrases help you a lot. **This is** / **These are** introduces people: *This is my uncle. These are my cousins.* **On the left** and **on the right** say where they are, and **in the middle** is the centre.\n\nFor a description, put together what you learned in this unit: a name with ’s, possessives, **have got** and adjectives. *This is my aunt’s husband. He’s got short black hair and he’s very tall.*' },
          { t: 'examples', items: [
            { s: '**This is** my grandmother. She’s 80.', n: 'Introduce one person.' },
            { s: '**These are** my cousins, Ali and Nour.', n: 'Introduce more than one person.' },
            { s: '**On the left** is my uncle.', n: 'Where he is in the photo.' },
            { s: 'The baby **in the middle** is my sister’s son.', n: 'In the centre.' },
            { s: 'He’s **got** curly hair and a big smile.', n: 'A description with *have got*.' },
          ] },
        ],
        [
          { t: 'reading', title: 'A photo of my family', md: 'This is a photo of my family at my grandparents’ house. I’m Emma, and I’m in the middle, with a big smile.\n\nOn the left are my parents. My dad has got short grey hair and glasses. My mum is very tall. She’s got long red hair, like me.\n\nOn the right is my brother, Jake. He’s 20 and he’s a student. He’s got a new guitar, and it’s in the photo too! The old man next to Jake is my grandfather. He’s 75, but he’s very active.\n\nThe dog in front of us is Max. He isn’t our dog, he’s my grandparents’ dog. We love him!' },
          { t: 'ex', kind: 'tf', h: 'Read the text. Are the sentences true or false?', ng: true, items: [
            { q: 'Emma is in the middle of the photo.', a: 't', why: '*I’m in the middle.*' },
            { q: 'Emma’s mum has got short hair.', a: 'f', why: 'She’s got long red hair.' },
            { q: 'Jake is Emma’s brother.', a: 't', why: '*On the right is my brother, Jake.*' },
            { q: 'Jake plays in a band.', a: 'ng', why: 'The text says he’s got a guitar, but not that he plays in a band.' },
            { q: 'Max is Emma’s dog.', a: 'f', why: 'Max is her grandparents’ dog.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the text again. Choose the right answer.', items: [
            { q: 'Where is the photo?', o: ['At Emma’s grandparents’ house.', 'At Emma’s house.', 'At a school.'], why: '*at my grandparents’ house*' },
            { q: 'Who has got glasses?', o: ['Emma’s dad.', 'Emma’s mum.', 'Jake.'], why: '*My dad has got short grey hair and glasses.*' },
            { q: 'How old is the grandfather?', o: ['75', '20', '80'], why: '*He’s 75.*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'On the left are my parents.', why: '*On the left* + *are* + people.' },
            { a: 'My mum has got long red hair.', why: 'Subject, *has got*, adjectives before the noun.' },
            { a: 'These are my grandparents’ dogs.', why: '*These are* + possessive + noun.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword with family words.', words: [
            { a: 'mother', clue: 'Your father’s wife.' },
            { a: 'uncle', clue: 'Your mother’s brother.' },
            { a: 'cousin', clue: 'Your aunt’s son or daughter.' },
            { a: 'daughter', clue: 'Your parents call you this if you are a girl.' },
            { a: 'husband', clue: 'A married woman’s partner.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: read the notice and choose the right answer.', items: [
            { q: '“FAMILY DAY: children under 12 free. Parents: £5.” What does it mean?', o: ['Children under 12 don’t pay.', 'Every child pays £5.', 'Parents don’t pay.'], why: '*free* means you do not pay.' },
          ] },
          { t: 'tip', art: 'owl', md: 'The first part of the A2 Key reading test shows short notices and messages. Read the notice twice and look for the key words, like *free*, *under 12* or *closed*.' },
        ],
        [
          { t: 'text', md: 'Now describe a photo of your own family. Say who is in it, where they are, and one thing about each person: their age, their job, or what they look like.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'This is a photo of my family.' },
            { a: 'On the right is my brother.' },
            { a: 'He’s got short black hair.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose a or an.', items: [
      { q: 'She’s got ___ old car.', o: ['an', 'a'], why: '*old* starts with a vowel sound.' },
      { q: 'I need ___ new phone.', o: ['a', 'an'], why: '*new* starts with a consonant sound.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the plural.', items: [
      { q: 'one person, two ___', a: ['people'], why: '*person* is irregular.' },
      { q: 'one watch, three ___', a: ['watches'], why: '*-ch*: add *-es*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
      { q: 'Look at ___ mountains over there!', o: ['those', 'these', 'this'], why: 'More than one, far away: *those*.' },
      { q: 'Anna is here with ___ husband.', o: ['her', 'his', 'their'], why: 'The owner is Anna, a woman: *her*.' },
      { q: 'My grandparents live in ___ old house.', o: ['their', 'his', 'our'], why: '*my grandparents* = *they* → *their*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'My sister [have] got two children.', a: ['has'], why: '*my sister* = *she*: *has got*.' },
      { s: 'This is [Tom] bike.', a: ['Tom’s', "Tom's"], why: 'The owner needs ’s: *Tom’s bike*.' },
      { s: 'They’ve got three [childs].', a: ['children'], why: '*child* is irregular.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
      { q: '“Have you got a car?” – “No, I ___.”', o: ['haven’t', 'hasn’t', 'don’t'], why: 'With *I*: *haven’t*.' },
      { q: 'He’s got ___ eyes.', o: ['blue', 'blues', 'a blue'], why: 'Adjectives never take -s.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the family words.', pairs: [
      ['son', 'daughter'],
      ['uncle', 'aunt'],
      ['father', 'mother'],
      ['grandson', 'granddaughter'],
    ] },
  ],
};
