# Azure Speech for the tutor's pronunciation scoring (owner's steps)

The tutor's pronunciation practice (`docs/AI_TUTOR_PLAN.md`, part 4) scores recordings with Microsoft Azure AI Speech. It stays hidden for students until both Vercel variables below exist. About 10 minutes.

1. Go to https://portal.azure.com and sign in with a Microsoft account (or create one; Azure asks for a card for pay-as-you-go billing).
2. Top search bar: type "Speech service" and open it (it is listed under Azure AI services / Foundry Tools). Click "Create".
3. Fill in: Subscription: your pay-as-you-go subscription. Resource group: "Create new", name it `alimun`. Region: **West Europe**. Name: `alimun-speech` (any free name). Pricing tier: **Standard S0** (the free F0 tier allows only a few hours a month and is limited to a few requests at a time, too few for students).
4. "Review + create", then "Create". Wait until it says the deployment is complete, then "Go to resource".
5. In the left menu open "Keys and Endpoint". Copy **KEY 1**. Under "Location/Region" it says `westeurope`.
6. In Vercel: the alimun project, Settings, Environment Variables. Add `AZURE_SPEECH_KEY` with KEY 1 and `AZURE_SPEECH_REGION` with `westeurope`, for Production (and Preview if you like). Save.
7. Vercel only reads new variables on a new deployment: Deployments, the latest production deployment, the three dots, "Redeploy".
8. Optional but recommended: in Azure, Cost Management, Budgets, add a monthly budget (for example 20 dollars) with an email alert.

Cost: billed as standard speech to text, about $1 per hour of audio in West Europe (Microsoft's page may add up to $0.30 an hour for the assessment; the first invoice will tell). A 5 second attempt is about $0.002. Every attempt is also written to the admin's AI spend page as "Tutor pronunciation scoring", and it counts against the tutor's daily budget (`TUTOR_DAILY_BUDGET_USD`).

The key is never sent to the browser. Recordings are sent to Azure for scoring and are never stored by Alimun.
