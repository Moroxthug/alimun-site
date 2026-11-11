const { chromium } = require('playwright');
const specs = JSON.parse(require('fs').readFileSync(process.argv[2], 'utf8'));
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:600,height:260},deviceScaleFactor:2});
await p.goto('http://localhost:5055/__hero.html');await p.waitForFunction(()=>window.hero);
for (const [name,spec] of Object.entries(specs)){await p.evaluate(s=>window.hero(s),spec);await p.waitForTimeout(150);
 await p.evaluate(()=>document.querySelectorAll('svg *').forEach(e=>{e.style.animation='none'}));
 await p.locator('#h').screenshot({path:`${process.argv[3]}/hero-${name}.png`,omitBackground:true});}
await b.close();})();
