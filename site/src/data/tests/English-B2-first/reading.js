// Practice test in the format of B2 First: Reading and Use of English. Original Alimun text, not official material. Draft for native-teacher review.
export const PAPER = {
  id: 'reading', title: 'Reading and Use of English', minutes: 75,
  parts: [
    {
      id: 'p1', ref: 'Part 1', title: 'Multiple-choice cloze',
      about: 'Read the text below and decide which answer best fits each gap.',
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Choose the word or phrase that best fits each gap.',
          text: '**Fixing things together**\n\nOn the first Saturday of every month, the hall behind our local library is {} with people carrying broken lamps, torn jackets and toasters that no longer work. They have come to the repair café, an event where volunteers help visitors mend their own belongings instead of throwing them away.\n\nThe idea is simple, but it has {} surprisingly popular. Organisers say that many visitors arrive expecting someone else to do the work for them. Instead, they are {} to sit down beside a volunteer and take part in the repair. ‘People are often nervous at first,’ explains one of the regular helpers, a retired electrician. ‘But once they {} sense of how a machine works, they lose their fear of it.’\n\nNot every repair is successful, of course. Some items are simply beyond {}, and occasionally a spare part is impossible to {}. Even then, visitors rarely leave disappointed. Many stay for a cup of tea and a chat, and the café has {} become a meeting place for neighbours who might otherwise never have spoken to each other.\n\nFor the organisers, this social side is just as important as the repairs themselves. As one of them puts it, ‘We fix kettles, but we also {} people together.’',
          items: [
            { o: ['packed', 'loaded', 'stuffed', 'heaped'], why: 'A place full of people is *packed with* people; the other words are used for objects, not crowds.' },
            { o: ['proved', 'resulted', 'achieved', 'succeeded'], why: '*Prove* can be followed directly by an adjective (*proved popular*); the others cannot.' },
            { o: ['encouraged', 'suggested', 'insisted', 'recommended'], why: 'Only *encourage* works in the passive with *to* + infinitive: *they are encouraged to sit down*.' },
            { o: ['make', 'take', 'get', 'do'], why: 'The fixed expression is *make sense of* something, meaning to understand it.' },
            { o: ['repair', 'use', 'damage', 'return'], why: '*Beyond repair* is a fixed phrase for something too badly broken to mend.' },
            { o: ['get hold of', 'take hold of', 'catch hold of', 'keep hold of'], why: '*Get hold of* means to find or obtain something, which is what you do with a spare part.' },
            { o: ['gradually', 'slightly', 'shortly', 'barely'], why: 'The café changed slowly over time, so *gradually become* fits; *slightly* and *barely* do not go with *become a meeting place*.' },
            { o: ['bring', 'set', 'carry', 'lead'], why: 'The phrasal verb is *bring people together*, meaning to help them meet and connect.' },
          ] },
      ],
    },
    {
      id: 'p2', ref: 'Part 2', title: 'Open cloze',
      about: 'Read the text below and think of the word which best fits each gap. Use only one word in each gap.',
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Write one word in each gap.',
          text: '**Why smells bring back memories**\n\nMost of us have had the experience of walking past a bakery or a garden and suddenly being reminded {} a moment from our childhood. Scientists have long been interested in why smells bring back memories so powerfully, and {} they have found is fascinating.\n\nUnlike sight and hearing, smell has a direct route to the parts of the brain {} deal with emotion and memory. This may explain why a smell can make us feel happy or sad {} we have even worked out what it is.\n\nResearchers have also discovered that memories linked to smells tend to come from early in life. Most people’s strongest smell memories date back to their first ten years, {} memories triggered by words or pictures are more likely to come from our teens and twenties.\n\n{} this, our sense of smell is often taken for granted. Many people say it is the sense they would least mind losing. Yet those {} have lost it, sometimes after an illness, often describe feeling cut off from the world. Food loses much of its flavour, and some even find it harder to feel close to the people they love. It is only when it is gone, it seems, that we realise how much it {} been doing for us all along.',
          items: [
            { a: ['of'], why: 'The verb pattern is *remind somebody of something*.' },
            { a: ['what'], why: '*What they have found* means “the thing that they have found” and is the subject of *is fascinating*.' },
            { a: ['that', 'which'], why: 'A relative pronoun is needed to connect *the parts of the brain* to *deal with emotion and memory*.' },
            { a: ['before'], why: 'The feeling comes first and the understanding later: *before we have even worked out what it is*.' },
            { a: ['whereas', 'while', 'whilst', 'but'], why: 'The sentence contrasts smell memories with memories triggered by words or pictures.' },
            { a: ['despite'], why: 'The surprising contrast with everything said before needs *Despite this*; *In spite of* would need two words.' },
            { a: ['who'], why: '*Those who* means “the people who” and refers back to people who have lost their sense of smell.' },
            { a: ['has'], why: 'The present perfect continuous, *has been doing*, describes something that has continued up to now.' },
          ] },
      ],
    },
    {
      id: 'p3', ref: 'Part 3', title: 'Word formation',
      about: 'Read the text below. Use the word given in capitals to form a word that fits in the gap.',
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Write the right form of the word in capitals.',
          text: '**A desk in the countryside**\n\nWhen Elena opened a shared office in the small town where she grew up, few people believed it would be a {}. Most young people had moved away to find work, and her {} to rent the old post office surprised even her closest friends. The building needed {} work, and for the first few months she wondered whether she had made a mistake.\n\n{}, the first people to sign up were not locals but city workers looking for a {} place to spend a few days each week. For them, the {} to work away from a crowded office was the main attraction, although they quickly discovered other benefits too, such as cheaper rents and clean air.\n\nToday the office has a waiting list, and {} has more than doubled in two years. Elena admits that the internet connection can still be {}, but none of her members seem to mind.',
          items: [
            { base: 'SUCCEED', a: ['success'], why: 'After *a* we need a noun: *succeed → success*.' },
            { base: 'DECIDE', a: ['decision'], why: 'After *her* we need a noun: *decide → decision*.' },
            { base: 'CONSIDER', a: ['considerable'], why: 'An adjective meaning “a lot of” is needed before the noun *work*: *considerable*.' },
            { base: 'SURPRISE', a: ['surprisingly'], why: 'An adverb at the start of the sentence comments on the whole idea: *surprisingly*.' },
            { base: 'PEACE', a: ['peaceful'], why: 'An adjective is needed before *place*: *peace → peaceful*.' },
            { base: 'FREE', a: ['freedom'], why: 'After *the* we need a noun: *free → freedom*.' },
            { base: 'MEMBER', a: ['membership'], why: 'The noun for the number of people who belong to the office is *membership*, and it is singular with *has*.' },
            { base: 'RELY', a: ['unreliable'], why: 'The word *but* and *still* show a problem, so the negative adjective *unreliable* is needed.' },
          ] },
      ],
    },
    {
      id: 'p4', ref: 'Part 4', title: 'Key word transformation',
      about: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
      blocks: [
        { t: 'ex', kind: 'transform', h: 'Complete the second sentence using the word given. Use between two and five words.', items: [
          { q: 'I haven’t been to the cinema for over a year.', cue: 'LAST', gap: 'The ___ to the cinema was over a year ago.', a: ['last time I went', 'last time that I went'], why: '*I haven’t been for a year* becomes *The last time I went ... was a year ago*, with the past simple.' },
          { q: 'We couldn’t stay at the hotel because it was so expensive.', cue: 'TOO', gap: 'The hotel was ___ to stay at.', a: ['too expensive for us', 'far too expensive for us', 'much too expensive for us', 'way too expensive for us'], why: '*So expensive that we couldn’t* becomes *too expensive for us to*.' },
          { q: '‘Why don’t we take the earlier train?’ said Anna.', cue: 'SUGGESTED', gap: 'Anna ___ the earlier train.', a: ['suggested taking', 'suggested that we take', 'suggested we take', 'suggested that we should take', 'suggested we should take', 'suggested that we took', 'suggested we took', 'suggested catching', 'suggested getting'], why: '*Why don’t we...?* is a suggestion: *suggest* + -ing, or *suggest (that) we (should) take*.' },
          { q: 'The concert was cancelled because of the storm.', cue: 'CALLED', gap: 'They ___ because of the storm.', a: ['called off the concert', 'called the concert off'], why: '*Call off* is a phrasal verb meaning *cancel*; the object can go before or after *off*.' },
          { q: 'I regret not studying harder for the exam.', cue: 'WISH', gap: 'I ___ harder for the exam.', a: ['wish I had studied', 'wish I’d studied', 'wish that I had studied', 'wish that I’d studied', 'wish I had worked', 'wish I’d worked'], why: 'A regret about the past is expressed with *wish* + past perfect: *I wish I had studied*.' },
          { q: 'It’s possible that Sara forgot about the meeting.', cue: 'MAY', gap: 'Sara ___ about the meeting.', a: ['may have forgotten', 'may well have forgotten'], why: 'Possibility in the past is *may have* + past participle: *may have forgotten*.' },
        ] },
      ],
    },
    {
      id: 'p5', ref: 'Part 5', title: 'Multiple choice',
      about: 'You are going to read an article in which a student describes a summer job. Choose the answer which you think fits best according to the text.',
      text: { title: 'A night at the museum', md: 'When I applied for a summer job at the city’s natural history museum, I imagined myself at the information desk, handing out maps and pointing tourists towards the dinosaurs. I hadn’t read the advert carefully enough. The position, it turned out, was for an assistant on the museum’s sleepover programme, which meant spending two nights a week in the main hall with forty excited eight-year-olds and a skeleton the size of a bus.\n\nMy first reaction, if I’m honest, was to turn the offer down. I was studying biology, not education, and my experience with children was limited to a younger cousin who mostly ignored me. But the pay was better than anything else I had been offered, and my flatmate pointed out, not unkindly, that I had complained for months about never doing anything unusual. I accepted the next morning before I could change my mind.\n\nThe training was shorter than I’d expected. Over two afternoons, Helen, the programme manager, walked us through the evening’s timetable: a torchlit tour of the galleries, a hands-on session with fossils, a story, and then lights out at ten. ‘The timetable is the easy part,’ she told us. ‘The hard part is the hour after lights out.’ I assumed she meant that the children would be noisy. What she actually meant, as I discovered on my first night, was that some of them would be frightened.\n\nIt hadn’t occurred to me that a museum at night could be a scary place. To me, the animals in the glass cases were simply specimens, carefully preserved examples of species I had read about in textbooks. To a child lying in a sleeping bag in the dark, they were something else entirely. Shortly after eleven, a small boy appeared beside my camp bed and whispered that the bear in the corner had moved. I told him, quite truthfully, that it had been standing in exactly the same position for nearly a century. This did not help.\n\nWhat did help, in the end, was something I hadn’t planned. I took him over to the case with my torch and started telling him what I knew about bears: how far they can smell, what they eat before winter, why their claws are curved. I must have talked for twenty minutes. By the time I’d finished, he was no longer scared of the bear; he was fascinated by it, and he wanted to know whether the wolf in the next case had a name. Several other children had quietly joined us by then. Nobody slept much that night, including me, but I went home the next morning feeling that I had done something genuinely useful.\n\nFrom then on, the hour after lights out became my favourite part of the job. I started preparing for it, reading up on the animals that seemed to worry the children most and thinking about how to explain things in a way that an eight-year-old would find interesting rather than dull. I learnt more about the museum’s collection that summer than I had in two years at university, partly because I had to answer questions I would never have thought to ask myself.\n\nI still study biology, but I’ve changed direction slightly. Next year I’ll be doing a placement in the museum’s education department, and I’ve started to think that a career explaining science might suit me better than one spent in a laboratory. When people ask what made me change my mind, I usually tell them about the bear. It never moved, of course. But in a way, it moved me.' },
      blocks: [
        { t: 'ex', kind: 'choice', h: 'Choose the answer which fits best according to the text.', items: [
          { q: 'What does the writer say about her application for the job?', o: ['She had misunderstood what the job involved.', 'She had hoped to work with the dinosaur collection.', 'She was unsure whether she was qualified for it.', 'She had applied for several positions at the museum.'], why: 'She imagined working at the information desk but admits “I hadn’t read the advert carefully enough”.' },
          { q: 'Why did the writer decide to accept the job?', o: ['It paid well and was a chance to do something different.', 'Her flatmate had done similar work and enjoyed it.', 'She thought it would be useful for her biology degree.', 'She had not been offered any other work that summer.'], why: 'The pay “was better than anything else” and her flatmate reminded her she wanted to do “anything unusual”.' },
          { q: 'What did Helen mean when she talked about “the hard part”?', o: ['Some children would find the museum frightening at night.', 'The children would make too much noise to sleep.', 'The staff would find it difficult to stay awake.', 'The timetable would be difficult to keep to.'], why: 'The writer says “What she actually meant ... was that some of them would be frightened.”' },
          { q: 'What does the writer suggest about her first reply to the boy?', o: ['It was accurate but did not make him feel any better.', 'It was not entirely true.', 'It made him curious to learn more about the bear.', 'It woke up several of the other children.'], why: 'She told him “quite truthfully” that the bear had not moved, but adds “This did not help.”' },
          { q: 'What changed the boy’s feelings about the bear?', o: ['hearing interesting facts about the animal', 'seeing the bear close up in the torchlight', 'being joined by some of the other children', 'listening to a story the writer had prepared'], why: 'After she told him “how far they can smell, what they eat before winter”, he was “no longer scared ... he was fascinated”.' },
          { q: 'Why does the writer say she learnt so much about the collection that summer?', o: ['The children asked her things she had not thought about.', 'Her university course covered the same material.', 'Helen gave her extra training on the animals.', 'She spent her free time exploring the galleries.'], why: 'She learnt more “partly because I had to answer questions I would never have thought to ask myself”.' },
        ] },
      ],
    },
    {
      id: 'p6', ref: 'Part 6', title: 'Gapped text',
      about: 'You are going to read an article about a group of volunteers. Six sentences have been removed from the article. Choose from the sentences A to G the one which fits each gap. There is one extra sentence which you do not need to use.',
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Choose the sentence which fits each gap.',
          text: '**Counting the city’s trees**\n\nOn a grey Sunday morning, a dozen people in waterproof jackets are standing around a large plane tree at the edge of a car park, measuring tapes in hand. They are not scientists, at least not professionally. Among them are a bus driver, two retired teachers and a teenager who has come along with her grandfather. They are all volunteers on a project to record every street tree in the city. {}\n\nThe project was started four years ago by Owen, a landscape gardener who had become frustrated by how little anyone seemed to know about the trees he passed on his way to work. ‘I’d ask the council how many trees there were in my neighbourhood, and nobody could tell me,’ he says. {} So he decided to find out for himself, beginning with the twenty or so trees on his own street. He bought a tape measure and a second-hand guidebook, and spent his evenings that spring walking slowly up and down the road, notebook in hand, while his neighbours watched from their windows with some amusement.\n\nWhat began as a personal hobby soon attracted attention. A neighbour asked if she could help, then a few of her friends. {} Volunteers now meet every weekend, and they have so far recorded more than eleven thousand trees, noting each one’s species, height and condition on a simple map that anyone can view online.\n\nThe work is slower than you might imagine. Identifying a tree in winter, when it has no leaves, can take a long time, and the group often argues good-naturedly over a particular specimen. {} ‘That’s half the fun,’ says Bethan, one of the retired teachers. ‘I’ve learnt more about trees in two years than I did in the previous sixty.’\n\nThe information they collect is not just of interest to tree lovers. The council, which once had no answer to Owen’s questions, now uses the group’s map when deciding where to plant new trees. {} Planners have also used it to identify streets where older trees are likely to need replacing in the next decade, allowing them to plan ahead rather than reacting when a tree falls down.\n\nFor the volunteers themselves, however, the benefits are more personal. Several say the project has changed the way they see their surroundings. {} Others mention the friendships they have made, and the simple pleasure of spending a morning outdoors with a purpose.\n\nAs the group finishes with the plane tree and moves on down the road, Owen looks pleased. There are still parts of the city they haven’t reached, and he estimates the job will take at least another three years. He doesn’t seem to mind in the slightest.',
          opts: [
            'Within a year, the group had grown to over fifty people.',
            'The map has shown, for example, that the areas with the fewest trees are often the ones that get hottest in summer.',
            'By the time they finish, they hope to have created the most complete picture of the city’s trees ever made.',
            'Unfortunately, the council has refused to give the project any financial support.',
            'One volunteer says he can no longer walk down a street without noticing which trees are struggling.',
            'It seemed strange to me that something so important to people’s lives had never been properly counted.',
            'When they cannot agree, they take photographs and send them to a specialist at the local university.',
          ],
          items: [
            { a: 2, why: '*They hope to have created ... picture of the city’s trees* follows the description of the project to record every street tree.' },
            { a: 5, why: 'Owen continues explaining why nobody knowing the number of trees bothered him, and *So he decided to find out* follows naturally.' },
            { a: 0, why: 'The group growing to fifty follows the neighbour and her friends joining, and leads to *Volunteers now meet every weekend*.' },
            { a: 6, why: '*When they cannot agree* refers back to the group arguing over a specimen, and *That’s half the fun* reacts to it.' },
            { a: 1, why: 'The example about hot areas explains how the map helps the council decide where to plant, and *also used it* refers back to the map.' },
            { a: 4, why: 'Noticing struggling trees is an example of the project changing *the way they see their surroundings*.' },
          ] },
      ],
    },
    {
      id: 'p7', ref: 'Part 7', title: 'Multiple matching',
      about: 'You are going to read an article in which four people talk about changing career. Choose from the people A to D. The people may be chosen more than once.',
      texts: [
        { title: 'Sofia', md: '**A** I spent eleven years as an accountant, and I wasn’t unhappy, exactly. The work was steady and my colleagues were pleasant. What changed things was a chair. I bought an old one at a market for almost nothing and spent a whole winter of weekends bringing it back to life. When I finished, I realised I’d been looking forward to Saturdays in a way I never looked forward to Mondays. I didn’t resign immediately; I took an evening course in furniture restoration first and only left my job once I had a few paying customers. The biggest surprise has been how physically tiring the work is. I used to think a long day was one spent in meetings. Now I come home with aching shoulders and sore hands. My income is lower than it was, and some months are frightening, but I wouldn’t swap back.' },
        { title: 'Gareth', md: '**B** I’d worked in IT support for nearly ten years when my father became ill and spent several weeks in hospital. I visited every day, and I found myself watching the nurses and thinking that what they did really mattered, in a way that resetting people’s passwords didn’t. Retraining as a nurse meant three years at university at the age of thirty-four, sitting in lectures with people who were barely out of school. I’d expected to feel out of place, but they treated me like anyone else, and some of them even came to me for help with their essays. The hardest part was money: I had to sell my car and move into a much smaller flat to pay my way through the course. Friends sometimes ask if I miss my old job. Honestly, I don’t, not for a moment.' },
        { title: 'Priya', md: '**C** People assume I left law because I was exhausted, but that isn’t really true. I enjoyed the work; I just felt I’d learnt everything it could teach me. I’d always loved the history of my city, and I’d been showing friends around for years, so becoming a tour guide felt like a natural step rather than a leap. Even so, I underestimated how much I’d have to learn. Knowing interesting stories is one thing; telling them to thirty strangers in the rain, and keeping them interested, is quite another. My legal training has helped more than I expected, actually. Lawyers have to explain complicated things clearly and think on their feet, and that’s exactly what guiding demands. My parents were horrified when I told them, I should add. My mother still introduces me as ‘a former lawyer’.' },
        { title: 'Callum', md: '**D** I was a chef for twelve years, and by the end the late nights were wearing me down. I wanted to be at home in the evenings with my children, and that simply isn’t possible in a restaurant kitchen. I taught myself to code at the kitchen table, mostly between midnight and two in the morning, using free courses online. It took nearly two years before anyone would employ me as a developer. What I hadn’t expected was how alike the two jobs are. A busy kitchen and a software team both depend on everyone doing their part at exactly the right moment, and when something goes wrong you have to stay calm and fix it fast. I do sometimes miss the creativity of cooking, but I make up for it at weekends, when I cook far too much food for my family.' },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Which person ...', opts: ['A Sofia', 'B Gareth', 'C Priya', 'D Callum'], items: [
          { q: 'was inspired by watching other people at work?', a: 1, why: 'Gareth watched the nurses while his father was in hospital and felt “what they did really mattered”.' },
          { q: 'waited until they had some customers before leaving their previous job?', a: 0, why: 'Sofia “only left my job once I had a few paying customers”.' },
          { q: 'says that their earlier professional training has been an advantage?', a: 2, why: 'Priya says “My legal training has helped more than I expected”.' },
          { q: 'did not expect the new job to be so hard on the body?', a: 0, why: 'Sofia says “The biggest surprise has been how physically tiring the work is”.' },
          { q: 'was wrong to think they would not fit in with other people?', a: 1, why: 'Gareth “expected to feel out of place, but they treated me like anyone else”.' },
          { q: 'changed career mainly in order to spend more time with their family?', a: 3, why: 'Callum “wanted to be at home in the evenings with my children”.' },
          { q: 'had to make changes to the way they lived in order to afford retraining?', a: 1, why: 'Gareth “had to sell my car and move into a much smaller flat”.' },
          { q: 'rejects a common belief about why they changed career?', a: 2, why: 'Priya says “People assume I left law because I was exhausted, but that isn’t really true”.' },
          { q: 'mentions that family members did not approve of the change at first?', a: 2, why: 'Priya’s parents “were horrified” and her mother still calls her “a former lawyer”.' },
          { q: 'noticed that the old and new workplaces depend on similar teamwork?', a: 3, why: 'Callum says a busy kitchen and a software team “both depend on everyone doing their part at exactly the right moment”.' },
        ] },
      ],
    },
  ],
};
