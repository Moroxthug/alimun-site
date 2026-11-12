// Sources checked (internal, never shown): js/app/classes.js (Daily Prebuilt frame, roomOptions, join), api/join-session.js
// (class rooms start_video_off false), docs/HELP_PLAN.md §1 (device check: camera, mic, browser), Terms.
export default {
  slug: 'camera-or-microphone-in-class',
  lang: 'en',
  kind: 'problem',
  subject: 'classes',
  audience: 'student',
  title: 'My camera or microphone does not work in class',
  summary: 'A guided check for when the others cannot see or hear you in a live class.',
  words: ['camera not working', 'microphone not working', 'mic not working', 'they cannot hear me', 'they cannot see me', 'black screen', 'webcam', 'permission', 'blocked camera', 'no video'],
  updated: '2026-11-12',
  body: [
    { p: 'Answer one question at a time. The page tests your camera and microphone in your browser first.' }
  ],
  check: {
    start: 'camera',
    steps: {
      camera: { auto: 'camera', ask: 'Do you see yourself in the camera test?', yes: 'mic', no: 'fix-camera' },
      'fix-camera': { fix: 'Your browser needs your permission to use the camera. Click the camera or lock icon in the address bar, allow the camera and the microphone for alimun.com, and reload the page. Close other apps that may be using the camera, such as another video call. On a phone or a Mac, also check that your browser is allowed to use the camera in the device’s privacy settings.', next: 'camera' },
      mic: { auto: 'mic', ask: 'Does the bar move when you speak?', yes: 'inclass', no: 'fix-mic' },
      'fix-mic': { fix: 'Allow the microphone for alimun.com in the address bar and reload. Check that your headset is plugged in and not muted by its own switch, and that the right microphone is chosen in your device’s sound settings.', next: 'mic' },
      inclass: { ask: 'In the class, are your camera and microphone switched on in the buttons at the bottom of the video?', yes: 'still', no: 'fix-inclass' },
      'fix-inclass': { fix: 'Press the camera and microphone buttons at the bottom of the video to switch them on. If they stay off, leave the class and press **Join** again.', next: 'still' },
      still: { ask: 'Can the others see and hear you now?', yes: 'done', no: 'browser' },
      browser: { auto: 'browser', ask: 'Is your browser up to date?', yes: 'person', no: 'fix-browser' },
      'fix-browser': { fix: 'Update your browser, or open the class in another up-to-date browser, and allow the camera and microphone when it asks.', next: 'camera' },
      person: { fix: 'Your camera and microphone work, but something else is stopping them in class. A person will help.', handover: true },
      done: { solved: 'Glad it works. The others can see and hear you now.' }
    }
  },
  related: ['no-sound-in-class', 'cannot-join-class', 'your-first-live-class'],
  missing: [
    'Exact labels of Daily Prebuilt\'s camera and microphone buttons are Daily\'s, not Alimun\'s, and vary by language; described rather than named.',
    'No list of supported browsers exists in Alimun\'s text; the check says "up to date" only.'
  ]
};
