// English B2, unit 14, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of B2 First.
export const UNIT = {
  id: 'u14',
  title: 'Society and rights',
  goal: 'Talk about what people are allowed, made or encouraged to do, contrast ideas in a balanced way, discuss rules, rights and fairness, and write an essay for B2 First.',
  art: 'owl',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading', 'writing'], topics: ['verb-patterns', 'let-make-allow', 'contrast', 'concession', 'rights', 'rules', 'essay'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'They let us vote',
      about: 'Use verb + object + infinitive or -ing: let, make, allow, encourage, force, prevent someone from.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'When we talk about society, we often say who **controls** or **influences** what other people do. English has a group of verbs for this, and each one has its own **pattern**. The pattern is: **verb + person (object) + what they do**. The difficult part is the form of the second verb.\n\nThree verbs take the **base form** (infinitive **without** *to*): **make, let** and **help** (help can also take *to*).\n\n*The law **makes** shops **close** at 10 p.m.* (They have no choice.)\n*Our school **lets** students **use** phones at lunch.* (It gives permission.)\n*Volunteers **help** people **(to) fill in** the forms.*\n\nMany others take **to + infinitive**: **allow, permit, encourage, force, require, persuade, ask, tell, warn, advise, expect**.\n\n*The new rules **allow** parents **to work** from home.*\n*The campaign **encouraged** young people **to vote**.*' },
          { t: 'table', caption: 'The patterns', explain: ['head', 'col2'], head: ['Pattern', 'Example', 'Meaning'], rows: [
            ['make + object + base form', 'They made us wait.', 'force, no choice'],
            ['let + object + base form', 'They let us leave early.', 'give permission'],
            ['allow + object + to + infinitive', 'They allowed us to leave early.', 'give permission (more formal)'],
            ['encourage + object + to + infinitive', 'She encouraged me to apply.', 'give support or advice'],
            ['force + object + to + infinitive', 'The storm forced them to stay.', 'make someone do something'],
            ['prevent / stop + object + from + -ing', 'The fence prevents children from falling.', 'make something not happen'],
          ] },
        ],
        [
          { t: 'text', md: 'Be careful with the **passive**. **Let** has no passive, so use **be allowed to** instead. **Make** in the passive needs **to**: *They made us work* becomes *We **were made to** work.*\n\n*Visitors **are not allowed to** take photos.* (not *are not let*)\n*The workers **were made to** sign a new contract.*\n\nWith **prevent, stop, discourage** and **ban**, the second verb is **from + -ing**: *The rule **prevents** companies **from selling** our data.* *Smokers are **banned from smoking** inside.*' },
          { t: 'examples', items: [
            { s: 'Our manager **lets** us **choose** our own hours.', n: '*let* + object + base form.' },
            { s: 'We **are allowed to** choose our own hours.', n: 'The passive of *let* is *be allowed to*.' },
            { s: 'The new law **will force** landlords **to repair** old buildings.', n: '*force* + object + *to* + infinitive.' },
            { s: 'They **were made to** pay a fine.', n: 'Passive *make* needs *to*.' },
            { s: 'Nothing **can stop** them **from protesting**.', n: '*stop* + object + *from* + *-ing*.' },
            { s: 'Teachers should **encourage** students **to ask** questions.', n: '*encourage* + object + *to* + infinitive.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['They let us to leave.', 'They let us leave.', '*let* + object + base form, with no *to*.'],
            ['They made me to sign.', 'They made me sign.', '*make* (active) + base form.'],
            ['We were let to vote.', 'We were allowed to vote.', '*let* has no passive.'],
            ['The law prevents them to sell it.', 'The law prevents them from selling it.', '*prevent* + object + *from* + *-ing*.'],
            ['She encouraged me apply.', 'She encouraged me to apply.', '*encourage* + object + *to* + infinitive.'],
          ] },
          { t: 'dialogue', title: 'A debate in class', lines: [
            { who: 'Teacher', s: 'Should cities ban cars from the centre?' },
            { who: 'Ellie', s: 'Yes. It would encourage people to walk and cycle more.' },
            { who: 'Joe', s: 'But you can’t make everyone give up their car. Some people need it for work.' },
            { who: 'Ellie', s: 'They could be allowed to drive in at night, for deliveries.' },
            { who: 'Joe', s: 'Maybe. As long as the rules don’t prevent small shops from getting their goods.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
            { q: 'The new system lets citizens ___ online.', o: ['vote', 'to vote', 'voting'], why: '*let* + object + base form.' },
            { q: 'Employees are not allowed ___ personal calls.', o: ['to make', 'make', 'making'], why: '*be allowed* + *to* + infinitive.' },
            { q: 'The rain prevented the march from ___.', o: ['taking place', 'take place', 'to take place'], why: '*prevent* + object + *from* + *-ing*.' },
            { q: 'We were made ___ for three hours at the border.', o: ['to wait', 'wait', 'waiting'], why: 'Passive *make* needs *to*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'My parents never let me [to stay] out late.', a: ['stay'], why: '*let* + object + base form.' },
            { s: 'The fine is meant to stop people [to drop] litter.', a: ['from dropping', 'dropping'], why: '*stop* + object + *from* + *-ing*.' },
            { s: 'Children [are not let] to play here.', a: ['are not allowed', 'aren’t allowed'], why: 'Use *be allowed to*: *let* has no passive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the B2 First exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Use the word given.', items: [
            { q: 'The rules don’t let visitors feed the animals.', cue: 'allowed', a: ['Visitors are not allowed to feed the animals.', 'Visitors aren’t allowed to feed the animals.'], why: 'Passive permission: *be allowed to*.' },
            { q: 'The heavy snow meant we couldn’t leave the village.', cue: 'prevented', a: ['The heavy snow prevented us from leaving the village.'], why: '*prevent* + object + *from* + *-ing*.' },
            { q: 'My teacher said I should enter the competition, and that gave me confidence.', cue: 'encouraged', a: ['My teacher encouraged me to enter the competition.'], why: '*encourage* + object + *to* + infinitive.' },
            { q: 'They forced us to sign the form.', cue: 'made', a: ['We were made to sign the form.', 'They made us sign the form.'], why: '*make* + object + base form, or passive *were made to*.' },
          ] },
          { t: 'tip', art: 'owl', md: '**Part 4** often tests **verb patterns** and **passives**. When you see a key word like *allowed, prevented* or *made*, ask yourself two questions: is the sentence **active or passive**, and does this verb take a **base form, to + infinitive, or from + -ing**?' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'The new law will force companies to pay fairly.' },
            { a: 'We aren’t allowed to take photos inside.' },
            { a: 'Nothing should prevent people from voting.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Even so, it isn’t fair',
      about: 'Contrast ideas and make concessions with whereas, while, nevertheless, even so and despite the fact that.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'At B1 you learnt **although, however** and **despite**. At B2 you need a wider range, because discussions and essays are all about **balancing** two sides.\n\nThere are two different jobs. **Contrast** puts two different facts side by side: *Ana prefers the city, **whereas** her brother loves the countryside.* **Concession** admits one point but says the other is still true: *The plan is expensive. **Even so**, it is worth doing.*\n\n**Whereas** and **while** join two clauses in **one sentence** to show a simple contrast. They often go in the middle, after a comma.\n\n*Some people see social media as a danger, **whereas** others see it as a tool.*\n***While** I understand the problem, I don’t agree with the solution.* (Here *while* means *although*.)' },
          { t: 'table', caption: 'Linkers for contrast and concession', explain: ['head', 'col0', 'col2'], head: ['Where it goes', 'Linker', 'Example'], rows: [
            ['Joins two clauses in one sentence', 'whereas, while, although, even though', 'Rents are rising, whereas wages are not.'],
            ['Starts a new sentence, followed by a comma', 'However, Nevertheless, Even so, On the other hand', 'The law is strict. Nevertheless, it is often ignored.'],
            ['Followed by a noun or -ing', 'despite, in spite of', 'Despite the cost, they went ahead.'],
            ['Followed by a full clause', 'despite the fact that, in spite of the fact that', 'Despite the fact that it was cold, we marched.'],
          ] },
        ],
        [
          { t: 'text', md: '**Nevertheless** and **even so** are stronger and more formal than *however*. They say: *this is true, but the other point still wins*. **Nevertheless** suits essays; **even so** is common in speech and writing.\n\nThe most common B2 problem is **despite**. *Despite* must be followed by a **noun**, a **pronoun** or **-ing**, never directly by a subject and verb. If you want a full clause, add **the fact that**.\n\n*Despite **the rain**, the festival went ahead.*\n*Despite **being** tired, she finished the report.*\n*Despite **the fact that** it was raining, the festival went ahead.*' },
          { t: 'examples', items: [
            { s: 'The city is safe, **whereas** ten years ago it was not.', n: 'A simple contrast between two facts.' },
            { s: '**While** I see your point, I can’t agree.', n: '*While* = *although* at the start of a sentence.' },
            { s: 'The fine is small. **Nevertheless**, most people pay it.', n: 'A formal concession, at the start of a sentence.' },
            { s: 'It won’t solve everything. **Even so**, it’s a step forward.', n: 'A concession, common in speech.' },
            { s: '**Despite the fact that** the law changed, little has improved.', n: '*Despite the fact that* + full clause.' },
            { s: '**In spite of** the protests, the plan went ahead.', n: '*In spite of* + noun.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Despite it was late, we stayed.', 'Despite the fact that it was late, we stayed.', '*Despite* + noun or *-ing*; for a clause, add *the fact that*.'],
            ['Despite of the cost, they agreed.', 'Despite the cost, they agreed.', 'No *of* after *despite* (but *in spite of*).'],
            ['However the plan is good, it is expensive.', 'Although the plan is good, it is expensive.', '*However* does not join two clauses like *although*.'],
            ['It is cheap. Nevertheless it is popular.', 'It is cheap. Nevertheless, it is popular.', 'Put a comma after *Nevertheless* at the start.'],
          ] },
          { t: 'reading', title: 'Should voting be compulsory?', md: 'In a few countries, such as Australia and Belgium, citizens are required by law to vote. Supporters argue that this makes elections fairer, since governments are chosen by the whole population, whereas in other countries often only half the people vote.\n\nCritics, on the other hand, say that forcing people to vote does not make them better informed. While they accept that high turnout is good, they believe that a vote should be a free choice, not a duty with a fine.\n\nDespite the fact that the debate is decades old, it has not been settled. Even so, most people agree on one thing: when more citizens take part, democracy is stronger.' },
          { t: 'ex', kind: 'tf', h: 'Read the text. Are the sentences true, false or not given?', ng: true, items: [
            { q: 'Voting is compulsory in Belgium.', a: 't', why: '*In a few countries, such as Australia and Belgium, citizens are required by law to vote.*' },
            { q: 'Critics think compulsory voting makes people better informed.', a: 'f', why: 'They say *forcing people to vote does not make them better informed*.' },
            { q: 'The fine for not voting is very high in Australia.', a: 'ng', why: 'The text mentions a fine but not how high it is.' },
            { q: 'The debate has now been settled.', a: 'f', why: '*it has not been settled*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the correct linker.', items: [
            { q: 'Some cities have free public transport, ___ others are raising prices.', o: ['whereas', 'despite', 'nevertheless'], why: '*Whereas* joins two contrasting clauses.' },
            { q: '___ the strike, most trains were running.', o: ['Despite', 'Although', 'Whereas'], why: '*Despite* + noun (*the strike*).' },
            { q: 'The rules are clear. ___, many people break them.', o: ['Nevertheless', 'Whereas', 'Despite'], why: 'A new sentence + comma: *Nevertheless*.' },
            { q: '___ I understand why they protested, I don’t support violence.', o: ['While', 'Despite', 'However'], why: '*While* = *although*, joining two clauses.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word given.', items: [
            { q: 'Although it was expensive, the project was a success.', cue: 'despite', a: ['Despite the fact that it was expensive, the project was a success.', 'Despite being expensive, the project was a success.', 'Despite the cost, the project was a success.'], why: '*Despite* + *the fact that* + clause, or + *-ing*, or + noun.' },
            { q: 'The plan has problems. But it is still the best option.', cue: 'Even', a: ['The plan has problems. Even so, it is still the best option.'], why: '*Even so* starts the new sentence, with a comma.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the B2 First exam (Reading and Use of English Part 2): write one word in each gap.', items: [
            { q: 'In ___ of the bad weather, thousands of people joined the march.', a: ['spite'], why: 'The fixed phrase is *in spite of*.' },
            { q: 'Despite the fact ___ the law has changed, many workers are still unpaid.', a: ['that'], why: '*Despite the fact that* + clause.' },
            { q: 'The proposal was popular. ___ so, the council rejected it.', a: ['Even'], why: '*Even so* = in spite of that.' },
            { q: 'Older voters support the plan, ___ younger voters are against it.', a: ['whereas', 'while'], why: 'A linker joining two contrasting clauses.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 2** (open cloze), there are no options: you write **one word** in each gap. The missing words are often **grammar words**: linkers, prepositions, articles, pronouns and parts of fixed phrases like *in spite **of*** or *the fact **that***. Spelling must be correct.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'While I see your point, I don’t agree.' },
            { a: 'Despite the fact that it’s expensive, it’s worth doing.' },
            { a: 'It won’t solve everything. Even so, it’s a start.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Fair or unfair?',
      about: 'Talk about rules, rights and fairness, and give a balanced opinion in a discussion.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Discussions about society need a set of precise words. A **right** is something everyone should be free to have or do (*the right to education*). A **duty** or **responsibility** is something you must do. A **law** is made by a government; a **rule** can be made by a school, a club or a company. If you **break** a law, you may have to **pay a fine** or **face a penalty**.\n\nWe talk about **equality** (everyone treated the same), **discrimination** (treating people unfairly because of who they are), **freedom of speech**, and **human rights**. A situation can be **fair** or **unfair**, **just** or **unjust**, and people can **campaign for** change, **protest against** a decision, or **stand up for** their rights.' },
          { t: 'table', caption: 'Collocations for rights and rules', explain: ['head', 'col1'], head: ['Collocation', 'Meaning'], rows: [
            ['have the right to', 'be free to do or have something by law'],
            ['break / obey the law', 'not follow / follow the law'],
            ['pay a fine', 'pay money as a punishment'],
            ['face discrimination', 'be treated unfairly because of who you are'],
            ['campaign for change', 'work in an organised way to change something'],
            ['stand up for your rights', 'defend your rights'],
            ['take responsibility for', 'accept that something is your duty or fault'],
            ['raise awareness of', 'help people to know more about a problem'],
          ] },
        ],
        [
          { t: 'text', md: 'In a discussion (and in **B2 First Speaking Part 4**), you are expected to give **developed opinions**: an opinion, a reason, and often an example or the other side. Short answers like *Yes, I agree* lose marks.\n\nA useful shape is: **opinion** → **reason** → **example** → **other side** → **conclusion**.\n\n*I think everyone **should have the right to** free healthcare, because health shouldn’t depend on money. In my country, for example, visits to the doctor are free. **Having said that**, someone has to pay for it, so taxes are higher. **On balance**, I still think it’s fair.*' },
          { t: 'examples', items: [
            { s: '**I’d argue that** education is a basic right.', n: 'A clear, slightly formal way to give an opinion.' },
            { s: '**That’s a fair point, but** what about people who can’t afford it?', n: 'Accepting another view, then adding yours.' },
            { s: '**Having said that**, the rule isn’t perfect.', n: 'Introduces the other side.' },
            { s: '**On balance**, I think the law is fair.', n: 'A conclusion after weighing both sides.' },
            { s: '**It depends on** how the money is spent.', n: 'A careful, nuanced answer.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['They have the right of vote.', 'They have the right to vote.', '*The right to* + verb or noun.'],
            ['He did a fine for speeding.', 'He paid a fine for speeding.', 'The collocation is *pay a fine*.'],
            ['Women suffered discriminations.', 'Women faced discrimination.', '*Discrimination* is uncountable; we *face* it.'],
            ['I agree. (end of answer)', 'I agree, because… For example…', 'In discussions, always develop your answer.'],
          ] },
          { t: 'dialogue', title: 'Speaking Part 4 practice', lines: [
            { who: 'Examiner', s: 'Do you think young people should be allowed to vote at sixteen?' },
            { who: 'Marcus', s: 'I’d argue that they should. At sixteen many people work and pay taxes, so they should have a say.' },
            { who: 'Laura', s: 'That’s a fair point, but some sixteen-year-olds aren’t very interested in politics.' },
            { who: 'Marcus', s: 'True. Having said that, voting might encourage them to take more interest.' },
            { who: 'Laura', s: 'On balance, I think it depends on how well schools teach politics.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the collocations with one word.', items: [
            { q: 'Every child has the ___ to an education.', a: ['right'], why: '*the right to* + noun.' },
            { q: 'If you park here, you’ll have to ___ a fine.', a: ['pay'], why: '*pay a fine*' },
            { q: 'The charity works to ___ awareness of homelessness.', a: ['raise'], why: '*raise awareness of*' },
            { q: 'Many workers still ___ discrimination because of their age.', a: ['face', 'experience'], why: '*face discrimination*' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Is it an opinion, the other side, or a conclusion?', groups: ['Opinion', 'Other side', 'Conclusion'], explain: ['groups'], items: [
            { s: 'I’d argue that it’s unfair.', g: 0, why: 'States your view.' },
            { s: 'Having said that, it costs a lot.', g: 1, why: 'Introduces the opposite point.' },
            { s: 'On balance, I support the law.', g: 2, why: 'Weighs both sides and decides.' },
            { s: 'That’s a fair point, but…', g: 1, why: 'Accepts another view before replying.' },
            { s: 'All things considered, it’s worth trying.', g: 2, why: 'A final judgement.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam (Speaking Part 4): the examiner asks, “Is it ever right to break a law?” Choose the best answer.', items: [
            { q: 'Which answer would get the best marks?', o: ['In general no, because laws protect us. Having said that, history shows that some unjust laws were changed only because people broke them, like laws against women voting.', 'No.', 'Yes, I think so, I don’t know, maybe.'], why: 'It gives an opinion, a reason, the other side and an example.' },
            { q: 'Your partner says, “I think rules for teenagers are too strict.” What is the best reply?', o: ['That’s a fair point, but some rules keep them safe, don’t they?', 'Next question, please.', 'Teenagers are teenagers.'], why: 'It reacts to the partner, adds a view and invites a reply.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Speaking Part 4** the examiner asks you and your partner deeper questions about the topic of Part 3. You score higher if you **develop** your answers and **interact**: agree or disagree with your partner, ask *What do you think?*, and build on their ideas.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'Everyone should have the right to education.' },
            { a: 'That’s a fair point, but it depends on the situation.' },
            { a: 'On balance, I think the law is fair.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Writing an essay',
      about: 'Write the B2 First essay (Writing Part 1): answer the question, use both notes and your own idea, and reach a conclusion.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: '**Writing Part 1** of B2 First is always an **essay**, and you must do it. You write **140–190 words** for your teacher, answering a question. The task gives you **two notes** to write about, and asks you to add a **third idea of your own**.\n\nAn essay is **formal** and **balanced**: no contractions (*do not*, not *don’t*), no slang, no very personal stories. You discuss the question, look at more than one side, and give **your opinion in the conclusion**.\n\nThe question is usually *Do you agree?* or *Which is more important?* Read it carefully and answer **that** question in the conclusion, not a different one.' },
          { t: 'table', caption: 'A plan for a B2 First essay', explain: ['head', 'col0', 'col1'], head: ['Paragraph', 'What to write', 'Useful language'], rows: [
            ['Introduction', 'Introduce the topic in your own words; say why it matters', 'Nowadays, many people believe that…'],
            ['First point', 'Note 1, with a reason and an example', 'Firstly, … For example, …'],
            ['Second point', 'Note 2, often the other side', 'On the other hand, … Despite the fact that…'],
            ['Third point', 'Your own idea', 'Another important point is that…'],
            ['Conclusion', 'Answer the question with your opinion', 'In conclusion, I believe that… / On balance, …'],
          ] },
        ],
        [
          { t: 'reading', title: 'Task and model essay', md: 'Task: In your English class you have been talking about public spaces. Your teacher asks you to write an essay. Should cities ban cars from their centres? Notes: write about pollution, local shops and an idea of your own.\n\nNowadays, many cities are considering banning cars from their centres. While this may sound extreme, it is an idea that deserves serious attention.\n\nFirstly, fewer cars would mean cleaner air. Traffic is one of the main causes of pollution in cities, and a ban would encourage people to walk, cycle or use public transport, which would also improve their health.\n\nOn the other hand, local shops might suffer. Some customers would be prevented from bringing home large items, and deliveries could become more difficult. Nevertheless, several European cities have shown that shops can benefit from busier, calmer streets.\n\nAnother important point is safety. Without cars, streets would be far safer for children and older people.\n\nIn conclusion, despite the problems for some businesses, I believe that banning cars from city centres would make cities healthier and more pleasant places to live.' },
          { t: 'ex', kind: 'choice', h: 'Read the model essay. Choose the correct answer.', items: [
            { q: 'What is the writer’s own idea (the third point)?', o: ['Safety', 'Pollution', 'Local shops'], why: '*Another important point is safety.*' },
            { q: 'Where does the writer give a final opinion?', o: ['In the conclusion', 'In the first paragraph only', 'Nowhere'], why: 'The conclusion answers the question: *I believe that…*' },
            { q: 'Why is the style right for an essay?', o: ['It is formal and has no contractions.', 'It tells a personal story.', 'It uses lots of slang.'], why: 'Essays are formal: *do not*, not *don’t*.' },
          ] },
        ],
        [
          { t: 'text', md: 'The examiner gives marks for **four areas**. Knowing them helps you to plan.\n\n**Content**: did you answer the question and write about **both notes and your own idea**? Missing a point loses marks.\n\n**Communicative achievement**: is it a real **essay**, formal and clear, that a teacher would be happy to read?\n\n**Organisation**: are there **clear paragraphs** with linking words (*firstly, on the other hand, nevertheless, in conclusion*)?\n\n**Language**: do you use a **range** of B2 grammar and vocabulary correctly, such as the verb patterns and linkers from this unit?' },
          { t: 'table', caption: 'Common mistakes in essays', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Cars are bad. I hate them.', 'Cars cause serious pollution in cities.', 'Use a formal, balanced tone.'],
            ['I don’t think it’s a good idea.', 'I do not think it is a good idea.', 'No contractions in an essay.'],
            ['(only two points)', 'Note 1, note 2 and your own idea', 'Content: all three points are required.'],
            ['In conclusion, there are good and bad points.', 'In conclusion, I believe that…', 'Answer the question with a clear opinion.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order to make essay sentences.', items: [
            { a: 'On the other hand, local shops might suffer.', why: 'Introduces the other side.' },
            { a: 'In conclusion, I believe that the ban is a good idea.', why: 'A conclusion that answers the question.' },
            { a: 'Another important point is that streets would be safer.', why: 'Introduces your own idea.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Make these sentences right for a formal essay.', items: [
            { s: 'Lots of people [don’t] use public transport.', a: ['do not'], why: 'No contractions in an essay.' },
            { s: 'This would [let] more people to cycle.', a: ['allow', 'encourage'], why: '*let* + base form; with *to*, use *allow* or *encourage*.' },
            { s: '[Despite] the shops are worried, the plan is popular.', a: ['Although', 'Even though', 'While'], why: '*Despite* cannot be followed by a clause.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam (Writing Part 1): read the task and choose the best answer to each question.', items: [
            { q: 'Task: “Is it better to live in a big city or a small town? Notes: write about jobs, the cost of living and an idea of your own.” Which plan is complete?', o: ['Jobs, cost of living, and an idea of your own such as free time, then a conclusion with your opinion.', 'Jobs and cost of living, then a conclusion.', 'A story about your home town.'], why: 'Both notes and your own idea are required.' },
            { q: 'Which is the best conclusion?', o: ['In conclusion, although cities offer more jobs, I believe that a small town gives a better quality of life.', 'In conclusion, there are many things to think about.', 'Anyway, that’s what I think!'], why: 'It answers the question with a balanced, clear opinion.' },
            { q: 'Which opening is best?', o: ['Nowadays, more and more people are moving from small towns to big cities.', 'Hi! Let me tell you about my town.', 'Big cities are the best and small towns are boring.'], why: 'A formal introduction that presents the topic.' },
          ] },
          { t: 'tip', art: 'owl', md: 'You have **80 minutes** for the whole Writing paper: about **40 minutes per task**. Use **5 minutes to plan** your paragraphs, **30 to write**, and **5 to check** for missing points, contractions and grammar mistakes. Count roughly: **140–190 words**.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these essay sentences after the tutor.', tutor: 'mei', items: [
            { a: 'Nowadays, many cities are considering this idea.' },
            { a: 'On the other hand, local businesses might suffer.' },
            { a: 'In conclusion, I believe the benefits are greater.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
      { q: 'Our teacher lets us ___ dictionaries in tests.', o: ['use', 'to use', 'using'], why: '*let* + object + base form.' },
      { q: 'Visitors are not allowed ___ the stage.', o: ['to enter', 'enter', 'entering'], why: '*be allowed to* + infinitive.' },
      { q: 'The new barrier stops cars from ___ the square.', o: ['entering', 'enter', 'to enter'], why: '*stop* + object + *from* + *-ing*.' },
      { q: '___ the cold, hundreds of people came.', o: ['Despite', 'Although', 'Whereas'], why: '*Despite* + noun.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning. Use the word given.', items: [
      { q: 'They don’t let you smoke inside the station.', cue: 'allowed', a: ['You are not allowed to smoke inside the station.', 'You aren’t allowed to smoke inside the station.'], why: 'Passive permission: *be allowed to*.' },
      { q: 'Although it was raining, the march went ahead.', cue: 'despite', a: ['Despite the fact that it was raining, the march went ahead.', 'Despite the rain, the march went ahead.'], why: '*Despite* + noun, or *the fact that* + clause.' },
      { q: 'The storm made it impossible for the boats to leave.', cue: 'prevented', a: ['The storm prevented the boats from leaving.'], why: '*prevent* + object + *from* + *-ing*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'In ___ of the protests, the law was passed.', a: ['spite'], why: '*in spite of*' },
      { q: 'Every citizen has the ___ to a fair trial.', a: ['right'], why: '*the right to*' },
      { q: 'The plan is costly. Even ___, it is the best option.', a: ['so'], why: '*Even so*' },
      { q: 'If you park there, you will have to ___ a fine.', a: ['pay'], why: '*pay a fine*' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'They made us [to wait] outside.', a: ['wait'], why: 'Active *make* + base form.' },
      { s: 'We [were let] to go home early.', a: ['were allowed'], why: '*let* has no passive.' },
      { s: 'He [did] a fine for parking there.', a: ['paid'], why: '*pay a fine*' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the best sentence for a B2 First essay.', items: [
      { q: '', o: ['On the other hand, some people may not be able to afford it.', 'But loads of people can’t pay for it, right?', 'Some people can’t pay. That’s bad.'], why: 'Formal, balanced and without contractions.' },
      { q: '', o: ['In conclusion, I believe that the advantages outweigh the disadvantages.', 'In conclusion, it’s good and bad.', 'So yeah, I think it’s fine.'], why: 'A formal conclusion with a clear opinion.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the marking areas with what they check.', pairs: [
      ['Content', 'both notes and your own idea are covered'],
      ['Communicative achievement', 'the style is right for an essay'],
      ['Organisation', 'clear paragraphs and linking'],
      ['Language', 'a range of correct grammar and vocabulary'],
    ] },
  ],
};
