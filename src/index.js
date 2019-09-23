const express = require('express');
const app = express();
const path = require('path');
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public/'));

app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
  next();
});

let personRoute = require('./routes/person');
app.use(personRoute);

let customerRoute = require('./routes/customer');
app.use(customerRoute);

// 404 not found
app.use((req, res, next) => {
  res.status(404).send({ code : 404, status : 'error',message : 'We think you are lost'});
});

// 500 internel error
app.use((err,req, res, next) => {
  console.error(err.stack);
  res.sendFile(path.join(__dirname,'../public/500.html'));
});




const PORT = process.env.PORT || 80;;

app.listen(PORT, () => {
  console.info(`Listen to port ${PORT}.`);
})
