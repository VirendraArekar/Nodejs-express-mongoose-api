let express = require('express');
let app = express();

let CustomerModel = require('../models/customer.model');

app.post('/customer',(req, res) => {
  console.log(req.body);
  if(!req.body){
    return res.status(400).send('Request not found.');
  }

  let model = new CustomerModel(req.body)
  model.save()
     .then(doc => {
       if(!doc || doc.length === 0){
         return res.status(500).send(doc)
       }
       res.status(201).send(doc)
     })
     .catch(err => {
       res.status(500).send(err)
     })
});

app.put('/customer',(req, res) => {
  if(!req.query.email) {
    return res.status(400).send({ code : 400, status:'error', message : 'Missing URL parameter email'})
  }
  CustomerModel.findOneAndUpdate({
    email : req.query.email
  }, req.body, { new : true})
  .then(doc => {
    res.json(doc)
  })
  .catch(err => {
    res.status(500).json(err)
  })
})

app.delete('/customer',(req, res) => {
  if(!req.query.email) {
    return res.status(400).send({ code : 400, status:'error', message : 'Missing URL parameter email'})
  }
  CustomerModel.findOneAndRemove({
    email : req.query.email
  })
  .then(doc => {
    res.json(doc)
  })
  .catch(err => {
    res.status(500).json(err)
  })
})


app.get('/customer',(req, res) => {
  if(!req.query.email) {
    return res.status(400).send({ code : 400, status:'error', message : 'Missing URL parameter email'})
  }
  CustomerModel.findOne({
    email : req.query.email
  })
  .then(doc => {
    res.json(doc)
  })
  .catch(err => {
    res.status(500).json(err)
  })
})


module.exports = app
