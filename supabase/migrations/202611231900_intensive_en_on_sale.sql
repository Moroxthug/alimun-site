-- The English intensive course (five classes a week, B1, Monday to Friday 10:00 Dublin time, from 4 January 2027, the
-- owner teaching) goes on sale now (owner, 23 Nov 2026: "open it for sale now"), as the room job publishes a pack
-- (api/_lib/rooms.js): room_state published, published_at; the owner's teaching contract accepted, as for the launch
-- rooms. Minimum stays 1. It decides 10 days before it starts (25 December). No substitute yet. Idempotent.
update public.cohorts
   set room_state = 'published', published_at = coalesce(published_at, now()),
       contract_offered_at = coalesce(contract_offered_at, now()), contract_accepted_at = coalesce(contract_accepted_at, now())
 where id = 'a8f30809-8d9a-4a66-9161-cf77798daed5' and room_state = 'draft';

-- Verify
select id, product_key, level, room_state, published_at, starts_on, min_learners, contract_accepted_at
  from public.cohorts where id = 'a8f30809-8d9a-4a66-9161-cf77798daed5';
