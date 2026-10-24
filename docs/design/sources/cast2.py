import json
F,G,L,INK,C,M,S,B,W='#1a443c','#d5af33','#ceff65','#080808','#ff9f8a','#9fd6c7','#ffd166','#f0efe9','#ffffff'
st=f'stroke="{F}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"'
def face(cx,cy,s=1,mood='happy',blush=True):
    ex=14*s; out=''
    for d in (-1,1):
        x=cx+d*ex
        if mood=='happy': out+=f'<circle cx="{x}" cy="{cy}" r="{5*s}" fill="{INK}"/><circle cx="{x+1.8*s}" cy="{cy-1.8*s}" r="{1.6*s}" fill="{W}"/>'
        elif mood=='closed': out+=f'<path d="M{x-5*s},{cy} q{5*s},{-6*s} {10*s},0" fill="none" stroke="{INK}" stroke-width="{3*s}" stroke-linecap="round"/>'
        elif mood=='wide': out+=f'<circle cx="{x}" cy="{cy}" r="{7*s}" fill="{W}" {st}/><circle cx="{x}" cy="{cy}" r="{3.5*s}" fill="{INK}"/>'
        elif mood=='wink' and d==1: out+=f'<path d="M{x-5*s},{cy} q{5*s},{-6*s} {10*s},0" fill="none" stroke="{INK}" stroke-width="{3*s}" stroke-linecap="round"/>'
        elif mood=='wink': out+=f'<circle cx="{x}" cy="{cy}" r="{5*s}" fill="{INK}"/>'
    if blush: out+=''.join(f'<ellipse cx="{cx+d*(ex+6*s)}" cy="{cy+9*s}" rx="{5*s}" ry="{3*s}" fill="#ff7b6b" opacity=".45"/>' for d in (-1,1))
    out+=f'<path d="M{cx-7*s},{cy+9*s} q{7*s},{8*s} {14*s},0" fill="none" stroke="{INK}" stroke-width="{3*s}" stroke-linecap="round"/>'
    return out
def svg(inner,cls='bob'): return f'<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g class="{cls}">{inner}</g></svg>'
c={}
# Language buddies
c['teacup']=svg(f'''<path d="M70 150 q30 16 60 0" fill="none" {st}/><ellipse cx="100" cy="176" rx="62" ry="12" fill="{M}" {st}/>
<path d="M46 92 h108 q0 70 -54 70 q-54 0 -54 -70 Z" fill="{W}" {st}/><path d="M154 104 q30 0 26 26 q-4 20 -30 16" fill="none" {st}/>
<path d="M50 112 h100" stroke="{C}" stroke-width="6"/><path d="M84 92 q-6 -20 6 -34 q10 -12 0 -26" fill="none" stroke="{F}" stroke-width="3" stroke-linecap="round" opacity=".5"/>
<path d="M112 90 q-6 -16 4 -28" fill="none" stroke="{F}" stroke-width="3" stroke-linecap="round" opacity=".5"/>{face(100,128)}''')
c['pretzel']=svg(f'''<path d="M100 96 C60 40 20 80 40 120 C56 152 100 150 100 150 C100 150 144 152 160 120 C180 80 140 40 100 96 Z" fill="none" stroke="#b8732e" stroke-width="22" stroke-linejoin="round"/>
<path d="M100 96 C60 40 20 80 40 120 C56 152 100 150 100 150 C100 150 144 152 160 120 C180 80 140 40 100 96 Z" fill="none" {st} transform="translate(0,0)" opacity=".0"/>
<path d="M70 150 L120 92 M130 150 L80 92" stroke="#b8732e" stroke-width="20" stroke-linecap="round"/>
<g fill="{W}"><circle cx="52" cy="96" r="3"/><circle cx="148" cy="94" r="3"/><circle cx="100" cy="128" r="3"/><circle cx="64" cy="132" r="3"/><circle cx="138" cy="132" r="3"/></g>
<circle cx="100" cy="118" r="0"/>{face(100,64,0.9)}<path d="M76 40 l8 -10 M100 34 v-12 M124 40 l-8 -10" stroke="{F}" stroke-width="3" stroke-linecap="round"/>''','sway')
c['croissant']=svg(f'''<path d="M30 140 Q40 70 100 64 Q160 70 170 140 Q150 124 132 132 Q120 104 100 104 Q80 104 68 132 Q50 124 30 140 Z" fill="{S}" {st}/>
<path d="M68 132 Q80 104 100 104 Q120 104 132 132" fill="none" {st}/><path d="M60 92 Q74 112 70 128 M140 92 Q126 112 130 128 M100 66 V104" fill="none" stroke="#c98f2a" stroke-width="4" stroke-linecap="round"/>
{face(100,122,0.8)}<path d="M76 66 q24 -20 48 0" fill="{INK}"/><ellipse cx="100" cy="60" rx="30" ry="7" fill="{INK}"/>''')
c['pizza']=svg(f'''<path d="M40 52 Q100 28 160 52 L100 186 Z" fill="{S}" {st}/><path d="M40 52 Q100 28 160 52 Q100 40 40 52" fill="#e8a33a" {st}/>
<circle cx="80" cy="76" r="10" fill="{C}" {st}/><circle cx="124" cy="80" r="9" fill="{C}" {st}/><circle cx="106" cy="146" r="7" fill="{C}" {st}/>
<path d="M94 70 l8 -6 M134 110 l6 6" stroke="{F}" stroke-width="5" stroke-linecap="round"/>{face(100,108,0.85,'wink')}''','sway')
c['churro']=svg(f'''<g transform="rotate(-24 100 100)"><rect x="78" y="22" width="44" height="160" rx="22" fill="#d98b3a" {st}/>
<path d="M88 30 V172 M100 26 V178 M112 30 V172" stroke="#b86a22" stroke-width="3" stroke-linecap="round"/>
<g fill="{W}"><circle cx="92" cy="50" r="2.5"/><circle cx="108" cy="70" r="2.5"/><circle cx="94" cy="150" r="2.5"/><circle cx="110" cy="160" r="2.5"/></g>
{face(100,96,0.85)}</g><path d="M146 168 q20 -4 22 -24 q-14 6 -22 24" fill="#6b3e26" {st}/>''')
c['nata']=svg(f'''<path d="M36 112 L50 170 Q100 186 150 170 L164 112 Z" fill="#f2c36b" {st}/><path d="M44 120 L56 168 M76 126 L80 176 M124 126 L120 176 M156 120 L144 168" stroke="#d99a3a" stroke-width="3"/>
<ellipse cx="100" cy="110" rx="66" ry="24" fill="{S}" {st}/><path d="M66 104 q10 -8 20 0 M112 100 q12 -6 22 2 M90 116 q10 -6 20 0" fill="none" stroke="#a8641c" stroke-width="5" stroke-linecap="round"/>
{face(100,146,0.85)}''','bob')
# Fantasy
c['dragon']=svg(f'''<path d="M150 150 q40 -10 34 -50 q-18 18 -30 20" fill="{L}" {st}/><path d="M60 70 L40 40 L76 58 Z M130 70 L150 40 L118 58 Z" fill="{G}" {st}/>
<ellipse cx="100" cy="140" rx="54" ry="44" fill="{L}" {st}/><ellipse cx="100" cy="152" rx="30" ry="26" fill="#f4fbe0" {st}/>
<circle cx="100" cy="88" r="44" fill="{L}" {st}/><path d="M56 100 q-26 -4 -36 18 q20 -4 40 4" fill="{M}" {st}/><path d="M144 100 q26 -4 36 18 q-20 -4 -40 4" fill="{M}" {st}/>
{face(100,86,1.1,'wide')}<path d="M90 108 l4 6 l4 -6 M104 108 l4 6 l4 -6" fill="{W}" stroke="{F}" stroke-width="2"/>
<path d="M86 172 v14 M114 172 v14" stroke="{F}" stroke-width="10" stroke-linecap="round"/>''','sway')
c['alien']=svg(f'''<path d="M100 44 V20 M70 52 L56 30 M130 52 L144 30" stroke="{F}" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="18" r="7" fill="{C}" {st}/><circle cx="56" cy="28" r="6" fill="{S}" {st}/><circle cx="144" cy="28" r="6" fill="{S}" {st}/>
<path d="M50 104 Q50 46 100 46 Q150 46 150 104 Q150 150 100 150 Q50 150 50 104 Z" fill="{M}" {st}/>
<ellipse cx="100" cy="186" rx="40" ry="8" fill="{F}" opacity=".15"/><path d="M76 150 l-6 26 M124 150 l6 26" stroke="{F}" stroke-width="8" stroke-linecap="round"/>
<circle cx="100" cy="94" r="18" fill="{W}" {st}/><circle cx="100" cy="94" r="8" fill="{INK}"/><circle cx="103" cy="91" r="3" fill="{W}"/>
<path d="M88 124 q12 10 24 0" fill="none" stroke="{INK}" stroke-width="3" stroke-linecap="round"/>''','bob')
c['ghost']=svg(f'''<path d="M46 170 V96 Q46 40 100 40 Q154 40 154 96 V170 L136 156 L118 172 L100 156 L82 172 L64 156 Z" fill="{W}" {st}/>
{face(100,98,1.1,'wink')}<path d="M40 110 q-16 6 -12 22 M160 110 q16 6 12 22" fill="none" {st}/><ellipse cx="100" cy="190" rx="40" ry="6" fill="{F}" opacity=".12"/>''','float')
# Travel / work / nature / exam
c['suitcase']=svg(f'''<path d="M80 52 V38 h40 v14" fill="none" {st}/><rect x="40" y="52" width="120" height="110" rx="16" fill="{C}" {st}/>
<path d="M40 82 h120" {st}/><rect x="56" y="98" width="28" height="18" rx="4" fill="{S}" {st} transform="rotate(-10 70 107)"/><circle cx="132" cy="134" r="12" fill="{M}" {st}/>
<circle cx="60" cy="170" r="7" fill="{F}"/><circle cx="140" cy="170" r="7" fill="{F}"/>{face(100,118,0.95)}''','wag2')
c['cactus']=svg(f'''<path d="M60 160 h80 l-8 30 h-64 Z" fill="{C}" {st}/><rect x="80" y="54" width="40" height="110" rx="20" fill="#7cc48a" {st}/>
<path d="M80 110 h-18 q-10 0 -10 -10 v-24 q0 -10 10 -10 q8 0 8 10 v18 h10" fill="#7cc48a" {st}/><path d="M120 96 h16 q10 0 10 -10 v-18 q0 -10 -8 -10 q-8 0 -8 10 v12 h-10" fill="#7cc48a" {st}/>
<g stroke="{F}" stroke-width="2"><path d="M86 70 l-6 -4 M114 80 l6 -4 M84 140 l-6 2 M116 130 l6 2"/></g><circle cx="100" cy="50" r="9" fill="{C}" {st}/>
{face(100,98,0.8)}''','sway')
c['mug']=svg(f'''<path d="M52 70 h86 v80 q0 26 -26 26 h-34 q-26 0 -26 -26 Z" fill="{L}" {st}/><path d="M138 90 q28 0 26 24 q-2 22 -26 20" fill="none" {st}/>
<ellipse cx="95" cy="70" rx="43" ry="8" fill="#6b3e26" {st}/><path d="M80 52 q-6 -12 4 -22 M104 50 q-6 -14 4 -24" fill="none" stroke="{F}" stroke-width="3" stroke-linecap="round" opacity=".5"/>
{face(95,118,0.95,'closed')}''','bob')
c['sun']=svg(f'''<g class="spin">{''.join(f'<path d="M100 22 L106 44 L94 44 Z" fill="{G}" transform="rotate({a} 100 100)"/>' for a in range(0,360,30))}</g>
<circle cx="100" cy="100" r="48" fill="{S}" {st}/><path d="M74 88 h20 v8 h-20 Z M106 88 h20 v8 h-20 Z M94 92 h12" fill="{INK}" stroke="{INK}" stroke-width="3"/>
<path d="M86 116 q14 12 28 0" fill="none" stroke="{INK}" stroke-width="4" stroke-linecap="round"/>''','')
c['monster']=svg(f'''<path d="M50 180 V100 Q50 44 100 44 Q150 44 150 100 V180 Z" fill="#b39ddb" {st}/>
<path d="M66 54 L58 30 L80 46 Z M134 54 L142 30 L120 46 Z" fill="{G}" {st}/>
<circle cx="80" cy="94" r="14" fill="{W}" {st}/><circle cx="120" cy="94" r="14" fill="{W}" {st}/><circle cx="83" cy="96" r="6" fill="{INK}"/><circle cx="117" cy="96" r="6" fill="{INK}"/>
<path d="M66 126 Q100 156 134 126 Z" fill="{INK}"/><path d="M80 128 l5 9 l5 -9 M110 128 l5 9 l5 -9" fill="{W}"/>
<path d="M58 180 h84" {st}/><path d="M40 120 q-14 -10 -8 -26 M160 120 q14 -10 8 -26" fill="none" {st}/>''','sway')
json.dump(c,open('cast2.json','w'))
print(len(c))
