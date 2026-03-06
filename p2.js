fetch('/post-comment', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'comment-author=test&comment2=' + encodeURIComponent('loaded')
});