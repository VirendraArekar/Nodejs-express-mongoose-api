let express = require('express');

let app = express();

app.get('/person',(req, res) => {
  res.status(202).send(req.query);
});

app.get('/person/:name/:surname',(req, res) => {
  res.status(202).send(req.params);
});

app.get('/person/error',(req,res) => {
  throw new Error('This is forced error');
});

module.exports = app
