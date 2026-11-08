// English B2, class 37 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u8:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c37',
  focus: 'By the end of the class every student can recognise and use formal register: formal vocabulary instead of phrasal verbs (*investigate* for *look into*), impersonal structures, no contractions, and clear linking. They can plan and start a B2 First Writing Part 1 essay in a formal style, with an introduction, two body paragraphs, the student’s own idea and a conclusion.',
  tips: [
    'Formal does not mean long words everywhere. A clear, simple formal sentence is better than a complicated one; praise clarity.',
    'Common mistakes in essays: contractions (*don’t*), very informal words (*kids*, *stuff*, *a lot of*), and starting sentences with *And* or *But*.',
    'The Part 1 essay has two given notes and asks for a third idea of the student’s own. Many candidates forget the third idea and lose marks.',
    'Show the four marking areas of the Writing paper briefly (content, organisation, language, effect on the reader) and tell students which ones today helps with.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write *Kids these days don’t read a lot of books.* on the blank page. Students make it formal together.' },
    { min: 15, title: 'Informal and formal', md: 'Show board page 1. Students match the informal and formal expressions, then rewrite two informal sentences.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students choose the formal option and fix the informal mistakes.' },
    { min: 20, title: 'Exam corner: planning an essay', md: 'Show board page 3. Read the task and the model introduction together. Then do the activity for your class size below, which plans and starts the essay.' },
    { min: 5, title: 'Correction slot', md: 'Read two students’ introductions aloud and improve them together.' },
    { min: 5, title: 'Close', md: 'Each student names two formal phrases they will use in the homework essay. Set the homework.' },
  ],
  board: [
    { title: 'Informal and formal', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each informal expression to a formal one.', pairs: [
        ['look into', 'investigate'],
        ['get better', 'improve'],
        ['a lot of', 'a great deal of'],
        ['kids', 'children'],
        ['find out', 'discover'],
        ['so', 'therefore'],
      ] },
      { t: 'examples', items: [
        { s: 'It is often argued that cities are becoming less friendly.', n: 'Impersonal: *It is often argued that…*' },
        { s: 'There are several reasons for this.', n: 'Clear and formal, no contractions.' },
        { s: 'In conclusion, the advantages outweigh the disadvantages.', n: 'A formal conclusion.' },
      ] },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the more formal option for an essay.', items: [
        { q: 'Local councils should ___ the problem.', o: ['address', 'sort out', 'deal with it'], why: '*address a problem* is formal; *sort out* is informal.' },
        { q: '___, public transport is cheaper than driving.', o: ['Furthermore', 'Plus', 'And also'], why: '*Furthermore* is a formal linker.' },
        { q: 'Many people ___ that the city centre is too expensive.', o: ['believe', 'reckon', 'think so'], why: '*reckon* is informal.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Make each sentence formal.', items: [
        { s: 'Young people [can’t] afford to live in the centre.', a: ['cannot'], why: 'No contractions in formal writing.' },
        { s: 'There are [loads of] cars in the city.', a: ['a large number of', 'many'], why: '*loads of* is informal.' },
      ] },
    ] },
    { title: 'Exam corner: Writing Part 1', blocks: [
      { t: 'text', md: 'In the format of B2 First Writing Part 1 (essay, 140–190 words). Your teacher has asked you to write an essay.\n\n*Is it better to live in a city than in the countryside?*\n\nNotes: write about (1) jobs, (2) quality of life, (3) your own idea.' },
      { t: 'reading', title: 'A model introduction', md: 'Every year, many people move from rural areas to large cities in search of a better life. However, it is not clear that city life is always the better choice. In this essay, I will consider employment, quality of life and the cost of housing before reaching a conclusion.' },
      { t: 'tip', md: 'In Part 1 you must write about both notes **and** add an idea of your own; the model above adds *the cost of housing*. Missing the third idea is one of the most common ways to lose content marks.' },
    ] },
  ],
  activities: {
    one: { title: 'Plan it together', md: 'Plan the Part 1 essay together on the blank page: one main point and one example for each note, and the student’s own third idea. The student then writes the introduction and the first body paragraph during class. Give feedback on register using the page 1 list.' },
    small: { title: 'Paragraph pairs', md: 'In pairs, students plan the essay together, agreeing on a third idea. Each student writes one body paragraph (one on jobs, one on quality of life) in eight minutes, then they swap and mark each other’s paragraph for formal register: no contractions, no informal words, at least one formal linker.' },
    group: { title: 'Essay factory', md: 'In breakout rooms of three, each student writes a different part in ten minutes: introduction, paragraph on jobs, paragraph on quality of life. Paste the three parts together in the chat and read the result; the room adds a conclusion and checks the register. Share the best essay in the main room.' },
  },
  homework: { book: 'u8:p3', md: 'Finish book lesson 3 of unit 8 (In a formal style). Then write the full essay from the exam corner (140–190 words), with your own third idea, in a formal style. Check it for contractions and informal words before you send it.' },
};
