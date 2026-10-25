// German A2, for travel: a goal book next to the German A2 course book (docs/BOOKS.md).
// Draft: reviewed by a native teacher before it is published. Units are written in units/German-A2-pleasure/<unit>.js;
// until then each entry is planned, with the outline its writer works from. Explanations in English, translated in i18n/.
export const BOOK = {
  id: 'German-A2-pleasure',
  language: 'German',
  level: 'A2',
  track: 'goal',
  goal: 'pleasure',
  title: "German for travel",
  review: 'draft',
  units: [
    { id: 'u1', title: "Planning a trip", planned: true, plan: { goal: "Plan a trip, book a room and talk about dates and prices.", lessons: ["Months, dates and prices; booking online", "Asking about a room or a tour", "Reading: a booking confirmation"] } },
    { id: 'u2', title: "At the station and airport", planned: true, plan: { goal: "Travel by train, bus and plane.", lessons: ["Tickets, platforms, gates and delays", "Asking for help and understanding announcements (written)", "Reading: a departure board and a notice"] } },
    { id: 'u3', title: "At the hotel", planned: true, plan: { goal: "Check in, ask for things and solve small problems.", lessons: ["Checking in and out; asking about breakfast and wifi", "Small problems with the room", "Reading: hotel information for guests"] } },
    { id: 'u4', title: "Eating out", planned: true, plan: { goal: "Order food, ask about dishes and pay.", lessons: ["Ordering and asking about a menu", "Allergies, preferences and paying", "Reading: a menu and a short review"] } },
    { id: 'u5', title: "Sightseeing", planned: true, plan: { goal: "Ask about sights, opening times and tickets, and talk about what you saw.", lessons: ["Sights, tours and tickets; asking for information", "Talking about the day in the past", "Reading: a city leaflet"] } },
    { id: 'u6', title: "Problems on holiday", planned: true, plan: { goal: "Deal with problems: lost things, illness, changes.", lessons: ["Losing something; reporting it", "Feeling ill and asking for a pharmacy", "Reading: a message from a tour company about a change"] } },
  ],
};
