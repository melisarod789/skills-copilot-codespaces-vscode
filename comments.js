// create web server
// create a route for comments
// respond with a JSON object containing the comments
// start the server on port 3000

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.json({
    comments: [
      { username: 'Todd', comment: 'lololol' },
      { username: 'Skyler', comment: 'lmao' },
      { username: 'Sk8rBoi', comment: 'roflcopter!' },
      { username: 'Ada', comment: 'burrito cat' }
    ]
  });
});

app.listen(3000);
