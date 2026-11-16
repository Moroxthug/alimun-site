# Help drawing candidates (docs/HELP_PLAN.md; owner, 16 Nov 2026: "create a new drawing for help").
# Same sticker style and palette as cast2.py. Writes help.json; board: help-board.html.
import json, importlib.util, math
spec = importlib.util.spec_from_file_location('c2', 'cast2.py'); c2 = importlib.util.module_from_spec(spec)
import sys; src = open('cast2.py').read().split('c={}')[0]; exec(src)  # F,G,L,INK,C,M,S,B,W, st, face, svg
def think(cx, cy, s=1):  # looking up, small "o" mouth: for "let me check"
    out = ''
    for d in (-1, 1):
        x = cx + d*14*s
        out += f'<circle cx="{x}" cy="{cy}" r="{5*s}" fill="{INK}"/><circle cx="{x+1.5*s}" cy="{cy-2.5*s}" r="{1.6*s}" fill="{W}"/>'
    out += ''.join(f'<ellipse cx="{cx+d*20*s}" cy="{cy+9*s}" rx="{5*s}" ry="{3*s}" fill="#ff7b6b" opacity=".45"/>' for d in (-1, 1))
    out += f'<ellipse cx="{cx+3*s}" cy="{cy+12*s}" rx="{3.5*s}" ry="{4*s}" fill="{INK}"/>'
    return out
FACES = {'happy': lambda x, y: face(x, y, 1, 'happy'), 'think': lambda x, y: think(x, y), 'glad': lambda x, y: face(x, y, 1, 'closed')}
out = {}

# A. The lifebuoy: "we've got you". White ring with coral bands, a rope, a little wave.
def buoy(mood):
    r_mid, circ = 44, 2*math.pi*44; seg = circ/4
    ring = (f'<path d="M58 154 q14 -10 28 0 t28 0 t28 0" fill="none" stroke="{M}" stroke-width="6" stroke-linecap="round"/>'
            f'<circle cx="100" cy="96" r="44" fill="none" stroke="{W}" stroke-width="34"/>'
            f'<circle cx="100" cy="96" r="44" fill="none" stroke="{C}" stroke-width="34" stroke-dasharray="{seg*0.38:.2f} {seg*0.62:.2f}" transform="rotate({-45-360*0.38/8:.2f} 100 96)"/>'
            f'<circle cx="100" cy="96" r="61" fill="none" {st}/><circle cx="100" cy="96" r="27" fill="#e9f6f1" {st}/>'
            f'<path d="M100 35 q-34 4 -48 30 M148 58 q16 18 12 46" fill="none" stroke="{G}" stroke-width="3" stroke-dasharray="2 6" stroke-linecap="round"/>')
    arms = (f'<path d="M42 104 q-14 -4 -16 -18" fill="none" {st}/><circle cx="25" cy="83" r="6" fill="{W}" {st}/>'
            f'<path d="M158 104 q14 6 18 22" fill="none" {st}/><circle cx="177" cy="129" r="6" fill="{W}" {st}/>')
    return svg(ring + arms + FACES[mood](100, 92), 'bob')

# B. The lantern: "I'll light the way". Gold frame, sunflower glow, face on the glass.
def lantern(mood):
    body = (f'<path d="M100 18 v14" {st}/><path d="M86 32 q14 -14 28 0" fill="none" {st}/>'
            f'<path d="M64 44 h72 l-8 12 h-56 Z" fill="{G}" {st}/>'
            f'<rect x="66" y="56" width="68" height="92" rx="16" fill="{S}" {st}/>'
            f'<rect x="76" y="64" width="48" height="76" rx="10" fill="#fff3cf"/>'
            f'<path d="M100 56 v-0" {st}/><path d="M64 148 h72 l-6 14 h-60 Z" fill="{G}" {st}/>'
            f'<ellipse cx="100" cy="182" rx="40" ry="7" fill="{F}" opacity=".15"/>'
            f'<path d="M50 76 l-10 -4 M48 100 h-12 M50 124 l-10 4 M150 76 l10 -4 M152 100 h12 M150 124 l10 4" stroke="{S}" stroke-width="5" stroke-linecap="round"/>')
    return svg(body + FACES[mood](100, 98), 'sway')

# C. The bubble: an approved speech bubble that came to life, one hand waving.
def bubble(mood):
    body = (f'<path d="M48 40 h104 q20 0 20 20 v62 q0 20 -20 20 h-58 l-26 24 l4 -24 h-24 q-20 0 -20 -20 v-62 q0 -20 20 -20 Z" fill="{L}" {st}/>'
            f'<path d="M172 70 q16 -6 18 -26" fill="none" {st}/><circle cx="190" cy="40" r="7" fill="{L}" {st}/>'
            f'<path d="M28 108 q-14 6 -14 22" fill="none" {st}/><circle cx="14" cy="134" r="7" fill="{L}" {st}/>'
            f'<ellipse cx="100" cy="186" rx="40" ry="7" fill="{F}" opacity=".15"/>'
            f'<path d="M150 18 l4 -10 M162 24 l8 -6 M138 18 l-2 -10" stroke="{F}" stroke-width="3" stroke-linecap="round"/>')
    return svg(body + FACES[mood](100, 88), 'bob')

for name, fn in (('buoy', buoy), ('lantern', lantern), ('bubble', bubble)):
    out[name] = {m: fn(m) for m in FACES}
json.dump(out, open('help.json', 'w'), indent=1)
print('ok', {k: len(v) for k, v in out.items()})
