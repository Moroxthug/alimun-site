// English C2, class 65 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u14:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c65',
  focus: 'By the end every student uses the vocabulary of society and belonging precisely and tells close words apart: *assimilation* and *integration*, *heritage* and *inheritance*, *a sense of place* and *a sense of belonging*, *a melting pot*, *a diaspora*, *cultural capital*. They build the word families (*cohere*, *cohesion*, *cohesive*; *alien*, *alienated*; *margin*, *marginalised*; *integrate*, *integral*) and complete a text in the format of C2 Proficiency Reading and Use of English Part 3, where one gap can need a prefix, a suffix and a change inside the word.',
  tips: [
    'These words carry attitudes. *Assimilation* often implies losing one’s own culture; *integration* implies keeping it while taking part. Ask students which word a politician, a newcomer and a sociologist would each choose, and why.',
    '*Heritage* is uncountable and shared (*the town’s heritage*); an *inheritance* belongs to one person. *A sense of belonging* is the noun phrase; *a feeling of belong* is a common mistake.',
    'In Part 3, ask students to say the word class and whether the meaning is positive, negative or plural before they write anything. Most wrong answers are the right word in the wrong form.',
    'The activity asks students to talk about places that matter to them. Some may have left a home they cannot return to; let them choose any place, including one they do not feel attached to.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Is there a place where you feel you truly belong? What gives you that feeling?* Each student answers briefly; write the nouns they use on the board.' },
    { min: 9, title: 'The precise word', md: 'Show board page 1. Students choose the word that fits each sentence and say what the wrong options would mean.' },
    { min: 9, title: 'Word families', md: 'Show board page 2. Students form the words, then say which change they made: a suffix, a prefix, or a change inside the word.' },
    { min: 17, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Reading and Use of English Part 3. Students read the whole text once, then form the eight words alone in about eight minutes. Check spelling as well as form.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below, with the questions on board page 4.' },
    { min: 5, title: 'Close', md: 'Each student uses one pair of easily confused words correctly in one sentence (*assimilation* and *integration*, *heritage* and *inheritance*). Set the homework.' },
  ],
  board: [
    { title: 'The precise word', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the word that fits the meaning best.', items: [
        { q: 'The aim of the programme is ___, not assimilation: newcomers take full part in society and keep their own traditions.', o: ['integration', 'isolation', 'segregation'], why: '*Integration*: taking full part while keeping one’s own culture. *Assimilation* means largely losing it.' },
        { q: 'The spring festival is part of the town’s ___, handed down for generations.', o: ['heritage', 'inheritance', 'estate'], why: '*Heritage*: the traditions a community shares. An *inheritance* is what one person receives from another.' },
        { q: 'After forty years abroad, he still has a strong ___ of belonging to his home village.', o: ['sense', 'touch', 'spirit'], why: 'The fixed phrase is *a sense of belonging*.' },
        { q: 'Knowing how to speak to a professor or a bank manager is a form of cultural ___.', o: ['capital', 'wealth', 'income'], why: '*Cultural capital*: knowledge and manners that bring social advantages.' },
        { q: 'Relatives scattered across many countries, still bound by language and memory, form a ___.', o: ['diaspora', 'dynasty', 'delegation'], why: '*A diaspora*: a people spread far from their place of origin.' },
        { q: 'The city has long been described as a melting ___, where cultures mix into something new.', o: ['pot', 'point', 'pan'], why: 'The fixed phrase is *a melting pot*.' },
      ] },
    ] },
    { title: 'Word families', blocks: [
      { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
        { q: 'Sport can be a powerful force for social ___.', base: 'COHERE', a: ['cohesion'], why: 'Noun after an adjective; the ending changes: *cohere → cohesion*.' },
        { q: 'Children of migrants often describe a double sense of ___.', base: 'BELONG', a: ['belonging'], why: 'Noun after *a sense of*: *belonging*.' },
        { q: 'Many young people in the outer suburbs feel ___ from the life of the city.', base: 'ALIEN', a: ['alienated'], why: 'A participle adjective after *feel*, followed by *from*.' },
        { q: 'Music is ___ to the way the community remembers its past.', base: 'INTEGRATE', a: ['integral'], why: '*Integral to*: essential to. *Integrated* would mean *combined with*.' },
        { q: 'The scheme was designed to help ___ groups find a voice.', base: 'MARGIN', a: ['marginalised', 'marginalized'], why: 'Noun → verb → participle: *margin → marginalise → marginalised*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 3', blocks: [
      { t: 'ex', kind: 'wordform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 3): the sentences make one short text about an imaginary community kitchen. Use the word in capitals to form a word that fits each gap.', items: [
        { q: 'When the community kitchen on Harbour Road opened, few expected it to become an ___ of the neighbourhood.', base: 'INSTITUTE', a: ['institution'], why: 'Noun after *an*: *institution*, a well-established part of a place.' },
        { q: 'Its founders, themselves ___ who had arrived with very little, wanted a place where anyone could cook.', base: 'MIGRATE', a: ['migrants', 'immigrants'], why: 'A plural noun for people after *themselves*: *migrants* (or *immigrants*).' },
        { q: 'Each week a different family shares a recipe, and the ___ of dishes on offer now runs to several hundred.', base: 'VARY', a: ['variety'], why: 'Noun after *the*; the ending changes: *vary → variety*.' },
        { q: 'For older residents, who had watched the area change almost ___, it became a way to meet their new neighbours.', base: 'RECOGNISE', a: ['unrecognisably', 'unrecognizably'], why: 'Three changes: the negative prefix *un-*, the suffix *-able* and the adverb ending *-ly*.' },
        { q: 'The kitchen owes much of its success to its ___ atmosphere: there are no forms to fill in and nobody is asked where they are from.', base: 'FORMAL', a: ['informal'], why: 'An adjective with the negative prefix *in-*; the colon explains it.' },
        { q: 'Not everyone has been ___, however; some residents complain about noise and queues in the street.', base: 'CONVINCE', a: ['convinced'], why: 'A participle adjective after *has been*; *however* signals a reservation.' },
        { q: 'Such ___ are perhaps inevitable when a space is shared by so many people.', base: 'AGREE', a: ['disagreements'], why: 'Plural noun after *Such… are*, with the negative prefix *dis-*.' },
        { q: 'What is beyond doubt is that the kitchen has given the street an ___ it had lacked for decades.', base: 'IDENTIFY', a: ['identity'], why: 'Noun after *an*: *identify → identity*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 3** there are **eight** gaps in one text. For each gap decide the **word class**, then check the meaning around it: *however* or *not everyone* often points to a **negative** form, and *Such… are* needs a **plural**. Many answers need two or three changes, so check your spelling letter by letter.' },
    ] },
    { title: 'A sense of place', blocks: [
      { t: 'text', md: '*Describe a place where you feel, or once felt, a strong sense of place. What gives it that character?*\n\n*Is integration the responsibility of newcomers, of the society they join, or of both?*\n\n*Can a neighbourhood keep its heritage and still welcome change?*' },
      { t: 'examples', items: [
        { s: 'The old market has **a strong sense of place**: you could not mistake it for anywhere else.', n: 'The character of a place.' },
        { s: 'I felt **a sense of belonging** there long before I spoke the language well.', n: 'A person’s feeling of being accepted.' },
        { s: 'Integration **is a two-way process**; it asks something of everyone.', n: 'A careful view.' },
        { s: 'A **heritage** is not something to keep behind glass; it is **integral to** how people live now.', n: 'Two words from the lesson in one sentence.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'A place that matters', md: 'The student describes a place from their life for about two minutes, using at least four words from the lesson precisely, including one pair that is often confused. Ask follow-up questions from board page 4 that push them to use the word families (*Did you ever feel alienated there? What made the community so cohesive?*). Note three sentences and make each word more precise together.' },
    small: { title: 'Two-way process', md: 'Students work in pairs, or in a three. Each pair discusses the second question on board page 4 for four minutes and agrees on two things newcomers can do and two things the society they join can do. In a three, the third student listens and notes every word from the lesson used, and any that was used imprecisely. Bring everyone together: each pair presents its list, and the listener reports what they noted. With two students, they present to you and you play the sceptical listener.' },
  },
  homework: { book: 'u14:p3', md: 'Finish lesson 2 of unit 14 in the book if needed. Write about 150 words describing a place where you feel a sense of belonging, or once did not, with at least six words from this class and two of the word-family forms. Then do lesson 3 of unit 14 (Nowhere is this more evident).' },
};
