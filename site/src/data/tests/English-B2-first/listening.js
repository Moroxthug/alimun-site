// Practice test in the format of B2 First: Listening. Original Alimun scripts, not official material. Draft for native-teacher review.
export const PAPER = {
  id: 'listening', title: 'Listening', minutes: 40,
  parts: [
    {
      id: 'p1', ref: 'Part 1', title: 'Short extracts',
      about: 'You will hear people talking in eight different situations. Choose the best answer. You will hear each extract twice.',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Tom', s: 'So how was the pottery course in the end? You were a bit unsure about it when you signed up.' },
          { who: 'Sara', s: 'I was, wasn’t I? Honestly, I loved it. I mean, my bowls are still a bit wonky, and I don’t think I’ll be selling them any time soon. And I thought I’d make lots of new friends, but people mostly kept to themselves. What really made it, though, was the tutor. She never just showed us how to do something. She’d let us try, get it wrong, and then ask us what we thought had happened. It was slow at first, but by the end I actually understood what I was doing.' },
        ] },
        { lines: [
          { who: 'David', s: 'Hi Joanna, it’s David. I’ve just seen your message about tomorrow’s meeting with the suppliers. Ten o’clock is absolutely fine for me, so no need to move it. The thing is, I’ve looked everywhere and I can’t find the latest version of the price list. I’ve got the one from March, but I know they changed a few things after that. Could you send it over tonight if you get a chance? I’d like to go through it properly before we see them. Thanks, and see you in the morning.' },
        ] },
        { lines: [
          { who: 'Leila', s: 'Well, that was long. Nearly three hours! I kept looking at my watch.' },
          { who: 'Ben', s: 'I know, they could easily have cut half an hour. But I didn’t mind the length so much. It was the ending that let it down for me. All that build-up and then it just sort of stopped.' },
          { who: 'Leila', s: 'Really? I thought the ending was the best bit. It left you thinking. No, what I didn’t like was the main actor. He looked bored the whole time.' },
          { who: 'Ben', s: 'Hm, maybe. Still, you can’t deny the music was amazing.' },
          { who: 'Leila', s: 'Oh, absolutely. I’m going to download the soundtrack tonight.' },
        ] },
        { lines: [
          { who: 'Hannah', s: 'Since the office moved to the other side of town, I’ve had to give up cycling to work, which I was really sad about at first. It’s just too far, and the roads out there are dangerous. So now I get the train, and I was dreading it, to be honest, all those crowds. But actually, it’s turned out to be quite a nice part of my day. I get a seat most mornings, and I’ve read more books in the last two months than in the whole of last year. I do miss the exercise, though, so I’ve joined a gym.' },
        ] },
        { lines: [
          { who: 'James', s: 'Right, everyone, if I could just have your attention for a moment. As some of you know, we were meant to be taking the boat across to the island this afternoon. Unfortunately, the wind’s picked up quite a lot, and the captain’s just told me it isn’t safe to sail today. So, instead, we’re going to visit the old fishing village further along the coast, which is lovely, and we’ll do the island trip tomorrow morning, weather permitting. The coach will leave from here at two, so you’ve got time for lunch first.' },
        ] },
        { lines: [
          { who: 'Liam', s: 'So, do you think the essay’s all right? I spent ages on it.' },
          { who: 'Margaret', s: 'You can tell. There’s a lot of good research here, Liam, and your conclusion is very clear. My main concern is with the middle section. You’ve got four or five really interesting points, but you jump from one to the next without explaining how they connect. A reader could easily get lost. I wouldn’t add anything new. I’d spend some time on the links between the ideas you already have. That alone would make a big difference to your mark.' },
          { who: 'Liam', s: 'OK, that makes sense. I’ll have a go this weekend.' },
        ] },
        { lines: [
          { who: 'Kofi', s: 'I took up photography about five years ago, mainly because I wanted to take better pictures on holiday. I spent a fortune on equipment at the beginning, lenses, a tripod, all that. Most of it I hardly use now. What I’ve realised is that the camera matters far less than learning to look. These days I go out with one small camera and just walk around my own neighbourhood, and I notice things I’d walked past for years without seeing, the light on a wall, an interesting face. It’s changed the way I see the place where I live.' },
        ] },
        { lines: [
          { who: 'Grace', s: 'Good morning. I’m here to talk about the community garden on Mill Lane. Now, a lot of you will have walked past it, but you might not know that it’s been there for nearly twenty years. Sadly, the land is going to be sold next spring, and unless we can raise enough money to buy it ourselves, it’ll be built on. So we’re holding a fundraising day on the twelfth, with plant sales, music and food. Please come along, bring your friends, and if you can’t make it, there’s a box at the library for donations.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'choice', rec: 0, h: 'You hear a woman telling a friend about a pottery course.', items: [
          { q: 'What did she like most about the course?', o: ['the way it was taught', 'the people she met there', 'the things she was able to make'], why: 'She says “What really made it, though, was the tutor” and describes how the tutor let them try and get things wrong.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 1, h: 'You hear a man leaving a voicemail message for a colleague.', items: [
          { q: 'Why is he calling?', o: ['to ask for a document', 'to change the time of a meeting', 'to say he cannot attend a meeting'], why: 'He says ten o’clock is fine and asks “Could you send it over tonight”, meaning the latest price list.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 2, h: 'You hear two friends talking about a film they have just seen.', items: [
          { q: 'What do they agree about?', o: ['The music was excellent.', 'The ending was disappointing.', 'The main actor was not convincing.'], why: 'Ben says “the music was amazing” and Leila answers “Oh, absolutely”; they disagree about the ending and the actor.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 3, h: 'You hear a woman talking about her journey to work.', items: [
          { q: 'How does she feel about travelling by train?', o: ['She enjoys it more than she expected to.', 'She finds it stressful because of the crowds.', 'She would prefer to go back to cycling.'], why: 'She “was dreading it” but says “it’s turned out to be quite a nice part of my day”.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 4, h: 'You hear a tour guide speaking to a group of tourists.', items: [
          { q: 'What is he doing?', o: ['explaining a change to the plans', 'recommending a place to have lunch', 'warning people about a dangerous area'], why: 'The boat trip is not safe today, so “instead, we’re going to visit the old fishing village”.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 5, h: 'You hear a tutor talking to a student about his essay.', items: [
          { q: 'What does the tutor advise him to do?', o: ['show more clearly how his ideas are connected', 'include some more points in the middle section', 'make his conclusion clearer'], why: 'She says “I wouldn’t add anything new. I’d spend some time on the links between the ideas”.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 6, h: 'You hear a man talking about his hobby.', items: [
          { q: 'What has he learnt from photography?', o: ['to pay more attention to his surroundings', 'that good equipment is worth paying for', 'that holidays are the best time to take pictures'], why: 'He says “the camera matters far less than learning to look” and he notices things in his neighbourhood he had never seen.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 7, h: 'You hear a woman speaking at a local meeting.', items: [
          { q: 'What is the main purpose of her talk?', o: ['to ask people to support a fundraising event', 'to explain the history of a garden', 'to complain about plans to build on some land'], why: 'She explains the land will be sold and asks people to “come along, bring your friends” to the fundraising day.' },
        ] },
      ],
    },
    {
      id: 'p2', ref: 'Part 2', title: 'Sentence completion',
      about: 'You will hear a woman called Clara talking about working as a volunteer on a small island. Complete the sentences with a word or short phrase. You will hear the recording twice.',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Clara', s: 'Hi everyone, and thanks for having me. My name’s Clara, and last summer I spent four months as a volunteer warden on a small island off the north coast, about forty minutes by boat from the nearest harbour. I’d like to tell you a bit about what that was like, in case any of you are thinking of doing something similar.' },
          { who: 'Clara', s: 'First of all, I should explain why I went. I’d just finished my degree in geography, and I wasn’t sure what I wanted to do next. A friend of mine had volunteered on the island the year before, and she said it had completely changed the way she thought about nature. So I applied, and to my surprise, I was accepted.' },
          { who: 'Clara', s: 'The island is home to around thirty thousand seabirds in the summer. The most famous are the puffins, which is what most visitors come to see, but there are also huge numbers of guillemots and razorbills, which nest on the cliffs. Our main job as volunteers was to count the birds. Every morning we’d go out to a particular section of the cliffs and record how many nests there were and how many chicks had hatched. It sounds simple, but when you’re looking at a cliff covered in thousands of identical birds, it really isn’t. It took me about two weeks before I could count with any confidence.' },
          { who: 'Clara', s: 'We also spent a lot of time with visitors. Day trips arrive on the island most afternoons, and we’d take people along the paths and answer their questions. The question I was asked most often, funnily enough, wasn’t about the birds at all. It was where the toilets were! But people were genuinely interested, and I loved seeing children’s faces the first time they saw a puffin up close.' },
          { who: 'Clara', s: 'Living conditions were fairly basic. There were six of us volunteers, and we shared an old stone cottage that used to belong to the lighthouse keeper. There was no internet, and our electricity came from solar panels, so we had to be careful in the evenings. Fresh food came over on the supply boat once a week, which meant planning meals very carefully. By the end of the week, we were usually living on pasta and tinned tomatoes.' },
          { who: 'Clara', s: 'The weather was the hardest thing to get used to. Even in July, it could be cold and windy, and on some days the sea was so rough that the boat couldn’t come at all. We were once cut off for nine days, and I’ll admit that was a real test of everyone’s patience.' },
          { who: 'Clara', s: 'But what I’ll remember most isn’t the difficulties. It’s the evenings, sitting on the cliff top, watching thousands of birds coming back from the sea to feed their chicks. There’s a sound they make, almost like distant laughter, that I can still hear if I close my eyes.' },
          { who: 'Clara', s: 'Since coming back, I’ve started a master’s course in conservation, which I’d never have considered before. If you’re interested in volunteering on the island yourselves, applications open in January, and I’d really recommend getting yours in early, because places go very quickly.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Complete each sentence with a word or short phrase from the recording.',
          text: 'Clara worked on the island for {} last summer.\n\nBefore going to the island, Clara had studied {} at university.\n\nClara heard about the island from a {} who had been a volunteer there.\n\nGuillemots and razorbills build their nests on the {}.\n\nClara says it took her about {} to count the birds confidently.\n\nVisitors most often asked Clara where the {} were.\n\nThe volunteers lived in a cottage that once belonged to the {}.\n\nThe volunteers’ electricity came from {}.\n\nBy the end of each week, the volunteers were mostly eating {} and tinned tomatoes.\n\nBecause of bad weather, the volunteers were once cut off for {}.',
          items: [
            { a: ['four months', '4 months'], why: 'Clara says “last summer I spent four months as a volunteer warden”; forty minutes is the boat journey.' },
            { a: ['geography'], why: 'She says “I’d just finished my degree in geography”.' },
            { a: ['friend'], why: 'She says “A friend of mine had volunteered on the island the year before”.' },
            { a: ['cliffs', 'cliff'], why: 'She mentions “guillemots and razorbills, which nest on the cliffs”.' },
            { a: ['two weeks', '2 weeks', 'a fortnight'], why: 'She says “It took me about two weeks before I could count with any confidence”.' },
            { a: ['toilets', 'toilet'], why: 'The most common question “wasn’t about the birds at all. It was where the toilets were”.' },
            { a: ['lighthouse keeper', 'lighthouse-keeper'], why: 'The cottage “used to belong to the lighthouse keeper”.' },
            { a: ['solar panels', 'solar power', 'solar energy'], why: 'She says “our electricity came from solar panels”.' },
            { a: ['pasta'], why: 'She says “we were usually living on pasta and tinned tomatoes”.' },
            { a: ['nine days', '9 days'], why: 'She says “We were once cut off for nine days”; July is when it could still be cold.' },
          ] },
      ],
    },
    {
      id: 'p3', ref: 'Part 3', title: 'Multiple matching',
      about: 'You will hear five short extracts in which people talk about learning a new skill as an adult. Choose from the list A to H what each speaker says. Use the letters only once. There are three extra letters which you do not need to use. You will hear the recording twice.',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Rosa', s: 'I started salsa classes last year, just after I turned forty. My daughter had been going for ages and kept telling me I’d love it. The hardest thing wasn’t learning the steps; it was walking into that room in the first place. Everyone else seemed so confident, and I was sure they’d all be laughing at me. For the first few weeks I stood right at the back and hardly dared to move. What finally helped was the teacher pairing me with a man who was even more nervous than I was. We ended up laughing about it together, and after that I stopped worrying about what anyone thought.' },
          { who: 'Kenji', s: 'I learnt sign language because my neighbour’s little boy is deaf, and I wanted to be able to chat to him properly when he came round to play with my kids. I went to classes once a week for about two years. I never imagined it would have anything to do with my job. I work in a bank. But last spring a customer came in who used sign language, and my manager found out I could help. Since then I’ve been asked to train other staff, and I’ve just been offered a new role looking after accessibility across all our branches. That was a real surprise.' },
          { who: 'Sophie', s: 'I never learnt to swim as a child. We just didn’t live anywhere near a pool, and it never really bothered me. But my friends were planning a sailing holiday, so in my thirties I signed up for adult lessons. The first few went well, but then one evening I panicked in the deep end and swallowed a lot of water. I was so shaken that I didn’t go back for over a month, and I honestly thought that was the end of it. It was my instructor who rang and persuaded me to give it another go, in the shallow end this time. Now I swim twice a week.' },
          { who: 'Marco', s: 'I joined the choir at work mainly because a colleague needed a few more men to make up the numbers. I’m not a great singer, and to be honest, after three years I still can’t really read music. But that’s never been the point for me. We meet every Thursday, and afterwards we all go for something to eat. I’ve got to know people from departments I’d never have spoken to otherwise, and some of them have become really close friends. If the choir stopped singing tomorrow and we just carried on meeting for dinner, I don’t think I’d mind at all.' },
          { who: 'Lina', s: 'I passed my driving test at forty-five, which isn’t something I ever planned to do. I’d always lived in cities and managed perfectly well with buses and trains. But then my brother made a joke at a family dinner about how I’d never be able to drive, and something in me just snapped. I booked lessons the next morning. It wasn’t quick. I failed my first test, but I kept going, mainly so I could see his face when I passed. I’ll admit I don’t actually drive very much now. But it was worth every lesson for that moment.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Choose from the list A to H what each speaker says.',
          opts: [
            'I wanted to show someone that they were wrong about me.',
            'Learning it helped me through a difficult time in my life.',
            'I made progress much more quickly than I had expected.',
            'The people I met mattered more to me than the activity itself.',
            'I had to overcome a fear of looking silly in front of others.',
            'It led to an opportunity I had not expected in my working life.',
            'A bad experience almost made me give up.',
            'I had always regretted not learning it when I was younger.',
          ],
          items: [
            { q: 'Speaker 1 (Rosa)', a: 4, why: 'Rosa “was sure they’d all be laughing at me” and later “stopped worrying about what anyone thought”.' },
            { q: 'Speaker 2 (Kenji)', a: 5, why: 'Kenji “never imagined it would have anything to do with my job” but has been offered a new role at the bank.' },
            { q: 'Speaker 3 (Sophie)', a: 6, why: 'After panicking in the deep end Sophie “honestly thought that was the end of it” until her instructor persuaded her.' },
            { q: 'Speaker 4 (Marco)', a: 3, why: 'Marco says singing has “never been the point” and he would not mind if they just met for dinner.' },
            { q: 'Speaker 5 (Lina)', a: 0, why: 'Lina started after her brother joked she would never drive, and kept going “so I could see his face when I passed”.' },
          ] },
      ],
    },
    {
      id: 'p4', ref: 'Part 4', title: 'Multiple choice',
      about: 'You will hear an interview with a woman called Mira, who runs a bookshop on a canal boat. Choose the best answer. You will hear the recording twice.',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Presenter', s: 'My guest today is Mira, who runs a rather unusual business: a bookshop on a canal boat. Mira, welcome.' },
          { who: 'Mira', s: 'Thanks for having me.' },
          { who: 'Presenter', s: 'So how did it all start? Had you always wanted to run a bookshop?' },
          { who: 'Mira', s: 'Not at all, actually. I worked in marketing for years, and I was quite good at it, but I’d started to feel that I spent all day selling things I didn’t care about. Then my aunt died and left me her old narrowboat. My first thought was to sell it, to be honest. But I spent a weekend on it, tidying up, and I found boxes and boxes of her books in the cabin. And I thought, well, what if I sold these instead? It was only meant to be a summer project. That was six years ago.' },
          { who: 'Presenter', s: 'And how does it work in practice? You don’t stay in one place?' },
          { who: 'Mira', s: 'No, that’s the whole point. I move along the canal, stopping for a few days in each town or village. The canal network here is quite extensive, so in a year I might visit thirty or forty places. People get to know my route, and some of them actually plan their weekends around when I’m going to be nearby, which is lovely.' },
          { who: 'Presenter', s: 'I imagine space is a problem.' },
          { who: 'Mira', s: 'It’s the biggest challenge, definitely. A narrowboat is only about two metres wide, so I can carry around two thousand books at any one time. That means I have to be really selective. I can’t stock everything, so I’ve learnt to choose books I genuinely love and can talk about. And oddly, I think customers prefer that. In a big shop you can feel overwhelmed. On the boat there’s less choice, but every book is there for a reason.' },
          { who: 'Presenter', s: 'Do you sell mostly new or second-hand books?' },
          { who: 'Mira', s: 'A mix. When I started it was all second-hand, my aunt’s collection and then things people gave me or sold to me. These days about half are new, often by writers from the areas I travel through. Local authors love it, because the big shops don’t always stock their work.' },
          { who: 'Presenter', s: 'What about the people you meet? Who are your customers?' },
          { who: 'Mira', s: 'Everyone, really. Walkers, families, people living on other boats. But the ones who’ve surprised me most are teenagers. I’d assumed they wouldn’t be interested. You know, everyone says young people don’t read any more. But they come on board, curious about the boat to begin with, and then they stay and browse for ages. Some of them have become regulars.' },
          { who: 'Presenter', s: 'Is it possible to make a living from it?' },
          { who: 'Mira', s: 'Just about. I won’t pretend it’s easy. I earn much less than I did in marketing, and the winter months are very quiet. A lot of people assume the weather is the main problem, but actually I can cope with a bit of rain. What really costs me is maintenance. Boats need constant repairs, and those bills can be frightening.' },
          { who: 'Presenter', s: 'Does your marketing background help at all?' },
          { who: 'Mira', s: 'More than I expected. I knew how to use social media to let people know where I’d be, and how to describe a book in a sentence or two so that someone wants to read it. The difference is that now I’m selling something I believe in.' },
          { who: 'Presenter', s: 'What’s a typical day like?' },
          { who: 'Mira', s: 'There’s no such thing, really. On moving days I’m up early, steering the boat to the next stop, which is slow, about walking pace. On selling days I open at ten and just see who turns up. Some days I hardly sell anything but have wonderful conversations. Other days I barely have time to make a cup of tea. I like not knowing what’s coming.' },
          { who: 'Presenter', s: 'And finally, what’s next for you?' },
          { who: 'Mira', s: 'Well, people keep asking me to open a proper shop, on dry land. And I can see the appeal, especially in January! But I think I’d lose what makes it special. What I’d love to do instead is train someone else to run a second boat, so we could cover more of the canals between us. I’ve got someone in mind, actually: a young woman who’s been helping me at weekends.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
          { q: 'How did Mira come to open her bookshop?', o: ['She found some books on a boat she had been given.', 'She had always dreamed of owning a bookshop.', 'She lost her job and needed a new source of income.'], why: 'Her aunt left her a narrowboat, and she found “boxes and boxes of her books in the cabin”.' },
          { q: 'What does Mira say about the limited space on the boat?', o: ['It forces her to choose her books carefully, which customers like.', 'It means she often cannot find the books customers ask for.', 'It is the reason she has to move from place to place.'], why: 'She has “to be really selective” and says “I think customers prefer that”.' },
          { q: 'What has surprised Mira about her customers?', o: ['Young people are more interested than she expected.', 'Many of them live on boats themselves.', 'Local authors are among her best customers.'], why: 'She says “the ones who’ve surprised me most are teenagers” because she assumed they would not be interested.' },
          { q: 'According to Mira, what is the main financial difficulty of her business?', o: ['the cost of keeping the boat in good condition', 'bad weather keeping customers away', 'the small number of books she can sell in winter'], why: 'She says the weather is not the main problem: “What really costs me is maintenance.”' },
          { q: 'How does Mira feel about her previous career?', o: ['The skills she learnt are useful in her current work.', 'She regrets the years she spent in it.', 'She misses the money more than she expected.'], why: 'Asked if marketing helps, she says “More than I expected” and explains how she uses those skills.' },
          { q: 'What does Mira enjoy about her working days?', o: ['never knowing what each day will bring', 'the long conversations she has with customers', 'the time she spends steering the boat'], why: 'She says there is no typical day and ends “I like not knowing what’s coming”.' },
          { q: 'What would Mira like to do in the future?', o: ['help another person run a second boat', 'open a shop on dry land', 'travel to canals in other regions on her own'], why: 'She says “What I’d love to do instead is train someone else to run a second boat”.' },
        ] },
      ],
    },
  ],
};
