-- Launch class 2 (offer launch-en-2): the class goes ahead with 4 sign-ups instead of 8 (owner, 23 Nov 2026: "i will
-- start it even with 4 students this time"). Both linked rooms (three a week, Mondays) count their sign-ups together
-- against the higher of their two minimums (api/_lib/rooms.js), so both are set to 4. The launch page, the follow-up
-- email and the decision on 30 November read it from here. Idempotent.
update public.cohorts set min_learners = 4
 where id in ('a4c1cb8b-5a67-4cf4-949b-4736dc490d82', 'f6184c56-a6d7-4de2-bdfe-440ba5478392') and min_learners is distinct from 4;

-- Verify
select id, product_key, room_state, min_learners, decide_at from public.cohorts
 where id in ('a4c1cb8b-5a67-4cf4-949b-4736dc490d82', 'f6184c56-a6d7-4de2-bdfe-440ba5478392');
