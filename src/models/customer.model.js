let mongoose = require('mongoose');

const server = 'http://localhost:27017';
const database = 'rest-api-workshop';
const user = 'virendra';
const password = 'viren45mca';

mongoose.set('useCreateIndex', true)
mongoose.connect(`mongodb://localhost:27017/${database}` ,{
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
