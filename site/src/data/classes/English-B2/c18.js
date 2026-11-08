// English B2, class 18 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u4:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c18',
  focus: 'By the end of the class every student can explain how an everyday object or machine works and tell the short history of an invention, using the present simple passive for the process, past passives for the history and one impersonal passive for a belief (*It is said that…*). Skills point: scanning a text for specific information, as in B2 First Reading Part 7.',
  tips: [
    'Process descriptions go flat quickly. Give students sequencers (*first, once, after that, finally*) and the linker **which** for a whole idea: *The water is heated, which kills the bacteria.*',
    'In Part 7, students read every word and run out of time. Teach the order: read the questions first, underline key words, then scan for **synonyms**, not the same words.',
    'Learners often lose the article in inventions: *The microwave was invented in 1945* (the type of machine), *a microwave* (one machine). Correct it lightly; the passive is today’s focus.',
    'Keep the speaking concrete: students should explain a real object they use, not a famous invention they know little about.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Hold up or name three everyday objects (a zip, a kettle, a ballpoint pen). Ask: *Which one would be hardest to live without? Do you know how it works?*' },
    { min: 15, title: 'Reading', md: 'Show board page 1. Students read the short text about the zip in four minutes, then answer the questions. Ask them to point to the words in the text that gave them each answer.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 2: multiple matching in the format of B2 First Reading and Use of English Part 7. Set a strict time of six minutes, then check together and discuss the synonyms that lead to each answer.' },
    { min: 10, title: 'Language check', md: 'Show board page 3. Students complete the process with the right passive forms, then one student reads the full process aloud.' },
  ],
  board: [
    { title: 'Reading: the zip', blocks: [
      { t: 'reading', title: 'A small idea that holds everything together', md: 'The zip is used billions of times a day, but it took more than sixty years to perfect. An early version was shown at a fair in Chicago in 1893, yet it was said to open by itself at the worst possible moment.\n\nThe modern design was developed by Gideon Sundback, a Swedish engineer, in 1913. His version is made of two rows of small metal teeth, which are joined together by a slider. When the slider is pulled up, the teeth are pushed into each other and locked.\n\nAt first, zips were mainly used on boots and tobacco bags. It was not until the 1930s that they were sewn into clothes, and they are now thought to be one of the most common mechanical objects in the world.' },
      { t: 'ex', kind: 'tf', h: 'Read the text. Are the sentences true, false or not given?', ng: true, items: [
        { q: 'The first zip worked perfectly.', a: 'f', why: 'It was said to open by itself at the worst moment.' },
        { q: 'Sundback’s design uses a slider to join two rows of teeth.', a: 't', why: 'The teeth are joined together by a slider.' },
        { q: 'Sundback became rich from his invention.', a: 'ng', why: 'The text says nothing about money.' },
        { q: 'Zips were used in clothes before they were used in boots.', a: 'f', why: 'Boots and bags first; clothes in the 1930s.' },
      ] },
    ] },
    { title: 'Exam corner: Reading Part 7', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 7: four people talk about an invention they could not live without. Which person mentions each idea?\n\n**A** *Lena:* My washing machine saves me hours. It was given to me by my parents, and honestly, it has changed my weekends.\n\n**B** *Omar:* Glasses. Without them I can’t read a single word, and my first pair was made when I was only six.\n\n**C** *Mei:* The bicycle. It is cheap, it is quiet, and in my city it is often faster than the bus.\n\n**D** *Kofi:* My phone, although I wish it weren’t. I’m told I check it more than a hundred times a day.' },
      { t: 'ex', kind: 'choice', h: 'Which person (A, B, C or D)…', items: [
        { q: '…admits that they use their invention too much?', o: ['D', 'A', 'C'], why: '*I wish it weren’t* and *more than a hundred times a day*.' },
        { q: '…has needed their invention since childhood?', o: ['B', 'A', 'D'], why: 'The first pair was made at the age of six.' },
        { q: '…received their invention as a present?', o: ['A', 'B', 'C'], why: '*It was given to me by my parents*.' },
        { q: '…compares their invention with public transport?', o: ['C', 'D', 'B'], why: '*often faster than the bus*.' },
      ] },
      { t: 'tip', md: 'In Part 7 the question and the text rarely use the same words. *Received as a present* = *was given to me*. Underline the idea in the question, then look for a **different way of saying it**.' },
    ] },
    { title: 'How a kettle works', blocks: [
      { t: 'ex', kind: 'gap', h: 'Complete the process with the passive of the verb in brackets.', items: [
        { q: 'First, the kettle ___ (fill) with water.', a: ['is filled'], why: 'Process: present simple passive.' },
        { q: 'Then the water ___ (heat) by a metal element.', a: ['is heated'], why: 'Present simple passive with *by* + the doer.' },
        { q: 'When the water boils, the kettle ___ (switch) off automatically.', a: ['is switched'], why: 'Present simple passive.' },
        { q: 'The first electric kettle ___ (sell) in the 1890s.', a: ['was sold'], why: 'History: past simple passive.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Explain it to me', md: 'The student chooses an everyday object at home (a coffee machine, a lock, a fridge) and explains how it works in six or seven passive sentences, then gives one fact or belief about its history (*It is said that…*). You play a curious child and ask *Why? And then?* to push for more detail. Finish by correcting two sentences together.' },
    small: { title: 'Invention pitch', md: 'Each student invents a simple machine that would make daily life easier and has three minutes to present it: how it is made, how it is used and what it is expected to change. The others ask one question each and then vote for the invention they would buy.' },
    group: { title: 'Museum guides', md: 'Breakout rooms of three or four. Each room chooses an everyday invention and prepares a one-minute museum-guide talk: its history (past passives), how it works (present passives) and one belief or rumour about it (impersonal passive). Back together, one person per room gives the tour; the rest note one passive form they heard.' },
  },
  homework: { book: 'u4:p4', md: 'Finish book lesson 4 of unit 4 (The quiet machine in your kitchen), including the speaking task. Then write a short article (about 120 words) about an invention you use every day: its history, how it works and why it matters to you.' },
};
