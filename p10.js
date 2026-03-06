fetch('/report-admin',{
 method:'POST',
 headers:{'Content-Type':'application/x-www-form-urlencoded'},
 body:'source_page='+encodeURIComponent('http://127.0.0.1:8000/')
});