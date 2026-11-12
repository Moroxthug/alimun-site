-- Live Stripe prices for the launch catalogue (docs/PRICING_ENGINE_SPEC.md, build step 3; owner, 12 Nov 2026).
-- One Stripe price per lookup key: its EUR amount is the base and every other currency of that key is a currency
-- option on the same price, so every price_book row sharing a lookup key gets the same stripe_price_id.
-- Idempotent (only fills or corrects the id); ends with a verify query.

update public.price_book p set stripe_price_id = v.price_id
from (values
  ('app_A_list_month', 'price_1UaoRxBg8L561PwNc7XKhD9q'),
  ('app_A_list_year', 'price_1UaoS6Bg8L561PwNpLo6yk47'),
  ('trial_A_list_once', 'price_1UaoS8Bg8L561PwN1QOj2wcT'),
  ('help_class_A_list_once', 'price_1UaoSBBg8L561PwNgmNB5LEC'),
  ('minutes_30_A_list_once', 'price_1UaoSDBg8L561PwN8edgSnkQ'),
  ('minutes_120_A_list_once', 'price_1UaoSGBg8L561PwNgVaIn8lE'),
  ('open_en_A_list_month', 'price_1UaoSJBg8L561PwNbVqHY8Hf'),
  ('open_de_A_list_month', 'price_1UaoSMBg8L561PwN9U6j8JBQ'),
  ('b2b_en_A_list_month', 'price_1UaoSOBg8L561PwN7hllxPCY'),
  ('b2b_de_A_list_month', 'price_1UaoSPBg8L561PwNPZirKKux'),
  ('level_en_A_list_month', 'price_1UaoSWBg8L561PwNvMVh6EuY'),
  ('level_en_A_list_upfront', 'price_1UaoSYBg8L561PwNZvWVJVCU'),
  ('level_en_A_founding_month', 'price_1UaoScBg8L561PwNmZGRXTLX'),
  ('level_en_A_founding_upfront', 'price_1UaoSeBg8L561PwNYa34Qjol'),
  ('level_de_A_list_month', 'price_1UaoSiBg8L561PwNlRIdvOWU'),
  ('level_de_A_list_upfront', 'price_1UaoSkBg8L561PwNWeC9bgpM'),
  ('level_de_A_founding_month', 'price_1UaoSnBg8L561PwNB8SU2ovv'),
  ('level_de_A_founding_upfront', 'price_1UaoSqBg8L561PwNuMgZ9W8I'),
  ('exam_en_A_list_month', 'price_1UaoSxBg8L561PwN0Ycbtz59'),
  ('exam_en_A_list_upfront', 'price_1UaoSzBg8L561PwNKp1ECdE8'),
  ('exam_en_A_founding_month', 'price_1UaoT2Bg8L561PwNbDGlZiVn'),
  ('exam_en_A_founding_upfront', 'price_1UaoT4Bg8L561PwN0KWNuslt'),
  ('exam_de_A_list_month', 'price_1UaoT7Bg8L561PwNSoIeznvV'),
  ('exam_de_A_list_upfront', 'price_1UaoTABg8L561PwN5S5yHU9H'),
  ('exam_de_A_founding_month', 'price_1UaoTDBg8L561PwNYePwkRVq'),
  ('exam_de_A_founding_upfront', 'price_1UaoTHBg8L561PwNOwhzbyF5'),
  ('app_B_list_month', 'price_1UaoTVBg8L561PwNiT46GFST'),
  ('app_B_list_year', 'price_1UaoTWBg8L561PwNAUu1qpXH'),
  ('trial_B_list_once', 'price_1UaoTYBg8L561PwNbkZcx25x'),
  ('help_class_B_list_once', 'price_1UaoTaBg8L561PwN77e7cAl3'),
  ('minutes_30_B_list_once', 'price_1UaoTcBg8L561PwNoPvHuZXE'),
  ('minutes_120_B_list_once', 'price_1UaoTdBg8L561PwNkN67uplc'),
  ('open_en_B_list_month', 'price_1UaoTfBg8L561PwNWrNtB9fL'),
  ('open_de_B_list_month', 'price_1UaoTiBg8L561PwNIwyNLa07'),
  ('b2b_en_B_list_month', 'price_1UaoTjBg8L561PwNDGFFGtfo'),
  ('b2b_de_B_list_month', 'price_1UaoTlBg8L561PwN1xVAiVtY'),
  ('level_en_B_list_month', 'price_1UaoTqBg8L561PwNbJfsTdXw'),
  ('level_en_B_list_upfront', 'price_1UaoTsBg8L561PwNdoSiF45N'),
  ('level_en_B_founding_month', 'price_1UaoTvBg8L561PwNyrdvywNT'),
  ('level_en_B_founding_upfront', 'price_1UaoTxBg8L561PwNi3qf6nFj'),
  ('level_de_B_list_month', 'price_1UaoTzBg8L561PwNG6FhTV7C'),
  ('level_de_B_list_upfront', 'price_1UaoU1Bg8L561PwNjifwe3pl'),
  ('level_de_B_founding_month', 'price_1UaoU4Bg8L561PwNPwFx3MYb'),
  ('level_de_B_founding_upfront', 'price_1UaoU6Bg8L561PwNfqLoY8z9'),
  ('exam_en_B_list_month', 'price_1UaoU9Bg8L561PwNJprf2Yst'),
  ('exam_en_B_list_upfront', 'price_1UaoUBBg8L561PwNw2KY6lWg'),
  ('exam_en_B_founding_month', 'price_1UaoUDBg8L561PwNJyug92oe'),
  ('exam_en_B_founding_upfront', 'price_1UaoUGBg8L561PwNUA0qRqbI'),
  ('exam_de_B_list_month', 'price_1UaoUIBg8L561PwNBi1kDp2R'),
  ('exam_de_B_list_upfront', 'price_1UaoUKBg8L561PwNUQeWSl1b'),
  ('exam_de_B_founding_month', 'price_1UaoUNBg8L561PwNBBQsnzmf'),
  ('exam_de_B_founding_upfront', 'price_1UaoUQBg8L561PwN4IkMG9QZ')
) as v(lookup_key, price_id)
where p.lookup_key = v.lookup_key and p.stripe_price_id is distinct from v.price_id;

-- Verify: expect 220 rows with an id, 0 without, 52 distinct ids.
select count(*) filter (where stripe_price_id is not null) as with_id,
       count(*) filter (where stripe_price_id is null) as without_id,
       count(distinct stripe_price_id) as stripe_prices
from public.price_book;
