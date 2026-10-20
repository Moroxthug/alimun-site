"""Pixel difference report for compare.spec.cjs screenshots: python3 diff.py <folder>"""
import glob, os, sys
from PIL import Image, ImageChops
d = sys.argv[1]
def px(x, y):
    a = Image.open(x).convert('RGB'); b = Image.open(y).convert('RGB')
    if a.size != b.size: return f'size {a.size} vs {b.size}'
    return sum(1 for p in ImageChops.difference(a, b).get_flattened_data() if max(p) > 24)
for f in sorted(glob.glob(os.path.join(d, 'old-*.png'))):
    k = os.path.basename(f)[4:-4]
    print(f'{k:14} old vs new: {px(f, os.path.join(d, "new-" + k + ".png"))!s:>8} | old vs old (noise): {px(f, os.path.join(d, "old2-" + k + ".png"))!s:>8}')
