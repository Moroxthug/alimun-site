# Legal limits on subscription pricing and urgency tactics (EU, Canada/Quebec, Brazil, Morocco, Colombia, Mexico, India, Turkey), 2023-2026

Not legal advice. These notes come from web research done on 26 Oct 2026, using about 25 tool calls. Many sources are law-firm or vendor summaries, not the primary legal text. Each item is marked as either verified in this session (with a URL) or taken from training knowledge (marked [TK], not re-checked this session; confirm against EUR-Lex or the national text before relying on it).

## EU: urgency, scarcity, reductions and "from" prices (UCPD, Price Indication Directive Art. 6a, DSA Art. 25)

### Takeaway
You may use urgency only when it is true: a real deadline, a real seat count and a real lowest-price-in-30-days reference. False "limited time" claims are on the UCPD blacklist, so they are banned in every case. Any announced reduction (for example "save 20% if you prepay 3 months", if presented as a cut from a price) must be calculated from the lowest price charged in the previous 30 days, as the CJEU confirmed in 2024.

### Cited Findings
- Price Indication Directive Art. 6a(1): "Any announcement of a price reduction shall indicate the prior price applied by the trader for a determined period of time prior to the application of the price reduction". Art. 6a(2): the prior price is "the lowest price applied by the trader during a period of time not shorter than 30 days". Member States may shorten the period for products on the market for less than 30 days and may set a rule for progressive reductions. — [HSF Kramer](https://www.hsfkramer.com/notes/ip/2024-posts/cjeu-confirms-that-price-reduction-claims-must-be-based-on-lowest-price-in-last-30-days); [Baker McKenzie](https://insightplus.bakermckenzie.com/bm/international-commercial-trade/european-union-the-cjeu-confirms-that-a-price-reduction-must-be-calculated-based-on-the-lowest-price-in-the-last-30-days)
- CJEU C-330/23 (26 Sept 2024): a percentage reduction or other promotional statement must be calculated from the Art. 6a prior price. Showing the prior price without basing the reduction on it is not enough. — [Baker McKenzie Global Litigation News](https://globallitigationnews.bakermckenzie.com/2024/10/15/european-union-the-cjeu-confirms-that-a-price-reduction-must-be-calculated-based-on-the-lowest-price-in-the-last-30-days/); [White & Case](https://whitecase.com/insight-alert/new-ecj-judgement-price-indication-directive-implications-online-retailers-and)
- Commission guidance (2021/C 526/02, not binding): Art. 6a does not apply to ordinary price changes made without a promotional announcement, or to comparisons with competitors' prices. — [RPC](https://rpclegal.com/snapshots/consumer/spring-2022/european-commission-publishes-guidance-on-price-promotions-under-the-omnibus-directive); [ACM (NL) price-indication guidelines](https://www.acm.nl/system/files/documents/guidelines-regarding-price-indications-and-comparisons.pdf)
- The UK copy of the same blacklist item (DMCC Act 2024 Sch. 20 para 7, in force 6 Apr 2025) bans falsely stating that a product, or its terms, will only be available for a limited time in order to push an immediate decision. This shows how the EU Annex I point 7 wording is applied. — [legislation.gov.uk](https://www.legislation.gov.uk/ukpga/2024/13/schedule/20/paragraph/7)
- [TK] UCPD 2005/29/EC Annex I: point 7 (false "very limited time" availability or terms) and point 5 (bait advertising: advertising at a price without disclosing that reasonable quantities are not available) are banned in all circumstances. The Omnibus Directive added points 23b and 23c, which ban claiming reviews come from real customers without reasonable checks and submitting or commissioning fake reviews. Point 20 bans describing a product as "free" if the consumer has to pay anything beyond unavoidable costs. Consolidated text: [EUR-Lex UCPD](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02005L0029-20220528) (the fetch returned empty this session, so these wordings are not verified here).
- [TK] DSA Art. 25 bans online interface designs that deceive, manipulate or materially distort users' free decisions. Examples include making cancellation harder than sign-up and repeatedly asking for a choice already made. It applies to "online platforms" (intermediaries), and practices already covered by the UCPD or GDPR fall under those laws instead. A single-merchant site like Alimun is mainly governed by the UCPD.

### Inferences
- Seat limits on cohorts are lawful if the counter reflects real capacity and real bookings from the database. A hard-coded "3 seats left" would be bait or false scarcity under Annex I points 5 and 7. This also matches Alimun's own rule against fake counters.
- Enrolment deadlines should name a date and actually close. If the same offer reopens straight after the deadline, the deadline was false (compare the Canadian Dufresne case below).
- "Founding-member price, locked for life" must be honoured in the terms. If the regular price never existed or was never charged, do not show a struck-through "regular" price. Art. 6a only bites when a reduction is announced.
- The 3-month prepay discount is safest presented as a plain plan price ("€X per month billed quarterly"). If it is shown as "save 15%", the comparison has to rest on a real monthly price that was charged in the previous 30 days.
- "From €X per class" (minimum) prices: [TK] under UCPD Art. 6/7 and the Price Indication Directive, the "from" price must be actually available to a meaningful share of buyers, and conditions such as a minimum commitment or a particular country must be disclosed near the price. Country-based prices (geo-pricing) are allowed, but each visitor must see the total price that applies to them.

### Gaps
- The text of the Commission's 2021 UCPD guidance on countdown timers and scarcity was not retrieved.
- No EU-level authority source was found specifically on "from" prices for subscriptions.

## EU: withdrawal right, trials and live classes (CRD 2011/83 as amended, incl. Directive 2023/2673 withdrawal button)

### Takeaway
EU consumers have 14 days to withdraw from online service contracts. Lessons can start inside that window only if the consumer expressly asks for it. If they then withdraw, they pay a proportionate amount for classes already received. They lose the right only once the service has been fully performed and they acknowledged that loss. From 19 June 2026, every online distance contract with a withdrawal right also needs an online "withdraw from contract" function.

### Cited Findings
- CRD Art. 16 (2011 text): no withdrawal right for service contracts that have been fully performed where performance started with the consumer's prior express consent and acknowledgement that the right would be lost. The same applies to digital content not on a tangible medium. — [legislation.gov.uk copy of Art. 16](https://www.legislation.gov.uk/eudr/2011/83/article/16) (shows the pre-2021 text, so it predates the Omnibus amendments)
- Commission CRD guidance: consent to early performance needs a positive action. A pre-ticked box or a reference to the T&Cs is unlikely to be enough. — [Reed Smith 2014 summary](https://reedsmith.com/en/perspectives/2014/06/how-new-eu-guidance-on-the-consumer-rights-directi) (older, from 2014)
- Directive 2023/2673 adds CRD Art. 11a: a withdrawal function must be live from 19 June 2026 with no phase-in. It works in two steps (statement of withdrawal, then confirmation) and the trader must acknowledge receipt on a durable medium. It must stay available throughout the withdrawal period and covers non-EU traders who target EU consumers. — [iubenda](https://www.iubenda.com/en/blog/online-withdrawal-function-eu-directive-2023-2673/); [CGI Ireland](https://cgi.org.uk/membership/branches-regions/ireland/agenda/irish-agenda-articles/eu-update/consumer-protection-mandatory-withdrawal-button-coming-june-2026/); [William Fry](https://www.williamfry.com/?p=159557)
- One source says the Commission opened infringement cases against 21 Member States in January 2026 over late transposition, and that only France, Denmark and Lithuania transposed on time. This comes from a single vendor source and is unverified. — [scandiweb](https://scandiweb.com/solutions/eu-withdrawal-button)
- [TK] CRD Art. 14(3): if a consumer asked for the service to start during the withdrawal period and then withdraws, they owe an amount proportionate to what was provided. Art. 16(a), as amended by the Omnibus Directive, says that for paid service contracts the right is lost only when the service is fully performed after express request and acknowledgement. Art. 6(1)(h)/(j) require pre-contract information on the withdrawal right and the model form. If that information is missing, the period extends by up to 12 months. [EUR-Lex CRD](https://eur-lex.europa.eu/eli/dir/2011/83/oj)

### Inferences
- €3 trial for 14 days: this is a paid contract, so the withdrawal right applies. At checkout, ask for an express, unticked request to start immediately, together with the acknowledgement. If a learner withdraws on day 10 after 3 live classes, a proportionate charge is allowed, but it cannot exceed the €3 paid for the trial.
- When the trial converts to a paid subscription, the conversion is arguably the same contract continuing. Many practitioners treat the first paid period as new performance. This is unclear, so the safe pattern is to show the withdrawal function prominently for 14 days after conversion as well.
- The Art. 11a "withdraw from contract" function must be built into the dashboard. It is separate from the cancel-subscription flow, although the two can sit next to each other.

### Gaps
- The text of Art. 11a and any Commission guidance on it were not retrieved. National transposition laws were not checked.
- No source was found on how a trial that converts to paid interacts with the withdrawal period. Treat this as an open legal question.

## EU: Digital Fairness Act status and EU rules on trial-to-paid notices

### Takeaway
As of late October 2026 the DFA has not been tabled. It is listed for Q4 2026 and is expected to cover subscription traps, difficult cancellation, free-trial conversions, drip pricing and dark patterns. At EU level there is still no binding rule requiring a reminder before a trial converts, but national laws are adding one (Spain, see below).

### Cited Findings
- The Commission's DFA consultation closed on 9 Oct 2025. It covered drip pricing, dynamic pricing and difficult cancellation of subscriptions, auto-renewals and free trials that convert to paid. — [Bird & Bird](https://cm.twobirds.com/en/insights/2025/eu-–-consultation-on-the-digital-fairness-act); [NERA](https://www.nera.com/insights/publications/2025/european-commission-digital-fairness-act.html)
- The proposal had not been tabled as of autumn 2026. The 2026 Commission work programme lists it for Q4 2026 (an indicative date). An EESC opinion was adopted on 21 Oct 2026, which is not the Commission proposal. — [EP Legislative Train](https://www.europarl.europa.eu/legislative-train/theme-protecting-our-democracy-upholding-our-values/file-digital-fairness-act); [EPRS briefing Oct 2026](https://eprs.europarl.europa.eu/contents/publications/EPRS/2026/10/EPRS_BRI(2026)791529.html); [EESC](https://www.eesc.europa.eu/en/our-work/opinions-information-reports/opinions/digital-fairness-act); [digital-fairness-act.eu timeline](https://digital-fairness-act.eu/timeline/)
- The Irish CCPC submitted a response to the DFA consultation, which shows that national regulators are pushing for subscription and dark-pattern rules. — [CCPC submission PDF](https://www.ccpc.ie/business/wp-content/uploads/sites/3/2025/12/2025.10.24-CCPC-Submission-to-EC-Digital-Fairness-Act-Consultation.pdf)

### Inferences
- If Alimun builds trial reminders, one-click cancel and all-in pricing now, it will very likely already meet what the DFA ends up requiring.

### Gaps
- The DFA text does not exist yet. Content was taken from consultation documents, not from a proposal.

## EU national: Germany, France, Spain, Italy (cancellation and renewal)

### Takeaway
Germany requires a two-step cancel button with no retention offers on the confirmation page, and after the initial term auto-renewal may only continue as an open-ended contract that can be cancelled monthly. France requires online cancellation in "three clicks". Spain requires a renewal notice 15 days before charging and easy cancellation, with businesses due to comply by 28 Dec 2026.

### Cited Findings
- Germany §312k BGB (in force 1 July 2022): a clearly labelled button (for example "Verträge hier kündigen") leads to a confirmation page and a second "jetzt kündigen" button. It also applies to contracts made before that date, and the cancellation is presumed received immediately. — [Haufe](https://www.haufe.de/id/beitrag/1-gesetz-fuer-faire-verbrauchervertraege-c-kuendigungsbutton-HI14945050.html); [Bitkom guide](https://www.bitkom.org/sites/main/files/2022-03/220301-Leitfaden-Kündigungsbutton.pdf); [Fieldfisher](https://www.fieldfisher.com/de-de/insights/gesetz-fur-faire-verbrauchervertraege)
- The BGH (vzbv v. FitX) held that putting prominent retention offers on the cancellation confirmation page is not allowed. If the button rules are breached, the consumer can terminate at any time without notice. — [ra-kotz.de](https://www.ra-kotz.de/online-kuendigung-bgh-verbietet-ablenkungsangebote-auf-der-bestaetigungsseite.htm)
- Germany §309 Nr. 9 BGB (contracts from 1 Mar 2022): a tacit-renewal clause in standard terms is valid only if the contract then continues indefinitely and can be cancelled at any time with at most one month's notice. Notice to end the initial term is also capped at one month. — [DATEV Magazin](https://www.datev-magazin.de/nachrichten-steuern-recht/recht/stillschweigende-verlaengerung-eines-vertrags-durch-agb-ab-dem-1-maerz-gelten-fuer-verbrauchervertraege-neue-regeln-74415); [jura.cc](https://www.jura.cc/rechtstipps/stillschweigende-verlaengerung-eines-vertrags-durch-agb-ab-dem-01-03-2022-gelten-fuer-verbrauchervertraege-neue-regeln/)
- France: Art. L215-1-1 Code de la consommation (Law 2022-1158) and Décret 2023-417 (31 May 2023) apply from 1 June 2023. Contracts that can be signed online must be cancellable online through a free, direct, permanently accessible function in three steps (open "résilier votre contrat", check details, confirm). Fines go up to €15,000 for individuals and €75,000 for companies. — [Blog du Modérateur](https://www.blogdumoderateur.com/resilier-contrat-en-ligne-juin-2023/); [Seban Avocats](https://www.seban-associes.avocat.fr/la-resiliation-des-contrats-conclus-par-voie-electronique-en-trois-clics/)
- Spain: Ley 10/2025 (26 Dec 2025, customer-service law) amends TRLGDCU Art. 97.1 p). Subscription businesses must notify at least 15 days before charging a renewal, explaining what happens if the customer does not cancel, and cancellation must be simple. The notice applies whether the subscription began with a promotional offer or through earlier renewals. Businesses have 12 months to adapt, ending 28 Dec 2026. — [Dirección General de Consumo note](https://www.dsca.gob.es/es/consumo/nota-informativa-nueva-regulacion-suscripciones-ley-servicios-atencion-clientela); [DGC PDF](https://www.dsca.gob.es/sites/default/files/consumo_masinfo/26.01.15NI%20renovaciones.pdf); [PwC](https://periscopiofiscalylegal.pwc.es/cuenta-atras-para-la-nueva-atencion-al-cliente/amp/); [Clifford Chance](https://www.cliffordchance.com/briefings/2026/04/proteccion-de-consumidores--los-servicios-de-atencion-al-cliente.html). Sources disagree on how far the law reaches: some describe it as aimed at large or essential-service firms ([Tirant summary](https://prime.tirant.com/es/wp-content/uploads/sites/10/2025/12/SERVICIOS-DE-ATENCION.pdf)), while the DGC presents the subscription amendment to the general consumer code as applying generally.

### Inferences
- A single cancel flow that meets the strictest of these rules covers all of them. It should be reachable without logging in or from the dashboard, use two steps, carry no retention offer on the confirmation step, and send an email receipt. A pause offer may appear before the cancel button (as a separate earlier option), but never on the confirmation page for German users.
- Any 3-month prepaid plan for German consumers that auto-renews must continue month to month after the first term, not for another 3 months.

### Gaps
- Italy was not researched (time limit). [TK] Italy has transposed the UCPD and Omnibus in the Codice del Consumo, and AGCM actively fines dark patterns. No specific Italian click-to-cancel statute was confirmed.

## Canada (federal and Quebec)

### Takeaway
The federal Competition Act treats drip pricing as deceptive and enforces against fake countdown timers, as in Dufresne in 2024 (CAD 3.25M). Quebec's CPA already regulates distance service contracts. Bill 10 (tabled Dec 2025) would add an online cancel button and a written notice 2 to 10 days before a free or discounted trial converts. Its passage was not confirmed.

### Cited Findings
- Amendments in force since 23 June 2022 make drip pricing (a price not attainable because of mandatory added fees) an expressly deceptive practice under both the civil and criminal provisions. — [Competition Bureau](https://www.canada.ca/en/competition-bureau/news/2022/06/important-amendments-to-the-competition-act-come-into-effect.html); [Osler](https://www.osler.com/en/resources/regulations/2022/first-round-of-amendments-to-the-competition-act-now-in-effect); [DLA Piper](https://www.dlapiper.com/en-gb/insights/publications/2022/06/canada-amends-competition-act)
- Bill C-59 (2024) proposed narrowing the exemption for government-imposed fees. Final enactment was not confirmed in this session. — [Baker McKenzie](https://insightplus.bakermckenzie.com/bm/consumer-goods-retail_1/canada-governments-fight-against-junk-fees-savings-claims-and-greenwashing-heats-up-with-new-proposed-amendments)
- Fake urgency: in Dufresne (2024) a CAD 3.25M penalty was imposed because countdown timers expired or reset while the deal stayed available, combined with inflated regular prices. The Bureau warned consumers about timers that reset (Nov 2024). — [Competition Bureau "The urgency is fake"](https://www.canada.ca/en/competition-bureau/news/2024/11/the-urgency-is-fake-but-the-deception-is-real.html); [Bureau fake urgency cues page](https://competition-bureau.canada.ca/en/node/918); [deceptive.design](https://deceptive.design/articles/dufresne-group-pays-325m-cad-for-dark-patterns-and-unsupported-pricing)
- The Bureau's Deceptive Marketing Practices Digest Vol. 6 treats "limited time" claims as scarcity cues: accurate cues are fine, false ones are deceptive. Ordinary-selling-price claims must pass the volume or time test. — [Bureau Digest Vol. 6](https://competition-bureau.canada.ca/en/node/749); [Baker McKenzie urgency cues](https://insightplus.bakermckenzie.com/bm/antitrust-competition_1/canada-the-price-is-rightnow-pricing-your-products-using-urgency-cues/); [Mondaq](https://mondaq.com/canada/advertising-marketing-branding/1376702/hurry-up-and-comply-key-takeaways-for-canadian-businesses-on-misleading-advertising-urgency-cues)
- Quebec Bill 72 (assented 7 Nov 2024) deals mainly with price transparency (tips, food prices, loyalty prices) and credit. No subscription rules were found in it. — [McCarthy Tétrault](https://www.mccarthy.ca/en/insights/blogs/consumer-markets-perspectives/quebecs-bill-72-proposes-new-era-transparency-pricing-and-credit-consumers); [Langlois](https://langlois.ca/en/insights/bill-72-new-contractual-requirements-and-credit-provisions/)
- Quebec CPA: specific rules already cover sequential-performance distance service contracts (subscriptions). Since 2022 these rules also reach digital and distance services. — [BLG 2022](https://www.blg.com/en/insights/2022/07/mise-a-jour-abonnements-a-des-services-numeriques-et-dautres-services-fournis-a-distance-au-quebec); [Mondaq](https://www.mondaq.com/canada/dodd-frank-consumer-protection-act/1214270/update-subscriptions-to-digital-and-at-a-distance-services-in-qu%c3%a9bec)
- Quebec Bill 10 (tabled 2 Dec 2025) would require an easily found online cancel button for sequential distance services, and a written notice 2 to 10 days before a free or discounted promotion ends, stating the end date and the price that follows. It also requires full fee disclosure and lets consumers recover undisclosed fees. Clauses that block reviews would be void. Penalties could reach 5% of worldwide turnover. Most changes would take effect 3 months after assent. — [BLG Dec 2025](https://www.blg.com/en/insights/2025/12/quebec-to-enhance-consumer-remedies-and-expand-rules-on-online-subscription-renewals)

### Inferences
- In Canada, a learner's "€3 trial" page must show the price after the trial and the total including mandatory fees. It should also send a dated email before conversion, which is required if Bill 10 passes.

### Gaps
- Bill 10's adoption status as of Oct 2026 is unknown. Check assnat.qc.ca.
- The exact current CPA sections (54.x) on cancelling distance contracts were not retrieved. Ontario was not researched ([TK] the Ontario Consumer Protection Act, 2023 received royal assent, but its in-force date and subscription rules were not verified).

## Brazil

### Takeaway
Under CDC Art. 49 a consumer may withdraw from an online purchase within 7 days and get a full refund. Under Decreto 11.034/2022, cancellation must be possible through every channel used for sign-up and take effect immediately, with a receipt.

### Cited Findings
- CDC Art. 49: for contracts made outside the business premises (including online), the consumer may withdraw within 7 days of signing or of the start of the service, without giving a reason, and receive a full refund. It is disputed whether the right still applies once the service has been fully performed. — [Serasa](https://www.serasa.com.br/blog/direito-de-arrependimento-prestacao-de-servicos/); [Jurídico AI](https://juridico.ai/blog/direito-civil/direito-de-arrependimento-art-49-cdc.md)
- Decreto 11.034/2022 (SAC; in force about 3 Oct 2022): Art. 14 I requires cancellation through all means available for signing up. Art. 14 II gives cancellation immediate effect, even if the consumer has payments outstanding. Art. 14 IV requires a cancellation receipt. Art. 14 V allows scheduled cancellation only with the consumer's agreement. — [Planalto, Decreto 11.034](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/decreto/d11034.htm). The same Planalto page mentions a later 2026 decree on effective dates, which was not checked. The decree formally targets regulated sectors under federal oversight. [TK] Procons apply the same principles to other businesses under the CDC.

### Inferences
- Brazilian learners should get the full €3 refund (or full amount) if they withdraw within 7 days, even after attending a class. The proportionate-payment approach used in the EU has no clear basis in the CDC.

### Gaps
- No Procon enforcement decisions on fake urgency or countdown timers were found.

## Mexico

### Takeaway
The LFPC reform (DOF 12 Dec 2025, in force 13 Dec 2025) adds Art. 76 Bis VIII-IX. It requires clear disclosure of recurring charges with express consent, notice at least 5 calendar days before an automatic renewal, and immediate cancellation without penalty.

### Cited Findings
- Recurring charges must be disclosed prominently (frequency, amount, charge date) and need the consumer's express, provable consent. Renewal notice must be given at least 5 calendar days before the renewal date. Immediate cancellation mechanisms are required. If these requirements are not met, the charge may have no effect. Subscription adhesion contracts must be registered or re-registered with PROFECO. — [Greenberg Traurig](https://www.gtlaw.com/en/insights/2025/12/reformas-a-la-ley-federal-de-proteccion-al-consumidor)
- PROFECO and press reports describe cancellation through the same medium as sign-up. — [El Imparcial](https://www.elimparcial.com/mexico/2025/12/13/ya-esta-en-vigor-nueva-reforma-a-la-ley-federal-del-consumidor-te-protege-de-cobros-fantasma-en-plataformas-de-servicios-digitales/); [El Imparcial Mar 2026](https://www.elimparcial.com/dinero/2026/03/17/profeco-obliga-a-plataformas-a-avisar-5-dias-antes-de-renovar-suscripciones-y-facilitar-cancelacion-sin-trabas-desde-2025/)

### Gaps
- The DOF text was not read directly. The general withdrawal period for distance sales ([TK] 5 working days, LFPC Art. 56) was not verified.

## Morocco, Colombia, Turkey

### Takeaway
Withdrawal periods: Morocco 7 days (30 if the required information was not confirmed), Colombia 5 working days, Turkey 14 days. All three also apply a general ban on misleading advertising. No subscription-specific cancellation statute was found for any of them.

### Cited Findings
- Morocco, Law 31-08 Art. 36: 7 days from the transaction for distance sales, extended to 30 days if the supplier did not confirm the required information in writing. Art. 30 requires contract terms to be accessible from the homepage and expressly accepted. A 2025 bill proposing to amend Art. 36 has unknown status. — [Aujourd'hui le Maroc](https://aujourdhui.ma/chroniques/tout-savoir-sur-le-droit-du-consommateur-98620); [Captain Legal](https://www.captain.legal/ma/gestion-entreprise/cgv-maroc-modele-conforme-loi-31-08-word-et-pdf/); [Hespress](https://fr.hespress.com/413805-droits-des-consommateurs-nouvelle-proposition-de-loi-pour-elargir-le-droit-de-retractation.html); [CMS](https://cms.law/fr/mar/legal-updates/flash-info-maroc-le-nouveau-cadre-legislatif-de-la-protection-du-consommateur)
- Colombia, Ley 1480/2011 Art. 47: a right of withdrawal applies to distance and e-commerce sales. The period is 5 working days, counted from contract conclusion for services, and it does not apply where performance has begun. Refund is due within 30 days. Detailed rules are in Decreto 1074/2015 ch. 37. — [SIC concept](https://sedeelectronica.sic.gov.co/sites/default/files/normatividad/Concepto_12208265.pdf); [Ámbito Jurídico SIC concept](https://www.ambitojuridico.com/sites/default/files/BancoMedios/Archivos/cpto-15182720-15.pdf)
- Turkey, Distance Contracts Regulation: 14 days, counted from contract formation for services. If the consumer was not properly informed, the period extends by up to 1 year. Refund is due within 14 days. Art. 15 exceptions include digital content and services already started, and they are read narrowly. — [Gide 2022](https://www.gide.com/sites/default/files/client_alert_distance_contracts_trseptember2022_0.pdf); [Milliyet](https://www.milliyet.com.tr/ekonomi/tuketiciye-14-gun-icinde-vazgecme-hakki-1975853); [hukukcularevi](https://hukukcularevi.com/mesafeli-sozlesme-cayma-hakki-istisnalari/)

### Gaps
- No subscription auto-renewal or cancel rules were found for Morocco, Colombia or Turkey. The Colombian "se haya empezado a ejecutar" exclusion needs checking against live classes.

## India

### Takeaway
The CCPA Dark Patterns Guidelines (30 Nov 2023, under Consumer Protection Act 2019 s.18) ban false urgency (fake scarcity or popularity), basket sneaking, subscription traps (cancellation that is hard or hidden, or forcing payment details for a "free" trial), confirm-shaming and drip pricing, among 13 named patterns.

### Cited Findings
- False urgency covers fake data such as "Only 2 rooms left! 30 others are looking". Urgency backed by real facts is not false urgency. — [Conventus Law](https://conventuslaw.com/report/india-guidelines-for-prevention-and-regulation-of-dark-patterns-2023/); [Mondaq](https://www.mondaq.com/india/advertising-marketing-branding/1400996/guidelines-notified-for-prevention-and-regulation-of-dark-patterns)
- A subscription trap includes making cancellation impossible or complex, hiding the cancel option, or forcing payment details or auto-debit to access a "free" subscription. Adding a subscription to a purchase without consent is basket sneaking. — [JSA](https://www.jsalaw.com/newsletters-and-updates/ccpa-issues-guidelines-for-prevention-and-regulation-of-dark-patterns-2023/); [Mondaq analysis](https://www.mondaq.com/india/social-media/1409216/the-guidelines-for-prevention-and-regulations-of-dark-patterns-2023-an-analysis)

### Inferences
- Upsell prompts and add-ons must be opt-in (unticked). Wording that shames people for declining ("No, I don't want to improve my English") counts as confirm-shaming.

### Gaps
- No 2025-26 Indian enforcement updates were retrieved.

## US context: FTC click-to-cancel

### Cited Findings
- The Eighth Circuit vacated the FTC Negative Option ("click-to-cancel") Rule in full on 8 July 2025 (Custom Communications v. FTC, No. 24-3137) on procedural grounds, before its 14 July 2025 effective date. ROSCA and state laws such as California's still apply. — [Greenberg Traurig](https://www.gtlaw.com/en/insights/2025/7/eighth-circuit-vacates-ftcs-click-to-cancel-rule); [Alston & Bird](https://www.alston.com/en/insights/publications/2025/07/ftc-click-to-cancel-rule-vacated); [Morgan Lewis](https://www.morganlewis.com/pubs/2025/07/ftcs-click-to-cancel-rule-vacated-ahead-of-planned-july-14-effective-date)

## Practical do/don't summary across all markets (inferences from the sources above)

### Do
- Show seat counts from live database capacity and bookings only (EU UCPD Annex I points 5 and 7 [TK]; India false-urgency rules; Canada scarcity cues).
- Give deadlines a fixed date and time zone, and actually close enrolment. Never use a countdown timer that resets (Canada Dufresne; UK and EU blacklist).
- Put founding-member price locks in the terms: which price, for how long, and what ends the lock (for example a cancellation or a pause longer than X).
- State the trial clearly at checkout: "€3 for 14 days, then €X every month/3 months, starting on [date], cancel anytime." Send a reminder before conversion. This is mandatory in Mexico (5 days before renewal), in Spain (15 days before a renewal charge), and under Quebec Bill 10 if passed (2 to 10 days before the trial ends). Sending it 7 to 10 days ahead satisfies Mexico, falls inside Quebec's 2-to-10-day window, and is good practice in the EU. Spanish renewals need their own notice at least 15 days before the charge, which in practice means a separate Spain-only reminder.
- Get express consent to start lessons within the 14-day EU window, using an unticked box with an acknowledgement. Charge only proportionate amounts on withdrawal (EU). Give full refunds within 7 days in Brazil and Morocco, and within 5 working days in Colombia if classes have not started.
- Build the EU withdrawal function (live since 19 June 2026) and a two-step cancel button with an email receipt. Cancellation should be available through every channel used for sign-up (Brazil, Mexico, France, Germany, India).
- Calculate any "save X%" from the lowest price in the previous 30 days (EU Art. 6a, CJEU C-330/23).
- Disclose referral credits as incentivised. [TK] UCPD Annex I point 11 and Art. 7(2) require disclosure that a recommendation or review is paid or rewarded. Referred-friend testimonials need this disclosure, and Alimun's rules already ban fake testimonials.
- Show all-in prices per country. Disclose country pricing and any condition behind "from €X per class" next to the price (Canada drip pricing; EU [TK]).

### Don't
- No fake "only N left", "X people viewing" or "price goes up tonight" unless it is true and backed by data.
- No pre-ticked add-ons, upsells or auto-added subscriptions (India basket sneaking; [TK] CRD Art. 22 bans pre-ticked boxes for extra payments).
- No retention offers or guilt-tripping on the cancel confirmation step (BGH FitX; India confirm-shaming). A single neutral pause option before the cancel step is the safer pattern.
- No automatic renewals into another fixed term for German consumers. After the initial term, contracts continue month to month with at most 1 month's notice.
- No struck-through "regular price" that was never actually charged.
- Do not rely on the DFA being far away. It is due for proposal in Q4 2026.
