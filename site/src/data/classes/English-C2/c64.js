// English C2, class 64 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u14:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c64',
  focus: 'By the end every student generalises about cultures and groups carefully and respectfully: they describe tendencies (*tend to*, *more often than not*, *there is a tendency for*), limit the scope (*by and large*, *broadly speaking*, *among younger people*), admit exceptions (*though by no means all*, *with notable exceptions*) and challenge a stereotype tactfully (*it would be simplistic to say*, *that is something of a caricature*). They give a long turn of about two minutes in the format of C2 Proficiency Speaking Part 3, with a clear position, an example and another view weighed, and answer a partner’s follow-up question.',
  tips: [
    'Students sometimes overcorrect and stop generalising at all. Make it clear that generalising is normal and useful; the skill is to say how far it goes and to whom it applies.',
    'Watch *the + nationality* (*the Spanish are…*) and *always*, *never*, *all*. Ask *All of them? Always?* with a smile, and let the student repair the sentence.',
    'Two minutes is longer than students expect. Before they speak, ask them to plan three moves: position, example, another view. Time each long turn and tell the student how long they spoke.',
    'Keep the examples close to the students’ own experience: their town, their family, their workplace. That makes careful generalisation easier and avoids anyone feeling their culture is on trial.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is one thing visitors often say about people from your country or region? Is it fair?* Each student answers in two or three sentences; note any sweeping phrases for later.' },
    { min: 8, title: 'Careful or sweeping?', md: 'Show board page 1. Students choose the most careful generalisation and say what makes the others sweeping. Then they repair one sweeping sentence from the warm-up.' },
    { min: 8, title: 'The grammar of tendency', md: 'Show board page 2. Students choose the correct form, then make one true sentence about their own town with two of the expressions.' },
    { min: 11, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Speaking Part 3, the long turn. Go through the method and the questions about it, then give students one minute to look at their card and plan.' },
    { min: 22, title: 'Activity', md: 'Use the activity for your class size below, with the cards on board page 3 and the criteria on board page 4.' },
    { min: 5, title: 'Close', md: 'Each student repeats one generalisation from their long turn, made more careful than the first time. Set the homework.' },
  ],
  board: [
    { title: 'Careful or sweeping?', blocks: [
      { t: 'ex', kind: 'choice', h: 'Which sentence generalises most carefully?', items: [
        { q: '', o: ['In many city families both parents work full time, though this is less common in rural areas.', 'City families never have time for their children.', 'All families in the city live the same way.'], why: '*In many… though this is less common*: scope and an exception. *Never* and *all* are rarely true of millions of people.' },
        { q: '', o: ['Younger voters tend to be more open to change, with some notable exceptions.', 'Young people want to get rid of every tradition.', 'The young are always rebellious.'], why: '*Tend to* and *with some notable exceptions* describe a tendency, not a fixed character.' },
        { q: '', o: ['It would be simplistic to say that people in the south are more relaxed; working hours there are among the longest in the country.', 'Southerners are lazy.', 'Everyone knows people in the south take life easy.'], why: 'The careful sentence challenges the stereotype tactfully and gives a reason.' },
      ] },
    ] },
    { title: 'The grammar of tendency', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the word or form that completes the sentence correctly.', items: [
        { q: 'People in the capital ___ to eat later than people in the countryside.', o: ['tend', 'are tending', 'tends'], why: '*Tend to* + base form, in the simple present for a general tendency.' },
        { q: '___ speaking, families here are smaller than they were a generation ago.', o: ['Broadly', 'Largely', 'Mostly'], why: 'The fixed phrase is *broadly speaking*.' },
        { q: 'Many students live with their parents, ___ by no means all of them do.', o: ['though', 'despite', 'even'], why: '*Though by no means all*: a clause of contrast that admits exceptions.' },
        { q: 'There is a growing ___ for people to leave the cities when they have children.', o: ['tendency', 'tend', 'trend to'], why: '*There is a tendency for* someone *to do* something.' },
        { q: 'More often than ___, guests are invited home rather than to a restaurant.', o: ['not', 'no', 'never'], why: 'The fixed phrase is *more often than not*: usually.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Say **how far** and **for whom**: *by and large*, *in many cases*, *among older people*, *in rural areas*. Then admit the **exception**: *though by no means all*, *with notable exceptions*. A generalisation with both sounds informed, not prejudiced.' },
    ] },
    { title: 'Exam corner: Speaking Part 3, the long turn', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Speaking Part 3, the long turn). Each candidate receives a card with a question and three ideas they may use or ignore, and speaks for about **two minutes** without interruption. The partner then answers a short question on the same topic, and the examiner leads a discussion.\n\n**Card A:** *To what extent do the customs we grow up with stay with us for life?* Ideas: food, celebrations, the way we talk to older people.\n\n**Card B:** *Is it fair to judge a country by the behaviour of its tourists?* Ideas: the media, first impressions, travel in groups.\n\n**Partner’s question (about one minute):** *Card A: Which custom from your childhood would you most like to keep? Card B: Have your views of a country ever changed after a visit?*' },
      { t: 'ex', kind: 'choice', h: 'Choose the best answer about the long turn.', items: [
        { q: 'Card A. Which opening answers the question best?', o: ['I’d say they stay with us more than we realise, though not always in the form we grew up with.', 'There are many different customs in the world.', 'Customs are a very interesting topic and I will talk about food.'], why: 'A clear but qualified position that answers *to what extent*.' },
        { q: 'You have given your position and one example, and you still have a minute. What do you do?', o: ['Weigh another view, then return to the question.', 'Stop and wait for the examiner.', 'Repeat your position in different words.'], why: 'Three moves: position, example, another view. End by answering the question again.' },
        { q: 'You have ideas about only two of the three points on the card. What do you do?', o: ['Develop those two well; you do not have to use every idea.', 'Mention the third briefly anyway, even with nothing to say.', 'Ask the examiner for a different card.'], why: 'The ideas are there to help; developing two of them well is better than listing three.' },
      ] },
    ] },
    { title: 'Listening to a long turn', blocks: [
      { t: 'table', caption: 'What to listen for while a partner speaks', explain: ['head', 'col0', 'col1'], head: ['Area', 'Question to ask yourself'], rows: [
        ['position', 'Did the speaker answer the question on the card, clearly and early?'],
        ['development', 'Was there an example, and another view weighed, or only a list?'],
        ['careful generalising', 'Were tendencies, scope and exceptions given, with no sweeping *all* or *always*?'],
        ['range and accuracy', 'Which expression was the most precise? Was there one mistake that kept coming back?'],
        ['time', 'Did the speaker keep going for about two minutes and finish on the question?'],
      ] },
      { t: 'examples', items: [
        { s: '**By and large**, food is the custom that survives longest, **though by no means** unchanged.', n: 'Position with scope and exception.' },
        { s: 'My grandmother, **for instance**, still cooks for twelve when four people are coming.', n: 'An example from experience.' },
        { s: '**That said, it would be simplistic to say that** we are prisoners of our childhood.', n: 'Another view, weighed.' },
        { s: '**So, to come back to the question**, they stay with us, but we choose which ones to keep.', n: 'Ending on the question.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Two long turns', md: 'The student gives the long turn on card A for two minutes while you time it, and you answer the partner’s question yourself. Give feedback using the areas on board page 4, with one example of what they said for each. Then the student gives a second long turn on card B, aiming to improve the one area you chose. Finish with a short discussion in which you make two sweeping statements on purpose and the student challenges each one tactfully.' },
    small: { title: 'Speak, answer, observe', md: 'Students work in pairs, or in a three. In each pair one student gives the long turn on card A while the partner listens and then answers the partner’s question; then they swap with card B. In a three, the third student is the observer and uses the questions on board page 4 to give one strength and one suggestion to each speaker, quoting what they heard; rotate so that everyone speaks once and observes once. With two students, the listener gives the feedback after answering the question. End with a two-minute discussion of both cards for everyone.' },
  },
  homework: { book: 'u14:p2', md: 'Finish lesson 1 of unit 14 in the book if needed. Record yourself giving a two-minute long turn on the card you did not speak about in class, listen back and write down one generalisation you would now make more carefully. Then do lesson 2 of unit 14 (A sense of place).' },
};
