// English A1, class 14 (docs/LESSONS_PLAN.md). Builds on book lesson u3:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c14',
  focus: 'By the end of the class every student can talk about another person with the present simple: add **-s** with *he, she, it* (*she works, he watches*), say the negative with **doesn’t** and ask **Does she …?** with short answers. The class should end with each student describing a friend or family member in four or five sentences.',
  tips: [
    'The missing **-s** (*she work*) is the most common A1 mistake in English and it lasts for years. Correct it gently but every time, and praise every correct *-s* you hear.',
    'The opposite mistake follows quickly: *she doesn’t works*. Show that the *-s* goes to *does*, so the verb has none.',
    'Spelling: *watches, goes, studies, has*. Write these four on the board and leave them there for the whole class.',
    'Pronunciation of *-s*: /s/ in *works*, /z/ in *lives*, /iz/ in *watches*. Model it, but do not drill it for long at A1.',
    'Students often mix *does* and *is*: *Is she work?* Contrast **Is she a teacher?** with **Does she work?** on the board.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show a photo of a person in your life (or describe one). Say three sentences: *My sister lives in Lyon. She works in a hotel. She speaks French.* Ask: *What is different from “I live”?* Circle the *-s*.' },
    { min: 10, title: 'She works', md: 'Show board page 1. Go through the spelling rules with the examples. Students say the *he/she* form of verbs you call out.' },
    { min: 10, title: 'Doesn’t and does', md: 'Show board page 2. Model the negative and question, then the class does the exercise on the board. Quick chain: *Does your mother work?* – *Yes, she does.*' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'A person I know', md: 'Show board page 3. Read the text together, then the true or false questions. Students then tell the class about one person they know.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4.' },
    { min: 5, title: 'Close', md: 'Each student says one sentence about the person on their right. Set the homework.' },
  ],
  board: [
    { title: 'He works, she watches', blocks: [
      { t: 'table', caption: 'he, she, it + -s', explain: ['head', 'col2'], head: ['Verb', 'he / she / it', 'Rule'], rows: [
        ['work', 'works', 'most verbs: add -s'],
        ['watch', 'watches', '-ch, -sh, -s, -x: add -es'],
        ['go', 'goes', '-o: add -es'],
        ['study', 'studies', 'consonant + y: -ies'],
        ['have', 'has', 'irregular'],
      ] },
      { t: 'ex', kind: 'gap', h: 'Write the verb with he, she or it.', items: [
        { q: 'My brother ___ (live) in Cairo.', a: ['lives'], why: '*he* + *-s*.' },
        { q: 'She ___ (watch) TV every evening.', a: ['watches'], why: '*-ch*: add *-es*.' },
        { q: 'Our teacher ___ (go) to work by bus.', a: ['goes'], why: '*-o*: add *-es*.' },
        { q: 'Tom ___ (study) Chinese.', a: ['studies'], why: 'Consonant + *y*: *-ies*.' },
      ] },
    ] },
    { title: 'Doesn’t and does', blocks: [
      { t: 'table', caption: 'does and doesn’t', explain: ['head'], head: ['Positive', 'Negative', 'Question', 'Short answers'], rows: [
        ['She works.', 'She doesn’t work.', 'Does she work?', 'Yes, she does. / No, she doesn’t.'],
        ['He plays.', 'He doesn’t play.', 'Does he play?', 'Yes, he does. / No, he doesn’t.'],
      ] },
      { t: 'tip', art: 'owl', md: 'The **-s** moves to **does**: *She doesn’t **work***, not *She doesn’t works*. *Does he **play**?*, not *Does he plays?*' },
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'He ___ meat.', o: ['doesn’t eat', 'don’t eat', 'doesn’t eats'], why: '*he* + *doesn’t* + verb with no *-s*.' },
        { q: '___ your sister speak Italian?', o: ['Does', 'Do', 'Is'], why: 'With *she*: *Does*.' },
        { q: '“Does Ali work here?” – “No, he ___.”', o: ['doesn’t', 'don’t', 'isn’t'], why: 'Short answer with *he*: *doesn’t*.' },
      ] },
    ] },
    { title: 'A person I know', blocks: [
      { t: 'reading', title: 'My neighbour Rosa', md: 'My neighbour Rosa is 70. She lives alone with her cat, Max. She gets up at six and goes to the market every morning. She doesn’t work now, but she teaches piano to children on Saturdays. She doesn’t watch TV. She reads books and listens to the radio. Max sleeps all day!' },
      { t: 'ex', kind: 'tf', h: 'True or false?', items: [
        { q: 'Rosa lives with her family.', a: 'f', why: 'She lives alone with her cat.' },
        { q: 'She goes to the market every morning.', a: 't', why: '*goes to the market every morning*.' },
        { q: 'She works in a school.', a: 'f', why: 'She doesn’t work now; she teaches piano on Saturdays.' },
        { q: 'She doesn’t watch TV.', a: 't', why: '*She doesn’t watch TV.*' },
      ] },
    ] },
    { title: 'Exam corner: choose the reply', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
        { q: '“Does your brother live near you?”', o: ['Yes, he does.', 'Yes, he lives.', 'Yes, he is.'], why: 'A *does* question: *Yes, he does.*' },
        { q: '“What does your mother do?”', o: ['She’s a nurse.', 'She does fine.', 'Yes, she does.'], why: '*What does she do?* asks for her job.' },
        { q: '“Where does Karim work?”', o: ['In a hotel.', 'He works.', 'Every day.'], why: '*Where* asks for a place.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In the exam, **What does she do?** always asks about a job, not about today.' },
    ] },
  ],
  activities: {
    one: { title: 'Guess my person', md: 'Think of a famous person (or someone the student knows). The student asks *Does he/she …?* questions (*Does she live in Spain? Does she sing?*) and you answer only *Yes, she does / No, she doesn’t*. Then swap: the student thinks of a person and you ask. Correct the *-s* and *does* after each round.' },
    small: { title: 'Interview and report', md: 'Pairs (or groups of three) interview each other with *Do you …?* for three minutes: job, home, languages, hobbies. Then each student reports to the group about their partner with *he/she*: *Marco lives in Turin. He doesn’t drink coffee.* The group listens for the *-s*; anyone who hears a missing *-s* says “s!”.' },
    group: { title: 'Who is it?', md: 'Each student writes three sentences about themselves in a private chat message to you. Read three sentences aloud with *he/she* (*This person lives near the sea. She speaks three languages. She doesn’t eat meat.*). Students guess who it is. Then breakout rooms of three: each student describes a family member, the others ask two *Does …?* questions.' },
  },
  homework: { book: 'u3:p2', md: 'Finish book lesson 2 of unit 3 (She works in a bank). Then write six sentences about a friend or family member: four things they do and two things they don’t do.' },
};
