# Payments, acquisition and platform strategy for Alimun (EU Stripe account; learners in MA, CA, BR, CO, PE, CL, AR, MX, IN, TR, EG, TN, PH), 2025-2026

Research date: 26 Oct 2026. About 25 tool calls. Many sources are vendor or comparison blogs; these are marked. Where no reliable source was found, the item is under Gaps.

## 1. Payments per country: what an EU Stripe account can charge, local methods, alternatives, fees, FX limits

### Takeaway
An EU (Ireland-priced) Stripe account can take cards from all listed countries at the "international card" rate (3.15% + EUR 0.25, plus 2% if currency conversion is needed). For subscriptions it also gets Brazil's Pix Automático, which is open to businesses outside Brazil. OXXO does not support recurring payments at all. India works only through RBI e-mandates: 24h pre-debit notice, and 3DS on every charge above INR 15,000. Morocco (20,000 MAD per year e-commerce allowance), Argentina (30% tax collected on foreign card spend) and Egypt (bank-level FX card caps, eased in 2025) limit what learners can pay with cards. Most other local methods (PSE, Nequi, Fawry, Meeza, CMI, Turkish installments) need a local-acquiring provider such as dLocal or EBANX.

### Cited Findings
**Stripe card and method fees (EU account)**
- Stripe Ireland pricing: standard EEA cards 1.5% + EUR 0.25; UK cards 2.5% + EUR 0.25; international cards 3.15% + EUR 0.25, plus 2% if currency conversion is required. Stripe Billing pay-as-you-go is 0.7% of Billing volume. — [Stripe IE pricing](https://stripe.com/ie/pricing)
- Stripe local-method pricing for an IE account lists Pix at 2% per successful charge, plus 1.5% for international transactions and 2% if currency conversion is required. UPI is listed at the same fee. No fees are shown for Boleto, OXXO, PSE, Mercado Pago, Nequi, Fawry, Meeza or Turkish methods. — [Stripe IE local payment methods pricing](https://stripe.com/ie/pricing/local-payment-methods)

**Brazil: Pix and Pix Automático**
- Stripe accounts in AT, BE, DE, ES, FR, IE, IT, NL, PT and other EEA countries (plus GB, CH, US, CA, AU, SG) can accept Pix from customers in Brazil, settling in EUR for EEA accounts. — [Stripe Pix docs](https://docs.stripe.com/payments/pix)
- On the same page, "Businesses outside Brazil can accept Pix payments from customers in Brazil, including eligible recurring payments through Pix Automático." Pix Automático is *not* available to businesses domiciled in Brazil. Checkout subscription mode supports Pix Automático. Each recurring charge triggers a bank pre-debit notice and a 3-day wait, and the PaymentIntent can take up to 7 days with retries. — [Stripe Pix docs](https://docs.stripe.com/payments/pix)
- Stripe announced Pix recurring payments support in its changelog on 22 Apr 2026. — [Stripe changelog](https://docs.stripe.com/changelog/dahlia/2026-04-22/pix-recurring-payments-support)
- Limits for Brazilian customers paying foreign businesses: USD 3,000/day and USD 10,000/month per customer per business. The minimum payment is BRL 0.50. — [Stripe Pix docs](https://docs.stripe.com/payments/pix)
- IOF tax of 3.5% applies to Brazilian customers paying foreign businesses. By default the customer pays it; the merchant can absorb it with `amount_includes_iof=always`. EBANX is Stripe's Pix partner and appears on the customer's statement. Pix disputes cannot be contested. — [Stripe Pix docs](https://docs.stripe.com/payments/pix)
- EBANX data (June 2026 press release): more than 60% of Pix Automático users are new subscribers to digital platforms. Stripe, Spreedly and Zuora partner with EBANX for Pix recurring. — [AAP / Cision release](https://www.aap.com.au/aapreleases/cision20260611ae81376/)

**Mexico: OXXO**
- OXXO (cash voucher, MXN, customers in Mexico) does not support recurring payments and is not supported in Checkout subscription or setup mode. Stripe docs conflict on EEA access: one version calls it private preview for EEA/UK accounts, another lists EU countries as eligible. — [Stripe OXXO docs](https://docs.stripe.com/payments/oxxo); [MemberPress guide (third party)](https://memberpress.com/docs/enable-oxxo-with-stripe-and-memberpress/)

**India: RBI e-mandates, UPI**
- RBI raised the no-extra-authentication limit for recurring e-mandates from INR 5,000 to INR 15,000 per transaction (circular 16 Jun 2022, older but still the reference). AFA is required at registration, modification and revocation. — [Khaitan & Co](https://www.khaitanco.com/thought-leaderships/RBI-enhances-transaction-limits-for-processing-of-e-mandates-for-recurring-transactions:-from-INR-5000-to-INR-15000); [Business Standard](https://www.business-standard.com/article/finance/new-e-mandate-guidelines-rbi-enhances-limit-for-e-mandates-on-credit-debit-cards-to-rs-15-000-122060800417_1.html)
- RBI has issued a "Digital Payments - E-mandate Framework, 2026" covering domestic and cross-border recurring transactions on cards, PPI and UPI. I could not verify the details. — [RBI notification PDF](https://rbidocs.rbi.org.in/rdocs/notification/PDFs/396MDD002E435ECA145509929FC3ACBCFD0E9.PDF)
- Stripe FAQ on these rules:
  - The rules cover cross-border charges on India-issued cards, in INR and in other currencies.
  - Cardholders must get a pre-debit notice at least 24h before each charge, with an option to opt out. Stripe Billing can send these notices.
  - Charges above INR 15,000 (or the equivalent) need 3DS each time.
  - Major issuers support non-INR mandates, though some issuers may not.
  - Without a mandate, the customer must come back on-session and pay with 3DS.
  - The FAQ gives no failure-rate figures. — [Stripe support FAQ](https://support.stripe.com/questions/rbi-e-mandate-regulations-faqs)
- UPI for foreign merchants: sources conflict.
  - EximPe, a competing vendor, says Stripe does not offer UPI to non-Indian merchants and that a provider with an RBI PA-CB licence is required (about 25 entities hold one in 2026). — [EximPe blog (vendor)](https://eximpe.com/blog/psp/stripe-for-india-what-works-what-doesnt-and-where-global-merchants-lose-indian-customers)
  - Stripe's own IE local-methods pricing page lists UPI at 2% + 1.5% international (+2% FX). — [Stripe IE local payment methods pricing](https://stripe.com/ie/pricing/local-payment-methods)
  - Check the Stripe Dashboard to confirm.

**Morocco**
- 2026 Office des Changes allowances, per a consultancy summary of IGOC 2026 (Art. 120-122): the e-commerce allowance for individuals is a fixed MAD 20,000 per year. It is usable only through an international card linked to the dirham account and covers software, subscriptions, goods and tickets. The personal travel allowance is MAD 100,000 per year plus 30% of income tax paid, up to MAD 500,000. — [Upsilon Consulting (secondary)](https://upsilon-consulting.com/dotations-office-des-changes-maroc-2026/)
- The official Office des Changes FAQ confirms that allowances can be loaded on international payment cards within IGOC 2026 limits. — [Office des Changes FAQ](https://www.oc.gov.ma/fr/faq/le-montant-de-la-dotation-pour-voyages-personnels-peut-etre-charge-sur-une-carte-de-paiement)

**Egypt**
- An October 2022 Central Bank of Egypt instruction capped foreign-currency transactions on domestic credit cards at USD 250 per month. Some customers had limits as low as USD 50-100. Prepaid cards were barred from international use in 2023. — [Techpoint Africa (Jan 2024)](https://techpoint.africa/2024/01/17/egyptian-banks-impose-card-limits/); [CairoScene](https://cairoscene.com/Buzz/Egypt-s-Banks-Tighten-Limits-for-Foreign-Currency-Credit-Card-Spending)
- Easing in 2025:
  - In April 2025, NBE raised foreign-currency limits on its credit cards, up to EGP 300,000 at the top tier. — [CairoScene](https://cairoscene.com/buzz/national-bank-of-egypt-raises-limit-for-traveling-clients-to-usd-5-000)
  - NBE, CIB and Banque Misr cut foreign-use fees from 5% to 3% (Banque Misr from 13 Aug 2025).
  - CBE dropped the proof-of-travel requirement. — [Gulf News](https://gulfnews.com/business/egyptians-can-splurge-abroad-again-as-banks-ease-card-curbs-1.2025008)
  - Limits vary by bank and card tier. — [HSBC Egypt foreign usage limits](https://www.egypt.hsbc.com/credit-cards/foreign-usage-limits)

**Argentina**
- The PAIS tax was removed for card spending (announced from 24 Dec 2024; the legal sunset is described as Jan 2026). A 30% income-tax "percepción" stays on foreign card payments (RG 5617/2024). It can be credited against income or wealth tax or refunded. Educational software, books and health are reported as exempt. — [EY Tax News (Jan 2025)](https://taxnews.ey.com/news/2025-0160-argentina-eliminates-the-impuesto-pais); [iProfesional](https://www.iprofesional.com/finanzas/448460-como-impacta-la-baja-del-30-en-consumos-con-tarjeta-tras-el-fin-del-impuesto-pais); [Mercado.com.ar](https://mercado.com.ar/actualidad-tributaria/el-fin-del-impuesto-pais-reduce-el-costo-de-consumos-en-dolares-con-tarjeta-en-argentina)

**Turkey**
- Installments (taksit) are generally possible only through a domestic acquirer connected to Turkish banks. Cross-border acquiring can add shopper surcharges. This is an older source (2015, Adyen via Statista). — [Statista](https://www.statista.com/statistics/458525/preferred-digital-payment-methods-in-turkey)
- iyzico handles installments with Turkish banks and offers cross-border merchant options for foreign sellers. — [iyzico gateway page (vendor)](https://ecosire.com/apps/shopify/shopify-iyzico-gateway)
- A vendor blog calls 3DS 2.2 "effectively mandatory" in 2026. This is unverified. — [Zunapro (vendor)](https://www.zunapro.com/turkey/en/blog/payment-systems-ecommerce-turkey)

**Alternatives and their fees**
- dLocal Go, self-serve published rates excluding local taxes:
  - Argentina: cards 3.49%, cash 2.99%, bank transfer 1.99%.
  - Brazil: cards 2.99%, Pix 0.99%, Boleto USD 0.50, bank transfer 1.99%.
  - Range across countries from 0.99% up to 7.99%, plus a USD 1 refund fee and a USD 5 chargeback fee.
  - Sources: [dLocal Go coverage](https://dlocalgo.com/en/coverage); [paymentproviders.io (aggregator)](https://paymentproviders.io/compare/dlocal-go-vs-a-pay)
- EBANX publishes no rate card ("contact vendor"). A competitor puts it at about 2.7% + 30c, but this is unverified. One 2021 user review reports about 5% plus USD 200/month (old, anecdotal). — [Capterra](https://www.capterra.com/p/178524/Online-Payments-in-Latin-America/pricing/); [Rapyd (competitor)](https://www.rapyd.net/blog/ebanx-vs-dlocal-which-is-right-for-latin-american-payments/)
- Merchants of record:
  - Paddle: 5% + 50c all-inclusive, no geographic surcharge. — [Dodo Payments (competitor blog)](https://dodopayments.com/blogs/paddle-vs-lemon-squeezy/)
  - Lemon Squeezy: 5% + 50c. Sources conflict on a +1.5% international surcharge, and the platform is moving toward Stripe Managed Payments. — [Rework](https://resources.rework.com/tools/billing-revenue/paddle-vs-lemon-squeezy)
  - Stripe Managed Payments: reported as +3.5% on top of standard processing. — [Dodo Payments](https://dodopayments.com/blogs/cheapest-merchant-of-record)

**Card approval rates, cross-border vs local (vendor claims only)**
- Mexico: local acquiring is about 80%+ approval vs about 50-60% cross-border, a gap of 20-30 points. — [Nuvei](https://www.nuvei.com/posts/evaluating-payment-strategies-for-the-mexican-market-direct-acquiring-versus-cross-border-models)
- LatAm: local cards 60-80% vs offshore 20-45%. — [CommerceGate](https://www.commercegate.com/local-acquiring-boosting-authorization-rates-in-latam/)
- Approval can differ by 10-20% depending on the processing setup, and cross-border routing especially hurts domestic debit cards. — [Rapyd LatAm playbook 2026](https://www.rapyd.net/wp-content/uploads/2026/05/latam-payments-playbook.pdf)
- About 29% of LatAm cards are enabled for international payments. This claim cites no source. — [CentroBill](https://centrobill.com/blog/adult-merchants-boost-authorization-rates-payment-strategies/)

### Inferences
- Brazil is the strongest local-method case. Pix Automático through the existing EU Stripe account is now possible for subscriptions, with no new provider needed. Absorbing the 3.5% IOF may be worth testing. Note that Pix charges settle 3+ days after the pre-debit notice, so the subscription state logic must tolerate a `processing` status.
- Mexico: OXXO cannot carry a subscription. Options are cards only, or an OXXO prepaid "pack" model (one-off purchase of N months).
- India: the e-mandate flow makes renewals fragile. Expect some renewals to need the learner back on-session. Keep monthly prices well under INR 15,000 so 3DS is not needed on every charge, and confirm UPI eligibility in the Dashboard.
- Morocco: MAD 20,000/year (about EUR 1,850, estimate) easily covers a monthly class subscription. But it is shared with all of the learner's other online foreign spend, and only learners holding an "international" card can pay at all.
- Colombia, Peru, Chile, Argentina, Mexico debit, Egypt, Turkey installments and Tunisia: local acquiring through dLocal or EBANX is the realistic fix if card approval proves low. An MoR such as Paddle costs about 5% + 50c but removes VAT/tax handling. That is likely costlier than Stripe at Alimun's ticket sizes (estimate).

### Gaps
- No primary source found on Stripe access to PSE/Nequi (Colombia), Mercado Pago, CMI (Morocco), Fawry/Meeza (Egypt), Tunisia's dinar convertibility rules or the Philippines (GCash/Maya).
- No public fees for Razorpay international or PayU LatAm in this pass. The Tunisia allowance for online foreign payments was not researched.
- No independent (non-vendor) data on cross-border subscription decline rates per country.
- The Morocco MAD 20,000 figure comes from a secondary consultancy page. It should be verified in the official IGOC 2026 text.
- The details of RBI's 2026 e-mandate framework, including any change to INR 15,000, were not verified.

## 2. Acquisition cost and retention benchmarks

### Takeaway
Meta CPMs in Alimun's markets run about 5-15x cheaper than the US. India, Egypt, the Philippines and Argentina are cheapest (about USD 1-3.5 Facebook CPM); Brazil and Mexico are about USD 2-5; Canada is about USD 11-18. No source gives education-specific CPA by these countries. Trial conversion is weaker and more variable in LatAm and MEA (RevenueCat). Consumer e-learning monthly churn of about 5% is the best weak anchor; no live-tutoring-specific churn data was found.

### Cited Findings
- Meta CPM ranges for 2026 (Facebook / Instagram), with no methodology stated. Peru, Morocco and Tunisia are not listed. — [Adligator, 31 Mar 2026](https://adligator.com/blog/meta-ads-cpm-by-country-benchmarks)

  | Country | Facebook CPM (USD) | Instagram CPM (USD) |
  |---|---|---|
  | US | 16-21 | 20-28 |
  | Canada | 11-14.5 | 14-18 |
  | UK | 10-13 | 13-17 |
  | Germany | 8-11 | 10-14 |
  | Spain | 5.5-8 | 7-10 |
  | Chile | 3-4.5 | not given |
  | Brazil | 2.5-4 | 3.5-5.5 |
  | Mexico | 2-3.5 | 3-5 |
  | Turkey | 2-3.5 | 3-5 |
  | Colombia | 1.8-3 | not given |
  | Egypt | 1.5-2.5 | 2-3.5 |
  | Philippines | 1.5-3.5 | 2.5-4.5 |
  | Argentina | 1.5-3 | 2.5-4.5 |
  | India | 1-1.8 | 1.5-2.8 |

- Other CPM figures: US about USD 16 and India about USD 1.36 (Lebesgue ecommerce data, March 2026). EdTech CPM is quoted at USD 5-9 globally, with India at the low end, and education CPC at about USD 0.70. — [Stackmatix 2026](https://stackmatix.com/blog/platform-ad-cost-benchmarks-country-industry-2026); [Vaizle](https://insights.vaizle.com/facebook-ads-cost/)
- Low-advertiser markets such as Egypt keep costs low. — [Jon Loomer](https://www.jonloomer.com/strategically-target-countries-for-quality-leads-with-meta-ads/)
- RevenueCat State of Subscription Apps 2025:
  - Trial conversion is led by North America and APAC, while MEA and LatAm show wider variability.
  - 30% of annual subscribers cancel within the first month.
  - Source: [RevenueCat SOSA 2025](https://revenuecat.com/state-of-subscription-apps-2025); [Subscription Insider](https://subscriptioninsider.com/article-type/news/revenuecats-state-of-subscription-apps-2025-report-ais-dominance-retention-challenges-and-the-shift-away-from-pure-subscriptions)
- RevenueCat 2026 data on 17,000 apps: median trial conversion is 42.5% for trials of 17+ days vs 25.5% for trials of 4 days or less. Monthly-plan conversion "tops out at two weeks". — [SaaStr](https://saastr.com/what-17000-subscription-apps-tell-us-about-free-trial-length-annual-plans-convert-86-better-with-30-day-trials-monthly-tops-out-at-two-weeks-and-ai-apps-hit-a-wall-at-16-days); [RevenueCat blog](https://www.revenuecat.com/blog/growth/free-trial-length.md)
- Churn benchmarks:
  - Education/e-learning averages about 4.9% monthly churn: about 3.8 points voluntary and 1.1 points from payment failures (thin methodology). — [Focus Digital](https://focus-digital.co/average-churn-rate-subscription-services/)
  - Tutoring rule of thumb: under 5% monthly is ideal. — [StartupFinancialProjection (weak)](https://startupfinancialprojection.com/blogs/kpis/tutoring-service)
  - Stripe consumer ranges: fitness 10-15%, SaaS 5-7% monthly. — [Stripe churn 101](https://stripe.com/resources/more/customer-churn-rates-101)
  - Recurly offers an education churn benchmark (gated). — [Recurly](https://info.recurly.com/churn-benchmark-report-education)
- Influencer rates:
  - India 2026: nano (1K-10K followers) Rs 2,000-8,000 per post or Reel; micro (10K-100K) Rs 8,000-80,000 per deliverable. Top-tier rates rose 25-45% in two years. — [upGrowth (agency)](https://upgrowth.in/influencer-marketing-pricing-india/)
  - Global micro-influencer Instagram posts: USD 100-500 (Kolsquare) to USD 35-450 (Collabstr). — [Kolsquare](https://www.kolsquare.com/en/blog/how-much-does-influencer-marketing-cost-in-2025); [Collabstr](https://collabstr.com/blog/influencer-costs-2025)
- Community and founder-led growth example: Open English grew in LatAm on founder Andrés Moreno's "homemade" TV commercials. It claims 3M+ students trained and calls itself the largest online English school in LatAm. — [Refresh Miami](https://refreshmiami.com/qa-with-andres-moreno-miamitech-og-on-our-citys-0-to-1-evolution-and-how-we-can-go-from-1-to-100/); [Nathan Lustig podcast (2018)](https://www.nathanlustig.com/2018/09/11/ep-54-andres-moreno-helping-latin-america-learn-english-through-openenglish/)

### Inferences
- With a Facebook CPM of about USD 2-4 in Brazil or Mexico vs USD 16-21 in the US, the same creative buys roughly 5-8x the impressions. However, lower trial conversion, payment approval and price points in those markets narrow the CAC/LTV gap. Payment approval is a bigger lever there than ad cost (inference).
- Payment failures account for about 1.1 of 4.9 points of e-learning churn, and cross-border approval is low. So dunning, local methods (Pix Automático) and card updater are churn tools, not just payment tools.
- Use trials of two weeks or less for monthly plans. Longer trials suit annual plans (RevenueCat 2026).

### Gaps
- No country-level education CPA or CPC for Morocco, Tunisia, Peru or Egypt. No Google Ads benchmarks by region were gathered.
- No published churn for Preply, Cambly, Lingoda or italki. No live-cohort-specific churn data.
- No Brazil- or Morocco-specific influencer price data.
- No documented referral-programme results from language-learning companies were found in this pass.

## 3. Global brand with regional prices vs regional brands or entities

### Takeaway
The large online tutoring and language players (Preply, italki, Cambly, Lingoda, Duolingo) run one global brand, localise the site per language, and vary price by market. Open English is the main regional-brand counterexample. It built a LatAm-only brand with heavy local TV and founder-face marketing and reached claimed scale (3M+ learners). Public statements explaining these choices are scarce. For a small school, one global brand with localised language folders and country pricing matches the dominant pattern.

### Cited Findings
- Preply:
  - Expanded first into nearby Eastern European markets (Belarus, Kazakhstan, Poland, Russia), entering Poland with a localised site version (2015); Mexico and Brazil came later. — [Inventure (2015)](https://inventure.com.ua/en/news/ukraine/preply-raised-dollar1.3-million-to-expand-its-activity-across-europe); [Wikipedia](https://en.wikipedia.org/wiki/Preply)
  - The non-US push built tutor supply before the US. By about 2021, about one third of revenue was from the US. — [Sacra (analyst)](https://sacra.com/chat/h/61331b9d-2251-461d-9807-87c4a60e6490/)
  - Raised a USD 150M Series D at USD 1.2B and describes itself as "human-led, AI-enabled". — [Nasdaq video](https://www.nasdaq.com/videos/preply)
- Analyst view:
  - Live tutoring can be sold as a subscription with standardised pricing and fixed tutor pay, with Cambly as the example.
  - Preply should move from hour packs to tutor-level subscriptions to lift retention. This is a proposal, not company data.
  - Source: [Sacra](https://sacra.com/chat/h/876c40ce-927f-4977-bf60-a7f8bcab517c/)
- Novakid:
  - Single global brand for kids' English.
  - As of June 2021, clients were 80% Europe, 15% MENA and 5% APAC.
  - Its Series B (USD 35M) funded expansion into Asia and strengthening in Europe and MENA.
  - Says it adapts to local cultural diversity per region (older, 2021).
  - Sources: [Leta VC](https://www.leta.vc/news/novakid-raises-35m-seriesb-support-expansion); [Silicon Canals](https://siliconcanals.com/poland-based-edtech-startup-novakid-raises-e1-3m-to-promote-cultural-diversity-to-kids/)
- Duolingo:
  - Prices differ by country. In Q1 2025 it raised prices for new Super users in select markets after A/B tests.
  - Max in India was USD 70/year; the CEO called this too high and planned to lower it as costs fall.
  - Source: [Substack analysis of Q1 2025 call (secondary)](https://sergeycyw.substack.com/p/duolingo-q1-2025-earnings-analysis)
  - Duolingo lists packaging and pricing as conversion levers. — [Duolingo shareholder letter (Q3 2022)](https://investors.duolingo.com/static-files/ba129c8d-9591-4f95-9c9d-a90caf3c469f)
- Open English (regional model):
  - LatAm-focused brand whose market strategy rests on quirky homemade commercials starring the founder.
  - Expanded to Brazil, reportedly with 10,000 students in its first year (academic blog, weak).
  - 500,000 students and a valuation above USD 350M in 2017 (older).
  - Sources: [UBC student blog](https://blogs.ubc.ca/biancapinasco/?p=9); [Revista EyN (2017)](https://www.revistaeyn.com/empresasymanagement/las-7-fases-del-exito-segun-el-ceo-de-open-english-PTEN1081086)
- Localisation of payments supports the regional-operations argument: local acquiring raises approval 20-30 points in Mexico (see Q1). — [Nuvei](https://www.nuvei.com/posts/evaluating-payment-strategies-for-the-mexican-market-direct-acquiring-versus-cross-border-models)

### Inferences
- **SEO and hreflang:**
  - A single domain with language folders keeps domain authority in one place. This is the Preply/italki pattern and matches Alimun's existing `ar de es fr it ma pt zh` folders.
  - Country-specific variants (es-MX vs es-CO, fr-MA vs fr-CA) only matter if prices or copy actually differ per country.
  - This is general SEO practice, not sourced here.
- **Trust:** Regional brands win on local familiarity (Open English's local TV and founder face). A global brand can borrow it through local payment methods (Pix, OXXO packs), local-currency prices and local testimonials, but per CLAUDE.md these must be real.
- **Time zones:** Live cohorts force regional scheduling anyway. For example, the Americas run UTC-3 (BR, AR, CL) to UTC-5/-6 (CO, PE, MX) and Canada UTC-3.5 to UTC-8, MENA runs UTC+0/+1 to +3, India is UTC+5:30, the Philippines is UTC+8 and Turkey is UTC+3. So cohort calendars become regional even under one brand. Offsets are general knowledge, not from a sourced document.
- **Entities and tax:**
  - Selling from an EU entity through Stripe avoids local entities but leaves Alimun to register or collect local digital-services VAT/GST where required. Several of the target countries (e.g. India, Mexico, Colombia, Chile, Turkey, Egypt) tax foreign digital services; this was not verified in this pass.
  - An MoR (Paddle about 5% + 50c) removes that burden at a higher fee.
- **Regulation:** No country-specific licensing for online language classes was found. The main regulatory constraints are on payments and FX (RBI e-mandates, Morocco allowance, Egypt and Argentina card rules).

### Gaps
- No public statements from Preply, italki, Lingoda or Cambly explaining why they chose a single global brand. No TechCrunch or Rest of World pieces found in this pass.
- EF, Berlitz franchises and Wizard (Pearson-owned in Brazil, later sold) were not researched.
- No sourced hreflang or SEO case study for edtech.
- Digital-services tax obligations per target country (VAT on electronic services) were not verified.
