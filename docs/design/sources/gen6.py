# Builds the board for the third cast (cast3.json, cast3.py): app/drawings.html, a page for the owner's yes
# (noindex, not linked). The tutors talk with real course audio from Supabase Storage, the mouth following the sound.
# Run from docs/design/sources: python3 cast3.py && python3 gen6.py
import json, html
c = json.load(open('cast3.json'))
SUPA = 'https://dgaiasmefcbrtzqwdyri.supabase.co/storage/v1/object/public/course-audio/English-A2-academic/'
VOICE = {'f': SUPA + '3d2c07b8b0e759ea.mp3', 'm': SUPA + 'ad4456d8a39fac4e.mp3'}
TUTORS = [('lena', 'Lena', 'f', 'Explains grammar step by step.'), ('kofi', 'Kofi', 'm', 'Loves conversation practice.'),
          ('mei', 'Mei', 'f', 'Quick and precise, great before tests.'), ('omar', 'Omar', 'm', 'Calm, patient, never in a hurry.'),
          ('sofia', 'Sofia', 'f', 'Full of examples from real life.'), ('arthur', 'Arthur', 'm', 'Has a story for every word.')]
OBJ = {'apple': 'Food', 'bread': 'Food', 'cheese': 'Food', 'train': 'Transport', 'bus': 'Transport', 'bicycle': 'Transport',
       'house': 'Home', 'key': 'Home', 'phone': 'Everyday things', 'umbrella': 'Weather', 'clock': 'Time', 'ticket': 'Travel'}
SCENE = {'cafe': ('At the café', 'Ordering, describing a place, prepositions of place.'), 'station': ('At the station', 'Travel, times, asking for help.'),
         'kitchen': ('In the kitchen', 'Food, cooking verbs, things in the home.'), 'park': ('In the park', 'Weather, free time, describing what people do.')}
SPOT = {'headphones': 'Listening', 'microphone': 'Speaking', 'pencil': 'Homework', 'calendar': 'Classes', 'envelope': 'Messages',
        'chart': 'Progress', 'books': 'Library', 'plant': 'Empty states and pauses'}

def card(svg, title, sub, cls='', extra=''):
    return (f'<figure class="dcard {cls}"' + (' data-mouth="rest"' if cls == 'tutor' else '') + f'><div class="dart">{svg}</div>{extra}<figcaption><b>{html.escape(title)}</b>'
            f'<span>{html.escape(sub)}</span></figcaption></figure>')

tutors = ''.join(card(c['tutors'][k], name, desc, 'tutor', f'<button class="btn btn--primary btn--sm talk" type="button" data-voice="{VOICE[g]}">Talk</button>')
                 for k, name, g, desc in TUTORS)
shapes = ''.join(f'<figure class="dcard mini" data-mouth="{m}"><div class="dart">{c["tutors"]["kofi"]}</div><figcaption><b>{lab}</b></figcaption></figure>'
                 for m, lab in [('rest', 'Rest'), ('m', 'M, B, P'), ('e', 'E, I, S'), ('a', 'A'), ('o', 'O, U')])
objs = ''.join(card(v, k.capitalize(), OBJ[k]) for k, v in c['sticker'].items())
scenes = ''.join(card(v, SCENE[k][0], SCENE[k][1], 'scene') for k, v in c['wash'].items())
spots = ''.join(card(v, SPOT[k], k.capitalize(), 'spot') for k, v in c['paper'].items())

page = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>New drawings – Alimun</title>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow">
<link href="/images/favicon.svg?v=2" rel="icon" type="image/svg+xml">
<link href="/css/app.css" rel="stylesheet">
<style>
  .dpage {{ max-width: 1180px; margin: 0 auto; padding: 44px 16px 90px; }}
  .dsec {{ margin-top: 44px; }}
  .dsec > p {{ max-width: 760px; }}
  .dgrid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 16px; margin-top: 18px; }}
  .dgrid--wide {{ grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); }}
  .dgrid--tutor {{ grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); }}
  .dcard {{ margin: 0; background: var(--white); border-radius: var(--r-lg); padding: 16px; box-shadow: var(--shadow); display: flex; flex-direction: column; gap: 10px; animation: rise .5s var(--ease) both; }}
  .dart svg {{ width: 100%; height: auto; display: block; overflow: visible; }}
  .dcard figcaption {{ display: flex; flex-direction: column; gap: 2px; }}
  .dcard figcaption span {{ color: var(--muted); font-size: var(--fs-small); }}
  .dcard.tutor {{ background: var(--t-mint); }}
  .dcard.tutor:nth-child(2n) {{ background: var(--t-sun); }}
  .dcard.spot .dart {{ padding: 18px; background: var(--bone); border-radius: var(--r-md); }}
  .dcard.mini {{ padding: 10px; }}
  .talk {{ align-self: flex-start; }}
  .talk.is-playing {{ background: var(--lime); color: var(--forest); }}
  .mo {{ display: none; }}
  [data-mouth="rest"] .mo-rest, [data-mouth="m"] .mo-m, [data-mouth="e"] .mo-e, [data-mouth="a"] .mo-a, [data-mouth="o"] .mo-o {{ display: inline; }}
  .blink {{ animation: blink 4.2s infinite; transform-box: fill-box; transform-origin: center; }}
  .dcard:nth-child(2n) .blink {{ animation-delay: 1.3s; }}
  .dcard:nth-child(3n) .blink {{ animation-delay: 2.1s; }}
  .note {{ margin-top: 40px; padding: 22px; background: var(--t-lime); border-radius: var(--r-lg); }}
</style>
</head>
<body>
<!-- Board for the third cast (docs/design/sources/cast3.py, gen6.py); generated, do not edit by hand. Not linked anywhere. -->
<main class="dpage">
  <h1 class="t-h1">New drawings</h1>
  <p class="t-lead">A first board for your yes: the tutors for the speaking practice and the future animated tutor, objects and scenes for picture exercises, and small drawings for every section of the dashboard. Two new styles join the sticker style you approved: ink and wash for scenes, paper cut for the small drawings.</p>

  <section class="dsec">
    <h2 class="t-h2">Tutors</h2>
    <p class="t-body">Six people in the sticker style, with different faces, skin and hair, so every student can pick the tutor they like. Each has five mouth shapes; press Talk to hear a voice from the course audio while the mouth follows the sound. This is the lip sync the animated tutor would use: it runs in the browser, so it costs nothing per minute. Names and descriptions are only suggestions.</p>
    <div class="dgrid dgrid--tutor">{tutors}</div>
    <p class="t-small" style="margin-top:18px">The five mouth shapes, chosen from the sound as it plays:</p>
    <div class="dgrid" style="grid-template-columns:repeat(5,minmax(0,1fr));max-width:720px">{shapes}</div>
  </section>

  <section class="dsec">
    <h2 class="t-h2">Things for picture exercises</h2>
    <p class="t-body">Everyday objects in the sticker style, without faces, for "drag the word to the picture", "what is this?" and vocabulary cards. A first twelve; the full set grows with the vocabulary of the course books.</p>
    <div class="dgrid">{objs}</div>
  </section>

  <section class="dsec">
    <h2 class="t-h2">Scenes, ink and wash</h2>
    <p class="t-body">A new style: a fine line drawing over patches of soft colour, slightly off register like a print. Calm and readable, with room for labels, for "describe the picture" and "put the words in the scene".</p>
    <div class="dgrid dgrid--wide">{scenes}</div>
  </section>

  <section class="dsec">
    <h2 class="t-h2">Small drawings for the dashboard, paper cut</h2>
    <p class="t-body">A second new style: flat shapes with a soft shadow and no outline, small enough for section headers, empty screens and buttons, so every part of the dashboard has its own drawing.</p>
    <div class="dgrid">{spots}</div>
  </section>

  <div class="note"><p class="t-body"><b>What I need from you:</b> which styles to keep, which tutors you like (and any you would change: age, hair, clothes, glasses), and any objects or scenes you want first. Once you say yes, I add them to the cast and use them in the exercises and around the dashboard.</p></div>
</main>
<script>
/* Lip sync from the sound: loudness and how "hissy" the sound is choose one of five mouth shapes */
(function () {{
  var ctx = null, current = null;
  function stop() {{
    if (!current) return;
    current.audio.pause(); cancelAnimationFrame(current.raf);
    current.card.setAttribute('data-mouth', 'rest'); current.btn.classList.remove('is-playing'); current.btn.textContent = 'Talk';
    current = null;
  }}
  document.addEventListener('click', function (e) {{
    var btn = e.target.closest('.talk');
    if (!btn) return;
    var card = btn.closest('.dcard'), was = current && current.btn === btn;
    stop();
    if (was) return;
    ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
    var audio = new Audio(); audio.crossOrigin = 'anonymous'; audio.src = btn.getAttribute('data-voice');
    var src = ctx.createMediaElementSource(audio), an = ctx.createAnalyser();
    an.fftSize = 1024; src.connect(an); an.connect(ctx.destination);
    var buf = new Float32Array(an.fftSize), last = 0, shape = 'rest';
    current = {{ audio: audio, card: card, btn: btn, raf: 0 }};
    btn.classList.add('is-playing'); btn.textContent = 'Stop';
    audio.onended = stop;
    var tick = function (ts) {{
      if (!current || current.audio !== audio) return;
      an.getFloatTimeDomainData(buf);
      var sum = 0, zc = 0;
      for (var i = 0; i < buf.length; i++) {{ sum += buf[i] * buf[i]; if (i && (buf[i] > 0) !== (buf[i - 1] > 0)) zc++; }}
      var rms = Math.sqrt(sum / buf.length), z = zc / buf.length;
      if (ts - last > 70) {{
        last = ts;
        shape = rms < 0.012 ? 'm' : z > 0.14 ? 'e' : rms < 0.04 ? (shape === 'e' ? 'o' : 'e') : rms > 0.09 ? 'a' : (Math.random() < 0.5 ? 'o' : 'a');
        card.setAttribute('data-mouth', shape);
      }}
      current.raf = requestAnimationFrame(tick);
    }};
    ctx.resume().then(function () {{ return audio.play(); }}).then(function () {{ current.raf = requestAnimationFrame(tick); }}).catch(stop);
  }});
  document.querySelectorAll('.dcard.tutor').forEach(function (c) {{ c.setAttribute('data-mouth', 'rest'); }});
}})();
</script>
</body>
</html>
'''
open('../../../app/drawings.html', 'w').write(page)
print('app/drawings.html', len(page))
