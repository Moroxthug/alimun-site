-- Moroccan prices with 20% VAT inside (owner, 11 Nov 2026; docs/research/reports/Alimun Morocco launch deep dive.md).
-- Since 11 June 2026 Morocco charges VAT on online services sold by foreign companies; the price book had assumed a
-- 5% provision. English MAD prices rise about 14% and German about 7%; the app, trial, help class and voice minutes
-- stay. Only MAD rows change (Morocco is the only country charged in MAD). No Stripe price exists yet, so the amounts
-- are updated in place. Idempotent; ends with a verify query.

update public.price_book p set unit_amount = v.amount
from (values
  ('open_en', 'list', 'month', 24900), ('open_de', 'list', 'month', 28900),
  ('level_en', 'list', 'month', 76900), ('level_en', 'list', 'upfront', 211900),
  ('level_en', 'founding', 'month', 67900), ('level_en', 'founding', 'upfront', 189900),
  ('level_de', 'list', 'month', 88900), ('level_de', 'list', 'upfront', 249900),
  ('level_de', 'founding', 'month', 81900), ('level_de', 'founding', 'upfront', 228900),
  ('exam_en', 'list', 'month', 94900), ('exam_en', 'list', 'upfront', 265900),
  ('exam_en', 'founding', 'month', 84900), ('exam_en', 'founding', 'upfront', 233900),
  ('exam_de', 'list', 'month', 106900), ('exam_de', 'list', 'upfront', 299900),
  ('exam_de', 'founding', 'month', 96900), ('exam_de', 'founding', 'upfront', 269900)
) as v(product_key, variant, cadence, amount)
where p.currency = 'mad' and p.band = 'B' and p.product_key = v.product_key and p.variant = v.variant and p.cadence = v.cadence
  and p.stripe_price_id is null and p.unit_amount <> v.amount;

-- Verify: the MAD price list.
select product_key, variant, cadence, unit_amount / 100 as mad from public.price_book
where currency = 'mad' order by product_key, variant, cadence;
