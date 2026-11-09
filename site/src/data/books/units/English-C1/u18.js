// English C1, unit 18, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Technology and us: tenses for trends and change, the meanings of particles in phrasal verbs, collocations of
// technology and change, and a gapped article on digital habits. Exam tasks in the format of C1 Advanced.
export const UNIT = {
  id: 'u18',
  title: 'Technology and us',
  goal: 'Describe trends and change with the right tense, work out phrasal verbs from the meaning of their particles, talk about technology with natural collocations, and follow the structure of a long article on digital habits.',
  art: 'alien',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'listening', 'speaking'], topics: ['trends', 'perfect-tenses', 'phrasal-verbs', 'particles', 'collocations', 'technology', 'gapped-text'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Has been rising steadily',
      about: 'Describe trends with the perfect and continuous tenses, the future perfect and phrases like is set to.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'You know the perfect tenses from B2. At C1 the challenge is using them **together** to tell the story of a change: where it started, how it is moving, and where it will be at a future point. Each tense answers a different question.\n\nThe **present perfect continuous** shows a trend that is still moving: *Online sales **have been rising** steadily.* The **present perfect simple** gives the result so far, often a total or a single change: *They **have doubled** since 2020.* The **past perfect continuous** shows a trend that was moving before a past moment: *Visitor numbers **had been falling** for years when the museum went online.* The **future perfect** looks back from a point in the future: *By 2030 the figure **will have doubled**.* And the **future perfect continuous** stresses the length of time up to that point: *By June I **will have been working** from home for five years.*' },
          { t: 'table', caption: 'Which tense for which part of the story?', explain: ['head', 'col0'], head: ['The question', 'The tense', 'Example'], rows: [
            ['Is it still going on?', 'present perfect continuous', 'Prices have been climbing all year.'],
            ['What is the result so far?', 'present perfect simple', 'The number of users has tripled.'],
            ['What was happening before then?', 'past perfect continuous', 'Sales had been falling until the new model came out.'],
            ['Where will it be by a future point?', 'future perfect', 'By next year the old system will have been phased out.'],
            ['How long, by a future point?', 'future perfect continuous', 'By May we will have been testing it for a year.'],
            ['What is planned or expected?', 'be set to, be expected to, be likely to', 'Demand is set to rise again.'],
          ] },
        ],
        [
          { t: 'text', md: 'Trends also need precise verbs, adverbs and prepositions. **Rise, increase, climb, soar** (very fast) go up; **fall, drop, decline, plummet** (very fast) go down; a figure can **level off**, **peak**, or **fluctuate** (go up and down). Adverbs give the speed: *steadily, gradually, sharply, dramatically, slightly*.\n\nThe prepositions are where most mistakes happen. **By** gives the size of the change, **to** gives the new figure, and **of** follows the noun: *Sales rose **by** 10% **to** 2,000. There was a rise **of** 10%.* A rise **in** something names what rose.' },
          { t: 'examples', items: [
            { s: 'Screen time in our survey **has been creeping up** for three years.', n: 'Present perfect continuous: still moving, slowly.' },
            { s: 'Membership **had been declining** steadily before the app was launched.', n: 'A trend before a past moment.' },
            { s: 'By the end of the decade, paper tickets **will have disappeared**.', n: 'Future perfect with *by* + a future time.' },
            { s: 'Use of the old platform **is expected to** fall sharply.', n: 'A formal prediction.' },
            { s: 'Downloads **soared** in the first week, then **levelled off**.', n: 'British spelling: *levelled*.' },
            { s: 'There has been a **sharp rise in** the number of complaints.', n: 'Adjective + noun: *a sharp rise in*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Sales have been doubling since May.', 'Sales have doubled since May.', '*Double* is one completed change: simple.'],
            ['By 2030 it will double.', 'By 2030 it will have doubled.', '*By* + a future time: future perfect.'],
            ['Prices rose of 5%.', 'Prices rose by 5%.', '*By* with the verb, *of* with the noun.'],
            ['It has been falling since five years.', 'It has been falling for five years.', '*For* a period, *since* a starting point.'],
            ['The number of users are growing.', 'The number of users is growing.', 'The subject is *the number*: singular.'],
          ] },
          { t: 'dialogue', title: 'Looking at the figures', lines: [
            { who: 'Hannah', s: 'Have you seen this? Remote working in the company has been rising steadily since the new policy.' },
            { who: 'James', s: 'It has, but it levelled off last spring. It had been climbing much faster before that.' },
            { who: 'Hannah', s: 'True. And bookings for the meeting rooms have halved.' },
            { who: 'James', s: 'If that carries on, we’ll have given up half the office by next year.' },
            { who: 'Hannah', s: 'The board is set to decide in March. By then they’ll have been discussing it for a year.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the best form.', items: [
            { q: 'The number of people paying by phone ___ steadily for several years now.', o: ['has been rising', 'had been rising', 'will have risen'], why: 'Still going on now: present perfect continuous.' },
            { q: 'By the time the shop closed, its sales ___ for months.', o: ['had been falling', 'have been falling', 'were fallen'], why: 'Before a past moment: past perfect continuous.' },
            { q: 'By 2035, most cars on our roads ___ electric.', o: ['will have become', 'have become', 'will be becoming'], why: '*By* + a future time: future perfect.' },
            { q: 'Visits to the website have ___ since the redesign.', o: ['tripled', 'been tripling', 'triple'], why: 'One completed change: present perfect simple.' },
            { q: 'Fees rose ___ 3% to £120.', o: ['by', 'of', 'in'], why: '*Rise by* the size of the change.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): write one word in each gap. The sentences make one short text.', items: [
            { q: 'Over the last few years, the use of video calls at our school has ___ growing steadily.', a: ['been'], why: 'Present perfect continuous: *has been growing*.' },
            { q: 'Before the new system arrived, attendance at evening classes had been falling ___ several years.', a: ['for'], why: '*For* + a period.' },
            { q: 'Online enrolments rose ___ almost a third last term.', a: ['by'], why: '*By* gives the size of the change.' },
            { q: 'There has also been a sharp rise ___ the number of students working from home.', a: ['in'], why: '*A rise in* something.' },
            { q: 'The school is ___ to introduce a new timetable in September.', a: ['set', 'expected', 'likely', 'due', 'going'], why: '*Be set to* / *be expected to*.' },
            { q: 'By the end of next year, it will ___ replaced every paper form.', a: ['have'], why: 'Future perfect: *will have replaced*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Describe a change in your own life or town over the last few years, using at least three tenses from this lesson. For example: *My commute **has been getting** shorter since I started working from home twice a week. By next year I **will have saved** enough to buy a bike.*' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'Prices have been rising steadily all year.' },
            { a: 'By next year the figure will have doubled.' },
            { a: 'Sales had been falling until the new model came out.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Speed up, phase out, wear off',
      about: 'Work out phrasal verbs from the meaning of their particles: up, out, off, through, down and on.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Phrasal verbs look random, but most particles keep a **core meaning** that comes from space and movement. *Up* is towards the top, so it means **more** or **complete**. *Out* is leaving a container, so it means **removal**, **ending** or **reaching many people**. *Off* is separation, so it means **stopping** or **fading**. *Through* is from one side to the other, so it means **to the end** or **seeing past a surface**.\n\nOnce you know these meanings, you can often understand a phrasal verb you have never seen. *The new rule is being **phased out*** means it is being removed in stages. *The novelty soon **wore off*** means the excitement faded. At C1, this is how you read fast without stopping at every unknown verb.' },
          { t: 'table', caption: 'Particles and their meanings', explain: ['head', 'col1'], head: ['Particle', 'Core meanings', 'Examples'], rows: [
            ['up', 'increase, or complete', 'speed up, scale up, back up, use up, free up'],
            ['out', 'remove, end, or spread to many', 'phase out, filter out, run out, opt out, roll out'],
            ['off', 'stop, separate, or fade', 'switch off, cut off, log off, wear off, pay off'],
            ['through', 'to the end, or past the surface', 'get through, follow through, scroll through, see through'],
            ['down', 'reduce, or stop working', 'slow down, cut down on, break down, shut down'],
            ['on', 'continue, or begin to be accepted', 'carry on, keep on, catch on'],
          ] },
        ],
        [
          { t: 'text', md: 'The same verb changes meaning with each particle, and the particle carries the difference. *Cut **down** on* sugar (eat less), *cut **out*** sugar (stop completely), *be cut **off*** (lose a connection). *Wear **off*** (fade), *wear **out*** (use until broken, or make very tired).\n\nIn formal writing, many phrasal verbs have a one-word equivalent: *phase out* and *discontinue gradually*, *roll out* and *launch*, *speed up* and *accelerate*, *cut down on* and *reduce*. Use the phrasal verb in speech and articles, and the single verb when a report or essay needs a more formal tone.' },
          { t: 'examples', items: [
            { s: 'The bank is **phasing out** paper statements over the next two years.', n: '*Out*: removing, in stages.' },
            { s: 'The new software has really **sped up** the approval process.', n: '*Up*: more, here more speed.' },
            { s: 'The excitement of the new phone **wore off** within a week.', n: '*Off*: fading.' },
            { s: 'Most people **saw through** the advert’s promises immediately.', n: '*Through*: past the surface to the truth.' },
            { s: 'I’m trying to **cut down on** the time I spend online.', n: '*Down*: reduce; *cut down on* + noun.' },
            { s: 'The idea took a while to **catch on**, but now everyone does it.', n: '*On*: become accepted.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The effect of the coffee wore out.', 'The effect of the coffee wore off.', 'Fading is *off*; *wear out* is breaking from use.'],
            ['They are phasing off the old model.', 'They are phasing out the old model.', 'Removing in stages is *out*.'],
            ['I’m cutting down sugar.', 'I’m cutting down on sugar.', '*Cut down on* + noun.'],
            ['The trend caught up quickly.', 'The trend caught on quickly.', '*Catch on* = become popular; *catch up* = reach the same level.'],
            ['Please switch off it.', 'Please switch it off.', 'A pronoun goes between verb and particle.'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the particle that gives the meaning.', items: [
            { q: 'The council plans to phase ___ diesel buses by 2030.', o: ['out', 'off', 'up'], why: 'Removing in stages: *phase out*.' },
            { q: 'Once the novelty wore ___, I barely used the watch.', o: ['off', 'out', 'down'], why: 'Fading: *wear off*.' },
            { q: 'Deleting old files will free ___ space on your laptop.', o: ['up', 'out', 'through'], why: 'Making more available: *free up*.' },
            { q: 'It took me all evening to get ___ my emails.', o: ['through', 'off', 'on'], why: 'To the end: *get through*.' },
            { q: 'Video calls were slow to catch ___ with older relatives.', o: ['on', 'up', 'out'], why: 'Becoming accepted: *catch on*.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C1 Advanced Listening Part 4** you hear five people speaking on the same theme, and do **two tasks at once**: for each speaker you choose from eight options in Task 1 and from eight other options in Task 2. Here you read what five speakers said about changing a digital habit. Each speaker mentions more than one option, so listen for what **actually** caused the change and what they **actually** noticed.' },
          { t: 'reading', title: 'Five speakers: changing a digital habit', md: '**Speaker 1.** It was my daughter who did it, really. She was about six, and one evening she said, “You look at your phone more than you look at me.” That stung. I cut down on screen time at home straight away. The odd thing is how much more I get through at work now. I suppose I’m simply less tired.\n\n**Speaker 2.** My employer rolled out a new policy: no work emails after seven in the evening. I was furious at first, because I was sure I’d fall behind. For the first week I felt genuinely anxious and kept checking that my laptop was still switched off. Now I wouldn’t go back.\n\n**Speaker 3.** I dropped my phone in a river on holiday, and for ten days I just had to manage without it. I’d always meant to cut down anyway; the cost of a new one had nothing to do with it. When I got home, I didn’t reinstall half the apps. I picked up the guitar I hadn’t touched for years instead.\n\n**Speaker 4.** I’d been having headaches, and the doctor asked how many hours a day I spent looking at screens. When I worked it out, I was shocked. Cutting back was hard, but the headaches wore off within a fortnight, and I fall asleep far more easily now.\n\n**Speaker 5.** I read an article about how apps are designed to keep you scrolling, and I suddenly saw through the whole thing. So I switched off almost every notification. Some friends were offended when I took a day to reply to messages. One told me I was being rude.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Listening Part 4), Task 1: what made each speaker change the habit?', items: [
            { q: 'Speaker 1', o: ['a remark from a child', 'a problem at work', 'a health problem', 'the cost of a device'], why: 'The daughter’s comment *stung*; work comes later, as a result.' },
            { q: 'Speaker 2', o: ['a new rule at work', 'a remark from a child', 'something they read', 'losing a device'], why: '*My employer rolled out a new policy.*' },
            { q: 'Speaker 3', o: ['losing a device', 'the cost of a device', 'a new rule at work', 'a health problem'], why: 'The phone fell in a river; *the cost… had nothing to do with it*.' },
            { q: 'Speaker 4', o: ['a health problem', 'something they read', 'a remark from a child', 'a new rule at work'], why: 'Headaches and a question from the doctor.' },
            { q: 'Speaker 5', o: ['something they read', 'a health problem', 'losing a device', 'a remark from a friend'], why: 'An article; the friends’ remarks came afterwards.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Task 2: what did each speaker notice afterwards?', items: [
            { q: 'Speaker 1', o: ['getting more done at work', 'feeling anxious at first', 'sleeping better', 'other people’s disapproval'], why: '*How much more I get through at work now.*' },
            { q: 'Speaker 2', o: ['feeling anxious at first', 'getting more done at work', 'returning to a hobby', 'sleeping better'], why: '*For the first week I felt genuinely anxious.*' },
            { q: 'Speaker 3', o: ['returning to a hobby', 'other people’s disapproval', 'feeling anxious at first', 'getting more done at work'], why: 'The speaker picked up the guitar again.' },
            { q: 'Speaker 4', o: ['sleeping better', 'returning to a hobby', 'getting more done at work', 'feeling anxious at first'], why: '*I fall asleep far more easily now.*' },
            { q: 'Speaker 5', o: ['other people’s disapproval', 'sleeping better', 'returning to a hobby', 'feeling anxious at first'], why: 'Friends were offended and called it rude.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 4 the words you hear are rarely the words in the options. *That stung* is never called *a remark from a child*; you have to recognise the idea. Do Task 1 on the first listening and Task 2 on the second if you find two tasks at once too hard.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'The novelty wore off within a week.' },
            { a: 'They are phasing out the old system.' },
            { a: 'I’m trying to cut down on screen time.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Cutting-edge or obsolete',
      about: 'Talk about technology and change with natural collocations: a breakthrough, become obsolete, go viral, keep pace with.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Writing about technology at C1 depends on **collocations**: the words that naturally go together. A new device is **cutting-edge** or **state-of-the-art**; scientists **make** or **achieve a breakthrough**; old equipment **becomes obsolete**; a video **goes viral**; companies struggle to **keep pace with** change or **fall behind**. Using the expected partner word is what makes your English sound natural rather than translated.\n\nMany of these phrases also carry an **attitude**. *Cutting-edge* and *a breakthrough* are positive; *pose a threat to*, *raise concerns about* and *an unintended consequence* are critical. Choosing them helps you show your opinion without saying *I think*.' },
          { t: 'table', caption: 'Collocations of technology and change', explain: ['head', 'col0'], head: ['Idea', 'Collocations', 'Example'], rows: [
            ['new and advanced', 'cutting-edge, state-of-the-art, the latest generation of', 'The lab uses state-of-the-art equipment.'],
            ['progress', 'make a breakthrough in, a major advance, pave the way for', 'The discovery paved the way for cheaper batteries.'],
            ['spreading', 'go viral, widespread adoption, early adopters, catch on', 'The clip went viral overnight.'],
            ['keeping up', 'keep pace with, fall behind, a steep learning curve', 'Smaller firms struggle to keep pace with change.'],
            ['going out of use', 'become obsolete, be phased out, fall out of use', 'Fax machines have largely become obsolete.'],
            ['risks', 'pose a threat to, raise concerns about, an unintended consequence', 'The app raised concerns about privacy.'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'Researchers have **made a breakthrough in** battery design.', n: '*Make a breakthrough in*, not *do*.' },
            { s: 'Within five years, the old chargers had **become obsolete**.', n: 'No longer used because something better exists.' },
            { s: 'Her post **went viral** and was shared thousands of times.', n: 'Spread very fast online.' },
            { s: 'Schools are finding it hard to **keep pace with** new technology.', n: '*Keep pace with*: move as fast as.' },
            { s: 'Constant notifications may **pose a threat to** concentration.', n: 'Formal and critical.' },
            { s: 'One **unintended consequence** of online shopping is more traffic on residential streets.', n: 'A result nobody planned.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['They did a breakthrough.', 'They made a breakthrough.', '*Make* or *achieve* a breakthrough.'],
            ['The video became viral.', 'The video went viral.', 'The fixed phrase is *go viral*.'],
            ['We must keep the pace of technology.', 'We must keep pace with technology.', '*Keep pace with*, no article.'],
            ['The phone is obsolete now; it is a cutting-edge model.', 'The phone is cutting-edge; it is the latest model.', '*Obsolete* means out of date, the opposite of *cutting-edge*.'],
            ['It rose concerns about safety.', 'It raised concerns about safety.', '*Raise* takes an object; *rise* does not.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'The new system at work', lines: [
            { who: 'Nadia', s: 'How are you getting on with the new booking system?' },
            { who: 'Callum', s: 'It’s been a steep learning curve. Half the team still can’t keep pace with the updates.' },
            { who: 'Nadia', s: 'They say it’s state-of-the-art, though. The old one had become completely obsolete.' },
            { who: 'Callum', s: 'True, but nobody asked us. One unintended consequence is that customers can’t book by phone any more.' },
            { who: 'Nadia', s: 'That’s bound to raise concerns. Older clients will feel they’re being left behind.' },
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go naturally with the key word?', items: [
            { key: 'make', o: ['a breakthrough', 'progress', 'viral', 'an advance', 'obsolete'], a: [0, 1, 3], why: '*Make a breakthrough, progress, an advance*; but *go viral*, *become obsolete*.' },
            { key: 'raise', o: ['concerns', 'questions', 'a threat', 'doubts'], a: [0, 1, 3], why: '*Raise concerns, questions, doubts*; but *pose a threat*.' },
            { key: 'keep', o: ['pace with', 'up to date', 'behind', 'track of'], a: [0, 1, 3], why: '*Keep pace with, keep up to date, keep track of*; but *fall behind*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): choose the word that best fits each gap. The sentences make one short text.', items: [
            { q: 'For a few years in the 1990s, the pager was a ___-edge device that every busy professional wanted.', o: ['cutting', 'sharp', 'high', 'top'], why: 'The fixed compound is *cutting-edge*.' },
            { q: 'Doctors relied on it, and it seemed unthinkable that it would ever become ___.', o: ['obsolete', 'antique', 'elderly', 'aged'], why: 'Technology that is no longer used *becomes obsolete*.' },
            { q: 'Yet mobile phones developed so fast that the pager simply could not keep ___ with them.', o: ['pace', 'speed', 'rate', 'tempo'], why: '*Keep pace with*.' },
            { q: 'Each new phone was hailed as a ___, and the pager began to look old-fashioned.', o: ['breakthrough', 'breakdown', 'breakout', 'break-in'], why: 'A major advance: *a breakthrough*.' },
            { q: 'Early ___ happily paid high prices for the first models.', o: ['adopters', 'starters', 'founders', 'beginners'], why: '*Early adopters*: the first people to use a new technology.' },
            { q: 'Within a decade, the mobile phone had achieved ___ adoption.', o: ['widespread', 'extended', 'stretched', 'spacious'], why: '*Widespread adoption*.' },
            { q: 'It also ___ concerns about privacy that are still debated today.', o: ['raised', 'lifted', 'rose', 'grew'], why: '*Raise concerns*; *rise* takes no object.' },
            { q: 'Few people foresaw the unintended ___ of being reachable everywhere, all the time.', o: ['consequences', 'sequels', 'aftermaths', 'upshots'], why: '*Unintended consequences*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Part 1 at C1 tests **collocations and fixed phrases** more than meaning: often all four options mean something similar, but only one is the natural partner word. Read the words **after** the gap too: *keep ___ with* points straight to *pace*.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'It’s been a steep learning curve.' },
            { a: 'The old system had become completely obsolete.' },
            { a: 'That’s bound to raise concerns about privacy.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'A month of quiet evenings',
      about: 'Read a long article on digital habits with paragraphs removed, and follow the links that hold a text together.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'In **C1 Advanced Reading and Use of English Part 7** six paragraphs have been removed from a long article, and you choose the right one for each gap from seven options. One option does not fit anywhere.\n\nThe task tests how a text **holds together**. Look at the sentences just before and just after each gap and find the links: **pronouns** and **reference words** (*this, those, it, such*), **repeated or related ideas** (*gaps* in one paragraph, *those gaps* in the next), **linkers of contrast and time** (*though, yet, by then*) and **the line of the argument** (a problem, then a result, then a cost). Here the article has four gaps and five options.' },
          { t: 'reading', title: 'A month of quiet evenings', md: 'For years my evenings followed the same pattern. I would get home, cook something quick and then sit down “for five minutes” with my phone. Two hours later I would look up, unable to say what I had read or watched. Last spring I decided to find out what would happen if I stopped. For one month, every screen in the flat would be switched off at eight o’clock.\n\n**[gap 1]**\n\nWhat made it so hard was not boredom, as I had expected, but habit. My hand would drift towards my pocket while the kettle boiled, at traffic lights, even in the middle of a conversation. I had not realised how many tiny gaps in my day I had been filling without thinking.\n\n**[gap 2]**\n\nNone of this sounds remarkable, and it isn’t. What surprised me was how quickly it began to feel normal. By the third week the urge to check my phone had largely worn off, and I was sleeping better than I had in years.\n\n**[gap 3]**\n\nThat is partly why I have not kept the rule in its strict form. Since the experiment ended, my phone has stayed on, but after eight it lives in a drawer in the hall, where I can hear it ring but cannot scroll through it.\n\n**[gap 4]**\n\nI am not sure it would work for everyone. But if you have ever looked up from a screen and wondered where the evening went, a month is a short time to find out.' },
        ],
        [
          { t: 'reading', title: 'The removed paragraphs', md: '**A.** Gradually, though, those gaps began to fill with other things. I started reading again, slowly at first, a chapter at a time. I cooked meals that took longer than ten minutes. On several evenings my partner and I simply sat and talked.\n\n**B.** It is a compromise, and I break it more often than I would like to admit. Yet the experiment changed something that has lasted: I now notice when I reach for the phone, and that moment of noticing is often enough to stop me.\n\n**C.** My partner was sceptical. “You’ll last three days,” she said, and she very nearly turned out to be right. The rule itself was simple; keeping to it was not.\n\n**D.** There was a price, of course. I missed a friend’s last-minute invitation to dinner because I did not see her message until the next morning, and at work I was the last to hear about a change of plan. Being unreachable, I learned, is a luxury that depends on other people’s patience.\n\n**E.** By the end of the second week I had given up completely and gone back to my old routine, scrolling until well after midnight.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 7): choose the paragraph that fits each gap. One paragraph does not fit.', items: [
            { q: 'Which paragraph fits gap 1?', o: ['C', 'A', 'D', 'E'], why: '*Keeping to it was not* [simple] leads into *What made it so hard*.' },
            { q: 'Which paragraph fits gap 2?', o: ['A', 'B', 'D', 'E'], why: '*Tiny gaps in my day* is picked up by *those gaps*; *None of this* then refers to reading, cooking and talking.' },
            { q: 'Which paragraph fits gap 3?', o: ['D', 'B', 'C', 'E'], why: 'After the benefits comes *a price*; *That is partly why* refers to the cost.' },
            { q: 'Which paragraph fits gap 4?', o: ['B', 'A', 'C', 'E'], why: '*It is a compromise* describes the drawer in the hall.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes in Part 7', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Choosing a paragraph because it has the same topic', 'Checking the links before and after the gap', 'Every paragraph is on the same topic.'],
            ['Choosing E because it mentions time', 'Checking it against the facts of the text', 'E contradicts *by the third week… worn off*.'],
          ] },
          { t: 'ex', kind: 'spot', h: 'Find the words that link the paragraphs: the reference words and linkers.', items: [
            { s: 'Gradually, [though], [those] gaps began to fill with other things.', why: '*Though* contrasts with the difficulty before; *those* points back to *gaps*.' },
            { s: '[That] is partly why I have not kept the rule in its strict form.', why: '*That* refers to the price in the paragraph before.' },
            { s: 'It is a compromise, and I break it more often than I would like to admit. [Yet] the experiment changed something.', why: '*Yet* turns from the weakness to what lasted.' },
          ] },
        ],
        [
          { t: 'text', md: 'Talk about one digital habit you would like to change, and what it might cost you. Use a tense for trends, a phrasal verb and a collocation from this unit. For example: *I’ve been spending more and more time on my phone. I’d like to cut down, though being unreachable might raise a few eyebrows at work.*' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'By the third week, the urge had largely worn off.' },
            { a: 'Being unreachable is a luxury that depends on other people’s patience.' },
            { a: 'That moment of noticing is often enough to stop me.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the best form.', items: [
      { q: 'Online orders ___ steadily since the spring.', o: ['have been increasing', 'had been increasing', 'will have increased'], why: 'Still going on: present perfect continuous.' },
      { q: 'By 2040, petrol cars ___ phased out.', o: ['will have been', 'have been', 'are being'], why: '*By* + future time: future perfect passive.' },
      { q: 'Membership ___ for years before the club went online.', o: ['had been declining', 'has been declining', 'declines'], why: 'Before a past moment.' },
      { q: 'Prices rose ___ 4% last month.', o: ['by', 'of', 'to'], why: '*Rise by* the size of the change.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the particle.', items: [
      { q: 'The effect of the medicine wore ___ after an hour.', a: ['off'], why: 'Fading: *wear off*.' },
      { q: 'The bank is phasing ___ its paper forms.', a: ['out'], why: 'Removing in stages: *phase out*.' },
      { q: 'Everyone saw ___ his excuse at once.', a: ['through'], why: '*See through*: recognise the truth.' },
      { q: 'I’m trying to cut down ___ coffee.', a: ['on'], why: '*Cut down on* + noun.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the word that best fits each gap.', items: [
      { q: 'The video ___ viral within hours.', o: ['went', 'became', 'turned', 'got'], why: '*Go viral*.' },
      { q: 'Researchers have ___ a breakthrough in solar power.', o: ['made', 'done', 'taken', 'put'], why: '*Make a breakthrough*.' },
      { q: 'Smaller schools struggle to keep ___ with new technology.', o: ['pace', 'speed', 'rate', 'step'], why: '*Keep pace with*.' },
      { q: 'The new law has ___ concerns about privacy.', o: ['raised', 'risen', 'grown', 'lifted'], why: '*Raise concerns*.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
      { q: 'Our growing ___ on smartphones worries some experts.', base: 'rely', a: ['reliance'], why: 'Noun: *reliance on*.' },
      { q: 'The ___ of the new system took longer than planned.', base: 'adopt', a: ['adoption'], why: 'Noun: *adoption*.' },
      { q: 'The design is genuinely ___.', base: 'innovate', a: ['innovative'], why: 'Adjective: *innovative*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'By 2030 the number of users [will double].', a: ['will have doubled'], why: '*By* + future time: future perfect.' },
      { s: 'The trend [caught up] very quickly.', a: ['caught on'], why: '*Catch on* = become popular.' },
      { s: 'They [did] a breakthrough in medicine.', a: ['made', 'achieved'], why: '*Make a breakthrough*.' },
    ] },
  ],
};
