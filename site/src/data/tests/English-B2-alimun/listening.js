// Alimun test, English B2: Listening. Draft for native-teacher review.
export const PAPER = {
  id: 'listening', title: 'Listening', minutes: 30,
  parts: [
    {
      id: 'p1', ref: 'Part 1', title: 'Changing direction',
      about: 'You will hear five people talking about why they changed jobs. Choose from the list what each person says. There is one extra statement which you do not need to use. You will hear the recording twice.',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Grace', s: 'I’d been in hotel management for nearly fifteen years, and I was good at it. But the hours were brutal. I worked every Christmas, every New Year, and I missed my daughter’s school concerts year after year. When she told me she’d stopped inviting me because I never came, that was it. I handed in my notice the following week. I earn a bit less as an office manager now, but I’m home by six.' },
          { who: 'Kofi', s: 'People always assume I left the bank because of stress, but honestly, I quite enjoyed the pressure. The problem was that I’d stopped learning anything. I could do the job with my eyes closed, and I was bored out of my mind. Now I’m training as a paramedic, and every single shift teaches me something new. It’s exhausting, but I’ve never felt more awake.' },
          { who: 'Elena', s: 'My old company was taken over by a much bigger firm, and almost overnight the atmosphere changed. My manager, who’d been brilliant, was replaced by someone who only cared about numbers. Half my team left within six months. I hung on for a while, hoping things would improve, but they didn’t, so in the end I followed them. I work for a small charity now, and I really like the people.' },
          { who: 'Raj', s: 'I never meant to change careers at all. I started baking bread at weekends just to relax, and a friend who runs a café asked if she could sell some. Then another café asked, and then a third. After about a year I was making more from bread than from my day job as an accountant, so the decision more or less made itself.' },
          { who: 'Margaret', s: 'I was a journalist for twenty years, and I loved it. But the newspaper I worked for was losing money, and every few months there was another round of job cuts. I was lucky to keep my job for as long as I did. When they finally offered me redundancy, I took it and retrained as a teacher. I didn’t really choose to leave, but I don’t regret where I’ve ended up.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', h: 'What does each person say? Choose a statement for each speaker.', opts: [
          'I left because work was taking me away from my family.',
          'I needed a new challenge.',
          'I didn’t like the changes after a new owner arrived.',
          'A hobby gradually turned into a business.',
          'My job was no longer secure.',
          'I wanted to earn more money.',
        ], items: [
          { q: 'Grace', a: 0, why: 'Grace missed Christmas and her daughter’s concerts; she left when her daughter stopped inviting her.' },
          { q: 'Kofi', a: 1, why: 'Kofi says he “had stopped learning anything” and was bored, and now every shift teaches him something new.' },
          { q: 'Elena', a: 2, why: 'Her company “was taken over by a much bigger firm”, and the atmosphere and her manager changed.' },
          { q: 'Raj', a: 3, why: 'Raj baked bread at weekends to relax, and cafés started buying it until it paid more than his job.' },
          { q: 'Margaret', a: 4, why: 'Her newspaper was losing money, there were job cuts, and in the end she was offered redundancy.' },
        ] },
      ],
    },
    {
      id: 'p2', ref: 'Part 2', title: 'Gardens on the roof',
      about: 'You will hear a talk about rooftop gardens. Complete the sentences with a word or a short phrase. You will hear the recording twice.',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Amira', s: 'Good evening, everyone. I’m Amira, and for the last six years I’ve been helping people turn empty roofs in the city into gardens. I’d like to tell you a little about why it matters, and how you can get involved.' },
          { who: 'Amira', s: 'When we started, our first garden was on top of a car park, of all places. People thought we were mad, but within a year it was producing vegetables for a nearby primary school. That’s still the project I’m proudest of.' },
          { who: 'Amira', s: 'The benefits go well beyond food. A green roof acts like a blanket. In winter it keeps heat in, and in summer it can keep the floor below up to four degrees cooler, which makes a real difference in a heatwave. Plants also soak up rainwater, so less of it rushes into the drains during a storm.' },
          { who: 'Amira', s: 'Now, the question everyone asks is: can any roof hold a garden? The answer, unfortunately, is no. Soil is surprisingly heavy, especially when it’s wet, so before we do anything, we always ask an engineer to check the building. That’s the one step you should never skip.' },
          { who: 'Amira', s: 'Most of our gardens are looked after by volunteers. Some come every week, some come twice a year. What surprised me most was how many of them told me that the best thing wasn’t the gardening at all. It was meeting their neighbours, many of whom they’d never spoken to before.' },
          { who: 'Amira', s: 'If you’d like to start something on your own building, my advice is to begin small. A few large containers of herbs are much easier to manage than a whole roof, and they’ll show you whether people are really interested.' },
          { who: 'Amira', s: 'We run free workshops on the first Monday of every month at the central library. Do come along. And thank you for listening.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Complete the sentences.',
          text: 'Amira’s first rooftop garden was built on a {}.\n\nThe vegetables from that garden went to a local {}.\n\nIn summer, a green roof can make the floor below up to {} degrees cooler.\n\nBecause plants absorb rainwater, less water goes into the {} during storms.\n\nBefore starting a garden, it is essential to get an {} to check the building.\n\nMany volunteers said the best part was meeting their {}.\n\nAmira suggests beginning with a few containers of {}.',
          items: [
            { a: ['car park', 'carpark'], why: 'She says “our first garden was on top of a car park”.' },
            { a: ['primary school', 'school'], why: 'It produced “vegetables for a nearby primary school”.' },
            { a: ['four', '4'], why: 'It “can keep the floor below up to four degrees cooler”.' },
            { a: ['drains', 'drain'], why: 'Plants soak up rainwater, “so less of it rushes into the drains”.' },
            { a: ['engineer'], why: '“We always ask an engineer to check the building. That’s the one step you should never skip.”' },
            { a: ['neighbours', 'neighbors'], why: 'Volunteers said the best thing “was meeting their neighbours”.' },
            { a: ['herbs'], why: 'She advises starting with “a few large containers of herbs”.' },
          ] },
      ],
    },
    {
      id: 'p3', ref: 'Part 3', title: 'The house on Ferry Lane',
      about: 'You will hear an interview with a man who researches the history of old houses. For each question, choose the answer which fits best. You will hear the recording twice.',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Interviewer', s: 'My guest today is Joseph Hale, who spends his working life uncovering the histories of ordinary houses. Joseph, how did you get into this?' },
          { who: 'Joseph', s: 'Completely by accident. About ten years ago my wife and I bought an old house, and while we were replacing the kitchen floor, we found a bundle of letters under the boards. They’d been written in the 1920s by a young woman to her sister. I couldn’t stop wondering who she was, and I suppose I’ve been asking that kind of question ever since.' },
          { who: 'Interviewer', s: 'And did you find out who she was?' },
          { who: 'Joseph', s: 'Eventually, yes. It took me nearly two years, mostly because I was looking in the wrong place. I assumed she’d owned the house, but she hadn’t. She’d been a lodger, renting a single room. Once I realised that, the records started to make sense.' },
          { who: 'Interviewer', s: 'You’ve just finished working on a house on Ferry Lane, which has quite a story attached to it.' },
          { who: 'Joseph', s: 'It does. The owners called me because they’d found a locked room in the cellar that wasn’t on any of the plans. Naturally, they were imagining all kinds of things: smugglers, hidden treasure. And to be fair, the house is right by the river, so smuggling wasn’t a ridiculous idea.' },
          { who: 'Interviewer', s: 'So what was in it?' },
          { who: 'Joseph', s: 'Shelves. Hundreds of empty glass bottles. At first I thought someone must have been making something illegal down there. But then I found an old advertisement in a local newspaper, and it turned out that a chemist had lived in the house in the 1880s. He’d been making his own medicines in the cellar and selling them from the front room. Rather less exciting than treasure, perhaps, but the owners were thrilled.' },
          { who: 'Interviewer', s: 'What would you say to listeners who want to research their own homes?' },
          { who: 'Joseph', s: 'Start with the people, not the building. Old maps and plans will tell you when a house was built, but census records and newspapers tell you who lived there and what their lives were like. That’s where the real stories are. And be patient. Most of what you find will be dull, and then suddenly one small detail changes everything.' },
          { who: 'Interviewer', s: 'Do you ever worry that you’re intruding into people’s private lives?' },
          { who: 'Joseph', s: 'I do think about it. These were real people, and they never expected anyone to read their letters. So I try to tell their stories with respect, and if I find something that might upset living relatives, I talk to them first. Some things are better left alone.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
          { q: 'How did Joseph become interested in the history of houses?', o: ['He found something hidden in his own home.', 'He was asked to research a friend’s house.', 'He studied history at university.', 'He inherited some old letters from his family.'], why: 'While replacing the kitchen floor in his own house, he found letters under the boards.' },
          { q: 'Why did it take Joseph so long to identify the letter writer?', o: ['He had made a wrong assumption about her.', 'The records from that time were lost.', 'The letters were not signed.', 'Her sister refused to talk to him.'], why: 'He “assumed she’d owned the house, but she hadn’t”: she was a lodger.' },
          { q: 'Why did the owners of the Ferry Lane house contact Joseph?', o: ['They had discovered a room they knew nothing about.', 'They wanted to sell the house.', 'They had found some old bottles.', 'They believed smugglers had lived there.'], why: 'They found “a locked room in the cellar that wasn’t on any of the plans”.' },
          { q: 'What does Joseph say about the smuggling theory?', o: ['It was understandable because of where the house is.', 'It was completely unrealistic.', 'It turned out to be correct.', 'It came from an old newspaper.'], why: 'He says the house is right by the river, “so smuggling wasn’t a ridiculous idea”.' },
          { q: 'What was the room in the cellar used for?', o: ['Producing medicines', 'Hiding goods brought from the river', 'Storing wine', 'Making illegal drink'], why: 'A chemist “had been making his own medicines in the cellar”; something illegal was only Joseph’s first guess.' },
          { q: 'How did the owners react to the discovery?', o: ['They were delighted.', 'They were disappointed.', 'They did not believe it.', 'They wanted to keep it secret.'], why: 'Joseph says it was less exciting than treasure, “but the owners were thrilled”.' },
          { q: 'What is Joseph’s main advice to people researching their homes?', o: ['Focus on the people who lived there.', 'Begin by looking at old maps.', 'Ask a professional for help.', 'Look for hidden rooms and objects.'], why: 'He says “Start with the people, not the building.”' },
          { q: 'What does Joseph do if he finds information that could hurt someone?', o: ['He speaks to the family before using it.', 'He never publishes it.', 'He changes the people’s names.', 'He gives the letters back to the family.'], why: 'He says “if I find something that might upset living relatives, I talk to them first”.' },
        ] },
      ],
    },
  ],
};
