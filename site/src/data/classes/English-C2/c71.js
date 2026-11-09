// English C2, class 71 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u15:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c71',
  focus: 'By the end every student translates meaning rather than words: they catch the partial false friends that survive into C2 English (*actually, eventually, control, realise, comprehensive*), find the function of an idiom from another language and give the natural English for it, and adjust register when a formula from their own language would sound stiff in English. They also complete a C2 Proficiency Reading and Use of English Part 2 text, where the gaps sit inside fixed formal patterns.',
  tips: [
    'At C2 most remaining errors come from the student’s first language, not from English. Before class, note two or three false friends or literal translations you have heard from each student; they are worth more than any list.',
    'The dangerous false friends are the **partial** ones, which overlap in one meaning. *Control* can mean *check* in many languages but in English it mostly means *direct* or *restrain*; *realise* means *become aware*, not *carry out*. Ask students to say the meaning they intended, then give the English word for it.',
    'With idioms, ask *What does the phrase do?* before *What does it say?* A greeting, a wish, a complaint or a warning is translated by its function, and the plain verb is often more natural than an English idiom.',
    'In Part 2, students who know the patterns still miss gaps because they read only the half sentence. Insist that they read the whole sentence, and the next one, before writing anything.',
    'In a group with mixed first languages, the idiom work is richer: each student is the expert on their own language. In 1 on 1, use the student’s language even if you do not speak it; they explain the image, you supply the English.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Which English word still catches you out because it looks like a word in your language?* Each student gives one, with the meaning they keep wanting it to have.' },
    { min: 10, title: 'Partial false friends', md: 'Show board pages 1 and 2. Go through the table briefly, then students fix the sentences alone with “Everyone solves this”. Check, and add the false friends from the warm-up.' },
    { min: 10, title: 'Idioms by function', md: 'Show board page 3. Students choose the natural English for each idiom and say what the phrase does: wishes, complains, refuses, encourages.' },
    { min: 8, title: 'Register across languages', md: 'Show board page 4. Students sort the sentences into stiff, translated English and natural English, then improve one stiff sentence each aloud.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 5: C2 Proficiency Reading and Use of English Part 2. Eight minutes alone with “Everyone solves this”, then check. For each gap, students name the pattern that decided it.' },
    { min: 10, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 4, title: 'Close', md: 'Each student writes in the chat one false friend they will watch for and one idiom from their language with its English function. Set the homework.' },
  ],
  board: [
    { title: 'Partial false friends', blocks: [
      { t: 'text', md: 'A partial false friend shares one meaning with a word in your language and not the others, so it feels safe. The fix is to check the **meaning you intend**, not the word that looks familiar.' },
      { t: 'table', caption: 'Words that look familiar and mean something else', explain: ['head', 'col1', 'col3'], head: ['English word', 'What it means in English', 'Looks like', 'What that often means'], rows: [
        ['control', 'direct, restrain, have power over', 'contrôler, controllare, controlar', 'check, inspect'],
        ['realise', 'become aware of', 'réaliser, realizzare, realizar', 'carry out, achieve'],
        ['comprehensive', 'complete, including everything', 'comprensivo, compréhensif', 'understanding, sympathetic'],
        ['lecture', 'a talk to students or an audience', 'lectura, lecture (French)', 'reading'],
        ['agenda', 'a list of points for a meeting', 'agenda (French, Spanish, Italian)', 'diary, planner'],
        ['fabric', 'cloth, or the basic structure of something', 'fábrica, fabbrica', 'factory'],
      ] },
    ] },
    { title: 'Fix the translation', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence was translated word for word. Find and fix the mistake.', items: [
        { s: 'Could you [control] the figures before the report goes out?', a: ['check'], why: 'To make sure something is correct is to *check* it; *control* means direct or restrain.' },
        { s: 'It took ten years to [realise] the project, but it was worth it.', a: ['complete', 'carry out', 'finish', 'achieve'], why: '*Realise* means become aware; a project is *completed* or *carried out*.' },
        { s: 'My manager was very [comprehensive] when my father was ill.', a: ['understanding', 'sympathetic'], why: '*Comprehensive* means complete; a person who understands your difficulty is *understanding*.' },
        { s: 'I have written the meeting in my [agenda] so I don’t forget it.', a: ['diary', 'planner', 'calendar'], why: 'An *agenda* is the list of points for a meeting; the book you plan your days in is a *diary*.' },
        { s: 'The old textile [fabric] on the river has been turned into flats.', a: ['factory', 'mill'], why: '*Fabric* is cloth; the building where goods are made is a *factory* (for textiles, often a *mill*).' },
        { s: 'Before the seminar, the [lecture] of two short articles is required.', a: ['reading'], why: 'A *lecture* is a talk; what you read in advance is the *reading*.' },
      ] },
    ] },
    { title: 'Idioms by function', blocks: [
      { t: 'ex', kind: 'choice', h: 'A friend uses an idiom from their language. Choose the natural English for what the phrase does.', items: [
        { q: 'A French colleague, about a task you dread: “Ce n’est pas la mer à boire.” (literally: it is not the sea to drink)', o: ['It’s not the end of the world.', 'You don’t have to drink the sea.', 'The sea is not for drinking.'], why: 'The phrase reassures: the task is not as hard as it seems.' },
        { q: 'A German friend, when you miss a sign right in front of you: “Hast du Tomaten auf den Augen?” (literally: have you got tomatoes on your eyes?)', o: ['Are you blind? It’s right in front of you!', 'Have you hurt your eyes?', 'Do you want some tomatoes?'], why: 'A teasing complaint that you failed to see something obvious.' },
        { q: 'An Italian friend, about her holiday next week: “Non vedo l’ora!” (literally: I don’t see the hour)', o: ['I can’t wait!', 'I can’t see the time.', 'I have no time.'], why: 'An expression of eager anticipation.' },
        { q: 'A Portuguese colleague, after being blamed for a mistake he did not make: “Fui eu que paguei o pato.” (literally: I was the one who paid for the duck)', o: ['I was the one who took the blame.', 'I paid for everyone’s dinner.', 'I bought the wrong thing.'], why: '*Pagar o pato*: to suffer the consequences of someone else’s action; in English, *take the blame* or *carry the can*.' },
        { q: 'A Spanish friend, about an exam she found easy: “Fue pan comido.” (literally: it was eaten bread)', o: ['It was a piece of cake.', 'It was bread and butter.', 'It was already eaten.'], why: 'A near twin with a different image: *a piece of cake*.' },
      ] },
      { t: 'tip', art: 'parrot', md: 'Translate what the phrase **does**: reassure, tease, wish, complain. If English has no idiom with the same function, a plain sentence is better than a strange image.' },
    ] },
    { title: 'Register across languages', blocks: [
      { t: 'ex', kind: 'sort', h: 'Does the sentence sound like stiff, translated English, or like natural English in a modern business email?', groups: ['stiff, translated', 'natural English'], items: [
        { s: 'We remain at your complete disposal for any further clarification you may require.', g: 0, why: 'A courtesy formula carried over from another language; in English it sounds ceremonious.' },
        { s: 'Please let me know if anything is unclear.', g: 1, why: 'Polite through indirectness and brevity, as English prefers.' },
        { s: 'With the hope of a favourable reception of our proposal, we send you our most distinguished greetings.', g: 0, why: 'A translated closing formula; English would simply say *Best regards* or *Kind regards*.' },
        { s: 'I look forward to hearing what you think.', g: 1, why: 'A natural, warm closing line.' },
        { s: 'It is with great pleasure that we inform you of the realisation of the order.', g: 0, why: 'A stiff opening and a false friend (*realisation* for completion).' },
        { s: 'I’m glad to say your order is now on its way.', g: 1, why: 'Direct and friendly, and still professional.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 2', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 2): read the text about subtitles and think of the word which best fits each gap. Use only one word in each gap.', items: [
        { q: 'A subtitler has, on average, ___ more than two lines in which to say what an actor says in a whole speech.', a: ['no'], why: '*No more than*: at most; the meaning depends on the limit that follows.' },
        { q: 'Faced ___ such limits, the translator must decide what can be left out.', a: ['with'], why: 'The fixed pattern *faced with*.' },
        { q: 'A joke may have to go, ___ alone a pun that only works in the original language.', a: ['let'], why: '*Let alone*: still less.' },
        { q: 'Viewers rarely notice what is missing, ___ is testament to the subtitler’s skill.', a: ['which'], why: 'A sentence relative clause: *which* refers to the whole previous idea.' },
        { q: 'Only when a film is subtitled badly ___ audiences become aware of the work involved.', a: ['do'], why: '*Only when…* at the front triggers inversion: *do audiences become*.' },
        { q: 'Dubbing, by contrast, replaces the voices altogether, ___ some viewers find unbearable.', a: ['which', 'something'], why: 'A relative pronoun or *something* referring back to the whole idea of replacing the voices.' },
        { q: 'Whether audiences prefer one method or the other depends largely ___ what they grew up with.', a: ['on', 'upon'], why: '*Depend on*: a dependent preposition several words after the verb.' },
        { q: 'Neither method is perfect, ___ is either likely to disappear.', a: ['nor'], why: 'After a negative clause, *nor* + inversion.' },
      ] },
      { t: 'tip', art: 'parrot', md: 'At C2 the gap is often the **hinge of a pattern** whose other half is further away: *no more than*, *let alone*, *only when… do*, *neither… nor*. Find the other half before you write.' },
    ] },
  ],
  activities: {
    one: { title: 'From your language', md: 'Ask the student for three things from their own language: a false friend that still catches them, an idiom they use every week and a polite formula from emails at work. For each one, they explain what it does, and together you find the most natural English, deciding whether an idiom, a plain sentence or a different register fits best. Finish by writing a short work email in English that uses all three correctly.' },
    small: { title: 'Idiom exchange', md: 'Each student posts an idiom from their language in the chat with its literal translation, without saying what it means. The others guess its function (a wish, a complaint, a warning, a compliment) and propose the natural English. The owner of the idiom says which proposal comes closest and why. If the group shares a first language, use proverbs from different regions or from older relatives instead.' },
  },
  homework: { book: 'u15:p2', md: 'Finish lesson 2 of unit 15 if needed, then do lesson 3 (Framing, priming and the nudge). Translate a short paragraph (about 120 words) from a website, menu or leaflet in your language into natural English, keeping the effect on the reader rather than the words, and note two places where you changed an idiom or the register, with the reason.' },
};
