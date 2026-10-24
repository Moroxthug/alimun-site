import json
c=json.load(open('zoo/cast2.json'))
b3=open('board3.html').read(); head=b3.split('</style>')[0]
css=open('zoo.css').read()+'''
.float{animation:fl 3s ease-in-out infinite}@keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
.wag2{animation:w2 1.6s ease-in-out infinite;transform-origin:50% 90%}@keyframes w2{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}
.spin{animation:sp 12s linear infinite;transform-origin:100px 100px}@keyframes sp{to{transform:rotate(360deg)}}
.grid6{display:grid;grid-template-columns:repeat(6,1fr);gap:16px}
.stage{min-height:320px}.stage .bub{font-size:14px;max-width:200px}
'''
def stage(svg,bub,kind,bg,role,desc): return f'<div><div class="stage" style="background:{bg}"><div class="bub {kind}">{bub}</div>{svg}</div><div class="role"><b>{role}</b>{desc}</div></div>'
langs=[('teacup','Fancy a cuppa and some phrasal verbs?','say','#eaf6f2','Tea, for English','Learning English'),
 ('pretzel','Der, die, das... no wonder I am twisted.','think','#fff4e0','Brezel, for German','Learning German'),
 ('croissant','Ooh là là, le subjonctif.','say','#fdeee9','Croissant, for French','Learning French'),
 ('churro','Ser or estar? I am estar-ving.','say','#fff4e0','Churro, for Spanish','Learning Spanish'),
 ('pizza','Mamma mia, il congiuntivo!','say','#f4fbe0','Pizza, for Italian','Learning Italian'),
 ('nata','Não sei... but I am delicious.','think','#eaf6f2','Pastel de nata, for Portuguese','Learning Portuguese')]
fant=[('dragon','Beat me in the mock test.','say','#f4fbe0','The test dragon','Mock tests, boss level'),
 ('monster','I eat articles for breakfast.','say','#efe9fb','The grammar monster','Common mistakes'),
 ('alien','Take me to your teacher.','say','#eaf6f2','The visitor','New words and first lessons'),
 ('ghost','Boo! You forgot the past tense.','say','#f0efe9','The ghost','Words you are forgetting')]
life=[('suitcase','Packed: passport, phrasebook, courage.','think','#fdeee9','The suitcase','Moving abroad'),
 ('mug','Refill, then one more exercise.','think','#f4fbe0','The mug','Work and career'),
 ('cactus','Irregular verbs are prickly.','say','#eaf6f2','The cactus','Irregular verbs'),
 ('sun','Morning practice hits different.','say','#fff4e0','The sun','Daily practice')]
def sec(title,desc,items,grid): return f'<div class="opt"><h2>{title}</h2><p class="d">{desc}</p><div class="{grid}">'+''.join(stage(c[k],b,kd,bg,r,d) for k,b,kd,bg,r,d in items)+'</div></div>'
html=head+css+'</style></head><body><h1>More of the cast</h1><p class="lead">Fourteen more characters in new themes: a food buddy for every language, fantasy friends for tests and mistakes, and everyday objects for goals and habits. They join the book, the zoo, the doodles and the people.</p>'+\
 sec('Language buddies','Each language gets its own buddy, with a joke from that language. Your buddy follows you around your course.',langs,'grid6')+\
 sec('Fantasy friends','For tests, mistakes and new words. The dragon is the final boss of every mock test.',fant,'grid4')+\
 sec('Everyday friends','For goals and habits: moving abroad, work, tricky verbs, morning practice.',life,'grid4')+'</body></html>'
open('board5.html','w').write(html)
