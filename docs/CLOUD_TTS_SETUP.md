# Google Cloud Text-to-Speech for the course audio: set-up steps

What actually worked, 26 Oct 2026 (step by step with the owner): the project behind the Gemini key
(`gen-lang-client-0145644888`) already had billing; Cloud Text-to-Speech and Agent Platform (Vertex AI) were switched
on; the key's own account `ais-gemini-key-c9974f8ca7f7419@32038621207.iam.gserviceaccount.com` got the role
"Agent Platform user" (Vertex AI was renamed Agent Platform). The test on `/app/audio` then showed that API keys cannot
be used: Vertex refused the key (API_KEY_SERVICE_BLOCKED, the key restriction would not save in the console) and Cloud
Text-to-Speech does not accept API keys for these voices (CREDENTIALS_MISSING). So the server signs in as that service
account with its JSON key in `GOOGLE_CLOUD_TTS_KEY` (step 4 and 5 below); the general steps follow.


Why: Google's Gemini API (the key in Vercel as `GOOGLE_AI_API_KEY`) allows 100 voice requests a day for the voice
model on the current plan, so the course audio at `/app/audio` would take weeks. Google Cloud Text-to-Speech offers the
same Gemini voices (Orus, Sulafat and the others), with style instructions and two-voice dialogues, at about 150
requests a minute and no daily cap in its documentation. With it the whole library takes hours.

What it costs: billed per second of audio. For Gemini 2.5 Flash TTS, $10 per million audio tokens at 25 tokens a
second, so about $0.015 a minute; the course library (about 8 to 9 hours) comes to roughly $8. The newer Gemini 3.1
Flash TTS (preview) costs twice that. There is no free tier for these voices.

Time needed: about 15 minutes. Everything below is done by the owner; nothing secret is ever sent in a chat.

## 1. Use or create a Google Cloud project

1. Open https://console.cloud.google.com and sign in with the Google account that owns Alimun's Google services.
2. At the top of the page, open the project picker. Either choose the project your Gemini API key already belongs to
   (it is named in https://aistudio.google.com/apikey next to the key), or press "New project", name it
   `alimun-voices` and create it. Make sure that project is selected before going on.

## 2. Turn on billing

1. Menu, then "Billing". If the project has no billing account, press "Link a billing account" and choose or create one.
2. Recommended: in "Budgets & alerts", create a budget of $30 for this project with email alerts at 50%, 90% and 100%.

## 3. Turn on the two APIs

1. Menu, then "APIs & Services", then "Library".
2. Search for "Cloud Text-to-Speech API", open it and press "Enable".
3. Search for "Vertex AI API", open it and press "Enable" (Google requires it for the Gemini voices).

## 4. Create the account Alimun's server will use

1. Menu, then "IAM & Admin", then "Service accounts", then "Create service account".
2. Name: `alimun-voices`. Press "Create and continue".
3. Roles: add "Vertex AI User", then "Service Usage Consumer". Press "Continue", then "Done".
4. Open the new service account, go to the "Keys" tab, press "Add key", then "Create new key", choose "JSON" and
   press "Create". A small `.json` file downloads. It is a password: never email it, paste it in a chat or put it in
   the repository.

## 5. Give the key to Vercel

1. Open https://vercel.com, the Alimun project, then "Settings", then "Environment Variables".
2. Add a variable named `GOOGLE_CLOUD_TTS_KEY`. As its value, open the downloaded `.json` file in a text editor and
   paste its whole content. Tick "Production" (and "Preview" if you like), mark it "Sensitive", and save.
3. Optional, only if you created a new project in step 1: no other variable is needed; the project id is inside the key.
4. Keep the `.json` file somewhere safe (a password manager), or delete it: a new key can be made any time in step 4.

## 6. Check the limit (optional)

In Google Cloud: menu, then "IAM & Admin", then "Quotas & System Limits". Filter on "Text-to-Speech". The Gemini
voices show their requests-per-minute limit (150 for Gemini 2.5 Flash TTS by default). If it shows less, press
"Edit quota" to ask for more.

## 7. Tell Claude it is done

Say "the Cloud voices key is in Vercel". Claude then:

- switches `/api/speech` to Google Cloud Text-to-Speech when `GOOGLE_CLOUD_TTS_KEY` is set (the server signs in with
  the key itself; the key never reaches a browser), keeping the Gemini API as it is otherwise;
- adds the Cloud models to the voice picker (`/app/voices`) so you can hear Orus and Sulafat on Gemini 2.5 Flash TTS
  and on Gemini 3.1 Flash TTS (preview) and choose;
- regenerates the 217 files already made with the chosen model, so every book sounds the same, then lets
  `/app/audio` run through the library without the daily wait.

Note: Mandarin and Arabic are still "Preview" for these voices on Google Cloud; German, Spanish, French, Italian,
Portuguese (Brazil), Japanese and English are generally available.

Sources: https://docs.cloud.google.com/text-to-speech/docs/gemini-tts,
https://docs.cloud.google.com/text-to-speech/quotas, https://cloud.google.com/text-to-speech/pricing
