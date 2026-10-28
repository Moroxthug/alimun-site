# Builds /preview/<page>-alive/ (owner's review of the inner pages in the homepage style) from the built pages in
# site/dist and site/src/blocks/alive.html. Run after npm --prefix site run build. Removed once the owner decides.
import re,os
R=os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
blk=open(R+'/site/src/blocks/alive.html').read()
for page,name in [('tiers','Tiers'),('services','Services'),('about-us','About'),('contact','Contact')]:
  t=open(R+'/site/dist/'+page+'.html').read()
  t=re.sub(r'<head>','<head>\n  <base href="/">',t,count=1)
  t=re.sub(r'<meta name="robots"[^>]*>','',t)
  t=re.sub(r'<title>.*?</title>','<title>Preview – '+name+' alive – Alimun</title>\n  <meta name="robots" content="noindex, nofollow">',t,count=1,flags=re.S)
  t=re.sub(r'<link[^>]*rel="(canonical|alternate)"[^>]*>\s*','',t)
  t=re.sub(r'<script type="application/json" id="alimun-lang-alternates">.*?</script>','',t,flags=re.S)
  t=re.sub(r'<script type="application/ld\+json">.*?</script>','',t,flags=re.S)
  assert t.count('</body>')==1
  band=open(R+'/site/src/blocks/home/v2/band.html').read()
  for anchor in {'services':'<section id="explore" class="tl"','about-us':'<section class="ah"'}.get(page,'').split('|'):
    if anchor: assert t.count(anchor)==1; t=t.replace(anchor,band+'\n'+anchor,1)
  t=t.replace('</body>',blk+'\n</body>',1)
  os.makedirs(R+'/preview/'+page+'-alive',exist_ok=True); open(R+'/preview/'+page+'-alive/index.html','w').write(t)
  print(page,len(t),t.count('noindex'),'canonical' in t)
