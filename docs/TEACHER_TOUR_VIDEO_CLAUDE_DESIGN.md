# Teacher tour video: prompt for Claude Design

The teacher dashboard tour opens with a short overview video (docs/TEACHER_ONBOARDING_PLAN.md). A version recorded from
the real dashboard ships with the site in every language (`videos/teacher-tour/<lang>.mp4`, made with
`scripts/record-tour-video.js`). To replace one with a designed version: make it in Claude Design with the prompt below,
export it as MP4, and upload it in Admin -> Teacher onboarding -> Overview video for that language. "Remove upload"
brings the recorded one back.

Attach to the prompt: screenshots of the teacher dashboard (Today, Classes, the practice classroom with the board,
Homework marking, Settings), for example from `alimun.com/app/teach?sample=1`, and the logo from `images/`.

## Prompt (English version; for another language, ask for the same video with the text in that language)

> Make a 75-second explainer video, 16:9, 1920x1080, 30 fps, no voice-over, for new teachers at Alimun, an online
> language school. It shows teachers how their dashboard works before their first class.
>
> Look: Alimun's own style only. Fonts: Coolvetica Condensed (headings, uppercase) and Satoshi (text). Colours: ink
> #080808 for text, lime #ceff65 for highlights, white and bone #f0efe9 / #eeeeec backgrounds, forest green #1a443c for
> panels. Large rounded corners. Calm, friendly, clear. No black backgrounds, no gradients, no emojis, no stock photos,
> no counters or step numbers on screen. Do not present Alimun as an AI company.
>
> Use the attached dashboard screenshots as the screens. Each scene zooms gently into the part being explained, with a
> lime outline around it and a short caption card at the bottom (heading in Coolvetica, one or two sentences in Satoshi).
>
> Scenes and captions:
> 1. Title card on bone: "Teaching at Alimun". Under it: "Your dashboard in about a minute: your next class, the
>    classroom and the board, homework, and where to find help." (5 s)
> 2. Today, the next-class card. "Your next class": "Your next class is always at the top of Today. From an hour before,
>    press Check in. From 15 minutes before, Start the class opens your classroom with the video and the board." (9 s)
> 3. Today, the To do cards. "What needs doing": "Notes to write after a class, homework to mark and unread messages
>    appear here. Open one to deal with it." (7 s)
> 4. Classes, the buttons Create a class, Your availability, Practice classroom. "Classes and availability": "Under Your
>    availability, add the times you can teach each week. Classes that fit come to you as course contracts, by email and
>    on this page, and you accept or decline each one." (9 s)
> 5. The classroom board with an exercise, the answers appearing. "Prepared lessons": "Every class date gets the next
>    lesson Alimun has prepared for the course. In class, the Board button shows its pages to your students." (9 s)
> 6. Homework marking. "Homework": "Set homework for a class or one student and mark what they hand in. You can ask for
>    an AI-drafted mark, but nothing reaches a student until you press Send to the student." (9 s)
> 7. Messages. "Messages": "One conversation with each class, and a private one with each student." (6 s)
> 8. Settings, the About you field. "Your profile": "Students read About you, for students when they choose a class, so
>    write a few sentences about yourself and how you teach." (8 s)
> 9. The question mark in the top bar. "Help on every page": "The question mark opens the help for the page you are on.
>    If you are stuck, Support reaches a person at Alimun." (7 s)
> 10. Closing card on bone: "Try the classroom before your first class". Under it: "The practice classroom is your own
>     room with the video and the board, open at any time for an hour. Nothing is recorded. You will find it again under
>     Classes." (6 s)

The caption texts are the tour's own (`app_tour_*` in `js/translations.js`); take another language's wording from there
so the video and the tour say the same thing.
