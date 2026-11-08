// English B2, class 27 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u6:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c27',
  focus: 'By the end of the class every student can tell facts from opinions in a text and make careful, believable claims with hedging language: modal verbs (*may, might, could*), verbs (*seem, appear, tend to*), adverbs (*arguably, probably, generally*) and impersonal phrases (*It is often claimed that…*). Accuracy point: one hedge per claim is enough.',
  tips: [
    'Learners who discover hedging often stack it: *It seems that people may possibly tend to…*. Show that one hedge per claim sounds confident and careful; three sound unsure.',
    'Fact versus opinion is not always obvious. Give students a test: *Could someone check this?* If yes, it is presented as a fact; if not, it is an opinion, even if it sounds certain.',
    'Learners whose academic tradition favours strong statements may find hedging weak. Explain that in English writing it shows precision and respect for the reader, and examiners reward it.',
    'Useful for the B2 First essay and Speaking Part 3: *It could be argued that…*, *Generally speaking…*. Encourage one or two per answer.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write two sentences on the board: *Teenagers read less than before.* / *Teenagers today are lazy.* Ask which is a fact and which is an opinion, and how you could check the first one.' },
    { min: 12, title: 'Ways to hedge', md: 'Show board page 1. Hedge three strong claims together, using a different type of hedge each time.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students sort facts and opinions, then rewrite the overloaded sentences.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: a multiple-choice cloze in the format of B2 First Reading and Use of English Part 1. Read the text aloud once, then students choose alone and compare.' },
    { min: 5, title: 'Close', md: 'Each student makes one hedged claim about the future of the news. Set the homework.' },
  ],
  board: [
    { title: 'Ways to hedge', blocks: [
      { t: 'table', caption: 'Making a claim careful', explain: ['head', 'col0'], head: ['Type', 'Examples', 'In a sentence'], rows: [
        ['modal verbs', 'may, might, could, can', 'This may explain the change.'],
        ['verbs', 'seem, appear, tend to', 'Young readers tend to prefer video.'],
        ['adverbs', 'probably, arguably, generally, possibly', 'It is arguably the best paper in the country.'],
        ['impersonal phrases', 'it is often claimed that, it could be argued that', 'It could be argued that the news is too negative.'],
      ] },
      { t: 'text', md: 'A **fact** can be checked: *The paper sold two million copies.* An **opinion** cannot: *The paper is boring.* Writers often present opinions as facts; hedging is the honest way to make a claim you cannot prove.' },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'sort', h: 'Fact or opinion?', groups: ['fact', 'opinion'], explain: ['groups'], items: [
        { s: 'The museum opened in 1998.', g: 0, why: 'It can be checked.' },
        { s: 'The museum is the most exciting place in the city.', g: 1, why: 'A personal judgement.' },
        { s: 'Around half of adults read news on their phones.', g: 0, why: 'A number that can be checked.' },
        { s: 'Phones have ruined serious journalism.', g: 1, why: 'A judgement that cannot be proved.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Each sentence has too much hedging or the wrong pattern. Fix the part in brackets.', items: [
        { s: 'It seems that young people [tend to maybe prefer] video.', a: ['tend to prefer', 'prefer'], why: 'One hedge is enough.' },
        { s: '[People are believed that] the news is biased.', a: ['It is believed that', 'People believe that'], why: 'The pattern is *It is believed that…*' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 1', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 1: choose the word that best fits each gap.\n\n*It is often (1) ___ that people no longer trust the news. However, the evidence (2) ___ to be more complicated. Many people trust local news more than national news, and older readers (3) ___ to be more loyal to one source. It could (4) ___ be argued that people trust the news they choose.*' },
      { t: 'ex', kind: 'select', h: 'Choose the best word for each gap.', items: [
        { q: 'It is often ___ that people no longer trust the news.', o: ['claimed', 'told', 'spoken'], why: '*It is often claimed that* is the fixed impersonal pattern.' },
        { q: 'However, the evidence ___ to be more complicated.', o: ['appears', 'looks like', 'shows'], why: '*appear to be* is a hedging verb + *to*.' },
        { q: 'Older readers ___ to be more loyal to one source.', o: ['tend', 'use', 'like'], why: '*tend to* = usually do something.' },
        { q: 'It could ___ be argued that people trust the news they choose.', o: ['even', 'ever', 'also too'], why: '*even* adds emphasis to a stronger claim.' },
      ] },
      { t: 'tip', md: 'Hedging verbs often take a fixed pattern: *appear **to**, seem **to**, tend **to***. In Part 1, if the word after the gap is *to*, check which option can be followed by *to*.' },
    ] },
  ],
  activities: {
    one: { title: 'The fact checker', md: 'Read the student five strong claims from an imaginary advert or article (*This drink makes you smarter; Everyone loves our app*). For each, the student says if it is a fact or an opinion, how it could be checked, and rewrites it as a careful, hedged claim. Then the student gives you three claims to hedge.' },
    small: { title: 'Careful critics', md: 'Each student describes a film, book or app they know in four sentences: two facts and two hedged opinions. The others must identify the facts and the opinions and suggest a better hedge if one sounds too strong or too weak.' },
    group: { title: 'Headline rewrite', md: 'Breakout rooms of three get four sensational headlines (*Coffee cures everything!*, *Teenagers have stopped reading*). They rewrite each as a careful sentence for a serious newspaper, using a different type of hedge each time. Back together, the class votes on the most natural rewrite.' },
  },
  homework: { book: 'u6:p3', md: 'Finish book lesson 3 of unit 6 (Fact or opinion?), including the speaking task. Then find a short opinion article and underline three opinions presented as facts. Rewrite each as a careful, hedged claim.' },
};
