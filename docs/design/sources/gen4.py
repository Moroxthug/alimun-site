import re, json
zoo=json.load(open('zoo/zoo.json'))
b3=open('board3.html').read()
head=b3.split('</style>')[0]
css=open('zoo.css').read()
def stage(svg,bub,kind,bg,role,desc):
    r=f'<div class="role"><b>{role}</b>{desc}</div>' if role else ''
    return f'<div><div class="stage" style="background:{bg}"><div class="bub {kind}">{bub}</div>{svg}</div>{r}</div>'
zoo_html='<div class="opt"><h2>The Alimun zoo</h2><p class="d">A cast of animals drawn for Alimun, each with a job. They pop up with a line of their own, always about what you are doing right now.</p><div class="grid5">'+\
 stage(zoo['owl'],'Psst: it is "since 2019", not "for 2019".','say','#fff4e0','The owl','Grammar tips and corrections')+\
 stage(zoo['parrot'],'Repeat after me!','say','#eaf6f2','The parrot','Speaking and pronunciation')+\
 stage(zoo['snail'],'Slow and steady still counts.','think','#fdeee9','The snail','Streaks and gentle nudges')+\
 stage(zoo['cat'],'Five more minutes...','think','#f0efe9','The cat','When you have been away')+\
 stage(zoo['dog'],'Again! Again!','say','#f4fbe0','The dog','Celebrations and new records')+'</div></div>'
def rec(n,accent,ink='#1a443c'):
    t=open(f'/tmp/claude-0/ill/od-{n}.svg').read().replace('#FF5678',accent).replace('#000000',ink)
    t=re.sub(r'<\?xml[^>]*>','',t); t=re.sub(r'width="\d+px" height="\d+px"','',t,count=1); return t
moments=[('zombieing','#9fd6c7','Brains... I mean, verbs.','think','Monday mornings'),('coffee','#ffd166','First coffee, then conjugations.','think','Before a live class'),('dog-jump','#ceff65','Streak saved!','say','Seven days in a row'),('selfie','#ff9f8a','Me, speaking German.','say','Sharing a milestone'),('dancing','#ceff65','Homework: done.','say','All tasks finished'),('roller-skating','#9fd6c7','Gliding through B1.','say','Level up')]
mom_html='<div class="opt"><h2>Funny moments</h2><p class="d">The doodles in full colour, with a thought or a remark, for big moments and empty screens.</p><div class="grid3">'+''.join(stage(rec(n,a),t,k,'#f0efe9',role,'') for n,a,t,k,role in moments)+'</div></div>'
pp=b3[b3.index('<h2>People, in colour</h2>'):b3.index('<h2>Your loader')]
tiles=re.findall(r'<div class="tile" style="background:([^"]+)">\s*(<svg.*?</svg>)',pp,re.S)
thoughts=['der, die or das?','Wait: "gone", not "went".','I actually understood that!','Is it Thursday already?']
ppl='<div class="opt"><h2>People, thinking out loud</h2><p class="d">The same colourful people, now with thought clouds. They are your classmates and teachers in the drawings.</p><div class="grid4">'+''.join(stage(svg,thoughts[i],'think',bg,'','') for i,(bg,svg) in enumerate(tiles[:4]))+'</div><div class="row six" style="margin-top:18px">'+''.join(f'<div class="tile" style="background:{bg}">{svg}</div>' for bg,svg in tiles[4:])+'</div></div>'
a=b3.index('<div class="opt"><h2>The book character</h2>'); b=b3.index('<div class="opt"><h2>Doodles')
book=b3[a:b]
loader=b3[b3.index('<div class="opt"><h2>Your loader'):b3.index('</body>')]
pal=b3[b3.index('<div class="pal">'):a]
html=head+css+'</style></head><body><h1>Drawings: the full cast</h1><p class="lead">Five styles that work together: the book character, a zoo of animals drawn for Alimun, the doodles, the colourful people, and hand-drawn bubbles with a thought or a joke. All animated in the real dashboard.</p>'+pal+book+zoo_html+mom_html+ppl+loader+'</body></html>'
open('board4.html','w').write(html)
print(len(tiles))
