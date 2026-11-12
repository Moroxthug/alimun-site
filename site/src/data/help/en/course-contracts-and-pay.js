// Sources checked (internal, never shown): js/app/teach-classes.js (Course contracts card, accept/decline, substitute), api/_lib/rooms.js (timeline: 21, 10 and 7 days before, start day), api/_lib/email-text/en.json (contract_offer, room_not_opening), js/app/teach-account.js (Payouts: counts only, statuses), docs/PRICING_ENGINE_SPEC.md steps 7 and 8, docs/LAUNCH_PRICING_SPEC.md (teacher terms), docs/DASHBOARD_PLAN.md (payouts entered by the admin), Terms §7, js/translations.js (app_tk_*, app_tp_*)
export default {
  slug: "course-contracts-and-pay",
  lang: "en",
  kind: "answer",
  subject: "teaching",
  audience: "teacher",
  title: "How do course contracts and payouts work?",
  summary: "Each room is a separate twelve-week course contract you may accept or decline from your Classes page without any effect on later offers; payouts are recorded by Alimun and shown on your Payouts page.",
  words: ["contract", "course contract", "room", "substitute", "accept offer", "decline offer", "payout", "pay", "payment", "earnings", "invoice", "when am I paid"],
  updated: "2026-11-12",
  body: [
    { p: "Alimun's rooms are classes of twelve weeks with a fixed start date, days and time. Each room is a **separate course contract** that you may accept or decline, with no effect on the offers you get later. When enough learners have joined a room you teach, the contract is offered 10 days before the start: you get an email, and the **Course contracts** card on your Classes page shows the room, its start date, days, time and how many learners joined, with **Accept** and **Decline**. The room starts only once you have accepted. If too few learners join, the room does not open and you are told by email." },
    { p: "Every room also has a named substitute. If that is you, the card says **You are the named substitute for this room**." },
    { p: "**Payouts** shows the payouts Alimun has recorded for you, with their period and whether each is **Paid**, **Being paid** or not paid yet, and this month's classes and 1:1s so far. A class counts once it is marked as done, which happens when you publish its notes; a 1:1 counts once you save its note. Payouts are worked out by Alimun at the end of each period, and your fees and payment schedule are set in your teacher agreement. Payouts may be made through Stripe, Wise or another payment provider. For a question about a payout, use **Contact us** on the Payouts page." }
  ],
  related: ["teacher-classes-and-schedule", "one-on-one-sessions", "teaching-your-first-class"],
  missing: [
    "How a teacher is chosen for a room, or offers a time for one, is not described for teachers anywhere (rooms are staffed by an admin in Admin, Classes, Rooms).",
    "Teacher pay for rooms is listed as left for later in docs/PRICING_ENGINE_SPEC.md step 7; no rates, period length or payment day are given.",
    "What a substitute is asked to do, and how a teacher sends a substitute (the launch spec says they may), is not in the code.",
    "Whether teachers are emailed when a payout is marked paid is optional for the admin; not mentioned."
  ]
};
