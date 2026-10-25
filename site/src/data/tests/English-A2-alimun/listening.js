// Alimun test, English A2: Listening. Draft for native-teacher review.
export const PAPER = {
  id: 'listening', title: 'Listening', minutes: 25,
  parts: [
    {
      id: 'p1', ref: 'Part 1', title: 'Five short conversations',
      about: 'Listen to each conversation two times. Choose the right answer.',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Elena', s: 'Excuse me, what time is the next train to Bristol?' },
          { who: 'Man', s: 'There’s one at ten fifteen, but it’s very slow. The fast one is at ten forty.' },
          { who: 'Elena', s: 'Oh, I’ll take the fast one, then. Thanks.' },
        ] },
        { lines: [
          { who: 'Ben', s: 'Hi, Sara. What did you do at the weekend?' },
          { who: 'Sara', s: 'Well, I wanted to play tennis on Saturday, but it rained all day. So I stayed at home and watched a film.' },
          { who: 'Ben', s: 'That sounds nice.' },
        ] },
        { lines: [
          { who: 'Waiter', s: 'Hello. What would you like?' },
          { who: 'Sofia', s: 'Can I have a cheese sandwich and an orange juice, please?' },
          { who: 'Waiter', s: 'Sorry, we haven’t got any orange juice today. We’ve got apple juice.' },
          { who: 'Sofia', s: 'Oh, OK. Apple juice is fine.' },
        ] },
        { lines: [
          { who: 'Receptionist', s: 'Good morning, Park Road Health Centre.' },
          { who: 'David', s: 'Hello, I’d like to see a doctor, please. My back really hurts.' },
          { who: 'Receptionist', s: 'Let me see. There’s nothing today, I’m afraid. Is Thursday at nine OK?' },
          { who: 'David', s: 'Thursday? Hmm, yes, that’s fine.' },
        ] },
        { lines: [
          { who: 'Hannah', s: 'James, where’s the post office? Is it near here?' },
          { who: 'James', s: 'Yes. Go along this street and turn right. It’s next to the bank, opposite the library.' },
          { who: 'Hannah', s: 'Next to the bank. Great, thanks.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'choice', rec: 0, h: 'Conversation 1', items: [
          { q: 'What time is Elena’s train?', o: ['10.40', '10.15', '10.50'], why: 'The fast train is at ten forty, and Elena says “I’ll take the fast one”.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 1, h: 'Conversation 2', items: [
          { q: 'What did Sara do on Saturday?', o: ['She watched a film', 'She played tennis', 'She went out in the rain'], why: 'It rained, so she “stayed at home and watched a film”.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 2, h: 'Conversation 3', items: [
          { q: 'What does Sofia drink?', o: ['Apple juice', 'Orange juice', 'Water'], why: 'There is no orange juice today, and Sofia says “Apple juice is fine”.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 3, h: 'Conversation 4', items: [
          { q: 'When is David going to see the doctor?', o: ['On Thursday', 'Today', 'Tomorrow'], why: 'There is nothing today; the receptionist offers Thursday at nine and David says it is fine.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 4, h: 'Conversation 5', items: [
          { q: 'Where is the post office?', o: ['Next to the bank', 'Next to the library', 'Opposite the bank'], why: 'James says “It’s next to the bank, opposite the library.”' },
        ] },
      ],
    },
    {
      id: 'p2', ref: 'Part 2', title: 'A school trip',
      about: 'Listen to a teacher. Write one word or a number in each gap.',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Mrs Hall', s: 'OK, everyone, listen, please. This is some information about our trip to the lake next week.' },
          { who: 'Mrs Hall', s: 'We’re going on Wednesday, not Tuesday, because the weather is better on Wednesday.' },
          { who: 'Mrs Hall', s: 'The bus leaves from the front of the school at half past eight. Please be there at a quarter past eight.' },
          { who: 'Mrs Hall', s: 'The trip costs fourteen pounds. That’s for the bus and the boat. Please give the money to Mr Green, the sports teacher, by Monday.' },
          { who: 'Mrs Hall', s: 'You don’t need to bring lunch. There’s a café at the lake, and lunch is free. But bring a bottle of water.' },
          { who: 'Mrs Hall', s: 'It can be cold on the boat, so bring a warm jacket. And don’t forget your hat, because the sun is strong there.' },
          { who: 'Mrs Hall', s: 'We’re coming back at five o’clock. Any questions? My phone number is on the school website.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Complete the notes.',
          text: '**Trip to the lake**\n\nDay: {}\n\nThe bus leaves at: {} (be there at 8.15)\n\nPrice: £{}\n\nThe trip includes the bus and the {}\n\nGive the money to: Mr {}\n\nLunch: at the {} at the lake\n\nBring: water, a warm {} and a hat\n\nBack at: {} o’clock',
          items: [
            { a: ['Wednesday', 'Weds', 'Wed'], why: 'Mrs Hall says “We’re going on Wednesday, not Tuesday”.' },
            { a: ['8.30', '8:30', 'half past eight', 'half past 8', '830'], why: 'The bus leaves “at half past eight”; a quarter past eight is the time to be there.' },
            { a: ['14', 'fourteen'], why: 'She says “The trip costs fourteen pounds.”' },
            { a: ['boat'], why: 'The price is “for the bus and the boat”.' },
            { a: ['Green'], why: 'The money goes to “Mr Green, the sports teacher”.' },
            { a: ['café', 'cafe'], why: 'She says “There’s a café at the lake, and lunch is free.”' },
            { a: ['jacket'], why: 'It can be cold on the boat, “so bring a warm jacket”.' },
            { a: ['5', 'five'], why: 'She says “We’re coming back at five o’clock.”' },
          ] },
      ],
    },
    {
      id: 'p3', ref: 'Part 3', title: 'Holiday plans',
      about: 'Listen to Maya and Oliver. Are the sentences true or false?',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Maya', s: 'Hi, Oliver! Are you going away this summer?' },
          { who: 'Oliver', s: 'Yes, I’m going to Spain with my brother in July. We’re staying with our aunt. She lives by the sea.' },
          { who: 'Maya', s: 'Lucky you! Are you flying?' },
          { who: 'Oliver', s: 'No, we’re going by train. It takes longer, but it’s cheaper, and I don’t like planes.' },
          { who: 'Maya', s: 'Have you been to Spain before?' },
          { who: 'Oliver', s: 'Yes, once, when I was ten. I loved it. What about you, Maya?' },
          { who: 'Maya', s: 'Well, I wanted to go camping with friends, but now I’m working in a shop for the summer. I need the money. So I’m going to stay here.' },
          { who: 'Oliver', s: 'Oh, that’s a shame.' },
          { who: 'Maya', s: 'It’s OK. In September I’m going to visit my grandparents in Ireland for a week. I’m really happy about that.' },
          { who: 'Oliver', s: 'That sounds great. Send me some photos!' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'tf', h: 'True or false?', items: [
          { q: 'Oliver is going to Spain with his brother.', a: 't', why: 'He says “I’m going to Spain with my brother in July.”' },
          { q: 'Oliver is going to stay in a hotel.', a: 'f', why: 'They are “staying with our aunt”.' },
          { q: 'Oliver is travelling by plane.', a: 'f', why: 'He says “we’re going by train”.' },
          { q: 'Oliver has visited Spain before.', a: 't', why: 'He went once, “when I was ten”.' },
          { q: 'Maya is going camping in the summer.', a: 'f', why: 'She wanted to go camping, but now she is working in a shop.' },
          { q: 'Maya has a summer job.', a: 't', why: 'She says “I’m working in a shop for the summer.”' },
          { q: 'Maya is going to Ireland for two weeks.', a: 'f', why: 'She is visiting her grandparents in Ireland “for a week”.' },
        ] },
      ],
    },
  ],
};
