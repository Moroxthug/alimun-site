import json
d = json.load(open('help.json'))
info = {'buoy': ('The lifebuoy', 'Help and Support. "We\'ve got you."', '#e9f6f1'),
        'lantern': ('The lantern', 'Help. "I\'ll light the way."', '#fff6dc'),
        'bubble': ('The bubble', 'The question box. A speech bubble that answers back.', '#f3fbdf')}
moods = {'happy': 'Ready to help', 'think': 'Looking it up', 'glad': 'Glad that helped'}
cards = ''
for k, (t, sub, bg) in info.items():
    row = ''.join(f'<div class="m"><div class="pic" style="background:{bg}">{d[k][m]}</div><span>{moods[m]}</span></div>' for m in moods)
    cards += f'<section><h2>{t}</h2><p>{sub}</p><div class="row">{row}</div></section>'
html = f'''<!doctype html><meta charset="utf-8"><style>
@font-face{{font-family:Coolvetica;src:url(../../../fonts/coolvetica-condensed-rg.otf)}}
@font-face{{font-family:Satoshi;src:url(../../../fonts/Satoshi-Variable.ttf)}}
body{{margin:0;background:#f0efe9;font-family:Satoshi;color:#080808;padding:48px}}
h1,h2{{font-family:Coolvetica;font-weight:400;text-transform:uppercase;margin:0}} h1{{font-size:56px}} h2{{font-size:32px}}
.lead{{max-width:720px;color:#444;line-height:1.5}} section{{background:#fff;border-radius:28px;padding:28px;margin-top:28px}}
section p{{color:#555;margin:6px 0 18px}} .row{{display:flex;gap:18px}} .m{{flex:1}}
.pic{{border-radius:22px;aspect-ratio:1;display:flex;align-items:center;justify-content:center}} .pic svg{{width:72%}}
.m span{{display:block;margin-top:8px;font-size:14px;color:#555}}</style>
<h1>A drawing for Help</h1><p class="lead">Three ideas in the sticker style and palette you approved. Each has three moods for the help box: ready, looking something up, and glad it helped. The same one would sit in Help and Support in both dashboards. Pick one, or tell me what to change.</p>{cards}'''
open('help-board.html', 'w').write(html)
