# Azure Speech for the tutor's pronunciation scoring (owner's steps)

The tutor's pronunciation practice (`docs/AI_TUTOR_PLAN.md`, part 4) scores recordings with Microsoft Azure AI Speech. It stays hidden for students until both Vercel variables below exist.

Set up on 26 Oct 2026: subscription "Azure subscription 1" (pay-as-you-go; the account had used its free trial before), resource group `Alimun`, resource `alimun-speech` in **North Europe** (Ireland, next to the site's functions and database; West Europe refused new customers that day), tier **Free F0**.

1. Sign in at https://portal.azure.com. The form needs an active subscription: https://portal.azure.com/#view/Microsoft_Azure_Billing/SubscriptionsBladeV2 (if none, sign up for pay-as-you-go; there is no monthly fee).
2. Open https://portal.azure.com/#create/Microsoft.CognitiveServicesSpeechServices. Resource group `Alimun`, Region an EU region (North Europe; if refused, Sweden Central, France Central or Germany West Central), Name `alimun-speech`, Pricing tier Free F0. Review + create, Create, Go to resource.
3. Resource Management, Keys and Endpoint: copy KEY 1; "Location/Region" gives the region value (for North Europe: `northeurope`).
4. Vercel, the alimun project, Settings, Environment Variables: `AZURE_SPEECH_KEY` = KEY 1 and `AZURE_SPEECH_REGION` = the region value, for Production. Save, then Deployments, the latest, Redeploy.
5. A monthly budget with an email alert: https://portal.azure.com/#view/Microsoft_Azure_CostManagement/Menu/~/budgets

Free F0: 5 hours of audio a month (about 3,600 five-second attempts) and one attempt scored at a time; a student whose attempt collides with another's sees "could not be scored, try again". When that or the 5 hours start to bite, change the resource's Pricing tier to Standard S0 (same key and region; Microsoft says the new limits can take a few hours to apply). S0 is billed as real-time speech to text, about $1 per hour of audio, plus the pronunciation add-on that Microsoft prices separately (earlier sources said $0.30 an hour); a 5 second attempt is about $0.002. Every attempt is written to the admin's AI spend page as "Tutor pronunciation scoring" and counts against the tutor's daily budget (`TUTOR_DAILY_BUDGET_USD`).

The key is never sent to the browser. Recordings are sent to Azure for scoring and are never stored by Alimun.
