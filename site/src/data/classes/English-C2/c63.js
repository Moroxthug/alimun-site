// English C2, class 63 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u13:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c63',
  focus: 'By the end every student follows the line of argument in a text about trade, sees how each paragraph links to the one before and after it (contrast, reference words such as *this*, a concession and its rejection), and puts removed paragraphs back in a new text in the format of C2 Proficiency Reading and Use of English Part 6. They report both sides of the globalisation debate fairly before giving their own view, using the vocabulary of trade (*a tariff*, *protectionism*, *comparative advantage*, *a supply chain*) and the language of neutral reporting (*critics point out*, *defenders respond*, *the argument runs*).',
  tips: [
    'Part 6 is a test of how a text holds together. Ask students to read the main text first, without the paragraphs, and say in one sentence what each part argues; only then look at the removed paragraphs.',
    'When a student chooses a paragraph, ask them to name two links: one backwards to the paragraph before the gap and one forwards to the paragraph after it. A shared word alone is not a link and is often a trap.',
    'The extra paragraph is usually on the right topic but breaks the logic. Ask students why it does not fit anywhere; that explanation is good practice for the real paper.',
    'Debates about trade can become political. Keep the focus on stating each side so fairly that its supporters would accept the summary, as the book’s article does.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Look at something you are wearing or carrying. Where was it made, do you think? Would you pay more for the same thing made in your own country?* Each student answers briefly.' },
    { min: 8, title: 'Words of trade', md: 'Show board page 1. Students match the terms and their meanings, then use two of them in a sentence about their own country.' },
    { min: 18, title: 'Exam corner', md: 'Show board page 2: C2 Proficiency Reading and Use of English Part 6, shortened. Students read the main text, then the paragraphs, and choose alone in about ten minutes. Check by asking for the link before and after each gap, and why paragraph D does not fit.' },
    { min: 9, title: 'Fair before critical', md: 'Show board page 3. Students complete the phrases of neutral reporting, then summarise the text on board page 2 in two sentences that both sides would accept.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below, with the cards on board page 4.' },
    { min: 5, title: 'Close', md: 'Each student states the strongest argument of the side they disagree with, in one sentence. Set the homework.' },
  ],
  board: [
    { title: 'Words of trade', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each term with its meaning.', pairs: [
        ['a tariff', 'a tax on goods coming into a country'],
        ['protectionism', 'shielding home producers from foreign competition'],
        ['comparative advantage', 'producing something at a lower cost than others can'],
        ['a subsidy', 'money from the state to keep a price low or an industry alive'],
        ['reshoring', 'bringing production back to the home country'],
        ['food miles', 'the distance food travels from farm to plate'],
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 6', blocks: [
      { t: 'reading', title: 'The case for buying local', md: 'Buying local has become one of the more fashionable virtues of recent years. Supermarkets label vegetables with the name of the farm; restaurants list the distance each ingredient has travelled. The appeal is easy to understand. Local food seems fresher, kinder to the planet and better for the community that grows it.\n\n**[Gap one]**\n\nThat is not to say the critics have the whole truth either. Distance is a poor measure of environmental cost, but it is not a meaningless one, and for some products, particularly those flown in rather than shipped, it matters a great deal.\n\n**[Gap two]**\n\nDefenders of local buying respond that this misses the point. For them, the purchase is not only an economic choice but a social one: money spent with a nearby farmer stays in the region, supports jobs that cannot be moved abroad and keeps alive skills that would otherwise disappear.\n\n**[Gap three]**\n\nPerhaps the most honest conclusion is that *local* is a useful question rather than a complete answer. It invites us to ask where our food comes from and at what cost, which is more than most labels do. But it cannot, on its own, tell us what to buy.' },
      { t: 'reading', title: 'The removed paragraphs', md: '**A.** Economists, however, have long been sceptical. A tomato grown in a heated greenhouse nearby may require far more energy than one grown in the open air in a warmer country and carried by sea. Measured over its whole life, from seed to plate, the local option is not always the greener one.\n\n**B.** Nor is the environment the only consideration. Trade also matters to the growers at the other end of the chain. For many farmers in poorer countries, exports to wealthy markets are a vital source of income, and a fashion for buying local can, without anyone intending it, close that door.\n\n**C.** There is something to this, but the benefit is easily overstated. A region that buys only from itself also loses the gains that come from trade: it pays more for what others produce more cheaply, and its own producers lose customers elsewhere if other regions do the same.\n\n**D.** As a result, supermarkets now import more vegetables than ever before, and prices in the shops have fallen accordingly.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 6): choose the paragraph (A to D) that fits each gap. There is one extra paragraph that you do not need. (Shortened: three gaps and four paragraphs instead of seven gaps and eight paragraphs.)', items: [
        { q: 'Which paragraph fits gap one?', o: ['A', 'B', 'C', 'D'], why: '*Economists, however* turns against the appeal described before the gap, and *the critics* after the gap refers back to these economists. *Measured over its whole life* is answered by *Distance is a poor measure*.' },
        { q: 'Which paragraph fits gap two?', o: ['B', 'A', 'C', 'D'], why: '*Nor is the environment the only consideration* follows the paragraph about environmental cost, and *this misses the point* after the gap answers B’s argument about poorer farmers.' },
        { q: 'Which paragraph fits gap three?', o: ['C', 'A', 'B', 'D'], why: '*There is something to this* concedes the defenders’ social argument just before the gap, then limits it, which leads to the balanced conclusion.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Paragraph D mentions supermarkets and vegetables, like the text, but *As a result* has no cause to follow, and its claim contradicts the argument. In **Part 6**, a paragraph that shares words with the text but not its **logic** is usually the extra one.' },
    ] },
    { title: 'Fair before critical', blocks: [
      { t: 'ex', kind: 'gap', h: 'Complete the phrases of neutral reporting with one word.', items: [
        { q: 'Its critics point ___ that the gains are not shared evenly.', a: ['out'], why: '*Point out that*: draw attention to a fact.' },
        { q: 'The argument, as its supporters put it, ___ like this.', a: ['runs', 'goes'], why: '*The argument runs*: this is how the reasoning goes.' },
        { q: 'Defenders of free trade ___ that cheaper goods help the poorest households most.', a: ['argue', 'maintain', 'contend', 'respond', 'counter', 'insist'], why: 'A reporting verb that presents the view without judging it.' },
        { q: 'That is not to ___ that the critics are entirely right.', a: ['say', 'suggest'], why: '*That is not to say that*: limits what you have just said.' },
        { q: 'Both camps, it is worth saying at the ___, are describing something real.', a: ['outset', 'start'], why: '*At the outset*: at the beginning.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Examiners at C2 reward writers and speakers who are **fair before they are critical**. State the other side in words its supporters would accept, then give your view: *Defenders argue that…; critics point out that…; my own view is that…*' },
    ] },
    { title: 'Long turns: trade and the local', blocks: [
      { t: 'text', md: 'In the format of the C2 Proficiency exam (Speaking Part 3, the long turn). **Card A:** *Should governments encourage people to buy goods produced in their own country?* Ideas you may use: prices, jobs, the environment. **Card B:** *Has the global movement of goods done more good than harm to ordinary people?* Ideas you may use: choice, security of supply, local industries. Each candidate speaks for about two minutes. The partner then answers: *Would you pay more for something made locally?*' },
      { t: 'examples', items: [
        { s: '**The argument for** local production **runs roughly like this**: jobs stay at home and supply is more secure.', n: 'Set out one side fairly.' },
        { s: '**Critics point out, however, that** a tariff is paid in the end by the shopper.', n: 'Then the other.' },
        { s: 'The gains from trade are **diffuse**, **whereas** the losses are **concentrated** in particular towns.', n: 'A contrast from the book’s article.' },
        { s: '**My own view, for what it is worth, is that** neither extreme survives a bad harvest.', n: 'Your position, after both sides.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Both sides, then mine', md: 'The student gives the two-minute long turn on card A from board page 4. They must spend the first minute setting out both sides fairly, with at least two phrases from board page 3, and only then give their own view. You answer the partner’s question, then ask the student two follow-up questions that push them to defend the view against the side they rejected. Finish by noting one sentence that took sides too early and rewording it together.' },
    small: { title: 'Long turn and fair summary', md: 'Students work in pairs, or in a three. One gives the two-minute long turn on card A while the other listens and then answers the partner’s question; then they swap with card B. Students who are not speaking must sum up the speaker’s argument in one sentence that the speaker accepts as fair; if the speaker does not accept it, they try again. With two students, each sums up the other after their turn.' },
  },
  homework: { book: 'u13 u14:p1', md: 'Finish lesson 4 of unit 13 if needed and do the unit 13 test in the book. Write about 200 words on the question on card A or card B, setting out both sides fairly before you give your own view. Then do lesson 1 of unit 14 (By and large, with notable exceptions).' },
};
