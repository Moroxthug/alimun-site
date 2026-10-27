// English C1 for study and exams, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
// Authors and studies cited in this unit are invented for practice.
export const UNIT = {
  id: 'u3',
  title: 'Synthesising sources',
  goal: 'Combine several sources into one argument of your own, instead of summarising them one by one.',
  art: 'parrot',
  tags: { skills: ['writing', 'reading', 'vocabulary'], topics: ['synthesis', 'comparing-sources', 'reporting-verbs', 'citation', 'authorial-voice'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Comparing sources',
      about: 'Show how sources agree, disagree or build on each other.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'A **summary** reports one source. A **synthesis** brings several sources together around an idea and shows how they relate. Weak essays describe sources one after another: *Ferreira says… Osei says… Hartmann says…*. Strong essays organise by idea and use the sources as evidence: *Two studies found…, although a later study suggests…*.' },
          { t: 'table', caption: 'Language for relating sources', explain: ['head', 'col0'], quiz: true, head: ['Relationship', 'Useful language'], rows: [
            ['agreement', 'Similarly, … / This is consistent with … / … confirms the findings of …'],
            ['contrast', 'In contrast, … / Whereas X argues …, Y … / … contradicts the findings of …'],
            ['development', '… builds on the work of … / … extends this idea to … / … refines …'],
            ['challenge', '… questions the assumption that … / … challenges this view'],
            ['a group of sources', 'Several studies have found … / There is broad agreement that …'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'Several studies have found that sleep affects memory (Novak, 2018; Adeyemi, 2020).', n: 'Two sources in one citation: they support the same point, so they are grouped.' },
            { s: '**Whereas** Novak (2018) attributes this to the length of sleep, Adeyemi (2020) **stresses** its quality.', n: '*Whereas* puts the two views side by side in one sentence.' },
            { s: 'Liang (2022) **builds on** this work by testing older adults.', n: '*Build on*: a later study develops an earlier one.' },
            { s: 'These findings are **consistent with** earlier research on children.', n: '*Be consistent with*: agrees with, without being exactly the same.' },
            { s: 'Liang’s results **call into question** the idea that more sleep is always better.', n: '*Call into question*: make people doubt an idea.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Before you write, make a grid: the sources down the side and the main ideas across the top. Then write one paragraph per idea, not one paragraph per source.' },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'How does the second source relate to the first?', groups: ['agreement', 'contrast', 'development'], explain: ['groups'], items: [
            { s: 'Kowalski’s findings confirm those of Moreau.', g: 0, why: '*Confirm*: the second study gives the same result.' },
            { s: 'This is consistent with what Moreau observed in France.', g: 0, why: '*Be consistent with* shows agreement.' },
            { s: 'Kowalski’s results contradict those of Moreau.', g: 1, why: '*Contradict*: the results point the other way.' },
            { s: 'Whereas Moreau focuses on cost, Kowalski emphasises time.', g: 1, why: '*Whereas* contrasts two different emphases.' },
            { s: 'Kowalski extends Moreau’s model to rural areas.', g: 2, why: '*Extend… to*: the idea is applied in a new context.' },
            { s: 'Kowalski builds on Moreau’s earlier survey.', g: 2, why: '*Build on*: the later work develops the earlier one.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
            { q: 'These results are consistent ___ earlier studies.', a: ['with'], why: '*Consistent with*: in agreement with.' },
            { q: 'Diaz builds ___ the work of earlier researchers.', a: ['on', 'upon'], why: '*Build on* or *build upon*: develop further.' },
            { q: 'There is broad ___ that early education matters.', a: ['agreement', 'consensus'], why: '*Broad agreement* or *consensus*: most sources say the same.' },
            { q: 'The new data call ___ question the original theory.', a: ['into'], why: '*Call into question*: make people doubt something.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Several studies have reached similar conclusions.', why: 'A sentence that groups sources by idea.' },
            { a: 'In contrast, Ito found no significant effect.', why: '*In contrast* introduces a source that disagrees.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Bringing sources into your argument',
      about: 'Choose reporting verbs that show your view of a source, and keep your own voice clear.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'The reporting verb you choose tells the reader what **you** think of the source. *Ito demonstrates that…* means you accept it. *Ito claims that…* keeps a distance. *Ito questions…* shows Ito disagrees with someone else. Learn the patterns too: many of these verbs need a particular preposition.' },
          { t: 'table', caption: 'Reporting verbs and their patterns', explain: ['head', 'col1'], quiz: true, head: ['Verb', 'What it shows', 'Pattern'], rows: [
            ['note, observe, report', 'neutral', 'note that…'],
            ['suggest, propose', 'tentative', 'suggest that… / suggest doing'],
            ['demonstrate, establish', 'you accept the finding', 'demonstrate that…'],
            ['acknowledge, concede', 'the author admits a weakness', 'acknowledge that…'],
            ['question, dispute, challenge', 'the author disagrees', 'question whether… / dispute the claim that…'],
            ['criticise', 'the author finds fault', 'criticise X for doing'],
            ['attribute', 'the author gives a cause', 'attribute X to Y'],
          ] },
        ],
        [
          { t: 'text', md: 'A synthesis is not a list of other people’s views. After reporting a source, add **your own comment**: is it convincing, limited, more relevant than another? Your voice often appears in the sentence that follows the citation.' },
          { t: 'examples', items: [
            { s: 'Ito (2020) **attributes** the fall in reading **to** the rise of short videos.', n: '*Attribute X to Y*: say that Y is the cause of X.' },
            { s: '**While this explanation is plausible**, it overlooks changes in school reading lists.', n: 'The writer’s own voice: accepting part of the source, then adding a criticism.' },
            { s: 'Brennan (2021) **criticises** earlier studies **for** relying on self-reports.', n: '*Criticise X for* + *-ing* form.' },
            { s: 'Brennan’s point **is particularly relevant here**, since our data also come from questionnaires.', n: 'The writer explains why the source matters for this argument.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Two ways to cite: *Ito (2020) argues that…* puts the author in the sentence and focuses on who said it. *…short videos may reduce reading (Ito, 2020)* puts the idea first. Use both, so your paragraphs do not all begin with a name.' },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake in each sentence.', items: [
            { s: 'Brennan criticises the report [about] ignoring costs.', a: ['for'], why: '*Criticise someone for doing* something.' },
            { s: 'The author attributes the decline [on] lower funding.', a: ['to'], why: '*Attribute X to Y*.' },
            { s: 'Novak suggests [to use] smaller groups.', a: ['using', 'that we use', 'that teachers use'], why: '*Suggest* + *-ing* or a *that* clause, never *suggest to do*.' },
            { s: 'Moreau acknowledges [what] her sample was small.', a: ['that'], why: 'The pattern is *acknowledge that* + clause: *acknowledges that her sample was small*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the reporting verb that fits.', items: [
            { q: 'Ito ___ that her sample was not representative.', o: ['acknowledges', 'demonstrates', 'establishes'], why: 'The author admits a weakness in her own study: *acknowledges*.' },
            { q: 'Diaz ___ whether the test really measures creativity.', o: ['questions', 'confirms', 'observes'], why: '*Question whether…*: express doubt.' },
            { q: 'Five independent trials ___ that the vaccine is safe.', o: ['have established', 'have speculated', 'have alleged'], why: 'Strong, repeated evidence: the writer accepts the finding.' },
            { q: 'Lund ___ a new way of measuring reading speed, which has not yet been tested.', o: ['proposes', 'proves', 'concedes'], why: '*Propose*: put forward an idea for others to consider.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: a reporting verb and what it shows.', pairs: [
            ['demonstrate', 'shows it is true'],
            ['concede', 'admits a point'],
            ['dispute', 'says it is wrong'],
            ['speculate', 'guesses without proof'],
            ['observe', 'notices and reports'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Handwriting or laptops?',
      about: 'Read three short sources on note-taking and a paragraph that combines them into one argument.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Three sources on note-taking', md: '**Source A (Ferreira, 2019).** In a laboratory study, 80 students watched a lecture and took notes either by hand or on a laptop. Those who wrote by hand remembered more of the main ideas in a test the same day. Ferreira suggests that writing by hand is slower, so students must summarise instead of copying word for word.\n\n**Source B (Osei and Lund, 2021).** This study repeated Ferreira’s design in real university classes over a whole term. Students who wrote by hand again did slightly better in a test the same day, but there was no significant difference between the groups in the final exam a month later.\n\n**Source C (Hartmann, 2023).** Hartmann trained one group of laptop users to summarise rather than transcribe. These students performed as well as those who wrote by hand. Hartmann concludes that the way students take notes matters more than the tool they use.' },
        ],
        [
          { t: 'reading', title: 'A synthesis paragraph', md: 'Research on note-taking suggests that the method students use may matter less than it first appeared. Ferreira (2019) found that students who wrote by hand remembered more than laptop users, and attributed this to the fact that handwriting forces students to summarise. Osei and Lund (2021) partly confirm this finding, but their classroom study indicates that the advantage disappears over a longer period. Building on Ferreira’s explanation, Hartmann (2023) showed that laptop users who were trained to summarise performed as well as those writing by hand. Taken together, these studies point to summarising, not handwriting itself, as the key factor. This seems the most convincing interpretation, although all three studies used short tests of recall rather than measures of deeper understanding.' },
          { t: 'ex', kind: 'choice', h: 'How does the paragraph use the sources?', items: [
            { q: 'How is the paragraph organised?', o: ['around one idea, with each source adding to it', 'one source after another, with no link between them', 'from the newest source to the oldest'], why: 'The first sentence gives the idea, and every source is used to develop it.' },
            { q: 'How does Source B relate to Source A?', o: ['It partly confirms it but limits it to the short term.', 'It completely contradicts it.', 'It has nothing to do with it.'], why: '*Partly confirm*: the same result on the day, but no difference a month later.' },
            { q: 'How does Source C relate to Source A?', o: ['It develops Ferreira’s explanation and tests it.', 'It repeats Ferreira’s study exactly.', 'It rejects the idea that summarising matters.'], why: '*Building on Ferreira’s explanation*: Hartmann tested whether summarising was the cause.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Ferreira’s study took place in real university classes.', a: 'f', why: 'It was *a laboratory study*; Osei and Lund used real classes.' },
            { q: 'Osei and Lund found that handwriting gave better results in the final exam.', a: 'f', why: 'There was *no significant difference between the groups in the final exam*.' },
            { q: 'Hartmann’s trained laptop users did as well as students writing by hand.', a: 't', why: '*These students performed as well as those who wrote by hand.*' },
            { q: 'Hartmann’s study used more students than Ferreira’s.', a: 'ng', why: 'The number of students in Hartmann’s study is not given.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the phrase where the writer of the synthesis gives their own view.', items: [
            { s: '[This seems the most convincing interpretation], although all three studies used short tests of recall.', why: 'Here the writer judges the evidence instead of reporting a source.' },
            { s: 'Taken together, these studies [point to summarising, not handwriting itself, as the key factor].', why: 'This is the writer’s conclusion from all three sources, not the claim of any one of them.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'What makes a synthesis different from a summary?', o: ['It relates several sources to each other around an idea.', 'It reports one source in fewer words.', 'It copies the most important sentences.'], why: 'A synthesis shows how sources connect.' },
      { q: 'Kim’s results ___ those of earlier studies, which found the opposite.', o: ['contradict', 'confirm', 'build on'], why: 'The earlier studies found the opposite, so the results contradict them.' },
      { q: 'Ito ___ that her study was very small.', o: ['concedes', 'establishes', 'demonstrates'], why: 'Admitting a weakness: *concedes*.' },
      { q: 'Which sentence shows the writer’s own voice?', o: ['This explanation is plausible, but it ignores cost.', 'Ito (2020) argues that cost is important.', 'Several studies have looked at cost.'], why: 'The writer judges the explanation instead of only reporting it.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'This finding is consistent ___ earlier research.', a: ['with'], why: '*Consistent with*.' },
      { q: 'Lund attributes the change ___ new technology.', a: ['to'], why: '*Attribute X to Y*.' },
      { q: 'Hartmann builds ___ Ferreira’s work.', a: ['on', 'upon'], why: '*Build on* or *upon*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Brennan criticises the study [of] using old data.', a: ['for'], why: '*Criticise X for doing*.' },
      { s: 'The authors suggest [to reduce] class sizes.', a: ['reducing', 'that schools reduce'], why: '*Suggest* + *-ing* or *that*, never *to* + verb.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Agreement or contrast?', groups: ['agreement', 'contrast'], explain: ['groups'], items: [
      { s: 'Similarly, Ruiz found a strong effect.', g: 0, why: '*Similarly* shows agreement.' },
      { s: 'Whereas Ruiz found a strong effect, Lee found none.', g: 1, why: '*Whereas* contrasts two findings.' },
      { s: 'Lee’s data confirm Ruiz’s results.', g: 0, why: '*Confirm*: the same result.' },
    ] },
  ],
};
