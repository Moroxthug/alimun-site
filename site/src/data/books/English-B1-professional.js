// English B1 for work: a goal book next to the English B1 course book (docs/BOOKS.md).
// Draft: reviewed by a native teacher before it is published. Explanations in English, translated in i18n/.
export const BOOK = {
  id: 'English-B1-professional',
  language: 'English',
  level: 'B1',
  track: 'goal',
  goal: 'professional',
  title: 'English for work',
  review: 'draft',
  units: [
    {
      id: 'u1',
      title: 'Emails that get answers',
      goal: 'Write clear work emails: open and close them, ask politely, and make plans in a meeting.',
      art: 'mug',
      tags: { skills: ['writing', 'speaking', 'vocabulary'], topics: ['email', 'polite-requests', 'meetings'], goals: ['professional'] },
      pages: [
        {
          id: 'p1',
          title: 'Opening and closing',
          about: 'Start and finish an email in the right tone.',
          art: 'mug',
          spreads: [
            [
              { t: 'text', md: 'Work emails in English are usually **friendly but short**. Choose the tone from the person: someone you do not know gets a more formal email, a colleague you work with every day a neutral one.' },
              { t: 'table', caption: 'Opening and closing an email', explain: ['head', 'col0'], quiz: true, head: ['', 'Formal', 'Neutral'], rows: [
                ['Greeting', 'Dear Ms Lee,', 'Hi Sam,'],
                ['First line', 'I am writing to ask about…', 'Thanks for your email.'],
                ['Asking for action', 'I would be grateful if you could…', 'Could you…?'],
                ['Last line', 'I look forward to hearing from you.', 'Speak soon.'],
                ['Closing', 'Kind regards,', 'Best,'],
              ] },
            ],
            [
              { t: 'reading', title: 'Subject: Meeting next week', md: 'Dear Ms Lee,\n\nThank you for your call yesterday. I am writing to confirm our meeting on Tuesday 12 March at 10 am in our office.\n\nI would be grateful if you could send me the latest figures before the meeting, so that our team can prepare.\n\nI look forward to seeing you on Tuesday.\n\nKind regards,\nTomás Ortega' },
              { t: 'tip', art: 'owl', md: 'Use *Ms* for a woman when you do not know if she is married. *Dear Sir or Madam* sounds old: try to find the person’s name. And never write *Dear Sam Lee*: it is *Dear Ms Lee* or *Hi Sam*.' },
            ],
            [
              { t: 'ex', kind: 'choice', h: 'Choose the best line for a formal email to a new client.', items: [
                { q: 'Greeting:', o: ['Dear Mr Kowalski,', 'Hey Mr Kowalski!', 'Dear Jan Kowalski,'], why: '*Dear* + title + surname.' },
                { q: 'First line:', o: ['I am writing to ask about your prices for 2027.', 'What are your prices for 2027?', 'Prices for 2027 please.'], why: '*I am writing to…* says why you write, politely.' },
                { q: 'Closing:', o: ['Kind regards,', 'Cheers,', 'Love,'], why: '*Kind regards* is safe in almost every work email.' },
              ] },
              { t: 'ex', kind: 'match', h: 'Match the formal and the neutral phrase.', pairs: [
                ['Dear Ms Lee,', 'Hi Anna,'],
                ['I look forward to hearing from you.', 'Speak soon.'],
                ['I would be grateful if you could call me.', 'Could you call me?'],
                ['Kind regards,', 'Best,'],
              ] },
            ],
          ],
        },
        {
          id: 'p2',
          title: 'Asking politely',
          about: 'Ask for things at work without sounding rude.',
          art: 'parrot',
          spreads: [
            [
              { t: 'text', md: 'In English, a direct order like *Send me the report.* can sound rude, even at work. Make it a **question**, and the more you need, the softer the question.' },
              { t: 'examples', items: [
                { s: '**Could you** send me the report by Friday?', n: 'Polite and normal for everyday requests.' },
                { s: '**Would you mind** checking these numbers?', n: '*Would you mind* + *-ing*. Answer *No, not at all* to say yes.' },
                { s: '**I was wondering if** you could join the call on Monday.', n: 'Very soft: for a big favour or someone senior.' },
              ] },
              { t: 'tip', art: 'owl', md: 'A common mistake: *Would you mind to send…*. After *mind* comes the *-ing* form: *Would you mind sending…?*' },
            ],
            [
              { t: 'ex', kind: 'spot', h: 'Tap the words that make each request polite.', items: [
                { s: '[Could] [you] send me the slides before the meeting?', why: '*Could you…?* turns an order into a polite question.' },
                { s: '[Would] [you] [mind] moving the call to three o’clock?', why: '*Would you mind* + *-ing*.' },
              ] },
              { t: 'ex', kind: 'gap', h: 'Complete the requests.', items: [
                { q: 'Would you mind ___ (send) me the contract again?', a: ['sending'], why: '*Would you mind* + *-ing*.' },
                { q: '___ you check the dates for me, please?', a: ['Could', 'Can', 'Would'], why: '*Could you…?* (or *Can* / *Would*) makes a polite question.' },
                { q: 'I was ___ if you could help me with the budget.', a: ['wondering'], why: '*I was wondering if…*: the softest form.' },
              ] },
            ],
            [
              { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
                { a: 'Could you call me back this afternoon?', why: '*Could* + *you* + verb.' },
                { a: 'Would you mind checking my email?', why: '*Would you mind* + *-ing*.' },
                { a: 'I would be grateful if you could reply today.', why: 'A formal request in a statement.' },
              ] },
            ],
          ],
        },
        {
          id: 'p3',
          title: 'Making plans in a meeting',
          about: 'Suggest, agree and disagree politely.',
          art: 'sun',
          spreads: [
            [
              { t: 'dialogue', title: 'Planning the launch', lines: [
                { who: 'Priya', s: 'So, when should we launch the new website?' },
                { who: 'Marco', s: 'How about the first week of May?' },
                { who: 'Priya', s: 'I’m not sure about that. The design team is on holiday then.' },
                { who: 'Marco', s: 'Good point. Shall we say the middle of May, then?' },
                { who: 'Priya', s: 'That works for me. Could you let the design team know?' },
                { who: 'Marco', s: 'Sure, I’ll email them today.' },
              ] },
              { t: 'text', md: 'To suggest: *How about…?*, *Shall we…?*, *Why don’t we…?* To agree: *That works for me*, *Good idea*. To disagree politely, start softly: *I’m not sure about that*, then give a reason.' },
            ],
            [
              { t: 'ex', kind: 'tf', h: 'Think about the meeting. True or false?', items: [
                { q: 'Marco first suggests the first week of May.', a: 't', why: '*How about the first week of May?*' },
                { q: 'Priya agrees with the first date.', a: 'f', why: 'She says *I’m not sure about that* and gives a reason.' },
                { q: 'Marco will email the design team.', a: 't', why: '*I’ll email them today.*' },
              ] },
              { t: 'ex', kind: 'choice', h: 'Choose the right phrase.', items: [
                { q: '___ we meet again on Thursday?', o: ['Shall', 'How about', 'Do'], why: '*Shall we…?* makes a suggestion.' },
                { q: 'How about ___ the meeting to 2 pm?', o: ['moving', 'move', 'to move'], why: '*How about* + *-ing*.' },
                { q: 'You don’t agree but want to be polite:', o: ['I’m not sure about that.', 'That’s wrong.', 'No way.'], why: 'Start softly, then give a reason.' },
              ] },
            ],
          ],
        },
      ],
      test: [
        { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
          { q: 'A formal email to someone you do not know starts: ___', o: ['Dear Ms Novak,', 'Hi Novak,', 'Hey there,'], why: '*Dear* + title + surname.' },
          { q: 'Would you mind ___ the file again?', o: ['sending', 'to send', 'send'], why: '*Would you mind* + *-ing*.' },
          { q: '___ about Friday at ten?', o: ['How', 'Shall', 'What'], why: '*How about…?*' },
          { q: 'The safest closing for a work email: ___', o: ['Kind regards,', 'Love,', 'Bye!'], why: '*Kind regards* works almost everywhere.' },
        ] },
        { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
          { q: 'I am ___ to confirm our meeting on Monday.', a: ['writing'], why: '*I am writing to…*' },
          { q: 'I look forward to ___ (hear) from you.', a: ['hearing'], why: '*look forward to* + *-ing*.' },
          { q: 'I was ___ if you could join the call.', a: ['wondering'], why: '*I was wondering if…*' },
        ] },
        { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
          { a: 'Shall we move the meeting to Friday?', why: '*Shall we* + verb.' },
          { a: 'Could you send me the figures?', why: '*Could you* + verb.' },
        ] },
      ],
    },
    { id: 'u2', title: "Calls and video meetings", planned: true, plan: { goal: "Lead and take part in calls and video meetings.", lessons: ["Phone language: connecting, checking, clarifying, ending a call", "Video meetings: technical problems, taking turns, interrupting politely", "Reading: notes from a short meeting"] } },
    { id: 'u3', title: "Job interviews", planned: true, plan: { goal: "Prepare for an interview and talk about your experience and strengths.", lessons: ["Talking about experience and achievements (present perfect and past simple)", "Typical questions and good answers; asking questions yourself", "Reading: interview tips and a sample dialogue"] } },
    { id: 'u4', title: "Presenting your work", planned: true, plan: { goal: "Give a short, clear presentation at work.", lessons: ["Structuring a presentation and signposting (First…, Moving on to…)", "Describing figures and trends in general words (rise, fall, stay the same)", "Reading: a short project update"] } },
    { id: 'u5', title: "Small talk at work", planned: true, plan: { goal: "Make small talk with colleagues and clients.", lessons: ["Safe small-talk topics and follow-up questions", "Showing interest and ending a conversation politely", "Reading: an article about small talk at work"] } },
    { id: 'u6', title: "Problems, complaints and solutions", planned: true, plan: { goal: "Explain problems, deal with complaints and agree on solutions.", lessons: ["Describing problems and causes; apologising professionally", "Suggesting solutions and making promises (I’ll…, We’ll make sure…)", "Reading: a complaint email and the reply"] } },
  ],
};
