"""Launcher icons and the launch screen for the Android app from images/app (the logo on white, owner 12 Nov 2026).
Run from the repository root after `npx cap add android`: python3 mobile/icons.py"""
import glob
from PIL import Image, ImageDraw
R = 'mobile/android/app/src/main/res'
mask = Image.open('images/app/icon-maskable-512.png').convert('RGBA')
icon = Image.open('images/app/icon-512.png').convert('RGBA')
for d, legacy, fg in [('mdpi', 48, 108), ('hdpi', 72, 162), ('xhdpi', 96, 216), ('xxhdpi', 144, 324), ('xxxhdpi', 192, 432)]:
    p = f'{R}/mipmap-{d}/'
    icon.resize((legacy, legacy), Image.LANCZOS).save(p + 'ic_launcher.png')
    m = mask.resize((legacy, legacy), Image.LANCZOS)
    c = Image.new('L', (legacy, legacy), 0)
    ImageDraw.Draw(c).ellipse((0, 0, legacy - 1, legacy - 1), fill=255)
    r = Image.new('RGBA', (legacy, legacy), (0, 0, 0, 0))
    r.paste(m, (0, 0), c)
    r.save(p + 'ic_launcher_round.png')
    mask.resize((fg, fg), Image.LANCZOS).save(p + 'ic_launcher_foreground.png')
mark = mask.crop((96, 96, 416, 416))
for f in glob.glob(R + '/drawable*/splash.png'):
    w, h = Image.open(f).size
    s = int(min(w, h) * 0.32)
    bg = Image.new('RGB', (w, h), (255, 255, 255))
    mk = mark.resize((s, s), Image.LANCZOS)
    bg.paste(mk, ((w - s) // 2, (h - s) // 2), mk)
    bg.save(f)
print('icons: done')
