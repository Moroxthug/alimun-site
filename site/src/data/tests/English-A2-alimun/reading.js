// Alimun test, English A2: Reading. Draft for native-teacher review.
export const PAPER = {
  id: 'reading', title: 'Reading', minutes: 35,
  parts: [
    {
      id: 'p1', ref: 'Part 1', title: 'Short messages',
      about: 'Read the five messages. Choose the right answer.',
      texts: [
        { title: 'Message 1', md: '**Sam,** I’m at the supermarket. We haven’t got any milk or eggs. Do we need bread too? Text me before 6. Mum' },
        { title: 'Message 2', md: '**Swimming pool.** From Monday 3 March the pool opens at 7 am, not 6 am. Closing time is the same: 9 pm.' },
        { title: 'Message 3', md: '**Hi Lena,** sorry, I can’t come to the cinema tonight. I’ve got a bad cold. Can we go on Saturday instead? Mia' },
        { title: 'Message 4', md: '**Office kitchen.** Please wash your cup after you use it. Don’t leave food in the fridge on Friday afternoon.' },
        { title: 'Message 5', md: '**Tom,** the train was late, so I missed the meeting at ten. I’m in the office now. Can you call me at lunchtime? Jack' },
      ],
      blocks: [
        { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
          { q: 'Message 1: What does Mum want Sam to do?', o: ['Tell her about the bread', 'Buy milk and eggs', 'Go to the supermarket at 6'], why: 'Mum is at the shop and asks “Do we need bread too? Text me before 6.”' },
          { q: 'Message 2: What is different from 3 March?', o: ['The pool opens later', 'The pool closes earlier', 'The pool is closed on Mondays'], why: 'The pool opens at 7 am, not 6 am; closing time is the same.' },
          { q: 'Message 3: Why is Mia writing?', o: ['To change the day', 'To buy cinema tickets', 'To ask how Lena is'], why: 'Mia can’t come tonight and asks “Can we go on Saturday instead?”' },
          { q: 'Message 4: What should people do?', o: ['Clean their cups', 'Put food in the fridge on Friday', 'Make coffee for everyone'], why: 'The notice says “Please wash your cup after you use it.”' },
          { q: 'Message 5: Why wasn’t Jack at the meeting?', o: ['His train didn’t arrive on time', 'He was ill', 'He was having lunch'], why: 'Jack writes “the train was late, so I missed the meeting”.' },
        ] },
      ],
    },
    {
      id: 'p2', ref: 'Part 2', title: 'A new job',
      about: 'Read the text. Are the sentences true or false? If the text does not say, choose “not given”.',
      text: { title: 'My first month at the café', md: 'My name is Rosa and I’m twenty-two. Last month I started a new job at a small café near the train station. Before that, I worked in a clothes shop for two years, but I didn’t like it very much.\n\nI start work at half past six in the morning, so I get up very early. I usually take the bus, but when the weather is nice I walk. It takes about twenty-five minutes.\n\nThe café is busy from seven to nine, because a lot of people buy coffee and a sandwich before their train. In the afternoon it is quieter, and I clean the tables and make cakes with my boss, Mr Ward. He is friendly and very patient.\n\nThe job is harder than my old job, but I like it more. Next year I’m going to do a cooking course in the evenings. One day I want to have my own café.' },
      blocks: [
        { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
          { q: 'Rosa worked in a shop before the café.', a: 't', why: 'She says “I worked in a clothes shop for two years”.' },
          { q: 'Rosa liked her old job a lot.', a: 'f', why: 'She says she “didn’t like it very much”.' },
          { q: 'Rosa always goes to work by bus.', a: 'f', why: 'She usually takes the bus, but she walks when the weather is nice.' },
          { q: 'The café is busiest in the morning.', a: 't', why: 'It is busy from seven to nine and quieter in the afternoon.' },
          { q: 'Mr Ward has two cafés.', a: 'ng', why: 'The text says Mr Ward is her boss, but not how many cafés he has.' },
          { q: 'Rosa thinks the new job is easier.', a: 'f', why: 'She says “The job is harder than my old job”.' },
          { q: 'Rosa is going to study cooking.', a: 't', why: 'She says “Next year I’m going to do a cooking course”.' },
        ] },
      ],
    },
    {
      id: 'p3', ref: 'Part 3', title: 'Weekend in town',
      about: 'Read about four places. Who is each sentence about? Choose the place.',
      texts: [
        { title: 'Hillside Farm', md: '**A** Come and meet our animals. Children can feed the goats and ride a pony. Open Saturday and Sunday, 10 am to 4 pm. Bring a picnic: there is no café. Tickets £6, children under five free.' },
        { title: 'The River Boat', md: '**B** A one-hour trip on the river with views of the old town. Boats leave every hour from the bridge. There is a small café on the boat. Not for dogs. Tickets £12, buy them online.' },
        { title: 'City Museum', md: '**C** Learn about the history of our town. This month there is a new room about trains. Free for everyone. Open every day except Monday. There is a big café on the top floor.' },
        { title: 'Green Park Run', md: '**D** A five-kilometre run in the park every Saturday at 9 am. Walkers are welcome too. It’s free, but you must write your name on our website first. Dogs are welcome on a lead.' },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Choose A, B, C or D.', opts: ['Hillside Farm', 'The River Boat', 'City Museum', 'Green Park Run'], items: [
          { q: 'You can bring your dog here.', a: 3, why: 'Green Park Run says “Dogs are welcome on a lead.”' },
          { q: 'You don’t pay anything, and you can go on a Sunday.', a: 2, why: 'The museum is free for everyone and open every day except Monday.' },
          { q: 'You need to take your own food.', a: 0, why: 'The farm says “Bring a picnic: there is no café.”' },
          { q: 'You can see the town from the water.', a: 1, why: 'The boat trip has “views of the old town”.' },
          { q: 'You must put your name online before you go.', a: 3, why: 'For the run, “you must write your name on our website first”.' },
          { q: 'Small children don’t pay, but adults do.', a: 0, why: 'Farm tickets are £6, but “children under five free”; the museum and the run are free for everyone.' },
          { q: 'You can eat at the top of the building.', a: 2, why: 'The museum has “a big café on the top floor”.' },
          { q: 'It is the most expensive.', a: 1, why: 'The boat costs £12; the farm is £6 and the others are free.' },
        ] },
      ],
    },
  ],
};
