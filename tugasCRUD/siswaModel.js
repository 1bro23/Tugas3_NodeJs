let mongoose = require("mongoose");

let skema = mongoose.Schema({
  create_date:{type:Date,default:Date.now},
  nama:String,
  tanggallahir:String,
  jeniskelamin:String,
  hobi:String
});

var Contact = module.exports = mongoose.model("kontak",skema);
module.exports.get = function(callback,limit){
  Contact.find(callback).limit(limit)
};
