# Builds /preview/home-live/ (owner's mockup D) from the built homepage site/dist/index.html and site/src/blocks/mockups/home-live.html. Run after npm --prefix site run build.
import re,os
R='/home/user/alimun-site'
t=open(R+'/site/dist/index.html').read()
b=open(R+'/site/src/blocks/mockups/home-live.html').read()
part=lambda n: re.search(r'<!--'+n+r'-->(.*?)<!--/'+n+r'-->',b,re.S).group(1)
t=re.sub(r'<head>','<head>\n  <base href="/">',t,count=1)
t=re.sub(r'<meta name="robots"[^>]*>','',t)
t=re.sub(r'<title>.*?</title>','<title>Preview – Homepage D – Alimun</title>\n  <meta name="robots" content="noindex, nofollow">',t,count=1,flags=re.S)
t=re.sub(r'<link[^>]*rel="(canonical|alternate)"[^>]*>\s*','',t)
t=re.sub(r'<script type="application/json" id="alimun-lang-alternates">.*?</script>','',t,flags=re.S)
t=re.sub(r'<script type="application/ld\+json">.*?</script>','',t,flags=re.S)
assert t.count('<section class="ln">')==1
t=t.replace('<section class="ln">',part('TUTOR')+'\n<section class="ln">')
i=[m.start() for m in re.finditer(r'class="sx_row[ "]',t)][1]; j=t.index('</p>',i)+4
t=t[:j]+part('TRY')+t[j:]
t=t.replace('</body>',part('ASSETS')+'\n</body>',1)
os.makedirs(R+'/preview/home-live',exist_ok=True); open(R+'/preview/home-live/index.html','w').write(t)
print(len(t), t.count('noindex'), 'canonical' in t)
