// English C2, class 52 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u11:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c52',
  focus: 'By the end every student can plan and open an article in the format of C2 Proficiency Writing Part 2 that explains a scientific idea to general readers: a headline that intrigues without overclaiming, a hook that starts the article instead of announcing it (a scene, a belief to challenge, a surprising fact, a question), an analogy introduced and limited precisely (*Think of it as…*, *It is rather like…*, *The comparison only goes so far*), a fair account of the evidence without false balance, and an ending that returns to the hook with something to keep.',
  tips: [
    'Students who write essays well often write stiff articles. Ban *In this article I will…*, *Firstly* and *In conclusion* for the class, and ask for one sentence that a reader would remember.',
    'An analogy is only useful if the reader knows the familiar half better than the unfamiliar one. Test each analogy with *Would your neighbour understand the comparison without explanation?*',
    'Fairness is not the same as balance. If almost all the evidence points one way, the article says so. Ask students where the weight of evidence lies before they write the paragraph about it.',
    'Plan to the exam’s timing: about ten minutes to plan, thirty to write and five to check. In class, practise the plan and the opening; the full article is the homework.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is one thing you were told as a child about health or the body that turned out not to be true?* Collect two or three and keep them for the task.' },
    { min: 8, title: 'Headlines', md: 'Show board page 1. Students choose the best headline for each article and say what is wrong with the others.' },
    { min: 8, title: 'Hooks', md: 'Show board page 2. Students sort the openings, then turn one of the essay openings into a real hook.' },
    { min: 12, title: 'Analogies and fairness', md: 'Show board page 3. Students complete the phrases and fix the sentences. Then each student offers one analogy for something they know well, and the others say where it stops being true.' },
    { min: 20, title: 'Activity', md: 'Show board page 4: the Writing Part 2 task. Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student reads their headline and last line aloud. Set the homework: the full article.' },
  ],
  board: [
    { title: 'Headlines', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the best headline for each article.', items: [
        { q: 'An article explaining why most diets fail in the long run.', o: ['Why the diet always wins', 'Diets: an essay on failure in three parts', 'Scientists prove that all diets fail!'], why: 'Short and intriguing, with a twist; the third overclaims and the second sounds like an essay.' },
        { q: 'An article on whether the full moon really affects behaviour.', o: ['Blame it on the moon?', 'The moon makes people mad, study finds', 'Some information about the moon'], why: 'A fair question that promises an answer; the second states a myth as a finding.' },
        { q: 'An article on the placebo effect.', o: ['The pill that works because you believe in it', 'Placebos cure everything', 'The placebo effect: a definition'], why: 'It sets up a paradox the article will explain, without promising a cure.' },
      ] },
    ] },
    { title: 'Hooks', blocks: [
      { t: 'ex', kind: 'sort', h: 'What kind of opening is each one?', groups: ['A scene', 'A belief to challenge', 'A question to the reader', 'A surprising fact', 'Not an article opening'], explain: ['groups'], items: [
        { s: 'It is half past three, the children are bouncing off the walls, and someone blames the birthday cake.', g: 0, why: 'Puts the reader in a moment they recognise.' },
        { s: 'We are often told that we use only a tenth of our brains.', g: 1, why: 'Sets up a common belief the article will take apart.' },
        { s: 'Have you ever wondered why a cold always seems to arrive the week your holiday starts?', g: 2, why: 'A direct question that involves the reader.' },
        { s: 'Lightning, whatever the old saying claims, often strikes the same place twice.', g: 3, why: 'A plain statement that contradicts what readers expect.' },
        { s: 'In this article I will explain the placebo effect.', g: 4, why: 'Announces the article instead of starting it.' },
        { s: 'This text will discuss three main points about sleep.', g: 4, why: 'An essay opening: no reason for a reader to go on.' },
      ] },
    ] },
    { title: 'Analogies and fairness', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the word that completes each phrase.', items: [
        { q: '___ of it as a rehearsal: the body practises against a harmless copy before the real performance.', o: ['Think', 'Consider', 'Suppose'], why: 'The fixed phrase is *Think of it as…*' },
        { q: 'The immune system is rather ___ a security guard who learns to recognise faces.', o: ['like', 'as', 'similar'], why: '*It is rather like* + noun. *Similar* would need *to*.' },
        { q: 'The comparison only goes so ___, of course: guards can be bribed, and cells cannot.', o: ['far', 'much', 'long'], why: '*Only goes so far*: marks the limit of an analogy.' },
        { q: 'To put it another ___, the risk is real but very small.', o: ['way', 'word', 'manner'], why: 'The fixed phrase is *to put it another way*.' },
        { q: 'Giving one sceptic the same space as hundreds of researchers creates a false ___.', o: ['balance', 'equality', 'symmetry'], why: '*False balance*: presenting a fringe view as if it were equal to the weight of evidence.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the problem in each sentence from an article.', items: [
        { s: 'Dozens of careful trials have found no link, so the evidence against the myth is [anecdotal].', a: ['robust', 'compelling', 'strong', 'overwhelming'], why: 'Many good trials that agree: *robust* or *compelling*. *Anecdotal* means personal stories.' },
        { s: 'One study found a small effect, so [it is now certain] that music improves concentration.', a: ['there is some evidence', 'it is possible'], why: 'One study with a small effect cannot make anything certain.' },
        { s: 'A vaccine is [exactly like] a rehearsal for the immune system.', a: ['rather like', 'a little like', 'something like', 'a bit like'], why: 'An analogy is never exact; mark it as an approximation and say where it stops.' },
      ] },
    ] },
    { title: 'Exam corner: Writing Part 2, an article', blocks: [
      { t: 'reading', title: 'Your task', md: 'In the format of the C2 Proficiency exam (Writing Part 2): write your answer in **280 to 320 words**.\n\nAn online magazine for general readers is running a series called *Is It True?* Write an article about a popular belief about health, the mind or nature that the evidence does not support, for example that sugar makes children hyperactive or that we use only a tenth of our brains. Explain why the belief is so widespread, what the evidence actually shows, and what readers should take from it.' },
      { t: 'table', caption: 'Plan before you write', explain: ['head', 'col1'], head: ['Part', 'What to decide'], rows: [
        ['Headline', 'short, intriguing, and no stronger than the evidence'],
        ['Hook', 'a scene, a belief, a fact or a question: start, do not announce'],
        ['Why people believe it', 'what makes the belief attractive or plausible'],
        ['What the evidence shows', 'the strength of the evidence, an analogy and its limits'],
        ['Ending', 'back to the hook, with something the reader can use'],
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Where would you stop?', md: 'The student chooses a belief (from the warm-up or the task) and plans the article on board page 4 in six minutes: headline, hook, one analogy and the last line. Then they write the headline and the first paragraph (about 70 words) while you wait. Read it aloud as a magazine reader would and stop at the exact point where your attention drops; the student revises from there. Finish with the analogy paragraph: the student writes it, and you ask *Where does the comparison stop being true?* until the limit is in the text.' },
    small: { title: 'The editor’s desk', md: 'All students write for the same belief, chosen together. In four minutes each posts a headline and a two-sentence hook in the chat; the group, as editors, chooses the opening that would keep readers longest and says why. Then each student writes one analogy for what the evidence shows, and the group tests each one: is the familiar half really familiar, and where does it break? Finish by writing the last line together, so that it returns to the winning hook.' },
  },
  homework: { book: 'u11:p3', md: 'Finish lesson 3 of unit 11 if needed, then do lesson 4 (The study that would not go away). Write the article for *Is It True?* from board page 4 in 280 to 320 words, in about forty-five minutes, and send it to your teacher.' },
};
