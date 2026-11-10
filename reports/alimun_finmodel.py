"""Alimun financial stress test: milestone snapshots (monthly, steady state) plus growth burn.
All money in EUR per month unless stated. Every assumption is in ASSUME / SCEN and printed with the results."""
import json, math, sys

USD = 1 / 1.1193  # ECB 23 Oct 2026

ASSUME = dict(
    # ---------- prices (EU, VAT incl.) and bands ----------
    app_price=7.99, app_band={"A": 1.00, "B": 0.80, "C": 0.65},
    pack_month={"EN": 64.0, "DE": 82.0}, pack_upfront_month={"EN": 179 / 3, "DE": 229 / 3},
    pack_band={"A": 1.00, "B": 0.90, "C": 0.85},
    upfront_share=0.30, lang_mix={"EN": 0.65, "DE": 0.35},
    band_mix_paid={"A": 0.45, "B": 0.15, "C": 0.40},
    rooms_addon_price=9.99, rooms_addon_take=0.05,          # share of app-only subscribers
    minute_pack_spend=2.99, minute_pack_take=0.10,          # share of app subscribers buying one a month
    help_paid_price=5.0, help_paid_take=0.15,               # class learners buying one paid help class a month
    private_share=0.03, private_spend=120.0, private_margin=0.30,
    # ---------- taxes and fees ----------
    eu_vat=0.20, non_eu_tax_provision=0.05,                 # unknown local digital taxes: provision
    fee_eu=(0.027, 0.25), fee_intl=(0.0635, 0.25),
    # ---------- AI tutor (measured, owner's calls 10 Nov 2026) ----------
    min_cost_cascade=0.015 * USD * 1.25,                    # $0.015/min measured + 25% for the Gemini Flash brain
    min_cost_live=0.057 * USD, live_share=0.20,
    app_minutes={"A": 60, "B": 50, "C": 40}, class_minutes=120, minute_use=0.35,
    ai_other_paid=0.30, ai_free=0.08,                       # exercises, written tutor, grading per user per month
    # ---------- classes ----------
    classes_per_month=13.0,                                 # 3 a week
    teacher={"EN": (8.0, 0.75), "DE": (12.0, 1.0)}, payout=0.03,
    video_per_person_hour=0.21,
    help_free_per_learner_month=1 / 3, help_avg_size=5,     # one free 30-min help class per 12-week pack
    teacher_hours_week=15.0, teacher_cover=0.15,
    # ---------- other variable ----------
    infra_per_active=0.02, sms_per_signup=0.05, support_tools_per_paid=0.10,
    # ---------- acquisition ----------
    cac_app=18.0, cac_class=45.0,                           # blended paid-channel cost per new paying customer
    rewards_share=0.05,
)

SCEN = {
    "bear": dict(app_conv=0.04, class_conv=0.015, fill=9.0, churn_app=0.14, churn_class=0.12, cac_mult=1.5),
    "base": dict(app_conv=0.08, class_conv=0.030, fill=11.0, churn_app=0.10, churn_class=0.08, cac_mult=1.0),
    "bull": dict(app_conv=0.12, class_conv=0.050, fill=12.5, churn_app=0.07, churn_class=0.06, cac_mult=0.75),
}

MILESTONES = [100, 1_000, 5_000, 10_000, 20_000, 50_000, 100_000]
ORGANIC = {100: 0.30, 1_000: 0.30, 5_000: 0.35, 10_000: 0.40, 20_000: 0.45, 50_000: 0.50, 100_000: 0.55}

# Team: (role, monthly cost EUR, active users at which the role starts, how it scales)
TEAM = [
    ("Bookkeeper and accountant (external)", 200, 100, None),
    ("Accountant, larger scope", 600, 5_000, None),                 # replaces the line above from 5k (added on top)
    ("Legal retainer (external)", 300, 5_000, None),
    ("Legal retainer, larger", 1_200, 50_000, None),
    ("Customer support (multilingual, remote)", 1_200, 1_000, ("per_paid", 2_500)),
    ("Social media and content freelancer", 1_000, 1_000, None),
    ("Academic coordinator (per language)", 1_800, 5_000, ("per_teachers", 15)),
    ("Curriculum and content producer", 2_000, 5_000, None),
    ("Operations and scheduling manager", 2_200, 10_000, None),
    ("Marketing lead", 3_500, 10_000, None),
    ("Software engineer", 4_500, 10_000, ("per_active", 40_000)),
    ("Founder salary", 3_000, 5_000, None),
    ("Founder salary, raise", 3_000, 20_000, None),
    ("Performance marketer", 3_000, 20_000, None),
    ("Teacher recruiting and HR", 2_000, 20_000, None),
    ("Finance controller (part-time)", 2_500, 50_000, None),
    ("Data and analytics", 3_500, 50_000, None),
]
FIXED_INFRA = {100: 120, 1_000: 180, 5_000: 400, 10_000: 800, 20_000: 1_500, 50_000: 3_500, 100_000: 7_000}
ONE_OFF = {100: 3_000, 5_000: 6_000, 20_000: 10_000, 50_000: 15_000}   # legal setup, audits, store/app work


def net_of(price, band):
    """Revenue after VAT or tax provision and card fees, for one charge."""
    if band == "A":  # treated as EU for VAT and fees (conservative for UK/US/Canada)
        return price / (1 + ASSUME["eu_vat"]) - (ASSUME["fee_eu"][0] * price + ASSUME["fee_eu"][1])
    return price * (1 - ASSUME["non_eu_tax_provision"]) - (ASSUME["fee_intl"][0] * price + ASSUME["fee_intl"][1])


def blended(fn):
    return sum(ASSUME["band_mix_paid"][b] * fn(b) for b in "ABC")


def ai_minute_cost():
    return (1 - ASSUME["live_share"]) * ASSUME["min_cost_cascade"] + ASSUME["live_share"] * ASSUME["min_cost_live"]


def unit_app():
    """Per app-only subscriber per month: net revenue, variable cost."""
    rev = blended(lambda b: net_of(ASSUME["app_price"] * ASSUME["app_band"][b], b))
    rev += ASSUME["minute_pack_take"] * blended(lambda b: net_of(ASSUME["minute_pack_spend"], b))
    rev += ASSUME["rooms_addon_take"] * blended(lambda b: net_of(ASSUME["rooms_addon_price"] * ASSUME["pack_band"][b], b))
    mins = blended(lambda b: ASSUME["app_minutes"][b]) * ASSUME["minute_use"]
    cost = mins * ai_minute_cost() + ASSUME["ai_other_paid"]
    cost += ASSUME["minute_pack_take"] * 30 * ASSUME["minute_use"] * 2 * ai_minute_cost()   # pack minutes used
    cost += ASSUME["rooms_addon_take"] * 4 * 1.0 * ASSUME["video_per_person_hour"]
    cost += rev * ASSUME["rewards_share"] + ASSUME["support_tools_per_paid"]
    return rev, cost


def unit_class(fill, five_day=False):
    """Per class learner per month (pack includes the app, rooms and one free help class per pack)."""
    a = ASSUME
    lm = a["lang_mix"]
    mult = 1.55 if five_day else 1.0
    cpm = a["classes_per_month"] * (5 / 3 if five_day else 1.0)

    def price(lang):
        return mult * ((1 - a["upfront_share"]) * a["pack_month"][lang] + a["upfront_share"] * a["pack_upfront_month"][lang])

    rev = sum(lm[l] * blended(lambda b, l=l: net_of(price(l) * a["pack_band"][b], b)) for l in lm)
    rev += a["help_paid_take"] * blended(lambda b: net_of(a["help_paid_price"], b))
    rev += a["private_share"] * a["private_spend"] * 0.80     # private rooms and 1:1 after tax and fees (approx.)
    teach = 0.0
    for l in lm:
        base, per = a["teacher"][l]
        per_class = (base + per * fill) * (1 + a["payout"]) / fill + a["video_per_person_hour"] * (fill + 1) / fill
        teach += lm[l] * cpm * per_class
    help_cost = (a["help_free_per_learner_month"] + a["help_paid_take"]) * (
        sum(lm[l] * (a["teacher"][l][0] + a["teacher"][l][1] * a["help_avg_size"]) for l in lm) * 0.5 * (1 + a["payout"]) / a["help_avg_size"])
    ai = a["class_minutes"] * a["minute_use"] * ai_minute_cost() + a["ai_other_paid"]
    private_cost = a["private_share"] * a["private_spend"] * 0.80 * (1 - a["private_margin"])
    cost = teach + help_cost + ai + private_cost + rev * a["rewards_share"] + a["support_tools_per_paid"]
    hours_per_learner_week = (cpm / 4.33) / fill + (a["help_free_per_learner_month"] + a["help_paid_take"]) * 0.5 / 4.33 / a["help_avg_size"]
    return rev, cost, hours_per_learner_week


def team_cost(active, paid, teachers):
    rows, total = [], 0.0
    for role, cost, start, scale in TEAM:
        if active < start:
            continue
        n = 1
        if scale and scale[0] == "per_paid":
            n = max(1, math.ceil(paid / scale[1]))
        elif scale and scale[0] == "per_teachers":
            n = max(1, math.ceil(teachers / scale[1]))
        elif scale and scale[0] == "per_active":
            n = max(1, math.ceil(active / scale[1]))
        rows.append((role, n, cost * n))
        total += cost * n
    return total, rows


def snapshot(active, s, five_day_share=0.0):
    sc = SCEN[s]
    app_n = active * sc["app_conv"]
    cls_n = active * sc["class_conv"]
    free_n = active - app_n - cls_n
    ar, ac = unit_app()
    cr, cc, h3 = unit_class(sc["fill"])
    cr5, cc5, h5 = unit_class(sc["fill"], five_day=True)
    c_rev = cls_n * ((1 - five_day_share) * cr + five_day_share * cr5)
    c_cost = cls_n * ((1 - five_day_share) * cc + five_day_share * cc5)
    hours = cls_n * ((1 - five_day_share) * h3 + five_day_share * h5)
    teachers = math.ceil(hours / ASSUME["teacher_hours_week"] * (1 + ASSUME["teacher_cover"])) if cls_n else 0
    rooms = math.ceil(cls_n / sc["fill"]) if cls_n else 0
    rev = app_n * ar + c_rev
    var = app_n * ac + c_cost + free_n * ASSUME["ai_free"] + active * ASSUME["infra_per_active"]
    signups = active * 0.25                                  # free users turn over ~25% a month
    var += signups * ASSUME["sms_per_signup"]
    contribution = rev - var
    team, team_rows = team_cost(active, app_n + cls_n, teachers)
    infra = FIXED_INFRA[active]
    org = ORGANIC[active]
    replace_app = app_n * sc["churn_app"] * (1 - org) * ASSUME["cac_app"] * sc["cac_mult"]
    replace_cls = cls_n * sc["churn_class"] * (1 - org) * ASSUME["cac_class"] * sc["cac_mult"]
    hold_marketing = replace_app + replace_cls
    ebitda_hold = contribution - team - infra - hold_marketing
    # LTV / CAC
    ltv_app = (ar - ac) / sc["churn_app"]
    ltv_cls = (cr - cc) / sc["churn_class"]
    return dict(active=active, free=round(free_n), app=round(app_n), classes=round(cls_n), rooms=rooms,
                teach_hours_week=round(hours), teachers=teachers, revenue=round(rev), variable_cost=round(var),
                contribution=round(contribution), contribution_pct=round(100 * contribution / rev) if rev else 0,
                team=round(team), team_rows=team_rows, infra=infra, marketing_hold=round(hold_marketing),
                ebitda_hold=round(ebitda_hold), ltv_app=round(ltv_app), ltv_class=round(ltv_cls),
                cac_app=round(ASSUME["cac_app"] * sc["cac_mult"]), cac_class=round(ASSUME["cac_class"] * sc["cac_mult"]),
                unit_app=(round(ar, 2), round(ac, 2)), unit_class=(round(cr, 2), round(cc, 2)))


def growth_burn(s, monthly_growth=0.15):
    """Months to go from one milestone to the next at a steady growth rate, the extra marketing for the growth,
    and the cumulative cash needed (one-off costs included)."""
    out, cash, low = [], 0.0, 0.0
    sc = SCEN[s]
    for i, m in enumerate(MILESTONES[:-1]):
        nxt = MILESTONES[i + 1]
        months = math.log(nxt / m) / math.log(1 + monthly_growth)
        a, b = snapshot(m, s), snapshot(nxt, s)
        # extra paying customers to add, bought at full CAC on the non-organic share
        add_app = (b["app"] - a["app"]) * (1 - ORGANIC[m]) * ASSUME["cac_app"] * sc["cac_mult"]
        add_cls = (b["classes"] - a["classes"]) * (1 - ORGANIC[m]) * ASSUME["cac_class"] * sc["cac_mult"]
        avg_hold = (a["ebitda_hold"] + b["ebitda_hold"]) / 2
        period = avg_hold * months - add_app - add_cls - ONE_OFF.get(m, 0)
        cash += period
        low = min(low, cash)
        out.append(dict(frm=m, to=nxt, months=round(months, 1), growth_marketing=round(add_app + add_cls),
                        period_cashflow=round(period), cumulative=round(cash)))
    return out, round(low)


if __name__ == "__main__":
    res = {}
    for s in SCEN:
        res[s] = dict(snap=[snapshot(m, s) for m in MILESTONES],
                      snap5=[snapshot(m, s, five_day_share=0.20 if m >= 10_000 else 0.0) for m in MILESTONES],
                      growth=growth_burn(s))
    res["unit_minute_cost"] = round(ai_minute_cost(), 4)
    json.dump(res, open(sys.argv[1], "w"), indent=1, default=str)
    for s in SCEN:
        print("=====", s)
        for r in res[s]["snap"]:
            print({k: v for k, v in r.items() if k != "team_rows"})
        g, low = res[s]["growth"]
        for x in g:
            print(x)
        print("lowest cumulative cash:", low)
    print("blended AI minute cost €", res["unit_minute_cost"])
    print("5-day variant base:", [(r["active"], r["ebitda_hold"], r["teachers"]) for r in res["base"]["snap5"]])
