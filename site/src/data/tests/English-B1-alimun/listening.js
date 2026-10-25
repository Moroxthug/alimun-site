// Alimun test, English B1: Listening. Draft for native-teacher review.
export const PAPER = {
  id: 'listening', title: 'Listening', minutes: 30,
  parts: [
    {
      id: 'p1', ref: 'Part 1', title: 'Five short recordings',
      about: 'You will hear five short recordings. For each question, choose the right answer. You will hear each recording twice.',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Man', s: 'Good afternoon. How can I help?' },
          { who: 'Sofia', s: 'Hi. My suitcase didn’t arrive on the flight from Madrid. It’s a large blue one with a black handle.' },
          { who: 'Man', s: 'I’m sorry about that. It looks like it’s still in Madrid. It should be on the next flight, which lands at eight this evening. We can deliver it to your hotel tonight, or you can come back and collect it tomorrow morning.' },
          { who: 'Sofia', s: 'Tonight, please. I’ve got a meeting first thing tomorrow, and all my clothes are in it.' },
        ] },
        { lines: [
          { who: 'Pharmacist', s: 'So, these are for your cough. Take two tablets three times a day, after meals.' },
          { who: 'James', s: 'After meals. OK. And can I take them with the painkillers I already have?' },
          { who: 'Pharmacist', s: 'Yes, that’s fine. But don’t drive after you take them, because they might make you sleepy. And if you don’t feel better in a week, you should see your doctor.' },
          { who: 'James', s: 'Right. I’ll take the bus to work, then.' },
        ] },
        { lines: [
          { who: 'Helen', s: 'Hi, it’s Helen from Brightwater Design. Thank you for coming to the interview yesterday. We were very impressed, and we’d like to offer you the job. The only thing is, we’d need you to start on the first of March, not in April as we discussed. Could you call me back and let me know if that’s possible? Thanks, bye.' },
        ] },
        { lines: [
          { who: 'Lena', s: 'Are you going to the concert in the park on Saturday?' },
          { who: 'Paul', s: 'I was going to, but have you seen the weather forecast? Heavy rain all afternoon.' },
          { who: 'Lena', s: 'Oh no. Actually, I read that they’ve moved it into the town hall because of the weather.' },
          { who: 'Paul', s: 'Really? Then I’ll definitely go. Shall we meet outside at seven?' },
        ] },
        { lines: [
          { who: 'Announcer', s: 'Attention, please. The ten twenty-five train to Northport is delayed by about forty minutes because of a problem with the line. Passengers who need to arrive before midday can take the replacement bus, which is waiting outside the main entrance. Tickets for the train are accepted on the bus. We’re sorry for the delay.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'choice', rec: 0, h: 'Recording 1', items: [
          { q: 'What will happen to the woman’s suitcase?', o: ['It will be taken to her hotel this evening', 'She will collect it in the morning', 'It will stay in Madrid until tomorrow'], why: 'She is offered delivery tonight or collection tomorrow, and she answers “Tonight, please.”' },
        ] },
        { t: 'ex', kind: 'choice', rec: 1, h: 'Recording 2', items: [
          { q: 'Why is the man going to take the bus?', o: ['The medicine may make him sleepy', 'He has a bad cough', 'His doctor told him not to drive'], why: 'The pharmacist says “don’t drive after you take them, because they might make you sleepy”.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 2, h: 'Recording 3', items: [
          { q: 'Why is Helen calling?', o: ['To ask about an earlier start date', 'To invite the listener to an interview', 'To say the job starts in April'], why: 'She offers the job but needs the listener “to start on the first of March, not in April”.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 3, h: 'Recording 4', items: [
          { q: 'Where will the concert take place?', o: ['In the town hall', 'In the park', 'It has been cancelled'], why: 'Lena says “they’ve moved it into the town hall because of the weather”.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 4, h: 'Recording 5', items: [
          { q: 'What should passengers do if they must arrive before twelve?', o: ['Take the bus outside the station', 'Wait forty minutes for the train', 'Buy a new ticket for the bus'], why: 'Passengers who need to arrive before midday “can take the replacement bus”, and train tickets are accepted.' },
        ] },
      ],
    },
    {
      id: 'p2', ref: 'Part 2', title: 'Volunteer weekend',
      about: 'You will hear a man talking about a volunteer project. Write one or two words or a number in each gap. You will hear the recording twice.',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Mr Barker', s: 'Hello, everyone, and thanks for coming. I’m Tom Barker from Green Valley Volunteers, and I’d like to tell you about our next project.' },
          { who: 'Mr Barker', s: 'Over the weekend of the twelfth and thirteenth of May, we’re going to clean up the path along the river and plant trees in Hollow Wood. Last year we planted about three hundred trees there, and this year we’re hoping to plant five hundred.' },
          { who: 'Mr Barker', s: 'You don’t need any experience. Our team leaders will show you what to do. We’ll start at nine o’clock each morning at the car park next to the old mill, and we usually finish at about four.' },
          { who: 'Mr Barker', s: 'We’ll give you gloves and all the tools, but please wear strong boots, because the ground can be very wet. And bring something to drink. Lunch is provided by a local bakery, which is very kind of them, and it’s always delicious.' },
          { who: 'Mr Barker', s: 'If you’d like to come, please sign up on our website by the end of April, so that we know how many people to expect. You can come for one day or both days, it’s up to you.' },
          { who: 'Mr Barker', s: 'Oh, and one more thing. Children over twelve are very welcome, but they must come with an adult. Any questions?' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Complete the notes.',
          text: '**Green Valley Volunteers: spring project**\n\nDates: 12 and 13 {}\n\nWork: clean the river path and plant trees in Hollow {}\n\nNumber of trees this year: {}\n\nMeeting place: the car park next to the old {}\n\nBring: strong {} and a drink\n\nLunch comes from: a local {}\n\nSign up on the website by: the end of {}',
          items: [
            { a: ['May'], why: 'Tom says “the weekend of the twelfth and thirteenth of May”.' },
            { a: ['Wood'], why: 'They will “plant trees in Hollow Wood”.' },
            { a: ['500', 'five hundred'], why: 'Three hundred was last year; “this year we’re hoping to plant five hundred”.' },
            { a: ['mill'], why: 'They start “at the car park next to the old mill”.' },
            { a: ['boots'], why: 'Gloves and tools are given, but “please wear strong boots”.' },
            { a: ['bakery'], why: '“Lunch is provided by a local bakery.”' },
            { a: ['April'], why: 'He asks people to “sign up on our website by the end of April”.' },
          ] },
      ],
    },
    {
      id: 'p3', ref: 'Part 3', title: 'Where do you get your news?',
      about: 'You will hear Clara and Daniel talking about the news. For each sentence, decide who says it: Clara, Daniel or both of them. You will hear the conversation twice.',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Clara', s: 'Did you hear about the floods in the north? I saw it this morning on my phone.' },
          { who: 'Daniel', s: 'Yes, I heard it on the radio while I was making breakfast. I always have the news on in the morning. I’ve done it for years.' },
          { who: 'Clara', s: 'I don’t think I’ve listened to the radio since I was a kid. I get almost all my news from social media now. It’s quick, and it’s free.' },
          { who: 'Daniel', s: 'But how do you know what’s true? Half the stories people share are completely made up.' },
          { who: 'Clara', s: 'Well, I’m careful. If I see something surprising, I check whether a proper news website has reported it too. I don’t just believe everything I read.' },
          { who: 'Daniel', s: 'That’s fair. I must admit I don’t trust everything on the radio either. Sometimes they just repeat what politicians say without asking any difficult questions.' },
          { who: 'Clara', s: 'Exactly. Nobody’s perfect. What I don’t like about the news in general is that it’s always so negative. Some days I just stop reading because it makes me feel terrible.' },
          { who: 'Daniel', s: 'Me too, honestly. Last month I turned the radio off for a whole week, and I felt much more relaxed.' },
          { who: 'Clara', s: 'Do you ever pay for news? I read that our local paper might close.' },
          { who: 'Daniel', s: 'I pay for a newspaper app, actually. About five pounds a month. I think good journalists should get paid for their work.' },
          { who: 'Clara', s: 'Hmm, I’ve never paid for any. Maybe I should think about it, though, if it helps the local paper.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Who says it? Choose Clara, Daniel or Both.', opts: ['Clara', 'Daniel', 'Both'], items: [
          { q: 'I have had the same news habit for a long time.', a: 1, why: 'Daniel always has the radio news on in the morning: “I’ve done it for years.”' },
          { q: 'I like news that costs nothing.', a: 0, why: 'Clara says social media news is “quick, and it’s free”.' },
          { q: 'Many stories online are not true.', a: 1, why: 'Daniel says “Half the stories people share are completely made up.”' },
          { q: 'I compare surprising stories with a reliable source.', a: 0, why: 'Clara checks “whether a proper news website has reported it too”.' },
          { q: 'The source I use is not always reliable.', a: 2, why: 'Clara does not believe everything she reads, and Daniel admits he doesn’t trust everything on the radio either.' },
          { q: 'Bad news sometimes makes me stop following it.', a: 2, why: 'Clara stops reading on some days, and Daniel says “Me too” and turned the radio off for a week.' },
          { q: 'I pay every month for news.', a: 1, why: 'Daniel pays for a newspaper app, “about five pounds a month”.' },
          { q: 'I might change my mind about paying for news.', a: 0, why: 'Clara has never paid, but says “Maybe I should think about it”.' },
        ] },
      ],
    },
  ],
};
