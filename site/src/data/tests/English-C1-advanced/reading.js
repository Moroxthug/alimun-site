// C1 Advanced practice test, Reading and Use of English (docs/TESTS.md). Written by Alimun; not official material.
// Draft for native-teacher review.
export const PAPER = {
  id: 'reading', title: 'Reading and Use of English', minutes: 90,
  parts: [
    { id: 'p1', ref: 'Part 1', title: 'Multiple-choice cloze',
      about: 'For each gap, choose the answer (A, B, C or D) which best fits the text.',
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Read the text and choose the word or phrase which best fits each gap.',
          text: `**Losing our way**

Not so long ago, finding your way around an unfamiliar town meant unfolding a paper map, working out a route and hoping for the best. It was all too easy to {} your bearings, and most travellers can remember at least one long, frustrating walk in entirely the wrong direction. Today, most of us simply follow the instructions of a voice on our phone, and few would {} going back. Yet researchers who study spatial memory have begun to {} concerns about what this convenience may be costing us.

Their worry {} on a region of the brain called the hippocampus, which plays a central role in building mental maps of our surroundings. Studies of people whose jobs require them to memorise complex street layouts have found that this area tends to be larger in those with years of experience, suggesting that it {} to regular use rather like a muscle. When we hand over navigation to a device, the argument goes, we deprive the brain of exactly the kind of exercise it needs.

Not everyone is convinced. Critics point out that the evidence is still {} and that it is far from clear whether occasional reliance on a screen makes any lasting difference. Even so, the advice from those who take the risk seriously is simple enough: every so often, leave the phone in your pocket and try to find your own way. At worst, you will take a few wrong turns. At best, you may end up {} across streets you would never otherwise have seen, and come to know a city like the {} of your hand.`,
          items: [
            { o: ['lose', 'miss', 'drop', 'slip'], why: 'The fixed phrase is *lose your bearings*, meaning to stop knowing where you are.' },
            { o: ['consider', 'think', 'suppose', 'regard'], why: '*Consider* is followed directly by an -ing form; *think* would need *of*, and the others do not fit.' },
            { o: ['raise', 'lift', 'rise', 'elevate'], why: 'We *raise concerns*; *rise* is intransitive and *lift* and *elevate* do not collocate with *concerns*.' },
            { o: ['centres', 'bases', 'settles', 'grounds'], why: '*Centres on* means has as its main focus; *base* would need the passive (*is based on*).' },
            { o: ['responds', 'answers', 'replies', 'corresponds'], why: 'The brain region *responds to* use, that is, changes because of it; *answers to* means obeys.' },
            { o: ['inconclusive', 'undecided', 'indefinite', 'unsettled'], why: 'Evidence that does not prove something is *inconclusive*; *undecided* describes people, not evidence.' },
            { o: ['stumbling', 'tripping', 'falling', 'dropping'], why: '*Stumble across* means find by chance; the other verbs do not form this phrasal verb.' },
            { o: ['back', 'palm', 'front', 'side'], why: 'The idiom is *know something like the back of your hand*, to know it extremely well.' },
          ] },
      ] },
    { id: 'p2', ref: 'Part 2', title: 'Open cloze',
      about: 'For each gap, think of the word which best fits. Use only one word in each gap.',
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Read the text and write one word in each gap.',
          text: `**Why we collect**

Few hobbies are as widespread, or as hard to explain, as collecting. Whether it is stamps, seashells or old tin toys, millions of people devote considerable time and money to acquiring objects that serve {} practical purpose whatsoever. So what lies {} the urge?

Psychologists offer several explanations. One is that a collection gives its owner a sense of control in a world that often feels unpredictable. Another is that the hunt itself is rewarding: the thrill of tracking {} a rare item can be every bit {} satisfying as finally owning it. Indeed, many collectors admit that, {} a set is complete, their interest begins to fade.

There is also a social side. Collectors tend to seek out others who share their passion, swapping knowledge and, {} occasion, the objects themselves. {} begins as a solitary pastime can thus become a way of belonging to a community. And while non-collectors may find the whole business baffling, few would deny that it does little harm, provided it does not get {} of hand.`,
          items: [
            { a: ['no'], why: '*No* + noun with *whatsoever* means not any at all: *serve no practical purpose whatsoever*.' },
            { a: ['behind', 'beneath'], why: '*What lies behind* something asks for its hidden cause or reason.' },
            { a: ['down'], why: '*Track down* means find something after a long search.' },
            { a: ['as'], why: '*Every bit as ... as* is an emphatic comparison of equality, completed by *as satisfying as*.' },
            { a: ['once', 'when'], why: '*Once* introduces the moment after which something happens: when the set is complete.' },
            { a: ['on'], why: 'The fixed phrase is *on occasion*, meaning sometimes.' },
            { a: ['what'], why: '*What* begins a clause that is the subject of the sentence: the thing that begins as a pastime.' },
            { a: ['out'], why: '*Get out of hand* means become impossible to control.' },
          ] },
      ] },
    { id: 'p3', ref: 'Part 3', title: 'Word formation',
      about: 'Use the word given in capitals to form a word that fits in the gap.',
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Read the text and form a word from the word in capitals for each gap.',
          text: `**Science for everyone**

Until fairly recently, collecting scientific data was regarded as a job for {}. Today, however, thousands of {} around the world are counting birds, classifying photographs of distant galaxies and measuring rainfall in their back gardens, all in the name of research.

The {} of these so-called citizen science projects owes much to technology. A smartphone can now do what once required costly and {} equipment, and observations can be shared with researchers almost {}.

Scientists are {} the main beneficiaries, since they gain access to far more observations than they could ever gather themselves. But participants benefit too: many say that taking part has given them a renewed {} about the natural world. Critics have questioned the {} of data collected by amateurs, but careful checking has shown that, with proper training, their results are often just as accurate as those of experts.`,
          items: [
            { base: 'SPECIAL', a: ['specialists'], why: 'A plural noun for people is needed after *a job for*: *specialists*.' },
            { base: 'VOLUNTARY', a: ['volunteers'], why: 'A plural noun for people is needed after *thousands of*: *volunteers*.' },
            { base: 'POPULAR', a: ['popularity'], why: 'A noun is needed after *The* as the subject of the sentence: *popularity*.' },
            { base: 'WIELD', a: ['unwieldy'], why: 'An adjective meaning large and hard to handle is needed: *unwieldy*.' },
            { base: 'EFFORT', a: ['effortlessly'], why: 'An adverb is needed to describe how data are shared: *effortlessly*.' },
            { base: 'DOUBT', a: ['undoubtedly', 'doubtless'], why: 'An adverb meaning certainly is needed: *undoubtedly*.' },
            { base: 'CURIOUS', a: ['curiosity'], why: 'A noun is needed after the adjective *renewed*: *curiosity*.' },
            { base: 'RELY', a: ['reliability'], why: 'A noun is needed after *the*, meaning how far the data can be trusted: *reliability*.' },
          ] },
      ] },
    { id: 'p4', ref: 'Part 4', title: 'Key word transformation',
      about: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. Use between three and six words, including the word given.',
      blocks: [
        { t: 'ex', kind: 'transform', h: 'Write between three and six words, including the word given.',
          items: [
            { q: "I would never have finished the project on time if Maria hadn't helped me.", cue: 'FOR',
              gap: 'If it ___ help, I would never have finished the project on time.',
              a: ["had not been for Maria's", "hadn't been for Maria's"],
              why: '*If it had not been for* + noun replaces a past conditional clause; *Maria\'s help* is the noun phrase.' },
            { q: 'People say that the castle was built in the twelfth century.', cue: 'SAID',
              gap: 'The castle ___ in the twelfth century.',
              a: ['is said to have been built'],
              why: 'The passive reporting structure is *is said to* + perfect passive infinitive for a past action.' },
            { q: "It's pointless to try to persuade him to change his mind.", cue: 'POINT',
              gap: 'There ___ to persuade him to change his mind.',
              a: ['is no point in trying', "'s no point in trying", 'is no point trying', "'s no point trying", 'is little point in trying', "'s little point in trying"],
              why: '*There is no point (in)* + -ing form means it is pointless to do something.' },
            { q: 'As soon as the manager arrived, the meeting began.', cue: 'SOONER',
              gap: 'No ___ the meeting began.',
              a: ['sooner had the manager arrived than', 'sooner did the manager arrive than'],
              why: '*No sooner* at the start of a sentence takes inversion (*had the manager arrived*) and is followed by *than*.' },
            { q: 'It was only when I got home that I realised I had lost my keys.', cue: 'UNTIL',
              gap: 'I ___ I got home that I had lost my keys.',
              a: ['did not realise until', "didn't realise until", 'did not realize until', "didn't realize until"],
              why: '*Not ... until* expresses that something happened only at a certain point: *I didn\'t realise until I got home*.' },
            { q: 'Everyone was surprised when Anna resigned.', cue: 'CAME',
              gap: "Anna's resignation ___ everyone.",
              a: ['came as a surprise to', 'came as a complete surprise to', 'came as a great surprise to', 'came as a big surprise to', 'came as quite a surprise to', 'came as a total surprise to'],
              why: 'The fixed phrase is *come as a surprise to* someone.' },
          ] },
      ] },
    { id: 'p5', ref: 'Part 5', title: 'Multiple choice',
      about: 'You are going to read an article about memory. For each question, choose the answer (A, B, C or D) which you think fits best according to the text.',
      text: { title: 'In praise of forgetting', md: `For years I regarded my poor memory as a personal failing, something to be apologised for at dinner parties when a name escaped me or the plot of a film dissolved the moment the credits rolled. I bought books promising to turn me into a mental athlete and dutifully practised their techniques, building imaginary palaces in which to store shopping lists and the birthdays of distant relatives. The palaces crumbled within weeks. It was only when I began interviewing researchers for a series of articles on memory that I discovered I might have been worrying about the wrong thing all along.

The prevailing view, one neuroscientist told me, had long been that forgetting is simply memory failing: information goes in, and some of it leaks out, rather as water escapes from a cracked jug. But a growing body of work suggests that the brain discards information on purpose, and that it invests real effort in doing so. Far from being a passive process of decay, forgetting appears to be actively managed, with specific mechanisms that weaken the connections between neurons once those connections have outlived their usefulness. "We used to think of forgetting as the enemy of memory," she said. "Now it looks a lot more like its editor."

Why would an organism go to such trouble to lose what it has learnt? The answer, it seems, lies in the nature of the world we have evolved to live in. Circumstances change: the stream that provided water last summer may be dry this year; the path that was safe yesterday may be blocked today. A brain that clung to every detail would be slow to adapt, forever weighing outdated information against new. Forgetting, in this view, is what allows us to generalise, to extract the gist of an experience while letting go of the particulars that would only get in the way.

I found this idea oddly consoling, though I was wary of embracing it too eagerly. It is one thing to accept that forgetting has a purpose, and quite another to claim that my own absent-mindedness was serving it. When I put this to another scientist, a specialist in ageing, he laughed. "Everyone who comes to this research hopes it will let them off the hook," he said. He was quick to stress that there is a world of difference between the healthy pruning of irrelevant detail and the kind of memory loss that disrupts daily life, and that the latter deserves to be taken seriously, however much we might prefer to explain it away. Still, he conceded, a good many of the lapses that people bring to their doctors in a state of some anxiety turn out to be entirely normal.

There is also the matter of what we choose to remember in the first place. In an age when almost any fact can be looked up in seconds, the pressure to store information in our own heads has eased considerably. Some commentators lament this, arguing that we are handing our minds over to machines. Yet humans have always relied on external aids, from knotted cords and tally sticks to notebooks and diaries, and the researchers I spoke to were largely unperturbed by the latest addition to the list. What matters, several of them suggested, is not how much we can retain but whether we can make sense of what we know: connect it, question it and put it to use.

None of this, I should add, has cured me. I still forget names at dinner parties, and I still occasionally find myself standing in the kitchen with no idea why I went in there. But I have stopped buying books about memory palaces, and I apologise rather less than I used to. If my brain is quietly clearing away what it judges to be clutter, I am inclined, on most days, to let it get on with the job.` },
      blocks: [
        { t: 'ex', kind: 'choice', h: 'Choose the answer which fits best according to the text.', items: [
          { q: 'In the first paragraph, the writer suggests that her attempts to improve her memory',
            o: ['rested on a mistaken idea of what the problem was.', 'were given up because they took too much time.', 'were more successful than she admitted to others.', 'were motivated mainly by her work as a journalist.'],
            why: 'She says she discovered she "might have been worrying about the wrong thing all along".' },
          { q: 'The neuroscientist compares forgetting to an editor in order to show that',
            o: ['forgetting serves memory by removing what is no longer useful.', 'the brain can learn to forget unpleasant experiences.', 'memories are rewritten each time they are recalled.', 'forgetting is a sign that the brain is overworked.'],
            why: 'Forgetting is described as active, weakening connections "once those connections have outlived their usefulness", like an editor cutting text.' },
          { q: 'What does the writer suggest about a brain that held on to every detail?',
            o: ['It would struggle to respond to changing circumstances.', 'It would use more energy than the body could supply.', 'It would eventually run out of space for new memories.', 'It would be more likely to produce false memories.'],
            why: 'The third paragraph says such a brain "would be slow to adapt, forever weighing outdated information against new".' },
          { q: 'How did the writer react to the idea that forgetting has a purpose?',
            o: ['She was comforted by it but reluctant to use it to excuse herself.', 'She doubted whether the research behind it was reliable.', 'She felt the scientists she met had exaggerated its importance.', 'She was embarrassed that she had misunderstood it at first.'],
            why: 'She found it "oddly consoling" but notes it is "quite another" thing to claim her own absent-mindedness was serving that purpose.' },
          { q: 'The specialist in ageing was particularly keen to point out that',
            o: ['some kinds of memory loss are a genuine cause for concern.', 'most people who consult doctors about their memory are wasting their time.', 'research into forgetting has been misreported in the press.', 'older people tend to underestimate how forgetful they are.'],
            why: 'He "was quick to stress" that memory loss which disrupts daily life "deserves to be taken seriously".' },
          { q: 'In the fifth paragraph, the researchers’ attitude to our reliance on external memory aids is described as',
            o: ['untroubled, since people have always depended on such aids.', 'critical, because such aids weaken our ability to think.', 'divided, as the evidence about their effects is mixed.', 'enthusiastic, since such aids leave more room for creativity.'],
            why: 'The researchers were "largely unperturbed", and the writer notes that "humans have always relied on external aids".' },
        ] },
      ] },
    { id: 'p6', ref: 'Part 6', title: 'Cross-text multiple matching',
      about: 'You are going to read four extracts in which urban planners give their views on closing city centres to cars. For each question, choose from the planners A to D. The planners may be chosen more than once.',
      texts: [
        { title: 'Planner A', md: `**A** Whenever a city proposes closing its centre to traffic, the loudest objections tend to come from shopkeepers, who fear that customers will simply stop coming. In my experience, those fears are rarely borne out. Once people can walk and linger without dodging cars, they visit more often and stay longer, and takings in most streets I have studied have risen within a couple of years. The improvement in air quality is equally clear and is felt almost immediately by anyone who lives or works nearby. What I would caution against is the argument that nothing should change until public transport has been thoroughly overhauled. That sounds sensible, but in practice it becomes a reason for endless delay. Buses and trams improve fastest when there is demand for them, and closing streets to cars is one of the surest ways of creating that demand.` },
        { title: 'Planner B', md: `**B** I have no quarrel with the environmental case for car-free centres; the drop in pollution where they have been introduced is well documented, and residents notice the difference. My concern lies with the small traders, particularly those who rely on deliveries throughout the day or on older customers who cannot easily walk or cycle into town. Too many schemes have been designed with the café owner in mind and too few with the hardware shop or the repair business, and some of these have quietly closed. Much of this could be avoided if the people affected were involved from the very beginning, rather than presented with a finished plan and invited to comment. And of course, no one should be asked to give up their car until there is a reliable, affordable alternative in place; anything else is simply unfair.` },
        { title: 'Planner C', md: `**C** The economic picture is more encouraging than many people expect. Pedestrianised streets typically attract more visitors, and those visitors spend more, partly because they are no longer hurrying back to a parking space. The cleaner air is a welcome bonus. Where schemes have failed, it has usually been because they were imposed rather than agreed. A council that holds a single public meeting after the decision has effectively been taken should not be surprised by the anger that follows; residents need to help shape the plan, not just react to it. It is equally important to get the sequence right. Before the cars go, there must be frequent, affordable public transport ready to take their place, otherwise those on the edges of the city, who often have the fewest options, end up paying the price.` },
        { title: 'Planner D', md: `**D** Car-free centres are often presented as an obvious good, but the evidence deserves a closer look. Traffic does not disappear when a street is closed; much of it is pushed onto the surrounding roads, so pollution may fall in the centre while rising in the residential areas around it, with little overall gain. Independent shops are also vulnerable: I have seen a number of established businesses struggle once regular customers could no longer drive to their door. None of this means that such schemes are a mistake, but it does mean that they need careful preparation. Above all, public transport has to be improved first. Asking people to abandon their cars before decent buses and trains exist is not a transport policy but a hope.` },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Which planner ...', opts: ['A', 'B', 'C', 'D'], items: [
          { q: 'shares A’s opinion about the effect of car-free schemes on local businesses?', a: 2,
            why: 'A says takings have risen; C agrees that visitors "spend more", while B and D describe shops struggling.' },
          { q: 'has a different view from the others about whether car-free schemes improve air quality?', a: 3,
            why: 'D argues traffic is "pushed onto the surrounding roads" with "little overall gain"; A, B and C all report cleaner air.' },
          { q: 'expresses a similar view to C about involving residents in planning?', a: 1,
            why: 'Like C, B wants those affected "involved from the very beginning, rather than presented with a finished plan".' },
          { q: 'takes a different view from D on whether public transport should be improved before cars are removed?', a: 0,
            why: 'A warns that waiting for transport to be overhauled "becomes a reason for endless delay"; B, C and D want transport improved first.' },
        ] },
      ] },
    { id: 'p7', ref: 'Part 7', title: 'Gapped text',
      about: 'You are going to read an article about learning to build boats. Six paragraphs have been removed from the article. Choose from the paragraphs A to G the one which fits each gap. There is one extra paragraph which you do not need to use.',
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Choose the paragraph which fits each gap.',
          text: `**Learning the grain**

When I signed up for a six-month course in traditional boatbuilding, I had never so much as planed a plank. I had spent fifteen years writing software for an insurance company, and my experience of woodwork was limited to assembling flat-pack shelves, usually with several screws left over. My friends assumed I was going through some kind of crisis. Perhaps I was.

{}

The workshop occupied an old stone barn at the edge of the estuary, and on the first morning there were eight of us standing awkwardly among the sawdust. Our instructor, Ewan, had been building boats there for more than forty years. He did not make speeches. Instead, he handed each of us a block of oak and a chisel and asked us to cut a straight-sided slot.

{}

It was several weeks before I began to understand. Wood, it turns out, is not a uniform material but a record of the tree's life, with fibres that run in particular directions and respond very differently depending on how you approach them. Cut along the grain and the blade glides; cut against it and the surface tears.

{}

Efficiency, in any case, was not something Ewan valued much. When one of my fellow students, a retired engineer, suggested that a particular joint could be cut far more quickly with a power tool, Ewan agreed that it could. Then he asked what the hurry was.

{}

By the third month, the boat itself had begun to take shape: a small rowing boat, just under five metres long, built to a design that local fishermen had used for generations. Each of us had been given responsibility for one part of it, and mine was the stem, the curved timber at the very front to which all the planks would eventually be fastened.

{}

The launch took place on a grey morning in early spring. Half the village seemed to have turned out to watch, and I was absurdly nervous as we carried the boat down the slipway, convinced that it would fill with water the moment it touched the surface.

{}

I did not go back to my old job. These days I repair boats for a living, which pays rather less than software and asks rather more of my back. But I have not once, in three years, come home at the end of the day with nothing to show for it.`,
          opts: [
            'The question stayed with me for a long time. In my old job, speed had been the measure of almost everything, and a mistake could usually be undone with a few keystrokes. Here, an error made in haste might take days to put right, and some could not be put right at all. A split plank had to be replaced; a badly fitted frame might leak for the life of the boat.',
            'It sounded simple. It took me the entire day, and by the end of it my slot was neither straight nor, in places, recognisably a slot. Ewan looked at it for a long moment, then remarked that I had been fighting the wood rather than working with it. I had no idea what he meant.',
            'Not all of my fellow students stayed the course. Two left within the first month, one because of an injured wrist and the other because, he said, he had expected to spend more time on the water and less in the workshop. I understood his frustration, though I never shared it.',
            'It did not. It sat on the water as if it had always been there, and when two of us climbed in and took up the oars, it moved with an ease that took my breath away. I have written a great deal of software that worked perfectly well, but none of it ever made me feel like that.',
            'What I was really after, though I could not have put it into words at the time, was the satisfaction of making something I could touch. Software is curiously weightless: you spend months on a project, and when it is finished there is nothing to show for it but a slightly different screen. A boat, I reasoned, would be harder to ignore.',
            'It was, Ewan told me cheerfully, the piece that would hold everything else together, so it would be best not to get it wrong. I spent eleven days on it. On the twelfth, he ran his hand slowly along the curve, nodded once and walked away, which I later learnt was the highest praise he gave anyone.',
            'Once I had grasped this, the work changed character entirely. Instead of forcing my tools through the timber, I found myself studying each piece before I touched it, turning it in the light and running my fingers along it to feel which way the fibres lay. It was slow, and at first it felt absurdly inefficient.',
          ],
          items: [
            { a: 4, why: 'E explains what the writer "was really after" in answer to "some kind of crisis", and its "nothing to show for it" is echoed in the last paragraph.' },
            { a: 1, why: 'B’s "It sounded simple" refers to Ewan’s task of cutting a slot, and "I had no idea what he meant" leads to "several weeks before I began to understand".' },
            { a: 6, why: 'G’s "Once I had grasped this" refers to the grain, and "absurdly inefficient" leads to "Efficiency, in any case".' },
            { a: 0, why: 'A’s "The question" is Ewan’s question about what the hurry was.' },
            { a: 5, why: 'F’s "the piece that would hold everything else together" is the stem, to which all the planks are fastened.' },
            { a: 3, why: 'D’s "It did not" answers the writer’s fear that the boat would fill with water.' },
          ] },
      ] },
    { id: 'p8', ref: 'Part 8', title: 'Multiple matching',
      about: 'You are going to read an article in which four people describe changing career in mid-life. For each question, choose from the people A to D. The people may be chosen more than once.',
      texts: [
        { title: 'A  Nadia', md: `**A** Nadia, former solicitor, now a pastry chef

I didn't walk out of the law firm one Friday and into a kitchen on Monday. For nearly two years I took evening classes and spent my holidays working unpaid shifts in a bakery, so by the time I handed in my notice I had a fair idea of what I was letting myself in for, or so I thought. Nothing prepared me for the sheer physical toll of it: twelve hours on my feet, lifting sacks of flour, the heat of the ovens. For the first few months I went to bed at eight. I don't regret the move for a moment, but I won't pretend I've lost all affection for the law. Every so often I find myself missing the intellectual puzzle of a complicated case, the satisfaction of building an argument that holds together.` },
        { title: 'B  Paul', md: `**B** Paul, former accountant, now a secondary school teacher

The hardest part was money. My salary roughly halved, and we had to rethink the way we lived as a family: no more expensive holidays, a smaller car, far fewer meals out. It was a shock at first, though we've adapted surprisingly well. What I find energising about teaching is that no two days are alike. In accountancy I could predict my week down to the hour; now I walk into a classroom and genuinely don't know what will happen. If I have one regret, it's that I waited so long. I'd been toying with the idea since my late twenties and kept finding reasons to put it off. Looking back, I wasted a decade being comfortable rather than happy.` },
        { title: 'C  Rosa', md: `**C** Rosa, former journalist, now a beekeeper

I'd never planned to leave journalism. Then my newspaper closed with a week's notice, and a neighbour who kept bees asked whether I'd help him over the summer while I looked for work. I never went back. People assume the two jobs have nothing in common, but they're wrong: I still spend a great deal of time asking questions, checking facts and writing, now for the small newsletter I send to customers and for the talks I give at local schools. I'm well aware that I was fortunate. I had some savings and no children to support, and I know many people who would love to do something similar but simply couldn't take the risk. The first winter was lonely, I'll admit, but that passed.` },
        { title: 'D  Tomasz', md: `**D** Tomasz, former civil engineer, now a nurse

When I told my family and friends that I was going to retrain as a nurse at forty-three, the reaction was polite but not enthusiastic. My brother asked, only half joking, whether I'd thought it through, and my parents clearly expected me to give up within a year. I assumed that, as an engineer, I'd find the theory easy. In fact the coursework was far tougher than I'd imagined: the pharmacology in particular had me up late night after night. But the reward is immediate in a way engineering never was. A bridge takes years to build, and you rarely meet the people who use it. On a ward, you can see the difference you make to someone before the end of your shift.` },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Which person ...', opts: ['A', 'B', 'C', 'D'], items: [
          { q: 'prepared for the change gradually while still in their previous job?', a: 0,
            why: 'Nadia took evening classes and worked unpaid shifts for "nearly two years" before handing in her notice.' },
          { q: 'was surprised by how physically demanding the new work was?', a: 0,
            why: 'Nadia says "Nothing prepared me for the sheer physical toll of it".' },
          { q: 'was prompted to change by an event they had not expected?', a: 2,
            why: 'Rosa’s newspaper "closed with a week’s notice", and she had "never planned to leave journalism".' },
          { q: 'wishes they had made the change sooner?', a: 1,
            why: 'Paul says "If I have one regret, it’s that I waited so long".' },
          { q: 'met with some doubt from people close to them?', a: 3,
            why: 'Tomasz’s brother asked whether he had thought it through and his parents expected him to give up.' },
          { q: 'still makes use of skills from their earlier career?', a: 2,
            why: 'Rosa still spends time "asking questions, checking facts and writing".' },
          { q: 'had to change their spending habits?', a: 1,
            why: 'Paul’s salary halved and the family gave up expensive holidays, a bigger car and meals out.' },
          { q: 'found the studying involved in retraining harder than expected?', a: 3,
            why: 'Tomasz expected the theory to be easy, but "the coursework was far tougher than I’d imagined".' },
          { q: 'recognises that their circumstances made the change easier for them than for others?', a: 2,
            why: 'Rosa says she was "fortunate", with savings and no children, and that many others "couldn’t take the risk".' },
          { q: 'occasionally misses part of the work they used to do?', a: 0,
            why: 'Nadia sometimes misses "the intellectual puzzle of a complicated case".' },
        ] },
      ] },
  ],
};
