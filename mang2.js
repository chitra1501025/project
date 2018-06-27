
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/anju');

var daSchema = mongoose.Schema({
  Name: {type:String}, 
  Email:{type:String},
  Subject:{type:String},
  Message: {type:String}
});


var l= mongoose.model('l', daSchema,'nad');

module.exports=l;
