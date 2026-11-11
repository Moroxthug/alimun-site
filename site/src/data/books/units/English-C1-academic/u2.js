// English C1 for study and exams, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Stance and hedging',
  goal: 'Show exactly how certain you are and what you think of an idea, in the careful voice of academic writing.',
  art: 'teacup',
  tags: { skills: ['writing', 'vocabulary', 'reading'], topics: ['hedging', 'boosting', 'evaluative-language', 'academic-stance', 'discussion-section'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Hedging and boosting',
      about: 'Make claims more cautious or more certain, and choose the strength that the evidence allows.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Academic writers are careful about how strongly they make a claim. A claim that goes further than the evidence is called **overclaiming**, and readers notice it at once. **Hedging** makes a claim more cautious; **boosting** makes it stronger. Neither is better: the right choice depends on how good your evidence is.' },
          { t: 'table', caption: 'Ways to hedge a claim', explain: ['head', 'col0'], quiz: true, head: ['Type', 'Examples'], rows: [
            ['modal verbs', 'may, might, could'],
            ['verbs', 'appear to, seem to, tend to, suggest, indicate'],
            ['adverbs', 'possibly, probably, generally, arguably, largely'],
            ['adjectives and nouns', 'it is likely that, there is a possibility that, a tendency to'],
            ['limiting the claim', 'to some extent, in most cases, under certain conditions'],
            ['distancing', 'it would appear that, the evidence suggests that'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'Regular exercise **improves** memory.', n: 'A bare claim: it presents the effect as a fact for everyone.' },
            { s: 'Regular exercise **appears to improve** memory.', n: '*Appear to* shows that this is what the evidence seems to say, not a certain fact.' },
            { s: 'Regular exercise **may**, **in some cases**, improve memory.', n: 'Two hedges: a modal verb and a limit on the claim. Very cautious.' },
            { s: 'There is **little doubt that** regular exercise improves memory.', n: 'A booster: use it only when many studies agree.' },
            { s: 'These results **clearly demonstrate** a link between exercise and memory.', n: 'A strong booster. With one small study, this would be overclaiming.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not stack too many hedges: *it might possibly perhaps suggest* sounds as if you believe nothing. One or two well-chosen hedges are usually enough.' },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Make each claim more cautious. Use the word given.', items: [
            { q: 'The results prove that the method works.', cue: 'suggest', a: ['The results suggest that the method works.', 'The results suggest the method works.'], why: '*Suggest* is much weaker than *prove*: one study rarely proves anything.' },
            { q: 'Students who sleep more get better marks.', cue: 'tend', a: ['Students who sleep more tend to get better marks.'], why: '*Tend to* says this is generally true, not true of every student.' },
            { q: 'This is the main cause of the decline.', cue: 'likely', a: ['This is likely to be the main cause of the decline.', 'It is likely that this is the main cause of the decline.'], why: '*Be likely to* or *it is likely that* shows probability, not certainty.' },
            { q: 'Online reviews influence what customers buy.', cue: 'appear', a: ['Online reviews appear to influence what customers buy.', 'It would appear that online reviews influence what customers buy.'], why: '*Appear to* + base form presents the effect as what the evidence seems to show.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'odd', h: 'Find the odd one out.', items: [
            { o: ['undoubtedly', 'possibly', 'arguably', 'perhaps'], why: '*Undoubtedly* is a booster; the other three are hedges.' },
            { o: ['demonstrate', 'suggest', 'indicate', 'imply'], why: '*Demonstrate* presents a result as certain; the others are more cautious.' },
            { o: ['in all cases', 'to some extent', 'in most cases', 'under certain conditions'], why: '*In all cases* makes the claim absolute; the others limit it.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete each phrase with one word.', items: [
            { q: 'There is little ___ that smoking damages health.', a: ['doubt'], why: '*There is little doubt that* is a booster for very strong evidence.' },
            { q: 'It would ___ that the first group worked harder.', a: ['appear', 'seem'], why: '*It would appear that* is a polite, distancing hedge.' },
            { q: 'The policy was successful to some ___.', a: ['extent', 'degree'], why: '*To some extent* limits the claim: partly, not completely.' },
            { q: 'Older students ___ to ask more questions in class.', a: ['tend'], why: '*Tend to* + base form: this is generally true.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Evaluative language',
      about: 'Say what you think of a study or an argument with precise, formal words.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Your stance is not only about certainty. You also judge the work of others: is a study strong, useful, limited, or wrong? Academic English has a large vocabulary for this. It is usually calmer than everyday English: a weak study is *open to question*, not *rubbish*.' },
          { t: 'table', caption: 'Evaluating research', explain: ['head'], quiz: true, head: ['Positive', 'Negative'], rows: [
            ['a compelling case', 'a serious limitation'],
            ['a rigorous study', 'a flawed design'],
            ['a valuable contribution to', 'fails to account for'],
            ['a persuasive argument', 'overlooks the fact that'],
            ['an insightful analysis', 'is open to question'],
            ['convincing evidence', 'problematic in several respects'],
          ] },
        ],
        [
          { t: 'text', md: '**Comment adverbs** at the start of a sentence tell the reader how to read what follows. They are a short, elegant way to show your stance.' },
          { t: 'examples', items: [
            { s: '**Notably**, none of the participants were over sixty.', n: '*Notably*: this fact is important and the reader should notice it.' },
            { s: '**Crucially**, the effect disappeared when the test was repeated.', n: '*Crucially*: this point decides the argument.' },
            { s: '**Arguably**, the second explanation is more convincing.', n: '*Arguably* gives your opinion and admits that others may disagree.' },
            { s: '**Interestingly**, the youngest group performed best.', n: '*Interestingly* points to something unexpected or worth discussing.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Criticise the work, not the person: *the study fails to account for…* rather than *the author did not understand…*. This keeps your tone professional.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each phrase with its meaning.', pairs: [
            ['a compelling case', 'an argument that is very hard to reject'],
            ['a serious limitation', 'an important weakness'],
            ['fails to account for', 'does not explain'],
            ['overlooks the fact that', 'does not notice or consider'],
            ['is open to question', 'may not be true or correct'],
          ] },
          { t: 'ex', kind: 'wordform', h: 'Complete with the correct form of the word in capitals.', items: [
            { q: 'It is a ___ study, with a large sample and careful controls.', base: 'rigour', a: ['rigorous'], why: '*Rigour* (noun) becomes *rigorous* (adjective): careful and thorough.' },
            { q: 'The author makes a highly ___ argument for reform.', base: 'persuade', a: ['persuasive'], why: '*Persuade* becomes *persuasive*: able to make people agree.' },
            { q: 'The main ___ of the study is its small sample.', base: 'limit', a: ['limitation'], why: '*Limitation*: a weakness that restricts what a study can show.' },
            { q: 'The figures in the second table are ___ at best.', base: 'question', a: ['questionable'], why: '*Questionable*: possibly not true or correct.' },
            { q: 'I found the explanation in the final chapter ___.', base: 'convince', a: ['unconvincing'], why: 'A negative prefix and *-ing*: *unconvincing*, not good enough to believe.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which words go with the key word? Choose all that fit.', items: [
            { key: 'evidence', o: ['compelling', 'strong', 'limited', 'heavy', 'high'], a: [0, 1, 2], why: 'We say *compelling*, *strong* or *limited evidence*, not *heavy* or *high evidence*.' },
            { key: 'raise', o: ['concerns', 'questions', 'doubts', 'an experiment', 'a conclusion'], a: [0, 1, 2], why: 'We *raise concerns, questions* or *doubts*; we *carry out* an experiment and *draw* a conclusion.' },
            { key: 'contribution', o: ['make a', 'a valuable', 'a significant', 'do a', 'take a'], a: [0, 1, 2], why: 'We *make a valuable* or *significant contribution to* a field.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentence. Two words do not belong.', items: [
            { a: 'Arguably, the study overlooks an important factor.', extra: ['rubbish', 'totally'], why: 'A formal criticism with a hedge: *arguably* shows it is your view.' },
            { a: 'The authors make a compelling case for change.', extra: ['do', 'really'], why: 'The collocation is *make a case*, not *do a case*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Two discussion sections',
      about: 'Compare an overconfident discussion with a carefully hedged one and see what makes the difference.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Two students carried out the same small study. They asked 60 students at one university to work for an hour either in a room with plants or in a room without plants, and then gave them a short concentration test. The group with plants scored slightly higher. Read the two discussion sections they wrote.' },
          { t: 'reading', title: 'Version A', md: 'This study proves that plants improve concentration. Students in the room with plants scored higher on the test, which shows that every university should put plants in its study spaces. The reason is obvious: plants make people feel calm, and calm people always concentrate better.\n\nSome might say that the sample was small, but the difference between the groups was clear. These findings will undoubtedly change the way universities design their libraries.' },
        ],
        [
          { t: 'reading', title: 'Version B', md: 'The results suggest that the presence of plants may have a small positive effect on concentration. Students in the room with plants scored slightly higher on the test, which is broadly consistent with earlier research on natural environments. One possible explanation is that plants reduce stress, although this study did not measure stress directly.\n\nThese findings should, however, be interpreted with caution. The sample was relatively small and came from a single university, and the test measured concentration over only one hour. Further research with larger and more varied groups would be needed before firm recommendations could be made about the design of study spaces.' },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'Version A presents a single small study as proof.', a: 't', why: '*This study proves that…* is overclaiming from 60 students.' },
            { q: 'Version B says that the study measured stress.', a: 'f', why: '*This study did not measure stress directly.*' },
            { q: 'Version A answers the problem of the small sample convincingly.', a: 'f', why: 'It simply says *the difference was clear*, which does not answer the problem.' },
            { q: 'Version B links its findings to earlier research.', a: 't', why: '*Broadly consistent with earlier research on natural environments.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the word or phrase in Version A that claims too much.', items: [
            { s: 'This study [proves] that plants improve concentration.', why: 'One small study can suggest or indicate, but rarely *prove*.' },
            { s: 'Calm people [always] concentrate better.', why: '*Always* is an absolute claim that the study cannot support.' },
            { s: 'These findings will [undoubtedly] change the way universities design their libraries.', why: 'A strong booster for a prediction that the data cannot support.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Look at the language of Version B.', items: [
            { q: 'Why does Version B say “may have a small positive effect”?', o: ['to match the claim to the strength of the evidence', 'to show that the writer is not interested in the result', 'to make the text longer'], why: 'The difference was slight and the sample small, so a cautious claim is accurate.' },
            { q: '“These findings should be interpreted with caution.” This sentence…', o: ['introduces the limitations of the study', 'introduces the main finding', 'rejects earlier research'], why: 'It prepares the reader for the weaknesses that follow.' },
            { q: 'What does Version B recommend?', o: ['more research before firm recommendations', 'plants in every library', 'no plants in study spaces'], why: '*Further research… would be needed before firm recommendations could be made.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'Which sentence is the most cautious?', o: ['Diet may, in some cases, affect mood.', 'Diet affects mood.', 'Diet clearly affects mood.'], why: 'A modal verb and a limit on the claim make it the most cautious.' },
      { q: 'A single study of 40 people found a small effect. Which claim is suitable?', o: ['The findings indicate a possible effect.', 'The findings prove the effect.', 'There is no doubt about the effect.'], why: '*Indicate a possible effect* matches limited evidence.' },
      { q: '___, the effect disappeared when the test was repeated. (this point decides the argument)', o: ['Crucially', 'Interestingly', 'Admittedly'], why: '*Crucially* marks the deciding point.' },
      { q: 'Which criticism is the most professional?', o: ['The study fails to account for age.', 'The author clearly did not think about age.', 'The study is rubbish on age.'], why: 'It criticises the work calmly, not the person.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Make each claim more cautious. Use the word given.', items: [
      { q: 'Children who read at home do better at school.', cue: 'tend', a: ['Children who read at home tend to do better at school.'], why: '*Tend to* + base form: generally true.' },
      { q: 'The new law reduced crime.', cue: 'appears', a: ['The new law appears to have reduced crime.', 'It appears that the new law reduced crime.', 'It appears that the new law has reduced crime.'], why: 'For the past, *appear to have* + past participle.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'There is little ___ that the climate is changing.', a: ['doubt'], why: 'A booster for strong evidence.' },
      { q: 'The main ___ of the study is that it lasted only a week.', a: ['limitation', 'weakness'], why: 'A *limitation* restricts what the study can show.' },
      { q: 'The authors make a compelling ___ for reform.', a: ['case', 'argument'], why: '*Make a compelling case for* something.' },
    ] },
    { t: 'ex', kind: 'odd', h: 'Find the odd one out.', items: [
      { o: ['clearly', 'perhaps', 'possibly', 'probably'], why: '*Clearly* is a booster; the others are hedges.' },
      { o: ['insightful', 'flawed', 'problematic', 'questionable'], why: '*Insightful* is positive; the others are negative.' },
    ] },
  ],
};
