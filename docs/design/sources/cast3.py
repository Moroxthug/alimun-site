# Third cast (step 5, 25 Oct 2026): new styles and a wider range, for the owner's board before any use.
#   sticker  : the approved style (forest outline, flat fills) for objects in picture exercises
#   wash     : "ink and wash" scenes: a fine line drawing over offset patches of colour, for describe/label-the-picture
#   paper    : "paper cut" spot drawings: flat layered shapes with no outline, for the dashboard sections
#   tutors   : people in the sticker style with five mouth shapes each, for the animated tutor's lip sync
# Writes cast3.json { group: { name: svg } }. Palette from CLAUDE.md (drawings): forest, gold, lime, coral, mint,
# sunflower, bone, white, ink, soft tints and natural skin and hair tones.
import json

F, G, L, INK, C, M, S, B, W = '#1a443c', '#d5af33', '#ceff65', '#080808', '#ff9f8a', '#9fd6c7', '#ffd166', '#f0efe9', '#ffffff'
LEAF, BROWN, CRUST, DARK = '#7cc48a', '#6b3e26', '#e8a33a', '#a8641c'
st = f'stroke="{F}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"'
def svg(inner, cls='', vb='0 0 200 200'):
    return f'<svg viewBox="{vb}" xmlns="http://www.w3.org/2000/svg"><g class="{cls}">{inner}</g></svg>'
out = {'sticker': {}, 'wash': {}, 'paper': {}, 'tutors': {}}

# ---------- Sticker objects (picture exercises) ----------
o = out['sticker']
o['apple'] = svg(f'''<path d="M100 64 C70 44 36 64 40 108 C44 150 72 178 100 166 C128 178 156 150 160 108 C164 64 130 44 100 64 Z" fill="{C}" {st}/>
<path d="M100 64 q-2 -14 -8 -24" fill="none" {st}/><path d="M104 60 q6 -26 30 -28 q-4 24 -30 28 Z" fill="{LEAF}" {st}/>
<ellipse cx="68" cy="96" rx="9" ry="15" fill="{W}" opacity=".55" transform="rotate(20 68 96)"/>''', 'bob')
o['bread'] = svg(f'''<path d="M34 122 Q34 70 100 70 Q166 70 166 122 V150 Q166 164 152 164 H48 Q34 164 34 150 Z" fill="{CRUST}" {st}/>
<path d="M34 122 Q100 132 166 122" fill="none" {st}/><path d="M66 100 l14 -16 M94 100 l14 -16 M122 100 l14 -16" fill="none" stroke="{DARK}" stroke-width="5" stroke-linecap="round"/>''', 'bob')
o['cheese'] = svg(f'''<path d="M28 132 L150 64 L174 112 Z" fill="#ffe39a" {st}/><path d="M28 132 L174 112 V160 H28 Z" fill="{S}" {st}/>
<circle cx="62" cy="146" r="7" fill="#e8b84a"/><circle cx="104" cy="136" r="9" fill="#e8b84a"/><circle cx="146" cy="148" r="6" fill="#e8b84a"/><circle cx="118" cy="98" r="5" fill="#e8b84a"/>''', 'sway')
o['train'] = svg(f'''<path d="M30 180 H170" {st}/><path d="M62 154 L50 178 M138 154 L150 178" {st}/>
<rect x="40" y="46" width="120" height="110" rx="26" fill="{M}" {st}/><rect x="58" y="62" width="84" height="40" rx="10" fill="{W}" {st}/>
<rect x="40" y="114" width="120" height="10" fill="{C}" stroke="{F}" stroke-width="4"/><circle cx="68" cy="140" r="8" fill="{S}" {st}/><circle cx="132" cy="140" r="8" fill="{S}" {st}/>
<path d="M90 30 h20 v16 h-20 Z" fill="{G}" {st}/>''', 'bob')
o['bus'] = svg(f'''<rect x="22" y="54" width="156" height="98" rx="18" fill="{S}" {st}/><path d="M22 112 H178" {st}/>
<rect x="36" y="68" width="30" height="30" rx="5" fill="{W}" {st}/><rect x="74" y="68" width="30" height="30" rx="5" fill="{W}" {st}/><rect x="112" y="68" width="30" height="30" rx="5" fill="{W}" {st}/>
<rect x="150" y="68" width="18" height="70" rx="4" fill="{M}" {st}/><circle cx="58" cy="154" r="15" fill="{F}"/><circle cx="58" cy="154" r="5" fill="{W}"/><circle cx="138" cy="154" r="15" fill="{F}"/><circle cx="138" cy="154" r="5" fill="{W}"/>
<rect x="28" y="122" width="14" height="8" rx="3" fill="{W}" {st}/>''', 'bob')
o['bicycle'] = svg(f'''<circle cx="56" cy="132" r="34" fill="none" stroke="{F}" stroke-width="6"/><circle cx="144" cy="132" r="34" fill="none" stroke="{F}" stroke-width="6"/>
<path d="M56 132 L86 90 L128 90 L144 132 M86 90 L104 132 L56 132 M104 132 L128 90" fill="none" stroke="{C}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M76 80 h22 M122 72 l8 18 M114 72 h16" fill="none" stroke="{F}" stroke-width="7" stroke-linecap="round"/><circle cx="104" cy="132" r="7" fill="{S}" {st}/>''', 'sway')
o['house'] = svg(f'''<rect x="122" y="50" width="16" height="34" fill="{C}" {st}/><path d="M50 98 V170 H150 V98" fill="{W}" {st}/>
<path d="M34 104 L100 44 L166 104 Z" fill="{C}" {st}/><rect x="86" y="124" width="28" height="46" rx="4" fill="{G}" {st}/><circle cx="108" cy="148" r="3" fill="{F}"/>
<rect x="58" y="114" width="20" height="20" rx="3" fill="{M}" {st}/><rect x="122" y="114" width="20" height="20" rx="3" fill="{M}" {st}/><path d="M40 170 H160" {st}/>''', 'breathe')
o['key'] = svg(f'''<circle cx="64" cy="100" r="28" fill="{G}" {st}/><circle cx="64" cy="100" r="10" fill="{B}" {st}/>
<path d="M90 92 H168 V108 H158 V124 H146 V108 H134 V118 H122 V108 H90 Z" fill="{G}" {st}/>''', 'sway')
o['phone'] = svg(f'''<rect x="64" y="28" width="72" height="146" rx="16" fill="{F}" {st}/><rect x="72" y="44" width="56" height="110" rx="6" fill="{M}"/>
<rect x="80" y="56" width="32" height="14" rx="7" fill="{W}"/><rect x="88" y="78" width="32" height="14" rx="7" fill="{L}"/><rect x="80" y="100" width="26" height="14" rx="7" fill="{W}"/>
<path d="M92 36 h16" stroke="{M}" stroke-width="3" stroke-linecap="round"/><circle cx="100" cy="164" r="4" fill="{M}"/>''', 'bob')
o['umbrella'] = svg(f'''<path d="M100 104 V160 q0 14 -14 14 q-12 0 -12 -12" fill="none" stroke="{F}" stroke-width="6" stroke-linecap="round"/>
<path d="M28 104 Q100 18 172 104 Q160 92 148 104 Q136 92 124 104 Q112 92 100 104 Q88 92 76 104 Q64 92 52 104 Q40 92 28 104 Z" fill="{C}" {st}/>
<path d="M100 34 V22 M76 102 Q84 50 100 30 Q116 50 124 102" fill="none" {st}/>''', 'sway')
o['clock'] = svg(f'''<circle cx="56" cy="50" r="15" fill="{S}" {st}/><circle cx="144" cy="50" r="15" fill="{S}" {st}/><path d="M66 166 l-10 14 M134 166 l10 14" {st}/>
<circle cx="100" cy="106" r="62" fill="{W}" {st}/><g stroke="{F}" stroke-width="4" stroke-linecap="round"><path d="M100 52 v8 M100 152 v8 M46 106 h8 M146 106 h8"/></g>
<path d="M100 106 V70 M100 106 L128 120" fill="none" stroke="{C}" stroke-width="6" stroke-linecap="round"/><circle cx="100" cy="106" r="6" fill="{F}"/>''', 'sway')
o['ticket'] = svg(f'''<path d="M26 68 H174 V90 a12 12 0 0 0 0 24 V136 H26 V114 a12 12 0 0 0 0 -24 Z" fill="{S}" {st}/>
<path d="M132 74 V130" stroke="{F}" stroke-width="3" stroke-dasharray="6 6"/><rect x="44" y="84" width="66" height="8" rx="4" fill="{F}" opacity=".35"/>
<rect x="44" y="100" width="48" height="8" rx="4" fill="{F}" opacity=".35"/><rect x="44" y="116" width="58" height="8" rx="4" fill="{F}" opacity=".2"/><circle cx="152" cy="102" r="10" fill="{C}" {st}/>''', 'bob')

# ---------- Ink and wash scenes ----------
def wash(d, fill, dx=6, dy=5):
    return f'<path d="{d}" fill="{fill}" transform="translate({dx} {dy})" opacity=".9"/><path d="{d}" fill="none" stroke="{F}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>'
def line(d, w=2.6):
    return f'<path d="{d}" fill="none" stroke="{F}" stroke-width="{w}" stroke-linecap="round" stroke-linejoin="round"/>'
SC = '0 0 320 200'
w = out['wash']
w['cafe'] = svg(
    wash('M40 28 H150 V108 H40 Z', '#eaf6f2') + line('M95 28 V108 M40 68 H150') +
    line('M250 0 V30') + wash('M226 30 H274 L262 50 H238 Z', S) +
    wash('M196 112 Q200 92 214 96 Q206 80 222 76 Q236 74 234 92 Q248 90 246 108 Z', LEAF) + wash('M204 112 H244 L238 146 H210 Z', C) +
    wash('M40 150 Q160 132 280 150 Q160 166 40 150 Z', S) + line('M80 156 L72 196 M240 156 L248 196 M160 160 V196') +
    wash('M110 124 H140 V142 Q140 150 132 150 H118 Q110 150 110 142 Z', W) + line('M140 128 q10 0 9 8 q-1 7 -9 6') + line('M118 116 q-4 -8 2 -14 M128 116 q-4 -8 2 -14', 2) +
    wash('M162 144 a26 5 0 1 0 52 0 a26 5 0 1 0 -52 0', W) + wash('M170 140 Q188 118 206 140 Q197 134 188 138 Q179 134 170 140 Z', CRUST)
    , '', SC)
w['station'] = svg(
    wash('M0 150 H320 V170 H0 Z', B) + line('M0 150 H320 M0 186 H320') +
    wash('M20 60 H200 Q216 60 216 76 V142 H20 Z', M) + line('M40 74 H76 V104 H40 Z M90 74 H126 V104 H90 Z M140 74 H176 V104 H140 Z') + line('M20 118 H216') +
    line('M48 142 v8 M188 142 v8') + line('M260 0 V22') + wash('M260 52 m-24 0 a24 24 0 1 0 48 0 a24 24 0 1 0 -48 0', W) + line('M260 52 V38 M260 52 L270 58') +
    wash('M236 110 H300 V122 H236 Z', CRUST) + line('M244 122 V146 M292 122 V146') +
    wash('M276 130 H304 V150 H276 Z', C) + line('M284 130 V124 H296 V130')
    , '', SC)
w['kitchen'] = svg(
    wash('M110 20 H210 V80 H110 Z', '#eaf6f2') + line('M160 20 V80 M110 50 H210') +
    wash('M20 110 H300 V190 H20 Z', W) + line('M20 126 H300 M110 126 V190 M210 126 V190') + line('M60 150 h20 M150 150 h20 M250 150 h20', 3) +
    wash('M230 30 H290 V108 H230 Z', S) + line('M230 60 H290 M240 40 V54 M240 70 V90') +
    wash('M46 92 H96 V110 H46 Z', C) + line('M40 92 H102 M58 84 q-4 -10 2 -18 M72 84 q-4 -10 2 -18 M86 84 q-4 -10 2 -18', 2.4) +
    wash('M140 110 Q140 92 156 92 Q172 92 172 110 Z', M) + line('M172 100 q12 -2 14 -12 M150 92 V86 h12 V92')
    , '', SC)
w['park'] = svg(
    wash('M262 42 m-22 0 a22 22 0 1 0 44 0 a22 22 0 1 0 -44 0', S) +
    wash('M0 150 Q160 126 320 150 V200 H0 Z', '#f4fbe0') +
    wash('M60 120 Q20 116 26 80 Q20 44 58 38 Q72 10 104 26 Q140 20 138 58 Q156 90 124 112 Q100 128 60 120 Z', LEAF) + wash('M76 118 H94 V160 H76 Z', CRUST) +
    wash('M170 140 H270 V150 H170 Z', CRUST) + wash('M170 118 H270 V128 H170 Z', CRUST) + line('M180 150 V172 M260 150 V172 M182 128 V140 M258 128 V140') +
    wash('M200 176 Q240 166 290 180 Q240 192 200 176 Z', '#eaf6f2') +
    line('M196 70 q8 -8 16 0 q8 -8 16 0 M150 52 q6 -6 12 0 q6 -6 12 0', 2.4)
    , '', SC)

# ---------- Paper-cut spot drawings ----------
def paper(d, fill, shade, dx=3, dy=4):
    return f'<path d="{d}" fill="{shade}" transform="translate({dx} {dy})"/><path d="{d}" fill="{fill}"/>'
PV = '0 0 120 120'
p = out['paper']
p['headphones'] = svg(f'<path d="M24 70 V60 a36 36 0 0 1 72 0 V70" fill="none" stroke="#0f2c27" stroke-width="12" stroke-linecap="round" transform="translate(3 4)"/><path d="M24 70 V60 a36 36 0 0 1 72 0 V70" fill="none" stroke="{F}" stroke-width="12" stroke-linecap="round"/>' +
    paper('M14 66 h22 v34 h-22 a8 8 0 0 1 -8 -8 v-18 a8 8 0 0 1 8 -8 Z', C, '#d97c69') + paper('M84 66 h22 a8 8 0 0 1 8 8 v18 a8 8 0 0 1 -8 8 h-22 Z', C, '#d97c69'), 'bob', PV)
p['microphone'] = svg(paper('M44 14 h32 a16 16 0 0 1 16 16 v28 a16 16 0 0 1 -16 16 h-32 a16 16 0 0 1 -16 -16 v-28 a16 16 0 0 1 16 -16 Z', L, '#9fcc3a') +
    f'<path d="M36 34 h48 M36 46 h48 M36 58 h48" stroke="{F}" stroke-width="3" opacity=".35"/>' + paper('M56 82 h8 v18 h-8 Z', F, '#0f2c27') + paper('M36 100 h48 a6 6 0 0 1 0 12 h-48 a6 6 0 0 1 0 -12 Z', F, '#0f2c27'), 'sway', PV)
p['pencil'] = svg(f'<g transform="rotate(-38 60 60)">' + paper('M20 50 h70 v20 h-70 Z', S, '#e0b043') + paper('M8 50 h14 v20 h-14 a4 4 0 0 1 -4 -4 v-12 a4 4 0 0 1 4 -4 Z', C, '#d97c69') +
    paper('M90 50 L112 60 L90 70 Z', B, '#cfcdc4') + f'<path d="M104 56.5 L112 60 L104 63.5 Z" fill="{F}"/><path d="M20 60 h70" stroke="#e0b043" stroke-width="2"/></g>', 'sway', PV)
p['calendar'] = svg(paper('M14 22 h92 a6 6 0 0 1 6 6 v76 a6 6 0 0 1 -6 6 h-92 a6 6 0 0 1 -6 -6 v-76 a6 6 0 0 1 6 -6 Z', W, '#d9d8d0') + paper('M14 22 h92 a6 6 0 0 1 6 6 v14 h-104 v-14 a6 6 0 0 1 6 -6 Z', F, '#0f2c27') +
    f'<rect x="32" y="12" width="8" height="18" rx="4" fill="{G}"/><rect x="80" y="12" width="8" height="18" rx="4" fill="{G}"/>' +
    ''.join(f'<circle cx="{26 + 17 * (i % 5)}" cy="{60 + 17 * (i // 5)}" r="5" fill="{M}"/>' for i in range(15)) + f'<circle cx="77" cy="77" r="9" fill="{L}"/>', 'bob', PV)
p['envelope'] = svg(paper('M10 32 h100 v62 a6 6 0 0 1 -6 6 h-88 a6 6 0 0 1 -6 -6 Z', M, '#78b8a6') + f'<path d="M10 32 L60 72 L110 32 Z" fill="#b8e3d6"/>' + paper('M60 66 m-10 0 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0', C, '#d97c69'), 'float', PV)
p['chart'] = svg(paper('M14 74 h18 v32 h-18 Z', M, '#78b8a6') + paper('M42 58 h18 v48 h-18 Z', L, '#9fcc3a') + paper('M70 40 h18 v66 h-18 Z', C, '#d97c69') +
    f'<path d="M16 50 L44 34 L64 42 L98 16" fill="none" stroke="{F}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M86 14 L100 14 L100 28" fill="none" stroke="{F}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>', 'breathe', PV)
p['books'] = svg(paper('M18 84 h84 v18 h-84 Z', C, '#d97c69') + paper('M26 64 h72 v20 h-72 Z', M, '#78b8a6') + paper('M14 46 h78 v18 h-78 Z', S, '#e0b043') + paper('M36 26 h52 v20 h-52 Z', L, '#9fcc3a') +
    f'<path d="M30 84 v18 M84 64 v20 M24 46 v18 M76 26 v20" stroke="{F}" stroke-width="3" opacity=".3"/>', 'bob', PV)
p['plant'] = svg(paper('M60 70 Q30 64 26 34 Q50 36 60 70 Z', LEAF, '#5ea36c') + paper('M60 70 Q90 62 96 30 Q70 34 60 70 Z', F, '#0f2c27') + paper('M60 70 Q56 40 62 16 Q74 42 60 70 Z', L, '#9fcc3a') +
    paper('M34 72 h52 l-6 38 h-40 Z', C, '#d97c69'), 'sway', PV)

# ---------- Tutors: people with five mouth shapes for lip sync (rest, a, e, o, m) ----------
def mouths(lip='#b5544a'):
    dark = '#5a1f1f'
    return (f'<g class="mo mo-rest"><path d="M90 122 q10 7 20 0" fill="none" stroke="{lip}" stroke-width="3.5" stroke-linecap="round"/></g>'
            f'<g class="mo mo-a"><ellipse cx="100" cy="124" rx="10" ry="9" fill="{dark}"/><ellipse cx="100" cy="129" rx="6" ry="3" fill="#e57373"/></g>'
            f'<g class="mo mo-e"><rect x="88" y="119" width="24" height="9" rx="4.5" fill="{dark}"/><rect x="91" y="119" width="18" height="3.5" rx="1.5" fill="{W}"/></g>'
            f'<g class="mo mo-o"><ellipse cx="100" cy="124" rx="6.5" ry="8" fill="{dark}"/></g>'
            f'<g class="mo mo-m"><path d="M91 123 h18" stroke="{lip}" stroke-width="4" stroke-linecap="round"/></g>')
def eyes(y=96, glasses=False):
    e = (f'<g class="blink"><circle cx="84" cy="{y}" r="5" fill="{INK}"/><circle cx="116" cy="{y}" r="5" fill="{INK}"/>'
         f'<circle cx="86" cy="{y - 2}" r="1.6" fill="{W}"/><circle cx="118" cy="{y - 2}" r="1.6" fill="{W}"/></g>')
    if glasses:
        e += f'<circle cx="84" cy="{y}" r="12" fill="none" stroke="{F}" stroke-width="3.5"/><circle cx="116" cy="{y}" r="12" fill="none" stroke="{F}" stroke-width="3.5"/><path d="M96 {y} h8" stroke="{F}" stroke-width="3.5"/>'
    return e
def tutor(skin, back_hair, front_hair, clothes, extra='', glasses=False, brows='#3B2416', blush=True, ears=True):
    ear = '' if not ears else f'<ellipse cx="58" cy="100" rx="8" ry="11" fill="{skin}" {st}/><ellipse cx="142" cy="100" rx="8" ry="11" fill="{skin}" {st}/>'
    body = (f'<path d="M36 200 Q38 152 100 146 Q162 152 164 200 Z" fill="{clothes}" {st}/>'
            f'<path d="M88 136 h24 v16 q-12 8 -24 0 Z" fill="{skin}" {st}/>')
    head = f'<ellipse cx="100" cy="98" rx="42" ry="48" fill="{skin}" {st}/>'
    face = (eyes(96, glasses) + f'<path d="M76 82 q8 -5 16 0 M108 82 q8 -5 16 0" fill="none" stroke="{brows}" stroke-width="3.5" stroke-linecap="round"/>'
            + f'<path d="M100 100 q-4 10 2 12" fill="none" stroke="{F}" stroke-width="3" stroke-linecap="round" opacity=".55"/>'
            + (f'<ellipse cx="76" cy="114" rx="7" ry="4" fill="#ff7b6b" opacity=".3"/><ellipse cx="124" cy="114" rx="7" ry="4" fill="#ff7b6b" opacity=".3"/>' if blush else '')
            + mouths())
    return svg(back_hair + body + ear + head + front_hair + extra + face, 'breathe')
t = out['tutors']
t['lena'] = tutor('#f6d3b8', f'<path d="M48 108 Q44 46 100 44 Q156 46 152 108 Q154 136 140 146 Q126 140 128 120 H72 Q74 140 60 146 Q46 136 48 108 Z" fill="#6E2E14" {st}/>',
                  f'<path d="M58 88 Q60 52 100 52 Q140 52 142 88 Q128 66 104 64 Q98 76 78 74 Q64 76 58 88 Z" fill="#6E2E14" {st}/>', M, ears=False)
t['kofi'] = tutor('#7a4a2e', '', f'<path d="M58 80 Q58 44 100 44 Q142 44 142 80 Q140 66 126 62 Q100 54 74 62 Q60 66 58 80 Z" fill="#1d1d1f" {st}/>', F, brows='#1d1d1f')
t['mei'] = tutor('#f1c7a1', f'<circle cx="100" cy="40" r="20" fill="#1d1d1f" {st}/>',
                 f'<path d="M58 92 Q56 50 100 50 Q144 50 142 92 Q132 66 110 64 Q100 76 82 70 Q66 74 58 92 Z" fill="#1d1d1f" {st}/>', C, brows='#1d1d1f')
t['omar'] = tutor('#b97a51', '',
                  f'<path d="M58 84 Q52 50 76 46 Q84 34 100 40 Q116 32 126 46 Q150 50 142 84 Q134 66 100 64 Q66 66 58 84 Z" fill="#1d1d1f" {st}/>', S,
                  extra=f'<path d="M62 112 Q66 146 100 148 Q134 146 138 112 Q130 134 112 132 Q100 138 88 132 Q70 134 62 112 Z" fill="#1d1d1f" opacity=".9"/>', brows='#1d1d1f')
t['sofia'] = tutor('#d9a27a', f'<path d="M48 110 Q40 42 100 42 Q160 42 152 110 Q158 150 140 168 H60 Q42 150 48 110 Z" fill="#3B2416" {st}/>',
                   f'<path d="M58 92 Q56 52 100 50 Q140 50 144 90 Q134 66 112 62 Q92 72 66 78 Q60 84 58 92 Z" fill="#3B2416" {st}/>', G, ears=False)
t['arthur'] = tutor('#f6d3b8', f'<path d="M56 96 Q56 60 100 58 Q144 60 144 96 Q136 80 100 78 Q64 80 56 96 Z" fill="#c9c9c9" {st}/>', '', F, glasses=True, brows='#9a9a9a',
                    extra=f'<path d="M86 113 q14 -8 28 0 q-4 6 -14 4 q-10 2 -14 -4 Z" fill="#c9c9c9" {st}/>')

json.dump(out, open('cast3.json', 'w'))
print({k: len(v) for k, v in out.items()})
