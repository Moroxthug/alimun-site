// English B1, class 27 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u6:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c27',
  focus: 'By the end of the class every student can talk about the news and social media with the words people really use: **headline**, **breaking news**, **a source**, **fake news**, **to post**, **to share**, **to comment on**, **to follow**. Students discuss how they get their news and how to check if a story is true. Accuracy point: *news* is uncountable and takes a singular verb.',
  tips: [
    '*News* is the most common error: *a news*, *the news are*. Correct it every time: *some news, a piece of news, the news is*.',
    'Prepositions with the internet are another frequent mistake: **on** the internet, **on** social media, **on** TV, **in** the newspaper.',
    '*Comment* needs **on**: *He commented on my post.* *Follow* and *share* need no preposition.',
    'The topic can become personal or political. Keep the discussion on habits (how, when, where people read news) and on checking sources, not on specific news stories.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Where did you read or hear the news this morning?* Write the answers with their prepositions (*on my phone, on the radio*).' },
    { min: 10, title: 'News words', md: 'Show board page 1. Go through the words. Students say which ones they use or do every day.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students complete the sentences and fix the mistakes.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: a matching task in the format of B1 Preliminary Reading part 2. Students match each person to the best news app.' },
    { min: 5, title: 'Discussion', md: 'Ask: *How do you know if a story is fake?* Each student gives one tip using the new words.' },
    { min: 5, title: 'Close', md: 'Each student says one piece of good news from their week. Set the homework.' },
  ],
  board: [
    { title: 'News and social media words', blocks: [
      { t: 'table', caption: 'Words people really use', explain: ['head', 'col1'], head: ['Word', 'Meaning'], rows: [
        ['a headline', 'the title of a news story'],
        ['breaking news', 'news about something that has just happened'],
        ['a source', 'where information comes from'],
        ['fake news', 'false stories made to look like real news'],
        ['to post', 'to put something on social media'],
        ['to share', 'to send someone else’s post to your followers'],
        ['to comment on', 'to write your opinion under a post'],
      ] },
      { t: 'tip', md: '*News* is uncountable: *some news, a piece of news, the news **is** good.* Never *a news* or *the news are*.' },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'bank', h: 'Complete the sentences with words from the box.', extra: ['follow'], items: [
        { q: 'I read the ___ but not the whole article.', a: 'headline', why: 'The title of a news story: *headline*.' },
        { q: 'Always check the ___ before you believe a story.', a: 'source', why: 'Where the information comes from: *source*.' },
        { q: 'She ___ a photo of her new flat last night.', a: 'posted', why: 'Put something on social media: *posted*.' },
        { q: 'Lots of people ___ the video with their friends.', a: 'shared', why: 'Sent someone else’s post on: *shared*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'I have [a news] for you.', a: ['some news'], why: '*news* is uncountable.' },
        { s: 'The news [are] bad today.', a: ['is'], why: 'Uncountable nouns take a singular verb.' },
        { s: 'I saw it [in] the internet.', a: ['on'], why: 'We say *on the internet*.' },
        { s: 'He [commented] my post.', a: ['commented on'], why: '*comment on* something.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 2', blocks: [
      { t: 'text', md: 'In the format of the B1 Preliminary exam, Reading part 2: three people want a news app. Choose the best app for each person.' },
      { t: 'reading', title: 'Three news apps', md: '**Daily Five**: just five short stories every morning at 7.00. No comments, no adverts.\n\n**World Now**: breaking news from around the world all day, with videos. Users can comment on every story.\n\n**Local Voice**: news from your own town only: events, roadworks, school news. Free for students.' },
      { t: 'ex', kind: 'choice', h: 'Which app is best for each person?', items: [
        { q: 'Kemal has very little time in the morning and hates reading comments.', o: ['Daily Five', 'World Now', 'Local Voice'], why: 'Short stories, no comments.' },
        { q: 'Aisha is a student and wants to know about events near her home.', o: ['Local Voice', 'Daily Five', 'World Now'], why: 'Town news, free for students.' },
        { q: 'Pedro wants to follow big stories as they happen and discuss them with others.', o: ['World Now', 'Local Voice', 'Daily Five'], why: 'Breaking news all day, and users can comment.' },
      ] },
      { t: 'tip', md: 'In Reading part 2 one detail can rule an option out: *no comments* is perfect for Kemal but wrong for Pedro. Check what each person **doesn’t** want, too.' },
    ] },
  ],
  activities: {
    one: { title: 'My news day', md: 'The student describes how they follow the news from morning to evening: which apps, which sources, what they share or comment on. Ask follow-up questions with the new words. Then show a short invented headline and ask the student how they would check if it is true.' },
    small: { title: 'Real or fake?', md: 'Write five short invented headlines in the chat, two of them obviously fake. In turns, students say whether each one is real or fake and why (*There is no source*, *The headline is too shocking*). The group agrees on three rules for spotting fake news.' },
    group: { title: 'Social media survey', md: 'Breakout rooms of three or four. Each room asks every member three questions: where they get their news, what they last shared, what they last commented on. A reporter writes the results in the chat with reported speech from last class (*Two of us said they never comment on posts*). Back together, compare the rooms.' },
  },
  homework: { book: 'u6:p3', md: 'Finish book lesson 3 of unit 6 (Headlines and posts), including the speaking task. Then write a short social media post (40 to 60 words) about something that happened this week, and a comment on it, using at least four words from the class.' },
};
