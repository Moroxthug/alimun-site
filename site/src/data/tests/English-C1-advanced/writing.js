// C1 Advanced practice test, Writing (docs/TESTS.md). Written by Alimun; not official material.
// Draft for native-teacher review.
export const PAPER = {
  id: 'writing', title: 'Writing', minutes: 90,
  parts: [
    { id: 'p1', ref: 'Part 1', title: 'Essay',
      about: 'You must answer this question. Write your answer in 220 to 260 words in an appropriate style.',
      blocks: [
        { t: 'ex', kind: 'write', marking: 'cambridge', h: 'Write an essay in 220 to 260 words.',
          items: [
            { min: 220, max: 260,
              task: `Your class has attended a panel discussion on what governments can do to encourage people to lead healthier lives. You have made the notes below.

**Ways governments could encourage healthier lifestyles:**
taxing unhealthy food and drink;
investing in public sports facilities;
running public information campaigns.

**Some opinions expressed in the discussion:**
"People resent being told what to eat."
"Sports centres are only useful if people can afford to use them."
"Most people already know what is healthy; they just don't act on it."

Write an essay for your tutor discussing **two** of the ways in your notes. You should **explain which way would be more effective**, giving reasons to support your opinion.

You may, if you wish, make use of the opinions expressed in the discussion, but you should use your own words as far as possible.`,
              model: `**Healthier nations: whose responsibility?**

It is widely accepted that poor diets and inactive lifestyles are placing an ever greater burden on public health systems. The question is therefore not whether governments should act, but how. Two of the measures most often proposed are taxing unhealthy food and drink and investing in public sports facilities.

A tax on products high in sugar or fat has the obvious advantage of influencing behaviour at the point of purchase. When a fizzy drink costs noticeably more than a bottle of water, many shoppers will choose the cheaper option without giving it a second thought. Moreover, the revenue raised could be used to support health services. Critics argue that such taxes are patronising, and that people resent being told what to eat. There is some truth in this, yet the measure bans nothing; it simply makes the real cost of certain choices more visible.

Investing in sports centres, parks and cycle lanes, by contrast, encourages people to be active rather than penalising them for their habits. However, facilities are only of value if people can afford and reach them. A gleaming leisure centre on the edge of town may do little for families on low incomes who have neither the time nor the transport to get there.

On balance, I believe taxation would be more effective. Its impact is immediate and reaches almost everyone, whereas new facilities tend to benefit those who are already motivated to exercise. Ideally, of course, the money raised by the first could help to pay for the second.` },
          ] },
      ] },
    { id: 'p2', ref: 'Part 2', title: 'Letter, proposal or review',
      about: 'Write an answer to one of the questions in this part. Write your answer in 220 to 260 words in an appropriate style.',
      blocks: [
        { t: 'ex', kind: 'write', marking: 'cambridge', choose: true, h: 'Choose one of the tasks and write 220 to 260 words.',
          items: [
            { min: 220, max: 260,
              task: `**Letter**

You have read this announcement on the website of your local council.

*The council is considering closing the town's public library and replacing it with an online lending service in order to reduce costs. We would welcome residents' views before a final decision is made.*

Write a **letter** to the council in which you explain what the library currently offers the community, evaluate the proposal to replace it with an online service, and suggest other ways in which the council might save money.`,
              model: `Dear Sir or Madam,

I am writing in response to the council's proposal to close the public library on Market Street and replace it with an online lending service. While I appreciate the financial pressures the council faces, I believe this plan would be a serious mistake.

The library is far more than a place to borrow books. On any weekday morning it is full of parents attending story sessions with young children, older residents reading the newspapers they can no longer afford to buy, and job seekers using the computers to apply for work. In the afternoons, students who have nowhere quiet to study at home fill every available table. For many of these people, the library is one of the few warm, free and welcoming public spaces left in town.

An online service would certainly suit some readers, and I have no objection to offering one alongside the existing building. As a replacement, however, it would exclude precisely those who depend on the library most: people without a reliable internet connection, those who lack confidence with technology, and anyone who comes for company as much as for books.

If savings must be made, I would urge the council to consider alternatives. The building could be shared with other services, such as a health advice centre, which would bring in rent and new visitors. Opening hours could be adjusted to match busy periods, and local volunteers might well be willing to help.

I hope the council will reconsider its proposal.

Yours faithfully,
Clara Hughes` },
            { min: 220, max: 260,
              task: `**Proposal**

The manager of the company you work for is concerned about staff wellbeing and has invited employees to submit proposals for improving it.

Write a **proposal** in which you describe the current situation, suggest two changes the company could make, and explain how these changes would benefit both the staff and the company.`,
              model: `**Proposal for improving staff wellbeing**

**Introduction**
The aim of this proposal is to outline the main pressures affecting staff in our office and to recommend two practical changes that could be introduced at relatively low cost.

**The current situation**
Most employees I spoke to feel that their workload is manageable, but that the working day has become increasingly difficult to switch off from. Emails and messages now arrive late in the evening and at weekends, and many colleagues feel obliged to reply immediately. In addition, the open-plan office offers nowhere quiet to take a break, so people tend to eat lunch at their desks and rarely leave the building during the day.

**Recommendations**
Firstly, I would suggest introducing a clear policy that messages sent outside working hours do not require a reply until the following morning. Managers would need to lead by example.

Secondly, the small storage room on the second floor could be converted into a staff room, with comfortable seating, plants and a kettle. This would give employees somewhere to rest, chat or simply sit quietly for a few minutes.

**Benefits**
Staff would be able to recover properly between working days, which would reduce stress and sickness absence. A dedicated break space would also encourage colleagues from different departments to get to know one another. For the company, the result would be a more focused and loyal workforce, and lower costs associated with staff turnover.

**Conclusion**
Both changes are inexpensive and could be introduced within a month. I strongly recommend that they be adopted.` },
            { min: 220, max: 260,
              task: `**Review**

A travel website has invited readers to send in reviews of museums or exhibitions that are worth making a journey to see.

Write a **review** of a museum or exhibition you have visited. Describe what makes it special, comment on how well it presents information to visitors, and say what kind of visitor would enjoy it most.`,
              model: `**Small rooms, big stories: the Museum of Everyday Life**

Tucked away down a cobbled side street in the old harbour quarter, the Museum of Everyday Life is easy to miss, and that would be a great pity. It occupies a narrow four-storey merchant's house, and each floor recreates the rooms of an ordinary family at a different moment in the past two hundred years.

What makes the museum special is its refusal to treat history as something that happened only to the rich and famous. Instead of crowns and swords, you find chipped teacups, school exercise books, a wireless set and a kitchen table scarred by decades of use. It sounds modest, but the effect is deeply moving. I found myself lingering in the 1950s kitchen, which looked just like my grandmother's.

The museum is also exceptionally good at telling its stories. Rather than long panels of text, each room has a short audio recording in which a fictional member of the household describes their daily life. These are well written and refreshingly free of jargon. Visitors are even allowed to open drawers and handle some of the objects, which children clearly love. My only criticism is that the staircases are steep and there is no lift, so the upper floors are difficult to reach for anyone with limited mobility.

I would recommend the museum to anyone who prefers people to dates, and especially to families. Allow two hours and save time for the excellent café on the ground floor, where the cakes are made to historical recipes.` },
          ] },
      ] },
  ],
};
