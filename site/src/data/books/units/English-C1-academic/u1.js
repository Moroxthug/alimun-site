// English C1 for study and exams, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Critical reading',
  goal: 'Read academic texts critically: tell evidence from opinion, find hidden assumptions and work out what the writer really thinks.',
  art: 'owl',
  tags: { skills: ['reading', 'vocabulary', 'writing'], topics: ['critical-thinking', 'claims-and-evidence', 'assumptions', 'inference', 'writer-stance'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Claims, evidence and assumptions',
      about: 'Separate what a writer claims from the evidence they give, and find what they take for granted.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At university you are expected to do more than understand a text. You have to **evaluate** it: decide how far you believe it and why. Start by separating three things. A **claim** is what the writer wants you to accept. **Evidence** is what they offer to support it. An **assumption** is something the argument needs but the writer does not say, because they take it for granted.' },
          { t: 'table', caption: 'The parts of an argument', explain: ['head', 'col0', 'col1'], head: ['Part', 'What it is', 'Example'], rows: [
            ['claim', 'the point the writer wants you to accept', 'Online courses are as effective as classroom teaching.'],
            ['evidence', 'data, examples or sources that support the claim', 'In a trial with 400 students, both groups had similar exam scores.'],
            ['assumption', 'an unstated idea the argument depends on', 'Exam scores are a good measure of what students have learned.'],
            ['counterargument', 'a view against the claim, which the writer may answer', 'Online learners may drop out more often.'],
          ] },
          { t: 'tip', art: 'owl', md: 'To find an assumption, ask: *what must be true for this argument to work?* If you can question that hidden idea, you have found a weak point.' },
        ],
        [
          { t: 'text', md: 'Strong evidence is **relevant**, **sufficient** and **reliable**. Many weak arguments fail in the same few ways. Learn to name them: naming a problem precisely is part of academic writing too.' },
          { t: 'table', caption: 'Common weaknesses in arguments', explain: ['head', 'col0', 'col2'], head: ['Weakness', 'Example', 'The problem'], rows: [
            ['a sweeping generalisation', 'Students today cannot concentrate.', 'It is true of some students, not all.'],
            ['correlation taken as cause', 'Cities with more cafés have higher incomes, so cafés make people richer.', 'Two things happen together, but one may not cause the other.'],
            ['anecdotal evidence', 'My cousin learned Chinese with an app, so apps work.', 'One personal story is not enough evidence.'],
            ['a false choice', 'Either we ban cars or the city will become unliveable.', 'There are other options between the two.'],
            ['an appeal to authority', 'A famous actor says the diet works.', 'The person is not an expert in this field.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Is each sentence a claim, evidence or an assumption behind the argument?', groups: ['claim', 'evidence', 'assumption'], explain: ['groups'], items: [
            { s: 'Four-day weeks make employees more productive.', g: 0, why: 'This is the point the writer wants us to accept.' },
            { s: 'Output per hour rose in most of the firms that took part in the trial.', g: 1, why: 'It reports a result that supports the claim.' },
            { s: 'Output per hour is a fair way to measure productivity.', g: 2, why: 'The argument needs this to be true, but it is not stated and could be questioned.' },
            { s: 'Homework should be abolished in primary schools.', g: 0, why: 'A position the writer argues for.' },
            { s: 'Several reviews found little link between homework and results for young children.', g: 1, why: 'It refers to research that supports the position.' },
            { s: 'Better results are the main purpose of homework.', g: 2, why: 'If homework has other purposes, such as building habits, the argument is weaker.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What is the main weakness of each argument?', items: [
            { q: 'Countries that drink more coffee have more Nobel prizes, so coffee makes people cleverer.', o: ['It treats a correlation as a cause.', 'It relies on a single personal story.', 'It offers only two options.'], why: 'The two facts may go together for another reason, such as national wealth.' },
            { q: 'I tried studying with music and my marks went up, so everyone should study with music.', o: ['It generalises from anecdotal evidence.', 'It appeals to an authority.', 'It treats a correlation as a cause.'], why: 'One person’s experience cannot show what works for everyone.' },
            { q: 'Either universities raise fees or they will have to close.', o: ['It presents a false choice.', 'It uses data that is out of date.', 'It is a sweeping generalisation about students.'], why: 'There are other options, such as cutting costs or finding other income.' },
            { q: 'Young people no longer read books.', o: ['It is a sweeping generalisation.', 'It confuses cause and effect.', 'It relies on an expert from another field.'], why: '*Young people* as a whole group: many of them clearly do read books.' },
          ] },
          { t: 'ex', kind: 'bank', h: 'Complete each sentence with a word from the box.', extra: ['convincing', 'objective'], items: [
            { q: 'The claim is ___: the author gives no evidence at all.', a: 'unsubstantiated', why: '*Unsubstantiated* means not supported by evidence.' },
            { q: 'The study is ___ because the sample was not chosen at random.', a: 'flawed', why: 'A *flawed* study has a weakness in its design.' },
            { q: 'A few personal stories are only ___ evidence.', a: 'anecdotal', why: '*Anecdotal* evidence comes from individual stories, not from systematic research.' },
            { q: 'The findings are ___: other teams have repeated them many times.', a: 'robust', why: '*Robust* findings stay the same when the research is repeated.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Inference and stance',
      about: 'Work out what a writer thinks from their choice of words, even when they do not say it directly.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Academic writers rarely say *I think this is wrong*. Instead, they show their **stance** through small choices: a reporting verb, an adverb, quotation marks around one word. Reading critically means noticing these signals and **inferring** the writer’s view.' },
          { t: 'examples', items: [
            { s: 'Supporters **claim** that the scheme has reduced traffic.', n: '*Claim* keeps a distance: the writer does not say the scheme really worked. *Show* or *demonstrate* would mean the writer accepts it.' },
            { s: 'The so-called **“efficiency savings”** led to longer waiting lists.', n: '*So-called* and quotation marks show that the writer does not accept the name.' },
            { s: 'The report **purports** to explain the fall in crime.', n: '*Purport to* means it says it does this, but the writer doubts that it does.' },
            { s: '**Admittedly**, the sample was small.', n: '*Admittedly* concedes a weakness, often in the writer’s own position, before going on.' },
            { s: 'It is **hardly surprising** that the results were disappointing.', n: 'The writer expected the failure, which suggests they were critical from the start.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Signals of stance', explain: ['head', 'col1'], quiz: true, head: ['Signal', 'What it usually suggests'], rows: [
            ['demonstrate, establish, show', 'The writer accepts the finding as true.'],
            ['claim, allege, purport', 'The writer keeps a distance or doubts it.'],
            ['so-called, “quotation marks”', 'The writer does not accept the name or term.'],
            ['admittedly, granted', 'The writer concedes a point against their own view.'],
            ['merely, simply, only', 'The writer thinks something is less important than others say.'],
            ['surprisingly, remarkably', 'The writer finds the result unexpected or impressive.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Inference is not guessing. Every inference must be based on something in the text. In true, false or not given tasks, *not given* is the right answer when the text gives no basis for the inference at all.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the writer imply?', items: [
            { q: 'The minister’s plan has been presented as a solution to the housing crisis.', o: ['The writer doubts that the plan is a real solution.', 'The writer believes the plan will solve the crisis.', 'The writer has no opinion about the plan.'], why: '*Has been presented as* shows how others describe it, not what the writer believes.' },
            { q: 'The new policy merely moves the problem to another neighbourhood.', o: ['The policy does not really solve the problem.', 'The policy solves the problem completely.', 'The policy creates a new and different problem.'], why: '*Merely* suggests that moving the problem is all the policy does.' },
            { q: 'Remarkably, the smallest school achieved the best results.', o: ['The writer did not expect this result.', 'The writer thinks the result is a mistake.', 'The writer expected small schools to do well.'], why: '*Remarkably* marks a result as surprising and worth noticing.' },
            { q: 'Granted, the trial lasted only six weeks. Even so, the effect was clear.', o: ['The writer accepts a weakness but still trusts the result.', 'The writer rejects the result because the trial was short.', 'The writer thinks six weeks is a long time.'], why: '*Granted* concedes the point; *even so* shows the writer still holds their view.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the word or words that show the writer’s doubt.', items: [
            { s: 'The company [alleges] that its products are safe for children.', why: '*Allege* reports a claim that has not been proved.' },
            { s: 'The [so-called] reforms changed very little in practice.', why: '*So-called* shows the writer does not think they deserve the name.' },
            { s: 'The book [purports] to be a complete history of the region.', why: '*Purports to be* suggests that it is not really complete.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the verb that matches the writer’s stance in brackets.', items: [
            { q: 'Recent experiments ___ that the drug lowers blood pressure. (the writer accepts this)', o: ['demonstrate', 'claim', 'allege'], why: '*Demonstrate* presents the finding as proved.' },
            { q: 'The advertisement ___ that the course guarantees a job. (the writer doubts this)', o: ['claims', 'shows', 'establishes'], why: '*Claims* keeps a distance from a statement the writer does not accept.' },
            { q: 'Her study ___ a clear link between sleep and memory. (the writer accepts this)', o: ['establishes', 'purports', 'alleges'], why: '*Establish* means show that something is definitely true.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Should the lecture survive?',
      about: 'Read an opinion article and a critical response to it, and judge which argument is stronger.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'It is time to retire the lecture', md: 'Every autumn, hundreds of first-year students file into a lecture theatre, sit in silence for an hour and leave with a few pages of notes they will barely read again. The lecture is the oldest teaching method in the university, and it is long past its best.\n\nThe evidence is clear. In my own department, attendance at lectures has fallen steadily for a decade, while the number of students watching recordings has risen. Students are voting with their feet. Moreover, a well-known review of active learning found that students in interactive classes were less likely to fail than those in traditional lectures.\n\nDefenders of the lecture argue that it is an efficient way to teach large groups. But efficiency for the institution is not the same as learning for the student. If we are serious about education, we must choose: either we keep a method designed for a world without books, or we give students the active, discussion-based teaching they deserve.\n\nUniversities that have already abandoned lectures report happier students. There is no reason why every university should not follow them.' },
        ],
        [
          { t: 'reading', title: 'A response: the lecture is not the problem', md: 'The previous article raises a fair question, but its answer rests on weaker ground than it appears. Falling attendance is not necessarily evidence that lectures fail; it may simply reflect the fact that recordings are now available, or that many students work part-time. Attendance measures convenience, not learning.\n\nThe review of active learning is more persuasive, and its findings deserve to be taken seriously. Yet it compared lectures with interactive classes, not with having no lectures at all. Many of the most effective courses combine the two: a short explanation followed by problems, questions and discussion.\n\nThe article also presents a false choice. Universities need not choose between silent lectures and seminars alone; the more useful question is how to make large-group teaching more active. Finally, the claim that students are happier where lectures have been abandoned is not supported by any figures, and happiness is, in any case, not the same as understanding.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The first writer uses evidence from their own department.', a: 't', why: '*In my own department, attendance at lectures has fallen steadily for a decade.*' },
            { q: 'The second writer rejects the review of active learning completely.', a: 'f', why: 'The review is *more persuasive* and *deserves to be taken seriously*; the writer only limits what it shows.' },
            { q: 'The second writer teaches at the same university as the first.', a: 'ng', why: 'Neither text says where the second writer works.' },
            { q: 'According to the response, attendance shows how convenient lectures are rather than how much students learn.', a: 't', why: '*Attendance measures convenience, not learning.*' },
            { q: 'The response suggests that lectures and active learning can be combined.', a: 't', why: '*Many of the most effective courses combine the two.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Think critically about the two texts.', items: [
            { q: 'Which assumption does the first article make about falling attendance?', o: ['that students stay away because lectures do not help them learn', 'that recordings are of poor quality', 'that students prefer large groups'], why: 'The writer takes *voting with their feet* to mean lectures fail, which the response questions.' },
            { q: '“Either we keep a method designed for a world without books, or we give students the active teaching they deserve.” What does the response call this?', o: ['a false choice', 'anecdotal evidence', 'an appeal to authority'], why: 'The response says universities *need not choose* between only these two options.' },
            { q: 'In the last paragraph of the article, the claim about happier students is…', o: ['unsupported, because no figures are given', 'supported by the review of active learning', 'a counterargument that the writer answers'], why: 'The response points out that *it is not supported by any figures*.' },
            { q: 'What is the tone of the response?', o: ['measured: it accepts some points and challenges others', 'hostile: it rejects every point', 'neutral: it gives no view of its own'], why: 'It calls the question *fair* and the review *persuasive*, but disagrees with the conclusion.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the phrase in which the response concedes a point.', items: [
            { s: 'The previous article [raises a fair question], but its answer rests on weaker ground than it appears.', why: 'The writer first accepts that the question is fair, then disagrees with the answer.' },
            { s: 'The review of active learning is [more persuasive], and its findings deserve to be taken seriously.', why: 'The writer accepts that this evidence is stronger than the attendance figures.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'Sales of umbrellas rise when more people catch colds, so umbrellas cause colds. What is wrong with this argument?', o: ['It treats a correlation as a cause.', 'It is based on one personal story.', 'It offers only two options.'], why: 'Both rise in wet weather; one does not cause the other.' },
      { q: 'The article ___ that the treatment is safe, but no trials have been published. (the writer doubts this)', o: ['claims', 'demonstrates', 'establishes'], why: '*Claims* shows the writer’s distance from the statement.' },
      { q: 'What does *admittedly* do in an argument?', o: ['It concedes a point before the writer continues.', 'It introduces the main claim.', 'It gives a new example.'], why: '*Admittedly* accepts a weakness or an opposing point.' },
      { q: 'Which is an assumption behind this argument? “We should ban phones in class, because students who use them get lower marks.”', o: ['The phones cause the lower marks.', 'Some students use phones in class.', 'Marks can be lower or higher.'], why: 'The argument needs the phones to be the cause, but it does not show this.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'A few personal stories are only ___ evidence.', a: ['anecdotal'], why: '*Anecdotal* evidence comes from individual stories.' },
      { q: 'The findings are ___: they have been repeated in several countries.', a: ['robust', 'reliable'], why: '*Robust* or *reliable* findings hold up when the research is repeated.' },
      { q: 'The ___-called reforms changed nothing.', a: ['so'], why: '*So-called* shows that the writer does not accept the name.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Does the writer accept the finding or keep a distance from it?', groups: ['accepts it', 'keeps a distance'], explain: ['groups'], items: [
      { s: 'The data demonstrate a clear trend.', g: 0, why: '*Demonstrate* presents it as proved.' },
      { s: 'The firm alleges that the figures are correct.', g: 1, why: '*Allege* reports a claim that has not been proved.' },
      { s: 'The study establishes a link between diet and sleep.', g: 0, why: '*Establish* means show it is definitely true.' },
      { s: 'The book purports to tell the whole story.', g: 1, why: '*Purport* suggests the writer doubts it.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the word that shows the writer thinks something is not very important.', items: [
      { s: 'The change is [merely] a new name for an old policy.', why: '*Merely* makes the change seem small.' },
    ] },
  ],
};
