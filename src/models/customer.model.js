let mongoose = require('mongoose');

const server = 'http://localhost:27017';
const database = 'rest-api-workshop';
const user = 'username';
const password = 'password;

mongoose.set('useCreateIndex', true)
mongoose.connect(`mongodb://${user}:${password}@localhost:27017/${database}` ,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let CustomerSchema = new mongoose.Schema({
  name : String,
  email:{
    type : String,
    required : true,
    unique : true
  }
});

module.exports = mongoose.model('Customer', CustomerSchema);
