//Schema set up
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
  contactName: {type: String, required: true, unique: true},
  company: {type: String, required: true, unique: true},
  position: String,
  phone: {type: String, required:true},
  email: String,
  address: String,
  contactType: String,
  signMfg: String,
  signSize: String,
  signHold: String,
  trialPeriod: String,
  contract: String,
  leadStatus: String,
  contactNotes: String,
  trialExpiration: {type: Date},
  ProjectedIncome: {type: Number},
  currentDate: {type: Date}

});

var contacts = mongoose.model('contacts', contactSchema);

module.exports = contacts;
