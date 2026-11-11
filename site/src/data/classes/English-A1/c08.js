// English A1, class 8 (docs/LESSONS_PLAN.md). Builds on book lesson u2:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c08',
  focus: 'By the end of the class every student can talk about their family with family words, the possessives **my, your, his, her, our, their**, and the possessive **’s** (*my sister’s name*). They should be able to describe three members of their family in short sentences and ask about someone else’s family.',
  tips: [
    'Many learners mix up **his** and **her**. In English the word depends on the owner, not the thing: *Ana and her brother*, *Tom and his sister*. In Spanish, French and Italian the possessive often follows the thing, so this needs many examples.',
    'Learners often say *the sister of Maria* instead of *Maria’s sister*. Accept it the first time, then show the ’s form.',
    'Family can be a sensitive topic. Let students talk about any people close to them, or about a famous family, if they prefer.',
    'Watch the pronunciation of *mother, brother* (the *th* sound) and *daughter* (the *gh* is silent).',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show a simple family tree of a famous or invented family on the board. Ask *Who is …?* and let students guess the relationships.' },
    { min: 10, title: 'Family words', md: 'Show board page 1. Go through the table, then students do the matching exercise.' },
    { min: 10, title: 'my, his, her, their and ’s', md: 'Show board page 2. Explain with students’ names (*Ana’s phone*, *her phone*). Do the exercise together.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Read about a family', md: 'Show board page 3. Students read alone, then answer. Ask: *Is your family big or small?*' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4.' },
    { min: 5, title: 'Close', md: 'Each student says one sentence about a family member with *his* or *her*. Set the homework.' },
  ],
  board: [
    { title: 'Family words', blocks: [
      { t: 'table', caption: 'Family', explain: ['head'], head: ['Man or boy', 'Woman or girl', 'Both'], rows: [
        ['father', 'mother', 'parents'],
        ['son', 'daughter', 'children'],
        ['brother', 'sister', ''],
        ['husband', 'wife', ''],
        ['grandfather', 'grandmother', 'grandparents'],
      ] },
      { t: 'ex', kind: 'match', h: 'Match the words.', pairs: [
        ['my mother’s mother', 'my grandmother'],
        ['my father’s son', 'my brother'],
        ['my mother and father', 'my parents'],
        ['my son and daughter', 'my children'],
      ] },
    ] },
    { title: 'my, his, her and ’s', blocks: [
      { t: 'table', caption: 'Whose is it?', explain: ['head'], head: ['Person', 'Possessive', 'Example'], rows: [
        ['I', 'my', 'my phone'],
        ['you', 'your', 'your bag'],
        ['he', 'his', 'his car'],
        ['she', 'her', 'her keys'],
        ['we', 'our', 'our house'],
        ['they', 'their', 'their children'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
        { q: 'Tom lives with ___ sister.', o: ['his', 'her', 'their'], why: 'The owner is Tom, a man: *his*.' },
        { q: 'Ana and ___ husband are teachers.', o: ['her', 'his', 'our'], why: 'The owner is Ana, a woman: *her*.' },
        { q: 'This is ___ car. (my father)', o: ['my father’s', 'my father', 'the father of me'], why: 'Owner + *’s*.' },
        { q: 'The children and ___ dog are in the garden.', o: ['their', 'his', 'her'], why: 'More than one owner: *their*.' },
      ] },
    ] },
    { title: 'Read about a family', blocks: [
      { t: 'reading', title: 'Rania’s family', md: 'My name is Rania and I’m from Alexandria. My husband’s name is Tarek. He’s a doctor. Our children are Omar and Lina. Our son, Omar, is ten and our daughter, Lina, is six. My parents live in Cairo. Their flat is small but very nice.' },
      { t: 'ex', kind: 'tf', h: 'True or false?', items: [
        { q: 'Tarek is Rania’s husband.', a: 't', why: '*My husband’s name is Tarek.*' },
        { q: 'Omar and Lina are Rania’s daughters.', a: 'f', why: 'Omar is her son; Lina is her daughter.' },
        { q: 'Rania’s parents live in Alexandria.', a: 'f', why: 'They live in Cairo.' },
      ] },
    ] },
    { title: 'Exam corner: complete the message', blocks: [
      { t: 'ex', kind: 'bank', h: 'In the format of the A2 Key reading test: complete the message with one word in each gap.', extra: ['his', 'are'], items: [
        { q: 'Hi Sam! This is a photo of ___ family.', a: 'my', why: 'It is the writer’s family: *my*.' },
        { q: 'The woman is my sister and the man is ___ husband.', a: 'her', why: 'The husband of my sister: *her*.' },
        { q: 'The two boys are ___ sons, Leo and Max.', a: 'their', why: 'The sons of my sister and her husband: *their*.' },
        { q: 'Max ___ only three!', a: 'is', why: 'One person: *is*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Family tree', md: 'The student draws or describes their family tree while you draw it on the board as they speak. You ask *What’s your sister’s name? How old is her son?* Then swap: describe a famous family, and the student draws the tree from your description.' },
    small: { title: 'Photo talk', md: 'Each student shows a photo of family or friends (or a picture from the internet) and says three sentences with *his*, *her*, *their* or *’s*. The others ask two questions each. Note one possessive mistake per student and correct at the end.' },
    group: { title: 'Guess the family', md: 'Put a famous family in the chat for each breakout room (secretly). Rooms write five clues with family words and possessives (*Her husband is a prince.*). Back in the main room, each room reads its clues and the others guess.' },
  },
  homework: { book: 'u2:p2', md: 'Do book lesson 2 of unit 2 (My family). Then write about three people in your family in five or six sentences, using *his*, *her* or *’s* at least three times.' },
};
