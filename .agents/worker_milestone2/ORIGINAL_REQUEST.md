## 2026-06-28T16:22:08Z

<USER_REQUEST>
**Context**: Milestone 2: Optimize English Page & Create Tedesco Page
**Identity**: You are the Worker agent. Your working directory is C:\Users\Admin\Downloads\alimun web\alimun-site\.agents\worker_milestone2. Your workspace is C:\Users\Admin\Downloads\alimun web\alimun-site.
**Objective**:
Perform the following optimizations and file creation:
1. Update `it/corsi-inglese-online.html`:
   - Inspect the Breadcrumb schema in the `<script type="application/ld+json">` element. Update the URLs in the schema to be clean URLs (removing `.html` suffix, matching clean URL structure).
   - Ensure the canonical link is correct: `<link rel="canonical" href="https://alimun.com/it/corsi-inglese-online">` or aligned.
   - Verify `og:title` and `og:description` exist and are correct in the head tags. Add them if missing.
   - Verify/add `hreflang="it"` and `hreflang="x-default"` links.
2. Update `it/contact.html`:
   - Find the English success confirmation text (e.g. `Thank you! Your submission has been received!`) at lines 143 and 247, and change it to the correct Italian translation: `Grazie! La tua richiesta è stata ricevuta!`. Ensure it has `data-i18n="newsletter_success"` attribute or standard structure as appropriate.
3. Create `it/corsi-tedesco-online.html` (German Course Page):
   - Duplicate the structure of `it/corsi-inglese-online.html`.
   - Update meta tags in the head:
     - Title: `Corsi di Tedesco Online | Lezioni Live con Madrelingua | Alimun`
     - Description: `Impara il tedesco online con sessioni live in piccoli gruppi e feedback AI. Insegnanti madrelingua certificati per carriere in Germania, Austria e Svizzera. Da €24/mese.`
     - Canonical Link: `https://alimun.com/it/corsi-tedesco-online` (clean URL)
     - Alternate link: `<link rel="alternate" hreflang="x-default" href="https://alimun.com/">`
     - Alternate link: `<link rel="alternate" hreflang="it" href="https://alimun.com/it/corsi-tedesco-online">`
     - Open Graph: `og:title`, `og:description`, `og:image` (fallback to existing image), `og:url` (pointing to clean URL).
   - Update the JSON-LD `<script type="application/ld+json">` schema block:
     - In `BreadcrumbList`, update the 3rd item's name to `"Corsi di tedesco online"` and item URL to `"https://alimun.com/it/corsi-tedesco-online"`. (Remove `.html` from all Breadcrumb URLs if aligning with clean URL structure).
     - In `Course`, change the name to `"Corsi di tedesco online"`, description to `"Corsi di tedesco online focalizzati sulla grammatica strutturata e opportunità di carriera in Germania, Austria e Svizzera."`, and update the ratingValue to `"4.7"`, reviewCount to `"98"`, and review body to reference Matteo B.
     - In `FAQPage`, replace the entire mainEntity array with the 8 German-specific FAQs drafted in the explorer's report:
       1. Che livelli di tedesco offre Alimun?
       2. Il tedesco è troppo difficile per i principianti assoluti?
       3. Posso prepararmi per le certificazioni Goethe-Zertifikat o TestDaF?
       4. Come sono strutturate le sessioni di tedesco online?
       5. Quanto tempo ci vuole per parlare un tedesco fluente?
       6. Perché Alimun costa meno di un corso privato o di istituti tradizionali?
       7. Posso cambiare piano o annullare quando voglio?
       8. Come funziona la tariffa bloccata per sempre?
       (Use the detailed Italian questions and answers from C:\Users\Admin\Downloads\alimun web\alimun-site\.agents\explorer_milestone1\analysis.md).
   - In the body of the page, replace the text content:
     - H1 Tag: `<h1 class="hero-h1 anim delay-2">CORSI DI TEDESCO ONLINE</h1>` (Ensure exactly one H1).
     - Hero Subtext: `Partecipa a sessioni live dinamiche condotte da insegnanti madrelingua per padroneggiare la grammatica e sbloccare opportunità di carriera in Germania, Austria e Svizzera. Classi a numero chiuso e feedback AI in tempo reale.`
     - Hero Price Note: `Nessuna carta di credito · Prova di 7 giorni gratuita · Garanzia di rimborso · Annulla quando vuoi`
     - Stats Bar elements:
       - Stat 1: `1ª Lingua` | `più parlata come lingua madre nell'Unione Europea`
       - Stat 2: `#1 Partner` | `commerciale dell'Italia (Germania al primo posto per interscambio)`
       - Stat 3: `Da €24` | `al mese · prezzo fondatore bloccato`
       - Stat 4: `A1–C2` | `tutti i livelli del quadro CEFR`
       - Stat 5: `+22% Stipendio` | `medio in Italia per chi possiede competenze di tedesco business`
     - Section 3: Eyebrow: `Il tedesco per le aziende`, Heading: `IL TEDESCO È LA LINGUA DEGLI AFFARI IN EUROPA. NON RIMANERE INDIETRO.`, and update the 3 paragraphs.
     - Section 5 Comparison Table: update the 4th competitor from `Wall Street English` to `Goethe-Institut` (or adapt as appropriate) and adjust the comparison fields.
     - Section 6: Heading: `IL TEDESCO APRE LE PORTE ALLA PIÙ GRANDE ECONOMIA EUROPEA.`, Paragraphs, and Goal Tags (`💼 Carriera in DACH`, `🎓 Università e Master`, `🚗 Settore Automotive`, `🏦 Finanza a Zurigo`, `🏆 Esame Goethe/TestDaF`, `💻 Relazioni commerciali`).
     - Section 8 (CEFR Levels): Update descriptions for A1 to C2.
     - Section 8B (Teachers): Update profiles (Hans Müller, Clara Schmidt, Lukas Weber, Sofia Haas).
     - Section 11 (Testimonials): Update quotes and details for Matteo B., Francesca S., Alessandro V.
     - Section 13 (Bottom CTA): Update the cycling text strings (`Vuoi lavorare a Monaco?`, `Vuoi superare il Goethe?`, `Vuoi trasferirti a Zurigo?`, `Unisciti ad Alimun.`).
4. Run build/test verification commands. Check if there are any build processes (e.g. `node build.js`). If so, run it to verify. If not, just run verification checks.
5. Create a handoff report in your folder `handoff.md` and report back when finished.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.
</USER_REQUEST>
