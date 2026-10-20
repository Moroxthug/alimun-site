"""Cut a Webflow-export page into verbatim blocks for the Astro rebuild.

usage: python3 site/scripts/cut.py <page.html> <prefix>
Writes site/src/blocks/<prefix>/{head,nav,sNN,footer,after}.html and prints the
<html> attributes. Nothing is changed inside a block; every block can be found
byte-for-byte in the source page.
"""
import os, re, sys

src, prefix = sys.argv[1], sys.argv[2]
s = open(src, newline='').read()
out = os.path.join(os.path.dirname(__file__), '..', 'src', 'blocks', prefix)
os.makedirs(out, exist_ok=True)

def between(a, b, start=0):
    i = s.index(a, start) + len(a); j = s.index(b, i); return i, j

def line_start(i):
    return s.rfind('\n', 0, i) + 1

html = re.search(r'<html([^>]*)>', s).group(1)
h0, h1 = between('<head>', '</head>')
pw = s.index('<div class="page-wrapper">'); pw_end = s.index('\n', pw) + 1
main = line_start(s.index('<main'))
main_close = line_start(s.index('</main>'))
foot = line_start(s.index('<footer'))
foot_end = s.index('\n', s.index('</footer>')) + 1
wrap_close = s.index('</div>', foot_end); wrap_close_end = s.index('\n', wrap_close) + 1
body_end = line_start(s.index('</body>')) if '\n</body>' in s else s.index('</body>')

blocks = {'head': s[h0:h1], 'nav': s[pw_end:main], 'footer': s[foot:foot_end], 'after': s[wrap_close_end:body_end]}
secs = [m.start() for m in re.finditer(r'(?m)^[ \t]*<section\b', s[:main_close]) if m.start() > main]
for n, (a, b) in enumerate(zip(secs, secs[1:] + [main_close]), 1):
    blocks[f's{n:02d}'] = s[a:b]
for name, text in blocks.items():
    assert text in s, name
    open(os.path.join(out, name + '.html'), 'w', newline='').write(text)
print('html attrs:', html.strip())
print('blocks:', ', '.join(f'{k}({v.count(chr(10))} lines)' for k, v in blocks.items()))
