# Regional pricing engine, anti-VPN arbitrage, and per-class cost model (Alimun, as of Oct 2026)

Research scope note: I made about 18 tool calls. Primary sources fetched in full were Stripe pricing (Ireland), Stripe Adaptive Pricing docs, Stripe Radar rules reference, Daily.co pricing, LiveKit pricing, Steam partner pricing docs and BDO (EU VAT 2025). Other items come from search-result summaries of secondary sources and are flagged. Stripe fee figures are for a Stripe account domiciled in Ireland/EEA. Alimun's Stripe account country is not stated, so confirm against its own dashboard.

## 1. Purchasing-power pricing methods and how others set country bands

### Takeaway
The practical standard is a USD or EUR anchor price converted per country with a PPP or "multi-variable" index, grouped into 4 to 6 bands rather than priced per country. Steam is the best-documented public example: it offers three conversion methods (FX only, PPP only, or multi-variable) across 37 currencies, plus a minimum-price floor. Stripe's Adaptive Pricing is FX-only. It does not apply a PPP discount, so the PPP logic has to live in Alimun's own price table through `currency_options` or separate Prices per band.

### Cited Findings
- Steam supports "37 different currencies and 4 region groups". From a USD price point it offers three generated conversions: "Exchange rate conversion only", "Purchasing power conversion only" (based on public purchasing-power data) and "Multi-variable conversion" (local purchasing power, the expected cost of comparable entertainment goods, and the exchange rate). A "Propose Pricing" tool suggests local prices, and developers may override them per currency. — [Steamworks pricing docs](https://partner.steamgames.com/doc/store/pricing)
- Steam's floor: the minimum base price must be at least the multi-variable conversion of the USD 0.99 tier, and the lowest transaction price (on discount) is roughly 50% below that minimum. — [Steamworks pricing docs](https://partner.steamgames.com/doc/store/pricing)
- The Steam doc does not say how often its recommendations are refreshed, and it does not describe anti-abuse rules. — [Steamworks pricing docs](https://partner.steamgames.com/doc/store/pricing)
- PPP tooling for SaaS: ParityDeals integrates with Lemon Squeezy, Gumroad, Paddle, Stripe and Shopify. It shows a location-based banner carrying a discount code. — [ParityDeals](https://www.paritydeals.com/solution/saas); [Lemon Squeezy docs: PPP with ParityDeals](https://docs.lemonsqueezy.com/guides/tutorials/ppp-with-paritydeals)
- A secondary guide reports that ParityDeals pricing runs from free to USD 49/month (Builder) or USD 99/month (unlimited), and that it claims built-in Tor/proxy/VPN blocking. This is from a directory listing, not verified on the vendor's own price page. — [GTM Directory: ParityDeals](https://thegtmdirectory.com/tools/paritydeals)
- Band heuristics from a vendor blog (low authority): group countries into 4 to 6 tiers rather than pricing each country; discounts run from 0% for high-income countries to 60-75% for low-income ones; start conservatively (for example 30% for the lowest tier) and test for 30 days. The same blog recommends IP for what the page displays and the billing address for what is actually charged. — [Fungies: PPP SaaS pricing 2026](https://fungies.io/purchasing-power-parity-saas-pricing-2026)
- Stripe Adaptive Pricing converts prices into the local currency in 150+ countries. Stripe "uses machine learning to determine the most relevant presentment currency", and the exchange rate is guaranteed for 24 hours. It is pure FX conversion with no purchasing-power adjustment. — [Stripe docs: Adaptive Pricing](https://docs.stripe.com/payments/currencies/localize-prices/adaptive-pricing.md?payment-ui=stripe-hosted)

### Inferences
- Recommended shape for Alimun (inference): an EUR anchor, 4 bands (for example Band A = 100% for Canada, the EU, the UK and the US; B around 70%; C around 50%; D around 35-40% for Morocco, Colombia, Peru, Bolivia and similar), and a hard floor that covers the variable cost per learner (section 5) plus margin. Steam's "multi-variable" approach (PPP plus the local price of comparable services such as local language schools) is a better model than raw PPP alone. Raw World Bank PPP price-level ratios for countries such as Egypt or Pakistan would imply discounts of 70-80%, below a live-teacher cost floor.
- Store band prices as Stripe Prices with `currency_options` per local currency (MAD, BRL, COP, CAD, and so on). Stripe documents that Adaptive Pricing skips any currency already defined in `currency_options` (section 3). Hand-set local prices in key markets can therefore coexist with automatic FX conversion for the long tail.
- Charm pricing and rounding (inference, unsourced): round to local conventions, for example MAD 199 or 249, BRL 49.90, COP 79,900, CAD 29. Re-check the bands quarterly. Hyperinflation markets (Argentina, Turkey, Egypt) should be priced in USD or EUR or rebased monthly.

### Gaps
- I did not fetch World Bank ICP PPP or price-level-ratio tables, Big Mac index values, or the specific regional discount schedules of Spotify, Netflix, YouTube Premium, Apple, Duolingo, Coursera, Udemy, Notion or Figma. No numbers from those companies are included.
- Paddle's native PPP or "localised pricing" feature was not verified from Paddle docs.
- Whether Steam moved Argentina and Turkey to USD pricing (widely reported for 2023) was not confirmed. My search returned nothing on it.

## 2. Anti-VPN and anti-arbitrage framework (and EU legal limits)

### Takeaway
IP geolocation alone is trivially beaten by a VPN. The robust signal is the payment instrument's country: Stripe exposes the card issuing country and lets Radar compare it with the IP country, and Radar has a built-in anonymous-IP flag. Steam's model is to unlock a store country only through a purchase with a payment method from that country, changeable at most once every 3 months. For EU customers, the Geo-blocking Regulation limits treating EU residents differently by country, so PPP bands should differentiate EU vs non-EU, not between EU member states.

### Cited Findings
- Stripe Radar rules can compare attributes directly. Stripe's own example is `Block if :card_country: != :ip_country:` ("the issuing country of the card doesn't match the country where the payment took place"). — [Stripe Radar rules reference](https://docs.stripe.com/radar/rules/reference)
- Radar has a Boolean `:is_anonymous_ip:` attribute. Stripe's example is to "place payments in review that were made with an anonymous IP address". — [Stripe Radar rules reference](https://docs.stripe.com/radar/rules/reference)
- Radar supports country lists (`:card_country: in @list`) and metadata rules (`::customer:Trusted::`). Metadata rules let Alimun write the assigned band into metadata and check it, for example `Block if ::price_band:: = 'D' and :card_country: not in @band_D_countries`. — [Stripe Radar rules reference](https://docs.stripe.com/radar/rules/reference)
- `:ip_country:` is only available when Stripe.js or Checkout is used. A missing attribute makes `!=` comparisons evaluate false, so `is_missing()` is needed for strict rules. — [Stripe Radar rules reference](https://docs.stripe.com/radar/rules/reference)
- Stripe explicitly warns EU businesses in its Radar docs: "Be aware of the Geo-blocking Regulation and its prohibitions on blocking payments from customers based in EU member states." — [Stripe Radar rules reference](https://docs.stripe.com/radar/rules/reference)
- Radar pricing (Ireland): from €0.05 per screened transaction pay-as-you-go, or from €10/month. — [Stripe pricing IE](https://stripe.com/ie/pricing)
- Steam: the store country can be updated "when you complete your first purchase using a payment method from that country". It can change only once every 3 months, Support will not change it manually, and wallet codes or CD keys cannot be used to change it. — [Steam Support FAQ](https://help.steampowered.com/faqs/view/2B3F-DAEF-846B-A0E8)
- Steam requires the payment method's billing address to be in the purchase country, reported as an anti-VPN measure. — [Guru3D](https://www.guru3d.com/news-story/steam-implements-new-measures-to-avoid-purchases-with-vpncurrency-needs-to-match-country.html); [Steam community thread](https://steamcommunity.com/discussions/forum/1/682986810375196706) (secondary)
- IP intelligence vendors: MaxMind sells anonymizer data (VPN, proxy, Tor, hosting) as a separate Anonymous IP or "Anonymous Plus" product from GeoIP2 City. IPinfo says its paid plans include `is_anonymous`/`is_hosting`. Price figures conflict across secondary sources (MaxMind database products quoted at about USD 24-134/month; IPinfo from about USD 49/month). Treat them as unverified. — [IPinfo vs MaxMind (vendor comparison)](https://ipinfo.io/compare/maxmind-geoip-alternative); [Codersera VPN detection guide 2026](https://codersera.com/blog/how-to-detect-vpn-users-on-your-website/amp/)
- EU Geo-blocking Regulation 2018/302 covers electronically supplied services (cloud, hosting) and location-based services. Secondary summaries say price differences across the EU for such services must not be based purely on the customer's nationality, residence or location. Audiovisual services are excluded. Non-audiovisual copyright content services (e-books, music, software, games) are covered by the access ban but are not subject to Article 4's ban on different general conditions of access. — [Travers Smith](https://www.traverssmith.com/knowledge/knowledge-container/geo-blocking-what-is-it-and-what-are-the-new-rules/); [Osborne Clarke](https://www.osborneclarke.com/insights/geo-blocking-regulation-what-does-it-mean-for-your-business/); [CCPC Ireland](https://ccpc.ie/business/?p=21562). The Commission Q&A page I tried returned 404, so this has not been confirmed from the primary text.

### Inferences
- Layered framework for Alimun (inference):
  1. Display: the page shows the band from IP country (Vercel exposes the `x-vercel-ip-country` header; this is product knowledge and was not fetched).
  2. Checkout: the band is only honoured if the Stripe PaymentMethod's `card.country` (issuing country), or a local method that only works domestically (for example Pix, available through Adaptive Pricing for BR), matches a band-eligible country. Otherwise the customer is re-quoted at the band of the card country.
  3. Radar: review or block when `:is_anonymous_ip:` is true and the band is below A.
  4. Renewal: lock the band to the subscription. If the customer later changes the default card to one from a higher-band country, migrate the subscription to that band at next renewal.
  5. Band changes allowed at most once every 90 days, copying Steam.
- Diaspora and travellers: pricing by card-issuing country (not IP) naturally handles Moroccans travelling (Moroccan card, Morocco price) and Canadians abroad (Canadian card, Canada price). Diaspora paying with a European card pay the European price, which is defensible and simple.
- EU legal: since the regulation is about EU customers, a single price for all EU/EEA countries (Band A) with lower bands only for non-EU countries avoids the main risk. Blocking EU customers' payments by card country between member states would conflict with the regulation, per Stripe's own warning. Get legal confirmation before applying different bands within the EU (for example Bulgaria vs Denmark).
- Live teacher-led classes may be argued not to be "electronically supplied services" (see section 4), which could even take them outside the regulation's ESS category. That is unverified and should not be relied on.

### Gaps
- Exact current MaxMind, IPinfo and IPQualityScore list prices were not verified on the vendors' pages.
- Spotify and Netflix internal anti-arbitrage mechanisms (for example Spotify Family address checks, Netflix household rules) were not researched in this pass.
- Morocco local methods (CMI) and Mercado Pago are not Stripe-native as far as I found. Stripe's Adaptive Pricing list includes Pix but not CMI or Mercado Pago. — [Stripe docs](https://docs.stripe.com/payments/currencies/localize-prices/adaptive-pricing.md?payment-ui=stripe-hosted)

## 3. Stripe specifics: Adaptive Pricing, multi-currency, fees, local methods, Tax

### Takeaway
On Stripe Ireland/EEA pricing, a non-EEA card (Morocco, Canada, Brazil) costs 3.15% + €0.25, plus 2% if currency conversion is needed. That is roughly double an EEA card at 1.5% + €0.25. Adaptive Pricing is free to the merchant (the customer pays a 2-4% FX fee) but is FX-only. For cross-border subscriptions it supports only cards, Link, Apple Pay and Google Pay.

### Cited Findings
- Stripe IE card fees: standard EEA 1.5% + €0.25; premium EEA 2.8% + €0.25; UK 2.5% + €0.25; international 3.15% + €0.25; currency conversion +2%. — [Stripe pricing IE](https://stripe.com/ie/pricing)
- Disputes €20 each; a countered dispute costs another €20, refunded if won. Smart Disputes charges 30% of the disputed amount on wins. — [Stripe pricing IE](https://stripe.com/ie/pricing)
- Stripe Billing pay-as-you-go 0.7% of Billing volume. Stripe Tax 0.5% per transaction where registered (no-code), or €0.45 per transaction via the API. Standard payouts free; instant payouts 1% (min €0.50); multi-currency settlement 1% of payout volume. — [Stripe pricing IE](https://stripe.com/ie/pricing)
- Adaptive Pricing: the merchant pays 0% and customers pay 2-4% built into the rate. The mid-market rate is guaranteed for 24 hours. It is always on for Payment Links and toggleable for Checkout, and it is not available with Elements plus the PaymentIntents API. Prices must be in a settlement currency. — [Stripe docs](https://docs.stripe.com/payments/currencies/localize-prices/adaptive-pricing.md?payment-ui=stripe-hosted)
- Adaptive Pricing does not convert into a currency already set in a Price's `currency_options`. — [Stripe docs](https://docs.stripe.com/payments/currencies/localize-prices/adaptive-pricing.md?payment-ui=stripe-hosted)
- "For cross-border subscriptions, Adaptive Pricing supports only card payments, Link, Apple Pay, and Google Pay." Local-currency-only methods include Pix, iDEAL, SEPA, BLIK, PayPal and others. — [Stripe docs](https://docs.stripe.com/payments/currencies/localize-prices/adaptive-pricing.md?payment-ui=stripe-hosted)
- Supported presentment countries include MA (Morocco), CA, BR, CO, CL, PE, UY, PY and BO. Argentina (AR) is not in the list. — [Stripe docs](https://docs.stripe.com/payments/currencies/localize-prices/adaptive-pricing.md?payment-ui=stripe-hosted)
- Subscription events carry `presentment_details` (presentment amount and currency), and refunds use the original rate. — [Stripe docs](https://docs.stripe.com/payments/currencies/localize-prices/adaptive-pricing.md?payment-ui=stripe-hosted)

### Inferences
- Charging Moroccan or Colombian customers in EUR avoids the 2% conversion surcharge on Alimun's side, but the customer's bank applies its own FX. Charging in MAD or COP through `currency_options`, settled to EUR, triggers the +2%.
- Total Stripe take on a typical €20 non-EEA card subscription (computed from the cited fees): 3.15% + €0.25 + 2% FX + 0.7% Billing + 0.5% Tax ≈ €1.52 (7.6%). On an EEA card without FX: about €0.69 (3.4%).

### Gaps
- Stripe pricing for a non-Irish Stripe account (for example France or Spain) may differ slightly. It was not checked.
- Availability of Mercado Pago, Boleto, PSE (Colombia) or CMI through Stripe for an EU merchant was not verified.

## 4. Tax obligations (EU VAT OSS, Canada, Brazil, Colombia, Morocco, UK)

### Takeaway
Since 1 January 2025, live, virtually attended education to EU consumers is taxed where the customer lives, at that country's rate, and can be declared through the OSS. Live interactive teaching is generally treated as an educational service, not an electronically supplied service. Canada requires simplified GST/HST registration above CAD 30,000 of Canadian sales in 12 months, with a parallel QST rule. Colombia (19%) and Brazil (new CBS regime, 2026) also tax foreign digital suppliers. Morocco is unclear.

### Cited Findings
- From 2025, online events and online courses supplied B2C in the EU "will be taxed at the applicable VAT rate in the member state of the recipient". For B2B the special rule applies only to admission to events. — [BDO](https://www.bdo.co.uk/en-gb/insights/tax/vat-and-indirect-taxes/new-vat-rules-for-online-entertainment-culture-and-education-in-2025)
- Pre-recorded training without teacher contact is an ESS. The same training delivered live, where the teacher answers questions, "is an online educational event or educational service". ESS rules are unchanged. — [BDO](https://www.bdo.co.uk/en-gb/insights/tax/vat-and-indirect-taxes/new-vat-rules-for-online-entertainment-culture-and-education-in-2025)
- OSS can be used for B2C. Without OSS, the supplier must register in each member state. No EU VAT is due for non-EU customers, though the customer's country may tax the supply. — [BDO](https://www.bdo.co.uk/en-gb/insights/tax/vat-and-indirect-taxes/new-vat-rules-for-online-entertainment-culture-and-education-in-2025); [ACCA AB magazine](https://abmagazine.accaglobal.com/content/abmagazine/global/articles/2024/jul/technical/vat-and-virtual-services.html)
- Canada: non-resident digital sellers must register under the simplified GST/HST regime once taxable supplies to Canadian consumers exceed CAD 30,000 over 12 months (since 1 July 2021). There is no security deposit, filing is quarterly, and no input tax credits are allowed. Quebec runs a parallel QST regime with its own CAD 30,000 threshold. — [Stripe guide: Canada VAT](https://stripe.com/ie/resources/more/canada-vat); [Forvis Mazars](https://www.forvismazars.com/ca/en/insights/latest-news/new-gst-hst-rules-for-digital-economy-businesses) (secondary; not confirmed on the CRA site in this pass)
- Colombia: 19% VAT on foreign digital services since 1 July 2018 with no threshold. Card payments can be handled by withholding by payment processors. — [vatcalc](https://vatcalc.com/?p=6605); [CIAT WP 05/2025](https://www.ciat.org/Biblioteca/DocumentosdeTrabajo/2025/WP_05_2025.pdf)
- Brazil: per vatcalc, Decree 12,955/2026 (30 April 2026) brings non-resident digital providers into the federal CBS from 1 August 2026, with no threshold and an optional local representative. Bloomberg Law had expected 2027 at about 28%. The sources conflict, so check the decree. — [vatcalc Brazil 2026](https://www.vatcalc.com/brazil/brazil-vat-non-resident-digital-services-providers-marketplaces-2026/); [Bloomberg Law](https://news.bloomberglaw.com/daily-tax-report/do-not-publish-63)
- Morocco: only the 20% general VAT rate was found. No confirmed non-resident digital-services regime. — [Avalara VATlive](https://www.avalara.com/us/en/vatlive/global-vat-gst-on-e-services.html?sa=X)

### Inferences
- Whether Colombia and Brazil's foreign-digital-services regimes catch live human teaching (vs ESS) is the key question. Get local advice before registering.
- Stripe Tax at 0.5% per transaction can monitor thresholds and calculate EU, Canada and other rates once Alimun is registered.

### Gaps
- UK VAT treatment for a non-UK supplier of live online lessons (UK has a nil registration threshold for non-established businesses) was not researched in this pass.
- Exact CRA and Revenu Québec primary text was not fetched.

## 5. Per-class cost model (video, payments, other)

### Takeaway
Video is cheap: under €0.35 per learner per 60-minute group class on Daily, and under €0.05 on LiveKit. Payment costs (3.4-7.6% of revenue) and teacher pay dominate the variable costs. Teacher pay, CAC and AI feedback costs were not sourced here.

### Cited Findings
- Daily video: USD 0.0015-0.004 per participant-minute (USD 0.004 in the 10,001-100,000 tier), with the first 10,000 participant-minutes free each month. Audio-only is USD 0.00036-0.00099. Cloud recording costs USD 0.01349 per recorded minute (wall-clock time, not per participant) plus USD 0.003 per minute storage. Realtime transcription is USD 0.0059 per unmuted participant-minute, and post-call transcription USD 0.0043 per recorded minute. Krisp noise cancellation is USD 0.0002 per participant-minute. — [Daily pricing](https://www.daily.co/pricing/video-sdk/)
- LiveKit Cloud: Build is free with 5,000 WebRTC minutes. Ship is from USD 50/month with 150,000 minutes, then USD 0.0005 per minute and 250 GB included, then USD 0.12 per GB. Scale is from USD 500/month with 1.5M minutes, then USD 0.0004 per minute. — [LiveKit pricing](https://livekit.com/pricing)
- Stripe fees: see section 3. Dispute cost €20 each. — [Stripe pricing IE](https://stripe.com/ie/pricing)

### Inferences (worked estimates from the cited prices)
- 60-minute group class, 6 learners plus 1 teacher = 420 participant-minutes:
  - Daily at USD 0.004 = USD 1.68 per class (USD 0.28 per learner). Recording adds USD 0.81 per class.
  - LiveKit Ship overage at USD 0.0005 = USD 0.21 per class.
- 1:1 class of 60 minutes = 120 participant-minutes, about USD 0.48 on Daily.
- 10,000 free Daily minutes is about 24 group classes a month.
- At 8 group classes per month per learner, video costs about USD 2.24 per learner per month on Daily (well under 10% of a Band D price).
- Payment costs from section 3 come to about €0.69-1.52 on a €20 subscription. One chargeback (€20) wipes out a full month of revenue for a Band D customer, so require 3DS on low-band and non-matching cards.

### Gaps
- 100ms, Whereby and self-hosted Jitsi costs were not researched.
- Not researched: teacher hourly rates per market, AI/LLM homework-feedback cost per submission, support cost, Resend/Supabase/Vercel per-user cost, and CAC benchmarks for language subscriptions.

## 6. Global single platform vs regional platforms or brands

### Takeaway
I found no sourced evidence in this pass. Everything below is reasoned from the mechanics above.

### Cited Findings
- (none sourced in this pass)

### Inferences
- A single global platform with country bands and locale folders (which Alimun already has: ar, de, es, fr, it, ma, pt, zh) keeps one Stripe account, one OSS registration and one codebase. Banding by card country removes most of the price-perception leakage that separate regional brands would otherwise be needed for.
- Separate regional brands mainly help when local price anchoring visible on public pages is a problem, or when local entities are required for local payment methods (for example CMI in Morocco). Both are costlier (multiple legal entities, tax registrations and SEO properties).

### Gaps
- Not researched: case studies (for example Cambly, Preply, italki, Open English), hreflang/SEO impacts, time-zone cohort scheduling, and per-region teacher pool economics.
