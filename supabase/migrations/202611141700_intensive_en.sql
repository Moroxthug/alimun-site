-- Intensive English pack (owner, 14 Nov 2026): five live 60-minute classes a week, Monday to Friday, for 12 weeks, in a
-- fixed room of up to 12 learners at one level (opens with 8), like the level pack but with five class days instead
-- of three. Sold as kind 'level_pack' under its own product key, so access, rooms, entitlements and deferred revenue
-- treat it as a pack. Band A EUR prices set by the owner: founding 109/month or 299 upfront, list 119/month or 329
-- upfront; other currencies and band B follow level_en's ratios (docs/LAUNCH_PRICING_SPEC.md). The eight live Stripe
-- prices (product alimun_intensive_en) were created on 14 Nov 2026; every currency of a lookup key shares one price.
-- Idempotent; ends with a verify query.

insert into public.products (product_key, kind, language, classes_per_month, months, voice_minutes_month, includes_app) values
  ('intensive_en', 'level_pack', 'en', 22, 3, 120, true)
on conflict (product_key) do update set kind = excluded.kind, language = excluded.language, classes_per_month = excluded.classes_per_month,
  months = excluded.months, voice_minutes_month = excluded.voice_minutes_month, includes_app = excluded.includes_app;

insert into public.price_book (product_key, band, variant, cadence, currency, unit_amount, lookup_key, stripe_price_id, valid_from) values
  ('intensive_en', 'A', 'list', 'month', 'eur', 11900, 'intensive_en_A_list_month', 'price_1Ubj5IBg8L561PwNje69N6TR', date '2026-11-14'),
  ('intensive_en', 'A', 'list', 'month', 'gbp', 9899, 'intensive_en_A_list_month', 'price_1Ubj5IBg8L561PwNje69N6TR', date '2026-11-14'),
  ('intensive_en', 'A', 'list', 'month', 'chf', 10899, 'intensive_en_A_list_month', 'price_1Ubj5IBg8L561PwNje69N6TR', date '2026-11-14'),
  ('intensive_en', 'A', 'list', 'month', 'usd', 13199, 'intensive_en_A_list_month', 'price_1Ubj5IBg8L561PwNje69N6TR', date '2026-11-14'),
  ('intensive_en', 'A', 'list', 'month', 'cad', 18999, 'intensive_en_A_list_month', 'price_1Ubj5IBg8L561PwNje69N6TR', date '2026-11-14'),
  ('intensive_en', 'A', 'list', 'month', 'aud', 18999, 'intensive_en_A_list_month', 'price_1Ubj5IBg8L561PwNje69N6TR', date '2026-11-14'),
  ('intensive_en', 'A', 'list', 'upfront', 'eur', 32900, 'intensive_en_A_list_upfront', 'price_1Ubj5IBg8L561PwNtaJuBWv8', date '2026-11-14'),
  ('intensive_en', 'A', 'list', 'upfront', 'gbp', 27299, 'intensive_en_A_list_upfront', 'price_1Ubj5IBg8L561PwNtaJuBWv8', date '2026-11-14'),
  ('intensive_en', 'A', 'list', 'upfront', 'chf', 30599, 'intensive_en_A_list_upfront', 'price_1Ubj5IBg8L561PwNtaJuBWv8', date '2026-11-14'),
  ('intensive_en', 'A', 'list', 'upfront', 'usd', 36399, 'intensive_en_A_list_upfront', 'price_1Ubj5IBg8L561PwNtaJuBWv8', date '2026-11-14'),
  ('intensive_en', 'A', 'list', 'upfront', 'cad', 52099, 'intensive_en_A_list_upfront', 'price_1Ubj5IBg8L561PwNtaJuBWv8', date '2026-11-14'),
  ('intensive_en', 'A', 'list', 'upfront', 'aud', 53699, 'intensive_en_A_list_upfront', 'price_1Ubj5IBg8L561PwNtaJuBWv8', date '2026-11-14'),
  ('intensive_en', 'A', 'founding', 'month', 'eur', 10900, 'intensive_en_A_founding_month', 'price_1Ubj5JBg8L561PwNPswDy8YY', date '2026-11-14'),
  ('intensive_en', 'A', 'founding', 'month', 'gbp', 9199, 'intensive_en_A_founding_month', 'price_1Ubj5JBg8L561PwNPswDy8YY', date '2026-11-14'),
  ('intensive_en', 'A', 'founding', 'month', 'chf', 9999, 'intensive_en_A_founding_month', 'price_1Ubj5JBg8L561PwNPswDy8YY', date '2026-11-14'),
  ('intensive_en', 'A', 'founding', 'month', 'usd', 12099, 'intensive_en_A_founding_month', 'price_1Ubj5JBg8L561PwNPswDy8YY', date '2026-11-14'),
  ('intensive_en', 'A', 'founding', 'month', 'cad', 16999, 'intensive_en_A_founding_month', 'price_1Ubj5JBg8L561PwNPswDy8YY', date '2026-11-14'),
  ('intensive_en', 'A', 'founding', 'month', 'aud', 17899, 'intensive_en_A_founding_month', 'price_1Ubj5JBg8L561PwNPswDy8YY', date '2026-11-14'),
  ('intensive_en', 'A', 'founding', 'upfront', 'eur', 29900, 'intensive_en_A_founding_upfront', 'price_1Ubj5JBg8L561PwNirzi1uip', date '2026-11-14'),
  ('intensive_en', 'A', 'founding', 'upfront', 'gbp', 25099, 'intensive_en_A_founding_upfront', 'price_1Ubj5JBg8L561PwNirzi1uip', date '2026-11-14'),
  ('intensive_en', 'A', 'founding', 'upfront', 'chf', 27599, 'intensive_en_A_founding_upfront', 'price_1Ubj5JBg8L561PwNirzi1uip', date '2026-11-14'),
  ('intensive_en', 'A', 'founding', 'upfront', 'usd', 33399, 'intensive_en_A_founding_upfront', 'price_1Ubj5JBg8L561PwNirzi1uip', date '2026-11-14'),
  ('intensive_en', 'A', 'founding', 'upfront', 'cad', 47599, 'intensive_en_A_founding_upfront', 'price_1Ubj5JBg8L561PwNirzi1uip', date '2026-11-14'),
  ('intensive_en', 'A', 'founding', 'upfront', 'aud', 48399, 'intensive_en_A_founding_upfront', 'price_1Ubj5JBg8L561PwNirzi1uip', date '2026-11-14'),
  ('intensive_en', 'B', 'list', 'month', 'eur', 10099, 'intensive_en_B_list_month', 'price_1Ubj5JBg8L561PwNVqF4Vitg', date '2026-11-14'),
  ('intensive_en', 'B', 'list', 'month', 'usd', 11199, 'intensive_en_B_list_month', 'price_1Ubj5JBg8L561PwNVqF4Vitg', date '2026-11-14'),
  ('intensive_en', 'B', 'list', 'month', 'mad', 126900, 'intensive_en_B_list_month', 'price_1Ubj5JBg8L561PwNVqF4Vitg', date '2026-11-14'),
  ('intensive_en', 'B', 'list', 'upfront', 'eur', 28099, 'intensive_en_B_list_upfront', 'price_1Ubj5JBg8L561PwNtMZmzvHv', date '2026-11-14'),
  ('intensive_en', 'B', 'list', 'upfront', 'usd', 31399, 'intensive_en_B_list_upfront', 'price_1Ubj5JBg8L561PwNtMZmzvHv', date '2026-11-14'),
  ('intensive_en', 'B', 'list', 'upfront', 'mad', 349900, 'intensive_en_B_list_upfront', 'price_1Ubj5JBg8L561PwNtMZmzvHv', date '2026-11-14'),
  ('intensive_en', 'B', 'founding', 'month', 'eur', 9199, 'intensive_en_B_founding_month', 'price_1Ubj5KBg8L561PwNrbtWV5dV', date '2026-11-14'),
  ('intensive_en', 'B', 'founding', 'month', 'usd', 10399, 'intensive_en_B_founding_month', 'price_1Ubj5KBg8L561PwNrbtWV5dV', date '2026-11-14'),
  ('intensive_en', 'B', 'founding', 'month', 'mad', 115900, 'intensive_en_B_founding_month', 'price_1Ubj5KBg8L561PwNrbtWV5dV', date '2026-11-14'),
  ('intensive_en', 'B', 'founding', 'upfront', 'eur', 25099, 'intensive_en_B_founding_upfront', 'price_1Ubj5KBg8L561PwN3RVgBjXJ', date '2026-11-14'),
  ('intensive_en', 'B', 'founding', 'upfront', 'usd', 28399, 'intensive_en_B_founding_upfront', 'price_1Ubj5KBg8L561PwN3RVgBjXJ', date '2026-11-14'),
  ('intensive_en', 'B', 'founding', 'upfront', 'mad', 316900, 'intensive_en_B_founding_upfront', 'price_1Ubj5KBg8L561PwN3RVgBjXJ', date '2026-11-14')
on conflict (product_key, band, variant, cadence, currency, valid_from) do update
  set unit_amount = excluded.unit_amount, lookup_key = excluded.lookup_key, stripe_price_id = excluded.stripe_price_id;

-- On sale from today
update public.app_settings set value = value || ',intensive_en'
where key = 'pricing_on_sale' and value !~ '(^|,)intensive_en(,|$)';

-- The first room (owner, 14 Nov 2026): B1, Monday to Friday 10:00 Irish time from Monday 4 January 2027, a draft until
-- the room job publishes it 21 days before (it needs a substitute teacher by then). The admin can change the teacher
-- and the level in Admin -> Classes -> Rooms.
do $$
declare v_room uuid;
begin
  if not exists (select 1 from public.cohorts where product_key = 'intensive_en' and starts_on = date '2027-01-04' and level = 'B1') then
    insert into public.cohorts (teacher_id, language, level, goal_track, tier, max_students, min_learners, schedule_days, schedule_time,
      timezone, status, product_key, room_state, starts_on, class_minutes)
    values ('8d223884-2e20-4b02-9fcf-145b8fac3517', 'English', 'B1', 'foundations', 'pack', 12, 8,
      array['Monday','Tuesday','Wednesday','Thursday','Friday'], '10:00', 'Europe/Dublin', 'closed', 'intensive_en', 'draft', date '2027-01-04', 60)
    returning id into v_room;
    perform public.generate_room_sessions(v_room);
  end if;
end $$;

-- Verify
select
  (select count(*) from public.products where product_key = 'intensive_en' and active) as product,
  (select count(*) from public.price_book where product_key = 'intensive_en' and active and stripe_price_id is not null) as prices_with_stripe_id,
  (select count(distinct stripe_price_id) from public.price_book where product_key = 'intensive_en') as stripe_prices,
  (select value ~ '(^|,)intensive_en(,|$)' from public.app_settings where key = 'pricing_on_sale') as on_sale,
  (select count(*) from public.sessions s join public.cohorts c on c.id = s.cohort_id where c.product_key = 'intensive_en' and c.starts_on = date '2027-01-04') as first_room_classes;
