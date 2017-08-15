const express = require('express');
const data = require('./public/data.js');

let app = express();

app.get('/', (req, res) => {
  res.send('hello world');
})

app.listen(3000, () => {
  console.log('Listening on 3000.');
})
