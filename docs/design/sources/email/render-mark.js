const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({deviceScaleFactor:3});await p.goto('http://localhost:5055/__cast.html');
await p.evaluate(()=>{document.body.style.background='transparent';document.body.innerHTML='<div id=m style="width:44px;height:44px;border-radius:50%;background:#f0efe9;display:flex;align-items:center;justify-content:center">'+window.AlimunCast.book('happy').replace('<svg','<svg style="width:27px;height:29px;display:block;margin-top:2px"')+'</div>';document.querySelectorAll('svg *').forEach(e=>e.style.animation='none')});
await p.locator('#m').screenshot({path:'/home/user/alimun-site/images/email/mark.png',omitBackground:true});await b.close();})();
