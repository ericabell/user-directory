const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require('./public/data.js');

let app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/', (req, res) => {
  res.render('directory', data);
})

app.listen(3000, () => {
  console.log('Listening on 3000.');
})
