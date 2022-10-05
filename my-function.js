const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
    res.json({status: 200});
});

app.get('/json', (req, res) => {
  res.json({
    result: 'My name is Kautilya!'
  });
});

app.get('/say', (req, res) => {
  if (!req.query.keyword) {
    res.send("No Keyword sent!");
    return;
  }
  const {keyword} = req.query;
  
  res.status(200);
  res.send(`kautilya says ${keyword}`);
  return `kautilya says ${keyword}`;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
