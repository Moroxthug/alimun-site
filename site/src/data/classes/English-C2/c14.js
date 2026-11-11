// English C2, class 14 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u3:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c14',
  focus: 'By the end every student reads a humorous column, names the devices that make it funny (a persona, mock-heroic language, bathos, self-deprecation, sarcasm, understatement and litotes), finds paraphrased ideas quickly in the format of C2 Proficiency Reading and Use of English Part 7, and tells a small everyday story in a columnist’s voice. This class closes unit 3.',
  tips: [
    'The humour of a column comes from the persona, not from jokes. Ask students to describe the narrator in three adjectives before they look at the devices.',
    'Part 7 questions paraphrase the text: *a suggestion that a stated purpose was not the real one* will not contain the word *ostensibly*. Teach students to match ideas, not words.',
    'Read sections B and D aloud in a deadpan voice. Students who hear the tone find the sarcasm and the mock-heroic comparison much faster.',
    'The activity is a chance to bring units 1 to 3 together: an understatement, an idiom and a short sentence for impact in the same one-minute story.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Are you in a family or friends’ group chat? What is it really like?* Each student answers in two or three sentences, with one understatement.' },
    { min: 22, title: 'Read and match', md: 'Show board page 1. Students read the column alone (about six minutes), then answer the questions in the format of Part 7 (about six minutes). Check together; for each answer, students quote the words in the section that express the idea in the question.' },
    { min: 8, title: 'How it is funny', md: 'Show board page 2. Students name the device in each line, then say which line they found funniest and why.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Fix it', md: 'Write on the board three or four real mistakes from unit 3 that you heard today or in classes 11 to 13. Students correct them together.' },
    { min: 5, title: 'Close', md: 'Each student finishes the sentence *I have learned to tolerate… with something approaching affection.* Set the homework.' },
  ],
  board: [
    { title: 'Exam corner: Reading and Use of English Part 7', blocks: [
      { t: 'reading', title: 'The family group chat', md: '**A** My family has a group chat. I joined it voluntarily, which tells you something about my judgement. It was set up by my sister, ostensibly so that we could “share news”, and for about a week that is exactly what we did. Then my uncle discovered the forward button.\n\n**B** Since then, the chat has become a kind of museum of everything my uncle has ever found amusing. There are photographs of cats in hats. There are urgent warnings about dangers that do not exist. And there is, every morning at six, a picture of a sunrise with the words GOOD MORNING FAMILY, in case any of us had forgotten which family we belong to.\n\n**C** I have tried, in my modest way, to raise the tone. I once shared an article I thought rather interesting. It received a single reply, from my mother, who wanted to know whether I was eating properly. I have not shared an article since. I know when I am beaten.\n\n**D** Leaving is, of course, out of the question. Leaving a family group chat is not a technical act but a diplomatic one, roughly on a level with declaring independence. My cousin left once. He was readmitted three days later, after negotiations conducted mainly through his grandmother, and he has not been quite the same man since.\n\n**E** So I stay, and I have learned to tolerate it with something approaching affection. My phone buzzes; I glance at the sunrise; I reply with a thumbs-up. It is not much of a conversation. But it is, I have come to think, a way of saying *I am still here, and so are you*. That is not nothing.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 7): in which section (A to E) does the writer mention each of the following? A section may be chosen more than once.', items: [
        { q: 'a suggestion that a stated purpose was not the real one', o: ['A', 'B', 'C', 'D', 'E'], why: '*Ostensibly so that we could “share news”*: that was the claimed reason.' },
        { q: 'an admission of defeat after an attempt to improve something', o: ['C', 'A', 'B', 'D', 'E'], why: '*I have tried… to raise the tone… I know when I am beaten.*' },
        { q: 'a comparison between a small social act and a political event', o: ['D', 'A', 'B', 'C', 'E'], why: 'Leaving the chat is *roughly on a level with declaring independence*.' },
        { q: 'the realisation that something trivial has a deeper value', o: ['E', 'A', 'B', 'C', 'D'], why: '*A way of saying I am still here, and so are you.*' },
        { q: 'a list of things the writer clearly finds tiresome', o: ['B', 'A', 'C', 'D', 'E'], why: 'Cats in hats, false warnings, the daily sunrise: a list built on *There are… There are… And there is…*' },
        { q: 'a hint that the writer regrets a choice he made freely', o: ['A', 'B', 'C', 'D', 'E'], why: '*I joined it voluntarily, which tells you something about my judgement.*' },
        { q: 'a relative’s response that ignores what was actually shared', o: ['C', 'A', 'B', 'D', 'E'], why: 'His mother replies to an article by asking whether he is eating properly.' },
        { q: 'an account of someone who returned after trying to escape', o: ['D', 'A', 'B', 'C', 'E'], why: 'The cousin *left once* and *was readmitted three days later*.' },
        { q: 'a sarcastic comment on a message nobody needs', o: ['B', 'A', 'C', 'D', 'E'], why: '*In case any of us had forgotten which family we belong to.*' },
        { q: 'an understatement about a modest gesture', o: ['E', 'A', 'B', 'C', 'D'], why: '*It is not much of a conversation… That is not nothing*: understatement and litotes about a thumbs-up.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 7** you answer **ten questions** by matching each one to a section, and a section can be the answer more than once. The questions paraphrase the text, so read a section, then check it against all the questions at once, rather than reading the whole text again for every question.' },
    ] },
    { title: 'How it is funny', blocks: [
      { t: 'ex', kind: 'choice', h: 'Which comic device does each line from the column use?', items: [
        { q: 'Leaving a family group chat is not a technical act but a diplomatic one, roughly on a level with declaring independence.', o: ['mock-heroic', 'bathos', 'litotes'], why: 'A trivial act described in grand political terms.' },
        { q: 'I joined it voluntarily, which tells you something about my judgement.', o: ['self-deprecation', 'personification', 'overstatement'], why: 'The writer makes himself the target of the joke.' },
        { q: 'He was readmitted three days later, after negotiations conducted mainly through his grandmother.', o: ['mock-heroic', 'a pun', 'sarcasm'], why: 'The language of diplomacy (*readmitted*, *negotiations*) for a family quarrel.' },
        { q: 'There are urgent warnings about dangers that do not exist.', o: ['irony', 'a pun', 'personification'], why: '*Urgent* clashes with *do not exist*: the words undercut themselves.' },
        { q: 'That is not nothing.', o: ['litotes', 'bathos', 'overstatement'], why: 'Denying the opposite to make a quiet, sincere point.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Notice how the column **ends**. After four sections of jokes, the last one turns sincere, and the understatement (*That is not nothing*) lets the writer say something warm without becoming sentimental. Many good columns finish this way.' },
    ] },
  ],
  activities: {
    one: { title: 'Your column', md: 'The student chooses a small, everyday battle of their own (with a neighbour’s dog, a coffee machine, a smart speaker, a parking app) and tells it for about a minute in a columnist’s voice. Then write the opening paragraph together in the chat, with one mock-heroic phrase, one self-deprecating line, one idiom from unit 3 and a short sentence for impact. The student finishes the column for homework.' },
    small: { title: 'The editorial meeting', md: 'Each student pitches an idea for a humorous column in thirty seconds (*my war with the office thermostat*). The group chooses two ideas. Each student then writes one line for one of them in the chat, using a device from today, and the group builds the best lines into an opening paragraph and reads it aloud in a deadpan voice.' },
  },
  homework: { book: 'u4:p1', md: 'Finish lesson 4 of unit 3 if needed and do the unit 3 test. Write a humorous column of about 250 words about a small everyday battle of your own, with a persona, one mock-heroic phrase, one understatement, one idiom from unit 3 and a sincere last line. Then do lesson 1 of unit 4 (Arguably, ostensibly, undoubtedly).' },
};
