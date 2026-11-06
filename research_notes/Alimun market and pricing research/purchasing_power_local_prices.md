# Purchasing power and local language-course prices (target countries, 2024-2026)

Compiled 26 Oct 2026. Scope: macro purchasing-power indicators and local group-class prices for the 18 target countries plus the EU reference (DE, FR, IT, ES). Prices already in earlier notes (Goethe/British Council Morocco, Alliance Française Canada, Lingoda/Cambly/EF/Open English, Goethe India intensive) are not repeated.

Conventions used throughout:
- **Price level ratio (PLR)** = World Bank PPP conversion factor, GDP (PA.NUS.PPP) divided by the World Bank official average exchange rate for the same year (PA.NUS.FCRF). It is relative to the US (US = 1.00). The dedicated WDI series PA.NUS.PPPC.RF now returns "indicator not found / archived" from the API ([WB API](https://api.worldbank.org/v2/country/MAR/indicator/PA.NUS.PPPC.RF?format=json)), so I computed it. A private-consumption PLR (PA.NUS.PRVT.PP / FCRF) is also shown, since it is closer to what a household pays.
- All World Bank figures are **2025** values, pulled 26 Oct 2026 from the WDI API: [PA.NUS.PPP](https://api.worldbank.org/v2/country/MAR;CAN;BRA;COL;PER;CHL;ARG;ECU;MEX;IND;TUR;EGY;TUN;PHL;ALB;XKX;UZB;PAK;DEU;FRA;ITA;ESP/indicator/PA.NUS.PPP?format=json&date=2021:2025&per_page=500), [PA.NUS.PRVT.PP](https://api.worldbank.org/v2/country/MAR;CAN;BRA;COL;PER;CHL;ARG;ECU;MEX;IND;TUR;EGY;TUN;PHL;ALB;XKX;UZB;PAK;DEU;FRA;ITA;ESP/indicator/PA.NUS.PRVT.PP?format=json&date=2022:2025&per_page=500), [PA.NUS.FCRF](https://api.worldbank.org/v2/country/MAR;CAN;BRA;COL;PER;CHL;ARG;ECU;MEX;IND;TUR;EGY;TUN;PHL;ALB;XKX;UZB;PAK;DEU;FRA;ITA;ESP/indicator/PA.NUS.FCRF?format=json&date=2022:2025&per_page=500), [NY.GDP.PCAP.CD](https://api.worldbank.org/v2/country/MAR;CAN;BRA;COL;PER;CHL;ARG;ECU;MEX;IND;TUR;EGY;TUN;PHL;ALB;XKX;UZB;PAK;DEU;FRA;ITA;ESP/indicator/NY.GDP.PCAP.CD?format=json&date=2022:2025&per_page=500), [NY.GDP.PCAP.PP.CD](https://api.worldbank.org/v2/country/MAR;CAN;BRA;COL;PER;CHL;ARG;ECU;MEX;IND;TUR;EGY;TUN;PHL;ALB;XKX;UZB;PAK;DEU;FRA;ITA;ESP/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2022:2025&per_page=500). The 2025 PPPs are World Bank extrapolations from the ICP 2021 benchmark, not a new benchmark.
- **Inflation** = IMF DataMapper series PCPIPCH (CPI, annual average %), pulled 26 Oct 2026: [IMF DataMapper API](https://www.imf.org/external/datamapper/api/v1/PCPIPCH/MAR/CAN/BRA/COL/PER/CHL/ARG/ECU/MEX/IND/TUR/EGY/TUN/PHL/ALB/UVK/UZB/PAK/DEU/FRA/ITA/ESP?periods=2024,2025,2026). 2026 is a projection; I did not confirm which WEO vintage the API was serving (likely April 2026).
- **EUR conversion**: one consistent rate set, the World Bank 2025 annual average official rate (LCU per USD, PA.NUS.FCRF link above) combined with the euro area's 2025 average of EUR 0.885 per USD from the same series. So EUR = LCU x 0.885 / (LCU per USD, 2025). For ARS, TRY and EGP this overstates current EUR values, because those currencies kept falling into 2026 (see volatility notes). For a spot check, ECB reference rates on 31 Oct 2025 were EUR 1 = USD 1.1554, BRL 6.2171, MXN 21.4286, TRY 48.5832, INR 102.5070 ([ECB 31 Oct 2025](https://www.ecb.europa.eu/stats/exchange/eurofxref/shared/pdf/2025/10/20251031.pdf)).
- Minimum wages: mainly the Wikipedia compilation ([List of countries by minimum wage](https://en.wikipedia.org/wiki/List_of_countries_by_minimum_wage)), which carries an "out of date" warning, cross-checked where possible. Average wages: UNECE gross monthly averages in USD as compiled on [Wikipedia, List of countries by average wage](https://en.wikipedia.org/wiki/List_of_countries_by_average_wage). Coverage for non-European countries is thin there; gaps are marked.
- "est." means my own arithmetic or assumption, not a published number.

## Country tables (macro indicators and local class prices)

### Takeaway
Measured by the 2025 price level, the countries sort cleanly. Canada and the EU core sit at 0.77-0.83 of US prices, Spain and Italy at 0.65-0.69, and Latin America, Turkey and Albania at 0.41-0.54. Morocco, Colombia, Ecuador, Kosovo, the Philippines and Tunisia sit at 0.30-0.43, and Egypt, India, Pakistan and Uzbekistan at 0.15-0.29. Published local group-class prices were hard to find, and those found run from about EUR 1-2.5/h (Egypt, Peru, cheap India listings) to about EUR 5-11/h (Brazil franchises).

### Summary table (World Bank 2025, IMF)

| Country | PPP factor (LCU per intl $, 2025) | Avg FX (LCU per USD, 2025) | PLR GDP (US=1) | PLR private consumption | GDP pc nominal USD 2025 | GDP pc PPP intl $ 2025 | CPI 2024 / 2025 / 2026p (%) |
|---|---|---|---|---|---|---|---|
| Germany | 0.710 | 0.885 | 0.802 | 0.812 | 60,496 | 75,407 | 2.5 / 2.3 / 2.7 |
| France | 0.678 | 0.885 | 0.766 | 0.828 | 48,986 | 63,975 | 2.3 / 0.9 / 2.4 |
| Italy | 0.610 | 0.885 | 0.690 | 0.729 | 43,309 | 62,803 | 1.1 / 1.6 / 3.3 |
| Spain | 0.571 | 0.885 | 0.645 | 0.687 | 38,627 | 59,868 | 2.9 / 2.7 / 3.7 |
| Canada | 1.167 | 1.398 | 0.834 | 0.902 | 55,698 | 66,746 | 2.4 / 2.1 / 2.8 |
| Mexico | 10.329 | 19.238 | 0.537 | 0.588 | 13,889 | 25,868 | 4.7 / 3.8 / 3.8 |
| Peru | 1.836 | 3.567 | 0.515 | 0.540 | 9,684 | 18,816 | 2.4 / 1.5 / 3.8 |
| Chile | 453.189 | 951.329 | 0.476 | 0.512 | 17,995 | 37,774 | 3.9 / 4.2 / 3.7 |
| Albania | 39.981 | 86.803 | 0.461 | 0.543 | 12,998 | 28,221 | 2.2 / 2.2 / 3.2 |
| Brazil | 2.554 | 5.587 | 0.457 | 0.462 | 10,713 | 23,433 | 4.4 / 5.0 / 4.4 |
| Argentina | 567.297 | 1,240.851 | 0.457 | n/a | 14,898 | 32,587 | 219.9 / 41.9 / 32.5 |
| Ecuador (USD) | 0.425 | 1.000 | 0.425 | 0.442 | 7,125 | 16,757 | 1.5 / 0.7 / 2.0 |
| Morocco | 3.932 | 9.350 | 0.421 | 0.423 | 4,672 | 11,112 | 0.9 / 0.8 / 0.9 |
| Turkey | 16.204 | 39.455 | 0.411 | 0.450 | 18,599 | 45,288 | 58.5 / 34.9 / 31.2 |
| Kosovo (EUR) | 0.363 | 0.887 | 0.409 | n/a | 7,899 | 19,263 | 1.6 / 3.9 / 6.8 |
| Colombia | 1,532.719 | 4,053.136 | 0.378 | 0.411 | 8,562 | 22,640 | 6.6 / 5.1 / 6.0 |
| Philippines | 19.070 | 57.505 | 0.332 | 0.357 | 4,171 | 12,577 | 3.2 / 1.7 / 5.6 |
| Tunisia | 0.916 | 2.997 | 0.306 | 0.327 | 4,657 | 15,233 | 7.0 / 5.3 / 5.5 |
| Uzbekistan | 3,670.126 | 12,579.394 | 0.292 | 0.284 | 3,968 | 13,601 | 9.6 / 8.8 / 6.9 |
| Pakistan | 67.837 | 281.143 | 0.241 | 0.233 | 1,596 | 6,573 | 23.4 / 4.5 / 7.1 |
| India | 20.089 | 87.158 | 0.230 | 0.228 | 2,702 | 11,748 | 4.6 / 2.0 / 5.0 |
| Egypt | 7.584 | 49.228 | 0.154 | 0.157 | 3,086 | 20,204 | 33.3 / 20.4 / 13.3 |

All figures are from the World Bank and IMF API links in the conventions above. Kosovo uses IMF code UVK.

Relative to Germany (DE = 100, GDP PLR), est.: CAN 104, FRA 96, ITA 86, ESP 80, MEX 67, PER 64, CHL 59, ALB 57, BRA 57, ARG 57, ECU 53, MAR 52, TUR 51, XKX 51, COL 47, PHL 41, TUN 38, UZB 36, PAK 30, IND 29, EGY 19.

### Wages per country (local currency, EUR est. at the 2025 average rate)

| Country | Minimum wage | EUR/month est. | Average wage (gross/month) |
|---|---|---|---|
| Germany | EUR 13.90/h from 1 Jan 2026; Wikipedia's EUR 2,891.20/month assumes a 48 h week ([Wikipedia](https://en.wikipedia.org/wiki/List_of_countries_by_minimum_wage)) | about 2,410 at 40 h/week (est.) | USD 4,531 (UNECE 2024) ([Wikipedia avg wage](https://en.wikipedia.org/wiki/List_of_countries_by_average_wage)) |
| France | EUR 1,801/month (EUR 11.88/h), 1 Jan 2025 ([Wikipedia](https://en.wikipedia.org/wiki/List_of_countries_by_minimum_wage)) | 1,801 | USD 4,049 (UNECE 2024) ([source](https://en.wikipedia.org/wiki/List_of_countries_by_average_wage)) |
| Italy | No statutory minimum; set by sector collective agreements ([Wikipedia](https://en.wikipedia.org/wiki/List_of_countries_by_minimum_wage)) | n/a | USD 2,988 (UNECE 2024) ([source](https://en.wikipedia.org/wiki/List_of_countries_by_average_wage)) |
| Spain | SMI 2026: EUR 1,221 x 14 payments (EUR 17,094/yr), Real Decreto 126/2026, per search summary of [Trading Economics](https://tradingeconomics.com/country-list/minimum-wages) and [Deel](https://www.deel.com/blog/minimum-wage-by-country/) | 1,425 (annual/12) | USD 2,979 (UNECE 2024) ([source](https://en.wikipedia.org/wiki/List_of_countries_by_average_wage)) |
| Canada | CA$13-16/h federal/provincial range, dated 1 Jun 2022 on Wikipedia, so out of date ([Wikipedia](https://en.wikipedia.org/wiki/List_of_countries_by_minimum_wage)) | n/a | USD 5,057 (UNECE 2024) ([source](https://en.wikipedia.org/wiki/List_of_countries_by_average_wage)) |
| Mexico | MXN 278.80/day general; MXN 419.88/day northern border zone (2025) ([Wikipedia](https://en.wikipedia.org/wiki/List_of_countries_by_minimum_wage)) | about 390 (x30.4 days, est.) | OECD avg annual wage USD-PPP 24,463 (2025) ([source](https://en.wikipedia.org/wiki/List_of_countries_by_average_wage)) |
| Peru | S/ 1,130/month (Wikipedia gives the date as 1 Jun 2022; that looks wrong, since the S/ 1,130 level is generally reported from 2025, so verify) ([Wikipedia](https://en.wikipedia.org/wiki/List_of_countries_by_minimum_wage)) | 280 | Gap |
| Chile | CLP 529,000/month (18-65), 1 May 2025 ([Wikipedia](https://en.wikipedia.org/wiki/List_of_countries_by_minimum_wage)) | 492 | Gap (OECD 2020 PPP only) |
| Brazil | R$ 1,621/month (x13 per year), 1 Jan 2026 ([Wikipedia](https://en.wikipedia.org/wiki/List_of_countries_by_minimum_wage)) | 257 | Gap |
| Argentina | ARS 376,600/month (Aug 2026), up from 372,400, per [Trading Economics](https://tradingeconomics.com/country-list/minimum-wages). Sources disagree on timing | 269 at the 2025 rate; lower at 2026 rates | Gap |
| Ecuador | USD 470/month base for 2025; USD 594 including 13th/14th salaries ([Wikipedia](https://en.wikipedia.org/wiki/List_of_countries_by_minimum_wage)) | 416 | Gap |
| Morocco | SMIG +5% from 1 Jan 2025: 17.10 MAD/h, about MAD 3,266.55 gross/month (other reports say 3,267.6) ([Morocco World News](https://moroccoworldnews.com/2024/12/367240/morocco-approves-5-minimum-wage-increase-for-2025); [Hespress](https://en.hespress.com/99019-new-minimum-wage-and-tax-reforms-set-to-impact-moroccos-workforce-in-2025.html)). A further 5% rise in 2026 is reported but not verified | 309 | Gap |
| Turkey | TRY 33,030 gross / about 28,075 net per month, 2026 (+27% on 2025) ([Mercans](https://mercans.com/resources/statutory-alerts/turkey-minimum-wage-asgari-ucret-2026-first-half-rate-in-effect/); [Cottgroup](https://www.cottgroup.com/en/blog/work-life/item/what-is-minimum-wage-how-much-is-the-minimum-wage-in-turkiye-2026)) | 741 at the 2025 rate; about 600 at 2026 rates (est., TRY weaker) | USD 1,362 (UNECE 2023) ([source](https://en.wikipedia.org/wiki/List_of_countries_by_average_wage)) |
| Kosovo | EUR 425 from 1 Jan 2026 and EUR 500 from 1 Jul 2026 (Govt Decision 10/273, 31 Oct 2025). Previously EUR 350 from 2024 ([Boga & Associates](https://bogalaw.com/library/10-2025.html); [Gazeta Tema](https://english.gazetatema.net/kosovo-region/kosovo-raises-minimum-wage-to-500-i346046)) | 500 | Gap |
| Colombia | COP 1,423,500/month plus COP 200,000 transport subsidy, 2025 ([Wikipedia](https://en.wikipedia.org/wiki/List_of_countries_by_minimum_wage)). 2026 level not checked | 311 (+44 subsidy) | Gap |
| Philippines | PHP 386/day (Bangsamoro) to PHP 695/day (Metro Manila), non-agricultural, 18 Jul 2025 ([Wikipedia](https://en.wikipedia.org/wiki/List_of_countries_by_minimum_wage)) | Manila about 278 (x26 days, est.) | Gap |
| Tunisia | TND 21.34/day (Jul 2026) per [Trading Economics](https://tradingeconomics.com/country-list/minimum-wages); Wikipedia's monthly TND 465 (48 h) / 401 (40 h) is from 2020 ([Wikipedia](https://en.wikipedia.org/wiki/List_of_countries_by_minimum_wage)) | about 164 (x26 days, est.) | Gap |
| Albania | ALL 50,000/month, 1 Jan 2026 ([Wikipedia](https://en.wikipedia.org/wiki/List_of_countries_by_minimum_wage)) | 510 | USD 832 (UNECE 2024) ([source](https://en.wikipedia.org/wiki/List_of_countries_by_average_wage)) |
| Uzbekistan | UZS 1,271,000/month from Jan 2026 (previously 1,155,000) ([Trading Economics](https://tradingeconomics.com/country-list/minimum-wages)) | 89 | USD 348 (UNECE 2024) ([source](https://en.wikipedia.org/wiki/List_of_countries_by_average_wage)) |
| Pakistan | PKR 37,500/month (Wikipedia gives the effective date as 1 Jun 2026; unverified) ([Wikipedia](https://en.wikipedia.org/wiki/List_of_countries_by_minimum_wage)) | 118 | Gap |
| India | No national monthly floor. State rates run from INR 160/day (Bihar) to INR 750/day (Kerala), and Wikipedia's figures are old ([Wikipedia](https://en.wikipedia.org/wiki/List_of_countries_by_minimum_wage)) | n/a | Gap |
| Egypt | EGP 7,000/month private sector; EGP 6,000 public, 1 Mar 2025 ([Wikipedia](https://en.wikipedia.org/wiki/List_of_countries_by_minimum_wage)) | 126 | Gap |

### Currency volatility notes (from the IMF CPI figures above, plus the FX levels)
- **Argentina**: CPI was 219.9% in 2024, 41.9% in 2025 and 32.5% projected for 2026 (IMF link above). ARS prices are stale within months, so price in USD/EUR.
- **Turkey**: CPI 58.5% / 34.9% / 31.2%. EUR/TRY was already 48.58 on 31 Oct 2025 ([ECB](https://www.ecb.europa.eu/stats/exchange/eurofxref/shared/pdf/2025/10/20251031.pdf)), against an implied 2025 average of about 44.6. Price in EUR.
- **Egypt**: CPI 33.3% / 20.4% / 13.3%. The 2025 average was EGP 49.2/USD, after the 2024 float (FX from the WB link above). Local course fees found are probably pre-devaluation.
- **Pakistan**: CPI fell from 23.4% (2024) to 4.5% (2025), with 7.1% projected for 2026. **Uzbekistan**: 8.8% / 6.9%. **Colombia**: about 5-6%. **Tunisia**: about 5%.
- **Low-risk currencies**: Ecuador is dollarised, Kosovo uses the euro, and the Moroccan dirham is pegged to a EUR/USD basket. CPI was under 1% in Morocco and Ecuador in 2025.

### Local group-class prices (sourced)

| Country | Provider and product | Local price | EUR est. (2025 avg rate) | Per hour | Source and date |
|---|---|---|---|---|---|
| Peru | ICPNA adult English, daily regular, Basic/Intermediate | S/ 298 per one-month course (second column S/ 255; header not in the extracted text, possibly a regional or discounted rate). Advanced S/ 315; accelerated S/ 550; Saturday bimonthly S/ 445 | 74 (S/298); 63 (S/255) | Hours not stated in the PDF. At about 30 h/month (1.5 h x 5 days, assumption) that is about EUR 2.1-2.5/h (est.) | [ICPNA Tarifas 2025](https://services.icpna.edu.pe/uploads/shares/institucional/PDF/Comunicado_Tarifas_2025.pdf), valid from Jan 2025. A second table in the same PDF lists S/ 360-412 for the same levels (probably a different modality or region; unlabelled) |
| Brazil | Wizard (franchise) English | R$ 279-539/month in São Paulo units; R$ 99-319 elsewhere (aggregator) | 44-85 (SP) | At an assumed 2 h/week (about 8.7 h/month) roughly EUR 5-10/h (est.) | [Quero Bolsa, Wizard](https://querobolsa.com.br/wizard/cursos), [Wizard Vila Carrão](https://querobolsa.com.br/wizard-vila-carrao/cursos) (accessed Oct 2026; not official) |
| Chile | Instituto Chileno Británico (not the Chileno Norteamericano) | CLP 699,000/level in person; CLP 530,000/level live on Zoom; intensive Zoom promo CLP 371,000 (Mar 2025) | 650 / 493 / 345 per level | Hours per level not given | [ICB info sheet, Mar 2025](https://colegiosanjuan.cl/wp-content/uploads/2025/03/INFO-oficial-Inst.-Chileno-Britanico.pdf) |
| Mexico | Harmon Hall / Quick Learning | Harmon Hall about MXN 1,700-3,200/month; Quick Learning about MXN 2,700-3,200 per level/month (blogs, undated) | 78-147 | Gap (hours not given) | [Global Exam blog](https://global-exam.com/blog/es/general-english-cursos-de-ingles-precios-en-mexico-presencial-y-online/); [Papora](https://www.papora.com/es/cursos-ingles/quick-learning-vs-harmon-hall/). Low reliability |
| Egypt | British Council Egypt General English | EGP 2,500 (afternoon), 2,900 (morning), 3,080 (peak) per course of 10 lessons x 2.5 h = 25 h | 45-55 per course | EGP 100-123/h, about EUR 1.8-2.2/h | [British Council Egypt](https://www.britishcouncil.org.eg/en/english/courses-adults/general-english) (page undated; may predate fee rises) |
| India | British Council India | INR 12,000 for 20 h "English for IELTS" intensive, Mumbai (page with a 2019 calendar); third-party listing INR 4,750 for 42 h "myEnglish" | — | INR 600/h, about EUR 6.1/h (old page); INR 113/h, about EUR 1.15/h (unverified) | [BC Mumbai](https://www.britishcouncil.in/english/schools/mumbai); [Collegedunia](https://collegedunia.com/institute/8236-british-council-mumbai) |
| Argentina | Univ. Nacional de Cuyo (Mendoza), Italian/English annual course 2025 | ARS 346,500/yr (9 x 38,500) | about 247/yr, about 27/month at the 2025 rate | Hours not given | [UNCUYO flyer 2025](https://ffyl.uncuyo.edu.ar/upload/7af7a7bd632c1a41fc256fe81c776f17.pdf) (university extension, cheap end) |
| Argentina | Goethe-Institut Buenos Aires: course format only | Standard course = 64 x 45 min over 16 weeks. Fees not published online; exam A1 ARS 230,000, B1 ARS 365,000 (Oct 2025) | A1 exam about EUR 164 | — | [Goethe Buenos Aires exam info](https://www.goethe.de/ins/ar/es/m/sta/bue/prf/inf.html); [course formats](https://www.goethe.de/ins/ar/de/sta/bue/kur/all.html) |
| Colombia | Goethe-Institut Bogotá: format only | Intensive 128 h / 8 weeks, extensive 64 h / 8 weeks, Saturday 32 h; max 16 students; price not on page | — | Gap | [Goethe Kolumbien](https://www.goethe.de/ins/co/es/spr/kur/all.html) |
| Colombia | Colombo Americano: free "Yes, Bogotá" programme (96 synchronous h) for A2+ adults, Mar 2026 call | Free (public programme); regular fees not found | — | — | [El Espectador](https://www.elespectador.com/bogota/curso-gratis-de-ingles-en-bogota-como-inscribirse-antes-del-22-de-marzo/) |

### Inferences
- PLR is a fair first cut, but GDP per capita changes the picture. Turkey (PLR 0.41, but USD 18.6k GDP pc and USD 45k PPP) and Argentina/Chile can pay more than their price level suggests. Morocco (PLR 0.42, USD 4.7k) and Colombia have a similar price level but much lower incomes.
- Where hours are known, local institutional group classes cost about EUR 1-2.5/h in Egypt, Peru and India, and about EUR 5-10/h at Brazilian franchises. The existing notes put Goethe/BC Morocco at EUR 4.5-9.4/h and Canada at C$15-20/h. Local cultural-binational institutes (ICPNA, BC Egypt) are the price floor that online small-group classes compete with.
- Minimum wage in EUR gives a simple affordability check. A monthly subscription equal to 10% of the minimum wage would be about EUR 9 in Uzbekistan, EUR 12-13 in Egypt and Pakistan, EUR 25-30 in Brazil, Peru, Morocco and Colombia, EUR 40-50 in Chile, Albania and Kosovo, and EUR 180+ in France and Spain (est.).

### Gaps
- No sourced local course prices found for Morocco (beyond the existing notes), Turkey (the Goethe Istanbul page has no fees), Tunisia, the Philippines, Albania, Kosovo, Uzbekistan, Pakistan or Ecuador. Colombo Americano and the Instituto Chileno Norteamericano do not publish regular fees online. The Goethe-Institut in Bogotá, Buenos Aires and Istanbul show course formats but not fees.
- Median or average wages for Morocco, Brazil, Peru, Argentina, Ecuador, India, Egypt, Tunisia, the Philippines, Kosovo, Pakistan, Mexico, Chile and Colombia (local-currency monthly) were not collected. ILOSTAT or national statistics offices would fill this.
- The Big Mac index was not consulted (tool budget).
- The Canadian minimum wage on Wikipedia dates from 2022 and is outdated. Colombia 2026 and Morocco 2026 minimum-wage updates are not verified.
- The ICPNA column headers and hours per course could not be extracted from the PDF.

## Suggested price bands

### Takeaway
Five bands, set mainly by the 2025 price level ratio and adjusted for nominal GDP per capita. For the multipliers, take Band 1 (Germany/France/Canada) as 100%.

### Cited Findings
Inputs are the PLR, GDP per capita and minimum wage figures in the tables above (World Bank WDI 2025, IMF DataMapper, Wikipedia/Trading Economics minimum wages).

### Inferences (proposed bands, est.)
| Band | Countries | PLR (US=1) | GDP pc nominal | Suggested price vs Band 1 | Reasoning |
|---|---|---|---|---|---|
| 1 | Germany, France, Canada | 0.77-0.83 | USD 49-61k | 100% | Reference market; highest price level and income |
| 2 | Italy, Spain | 0.65-0.69 | USD 39-43k | about 80-85% | Price level about 80-86% of Germany's |
| 3 | Chile, Mexico, Turkey, Argentina, Albania, Peru, Brazil | 0.41-0.54 | USD 10-19k | about 50-55% | Middle-income economies with a price level about 51-67% of Germany's. Peru and Brazil are borderline (USD 10-11k GDP pc). Turkey and Argentina belong here by income, but should be priced in EUR/USD and reviewed quarterly (inflation of 30%+) |
| 4 | Morocco, Colombia, Ecuador, Kosovo, Tunisia, Philippines | 0.31-0.43 | USD 4-9k | about 40% | PLR at 38-53% of Germany's but much lower incomes. Ecuador, Kosovo and Morocco have stable currencies |
| 5 | Egypt, India, Pakistan, Uzbekistan | 0.15-0.29 | USD 1.6-4k | about 25-30% | Lowest price levels and incomes; minimum wages EUR 90-130/month. Egypt's PLR (0.15) is distorted by the 2024 devaluation, and its PPP income (USD 20k) is much higher than nominal. Keep a floor price to cover teacher cost |

Notes on band edges: Peru and Brazil could go into Band 4 if conversion matters more than margin. Turkey's PPP income (USD 45k) argues for Band 3 despite its low PLR. To limit arbitrage, base the band on billing country and card BIN.
